---
title: "When Clang -O2 Gets Slower: From Perf Counters to MachineBlockPlacement"
description: "From perf counters through csperf and AMD uProf to -disable-block-placement and opt-bisect: a parse loop where Clang -O2 is slower than -O1 because MachineBlockPlacement changes fall-through layout."
keywords:
  - clang O2 slower than O1
  - llvm machine block placement
  - MachineBlockPlacement
  - disable-block-placement clang
  - llvm opt-bisect-limit
  - branch misprediction compiler
  - compilersutra-perf
  - clang 24 stage1
  - parse loop layout
  - compilersutra llvm case study
---

import AdBanner from '@site/src/components/AdBanner';
import Head from '@docusaurus/Head';

<Head>
  <meta name="description" content="Case study: Clang -O2 slower than -O1 on a parse loop. MachineBlockPlacement is the pass; -disable-block-placement and opt-bisect are the proof." />
</Head>

# When Clang `-O2` Gets Slower: From Perf Counters to MachineBlockPlacement

You are told a simple story:

> Raise the optimization level. The program gets faster.

On the same parser, on the same Zen 5 CPU (AMD Ryzen 7 9700X), Clang **`-O2` executes fewer instructions than `-O1`, yet takes about 10% longer.**

That is the contradiction this article investigates. We re-checked it on **Clang 24 stage1** (`build-stage1/bin/clang`, commit `196786fa…`) and first saw it on Clang 18.1.3.

:::info Investigation in 30 seconds

<pre>
-O1
  ↓
0.657M branch misses
  ↓
64.9 ms

-O2
  ↓
MachineBlockPlacement
  ↓
1.730M branch misses
  ↓
71.9 ms

-O2 + disable-block-placement
  ↓
0.660M branch misses
  ↓
66.3 ms
</pre>

:::

### Evidence 1 — Runtime

**64.9 ms → 71.9 ms** (`-O1` vs `-O2`, median of 100 runs)

### Evidence 2 — Branch misses

**0.657M → 1.730M** (same builds)

### Evidence 3 — Intervention (pass family)

Disable MBP (`-O2 -mllvm -disable-block-placement`): **1.730M → 0.660M** branch misses; time **71.9 ms → 66.3 ms**. Disabling this pass family is **sufficient to prevent** the observed regression on this workload (see §9 for causal limits).

### Evidence 4 — Pass identification (`opt-bisect`)

`opt-bisect` on Clang 18:

```text
BISECT: running pass (309) Branch Probability Basic Block Placement on function (main)
```

### Evidence 5 — Assembly

Different block layout at the separator check: **forward fall-through increment** (`-O1` / `-O2np`) vs **backward shared increment** (default `-O2`). Details in §8.

:::tip Takeaway
**When time and instruction count disagree, open the miss counters, then name the pass.**
:::

The point is not “never use `-O2`.” The point is how to go from a regression to a specific LLVM pass using counters, one flag, assembly, and `opt-bisect`.

<div>
  <AdBanner />
</div>

## 1. The surprising result

Same source, same input (`N = 1048576`), same machine. Median of 100 runs with Linux `perf`:

| Build | Time | Instructions | Branch misses |
|-------|-----:|-------------:|--------------:|
| `-O1` | **64.9 ms** | 1.993B | **0.657M** |
| `-O2` | 71.9 ms | **1.976B** | **1.730M** |
| `-O2` + no block placement | **66.3 ms** | 1.976B | **0.660M** |

(`-O2` + no block placement = `-O2 -mllvm -disable-block-placement`.)

**`-O2` vs `-O1`:** time **+10.7%**, instructions **−0.8%**, branch misses **2.63×**.

Disabling block placement keeps O2-level instructions but drops misses and time back toward `-O1`. The measurements strongly suggest the regression is **not** caused by a larger retired-instruction count; the dominant observed difference is the increase in branch misses. Sections 6–8 associate that increase with MachineBlockPlacement layout through intervention and assembly.

