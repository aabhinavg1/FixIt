---
title: Amdahl's Law and Gustafson's Law
description: Understand Amdahl's Law and Gustafson's Law — the two fundamental limits of parallel speedup. Learn strong vs weak scaling, worked examples, and practical implications.
keywords:
  - amdahl's law
  - gustafson's law
  - amdahl's law formula
  - speedup
  - strong scaling
  - weak scaling
  - parallel speedup limit
  - scalability
  - gustafson barsis law
  - parallel performance
  - serial fraction
  - parallel fraction
  - hpc
---

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

# Amdahl's Law and Gustafson's Law

Two laws govern how much faster a parallel program can possibly get. Both answer the same question — **"if I add processors, how much faster will my program run?"** — but they make different assumptions, which is why they seem to contradict each other. Knowing both, and *when to use which*, is essential for reasoning about parallel performance.

## Speedup: The Basic Definition

**Speedup** compares the serial execution time to the parallel execution time:

```text
Speedup S(p) = T(1) / T(p)
```

- `T(1)` — time with 1 processor (serial baseline).
- `T(p)` — time with `p` processors.
- Ideal (linear) speedup is `p`: doubling the processors halves the time.

If you run a 100-second job on 10 cores and it finishes in 25 seconds, that is a speedup of `100 / 25 = 4×` — well below the ideal 10×, and the two laws below explain exactly why.

## Amdahl's Law (1967)

Gene Amdahl observed that a program is a mixture of work that **can** be parallelized and work that **cannot** — for example, reading the input, serial initialization, or combining final results. The serial portion simply cannot be sped up by adding processors.

Let:

- `α` = the **serial fraction** of the execution time (the part that cannot be parallelized), 0 ≤ α ≤ 1.
- `p` = number of processors.

Amdahl's Law gives the **upper bound** on speedup:

<BlockMath>{String.raw`S_{Amdahl}(p) = \frac{1}{\alpha + \frac{1 - \alpha}{p}}`}</BlockMath>

As `p → ∞`, the parallel term `(1-α)/p → 0`, so the **maximum possible speedup** is:

<BlockMath>{String.raw`S_{max} = \frac{1}{\alpha}`}</BlockMath>

### Worked Example

Say 5% of a program is serial (α = 0.05) and 95% is parallelizable.

| Processors (p) | Speedup | Efficiency (S/p) |
|----------------|---------|------------------|
| 2 | 1.90× | 95% |
| 4 | 3.48× | 87% |
| 8 | 5.93× | 74% |
| 16 | 9.14× | 57% |
| 32 | 12.37× | 39% |
| 64 | 15.13× | 24% |
| ∞ | **20×** | → 0% |

Even with infinitely many processors, the program never runs faster than **20×** — the 5% serial fraction is an absolute ceiling. This is why Amdahl's Law is often quoted pessimistically: it says *"more processors eventually stop helping."*

### The Practical Takeaway of Amdahl

**The serial fraction matters far more than the number of cores.** Reducing α from 5% to 1% raises the speedup ceiling from 20× to 100×. Optimizing the serial parts of your program is often more valuable than adding cores.

```python
def amdahl_speedup(alpha, p):
    return 1.0 / (alpha + (1.0 - alpha) / p)

for alpha in (0.01, 0.05, 0.20):
    print(alpha, round(amdahl_speedup(0.05, 64), 2),
          "->", round(amdahl_speedup(alpha, 64), 2), "speedup at p=64")
```

## Gustafson's Law (1988)

John Gustafson pointed out that Amdahl's assumption is usually **wrong in practice**. Amdahl fixes the problem size and adds processors — so the serial fraction stays constant while the parallel part shrinks. But real users do the opposite: **as machines get bigger, they solve bigger problems.** If a 1,000-second job fits a cluster, a bigger cluster gets a 10,000-second job — the parallel work *scales with the machine* while the serial part stays roughly fixed.

This is **scaled speedup** (weak scaling). With a serial fraction `α` (now a fraction of the *scaled* problem) and `p` processors:

<BlockMath>{String.raw`S_{Gustafson}(p) = p + (1 - p) \cdot \alpha`}</BlockMath>

Interpretation:

- If everything is parallel (α = 0): speedup = `p` — **linear**. Bigger machines, bigger problems, same time.
- If everything is serial (α = 1): speedup = `1` — no gain.

### Worked Example

A weather model takes 100 seconds: 2 seconds serial + 98 seconds parallel. On a 100-processor machine, we scale the *problem* so the parallel part grows to 9,800 seconds while the serial part stays ~2 seconds.

