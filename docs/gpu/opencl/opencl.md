---
id: "opencl"
title: "OpenCL Master Guide"
description: "Master index for all OpenCL documentation on CompilerSutra, organized into common foundations, AMDGPU, AMD CPU, NVIDIA, and platform-specific tracks."
keywords:
- OpenCL master guide
- OpenCL documentation index
- OpenCL AMDGPU
- OpenCL AMD CPU
- OpenCL NVIDIA
- OpenCL learning path
- OpenCL roadmap
- OpenCL CompilerSutra
- opencl tutorial
- opencl programming
- opencl guide
- opencl gpu programming
- learn opencl
- opencl tutorial for beginners
- opencl programming tutorial step by step
- how to learn opencl
- opencl course free
- opencl full course
- opencl kernel programming
- opencl memory model explained
- opencl work group and work item
- opencl platform and device model
- opencl host vs device code
- opencl api tutorial
- opencl performance optimization
- opencl optimization techniques
- opencl parallel programming examples
- opencl gpu optimization
- opencl memory optimization
- opencl vs cuda
- cuda vs opencl performance
- opencl vs cuda which is better
- opencl vs cuda benchmark
- opencl nvidia
- opencl amd gpu
- opencl amd cpu
- opencl intel cpu
- opencl setup guide
- opencl installation linux
- opencl installation windows
- opencl installation mac
- opencl example code
- opencl sample programs
- opencl real world examples
- opencl interview questions
- opencl coding questions
- opencl roadmap
- opencl learning path
- opencl documentation
- opencl api reference
- opencl programming examples c
- opencl c language tutorial
- opencl kernels explained
- opencl buffer vs image
- opencl command queue explained
- opencl context creation
- opencl device query example
- opencl profiling tools
- opencl debugging techniques
- opencl error codes
- opencl multi gpu programming
- opencl heterogeneous computing
- opencl parallel reduction example
- opencl matrix multiplication example
- opencl vector addition example
- opencl image processing example
- opencl vs vulkan compute
- opencl vs metal performance
- opencl future scope
- opencl use cases
- opencl in machine learning
- opencl in computer vision
- opencl in embedded systems
---

import AdBanner from '@site/src/components/AdBanner';

📩 Interested in deep dives like pipelines, cache, and compiler optimizations?

<div
  style={{
    width: '100%',
    maxWidth: '900px',
    margin: '1rem auto',
  }}
>
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSebP1JfLFDp0ckTxOhODKPNVeI1e21rUqMJ0fbBwJoaa-i4Yw/viewform?embedded=true"
    style={{
      width: '100%',
      minHeight: '620px',
      border: '0',
      borderRadius: '12px',
      background: '#fff',
    }}
    loading="lazy"
  >
    Loading…
  </iframe>
</div>


# OpenCL Master Guide

<style>{`
  .opencl-track-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 20px;
    margin-bottom: 28px;
  }

  .opencl-track-card {
    display: block;
    padding: 18px;
    border: 1px solid var(--ifm-color-emphasis-300);
    border-radius: 14px;
    text-decoration: none;
    background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    transform: translateY(10px);
    opacity: 0;
    animation: openclCardIn 480ms ease forwards;
    transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
  }

  .opencl-track-card:hover {
    transform: translateY(-4px);
    border-color: var(--ifm-color-primary);
    box-shadow: 0 16px 36px rgba(0,0,0,0.12);
  }

  .opencl-track-card:nth-child(2) { animation-delay: 70ms; }
  .opencl-track-card:nth-child(3) { animation-delay: 140ms; }
  .opencl-track-card:nth-child(4) { animation-delay: 210ms; }

  .opencl-status-tested { color: var(--ifm-color-success); margin-top: 10px; }
  .opencl-status-placeholder { color: var(--ifm-color-warning); margin-top: 10px; }

  @keyframes openclCardIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`}</style>

This page is the master map for the OpenCL docs in this repository. Start here, then move into the track that matches your hardware.

:::warning
Current maturity status:

- **AMDGPU**: implemented and tested
- **Android**: implemented and tested for the current detection flow
- **AMD CPU**: placeholder track, not mature yet
- **NVIDIA**: placeholder track, not mature yet

Some non-AMDGPU and non-Android pages are intentionally early structure pages. They may still contain incomplete guidance or placeholder content.
:::

<div>
  <AdBanner />
</div>

## Table of Contents

