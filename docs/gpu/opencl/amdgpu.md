---
title: "AMDGPU OpenCL Master"
description: "Professional landing page for OpenCL on AMD GPUs, covering ROCm setup, ICD loader validation, compile flows, and the fastest path from bring-up to kernel development."
keywords:
- AMDGPU OpenCL
- ROCm OpenCL
- AMD GPU OpenCL guide
- OpenCL on Radeon
- AMDGPU ROCm validation
- OpenCL ROCm landing page
  - AMDGPU OpenCL
- ROCm OpenCL
- AMD GPU OpenCL guide
- OpenCL on Radeon
- AMDGPU ROCm validation
- OpenCL ROCm landing page
- opencl on amd gpu
- amd opencl tutorial
- rocm opencl tutorial
- rocm vs opencl
- rocm installation guide
- amd rocm setup ubuntu
- opencl rocm setup linux
- rocm supported gpus
- amd gpu compute opencl
- opencl vs rocm performance
- rocm opencl vs hip
- hip vs opencl amd
- amd gpu programming opencl
- opencl on amd radeon gpu
- rocm drivers installation
- amd opencl drivers linux
- amd opencl drivers windows
- opencl amd performance tuning
- rocm performance optimization
- amd gpu parallel programming
- opencl heterogeneous computing amd
- amd gpu compute framework
- rocm opencl example
- opencl on amd cpu
- amd opencl sdk
- rocm developer guide
- opencl amdgpu stack
- rocm opencl compatibility
- amd gpu compute benchmarks opencl
- opencl vs cuda amd gpu
- rocm machine learning gpu
- amd gpu deep learning opencl
- rocm vs cuda performance
- amd gpu opencl matrix multiplication
---

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

# AMDGPU OpenCL Master

<style>{`
  .amdgpu-hero {
    padding: 20px;
    border: 1px solid var(--ifm-color-emphasis-300);
    border-radius: 18px;
    background:
      radial-gradient(circle at top right, rgba(255, 112, 67, 0.14), transparent 32%),
      radial-gradient(circle at bottom left, rgba(255, 193, 7, 0.10), transparent 28%),
      linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
    box-shadow: 0 18px 40px rgba(0,0,0,0.10);
    margin-top: 12px;
    margin-bottom: 24px;
  }

  .amdgpu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 18px;
    margin-bottom: 24px;
  }

  .amdgpu-card {
    display: block;
    padding: 18px;
    border: 1px solid var(--ifm-color-emphasis-300);
    border-radius: 14px;
    text-decoration: none;
    background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
    transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
    box-shadow: 0 10px 28px rgba(0,0,0,0.08);
  }

  .amdgpu-card:hover {
    transform: translateY(-4px);
    border-color: var(--ifm-color-primary);
    box-shadow: 0 16px 34px rgba(0,0,0,0.12);
  }

  .amdgpu-chip {
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid var(--ifm-color-emphasis-300);
    font-size: 0.92rem;
  }
`}</style>

<div className="amdgpu-hero">
  <div style={{fontSize: '0.95rem', opacity: 0.8, marginBottom: '8px'}}>OpenCL Track / AMDGPU</div>
  <h1 style={{marginBottom: '10px'}}>AMDGPU OpenCL Master</h1>
  <p style={{marginBottom: '14px'}}>
    This is the most mature OpenCL track in the repository. It covers the real ROCm bring-up path, the AMD ICD loader flow,
    validation with `clinfo`, and host-side compilation using the paths that worked on the current AMDGPU machine.
  </p>
  <div>
    <span className="amdgpu-chip">Tested</span>
    <span className="amdgpu-chip">ROCm</span>
    <span className="amdgpu-chip">ICD Loader</span>
    <span className="amdgpu-chip">Clang Flow</span>
    <span className="amdgpu-chip">Multi-GPU Aware</span>
  </div>
</div>

:::tip
This track has been run and tested on the current AMDGPU machine used for this documentation work.
:::

## Quick Start

If your goal is to get from zero to a validated AMD OpenCL environment fast, use this order:

1. Confirm your GPU and distro are supported by the ROCm compatibility matrix.
2. Install the ROCm OpenCL packages.
3. Verify `amdgpu`, `clinfo`, and `amdocl64.icd`.
4. Compile the probe with the documented ROCm include and library paths.
5. Move into kernel-writing only after the probe succeeds.

<div className="amdgpu-grid">
  <a href="/docs/gpu/opencl/basic/getting_started_with_opencl_on_amdgpu" className="amdgpu-card">
    <strong>Bring-up Guide</strong>
    <div style={{marginTop: '8px', opacity: 0.8}}>
      ROCm install, ICD path, validation commands, compile fixes, and FAQ.
    </div>
    <div style={{marginTop: '12px', color: 'var(--ifm-color-primary)'}}>Open the full AMDGPU setup guide</div>
  </a>
  <a href="/docs/gpu/opencl/basic/Writing_your_first_kernel" className="amdgpu-card">
    <strong>Kernel Writing</strong>
    <div style={{marginTop: '8px', opacity: 0.8}}>
      Continue from validated setup into actual OpenCL kernel authoring.
    </div>
    <div style={{marginTop: '12px', color: 'var(--ifm-color-primary)'}}>Move into your first kernel</div>
  </a>
  <a href="/docs/gpu/opencl/basic/running_first_opencl_code" className="amdgpu-card">
    <strong>First Program</strong>
    <div style={{marginTop: '8px', opacity: 0.8}}>
      Understand the host-side program flow before optimizing for AMD hardware.
    </div>
    <div style={{marginTop: '12px', color: 'var(--ifm-color-primary)'}}>Review the first OpenCL program flow</div>
  </a>
</div>

## What This Track Solves

- ROCm installation and package selection for AMD OpenCL
- why `libOpenCL.so` alone is not enough
- how `amdocl64.icd` connects the loader to AMD's runtime
- why `clinfo` can work even when `-lOpenCL` fails during compilation
- how to compile with `clang`, `gcc`, or CMake on AMDGPU systems
- how to handle multi-GPU output without assuming `GPU 0` is always correct

## Tested Validation Snapshot

The AMDGPU flow in this repo was validated against a machine that reported:

```text
Platform 0: AMD Accelerated Parallel Processing
  GPU 0: gfx1200
  GPU 1: gfx1036
```

That confirms the documented path is not theoretical. It was exercised against a live AMDGPU + ROCm system.

## Recommended Reading Path

### 1. Foundation

- [OpenCL Master Guide](https://www.compilersutra.com/docs/gpu/opencl/opencl)
- [What is OpenCL?](https://www.compilersutra.com/docs/gpu/opencl/basic/what_is_opencl)

### 2. Bring-up

- [Getting Started with OpenCL on AMDGPU](https://www.compilersutra.com/docs/gpu/opencl/basic/getting_started_with_opencl_on_amdgpu)
- [How to Install and Set Up OpenCL on Linux, Windows, and macOS](https://www.compilersutra.com/docs/gpu/opencl/basic/setting_up_opencl)

### 3. First executable flow

- [Beginner to Expert Guide: Running Your First OpenCL Hello World Program](https://www.compilersutra.com/docs/gpu/opencl/basic/running_first_opencl_code)
- [Running Your First OpenCL Program Part 2](https://www.compilersutra.com/docs/gpu/opencl/basic/running_first_opencl_code_part2_a)

### 4. Kernel work

- [Writing Your First OpenCL Kernel](https://www.compilersutra.com/docs/gpu/opencl/basic/Writing_your_first_kernel)

## Track Standards

For this AMDGPU track, the working assumptions are:

- prefer **`clang`** in future examples
- prefer **explicit ROCm include and library paths** when the system linker path is incomplete
- verify the runtime before discussing optimization
- treat ICD files and driver state as first-class debugging targets

## When This Track Is The Right Choice

Use this AMDGPU track when:

- your hardware target is an AMD GPU
- you want an OpenCL path on ROCm rather than only HIP
- you need a practical bring-up and validation flow, not just a conceptual tutorial

If your target is not AMD GPU hardware, go back to the [OpenCL Master Guide](https://www.compilersutra.com/docs/gpu/opencl/opencl) and choose the track that matches your platform.