<BlockMath>{String.raw`S = 100 + (1 - 100) \cdot \frac{2}{9802} \approx 100 + (-99 \cdot 0.0002) \approx 99.98`}</BlockMath>

Speedup ≈ 100× — essentially **linear**, because the serial overhead is now an insignificant fraction of the enlarged problem.

## Strong vs Weak Scaling

The two laws correspond to two measurement strategies:

| | Amdahl | Gustafson |
|---|---|---|
| What scales | Processors only | Processors **and** problem size |
| Problem size | Fixed (strong scaling) | Grows with processors (weak scaling) |
| Speedup of | Fixed-size problem | Time-to-solution for scaled problem |
| Characteristic | Speedup ceiling = 1/α | Near-linear speedup possible |
| Question asked | "How fast can I finish *this* job?" | "How big a job can I finish in the *same* time?" |

- **Strong scaling** — the classic HPC benchmark: fix the problem, add cores, measure how the time drops. Amdahl's Law governs the ceiling.
- **Weak scaling** — grow the problem with the core count (e.g., each core handles a fixed-size grid tile). Gustafson's Law explains why this can stay at near-100% efficiency.

Both are measured in the [Measuring Parallel Performance](/docs/parallel-computing/fundamentals/measuring-parallel-performance) article.

## Why the Two Laws "Disagree"

They do not disagree — they ask different questions:

- Amdahl: *"Fix the workload. Add processors. How fast does it go?"* → a fixed-size job always hits a wall.
- Gustafson: *"Fix the wall-clock budget. Add processors. How much bigger can the workload get?"* → near-linear growth is achievable.

In industry, Gustafson's view usually matches reality: HPC users don't buy a bigger cluster to run last year's problem faster — they run a *bigger* problem. But within any single run, the serial sections still bite, and Amdahl's ceiling applies to that run's fixed size.

## Measuring the Serial Fraction Empirically

You can estimate α by timing runs at two processor counts:

<BlockMath>{String.raw`\alpha = \frac{\frac{1}{S_1} - \frac{1}{p}}{1 - \frac{1}{p}}`}</BlockMath>

where `S_1` is the measured speedup at `p` processors. In practice, most teams simply measure speedup curves and look at where they flatten:

```cpp
// A minimal parallel scaling harness (OpenMP)
#include <omp.h>
#include <cstdio>

double work(int n) {
  double sum = 0.0;
#pragma omp parallel for reduction(+:sum)
  for (int i = 0; i < n; i++) sum += 1.0 / (i + 1);
  return sum;
}

int main() {
  int n = 100000000;
  for (int p = 1; p <= 8; p *= 2) {
    omp_set_num_threads(p);
    double t0 = omp_get_wtime();
    work(n);
    double t1 = omp_get_wtime();
    printf("p=%d  time=%.4fs  speedup=%.2f\n", p, t1 - t0,
           /* serial baseline (p=1) */ ...);
  }
}
```

If the speedup flattens well before the core count, your serial fraction (or synchronization/contention) is the bottleneck.

## Common Pitfalls

1. **Ignoring Amdahl's ceiling** — parallelizing 95% is great, but 5% serial still caps you at 20×.
2. **Ignoring communication** — Amdahl's α should include *all* serial time: startup, teardown, barriers, locks, and communication. On a cluster this can dwarf the arithmetic.
3. **Measuring weak scaling as if it were strong** — comparing scaled-problem times against a fixed serial baseline inflates the "speedup" (it is a different metric).
4. **Assuming speedup is linear** — the gap between your measured curve and the `y = p` line is the overhead story: serial fraction, load imbalance, contention (all covered in the performance article).

## Summary

- **Amdahl's Law** bounds speedup of a *fixed* problem: ceiling `1/α`, so cut the serial fraction ruthlessly.
- **Gustafson's Law** shows *scaled* problems can keep near-linear speedup: grow the workload with the machine.
- **Strong scaling** ↔ Amdahl; **weak scaling** ↔ Gustafson.
- Both laws are tools for *setting expectations*, not for the exact prediction — real runs also suffer overheads like communication, synchronization, and load imbalance.

### What's Next

- [Measuring Parallel Performance](/docs/parallel-computing/fundamentals/measuring-parallel-performance) — speedup, efficiency, scalability, and the overheads the laws abstract away.
- [Parallel Hardware Overview](/docs/parallel-computing/fundamentals/parallel-hardware-overview) — the machine that actually executes your parallel code.
