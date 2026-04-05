---
title: "NVIDIA OpenCL Master"
description: "Master page for OpenCL on NVIDIA systems, including setup direction, validation flow, and the relationship between OpenCL and CUDA."
keywords:
 - NVIDIA OpenCL
 - OpenCL on NVIDIA
 - OpenCL vs CUDA
---

# NVIDIA OpenCL Master

This page is the NVIDIA-specific master for OpenCL content.

:::warning
This page is currently a placeholder master. The NVIDIA OpenCL track has not been fully run and validated yet, and some future child docs may remain incomplete or be added later.
:::

<div style={{padding: '18px', border: '1px solid var(--ifm-color-warning-contrast-background)', borderRadius: '14px', marginTop: '18px', marginBottom: '24px'}}>
  <strong>Track status</strong>
  <div style={{marginTop: '8px'}}>Structure is in place, but this is not yet a mature end-to-end guide like the AMDGPU track.</div>
</div>

## Scope

This track is for developers who want to run OpenCL workloads on NVIDIA hardware instead of using CUDA directly for every workflow.

## Current foundation docs

- [What is OpenCL?](https://www.compilersutra.com/docs/gpu/opencl/basic/what_is_opencl)
- [How to Install and Set Up OpenCL on Linux, Windows, and macOS](https://www.compilersutra.com/docs/gpu/opencl/basic/setting_up_opencl)
- [Beginner to Expert Guide: Running Your First OpenCL Hello World Program](https://www.compilersutra.com/docs/gpu/opencl/basic/running_first_opencl_code)

## Planned direction

This track should eventually include:

- NVIDIA driver and OpenCL runtime validation
- `clinfo` and loader verification
- OpenCL portability tradeoffs vs CUDA
- common debugging issues on NVIDIA systems
