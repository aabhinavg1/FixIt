---
title: "Why MachineBlockPlacement Made the Wrong Bet: Static Probabilities, Fall-Through, and PGO"
description: "Part 2 of the parse-loop case study: BranchProbabilityInfo without PGO, the backward shared-increment layout, and how profile branch_weights restore O1-like misses."
keywords:
  - MachineBlockPlacement branch probability
  - BranchProbabilityInfo llvm
  - clang profile guided optimization parse loop
  - branch_weights llvm ir
  - static branch probability compiler
  - disable-block-placement clang
  - clang O2 slower than O1
  - fall-through branch layout
  - compilersutra llvm case study
  - pgo branch misprediction
---

import AdBanner from '@site/src/components/AdBanner';
import Head from '@docusaurus/Head';

<Head>
  <meta name="description" content="Part 2: why MachineBlockPlacement laid out a CSV parse loop badly without profile data, and how branch_weights from PGO fix branch misses." />
</Head>

# Why MachineBlockPlacement Made the Wrong Bet: Static Probabilities, Fall-Through, and PGO

Part 1 named the pass. [**When Clang `-O2` Gets Slower**](/docs/articles/when-o2-layout-hurts-machineblockplacement) showed that **MachineBlockPlacement** is where the parse-loop regression lives — `-mllvm -disable-block-placement` and `opt-bisect` limit **309** are the proof.

What part 1 did **not** show is **what branch probabilities MachineBlockPlacement consumed** before it laid out the separator check as backward taken jumps.

That is what this article traces: workload counts → IR metadata → layout → misses, with and without PGO.

How often this shows up outside the lab repro: [Part 3 — 329-benchmark prevalence screen](/docs/articles/machineblockplacement-329-benchmark-prevalence-and-fix) (~**1.2%** hit rate in llvm-test-suite + HPC externals).

:::info Mechanism in 30 seconds

<pre>
No PGO
  ↓
switch has no branch_weights
  ↓
static BranchProbabilityInfo guess
  ↓
MBP → backward je to shared inc
  ↓
~2.6× branch misses (Clang 18 -O2)

PGO
  ↓
branch_weights 0 / 2097152 / 1048576
  ↓
forward je + fall-through inc
  ↓
misses ≈ O1 (MBP on or off)
</pre>

:::

### Evidence 1 — Part 1 baseline (Clang 24 stage1, n=100)

**`-O1`:** 0.657M branch misses, 64.9 ms · **`-O2`:** 1.730M, 71.9 ms · **`-O2 -mllvm -disable-block-placement`:** 0.660M, 66.3 ms. Pass identified: **MachineBlockPlacement**. Full hunt: [part 1](/docs/articles/when-o2-layout-hurts-machineblockplacement).

### Evidence 2 — Workload branch mix

Lines are `a,b,c\n`. At the separator check, **`,` is ~67%** and **`\n` is ~33%** — both hot, not one cold branch. Counts: **2 097 152 / 1 048 576 / ~0** (comma / newline / neither) for `N = 1048576`.

### Evidence 3 — IR without profile

`-O2` IR has a `switch i8` for `,` and `\n` into a **shared increment block**, with **no `branch_weights`**. MachineBlockPlacement runs on static **BranchProbabilityInfo** after that.

### Evidence 4 — IR with PGO

`-fprofile-use` attaches `!59 = !{!"branch_weights", i32 0, i32 2097152, i32 1048576}` — matching Evidence 2 exactly.

### Evidence 5 — Layout and matrix (revalidated 2026-08-28)

**Clang 18 `-O2`, no profile:** backward `je` → **1.724M** misses, **69.3 ms** (n=100). **`-O2 -fprofile-use`:** forward fall-through inc → **0.653M** misses, **63.3 ms**; MBP on vs off unchanged once weights exist.

:::tip Takeaway
**MachineBlockPlacement is not missing from `-O2` — profile metadata is.** Without `branch_weights`, static guesses on a two-hot shared-target switch are enough to pick a layout this CPU mispredicts heavily.
:::

