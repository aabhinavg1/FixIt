---
title: "How Often Does MachineBlockPlacement Regress Branch Prediction? A 329-Benchmark Screen"
description: "A CSV parse loop showed -O2 with 2.6× branch misses vs -O1. We bisected to MachineBlockPlacement, screened 329 benchmarks, and tracked the upstream fix in LLVM PR #219126."
keywords:
  - MachineBlockPlacement prevalence
  - clang O2 slower than O1
  - llvm-test-suite branch misses
  - disable-block-placement clang
  - llvm PR 219126
  - branch prediction compiler layout
  - oopack_v1p8 MachineBlockPlacement
  - compilersutra llvm case study
---

import AdBanner from '@site/src/components/AdBanner';
import Head from '@docusaurus/Head';

<Head>
  <meta name="description" content="-O2 beat O1 on instructions but lost on a CSV parser: 2.6× branch misses from MachineBlockPlacement. Prevalence across 329 benchmarks is ~1.2%, not universal." />
</Head>

# How Often Does MachineBlockPlacement Regress Branch Prediction? A 329-Benchmark Screen

My `-O2` build was slower than `-O1` on a CSV parser — not because inlining failed, but because **block layout** sent the hot separator path through **backward taken branches**. Fewer instructions, more mispredicts, ~10% longer runtime.

We [named the pass](/docs/articles/when-o2-layout-hurts-machineblockplacement) (**MachineBlockPlacement**, pass 309), [traced the probability gap](/docs/articles/machineblockplacement-wrong-bet-static-probabilities-pgo) (static `BranchProbabilityInfo` without PGO), and then asked the question this article answers:

> **How common is this in real programs — and is there an upstream fix?**

