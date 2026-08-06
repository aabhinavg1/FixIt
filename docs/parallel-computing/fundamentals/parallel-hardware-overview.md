---
title: Parallel Hardware Overview
description: An overview of the hardware that executes parallel code — CPU cores, SIMD/AVX vector units, GPU cores, accelerators, and the cache hierarchy that keeps them fed.
keywords:
  - parallel hardware
  - cpu cores
  - SIMD AVX
  - vector units
  - GPU cores
  - accelerators
  - cache hierarchy
  - cache levels
  - throughput computing
  - latency computing
  - memory hierarchy
  - multicore cpu
  - gpu architecture
  - hardware threads
---

# Parallel Hardware Overview

Parallel software runs on a hierarchy of parallel hardware: **cores** inside a CPU, **vector units** inside each core, **GPU cores** in their thousands, and **specialized accelerators** beyond both. To tune parallel code you must know which level of the machine you are targeting, because each level has different economics — different latency, throughput, and parallelism.

## The Three Big Parallelism Levels in Hardware

1. **Multiple cores (MIMD)** — a handful to hundreds of general-purpose cores, each running its own instruction stream. Best for *general* parallelism.
2. **Vector units (SIMD)** — each core has wide registers that operate on many elements per instruction. Best for *dense, regular* data (math on arrays).
3. **Massively parallel accelerators (GPUs)** — thousands of small cores with huge throughput. Best for *highly parallel, data-heavy* workloads.

## 1. CPU: Cores

A modern server CPU has 8–128 cores, each a full execution engine:

- Its own **registers** and ALUs.
- Private **L1 and L2 caches**.
- **Hardware threads (SMT)** — typically 2 logical threads per physical core, so the OS sees 2× the threads.

### Core Performance Model: Latency-oriented

CPU cores are built to minimize the **latency of a single thread**: deep out-of-order execution, branch prediction, speculative execution, large caches. They deliver high performance on *irregular* work that cannot be parallelized much. The cost is huge silicon area and power per unit of throughput.

```
Core
├─ Out-of-order scheduler
├─ ALUs / FPU
├─ SIMD unit (AVX-512: 16×32-bit or 8×64-bit per instruction)
├─ L1 cache (32–64 KB, ~1 ns)
├─ L2 cache (1–2 MB, ~4 ns)
└─ (shared) L3 cache (tens of MB, ~15–40 ns)
```

### CPU Cache Hierarchy

The cache hierarchy exists to hide the 100 ns DRAM latency. Data moves up toward the core in fixed-size **cache lines** (64 B). For parallel code the consequences are:

- **Locality wins** — a thread reusing its cache-resident data runs orders of magnitude faster than one missing the cache.
- **Shared caches** (L3 is often shared by all cores on a chip; on many chips L2 is shared by two cores) create implicit sharing — and the coherence traffic covered in [Memory Models](/docs/parallel-computing/fundamentals/memory-models).

## 2. SIMD / Vector Units

Modern CPU cores contain **vector units** that process several data elements with one instruction:

- x86: SSE (128-bit) → AVX (256-bit) → AVX-512 (512-bit).
- ARM: NEON (128-bit), SVE (scalable vector extension).
- A 512-bit unit can compute **16 single-precision floats or 8 doubles per instruction**.

```
Scalar:  c[0]=a[0]+b[0]; c[1]=a[1]+b[1]; ...  (8 instructions)

AVX2:    addps ymm0, ymm1, ymm2               (1 instruction, 8 floats)
```

You get SIMD three ways:

- **Auto-vectorization** — compilers vectorize simple loops (`-O3 -mavx2`).
- **Intrinsics** — explicit `_mm256_*` calls.
- **OpenMP SIMD / `#pragma omp simd`** — direct control.

```cpp
#pragma omp simd
for (int i = 0; i < n; i++) c[i] = a[i] * b[i] + c[i];
```

SIMD is the *cheapest* parallelism: it needs no threads, no locks, and no new cores — just a wide instruction. But it requires **regular, contiguous, dependency-free loops**.

## 3. GPUs: Massively Parallel Cores

A GPU is a **throughput-oriented** machine: thousands of small, simple cores designed to hide latency by having *more work in flight than it could possibly finish*, rather than by doing each task fast.

- NVIDIA: CUDA **cores**, grouped into **SMs** (streaming multiprocessors); threads run in **warps** of 32.
- AMD: **stream processors**, grouped into CUs; threads run in **wavefronts** of 64.
- Intel: **Xe cores**.

### The GPU Execution Model (SIMT)

