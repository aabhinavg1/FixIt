---
title: "Getting Started with OpenCL on AMDGPU"
description: "Set up OpenCL on AMD GPUs using the ROCm stack, verify device discovery with clinfo, understand the ICD loader path, and build a minimal OpenCL program with clang, gcc, or CMake."
keywords:
 - OpenCL AMDGPU
 - OpenCL on AMD GPU
 - ROCm OpenCL
 - AMDGPU OpenCL setup
 - OpenCL on Radeon
 - OpenCL on ROCm
 - rocm-opencl-sdk
 - rocm-opencl-runtime
 - AMD GPU OpenCL Linux
 - clinfo AMD
 - OpenCL getting started AMD
 - AMDGPU ROCm OpenCL tutorial
 - AMD OpenCL Ubuntu
 - OpenCL ROCm Ubuntu 24.04
 - OpenCL ICD loader AMD
 - libOpenCL ROCm
 - libamdocl64
 - amdocl64.icd
 - cannot find -lOpenCL AMD
 - clang OpenCL ROCm
 - CMake OpenCL AMD
 - gfx1200 OpenCL
 - gfx1103 OpenCL
 - AMD Accelerated Parallel Processing
 - OpenCL device query AMD
 - OpenCL verification ROCm
 - AMDGPU OpenCL FAQ
 - OpenCL troubleshooting AMD
---

import AdBanner from '@site/src/components/AdBanner';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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


# Getting Started with OpenCL on AMDGPU

This guide is for one practical job: getting OpenCL working on an AMD GPU under ROCm, checking that the runtime is actually visible, and compiling a minimal host-side program without guessing at library paths.

:::note
This page was checked against AMD's official ROCm documentation on **April 5, 2026**. As of that date, AMD's official installation docs use the `/en/latest/` path and the current production flow documents both direct repository installation and package-manager based installation. Always confirm the current compatibility matrix and install instructions before copying commands.
:::

<div>
  <AdBanner />
