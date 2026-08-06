---
title: What is Parallel Computing?
description: Learn what parallel computing is, why it exists, Flynn's taxonomy (SISD, SIMD, MISD, MIMD), and the types of parallelism — task, data, and pipeline.
keywords:
  - what is parallel computing
  - parallel computing
  - parallel programming
  - flynn's taxonomy
  - SISD SIMD MISD MIMD
  - task parallelism
  - data parallelism
  - pipeline parallelism
  - concurrency
  - multicore
  - why parallelism matters
  - instruction level parallelism
  - hpc
  - high performance computing
---

# What is Parallel Computing?

**Parallel computing** is the practice of breaking a problem into smaller pieces that can be **executed at the same time** on multiple processing elements — CPU cores, GPU threads, or even separate machines — and then combining the results. It is the opposite of *serial computing*, where a single processing unit executes instructions one after another.

The goal is simple: **do more work in less time** (or do the *same* work faster) by applying more computing resources simultaneously.

## Why Parallelism Exists

Parallelism is not an optional feature of modern computing — it is a *necessity*. To understand why, you need to know what happened to CPU clock speeds.

In the 1990s and early 2000s, single-core performance doubled roughly every 18–24 months. Manufacturers kept shrinking transistors (Moore's Law) and raising clock frequencies, because lower voltages let chips run faster (this was Dennard scaling). Then around **2004–2005** two walls appeared:

- **The power/thermal wall** — Chips ran too hot. Pushing clock frequency higher required disproportionately more power (power scales roughly with frequency³ at the voltage limit), and the heat could not be removed from the die.
- **The memory wall** — The gap between processor speed and DRAM memory speed kept growing, so faster CPUs increasingly *waited* on memory.

The industry's answer was to **stop making single cores faster and instead put more cores on the chip**. Multi-core processors (dual-core, quad-core, then dozens of cores) became standard. But a program only gets faster on a multi-core machine **if it is written to use more than one core**. That is the job of the parallel programmer.

:::note
Clock speeds have largely plateaued since ~2005 (roughly 3–5 GHz for general-purpose CPUs). Every improvement in throughput since then has come from **parallelism**: multiple cores, SIMD vector units, GPU accelerators, and parallel software.
:::

## Serial vs Parallel Execution

Consider a task with 100 units of work.

**Serial execution** — one worker does all 100 units, one at a time:

```
Time →  [1][2][3][4] ... [99][100]
         one worker, total time = 100 units
```

**Parallel execution** — four workers split the work:

```
Time →  [1]   [2]   [3]   [4]
        [5]   [6]   [7]   [8]
         .     .     .     .
        [97]  [98]  [99]  [100]
         four workers, total time ≈ 25 units (ideally)
```

The catch: work cannot always be split cleanly. Some steps depend on earlier steps, and workers must sometimes *communicate* or *synchronize*. That overhead is why a 4-core machine rarely gives a perfect 4× speedup — but it explains why parallelism is worth the effort.

## Flynn's Taxonomy

In 1966, Michael Flynn proposed a way to classify computers based on how they handle **instructions** and **data** simultaneously. It remains the most common way to talk about parallel hardware.

| Class | Full name | Instructions | Data | Typical hardware |
|-------|-----------|--------------|------|------------------|
| **SISD** | Single Instruction, Single Data | 1 stream | 1 stream | Classic single-core CPU |
| **SIMD** | Single Instruction, Multiple Data | 1 stream | multiple streams | GPU, AVX/NEON vector units |
| **MISD** | Multiple Instruction, Single Data | multiple streams | 1 stream | Rare; fault-tolerant systems |
| **MIMD** | Multiple Instruction, Multiple Data | multiple streams | multiple streams | Most modern multi-core CPUs, clusters |

### SISD — Single Instruction, Single Data

A single processing unit fetches one instruction and operates on one piece of data at a time. A traditional un-pipelined, single-core processor is SISD. This is the "serial" model.

### SIMD — Single Instruction, Multiple Data

**One instruction operates on many data elements simultaneously.** A CPU with AVX-512 can add *16 floats at once* with a single instruction; a GPU executes the same kernel instruction across thousands of threads. SIMD is the backbone of both CPU vectorization and GPU throughput.

```cpp
// Scalar (SISD-like): 4 separate adds
for (int i = 0; i < 4; i++) c[i] = a[i] + b[i];

// SIMD: one instruction adds all 4 at once (AVX2)
// __m128 x = _mm_add_ps(_mm_load_ps(a), _mm_load_ps(b));
```

### MISD — Multiple Instruction, Single Data

Multiple instructions operate on the **same** data item. This is rarely used in practice — the main real-world example is **redundant/fault-tolerant systems** where the same data is processed by different units to detect errors (e.g., space shuttle computers).

### MIMD — Multiple Instruction, Multiple Data

Each processing element runs its **own instruction stream** on **its own data**. This is the model used by multi-core CPUs and distributed clusters: each core/process can be running a different part of the program. Most parallel programming (threads, OpenMP, MPI) targets MIMD systems.

:::tip
GPUs combine both: they are MIMD at the block level (many independent thread blocks) and SIMD at the execution level (all threads in a warp/wavefront execute the same instruction). This is often called **SIMT** (Single Instruction, Multiple Threads).
:::

## Types of Parallelism

Beyond hardware taxonomy, parallel *work* can be structured in a few classic ways.

### Task Parallelism

Split the problem into **different tasks** and run them concurrently on different workers. The tasks are often unrelated (or only loosely related), so the key challenge is distributing tasks and balancing load.

```cpp
// Task parallelism: three independent jobs run concurrently
#include <thread>
#include <iostream>

void compress_images() { std::cout << "compressing\n"; }
void parse_logs()      { std::cout << "parsing\n"; }
void train_model()     { std::cout << "training\n"; }

int main() {
  std::thread t1(compress_images);
  std::thread t2(parse_logs);
  std::thread t3(train_model);
  t1.join(); t2.join(); t3.join();
}
```

### Data Parallelism

Split the **data** into chunks and apply the **same operation** to every chunk in parallel. This is the most common and most scalable form of parallelism because the same code runs on every piece of data with no need to write different logic per worker.

```cpp
// Data parallelism: same operation on many elements
// e.g. OpenMP — the loop iterations are split across threads
#pragma omp parallel for
for (int i = 0; i < n; i++) {
  y[i] = a * x[i] + y[i];   // DAXPY, the classic vector op
}
```

### Pipeline Parallelism

Split the problem into **sequential stages** like an assembly line. Different workers handle different stages; work flows through the pipeline. This is how modern CPUs execute instructions (fetch → decode → execute → write back) and how compilers process code (lex → parse → IR → optimize → codegen).

```
Work item A:  Stage1 → Stage2 → Stage3
Work item B:           Stage1 → Stage2 → Stage3
Work item C:                    Stage1 → Stage2 → Stage3
```

Even though each item is processed in order, *different items* are in *different stages* at the same time, so throughput increases.

### Instruction-Level Parallelism (ILP)

Before multicore, CPUs already used parallelism *within* a single core:

- **Pipelining** — overlapping the stages of consecutive instructions.
- **Superscalar execution** — issuing multiple independent instructions per clock cycle.
- **Out-of-order execution** — letting the CPU find independent instructions to run while one is waiting.

ILP is "hidden" parallelism: the programmer writes serial code and the hardware extracts parallelism automatically. It is limited by data dependencies and the cost of the hardware needed to find them.

## A Simple Speedup Example

Suppose a video rendering job has **1,000,000 independent pixels**. A single core renders 100 pixels/second, so serial time is 10,000 seconds.

With **8 cores**, if the work splits perfectly:

```
Speedup = 8 → time ≈ 1,250 seconds
```

With **overheads** (thread creation, load imbalance, memory contention), the real speedup is lower — say 7.2×. The formula you will meet everywhere is **Amdahl's Law**, which puts an upper bound on this speedup based on the fraction of work that *cannot* be parallelized. That is covered in depth in [Amdahl's Law and Gustafson's Law](/docs/parallel-computing/fundamentals/amdahls-and-gustafsons-law).

## When Parallelism Does NOT Help

Parallelism is not free and is not always the answer:

- **Too little work** — The overhead of starting/spreading work can exceed the time saved.
- **Sequential dependencies** — If step B needs 100% of step A's output, the two cannot overlap.
- **Shared-resource contention** — Workers competing for the same memory bus, disk, or lock become the bottleneck.
- **Diminishing returns** — Adding more workers than available resources only adds overhead.

This is why parallel programs are judged not by raw speedup but by **efficiency** and **scalability** (see [Measuring Parallel Performance](/docs/parallel-computing/fundamentals/measuring-parallel-performance)).

## Parallel vs Concurrent

The two terms are often used interchangeably but mean different things:

- **Concurrency** — dealing with *multiple tasks at the same time* (structuring a program into independently progressing pieces). Two tasks can be concurrent even on a single core, by interleaving.
- **Parallelism** — *executing* multiple tasks at the *same instant* on multiple processing elements.

Concurrency is about *structure*; parallelism is about *execution*. You can have concurrency without parallelism (single core with time-slicing), but parallelism generally requires the problem to be decomposable into concurrent pieces.

## Summary

- **Parallel computing** splits work across multiple processing elements to finish faster.
- It exists because **clock speeds stopped scaling** and multi-core chips became the norm.
- **Flynn's taxonomy** classifies hardware as SISD, SIMD, MISD, or MIMD.
- Work can be parallelized by **task**, by **data**, or by **pipeline** structure.
- Parallelism has **overheads and limits** — not every problem gets faster, and speedups are bounded by Amdahl's Law.

### What's Next

- [Program, Process, Thread, Core](/docs/parallel-computing/fundamentals/program-process-thread-core) — the vocabulary you need before writing any parallel code.
- [Memory Models](/docs/parallel-computing/fundamentals/memory-models) — why shared memory is both the greatest tool and the biggest hazard of parallel programming.