Short answer: **not universal**. In a screen of **329** llvm-test-suite and external benchmarks, **4** hit our MBP pattern (~**1.2%**). Controlled lab parsers hit at **~2.6×**. **170** MultiSource programs and **19** HPC externals (MiBench, CoreMark, SciMark2, PolyBench) had **zero** hits. An extended screen of **396** ok programs across eight tracks (text scan, OSS parsers, sci calc, parallel) adds **5** more MBP-pattern rows — still **parse/hash-shaped**, not numeric HPC. An LLVM fix is in review: [PR #219126](https://github.com/llvm/llvm-project/pull/219126).

:::info At a glance

<pre>
Lab repro (csv parse, N=1048576)
  -O1   ~0.65M branch misses   ~65 ms
  -O2   ~1.73M (2.6×)         ~72 ms
  -O2np ~0.66M                 ~66 ms   (-disable-block-placement)

329-benchmark screen (unfixed Clang)
  4 MBP-pattern hits (~1.2%)
  Strongest: oopack_v1p8  O2/O1 = 4.65× misses

Extended screen (396 ok, 8 tracks)
  9 MBP-pattern hits (~2.3%)
  OSS parsers: quickjs 1.30× only; jq/yyjson/lua/re2/pcre2: no

Upstream: PR #219126 — avoid rotating shared increment to loop top
</pre>

:::

<div>
  <AdBanner />
</div>

## 1. The surprise (lab repro)

Same machine (AMD Ryzen 7 9700X, Zen 5), same deterministic testcase: `strtol` over `a,b,c\n` lines, separator check on `,` and `\n` in a tight loop.

At **`-O2`**, Clang retired **fewer instructions** than **`-O1`**, yet ran **~8–11% slower** with **~2.6× branch mispredictions**.

Three-way experiment (median of 100 `perf stat -r 100` runs, `N = 1048576`, unfixed Clang ~24.x / Clang 18.1.3):

| Config | Time | Branch misses | vs `-O1` misses |
|--------|-----:|--------------:|----------------:|
| `-O1` | ~65 ms | ~0.65M | 1.00× |
| `-O2` | ~72 ms | ~1.73M | **~2.63×** |
| `-O2 -mllvm -disable-block-placement` | ~66 ms | ~0.66M | ~1.00× |

**`-O2np` keeps O2-level instruction counts but O1-level branch behavior** — the regression is layout at the separator, not “more IR optimization.”

Full hunt (perf, `csperf`, AMD uProf, `opt-bisect`, assembly): [Part 1 — When Clang `-O2` Gets Slower](/docs/articles/when-o2-layout-hurts-machineblockplacement).  
PGO / `branch_weights`: [Part 2 — Wrong Bet](/docs/articles/machineblockplacement-wrong-bet-static-probabilities-pgo).

**Artifacts:** <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/" target="_blank" rel="noopener">part 1 bundle</a> · <a href="/files/articles/machineblockplacement-wrong-bet-static-probabilities-pgo/" target="_blank" rel="noopener">part 2 bundle</a>

## 2. Minimal repro

Hot shape (diamond CFG — shared increment block, two hot character compares):

```c
while (p < end) {
  char *q;
  long v = strtol(p, &q, 10);
  if (q == p) break;
  sum += v;
  p = q;
  if (p < end && (*p == ',' || *p == '\n'))
    p++;
}
```

For `N = 1048576`, seed `29`: expected sum **`15723844160`**.

```bash
clang -std=c11 -O1 machine_block_placement_csv_parse.c -o parse.O1
clang -std=c11 -O2 machine_block_placement_csv_parse.c -o parse.O2
clang -std=c11 -O2 -mllvm -disable-block-placement \
  machine_block_placement_csv_parse.c -o parse.O2np

./parse.O1 1048576    # PASS sum=15723844160

perf stat -r 5 -e branch-misses,cycles,instructions -- ./parse.O1 1048576
perf stat -r 5 -e branch-misses,cycles,instructions -- ./parse.O2 1048576
perf stat -r 5 -e branch-misses,cycles,instructions -- ./parse.O2np 1048576
```

Source: <a href="/files/articles/when-o2-layout-hurts-machineblockplacement/source/machine_block_placement_csv_parse.c" target="_blank" rel="noopener">machine_block_placement_csv_parse.c</a>

## 3. What it is not

Middle-end suspects did not explain the miss jump:

- **Not** SimplifyCFG / jump-threading alone — `-O1` already has a similar `switch` shape and is fast.
- **Not** LoopUnroll, vectorize, or inlining sweeps — misses stayed ~2.6×.

**`opt-bisect`** on Clang 18: limit **308** → ~0.65M misses; limit **309** → ~1.72M misses. Pass 309:

```text
BISECT: running pass (309) Branch Probability Basic Block Placement on function (main)
```

That is **MachineBlockPlacement** — LLVM’s late **codegen** layout pass (`-O2` only in practice for this effect).

## 4. Assembly: layout inverted the hot path

After `strtol`, the separator check differs by **fall-through vs taken** encoding — not by “one extra compare.”

**`-O2` (bad on unfixed Clang 18)** — both `,` and `\n` **jump backward** to a shared increment:

```text
cmp    $0x2c,%edx          ; ',' ?
je     12f0                ; backward → shared inc
cmp    $0xa,%edx           ; '\n' ?
je     12f0                ; backward again
```

**`-O1` / `-O2 -disable-block-placement` / PGO `-O2`** — short **forward** `je`, then **fall-through** increment:

```text
cmp    $0x2c,%edx
je     +5
cmp    $0xa,%edx
jne    +3                  ; neither: skip
inc    %rcx                ; fall-through: p++
```

```text
O1 / O2np / PGO-O2:

  cmp ','
     |
     +-- yes --> inc (fall-through path)
     |
     no --> cmp '\n' --> yes --> inc


Default -O2 (unfixed):

  cmp ','
     |
     +-- yes --+
  cmp '\n'     |
     +-- yes --+--> shared inc (backward taken je)
```

The CPU sees a different **dynamic branch stream**. On this workload, the backward layout **coincides with** ~2.6× measured mispredicts. We do not claim every CPU punishes backward branches equally — only that counters + `-disable-block-placement` isolate layout as the lever.

## 5. How common is this? (329-benchmark screen)

We screened **real** programs — not hand-wavy “all parsers break.”

### Methodology

For each benchmark:

1. Build **`-O1`**, **`-O2`**, **`-O2 -mllvm -disable-block-placement`** with an **unfixed** Clang (shows the bug).
2. Run with llvm-test-suite `.test` inputs (or suite-specific args for externals).
3. Measure **`branch-misses`** via `perf stat -r 1` (plus wall time for compile/run budgeting).

**MBP pattern** (same rule as the lab repro):

- `O2/O1` branch-miss ratio **≥ 1.30**
- `O2np/O1` **≤ 1.10** (disabling placement restores O1-like misses)
- `O1` branch misses **≥ 1000** (ignore noise)

Validate fixes on a **stage1 / mbp branch** build separately — prevalence uses unfixed Clang; fix validation uses patched Clang.

### Corpus

| Track | Programs (ok runs) | MBP hits |
|-------|-------------------:|---------:|
| llvm-test-suite **SingleSource**/Benchmarks | 140 | **4** |
| llvm-test-suite **MultiSource**/Benchmarks | 170 | **0** |
| External (MiBench, CoreMark, SciMark2, PolyBench) | 19 | **0** |
| Parser lab (csv_parse + w11) | 2 | **2** |
| **Total screened (suite + external)** | **329** | **4** |

**Prevalence:** **4 / 329 ≈ 1.2%** in the suite + external screen. **4 / 140 ≈ 2.9%** within SingleSource only.

**Not hits:** `wordfreq`, `lowercase`, `wc`-style paths — O2 miss ratios near 1.0×. MultiSource (170 ok) and HPC external (19 ok) produced **zero** MBP-pattern rows.

### Extended screen (396 ok programs, eight tracks)

After the core **329** screen, we added tracks aimed at **text/parse workloads** and **real OSS parsers** — the shapes most likely to match the lab repro — without expecting a flood of new hits.

| Track | Programs (ok runs) | MBP hits |
|-------|-------------------:|---------:|
| *(core screen above)* | **329** | **4** |
| Text scan (grep, sqlite driver, ini/toml, …) | 18 | **2** |
| Parser lab (csv_parse + w11) | 4 | **1** |
| Sci calc / NPB PDE (CLASS=W, HPCG, …) | 23 | **1** |
| Parallel (pthread + NPB-OMP) | 2 | **0** |
| **OSS apps** (jq, yyjson, lua, pcre2, re2, md4c, …) | **14** | **1** |
| **Extended total** | **396** | **9** |

**Extended prevalence:** **9 / 396 ≈ 2.3%** — same order of magnitude as SingleSource-only (**~2.9%**). The denominator grew; the hit profile did not turn into “all parsers break.”

**OSS apps (Track F)** — small drivers over vendored or system libraries, same O1/O2/O2np + `perf branch-misses` rule:

| Program | O2/O1 misses | O2np/O1 | MBP? |
|---------|-------------:|--------:|:----:|
| **quickjs** (JS line scan) | **1.30×** | 1.03× | **yes** (threshold) |
| jq (JSON filter) | 0.81× | 1.04× | no |
| yyjson / cJSON / lua | 0.59–0.97× | — | no |
| pcre2 / re2 / libxml2 / cmark / tomlc99 / duktape | 0.80–1.19× | — | no |
| protobuf / capnp wire walk | 0.79–0.82× | — | no |

All **14/14** OSS targets build and run in the latest sweep (`results/oss_apps_mbp_sweep.csv`). **quickjs** is the only OSS hit — at exactly the **1.30×** cutoff — with O2np restoring O1-like misses. **jq**, **yyjson**, and the regex/XML/JSON parsers did **not** pass the filter despite real branchy code paths.

**Still zero hits:** MultiSource (170 ok), HPC external (25 ok), parallel pthread (2 ok). NPB-OMP (8 kernels) failed to compile on unfixed Clang (no OpenMP). Prebuilt QC/MD slots (CP2K, GROMACS, LAMMPS, QE) were skipped — no binaries on disk; we do not expect MBP there.

**Sci calc note:** `npb_bt_w` (~2.07×) appeared as an MBP-pattern row in the extended NPB CLASS=W sweep; treat as **borderline / run-to-run sensitive** — re-check with `-r 3` before citing as a stable suite hit.

Sweep driver for OSS track:

```bash
bash corpus/scripts/run_oss_apps_sweep.sh
# → results/oss_apps_mbp_sweep.csv
```

Full extended tracks: `corpus/scripts/run_all_tracks.sh`

### MBP hits in llvm-test-suite

| Benchmark | O2/O1 misses | O2np/O1 misses | Notes |
|-----------|-------------:|---------------:|-------|
| **oopack_v1p8** | **4.65×** | 0.86× | Strongest; parse/scan-like C++ |
| **Shootout-hash** | 1.42× | 0.84× | Hash table probe loops |
| **matmul_f64_4x4** | 1.38× | 0.93× | Small numeric kernel |
| **flops-5** | 1.37× | 1.03× | Borderline on O2np; still passes filter |

### Lab controls (parser track)

| Program | O2/O1 misses | O2np/O1 | Time O2/O1 |
|---------|-------------:|--------:|-----------:|
| `mbb_csv_parse` | 2.60× | 1.06× | 1.08× |
| `w11_string_parse` | 2.63× | 1.01× | 1.05× |

These are the **canonical** shared-increment diamond shape the paper trail started from.

### Not MBP (O2 misses up, but `-disable-block-placement` does not fix)

| Benchmark | O2/O1 misses | O2np/O1 | Read |
|-----------|-------------:|--------:|------|
| **flops-6** | 1.59× | **1.94×** | Other `-O2` codegen effect |
| **atax** | 1.47× | 1.44× | Polybench LA — not layout |
| **durbin** | 1.33× | 1.37× | Same |

Do not triage every `-O2` branch-miss bump with `-disable-block-placement` — check whether O2np actually drops misses toward O1.

### Screen cost (SingleSource full sweep)

- **~27 min** wall on this machine (141 SingleSource targets; 140 ok).
- **~193 s** total O1 perf time across programs.
- Most benchmarks: **&lt;1 s** perf each; outliers: Polybench compile (e.g. cholesky ~12 min compile), long runs (e.g. floyd-warshall ~32 s perf).

Sweep driver (research kit):

```bash
source corpus/scripts/env.clang.sh
bash corpus/scripts/run_singlesource_sweep.sh
# → results/testsuite_singlesource_mbp_sweep.csv
```

Full tracks: `corpus/scripts/run_all_tracks.sh`

## 6. Case studies (two sentences each)

**oopack_v1p8** — Misc-C++ pack/unpack-style code with tight character/class checks. **4.65×** branch-miss ratio at `-O2`; **0.86×** after disabling placement — the clearest suite analog to the csv parse repro.

**Shootout-hash** — hash table with repeated probe/compare loops. **1.42×** misses at `-O2`, **0.84×** with O2np — layout-sensitive, not parse-specific, but the same MBP signature.

## 7. The upstream fix

**LLVM PR:** [github.com/llvm/llvm-project/pull/219126](https://github.com/llvm/llvm-project/pull/219126)  
**Branch:** `mbp-avoid-multi-succ-rotation`  
**Fixes:** [issue #218248](https://github.com/llvm/llvm-project/issues/218248)

**Root cause (summary):** `canMoveBottomBlockToTop` only checked one predecessor. **Shared increment blocks** could still be rotated in front of the loop latch, turning a likely **fall-through** into a **taken** branch on multi-successor diamonds.

**Regression test:** `block-placement-loop-top-multi-succ.ll`

**Stage1 validation:** on the mbp branch, lab repros (`w11`, `csv_parse`) show **O1/O2/O2np all ~656K misses** — fix lands without reopening the regression on the canonical testcase.

## 8. Diagnostic recipe (production triage)

If **`-O2` is slower than `-O1`** on branchy text/parse code:

1. **`perf stat -e branch-misses,instructions,cycles`** on both builds — instruction count down but misses up is the signature we saw.
2. Rebuild with **`-mllvm -disable-block-placement`** on **that translation unit only**.
3. If misses and time return toward `-O1` → **likely MBP/layout**; attach repro to [LLVM #218248](https://github.com/llvm/llvm-project/issues/218248) or PR #219126.
4. **Do not ship** with placement globally disabled — other loops benefit from fall-through layout.
5. **PGO** may supply missing `branch_weights` on char switches ([part 2](/docs/articles/machineblockplacement-wrong-bet-static-probabilities-pgo)).

Structured harness alternative: [CompilerSutraPerf](/docs/project/compilersutra-perf/) ([PyPI](https://pypi.org/project/compilersutra-perf/)) (`pip install compilersutra-perf`) with manifests like `configs/testcase_O{1,2,2np}.json` in the part 1 bundle.

## 9. What we do not claim

- **“All parsers break at `-O2`”** — false (~**1.2%** in 329-program screen; ~**2.3%** in 396-program extended screen).
- **“MachineBlockPlacement is always wrong”** — false (**0** hits in 170 MultiSource + 25 HPC externals on this screen; **0/14** OSS JSON/XML/regex parsers except borderline **quickjs** at 1.30×).
- **“This replaces PGO”** — no; static **BranchProbabilityInfo** without profile data is the gap part 2 documents.
- **“Every `-O2` branch-miss increase is MBP”** — flops-6 / atax / durbin counterexamples above.

## 10. Try it yourself

1. Clone the part 1 testcase and run the three-way **`perf`** table (§2).
2. Confirm **`opt-bisect` limit 309** names MachineBlockPlacement (§3).
3. **`objdump -d`** the separator — backward vs forward `je` (§4).
4. If you have llvm-test-suite + unfixed Clang, run **`run_singlesource_sweep.sh`** and grep `mbp_pattern=yes` in the CSV.
5. Track **[PR #219126](https://github.com/llvm/llvm-project/pull/219126)** — retest csv_parse on the mbp branch when it merges.

## References

- [Part 1: When Clang `-O2` Gets Slower](/docs/articles/when-o2-layout-hurts-machineblockplacement)
- [Part 2: Static Probabilities, Fall-Through, and PGO](/docs/articles/machineblockplacement-wrong-bet-static-probabilities-pgo)
- [LLVM PR #219126](https://github.com/llvm/llvm-project/pull/219126) · [Issue #218248](https://github.com/llvm/llvm-project/issues/218248)
- [MachineBlockPlacement](https://llvm.org/doxygen/MachineBlockPlacement_8cpp.html) · [`opt-bisect-limit`](https://llvm.org/docs/CommandGuide/opt.html)
- [CompilerSutraPerf](/docs/project/compilersutra-perf/) · [PyPI](https://pypi.org/project/compilersutra-perf/)

:::note Lab note
Prevalence CSVs: research kit `results/testsuite_singlesource_mbp_sweep.csv`, `testsuite_multisource_mbp_sweep.csv`, `hpc_external_mbp_sweep.csv`, `text_scan_mbp_sweep.csv`, `parser_mbp_sweep.csv`, `sci_calc_mbp_sweep.csv`, `parallel_mbp_sweep.csv`, `oss_apps_mbp_sweep.csv` (Aug–Sep 2026 sweeps). Unfixed Clang: `/home/aitr/osc/llvm_project_without_change/llvm-project/build/bin/clang` (24.0.0git). Lab repro numbers: part 1/2 artifact bundles. CPU: AMD Ryzen 7 9700X.
:::

---

**Meta description (155 chars):**  
`-O2` lost to `-O1` on a CSV parser: 2.6× branch misses from MachineBlockPlacement. We screened 329 benchmarks (~1.2% hit) and track LLVM PR #219126.

**Thread hooks:**

1. “Your `-O2` binary has *fewer* instructions but runs slower? Before blaming inlining — check `branch-misses` and try `-mllvm -disable-block-placement` once.”
2. “We screened 329 llvm-test-suite + HPC programs for a MachineBlockPlacement regression. Hits: 4 (~1.2%). Extended to 396 programs across OSS parsers and text scan: 9 hits (~2.3%), still parse/hash-shaped. MultiSource: 0/170.”
3. “Strongest suite hit: oopack_v1p8 — 4.65× branch misses at `-O2`, back to 0.86× with placement off. LLVM fix: PR #219126.”
