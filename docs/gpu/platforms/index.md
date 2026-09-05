---
title: GPU Platforms
description: Pick your GPU stack — Android phone GPUs, CUDA, ROCm, Mac/Metal, Vulkan, and more. CompilerSutra GPU tutorial tracks by platform.
slug: /gpu/platforms/
keywords:
  - GPU platforms
  - CUDA tutorial
  - ROCm tutorial
  - Android GPU programming
  - Mac Metal GPU
  - Vulkan compute
  - learn GPU programming by platform
---

import Link from '@docusaurus/Link';
import AdBanner from '@site/src/components/AdBanner';

# GPU Platforms

Same parallel ideas (kernels, workgroups, memory) — different stacks per machine.  
Pick the track that matches **the hardware you have**, then follow that path.

<AdBanner />

## Tracks

<div style={{display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginBottom: '1.5rem'}}>
  <div style={{padding: '1rem', borderRadius: '18px', border: '1px solid var(--ifm-color-emphasis-200)'}}>
    <h3 style={{marginTop: 0}}>Android</h3>
    <p>Phone GPUs (Adreno / Mali). OpenCL detect + Vulkan compute.</p>
    <Link to="/docs/gpu/platforms/android/">Open Android track</Link>
  </div>
  <div style={{padding: '1rem', borderRadius: '18px', border: '1px solid var(--ifm-color-emphasis-200)'}}>
    <h3 style={{marginTop: 0}}>CUDA (NVIDIA)</h3>
    <p>Desktop / datacenter NVIDIA GPUs. Classic GPGPU path.</p>
    <Link to="/docs/gpu/platforms/cuda">Open CUDA track</Link>
  </div>
  <div style={{padding: '1rem', borderRadius: '18px', border: '1px solid var(--ifm-color-emphasis-200)'}}>
    <h3 style={{marginTop: 0}}>ROCm (AMD)</h3>
    <p>AMD GPUs with HIP / ROCm tooling and OpenCL on AMDGPU.</p>
    <Link to="/docs/gpu/platforms/rocm">Open ROCm track</Link>
  </div>
  <div style={{padding: '1rem', borderRadius: '18px', border: '1px solid var(--ifm-color-emphasis-200)'}}>
    <h3 style={{marginTop: 0}}>Mac</h3>
    <p>Apple Silicon — Metal, and what still works for OpenCL/Vulkan.</p>
    <Link to="/docs/gpu/platforms/mac">Open Mac track</Link>
  </div>
  <div style={{padding: '1rem', borderRadius: '18px', border: '1px solid var(--ifm-color-emphasis-200)'}}>
    <h3 style={{marginTop: 0}}>Vulkan</h3>
    <p>Cross-vendor compute (desktop + Android). SPIR-V pipelines.</p>
    <Link to="/docs/gpu/platforms/vulkan">Open Vulkan track</Link>
  </div>
  <div style={{padding: '1rem', borderRadius: '18px', border: '1px solid var(--ifm-color-emphasis-200)'}}>
    <h3 style={{marginTop: 0}}>Other</h3>
    <p>Intel / oneAPI, SYCL, and stacks we add next.</p>
    <Link to="/docs/gpu/platforms/other">Open other platforms</Link>
  </div>
</div>

## Shared foundations (all platforms)

- [What is a GPU?](/docs/gpu/what_is_gpu)
- [CPU vs GPU](/docs/gpu/CPU_Vs_GPU)
- [Intro to Parallel Programming](/docs/gpu/Parallel_Programming/Intro_to_Parallel_Programming)
- [Parallel Computing curriculum](/docs/parallel-computing/)
- [GPU Programming TOC](/docs/gpu/gpu_programming/gpu_programming_toc)

## Related OpenCL hubs (already on site)

- [OpenCL Master](/docs/gpu/opencl/opencl)
- [AMDGPU](/docs/gpu/opencl/amdgpu) · [AMD CPU](/docs/gpu/opencl/amdcpu) · [NVIDIA](/docs/gpu/opencl/nvidia) · [Android](/docs/gpu/opencl/openclforandroid)
