# MachineBlockPlacement parse-loop case study (artifacts)

Everything needed to reproduce and inspect the article numbers lives in this folder.

## Quick links

| File | What |
|------|------|
| [source/machine_block_placement_csv_parse.c](source/machine_block_placement_csv_parse.c) | Complete testcase (expected-sum checks) |
| [highlights.json](highlights.json) | One-page numbers: O1 / O2 / O2np |
| [results/perf/summary.json](results/perf/summary.json) | Experiment A: raw `perf`, n=100 |
| [results/perf/perf_r100.csv](results/perf/perf_r100.csv) | Experiment A: all reps |
| [results/csperf/summary.json](results/csperf/summary.json) | Experiment B: CompilerSutra Perf medians |
| [results/csperf/testcase_O1_vs_O2.csv](results/csperf/testcase_O1_vs_O2.csv) | `csperf diff` O1 vs O2 |
| [configs/](configs/) | `csperf` manifests (O0/O1/O2/O2np) |
| [scripts/run_mbb_parse.sh](scripts/run_mbb_parse.sh) | Build + correctness helper |

## What the testcase does

1. Seed `29` fills a buffer with `a,b,c\n` lines.
2. Parses with `strtol` and skips `,` / `\n`.
3. For `N=1048576`, sum must be `15723844160` (`PASS`).

## Headline (Clang 24 stage1, Zen 5, N=1048576)

**Experiment A (`perf`, n=100):** O2 vs O1 ≈ **+10.7%** time, branch misses **~2.63×**.  
**Experiment B (`csperf`, n=100):** O2 vs O1 ≈ **+7.7%** time, branch misses **~2.62×**.  
**`-O2 -mllvm -disable-block-placement`** restores O1-like misses/time.

Do not merge absolute instruction counts across A and B (different runners). Use them to confirm direction and magnitude.

## Build / run

```bash
clang -O1 -o parse.O1 source/machine_block_placement_csv_parse.c
clang -O2 -o parse.O2 source/machine_block_placement_csv_parse.c
clang -O2 -mllvm -disable-block-placement -o parse.O2np \
  source/machine_block_placement_csv_parse.c

./parse.O1 1048576
perf stat -e cycles,instructions,branch-misses -- ./parse.O2 1048576
```

CompilerSutra Perf: https://pypi.org/project/compilersutra-perf/

```bash
pip install compilersutra-perf
# edit configs/*.json compiler path if needed, then:
csperf run --manifest configs/testcase_O1.json --output /tmp/o1.json
```

## Pass named

`MachineBlockPlacement` (opt-bisect: limit 308 good, 309 bad on Clang 18 for this shape).

## Experiment C: AMD uProf 5.2

See [results/amduprof/](results/amduprof/) (`AMDuProfCLI --config branch`, 40× loop).

On the `strtoll` hotspot, branch-mispredict PTI is ~**4.6×** higher at `-O2` than `-O1`; `-disable-block-placement` returns near `-O1`. Same direction as Linux `perf` / CompilerSutra Perf.
