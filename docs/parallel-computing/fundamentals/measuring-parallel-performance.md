---
title: Measuring Parallel Performance
description: Learn how to measure parallel programs — speedup, efficiency, scalability, parallel overhead, load balancing, and how to profile and interpret scaling curves.
keywords:
  - measuring parallel performance
  - parallel speedup
  - efficiency
  - scalability
  - parallel overhead
  - load balancing
  - strong scaling
  - weak scaling
  - Amdahl speedup measurement
  - karp-flatt metric
  - profiling parallel code
  - parallel performance metrics
  - hpc benchmarking
---

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

# Measuring Parallel Performance

Parallel code is easy to write badly and hard to judge correctly. This article gives you the **metrics** used to evaluate a parallel program — speedup, efficiency, scalability, overhead, and load balance — and the practical workflow to measure them.

## The Core Metrics

### Speedup

<BlockMath>{String.raw`S(p) = \frac{T(1)}{T(p)}`}</BlockMath>

The ratio of serial baseline time to parallel time. **Linear speedup** is `S(p) = p`. Superlinear speedup (rare) happens when the parallel run fits a *larger* combined cache, so each thread runs faster than the serial baseline's cache misses allowed.

### Efficiency

<BlockMath>{String.raw`E(p) = \frac{S(p)}{p} = \frac{T(1)}{p \cdot T(p)}`}</BlockMath>

Efficiency measures how well you use the added processors, as a fraction of ideal. 100% is perfect linear speedup.

| p | T(p) | Speedup | Efficiency |
|---|------|---------|-----------|
| 1 | 100 s | 1.0× | 100% |
| 2 | 52 s | 1.92× | 96% |
| 4 | 30 s | 3.33× | 83% |
| 8 | 22 s | 4.5× | 56% |
| 16 | 19 s | 5.3× | 33% |

