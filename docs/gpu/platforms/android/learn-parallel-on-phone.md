---
title: Learn Parallel Programming on Your Phone GPU
description: Step-by-step path to learn data-parallel programming using an Android phone GPU — fundamentals, OpenCL detection, Vulkan compute, and mobile caveats.
keywords:
  - learn parallel programming on phone
  - Android phone GPU tutorial
  - mobile GPGPU learning path
  - OpenCL Android beginner
  - Vulkan compute phone
---

import AdBanner from '@site/src/components/AdBanner';

# Learn Parallel Programming on Your Phone GPU

You do not need a desktop NVIDIA card to start. Android phones (Adreno / Mali) can run the same **data-parallel** ideas as CUDA courses: kernels, workgroups, memory, speedup — on hardware you already own.

This is a **path**, not a full course dump.

<AdBanner />

## Path (in order)

### 1. Fundamentals

1. [What is Parallel Computing?](/docs/parallel-computing/fundamentals/what-is-parallel-computing)  
2. [Program, Process, Thread, Core](/docs/parallel-computing/fundamentals/program-process-thread-core)  
3. [Amdahl's and Gustafson's Laws](/docs/parallel-computing/fundamentals/amdahls-and-gustafsons-law)  
4. [Measuring Parallel Performance](/docs/parallel-computing/fundamentals/measuring-parallel-performance)

### 2. GPU mental model

1. [What is a GPU?](/docs/gpu/what_is_gpu)  
2. [What is OpenCL?](/docs/gpu/opencl/basic/what_is_opencl)

| Concept | On a phone GPU |
|--------|----------------|
| Work-item | One kernel invocation |
| Workgroup | Threads that can share local memory |
| Global memory | Device DRAM (power + latency cost) |
| Kernel | Code every work-item runs |

### 3. On-device: detect OpenCL

- [Detecting OpenCL GPU on Android](/docs/gpu/opencl/basic/detecting_opencl_gpu_on_android)

Some phones expose OpenCL; some do not. Detect before writing kernels.

### 4. Portable practice: Vulkan compute

| Resource | Why |
|----------|-----|
| [Vulkan Advanced Compute](https://docs.vulkan.org/tutorial/latest/Advanced_Vulkan_Compute/introduction.html) | Parallelism + memory model |
| [Compute on Android](https://docs.vulkan.org/tutorial/latest/Advanced_Vulkan_Compute/12_Mobile_and_Embedded_Compute/02_android_compute.html) | Phone limits + power |
| [Android Vulkan chapter](https://docs.vulkan.org/tutorial/latest/14_Android.html) | App bring-up |

**First exercises:** vector add → reduction → blur/histogram → timed runs (median, not one lucky sample).

### 5. Mobile habits

- Thermal throttling is real — short kernels, report median  
- Query device limits; do not assume desktop sizes  
- Mark truly constant SSBO params `readonly` when applicable  

## Weekly plan

| Week | Goal |
|------|------|
| 1 | Fundamentals + GPU mental model |
| 2 | NDK/ADB + OpenCL detection |
| 3 | First kernel (OpenCL or Vulkan) |
| 4 | One real kernel + honest timing |
| 5 | CPU vs GPU on the same phone |

Part of the [Android GPU Track](/docs/gpu/platforms/android) · [All platforms](/docs/gpu/platforms/)