1. [How to use this master guide](#how-to-use-this-master-guide)
2. [Common OpenCL foundation](#common-opencl-foundation)
3. [AMDGPU track](#amdgpu-track)
4. [AMD CPU track](#amd-cpu-track)
5. [NVIDIA track](#nvidia-track)
6. [OpenCL for Android](#opencl-for-android)
7. [Other platform tracks](#other-platform-tracks)
8. [Suggested reading order](#suggested-reading-order)

## How to use this master guide

OpenCL content is split into one master hub plus vendor or platform tracks. Pick the track that matches your machine, then follow that track's setup and validation pages.

<div className="opencl-track-grid">
  <a href="/docs/gpu/opencl/amdgpu" className="opencl-track-card">
    <strong>AMDGPU</strong>
    <div style={{marginTop: '8px', opacity: 0.8}}>ROCm, ICD loader, validation, clang build flow.</div>
    <div className="opencl-status-tested">Tested</div>
  </a>
  <a href="/docs/gpu/opencl/amdcpu" className="opencl-track-card">
    <strong>AMD CPU</strong>
    <div style={{marginTop: '8px', opacity: 0.8}}>CPU-first OpenCL execution and toolchain path.</div>
    <div className="opencl-status-placeholder">Placeholder</div>
  </a>
  <a href="/docs/gpu/opencl/nvidia" className="opencl-track-card">
    <strong>NVIDIA</strong>
    <div style={{marginTop: '8px', opacity: 0.8}}>OpenCL on NVIDIA and CUDA tradeoffs.</div>
    <div className="opencl-status-placeholder">Placeholder</div>
  </a>
  <a href="/docs/gpu/opencl/openclforandroid" className="opencl-track-card">
    <strong>Android</strong>
    <div style={{marginTop: '8px', opacity: 0.8}}>Android detection and mobile OpenCL availability.</div>
    <div className="opencl-status-tested">Tested</div>
  </a>
</div>

## Common OpenCL foundation

Start here if you are new to OpenCL or need the common concepts that apply across vendors.

- [What is OpenCL?](https://www.compilersutra.com/docs/gpu/opencl/basic/what_is_opencl)
- [How to Install and Set Up OpenCL on Linux, Windows, and macOS](https://www.compilersutra.com/docs/gpu/opencl/basic/setting_up_opencl)
- [Beginner to Expert Guide: Running Your First OpenCL Hello World Program](https://www.compilersutra.com/docs/gpu/opencl/basic/running_first_opencl_code)
- [Running Your First OpenCL Program Part 2](https://www.compilersutra.com/docs/gpu/opencl/basic/running_first_opencl_code_part2_a)
- [Writing Your First OpenCL Kernel](https://www.compilersutra.com/docs/gpu/opencl/basic/Writing_your_first_kernel)

## AMDGPU track

:::tip
This is the most mature OpenCL track in the repo right now.
:::

- [AMDGPU OpenCL Master](https://www.compilersutra.com/docs/gpu/opencl/amdgpu)
- [Getting Started with OpenCL on AMDGPU](https://www.compilersutra.com/docs/gpu/opencl/basic/getting_started_with_opencl_on_amdgpu)

## AMD CPU track

:::warning
This track is currently a structure page. It is not yet a mature, fully tested setup path.
:::

- [AMD CPU OpenCL Master](https://www.compilersutra.com/docs/gpu/opencl/amdcpu)

## NVIDIA track

:::warning
This track is currently a structure page. It is not yet a mature, fully tested setup path.
:::

- [NVIDIA OpenCL Master](https://www.compilersutra.com/docs/gpu/opencl/nvidia)

## OpenCL for Android

:::tip
The Android detection flow is present and tested, but the broader Android OpenCL setup track is still intentionally small.
:::

- [OpenCL for Android Master](https://www.compilersutra.com/docs/gpu/opencl/openclforandroid)
- [Detecting OpenCL GPU on Android](https://www.compilersutra.com/docs/gpu/opencl/basic/detecting_opencl_gpu_on_android)

## Other platform tracks

Existing and planned side tracks include:

- future Intel CPU and Intel GPU coverage
- future mobile and embedded OpenCL coverage

## Suggested reading order

For most readers, the best order is:

1. Read the common OpenCL foundation docs.
2. Open the vendor-specific master page for your hardware.
3. Follow the setup and validation article for that track.
4. Move into kernels, memory model, and optimization only after the runtime is verified.

Official references:

- [Khronos OpenCL overview](https://www.khronos.org/opencl/)
- [AMD ROCm install on Linux](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/)
