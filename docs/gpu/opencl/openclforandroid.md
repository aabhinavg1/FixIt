---
title: "OpenCL for Android Master"
description: "Master page for OpenCL on Android, covering device detection, runtime availability, and future Android-specific OpenCL setup content."
keywords:
 - OpenCL Android
 - OpenCL for Android
 - Android OpenCL guide
 - Android GPU OpenCL
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


# OpenCL for Android Master

This page is the Android-specific master for OpenCL content.

:::tip
This Android track has been tested for the current detection workflow. It is still narrower than the AMDGPU track, but the existing detection article is active rather than placeholder-only.
:::

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '18px', marginBottom: '24px'}}>
  <a href="/docs/gpu/opencl/basic/detecting_opencl_gpu_on_android" style={{display: 'block', padding: '18px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '14px', textDecoration: 'none'}}>
    <strong>Android Detection</strong>
    <div style={{marginTop: '8px', opacity: 0.8}}>Check whether an Android device exposes an OpenCL-capable GPU.</div>
  </a>
</div>

## Scope

This track is for Android-focused OpenCL workflows, especially:

- checking whether an Android device exposes an OpenCL-capable GPU
- understanding vendor/runtime availability on Android
- validating platform detection before writing kernels

## Current docs

- [Detecting OpenCL GPU on Android](https://www.compilersutra.com/docs/gpu/opencl/basic/detecting_opencl_gpu_on_android)
- [What is OpenCL?](https://www.compilersutra.com/docs/gpu/opencl/basic/what_is_opencl)

## Planned direction

This track should eventually include:

- Android OpenCL runtime discovery
- NDK-based OpenCL host setup
- vendor-specific Android GPU caveats
- mobile performance and thermal constraints