The point is not “turn off block placement in production.” The point is **what input the pass needs** — and that PGO (or better static weights) supplies it.

<div>
  <AdBanner />
</div>

## 1. Branch mix at the separator

Same hot kernel as [part 1](/docs/articles/when-o2-layout-hurts-machineblockplacement):

```c
if (p < end && (*p == ',' || *p == '\n'))
  p++;
```

Input: `N` lines of `a,b,c\n` (seed `29`). Three fields ⇒ **three separator checks per line**.

| Outcome | When | Count (`N = 1048576`) | Share |
|---------|------|----------------------:|------:|
| `,` | after field 1 or 2 | 2 097 152 | **66.7%** |
| `\n` | after field 3 | 1 048 576 | **33.3%** |
| neither | edge / bad line | ~0 on this input | ~0% |

**3 145 728** separator checks total. Both `,` and `\n` are hot; default is cold.

LLVM lowers the test to a **`switch i8`** with **one shared target** for comma and newline — the increment block. That CFG shape is where **BranchProbabilityInfo** feeds **MachineBlockPlacement**: two frequent edges into the same block, plus a cold default.

**Artifacts:** <a href="/files/articles/machineblockplacement-wrong-bet-static-probabilities-pgo/" target="_blank" rel="noopener">bundle</a> · <a href="/files/articles/machineblockplacement-wrong-bet-static-probabilities-pgo/highlights.json" target="_blank" rel="noopener">highlights.json</a> · <a href="/files/articles/machineblockplacement-wrong-bet-static-probabilities-pgo/source/machine_block_placement_csv_parse.c" target="_blank" rel="noopener">source</a>

## 2. Without PGO: no `branch_weights`

Emit IR at `-O2` (Clang 24 stage1, no profile):

```llvm
; ir/parse.O2.ll — separator (abbrev.)
%61 = load i8, ptr %54, align 1
switch i8 %61, label %64 [
  i8 44, label %62    ; ','
  i8 10, label %62    ; '\n'
]
```

No `!prof`, no `branch_weights`. The middle-end already had a similar `switch` at `-O1`; part 1 ruled out SimplifyCFG / jump-threading as the miss driver. The regression lands **after** IR is stable — when **MachineBlockPlacement** reads **static** branch probabilities on the machine CFG.

Without profile metadata, those probabilities come from LLVM heuristics (switch defaults, loop structure, symmetry guesses). On this switch, the static guess is wrong enough that MBP **outlines the shared increment** and emits **backward taken `je`** on both hot compares — the layout from part 1 §8.

## 3. With PGO: measured weights on the switch

Profile workflow (Clang **18.1.3** here — our stage1 tree lacks `libclang_rt.profile`; Ubuntu’s package links cleanly):

```bash
clang -O2 -fprofile-generate -o parse.gen machine_block_placement_csv_parse.c
LLVM_PROFILE_FILE=default.profraw ./parse.gen 1048576
llvm-profdata merge -output=default.profdata default.profraw
clang -O2 -fprofile-use=default.profdata -o parse.O2.pgo machine_block_placement_csv_parse.c
```

Same `switch`, now annotated (<a href="/files/articles/machineblockplacement-wrong-bet-static-probabilities-pgo/ir/parse.O2_pgo.ll" target="_blank" rel="noopener">`parse.O2_pgo.ll`</a>):

```llvm
switch i8 %60, label %63 [
  i8 44, label %61
  i8 10, label %61
], !prof !59

!59 = !{!"branch_weights", i32 0, i32 2097152, i32 1048576}
;                      default   comma      newline
```

**0 / 2 097 152 / 1 048 576** — matches §1 by construction (one training run on the same input). PGO recorded the branch histogram MachineBlockPlacement needed; it did not invent a new heuristic.

## 4. Assembly: layout tracks metadata