## 2. The testcase

We need a tiny, deterministic program where:

1. the hot path is a **real parse loop** (not a synthetic `if` toy),
2. the branch mix is **regular but not trivial** (`,` and `\n` are both common),
3. we can prove the binary is still **correct** after every optimization level.

**Artifacts (source + numbers in one place):** open the <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/" target="_blank" rel="noopener">artifact index</a> (or <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/README.md" target="_blank" rel="noopener">README.md</a>).

| | |
|--|--|
| Source | <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/source/machine_block_placement_csv_parse.c" target="_blank" rel="noopener">machine_block_placement_csv_parse.c</a> |
| Headline numbers | <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/highlights.json" target="_blank" rel="noopener">highlights.json</a> |
| Experiment A (`perf`, n=100) | <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/results/perf/summary.json" target="_blank" rel="noopener">perf summary</a> |
| Experiment B (`csperf`, n=100) | <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/results/csperf/summary.json" target="_blank" rel="noopener">csperf summary</a> |
| Experiment C (AMD uProf) | <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/results/amduprof/" target="_blank" rel="noopener">uProf index</a> · <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/results/amduprof/highlights.json" target="_blank" rel="noopener">highlights</a> |

Research-kit path: `testcases/machine_block_placement_csv_parse.c`.

**Build input (not the bottleneck).** Fixed LCG seed `29` writes `N` lines like `1234,5678,9012\n`. For `N = 1048576`, a correct parse must yield sum `15723844160`.

**Hot kernel (what we care about):**

```c
while (p < end) {
  char *q;
  long x = strtol(p, &q, 10);
  if (q == p)
    break;
  sum += x;
  p = q;
  if (p < end && (*p == ',' || *p == '\n'))
    p++;
}
```

Logical CFG of the separator check:

```text
              *p == ',' ?
             /           \
           yes            no
            |              |
         p++            *p == '\n' ?
                            /      \
                          yes       no
                           |         |
                          p++      (no skip)
```

At the separator check, commas and newlines are both frequent outcomes, while the “neither” case is relatively uncommon. (They are not equally frequent on every individual compare: `,` is tested first; `\n` is only tested when that fails.) MachineBlockPlacement does not optimize “which character is most common” directly; it consumes **LLVM branch probabilities** on the machine CFG and chooses block order so likely edges can fall through. Without PGO, those probabilities are static estimates:

```text
IR CFG
  ↓
BranchProbabilityInfo
  ↓
Machine CFG
  ↓
MachineBlockPlacement
  ↓
block order → fall-through / taken branches → machine code
```

The follow-up article asks what probabilities LLVM assigns to `,`, `\n`, and “neither,” and whether that explains the shared-increment layout at `-O2`.

Full file with expected-sum checks: <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/source/machine_block_placement_csv_parse.c" target="_blank" rel="noopener">machine_block_placement_csv_parse.c</a>. All measured data is in the <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/" target="_blank" rel="noopener">artifact index</a>. A minimal pasteable `main` is also in the appendix below.

## 3. Measure before theorizing

**Machine:** AMD Ryzen 7 9700X (Zen 5)  
**Input:** `1048576` lines, seed `29`  
**Compiler:** Clang 24.0.0git stage1 (`…196786fa…`)

We run **three separate experiments** with distinct roles. Absolute counter values differ because the runners differ; we use them to verify **direction and magnitude**, not to merge absolute numbers.

