---
title: "Methodology"
sidebar_label: "Methodology"
description: "How to read csperf measurements — events, same-execution, multiplexing, and what not to publish. Styled after the Linux perf tutorial."
displayed_sidebar: csperfSidebar
keywords:
  - perf methodology
  - same execution
  - multiplexing
  - branch-misses
---

# Methodology

This page teaches how to **read** numbers from **CompilerSutraPerf** (`csperf`), the same way the [Linux perf tutorial](https://perfwiki.github.io/main/tutorial/) teaches `perf stat`: what an event is, what a count means, and when the number is only an estimate.

CompilerSutraPerf ([PyPI: `compilersutra-perf`](https://pypi.org/project/compilersutra-perf/)) is **Alpha**. Prefer Linux CPU + `perf` for serious claims.

## What CompilerSutraPerf is doing

On the CPU path, CompilerSutraPerf is not a new profiler. It:

1. Compiles and runs your program through a native runner  
2. Optionally wraps trials with Linux **`perf stat`** (or falls back to PAPI)  
3. Writes wall time + counters into a JSON artifact with **provenance**

If you already know `perf`, think of `csperf run` as: *compile → timed trials → structured `perf stat` → JSON*.

## Events (the important vocabulary)

`perf` (and therefore `csperf`) can count events from different sources. Mixing them without labels is how bad papers happen.

| Kind | What it is | Examples |
| --- | --- | --- |
| **Software events** | Kernel counters | context-switches, page-faults |
| **Hardware / PMU events** | CPU Performance Monitoring Unit | cycles, instructions, branch-misses, cache-misses |
| **Generic hardware names** | Portable aliases mapped to a real PMU event *if the CPU has one* | `cycles`, `instructions`, `branches` |
| **Tracepoints** | Kernel `ftrace` points | `sched:sched_switch`, … |

On each CPU, a generic name is mapped to a real event when possible; otherwise it cannot be used. Vendor PMU tables differ (Intel vs AMD vs Arm). `csperf` probes what works on the host and records availability in the artifact.

Common hardware names you will see in `csperf` / `perf` output:

| Event | Meaning (tutorial sense) |
| --- | --- |
| `cycles` / `cpu-cycles` | Total cycles (beware frequency scaling) |
| `ref-cycles` | Cycles not affected by frequency scaling |
| `instructions` | Retired instructions (can be noisy) |
| `branches` / `branch-instructions` | Retired branches |
| `branch-misses` | Mispredicted branches |
| `cache-references` / `cache-misses` | Usually LLC-oriented; pair them for a miss rate |

Derived metrics (after the `#` in `perf stat`, or in `csperf` summaries) include things like **IPC** (instructions / cycles) and **branch-miss rate**.

## Counting: wall time vs counters

### Wall time (always the primary timer)

`metrics.execution_time_ms` and `execution.trial_results` come from the **native runner** for the measured trials. That is the stopwatch.

### Counters (`perf` / PAPI)

When profiling is enabled, `csperf` tries to collect counters on the **same execution** as those trials (`execution.measurement.same_execution: true`). That is the trustworthy path for “did `-O2` change branch behavior?”

If same-execution collection fails, timing can still succeed. Counters may be omitted or collected on a **separate** run (`separate_execution`). Do not treat that as the same evidence.

| Field | Same process as wall time? |
| --- | --- |
| `execution_time_ms` | Yes (timed trials) |
| Linux `perf` (successful wrap) | Yes when `same_execution` |
| PAPI grouped fallback | Usually **no** |
| macOS `powermetrics` | **No** for primary trials |
| HIP `kernel_time_ms` | Kernel only |
| HIP `hip_profiler_*` | rocprof trace — not the same as HIP events |

Never mix `perf_source: perf` with `papi` / powermetrics as one counter set. `csperf diff` warns when sources differ.

## Multiplexing and scaling (read this twice)

Hardware PMUs have a **small** number of counters. If you ask for more events than counters, the kernel **time-multiplexes** them and later **scales** the counts:

```text
final_count ≈ raw_count × (time_enabled / time_running)
```

That is an **estimate**, not a continuous count. Blind spots can introduce error. The perfwiki tutorial stresses this; `csperf` inherits the same kernel behavior when it asks `perf` for many events.

Practical rules:

1. Prefer fewer, important events for a claim (for example branches + branch-misses).  
2. Prefer `same_execution: true` in the JSON.  
3. Use enough `--repeat-runs` to see variance (like `perf stat -r N`).  
4. If scaling percentages look ugly in raw `perf` output, shrink the event set.

`csperf` groups `perf stat` invocations partly to reduce `<not counted>` / multiplexing pain — still treat crowded event sets carefully.

## A concrete mental loop (perfwiki style)

**Command:**

```python
csperf run --input examples/cpp/matrix_traversal.cpp --backend cpu \
  --cpu-affinity 0 --warmup-runs 1 --repeat-runs 5 \
  --output results/cpu.json
csperf profile results/cpu.json
```

**What to check in the JSON (in order):**

1. Did it run? → `status`, `execution.trial_results`  
2. How long? → `metrics.execution_time_ms`  
3. Were counters on the same run? → `execution.measurement.same_execution`  
4. What was counted? → counter fields / `perf_source`  
5. Can I reproduce? → `commands`, compiler flags, `tool_version`, `hardware`

That is the same discipline as reading a `perf stat` block: elapsed time first, then event counts, then derived ratios, then caveats.

## Environment matters

Like `perf`:

| Mode | `csperf` analogue |
| --- | --- |
| Pin to one CPU | `--cpu-affinity 0` (Linux only) |
| Repeat for variance | `--repeat-runs N` |
| Skip counters | `--no-perf` |
| User-only style focus | Prefer same binary, quiet machine, pinned core |

macOS: no Linux `perf`; use `--no-perf`. Optional `powermetrics` is a **different** measurement class — see platform matrix below.

## Power / energy

Package energy (RAPL via `perf` `power/energy-pkg/`, or `rocm-smi`, or macOS powermetrics) is **not** “this process used exactly X joules.”

| Domain | Typical source | Caveat |
| --- | --- | --- |
| `cpu_package` | RAPL | Package-level estimate |
| `gpuN` | `rocm-smi` | Instantaneous / average watts |

Details: [Energy & reports](/docs/project/compilersutra-perf/energy-and-reports/).

## Platform matrix (0.2.0)

| Feature | Linux | macOS |
| --- | --- | --- |
| Compile + run CPU | Supported | Experimental |
| `--cpu-affinity` | Supported | Rejected |
| Hardware counters | `perf` / PAPI | powermetrics (passwordless `sudo`) |
| HIP / OpenCL / Vulkan | As in [Usage](/docs/project/compilersutra-perf/usage/) | Toolchains often absent |

## Evidence labels ([Observatory](/docs/project/compilersutra-perf/observatory/))

| Label | Examples |
| --- | --- |
| Hardware measurement | Wall time, `perf` / PAPI, rocprof, RAPL |
| Model-based estimation | `llvm-mca` (roadmap) |
| Static analysis only | Asm / instruction count suites (roadmap) |

Never present theoretical analysis as measured hardware performance.

## What not to publish yet

- Cross-backend “speedup” without matched workload, size, and measure mode  
- OpenCL times without `--opencl-measure`  
- macOS cycles as Linux `perf` `cpu-cycles`  
- Scaled / separate-execution counters as if they were continuous same-exec counts  
- CUDA / Metal (not implemented)  
- Vulkan validation as a kernel benchmark  

## See also

- [Usage](/docs/project/compilersutra-perf/usage/) — flags  
- [Architecture](/docs/project/compilersutra-perf/architecture/) — where measurement sits in the pipeline  
- [Troubleshooting](/docs/project/compilersutra-perf/troubleshooting/) — `perf` access and symbol errors  
- External: [perfwiki tutorial](https://perfwiki.github.io/main/tutorial/) — `perf stat`, events, multiplexing  