Efficiency dropping with `p` is normal — it reveals the growing overhead (communication, contention, Amdahl's serial fraction).

### Scalability

**Scalability** is how speedup (or efficiency) changes as processors are added:

- **Strong scaling** — fixed problem size; does time keep falling? (Amdahl governs: it flattens.)
- **Weak scaling** — problem size grows with `p`; does time stay constant? (Gustafson governs: near-constant is good.)

Measure both, because a program can scale weakly and fail strongly (or vice versa).

```
Strong scaling curve (T vs p):         Weak scaling curve (T vs p, size ~ p):
      T                                    T
      │\_____________          ideal       │
      │     ████████ flatten               │ ▁▁▁▁▁▁▁▁  ideal (flat)
      │  ████                              │  █████
      └──────────────→ p                   └──────────────→ p
         flatten = Amdahl ceiling             rising = overhead / imbalance
```

### Parallel Overhead

Overhead is all the time *not* spent on useful work that parallelizing introduced:

- Thread/process **creation and teardown**.
- **Synchronization**: barriers, locks, atomics.
- **Communication**: message passing (MPI), data transfer (GPU host↔device).
- **Load imbalance**: idle workers waiting for the slowest.
- **Contention**: competition for memory bandwidth, caches, locks.

Overhead is why efficiency is < 100%. The total time is:

<BlockMath>{String.raw`T(p) = \frac{T_{par}}{p} + T_{serial} + T_{overhead}(p)`}</BlockMath>

### Load Balancing

If work is split unevenly, some workers idle while others grind — the total time is set by the **slowest worker**:

<BlockMath>{String.raw`T(p) \geq T_{max\_worker} = \max_{i} T_{worker_i}`}</BlockMath>

The **imbalance ratio** is a useful number:

```text
imbalance = (time of slowest worker) / (mean worker time)
```

An imbalance of 1.0 is perfect; 1.5 means the slowest worker takes 50% longer than average. Common causes: work items with variable cost, non-contiguous data splits, and heterogeneous hardware.

## The Measurement Workflow

### 1. Baseline First

Measure `T(1)` carefully on the *same* machine, with the *same* compiler flags, and with parallelism **disabled** — not on one thread spawned by a parallel runtime. The baseline defines every metric derived from it.

### 2. Use the Right Timer

Never use wall-clock between prints for a serious benchmark. Use a monotonic clock:

```cpp
#include <chrono>
auto t0 = std::chrono::steady_clock::now();
run_work();
auto t1 = std::chrono::steady_clock::now();
double secs = std::chrono::duration<double>(t1 - t0).count();
```

or the OpenMP timer:

```cpp
double t0 = omp_get_wtime();
run_work();
printf("%.3f s\n", omp_get_wtime() - t0);
```

Run each configuration **multiple times** and take the *minimum* (best case) or median — not the mean, which is skewed by OS noise.

### 3. Vary Processors, Keep Everything Else Fixed

For each `p` in `1, 2, 4, 8, 16, ...`:

- Same input size (strong scaling).
- Same machine, same build.
- Record `T(p)`, `S(p)`, `E(p)`.

A compact script (Python pseudo-code):

```python
import subprocess

for p in [1, 2, 4, 8, 16]:
    times = []
    for trial in range(5):
        out = subprocess.run(["./app", str(p)],
                             capture_output=True, text=True)
        times.append(float(out.stdout.strip()))
    best = min(times)
    print(f"p={p:2d}  T={best:8.4f}s  S={best_of_t1/best:5.2f}x  E={(best_of_t1/best)/p*100:5.1f}%")
```

### 4. Attribute the Loss

When speedup is poor, use the **Karp-Flatt metric** to separate *serial fraction* from *overhead/imbalance*. Karp and Flatt showed you can estimate the "experimentally determined serial fraction" as:

<BlockMath>{String.raw`e(p) = \frac{\frac{1}{S(p)} - \frac{1}{p}}{1 - \frac{1}{p}}`}</BlockMath>

- If `e(p)` **stays constant** as `p` grows → the loss is a fixed serial fraction (Amdahl's α).
- If `e(p)` **rises** with `p` → the loss is parallelism overhead (communication, synchronization, imbalance).

### 5. Profile, Don't Guess

Use a profiler to find where parallel time goes:

```bash
# Linux perf: count cache misses, branch misses, cycles
perf stat -e cache-misses,context-switches,cycles ./app 8

# Per-thread CPU usage
top -H -p $(pgrep app)

# OpenMP timing regions
#pragma omp parallel for schedule(dynamic)
for (int i = 0; i < n; i++) { ... }
```

For OpenMP, wrap each region with `omp_get_wtime()` and print per-region times to spot imbalanced or poorly scaling loops. For MPI, profile with `mpiP`/`Scalasca`/`Tau`. For GPUs, use `ncu` (NVIDIA Nsight Compute) and `nsys` (Nsight Systems).

## Interpreting Common Scaling Patterns

| Pattern | Meaning | Likely cause |
|---------|---------|--------------|
| Flat after a point | Speedup ceiling | Serial fraction (Amdahl) |
| Falls *below* 1 | Parallel run slower than serial | Huge overhead or false sharing |
| Efficiency drops slowly then crashes | Overhead grows with p | Communication / contention |
| One worker always late | Time = max worker | Load imbalance |
| No gain at all | No parallel work found | Problem not parallelizable, or shared resource |

## Best Practices Summary

1. **Measure the right baseline** — `T(1)` with the parallel runtime disabled, same flags.
2. **Use monotonic timers**, multiple runs, and the minimum/median.
3. **Report speedup AND efficiency**, and label strong vs weak scaling.
4. **Check the Karp-Flatt metric** to classify the loss (serial fraction vs overhead).
5. **Profile** — don't guess whether it is cache misses, locks, or imbalance.
6. **Match thread count to hardware** — for compute-bound CPU work, `p` = physical cores is usually the sweet spot; beyond that SMT gives only ~20–30%.

## Summary

- **Speedup** = `T(1)/T(p)`; **efficiency** = `S(p)/p`; **scalability** = how these behave as `p` grows.
- **Strong scaling** (fixed problem) hits Amdahl's wall; **weak scaling** (growing problem) can stay efficient (Gustafson).
- **Overhead and load imbalance** are the two real enemies hidden by raw speedup numbers.
- Use **Karp-Flatt** to tell a serial-fraction problem from an overhead problem, and **profile** to find it concretely.

### What's Next

The Fundamentals are complete. Next step up the curriculum: **CPU shared-memory programming** with [OpenMP Fundamentals](/docs/parallel-computing/cpu-shared-memory/openmp-fundamentals), the most accessible way to write your first real parallel loop.