| Role | Tool | Why it is here |
|------|------|----------------|
| **Primary evidence** | Linux `perf` | Direct `perf stat` on the binary; headline table for this article |
| **Independent benchmark harness** | [CompilerSutra Perf](https://pypi.org/project/compilersutra-perf/) (`csperf`) | Same builds, different runner — confirms the regression is not a `perf` artifact |
| **Microarchitectural corroboration** | AMD uProf 5.2 | Branch-hotspot view on Zen 5; checks the story at frame level |

### Experiment A — Primary evidence: Linux `perf`

Times the binary directly. Median of **100** runs. Primary table for this article.

| Build | Time | Instructions | Branch misses | IPC |
|-------|-----:|-------------:|--------------:|----:|
| `-O1` | **0.0649 s** | 1.993B | **0.657M** | 5.77 |
| `-O2` | 0.0719 s | **1.976B** | **1.730M** | 5.15 |
| `-O2 -mllvm -disable-block-placement` | **0.0663 s** | 1.976B | **0.660M** | 5.61 |

Paired: O1 faster in **97/100** runs. Every O2 run has more branch misses than every O1 run.

`-O0` / `-O3` are not the investigation. For completeness: `-O3` ≈ `-O2` here; `-O0` is slower than `-O1` and is not needed to name the pass.

### Experiment B — Independent benchmark harness: CompilerSutra Perf (`csperf`)

Same source, same `N`, same stage1 Clang. Manifests live under `configs/csperf/testcase_*.json` (warmup 3, repeat 100). Install: `pip install compilersutra-perf`.

| Build | Median time | Instructions | Branch misses | IPC |
|-------|------------:|-------------:|--------------:|----:|
| `-O1` | **65.85 ms** | 1.845B | **0.628M** | 5.28 |
| `-O2` | 70.93 ms | 1.890B | **1.647M** | 5.16 |
| `-O2 -mllvm -disable-block-placement` | **65.87 ms** | 1.876B | **0.640M** | 5.26 |

**`-O2` vs `-O1`:** time **+7.7%**, branch misses **2.62×**. O2np ≈ O1 (time +0.03%).

Instruction totals are lower than Experiment A because `csperf` wraps the binary with its native runner. **Do not combine A and B absolute counts.** Both agree that `-O2` regresses on time and mispredicts, and that disabling block placement undoes it.

### Experiment C — Microarchitectural corroboration: AMD uProf 5.2 (`AMDuProfCLI` / `AMDuProfSys`)

Same binaries, Zen 5. Tools: `/opt/AMDuProf_5.2-606/bin/AMDuProfCLI` and `.../AMDPerf/AMDuProfSys`.

Because one parse is only ~60 ms, we wrap **40 runs** so the collection window is filled (`results/amduprof/scripts/run_loop.sh` in the research kit).

**`AMDuProfCLI collect --config branch`** (Investigate Branching). The top branch hotspot is reported as `__GI_____strtoll_l_internal` even though the source calls `strtol()`: on glibc, `strtol()` enters the shared internal integer-conversion path that uProf labels this way. That frame sits in the parse loop (`main` → `strtol` → glibc), so the branch-mispredict ratios move with the same O1/O2/O2np pattern as Experiment A.

| Build | Branch mispred PTI | Mispred % of branches | CPI |
|-------|-------------------:|----------------------:|----:|
| `-O1` | 0.585 | 0.205 | 0.206 |
| `-O2` | **2.661** | **0.956** | 0.268 |
| `-O2 -mllvm -disable-block-placement` | 0.639 | 0.228 | 0.208 |

**O2 / O1 ≈ 4.55×** mispredict PTI on that glibc conversion frame; O2np ≈ O1. `main` moves the same way (~2.1× then back down).

**Is `strtol()` dominating the benchmark?** Partially: the timed region includes buffer fill plus parse, and each field calls `strtol()`. uProf shows the regression signature on the conversion path inside the parse loop. A parse-only timed region (fill once, then loop the hot `while`) is planned to confirm the same miss ratio without buffer-generation noise; this article’s whole-program numbers already isolate the effect via the MBP intervention.

**Same story as Experiment A/B?** Yes on direction; absolute counts are not comparable across tools.

Artifacts: <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/results/amduprof/" target="_blank" rel="noopener">uProf index</a> · research kit `scripts/run_amduprof_parse.sh`.

`AMDuProfSys --config core` was also collected (AMD driver, `--force`). Prefer the CLI branch hotspot ratios here; multiplexed top-down slot % on short windows can look odd.

### Confirmation: Clang 18.1.3

Same kernel, same machine, median of 30 runs: O1 ~**0.062 s** / 0.65M misses; O2 ~**0.068 s** / 1.72M misses (same ~60 ms ballpark as Clang 24, not 0.62 s). Not one nightly build.

### Preliminary: `-O2` + PGO (Clang 18)

Before the full MBP × PGO matrix on stage1, we ran a quick four-build check on Clang 18 (10 `perf` runs each, same `N` and seed). Profile workflow: `-fprofile-generate` on one training run, `llvm-profdata merge`, then `-fprofile-use`.

| Build | MBP | PGO | Time | Branch misses | IPC | Layout |
|-------|----:|----:|-----:|--------------:|----:|--------|
| `-O2` | ON | OFF | 75.4 ms | 1.731M | ~5.15 | backward shared inc |
| `-O2` + no MBP | OFF | OFF | 75.0 ms | 0.664M | ~5.61 | forward fall-through inc |
| `-O2` + PGO | ON | ON | **64.4 ms** | **0.656M** | **5.70** | forward fall-through inc |
| `-O2` + PGO + no MBP | OFF | ON | **64.1 ms** | **0.657M** | **5.70** | forward fall-through inc |

With profile data, default `-O2` **recovers O1-like misses and time** without disabling MBP. Both PGO builds use the forward `je +5` / fall-through increment shape (like `-O1` / `-O2np`), not the backward shared-increment layout at default `-O2`. With PGO, MBP on vs off is nearly identical — the profile, not disabling MBP, is what matters here.

**Preliminary read:** the regression may be a **static probability / layout gap** rather than “MachineBlockPlacement is always wrong for this loop.” Treat as directional (Clang 18, 10 runs). Stage1 n=100 PGO matrix and BranchProbabilityInfo dumps are still pending.

```bash
# Experiment A
perf stat -e cycles,instructions,branch-misses -- ./parse.O1 1048576
perf stat -e cycles,instructions,branch-misses -- ./parse.O2 1048576
perf stat -e cycles,instructions,branch-misses -- ./parse.O2np 1048576

# Experiment B
pip install compilersutra-perf
csperf run --manifest configs/csperf/testcase_O1.json \
  --output results/csperf/testcase_O1_r100.json
csperf run --manifest configs/csperf/testcase_O2.json \
  --output results/csperf/testcase_O2_r100.json
csperf run --manifest configs/csperf/testcase_O2np.json \
  --output results/csperf/testcase_O2np_r100.json
csperf diff results/csperf/testcase_O1_r100.json \
             results/csperf/testcase_O2_r100.json \
  --csv results/csperf/testcase_O1_vs_O2.csv
```

## 4. Why fewer instructions can still mean slower

Retired instructions do not capture mispredict recovery or other stalls. Here the pattern is: similar instruction totals, **~2.6× branch misses**, lower IPC, higher time. When instruction count and runtime disagree, inspect the stall and miss counters.

## 5. Eliminating the middle-end suspects

The story everyone reaches for:

> `-O2` smashed the `if`s (SimplifyCFG / jump threading). Denser jumps. Worse prediction.

We tried that. It did not hold.

- `-O1` already turns the character test into a `switch` in LLVM IR, and `-O1` is **fast**
- Disabling unroll, vectorize, inlining, jump-threading, SimplifyCFG fold, if-conversion: **misses stayed ~2.6×**

So the middle end is not the smoking gun. Something **`-O2` does that `-O1` does not** (late, after the IR already looks similar) is.

## 6. One flag isolates the responsible pass family

The backend exposes a **diagnostic switch** that disables block placement (an internal LLVM option for investigation, not a normal production flag):

```bash
clang -O2 -mllvm -disable-block-placement
```

On this workload, `-disable-block-placement` restores O1-like misses and time (§1, §3). Tail duplication / tail merge flags did **not**. That is strong **intervention evidence**: disabling this pass family is **sufficient to prevent** the observed regression here.

What the flag does **not** prove by itself: that MachineBlockPlacement is the *only* compiler difference between the two binaries. Removing a backend pass can perturb downstream codegen. What it **does** establish: **MachineBlockPlacement is the pass associated with, and sufficient to prevent, this observed layout regression** on this workload. §7 uses `opt-bisect` for a more precise pass identification.

## 7. Use `opt-bisect` to name the pass

`opt-bisect-limit` runs the first *N* optimization steps and skips the rest:

```bash
clang -O2 -mllvm -opt-bisect-limit=N parse.c
```

On Clang 18 for this file, we binary-searched misses:

- limit **308** → still ~0.65M (good)  
- limit **309** → ~1.72M (bad)  

Pass 309 printed:

```text
BISECT: running pass (309) Branch Probability Basic Block Placement on function (main)
```

The bisect identifies LLVM’s **`MachineBlockPlacement`** pass (a late **codegen** pass). Its pipeline description appears as `Branch Probability Basic Block Placement`. It reorders machine basic blocks so the “likely” path can fall through.

It preserves the CFG semantics but changes the **physical ordering** of machine basic blocks, which changes which CFG edges are implemented as fall-through versus explicit branches. That changes branch encoding and the dynamic control-flow stream the CPU observes — not merely “backward jumps are bad.” On this workload, the new layout **coincides with** a large increase in measured branch misses. The measurements do **not** yet establish Zen 5’s exact predictor mechanism.

:::caution This is not “delete the pass”
Placement helps many loops. Here, **without a profile**, it picked a layout this parse loop hates. This article is about **finding** that. A follow-up is about **why** the pass made that bet, and whether PGO changes it.
:::

## 8. The assembly / layout difference

After `strtol`, the `,` / `\n` check looks like this (Clang 24 stage1, `objdump -d` of our binaries).

**The important difference is not the number of comparisons; it is which path is represented as fall-through and which paths require taken branches.**

**`-O1` and `-O2 -disable-block-placement`:** short **forward** `je`, then fall into the increment:

```text
; -O1 (addresses from parse.O1)
13a8:  cmp    $0x2c,%edx          ; ',' ?
13ab:  je     13b2                ; +5 bytes, forward
13ad:  cmp    $0xa,%edx           ; '\n' ?
13b0:  jne    1370                ; neither: back to loop
13b2:  lea    0x1(%rcx),%rdx     ; fall-through: p++
```

```text
; -O2 -disable-block-placement (parse.O2np): same shape
138a:  cmp    $0x2c,%edx
138d:  je     1394                ; +5, forward
138f:  cmp    $0xa,%edx
1392:  jne    1397
1394:  inc    %rcx                ; fall-through: p++
```

**Default `-O2`:** both matches **jump backward** to a shared increment block:

```text
; -O2 (parse.O2)
1320:  cmp    $0x2c,%edx          ; ',' ?
1323:  je     12f0                ; backward (disp 0xcb → 12f0)
1325:  cmp    $0xa,%edx           ; '\n' ?
1328:  je     12f0                ; backward again
132a:  jmp    12f3                ; neither: skip increment
```

Layout sketch (logical):

```text
O1 / O2np:

cmp ','
   |
   +-- yes --> inc
   |
   no
   |
cmp '\n'
   |
   +-- yes --> inc


O2:

cmp ','
   |
   +-- yes --------+
   |               |
cmp '\n'           |
   |               |
   +-- yes --------+
                   |
                shared inc
```

Same source semantics. Different machine layout — different fall-through vs taken encoding at the separator check. On this workload, the `-O2` layout **coincides with** higher measured branch misses. That is an observed association, not a claim that forward branches predict better than backward ones on Zen 5.

## 9. What we know vs what we don’t

**Established:** `-O2` slower than `-O1` on this kernel (Clang 18 + 24); branch misses ~2.6× at default `-O2`; disabling MBP is **sufficient to prevent** the observed regression; `opt-bisect` names **MachineBlockPlacement**; assembly shows a different fall-through vs taken layout at the separator check.

**Not established (yet):** that every CPU punishes this layout the same way; Zen 5’s exact predictor mechanism; any SPEC-wide claim about disabling placement.

**Preliminary (Clang 18 PGO, §3):** profile-guided `-O2` coincides with O1-like misses, time, and forward-increment assembly — consistent with a static-probability gap, not yet replicated at n=100 on stage1.

**Causal boundary:** Disabling MachineBlockPlacement **prevents** the observed regression on this workload. `opt-bisect` identifies that pass as the step where layout changes. The exact Zen 5 microarchitectural mechanism behind the increased misprediction rate remains unproven. We have a strong intervention-based association (layout change → miss increase → time increase), not a complete proof chain from pass internals to predictor tables to +10.7% runtime. Removing MBP may also perturb other downstream codegen; we treat the flag as isolating the **pass family**, not as a surgical single-instruction diff.

## 10. Reproduce

```bash
C=/home/aitr/osc/llvm-project/build-stage1/bin/clang   # or clang-18
SRC=machine_block_placement_csv_parse.c   # from /files/articles/when-o2-layout-hurts-machineblockplacement/source/

$C -O1  "$SRC" -o parse.O1
$C -O2  "$SRC" -o parse.O2
$C -O2 -mllvm -disable-block-placement "$SRC" -o parse.O2np

./parse.O1 1048576    # expect PASS sum=15723844160
perf stat -e cycles,instructions,branch-misses -- ./parse.O1 1048576
perf stat -e cycles,instructions,branch-misses -- ./parse.O2 1048576
perf stat -e cycles,instructions,branch-misses -- ./parse.O2np 1048576
```

If `perf` dies on an LLVM symbol error:

```bash
export LD_LIBRARY_PATH=/usr/lib/x86_64-linux-gnu:/lib/x86_64-linux-gnu
```

If counters are blocked:

```bash
sudo sysctl -w kernel.perf_event_paranoid=0
```

**If you hit this shape of hot character tests and no PGO**, try `-mllvm -disable-block-placement` as a **diagnosis flag**, not a house style for every TU. Turning placement off on a whole server binary can hurt code that wanted the hot path as fall-through.

**Upstream:** filed as [llvm/llvm-project#218248](https://github.com/llvm/llvm-project/issues/218248) (`[MachineBlockPlacement][X86] -O2 slower than -O1 on CSV parse loop`).

## 11. Is this a compiler bug?

- **Not** a correctness bug: sinks / expected sums match across `-O1` / `-O2` / `-O2np`
- **Yes**, a **performance heuristic miss** for this code shape

LLVM would typically call this a layout / probability gap, not “Clang miscompiled the C.” Heuristic miss ≠ broken compiler. Whether LLVM should change the heuristic is tracked upstream: [llvm/llvm-project#218248](https://github.com/llvm/llvm-project/issues/218248).

## 12. Limitations

- One kernel; whole `main` is timed (fill + parse). The smoking-gun assembly is the parse separator checks. A parse-only timed region is planned to confirm the miss ratio without buffer-fill noise.
- One CPU family (Zen 5). Another predictor may punish this layout less or more.
- Confirmed on **Clang 18.1.3** and **Clang 24 stage1**, not every fork, not GCC.
- Disabling placement is a **this-loop** win we measured, not a SPEC claim.
- Experiment A vs B absolute instruction counts are not interchangeable.

## Next

Follow-up: why MachineBlockPlacement chose the wrong layout **without** profile data. Preliminary MBP × PGO matrix (Clang 18, 10 `perf` runs; §3 has detail):

| Build | MBP | PGO | Time | Branch misses | IPC | Layout |
|-------|----:|----:|-----:|--------------:|----:|--------|
| `-O2` | ON | OFF | 71.9 ms‡ | 1.730M‡ | 5.15‡ | backward shared inc‡ |
| `-O2` | OFF | OFF | 66.3 ms‡ | 0.660M‡ | 5.61‡ | forward fall-through inc‡ |
| `-O2` | ON | ON | **64.4 ms** | **0.656M** | **5.70** | forward fall-through inc |
| `-O2` | OFF | ON | **64.1 ms** | **0.657M** | **5.70** | forward fall-through inc |

‡Clang 24 stage1, n=100 (§1, §3). PGO rows are Clang 18, n=10.

**What this suggests:** without PGO, static probabilities → bad layout → high misses. With PGO, layout is good whether MBP is on or off. Still open: exact `,` / `\n` / neither probabilities in BranchProbabilityInfo, and stage1 n=100 confirmation.

:::tip Coming next on CompilerSutra
**Why MachineBlockPlacement Made the Wrong Bet: Static Probabilities, Fall-Through, and PGO**
:::

## Appendix: pasteable testcase

Prefer the complete file with asserts: <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/source/machine_block_placement_csv_parse.c" target="_blank" rel="noopener">machine_block_placement_csv_parse.c</a>. Full dataset: <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/" target="_blank" rel="noopener">artifact index</a> (<a href="/files/articles/when-o2-layout-hurts-machineblockplacement/README.md" target="_blank" rel="noopener">README.md</a>, <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/highlights.json" target="_blank" rel="noopener">highlights.json</a>).

```c
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

static uint32_t lcg(uint32_t *s) {
  *s = *s * 1664525u + 1013904223u;
  return *s;
}

int main(int argc, char **argv) {
  size_t lines = argc > 1 ? (size_t)atoll(argv[1]) : (1u << 20);
  size_t cap = lines * 48 + 64;
  char *buf = malloc(cap);
  size_t len = 0;
  uint32_t s = 29;
  for (size_t i = 0; i < lines; i++) {
    int a = (int)(lcg(&s) % 10000);
    int b = (int)(lcg(&s) % 10000);
    int c = (int)(lcg(&s) % 10000);
    int n = snprintf(buf + len, cap - len, "%d,%d,%d\n", a, b, c);
    if (n < 0 || (size_t)n >= cap - len)
      return 2;
    len += (size_t)n;
  }

  long sum = 0;
  const char *p = buf;
  const char *end = buf + len;
  while (p < end) {
    char *q;
    long x = strtol(p, &q, 10);
    if (q == p)
      break;
    sum += x;
    p = q;
    if (p < end && (*p == ',' || *p == '\n'))
      p++;
  }

  printf("sum=%ld\n", sum);
  free(buf);
  return 0;
}
```

Expected sum for `1048576` / seed `29`: `15723844160` (asserted in the full kit file).

## References

- LLVM [MachineBlockPlacement](https://llvm.org/doxygen/MachineBlockPlacement_8cpp.html) (“Branch Probability Basic Block Placement”)
- Upstream report: [llvm/llvm-project#218248](https://github.com/llvm/llvm-project/issues/218248)
- [`opt-bisect-limit`](https://llvm.org/docs/CommandGuide/opt.html) (same knob via `clang -mllvm`)
- [CompilerSutra Perf](https://pypi.org/project/compilersutra-perf/) (`pip install compilersutra-perf`)
- Related: [GCC vs Clang real benchmarks](/docs/articles/gcc_vs_clang_real_benchmarks_2026_reporter), [stencil pass trace](/docs/articles/where_gcc_and_clang_diverge_stencil_pass_trace)

:::note Lab note
Primary: Clang 24 stage1, Experiment A/B on <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/source/machine_block_placement_csv_parse.c" target="_blank" rel="noopener">machine_block_placement_csv_parse.c</a>. Bundled public artifacts: <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/" target="_blank" rel="noopener">artifact index</a>. Secondary: Clang 18.1.3.
:::