**Clang 18 `-O2`, no profile** — backward shared increment (<a href="/files/articles/machineblockplacement-wrong-bet-static-probabilities-pgo/asm/parse.O2_c18.asm" target="_blank" rel="noopener">asm</a>):

```text
1320:  cmp    $0x2c,%edx
1323:  je     12f0                ; backward → shared inc
1325:  cmp    $0xa,%edx
1328:  je     12f0
132a:  jmp    12f3                ; neither
```

Goes with **1.724M** branch misses, **69.3 ms** (Clang 18, n=100 — revalidated 2026-08-28).

**`-O2 -fprofile-use`, MBP on** — forward fall-through increment (<a href="/files/articles/machineblockplacement-wrong-bet-static-probabilities-pgo/asm/parse.O2_pgo.asm" target="_blank" rel="noopener">asm</a>):

```text
1225:  cmp    $0x2c,%edx
1228:  je     +5
122a:  cmp    $0xa,%edx
122d:  jne    +3
122f:  inc    %rcx                ; fall-through
```

Same shape as `-O1` / `-O2 -disable-block-placement` in part 1. Profile data recovered the layout **without** disabling the pass.

## 5. MBP × PGO matrix

**Machine:** AMD Ryzen 7 9700X · **Input:** `N = 1048576` · **Runs:** 100 (`perf stat -r 100`) · **Compiler:** Clang 18.1.3 · **Revalidated:** 2026-08-28

| Build | MBP | PGO | Time | Branch misses | vs `-O1` misses |
|-------|:---:|:---:|-----:|--------------:|----------------:|
| `-O1` | — | OFF | **64.0 ms** | **0.654M** | 1.00× |
| `-O2` | ON | OFF | 69.3 ms | **1.724M** | **2.64×** |
| `-O2 -mllvm -disable-block-placement` | OFF | OFF | **63.7 ms** | **0.654M** | 1.00× |
| `-O2 -fprofile-use` | ON | ON | **63.3 ms** | **0.653M** | 1.00× |
| `-O2 -fprofile-use -mllvm -disable-block-placement` | OFF | ON | **63.7 ms** | **0.654M** | 1.00× |

<a href="/files/articles/machineblockplacement-wrong-bet-static-probabilities-pgo/highlights.json" target="_blank" rel="noopener">highlights.json</a> · <a href="/files/articles/machineblockplacement-wrong-bet-static-probabilities-pgo/scripts/run_pgo_matrix.sh" target="_blank" rel="noopener">`run_pgo_matrix.sh`</a> · <a href="/files/articles/machineblockplacement-wrong-bet-static-probabilities-pgo/scripts/revalidate.sh" target="_blank" rel="noopener">`revalidate.sh`</a>

**Without PGO:** only disabling MBP restores misses — static probabilities are the gap.

**With PGO:** misses and time both return to `-O1` levels whether MBP is on or off. The **`branch_weights`** attachment drives layout; toggling placement is a second-order effect once counts are correct.

### Part 1 stage1 (historical) vs current tip

Part 1 primary table: Clang 24 stage1 **`196786fa…`**, n=100 — `-O2` **1.730M** misses, **71.9 ms**; `-O2np` **0.660M**, **66.3 ms** (<a href="/files/articles/when-o2-layout-hurts-machineblockplacement/highlights.json" target="_blank" rel="noopener">bundled</a>).

**Revalidated today** on the same testcase, same machine:

| Compiler | `-O2` misses | `-O2` time | Bad backward layout? |
|----------|-------------:|-----------:|:--------------------:|
| Clang 18.1.3 | **1.724M** (2.64×) | 69.3 ms | yes |
| Stage1 **`b7dc8e35…`** (current tip) | **0.654M** (1.00×) | 63.6 ms | **no** |

Mechanism in part 1/part 2 still holds on **Clang 18**. Current stage1 tip already emits forward-increment `-O2` on this box — use Clang 18 to reproduce the regression for teaching and bisect.

