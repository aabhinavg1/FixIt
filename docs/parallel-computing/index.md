---
title: Parallel Computing Curriculum
description: A comprehensive parallel computing curriculum covering CPU fundamentals, OpenMP, MPI, GPU programming with CUDA/OpenCL/Vulkan/SYCL, and the current state of parallel hardware and software.
keywords:
  - parallel computing
  - multi-threading
  - OpenMP
  - MPI
  - CUDA
  - OpenCL
  - Vulkan compute
  - SYCL
  - process thread core
  - GPU programming
---

import AdBanner from '@site/src/components/AdBanner';

# Parallel Computing Curriculum

Parallel computing is how modern software scales. From the CPU cores in your laptop to the GPU clusters training large models, understanding parallelism is essential for systems programmers, compiler engineers, and performance-minded developers.

This curriculum takes you from the absolute fundamentals — what a process, thread, and core actually are — through shared-memory and distributed-memory CPU programming, into GPU programming with CUDA, OpenCL, Vulkan, and SYCL, and finally to the current state of the parallel hardware and software landscape.

<div>
  <AdBanner />
</div>

## 01 — Fundamentals

| # | Topic | Status |
|---|-------|--------|
| 1 | [What is Parallel Computing?](fundamentals/what-is-parallel-computing.md) — Flynn's Taxonomy, why parallelism matters, task vs data vs pipeline | ✅ Done |
| 2 | [Program, Process, Thread, Core](fundamentals/program-process-thread-core.md) — OS scheduling, context switching, hardware threads | ✅ Done |
| 3 | [Memory Models](fundamentals/memory-models.md) — Shared vs Distributed, UMA/NUMA, MESI, false sharing | ✅ Done |
| 4 | [Amdahl's Law and Gustafson's Law](fundamentals/amdahls-and-gustafsons-law.md) — Speedup limits, strong vs weak scaling | ✅ Done |
| 5 | [Parallel Hardware Overview](fundamentals/parallel-hardware-overview.md) — CPU cores, SIMD/AVX, GPU cores, accelerators, cache hierarchy | ✅ Done |
| 6 | [Measuring Parallel Performance](fundamentals/measuring-parallel-performance.md) — Speedup, efficiency, scalability, overhead, load balancing | ✅ Done |

## 02 — CPU Shared-Memory Parallelism

| # | Topic | Status |
|---|-------|--------|
| 1 | OpenMP — parallel for, sections, tasks, reduction, synchronization | Coming Soon |
| 2 | C++ Parallel STL — `std::execution::par`, `std::for_each`, `std::reduce` | Coming Soon |
| 3 | Thread Pools and Work Stealing | Coming Soon |
| 4 | TBB / oneTBB — Task-Based Parallelism | Coming Soon |

## 03 — CPU Distributed-Memory Parallelism

| # | Topic | Status |
|---|-------|--------|
| 1 | MPI — Point-to-Point Communication | Coming Soon |
| 2 | MPI — Collective Operations (broadcast, scatter, gather, reduce) | Coming Soon |
| 3 | Hybrid MPI+OpenMP Programming | Coming Soon |

## 04 — GPU Programming

| # | Topic | Status |
|---|-------|--------|
| 1 | GPU Architecture Overview — SIMT, Warps, Memory Hierarchy | [Already covered](../gpu/what_is_gpu.md) |
| 2 | CUDA — Kernels, Grid/Block/Thread, Memory Types | Coming Soon |
| 3 | OpenCL — Platform Model, Kernels, Memory | [Already covered](../gpu/opencl/basic/what_is_opencl.md) |
| 4 | Vulkan Compute — SPIR-V, Compute Pipelines | Coming Soon |
| 5 | SYCL — C++ Standard Parallelism for Accelerators | Coming Soon |
| 6 | GPU Optimizations — Occupancy, Coalescing, Shared Memory | [Already covered](../gpu/optimizations.md) |

## 05 — Advanced Topics

| # | Topic | Status |
|---|-------|--------|
| 1 | Atomics and Memory Ordering in C++ | Coming Soon |
| 2 | GPU Register Pressure | [Already covered](../compilers/techblog/register-pressure-on-gpu/) |
| 3 | Performance Profiling — nsys, rocprof, roofline analysis | Coming Soon |

## 06 — Current State

| # | Topic | Status |
|---|-------|--------|
| 1 | Hardware Landscape — NVIDIA, AMD, Intel, Apple Silicon | Coming Soon |
| 2 | Software Trends — CUDA vs SYCL vs Vulkan vs OpenMP Target Offload | Coming Soon |
| 3 | Parallel Computing in the AI Era | Coming Soon |

## Prerequisites

- Basic C++ proficiency (pointers, functions, memory)
- Familiarity with the command line
- For GPU sections: basic understanding of how a computer works

## Related Sections on This Site

- [C++ Threads and Concurrency](../c++/advanced/threads.md) — `std::thread`, mutexes, async/futures
- [GPU Programming Overview](../gpu/gpu_programming/gpu_programming_toc.md) — Full GPU learning path
- [OpenCL Guide](../gpu/opencl/basic/getting_started_with_opencl_on_amdgpu.md) — Getting started with OpenCL
- [HPC MCQs](../mcq/questions/domain/data-science-hpc/parallel-models.mdx) — Test your parallel computing knowledge
