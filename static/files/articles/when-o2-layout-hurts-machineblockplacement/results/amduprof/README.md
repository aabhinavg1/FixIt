# AMD uProf results (parse / MachineBlockPlacement testcase)

Tools under `/opt/AMDuProf_5.2-606`:

- `bin/AMDuProfCLI` — `collect --config branch` (Investigate Branching)
- `bin/AMDPerf/AMDuProfSys` — `--config core` system/core metrics

## Headline (40× loop, affinity CPU0)

`AMDuProfCLI` hotspot **`__GI_____strtoll_l_internal`** branch-mispredict PTI:

| Build | br_misp_pti | misp % of branches | CPI |
|-------|------------:|-------------------:|----:|
| O1 | 0.585 | 0.205 | 0.206 |
| O2 | **2.661** | **0.956** | 0.268 |
| O2np (`-disable-block-placement`) | 0.639 | 0.228 | 0.208 |

**O2 / O1 ≈ 4.55×** mispredict PTI on `strtoll`; O2np ≈ O1.

`main` shows the same direction (O2 ≈ 2.1× O1 mispred PTI; O2np below O1).

See `highlights.json` and `summary.json`. Re-run: `scripts/run_amduprof_w11.sh`.

Note: `perf_event_paranoid` blocked the linux-perf collector path; Sys used the AMD driver with `--force` (NMI watchdog still on). Prefer CLI branch ratios for this story.
