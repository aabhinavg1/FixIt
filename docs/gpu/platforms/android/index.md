---
title: Android GPU Track
description: Learn parallel / GPGPU programming on Android phone GPUs (Adreno, Mali) with OpenCL detection and Vulkan compute.
keywords:
  - Android GPU programming
  - phone GPU parallel programming
  - Adreno OpenCL
  - Mali GPU compute
  - Vulkan compute Android
  - learn GPGPU on smartphone
---

import Link from '@docusaurus/Link';
import AdBanner from '@site/src/components/AdBanner';

# Android GPU Track

Use the GPU in your phone to learn **data-parallel** programming: kernels, work-items, workgroups, memory traffic, and honest timing — without a desktop GPU.

<AdBanner />

## Start here

1. [Learn parallel programming on your phone GPU](/docs/gpu/platforms/android/learn-parallel-on-phone) — full learning path  
2. [Detect OpenCL on Android](/docs/gpu/opencl/basic/detecting_opencl_gpu_on_android) — first on-device check  
3. [OpenCL for Android hub](/docs/gpu/opencl/openclforandroid)

## Stack reality on phones

| API | Role on Android |
|-----|-----------------|
| **Vulkan compute** | Most portable long-term path |
| **OpenCL** | Available on many Adreno/Mali devices via vendor `libOpenCL.so` — detect first |
| **CUDA** | Not on phones |

## Coming next on this track

- First OpenCL kernel on Android (vector add)  
- Vulkan compute hello-dispatch APK  
- Measuring GPU time (warmup, median, thermal)  
- Adreno vs Mali beginner checklist  

## External references

- [Vulkan: Compute on Android](https://docs.vulkan.org/tutorial/latest/Advanced_Vulkan_Compute/12_Mobile_and_Embedded_Compute/02_android_compute.html)  
- [Android: RenderScript → Vulkan](https://developer.android.com/guide/topics/renderscript/migrate/migrate-vulkan)  
- [Arm OpenCL programming guide (PDF)](https://developer.arm.com/-/media/developer/Graphics%20and%20Multimedia/Developer%20Guides%20-%20PDFs/Arm%20Guide%20to%20OpenCL%20Programming.pdf)

Back to [GPU Platforms](/docs/gpu/platforms/).