## 6. Pipeline

```text
if (*p==',' || *p=='\n') p++
  ↓
switch i8 { 44→inc, 10→inc, default→skip }
  ↓
BranchProbabilityInfo  ← static guess (no PGO) or branch_weights (PGO)
  ↓
MachineBlockPlacement
  ↓
fall-through vs taken encoding at separator
  ↓
branch-miss counters
```

The “wrong bet” is not “delete MachineBlockPlacement.” It is **optimizing layout against branch odds that do not match a two-hot, shared-target char switch when profile metadata is absent.** PGO supplies the odds; `-disable-block-placement` is part 1’s diagnostic override.

## 7. If you hit this in the field

**No PGO, `-O2` slower, `branch-misses` spike on a parse-style loop:** compare against `-mllvm -disable-block-placement` on **that translation unit** to test a layout hypothesis. Diagnostic only — global placement-off can regress code that relied on fall-through layout elsewhere.

**Shipping PGO:** train on representative inputs. Switches like §2 get `branch_weights`; MBP can stay enabled.

**Upstream:** [llvm/llvm-project#218248](https://github.com/llvm/llvm-project/issues/218248). Durable fix is likely **better static weights for multi-arm char tests** (or honoring switch symmetry) when metadata is missing — not removing the pass.

## 8. Reproduce

Uses the **part 1 testcase** (`machine_block_placement_csv_parse.c`).

```bash
cd static/files/articles/machineblockplacement-wrong-bet-static-probabilities-pgo
chmod +x scripts/run_pgo_matrix.sh scripts/revalidate.sh

# Full matrix (build + perf n=100)
./scripts/run_pgo_matrix.sh clang-18 1048576 100

# Or revalidate from part-1 source path
./scripts/revalidate.sh /tmp/mbb_revalidate

# Correctness
./results/perf/parse.O2_c18 1048576    # expect PASS sum=15723844160

# IR / asm checks
grep -A3 'switch i8' ir/parse.O2.ll
grep 'branch_weights' ir/parse.O2_pgo.ll | head
grep -A5 'cmp.*0x2c' asm/parse.O2_c18.asm
grep -A5 'cmp.*0x2c' asm/parse.O2_pgo.asm
```

`kernel.perf_event_paranoid=0` if counters are blocked.

## 9. Limitations

- One kernel, Zen 5. Predictor mechanism inferred from counters + layout, not uarch simulation.
- PGO trained on the **benchmark input** — best case for weight accuracy.
- Correlation chain (metadata → layout → misses) is strong; full proof through predictor tables is not claimed.
- Check your **compiler revision** — newer stage1 may no longer emit the bad default `-O2` layout.

## References

- [Part 1: When Clang `-O2` Gets Slower](/docs/articles/when-o2-layout-hurts-machineblockplacement)  
- [Part 3: 329-benchmark prevalence and LLVM fix](/docs/articles/machineblockplacement-329-benchmark-prevalence-and-fix)  
- LLVM [MachineBlockPlacement](https://llvm.org/doxygen/MachineBlockPlacement_8cpp.html) · [BranchProbabilityInfo](https://llvm.org/doxygen/classllvm_1_1BranchProbabilityInfo.html)  
- [llvm/llvm-project#218248](https://github.com/llvm/llvm-project/issues/218248)  
- <a href="/files/articles/machineblockplacement-wrong-bet-static-probabilities-pgo/" target="_blank" rel="noopener">Part 2 artifacts</a> · <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/" target="_blank" rel="noopener">Part 1 artifacts</a>

:::note Lab note
Matrix revalidated **2026-08-28**: Clang 18.1.3, `perf` n=100, testcase from <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/source/machine_block_placement_csv_parse.c" target="_blank" rel="noopener">part 1 source</a>. All builds PASS `sum=15723844160` at `N=1048576`. Current stage1 tip (`b7dc8e35…`) does **not** reproduce the bad `-O2` layout on this machine.
:::
