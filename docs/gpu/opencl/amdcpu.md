---
title: "AMD CPU OpenCL Master"
description: "Master page for OpenCL on AMD CPU-oriented execution paths and CPU-first validation workflows."
keywords:
 - AMD CPU OpenCL
 - OpenCL on CPU
 - CPU OpenCL guide
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


# AMD CPU OpenCL Master

This page is the AMD CPU-specific master for OpenCL content.

:::warning
This page is currently a placeholder master. The AMD CPU OpenCL track has not been fully run and validated yet, and some future child docs may remain incomplete or be added later.
:::

<div style={{padding: '18px', border: '1px solid var(--ifm-color-warning-contrast-background)', borderRadius: '14px', marginTop: '18px', marginBottom: '24px'}}>
  <strong>Track status</strong>
  <div style={{marginTop: '8px'}}>Structure is in place, but this is not yet a mature end-to-end guide like the AMDGPU track.</div>
</div>

## Scope

This track is for CPU-oriented OpenCL development where the main goal is:

- validating the host-side OpenCL toolchain
- testing kernels without depending on GPU bring-up first
- keeping code portable across CPU and GPU implementations

## Current foundation docs

- [What is OpenCL?](https://www.compilersutra.com/docs/gpu/opencl/basic/what_is_opencl)
- [How to Install and Set Up OpenCL on Linux, Windows, and macOS](https://www.compilersutra.com/docs/gpu/opencl/basic/setting_up_opencl)
- [Beginner to Expert Guide: Running Your First OpenCL Hello World Program](https://www.compilersutra.com/docs/gpu/opencl/basic/running_first_opencl_code)

## Planned direction

This track should eventually include:

- AMD CPU runtime installation
- CPU device selection
- debugging and correctness-first kernel bring-up
- performance differences between CPU and GPU OpenCL