A GPU executes groups of threads in lockstep — every thread in a **warp** runs the same instruction on different data. If threads in a warp take different branches (thread divergence), both paths execute serially and throughput drops.

```
SM (streaming multiprocessor)
├─ warp scheduler(s)
├─ warp 0: 32 threads ── SIMD-wide execution
├─ warp 1: 32 threads
├─ ... many warps resident to hide memory latency
├─ shared memory (per-SM, programmer-managed)
└─ registers (partitioned among resident threads)
```

### Why GPUs Are Different

| | CPU | GPU |
|---|---|---|
| Design goal | Low latency for one thread | High total throughput |
| Core count | tens | thousands |
| Threads in flight | tens | tens of thousands |
| Cache | large per-core | small; relies on massive thread parallelism |
| Memory | cache hierarchy + big DRAM | DRAM + programmer-managed shared memory |
| Best for | irregular, branchy, latency-bound | dense, regular, massively parallel |

A GPU's strength is **occupancy**: keeping thousands of threads resident so that when one group stalls on memory, another group's arithmetic covers the wait. The flip side: the memory latency is *exposed* — you cannot just rely on caches, you must structure data access (see the CUDA and GPU memory articles in later phases).

## 4. Accelerators

Beyond CPUs and GPUs there is a spectrum of specialized accelerators, often with their own programming models:

- **NPUs / TPUs** — matrix engines for deep learning (Google TPU, Apple Neural Engine, NVIDIA Tensor Cores, AMD Matrix Cores). They are SIMD-on-steroids: a single instruction performs a large matrix multiply.
- **FPGAs** — configurable hardware, programmed with HDL or high-level synthesis; useful for fixed, low-latency pipelines.
- **Emerging AI accelerators** — Groq, Cerebras (wafer-scale), Tenstorrent, and others trade off programmability for raw throughput. These are covered in [Current State & Trends](/docs/parallel-computing/current-state/hardware-landscape).

Tensor cores (NVIDIA), for example, multiply 4×4 matrices per instruction — the work of 64 MACs (multiply-accumulates) in one cycle. When your workload is matrix-heavy, this is thousands of times more efficient than scalar code.

## The Full Memory Hierarchy (Putting It Together)

```
                        Access 1-2 GB/s each  (order of magnitude)
Registers  ~0.3 ns     ────────────┬────────────
L1 cache   ~1 ns        ───────────┴──────┐
L2 cache   ~4 ns        ──────────────────┴────┐
L3 cache   ~15-40 ns    ───────────────────────┴────┐
DRAM       ~100 ns      ────────────────────────────┴────┐
SSD/HDD    ~10⁵-10⁷ ns  ──────────────────────────────────┴────→
                        increasing capacity, increasing latency
```

Parallel performance is, more than anything else, a **memory problem**:

- Keep each worker's working set **in its local caches** (locality).
- Avoid **false sharing** (see [Memory Models](/docs/parallel-computing/fundamentals/memory-models)).
- On GPUs, feed the compute with **coalesced** memory accesses and explicit shared memory.

## Choosing the Right Hardware Parallelism

| Workload shape | Best hardware | Programming model |
|----------------|---------------|-------------------|
| Irregular, branchy, latency-bound | CPU cores | OpenMP, TBB, threads |
| Regular, dense, element-wise | CPU SIMD | auto-vec, `#pragma omp simd` |
| Massively parallel, data-heavy | GPU | CUDA, SYCL, Vulkan compute |
| Matrix multiply / ML | Tensor cores / NPUs | cuBLAS, oneDNN, torch |
| Fixed low-latency pipeline | FPGA | HLS / HDL |

In practice, real systems combine several: a CPU dispatches, uses its cores and SIMD for the sequential part, and offloads the massive parallel part to a GPU — the exact pattern of modern ML compilers.

## Summary

- **Parallelism exists at several hardware levels**: cores, SIMD units, GPUs, and accelerators.
- **CPUs** are latency-oriented: few fast cores with large caches; SIMD units are the cheap win inside a core.
- **GPUs** are throughput-oriented: thousands of small cores hide latency with massive thread counts (SIMT).
- **Accelerators** (tensor cores/NPUs/FPGAs) specialize for matrix or fixed workloads.
- The **memory hierarchy** dominates performance: locality and bandwidth matter more than raw FLOPs.

### What's Next

- [Measuring Parallel Performance](/docs/parallel-computing/fundamentals/measuring-parallel-performance) — how to tell whether this hardware is being used well.
- [Program, Process, Thread, Core](/docs/parallel-computing/fundamentals/program-process-thread-core) — the software units that map onto this hardware.