</div>

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [How the AMD OpenCL stack fits together](#how-the-amd-opencl-stack-fits-together)
4. [Before you install](#before-you-install)
5. [Install OpenCL for AMDGPU on Ubuntu](#install-opencl-for-amdgpu-on-ubuntu)
6. [Verify that OpenCL sees your AMD GPU](#verify-that-opencl-sees-your-amd-gpu)
7. [Compile a minimal OpenCL device query program](#compile-a-minimal-opencl-device-query-program)
8. [Verification result on this AMDGPU + ROCm machine](#verification-result-on-this-amdgpu--rocm-machine)
9. [Troubleshooting matrix](#troubleshooting-matrix)
10. [Common failure modes](#common-failure-modes)
11. [FAQ](#faq)
12. [Best practices](#best-practices)
13. [Next steps](#next-steps)

## Overview

If your target is an **AMD GPU on Linux**, the shortest reliable path is:

1. Confirm that your GPU and Linux distribution are supported by the current ROCm release.
2. Install the AMD repository configuration and the ROCm OpenCL packages.
3. Add your user to the required groups.
4. Reboot if the install touched driver or group membership state.
5. Run `clinfo` and confirm that the AMD platform and GPU device appear.
6. Compile a small program linked with `-lOpenCL` before moving to kernels and performance work.

This page stays narrow on purpose: **AMDGPU + ROCm + OpenCL bring-up**. For general OpenCL background, use:

- [What is OpenCL?](https://www.compilersutra.com/docs/gpu/opencl/basic/what_is_opencl)
- [How to Install and Set Up OpenCL on Linux, Windows, and macOS](https://www.compilersutra.com/docs/gpu/opencl/basic/setting_up_opencl)
- [Beginner to Expert Guide: Running Your First OpenCL Hello World Program](https://www.compilersutra.com/docs/gpu/opencl/basic/running_first_opencl_code)

## Prerequisites

Before you start, make sure all of the following are true:

- You have a **supported AMD GPU** for the ROCm release you plan to use.
- Your **Linux distribution is supported** by AMD's current ROCm install documentation.
- You have **`sudo` access** on the machine.
- You are comfortable with **basic terminal commands** and **compiling a small C program**.

Recommended checks:

- [AMD ROCm compatibility matrix](https://rocm.docs.amd.com/en/latest/compatibility/compatibility-matrix.html)
- [AMD install on Linux documentation](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/)

Supported distro examples commonly covered in AMD's docs include:

- Ubuntu 22.04
- Ubuntu 24.04
- Fedora variants covered by the latest install docs

:::tip
If you are not sure whether your GPU is supported, verify that first. A correct OpenCL tutorial cannot compensate for an unsupported ROCm hardware or distro combination.
:::

## How the AMD OpenCL stack fits together

At a high level, an OpenCL application on AMDGPU depends on four layers:

```text
Your OpenCL application
        |
        v
OpenCL ICD loader (libOpenCL.so)
        |
        v
AMD OpenCL runtime from ROCm
        |
        v
amdgpu kernel driver + firmware
        |
        v
AMD GPU hardware
```

What each layer does:

- **`amdgpu` kernel driver**: talks to the hardware and exposes the GPU to the operating system.
- **ROCm OpenCL runtime**: AMD's user-space implementation that executes OpenCL workloads on supported GPUs.
- **ICD loader**: the common `libOpenCL.so` entry point that dispatches to the installed vendor runtime.
- **Your application**: host-side C or C++ code that discovers platforms, creates contexts, builds kernels, and launches work.

That split matters because many setup failures are not compiler failures. Usually they come from one of these:

- the GPU is unsupported for the ROCm release you installed
- the driver is missing or mismatched
- the OpenCL runtime package is not installed
- the ICD loader sees no vendor runtime
- your user lacks the required device access groups

### The critical ICD file: `amdocl64.icd`

On a working AMD OpenCL installation, the ICD loader usually finds AMD's runtime through:

```text
/etc/OpenCL/vendors/amdocl64.icd
```

That file typically contains a path to AMD's OpenCL shared library, for example:

```text
/opt/rocm/lib/libamdocl64.so
```

Why this file matters:

- `libOpenCL.so` is only the **loader**
- the loader scans the ICD vendor files in `/etc/OpenCL/vendors/`
- `amdocl64.icd` tells the loader where AMD's OpenCL runtime actually lives
- without that file, `clinfo` may show no AMD platform even if ROCm libraries are present on disk

In practice, `amdocl64.icd` is the bridge between the **generic ICD loader** and AMD's **actual OpenCL runtime**.

## Before you install

Check these items first:

- **Support matrix**: confirm that your GPU family and Linux distribution are supported by the ROCm release you plan to use.
- **Graphics vs compute workflow**: AMD's ROCm install docs explicitly distinguish between generic ROCm-on-Linux guidance and Radeon/Ryzen guidance for graphics workloads.
- **Integrated graphics caveat**: AMD's installer documentation has historically called out integrated graphics limitations. Treat mixed iGPU/dGPU setups carefully and verify against the current AMD support docs.
- **Existing driver state**: if you already have an older AMDGPU or ROCm installation, clean that up first instead of layering another version on top.

Useful pre-flight checks:

```bash
lspci | grep -Ei 'vga|display|3d'
uname -r
groups
```

If `lspci` does not show the AMD device, stop there and solve the hardware or BIOS problem first.

<div>
  <AdBanner />
</div>

## Install OpenCL for AMDGPU on Ubuntu

AMD's current documentation exposes a **direct repository installation flow** and a package-bootstrap flow. For a fresh setup, start with the direct repository method. Use `amdgpu-install` only when your environment still depends on it.

<Tabs>
<TabItem value="direct-repo" label="Primary: Direct Repo">

This is the preferred modern flow for a fresh machine.

```bash
sudo mkdir --parents --mode=0755 /etc/apt/keyrings
wget https://repo.radeon.com/rocm/rocm.gpg.key -O - | gpg --dearmor | sudo tee /etc/apt/keyrings/rocm.gpg > /dev/null

echo 'deb [arch=amd64 signed-by=/etc/apt/keyrings/rocm.gpg] https://repo.radeon.com/rocm/apt/latest noble main' | sudo tee /etc/apt/sources.list.d/rocm.list

sudo apt update
sudo apt install rocm-opencl-sdk clinfo
sudo usermod -a -G render,video $LOGNAME
```

:::warning
After changing group membership with `usermod -a -G render,video $LOGNAME`, **logging out and back in is not enough for this guide**. Reboot the machine before validating OpenCL.
:::

</TabItem>
<TabItem value="amdgpu-install" label="Fallback: amdgpu-install">

Use this if your environment follows AMD's package bootstrap flow with `amdgpu-install`.

```bash
wget https://repo.radeon.com/amdgpu-install/7.2/ubuntu/noble/amdgpu-install_7.2.70200-1_all.deb
sudo apt install ./amdgpu-install_7.2.70200-1_all.deb
sudo apt update
sudo apt install python3-setuptools python3-wheel clinfo
sudo usermod -a -G render,video $LOGNAME
sudo apt install rocm-opencl-sdk
```

:::warning
After changing group membership with `usermod -a -G render,video $LOGNAME`, **logging out and back in is not enough for this guide**. Reboot the machine before validating OpenCL.
:::

</TabItem>
<TabItem value="full-rocm" label="Full ROCm Stack">

Use this if you expect to move from OpenCL into HIP, profiling, or broader ROCm tooling.

```bash
wget https://repo.radeon.com/amdgpu-install/7.2/ubuntu/noble/amdgpu-install_7.2.70200-1_all.deb
sudo apt install ./amdgpu-install_7.2.70200-1_all.deb
sudo apt update
sudo apt install python3-setuptools python3-wheel
sudo usermod -a -G render,video $LOGNAME
sudo apt install rocm
```

:::warning
After changing group membership with `usermod -a -G render,video $LOGNAME`, **logging out and back in is not enough for this guide**. Reboot the machine before validating OpenCL.
:::

</TabItem>
</Tabs>

For **Ubuntu 22.04**, use the matching `jammy` repository path instead of `noble`.

:::tip
Prefer `rocm-opencl-sdk` over a full `rocm` install when you only need OpenCL. It keeps the dependency footprint smaller and makes troubleshooting easier.
:::

### When should you reboot?

Reboot after installation if any of the following changed:

- you installed or updated the AMDGPU driver
- you added your user to the `render` or `video` groups
- `clinfo` still shows no AMD device immediately after package installation

## Verify that OpenCL sees your AMD GPU

Start with `clinfo`:

```bash
clinfo | grep -E 'Platform Name|Platform Vendor|Device Name|Device Vendor'
```

What you want to see:

- an AMD OpenCL platform
- your AMD GPU listed as a device

You can also inspect the loader and library visibility:

```bash
ldconfig -p | grep -i OpenCL
```

And confirm that the kernel driver is active:

```bash
lsmod | grep amdgpu
```

Also verify the AMD ICD file explicitly:

```bash
cat /etc/OpenCL/vendors/amdocl64.icd
```

If all four checks line up, move on to compilation.

<Tabs>
<TabItem value="current-machine" label="Current Machine">

These checks succeeded on the machine used to validate this guide:

```bash
$ clinfo | grep -E 'Platform Name|Platform Vendor|Device Name|Device Vendor'
  Platform Name:                 AMD Accelerated Parallel Processing
  Platform Vendor:               Advanced Micro Devices, Inc.
  Platform Name:                 AMD Accelerated Parallel Processing

$ lsmod | grep amdgpu
amdgpu              20107264  1
...

$ ldconfig -p | grep -i OpenCL
libOpenCL.so.1 (libc6,x86-64) => /lib/x86_64-linux-gnu/libOpenCL.so.1
```

</TabItem>
<TabItem value="interpretation" label="Interpretation">

Interpret these checks this way:

- `clinfo` proves the ICD loader can see an AMD OpenCL platform.
- `lsmod | grep amdgpu` proves the kernel driver is loaded.
- `ldconfig -p | grep -i OpenCL` proves a system OpenCL loader is present.
- `cat /etc/OpenCL/vendors/amdocl64.icd` proves the loader knows where the AMD runtime lives.

If `clinfo` works but `gcc` or `clang` with `-lOpenCL` fails, the runtime path is functional but the default development linker path is incomplete.

</TabItem>
</Tabs>

## Compile a minimal OpenCL device query program

Use this first instead of a larger vector-add example. It proves that the headers, loader, runtime, and GPU enumeration path are working.

```c
#define CL_TARGET_OPENCL_VERSION 220
#include <CL/cl.h>
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    cl_uint platform_count = 0;
    if (clGetPlatformIDs(0, NULL, &platform_count) != CL_SUCCESS || platform_count == 0) {
        fprintf(stderr, "No OpenCL platforms found\n");
        return 1;
    }

    cl_platform_id *platforms = (cl_platform_id *)malloc(sizeof(cl_platform_id) * platform_count);
    if (!platforms) {
        fprintf(stderr, "Allocation failure\n");
        return 1;
    }

    clGetPlatformIDs(platform_count, platforms, NULL);

    for (cl_uint i = 0; i < platform_count; ++i) {
        char platform_name[256] = {0};
        clGetPlatformInfo(platforms[i], CL_PLATFORM_NAME, sizeof(platform_name), platform_name, NULL);
        printf("Platform %u: %s\n", i, platform_name);

        cl_uint device_count = 0;
        cl_int status = clGetDeviceIDs(platforms[i], CL_DEVICE_TYPE_GPU, 0, NULL, &device_count);
        if (status != CL_SUCCESS || device_count == 0) {
            continue;
        }

        cl_device_id *devices = (cl_device_id *)malloc(sizeof(cl_device_id) * device_count);
        if (!devices) {
            free(platforms);
            fprintf(stderr, "Allocation failure\n");
            return 1;
        }

        clGetDeviceIDs(platforms[i], CL_DEVICE_TYPE_GPU, device_count, devices, NULL);

        for (cl_uint j = 0; j < device_count; ++j) {
            char device_name[256] = {0};
            clGetDeviceInfo(devices[j], CL_DEVICE_NAME, sizeof(device_name), device_name, NULL);
            printf("  GPU %u: %s\n", j, device_name);
        }

        free(devices);
    }

    free(platforms);
    return 0;
}
```

### Why do we need `-I/opt/rocm-7.0.2/include`?

The compiler needs to find the OpenCL header:

```c
#include <CL/cl.h>
```

The `-I/opt/rocm-7.0.2/include` flag tells the compiler where that header tree lives when it is not installed in a default system include directory.

In other words:

- `-I...` is for **compile-time header lookup**
- `-L...` is for **link-time library lookup**
- `-lOpenCL` tells the linker to link against the OpenCL loader

Without the header path, compilation may fail before linking even starts.

### Build options

<Tabs>
<TabItem value="clang" label="Clang">

This is the preferred compiler path for the next articles in this OpenCL series.

```bash
clang opencl_probe.c -o opencl_probe \
  -I/opt/rocm-7.0.2/include \
  -L/opt/rocm-7.0.2/lib \
  -lOpenCL

./opencl_probe
```

Example output:

```text
Platform 0: AMD Accelerated Parallel Processing
  GPU 0: gfx1200
  GPU 1: gfx1036
```

:::note
From the **next article onward**, we will use **`clang` only** in examples to keep the toolchain consistent with the LLVM/ROCm-oriented workflow used throughout CompilerSutra.
:::

</TabItem>
<TabItem value="gcc" label="GCC">

Build it with the generic OpenCL linker flag first:

```bash
gcc opencl_probe.c -o opencl_probe -lOpenCL
./opencl_probe
```

If your distro does not expose the headers and libraries on the default search path, use the ROCm locations:

```bash
gcc opencl_probe.c -o opencl_probe \
  -I/opt/rocm/include \
  -L/opt/rocm/lib \
  -lOpenCL

./opencl_probe
```

</TabItem>
<TabItem value="cmake" label="CMake">

If you want a portable project-based build, use CMake with `find_package(OpenCL REQUIRED)`.

`CMakeLists.txt`:

```cmake
cmake_minimum_required(VERSION 3.16)
project(opencl_probe C)

find_package(OpenCL REQUIRED)

add_executable(opencl_probe opencl_probe.c)
target_link_libraries(opencl_probe PRIVATE OpenCL::OpenCL)
```

Build:

```bash
cmake -S . -B build \
  -DCMAKE_C_COMPILER=clang \
  -DCMAKE_PREFIX_PATH=/opt/rocm-7.0.2

cmake --build build
./build/opencl_probe
```

</TabItem>
</Tabs>

:::important
Use `-lOpenCL` as the normal path. Avoid hardcoding a symlink to AMD's internal library name unless you have already confirmed that your distribution packaging is incomplete and you understand why the loader path is missing.
:::

## Verification result on this AMDGPU + ROCm machine

The steps in this guide were run on the current machine inside `~/expi`.

### Compile results

<Tabs>
<TabItem value="default-link" label="Default Link Path">

The generic linker path failed on this host:

```bash
$ gcc /home/aitr/expi/opencl_probe.c -o /home/aitr/expi/opencl_probe_default -lOpenCL
/usr/bin/ld: cannot find -lOpenCL: No such file or directory
collect2: error: ld returned 1 exit status
```

</TabItem>
<TabItem value="rocm-link" label="ROCm Link Path">

Compiling with explicit ROCm include and library paths succeeded:

```bash
$ gcc /home/aitr/expi/opencl_probe.c -o /home/aitr/expi/opencl_probe_rocm \
  -I/opt/rocm/include \
  -L/opt/rocm/lib \
  -lOpenCL
```

</TabItem>
<TabItem value="clang-link" label="Clang Validation">

The `clang` path also succeeded:

```bash
$ clang opencl_probe.c -o opencl_probe \
  -I/opt/rocm-7.0.2/include \
  -L/opt/rocm-7.0.2/lib \
  -lOpenCL

$ ./opencl_probe
Platform 0: AMD Accelerated Parallel Processing
  GPU 0: gfx1200
  GPU 1: gfx1036
```

</TabItem>
</Tabs>

### Probe output

After compiling and running the probe on the current validation machine, the output was:

```text
Platform 0: AMD Accelerated Parallel Processing
  GPU 0: gfx1200
  GPU 1: gfx1036
```

### Interpretation

- The **AMD OpenCL platform** is successfully detected.
- Multiple GPUs may appear under the same platform.
- On this machine, the reported pair was `gfx1200` and `gfx1036`.

This confirms that:

- `amdgpu` driver is loaded
- ROCm OpenCL runtime is working
- ICD loader is correctly dispatching

### Important

Do not assume `GPU 0` is always the correct device.
On multi-GPU systems, always select the device explicitly based on:

- device name
- vendor
- capabilities
- memory size
- extension support

### Note on compilation

If compilation fails with:

```bash
cannot find -lOpenCL
```

it usually means the OpenCL library is not in the default linker path.
In that case, compile using ROCm paths:

```bash
gcc opencl_probe.c -o opencl_probe \
  -I/opt/rocm/include \
  -L/opt/rocm/lib \
  -lOpenCL
```

On the validated host for this page, this ROCm-path compile was required and worked correctly.

## Troubleshooting matrix

| Symptom | Most Likely Cause | Solution(s) |
| --- | --- | --- |
| `clinfo` shows no platforms | AMD ICD file missing, ROCm OpenCL runtime missing, or unsupported GPU | Check `/etc/OpenCL/vendors/amdocl64.icd`, install `rocm-opencl-runtime` or `rocm-opencl-sdk`, verify the AMD compatibility matrix |
| `lsmod | grep amdgpu` shows nothing | Driver not loaded or kernel/driver mismatch | Reinstall the AMDGPU/ROCm driver stack, reboot, verify kernel support |
| `cannot find -lOpenCL` during compile | OpenCL development library not on default linker path | Use `-L/opt/rocm/lib`, verify `libOpenCL.so` exists there, prefer the documented ROCm build flags |
| `fatal error: CL/cl.h: No such file or directory` | OpenCL headers not installed or not in include path | Install `rocm-opencl-sdk` and compile with `-I/opt/rocm/include` or the matching versioned include path |
| `clinfo` shows AMD platform but no GPU devices | Unsupported device, mixed driver state, or stale install | Verify GPU support in AMD docs, remove conflicting older ROCm packages, reboot and retest |
| Program runs but picks the wrong GPU | Multi-GPU system and naive device selection | Select devices explicitly by `CL_DEVICE_NAME`, vendor, memory size, or required capabilities |

## Common failure modes

### `clinfo` shows no platforms

Check:

- whether `rocm-opencl-runtime` or `rocm-opencl-sdk` is installed
- whether `/etc/OpenCL/vendors/amdocl64.icd` exists
- whether the GPU is supported by your ROCm release
- whether you rebooted after group or driver changes
- whether the AMDGPU driver is actually loaded

### The platform exists, but the GPU does not appear

That usually points to one of these:

- unsupported GPU or distro/kernel combination
- mixed driver state from an older ROCm install
- permissions not refreshed after `usermod -a -G render,video $LOGNAME`

### Compile succeeds, but runtime selection is wrong

If you have multiple OpenCL vendors installed, your ICD environment may expose more than one platform. Enumerate platforms explicitly and choose the AMD platform by vendor or platform name instead of assuming index `0`.

### You are on a laptop with integrated graphics

Do not assume every AMD graphics configuration is ROCm-capable. AMD's own docs distinguish Radeon/Ryzen flows from the generic ROCm-on-Linux path, and older installer docs explicitly warn about integrated graphics handling. Verify your exact hardware path before debugging user code.

## FAQ

<Tabs>
<TabItem value="faq-linker" label="Why -lOpenCL fails?">

If you see:

```bash
cannot find -lOpenCL
```

then the OpenCL development library is not on the default linker path for your compiler invocation. On the validated host for this page, the fix was:

```bash
clang opencl_probe.c -o opencl_probe \
  -I/opt/rocm-7.0.2/include \
  -L/opt/rocm-7.0.2/lib \
  -lOpenCL
```

</TabItem>
<TabItem value="faq-multi-gpu" label="Which GPU should I pick?">

Do not rely on device index alone. On a mixed iGPU+dGPU system, both devices may appear under the same AMD platform. Choose explicitly by:

- `CL_DEVICE_NAME`
- `CL_DEVICE_VENDOR`
- global memory size
- OpenCL version
- extension support

</TabItem>
<TabItem value="faq-clinfo" label="Is clinfo enough?">

No. `clinfo` is necessary, but not sufficient.

- It verifies platform discovery.
- It does not guarantee your compiler and linker are using the correct development paths.
- A compiled probe is the fastest end-to-end validation.

</TabItem>
<TabItem value="faq-runtime" label="Runtime or SDK?">

Use:

- `rocm-opencl-runtime` if you only need execution
- `rocm-opencl-sdk` if you need headers and development files for compiling applications

For developers, `rocm-opencl-sdk` is usually the right starting point.

</TabItem>
</Tabs>

## Best practices

- Check the official AMD compatibility matrix before every ROCm upgrade.
- Keep the install commands version-aware.
- Start with a device-enumeration program before moving to kernels.
- Link with the standard `-lOpenCL` interface rather than vendor-specific library names.
- If you only need OpenCL, install `rocm-opencl-sdk` instead of the full ROCm stack.
- Treat multi-vendor ICD setups as normal and write your host code to select the intended platform explicitly.
- For this tutorial series, prefer **`clang`** in future articles for a more consistent LLVM/ROCm-oriented workflow.

## Next steps

Once this page works end-to-end, continue with the rest of the repo's OpenCL sequence:

- [What is OpenCL?](https://www.compilersutra.com/docs/gpu/opencl/basic/what_is_opencl)
- [How to Install and Set Up OpenCL on Linux, Windows, and macOS](https://www.compilersutra.com/docs/gpu/opencl/basic/setting_up_opencl)
- [Beginner to Expert Guide: Running Your First OpenCL Hello World Program](https://www.compilersutra.com/docs/gpu/opencl/basic/running_first_opencl_code)
- [Writing Your First OpenCL Kernel](https://www.compilersutra.com/docs/gpu/opencl/basic/Writing_your_first_kernel)

Official references:

- [AMD ROCm install on Linux](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/)
- [AMD ROCm quick start installation guide](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/quick-start.html)
- [AMD ROCm compatibility matrix](https://rocm.docs.amd.com/en/latest/compatibility/compatibility-matrix.html)
- [Khronos OpenCL overview](https://www.khronos.org/opencl/)
