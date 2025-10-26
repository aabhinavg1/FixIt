---
title: "Getting Started with GPU Programming: Complete Setup Guide"
description: "Complete step-by-step guide to setting up your GPU environment for parallel computing. Learn to install NVIDIA/AMD drivers, use essential Linux tools, verify GPU access, and run your first GPU kernel."
keywords:
- GPU setup
- GPU programming
- CUDA installation
- OpenCL installation
- NVIDIA GPU
- AMD GPU
- Linux GPU tools
- GPU drivers
- ROCm installation
- GPU kernel programming
- Parallel computing
- High-performance computing
- GPGPU
- GPU acceleration
- GPU debugging
- GPU monitoring
- GPU profiling
- Vulkan API
- DirectX 12 GPU
- GPU memory management
- GPU compute shaders
- GPU optimization
- Tensor cores
- Deep learning GPU
- Machine learning GPU
- GPU benchmarking
- Multi-GPU setup
- GPU virtualization
- GPU cloud computing
- Heterogeneous computing
- GPU compute performance
- GPU toolchain
- OpenCL kernel optimization
- CUDA toolkit
- GPU driver installation
- GPU architecture
- High-performance GPU computing
- GPU compute API
- GPU resource management
- GPU scheduling
- GPU concurrency
- GPU programming models
- GPU frameworks
- GPU compute libraries
- GPU task offloading
- GPU memory allocation
- GPU performance tuning
- GPU software stack
- GPU hardware acceleration

---

import AdBanner from '@site/src/components/AdBanner';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ComicQA } from '../../mcq/interview_question/Question_comics' ;

# Getting Started with GPU Programming: Complete Setup Guide

<div class="text--center">
  <i>Unlock the massive parallel computation power of GPUs for AI, scientific computing, and high-performance applications</i>
</div>

## Overview

GPUs have evolved far beyond their original role as **graphics rendering engines**. Modern GPUs are **general-purpose parallel processors** capable of accelerating highly demanding computational workloads, including scientific simulations, deep learning, real-time data analytics, financial modeling, and high-performance computing (HPC).  

Understanding GPU programming is no longer optional for developers interested in performance-critical applications. With the advent of frameworks like **[CUDA](https://developer.nvidia.com/cuda-toolkit)** for NVIDIA and **[ROCm/OpenCL](https://rocmdocs.amd.com/en/latest/)** for AMD, developers can harness the massive parallelism of GPUs to execute thousands of operations simultaneously, achieving speed-ups that are impossible on traditional CPUs.

This guide is designed to take developers **from zero to running their first GPU-accelerated program**, covering both **[NVIDIA](https://www.nvidia.com/Download/index.aspx) and [AMD](https://www.amd.com/en/support)** ecosystems. 

:::tip You will learn:
- How to **detect and verify GPU hardware** on your system.
- Installation of **GPU drivers** and runtime toolkits.
- Essential **Linux commands and tools** for GPU development.
- How to **compile and run GPU programs**.
- Writing your **first GPU kernel** and understanding basic parallel execution.
- Best practices, tips, and troubleshooting strategies to ensure a smooth development workflow.
:::

:::important By the end of this guide,
 you will have a fully functional **GPU development environment**, the knowledge to write simple GPU-accelerated programs, and the foundation to explore more complex parallel computing projects.

:::

For more in-depth reference:  
- [CUDA Documentation](https://docs.nvidia.com/cuda/)  
- [OpenCL Specification](https://www.khronos.org/opencl/)  
- [ROCm Documentation](https://rocmdocs.amd.com/en/latest/)

<div>
  <AdBanner />
</div>

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Essential Linux Tools for GPU Developers](#essential-linux-tools-for-gpu-developers)
3. [GPU Hardware Detection](#gpu-hardware-detection)
4. [Driver Installation](#driver-installation)
5. [Programming Environment Setup](#programming-environment-setup)
6. [Verification and Testing](#verification-and-testing)
7. [Your First GPU Program](#your-first-gpu-program)
8. [Troubleshooting Common Issues](#troubleshooting-common-issues)
9. [Next Steps](#next-steps)
10. [FAQ](#faq)

---

## Prerequisites

Before beginning, ensure you have:

- A system with a **discrete GPU** (NVIDIA or AMD)
- **Linux distribution** (Ubuntu 20.04+ recommended)
- **sudo privileges** for package installation
- Basic familiarity with **command line operations**
- **GCC** and essential build tools

```python
# Install basic development tools
sudo apt update && sudo apt upgrade -y
sudo apt install -y build-essential git wget curl cmake ninja-build pkg-config
sudo apt install -y python3 python3-pip python3-venv
sudo apt install -y unzip tar

```

---

## Essential Linux Tools for GPU Developers

<Tabs>
  {/* Generic Linux GPU & System Tools */}
  <TabItem value="generic" label="Generic">
    <ul>
      <li>
        <strong>Command:</strong> `lspci | grep -E "(VGA|3D)"`<br />
        <strong>Tool:</strong> lspci<br />
        <strong>Purpose:</strong> Lists all PCI devices<br />
        <strong>Usage:</strong> Filter graphics devices (VGA/3D)<br />
        <strong>When to use:</strong> Check which GPUs are physically present
      </li>
      <li>
        <strong>Command:</strong> `lsmod | grep -E "(nvidia|amdgpu)"`<br />
        <strong>Tool:</strong> lsmod<br />
        <strong>Purpose:</strong> Lists loaded kernel modules<br />
        <strong>Usage:</strong> Filter GPU drivers (NVIDIA/AMD)<br />
        <strong>When to use:</strong> Verify drivers are loaded correctly
      </li>
      <li>
        <strong>Command:</strong> `htop`<br />
        <strong>Tool:</strong> htop<br />
        <strong>Purpose:</strong> Interactive process viewer and system monitor<br />
        <strong>Usage:</strong> Monitor CPU, memory, swap, processes<br />
        <strong>When to use:</strong> Monitor system load during GPU workloads
      </li>
      <li>
        <strong>Command:</strong> `dmesg | tail -50`<br />
        <strong>Tool:</strong> dmesg<br />
        <strong>Purpose:</strong> Displays kernel messages<br />
        <strong>Usage:</strong> Show last 50 lines<br />
        <strong>When to use:</strong> Debug driver or hardware issues
      </li>
      <li>
        <strong>Command:</strong> `grep -i "error|gpu|nvidia|amd" /var/log/syslog`<br />
        <strong>Tool:</strong> grep<br />
        <strong>Purpose:</strong> Search logs for GPU errors<br />
        <strong>When to use:</strong> Quickly identify GPU issues in logs
      </li>
      <li>
        <strong>Command:</strong> `awk '/GPU/ {print $1, $2, $5}' logfile.txt`<br />
        <strong>Tool:</strong> awk<br />
        <strong>Purpose:</strong> Parse structured text files<br />
        <strong>Usage:</strong> Print specific columns for GPU lines<br />
        <strong>When to use:</strong> Extract GPU metrics from logs
      </li>
      <li>
        <strong>Command:</strong> `sed -n '/error/,/end/p' logfile.txt`<br />
        <strong>Tool:</strong> sed<br />
        <strong>Purpose:</strong> Stream editor<br />
        <strong>Usage:</strong> Extract section from error to end<br />
        <strong>When to use:</strong> Isolate multi-line errors
      </li>
      <li>
        <strong>Command:</strong> `lshw -C display`<br />
        <strong>Tool:</strong> lshw<br />
        <strong>Purpose:</strong> Shows GPU hardware details<br />
        <strong>Usage:</strong> Display vendor, memory, driver<br />
        <strong>When to use:</strong> Verify hardware specs and drivers
      </li>
      <li>
        <strong>Command:</strong> `inxi -G`<br />
        <strong>Tool:</strong> inxi<br />
        <strong>Purpose:</strong> Summary of graphics hardware<br />
        <strong>When to use:</strong> Quick GPU overview
      </li>
      <li>
        <strong>Command:</strong> `glxinfo | grep "OpenGL"`<br />
        <strong>Tool:</strong> glxinfo<br />
        <strong>Purpose:</strong> OpenGL renderer info<br />
        <strong>When to use:</strong> Verify GPU usage for OpenGL apps
      </li>
      <li>
        <strong>Command:</strong> `sensors`<br />
        <strong>Tool:</strong> lm-sensors<br />
        <strong>Purpose:</strong> Monitor CPU/GPU temps<br />
        <strong>When to use:</strong> Check overheating
      </li>
      <li>
        <strong>Command:</strong> `iotop`<br />
        <strong>Tool:</strong> iotop<br />
        <strong>Purpose:</strong> Monitor disk I/O<br />
        <strong>When to use:</strong> Identify storage bottlenecks
      </li>
    </ul>
  </TabItem>

  {/* NVIDIA GPU Tools */}
  <TabItem value="nvidia" label="NVIDIA">
    <ul>
      <li>
        <strong>Command:</strong> `nvidia-smi`<br />
        <strong>Tool:</strong> NVIDIA System Management Interface<br />
        <strong>Purpose:</strong> Monitor GPU utilization, memory, temperature, processes<br />
        <strong>When to use:</strong> Real-time monitoring of NVIDIA GPUs
      </li>
      <li>
        <strong>Command:</strong> `nvidia-smi -q`<br />
        <strong>Purpose:</strong> Detailed GPU info including clocks and power<br />
        <strong>When to use:</strong> Inspect GPU specs
      </li>
      <li>
        <strong>Command:</strong> `nvidia-settings`<br />
        <strong>Purpose:</strong> GUI tool to tweak GPU clocks, fans, monitors<br />
        <strong>When to use:</strong> Adjust GPU performance or inspect temperature
      </li>
      <li>
        <strong>Command:</strong> `watch -n 1 nvidia-smi`<br />
        <strong>Purpose:</strong> Live NVIDIA GPU monitoring every second<br />
        <strong>When to use:</strong> Track GPU usage during workloads
      </li>
      <li>
        <strong>Command:</strong> `clinfo`<br />
        <strong>Purpose:</strong> OpenCL-capable device info<br />
        <strong>When to use:</strong> Check compute units for GPU workloads
      </li>
    </ul>
  </TabItem>

  {/* AMD GPU Tools */}
  <TabItem value="amd" label="AMD">
    <ul>
      <li>
        <strong>Command:</strong> `rocm-smi -a`<br />
        <strong>Tool:</strong> ROCm System Management Interface<br />
        <strong>Purpose:</strong> Monitor AMD GPU usage, temperature, clocks<br />
        <strong>When to use:</strong> Real-time AMD GPU monitoring
      </li>
      <li>
        <strong>Command:</strong> `rocminfo`<br />
        <strong>Purpose:</strong> List AMD GPU hardware and compute units<br />
        <strong>When to use:</strong> Verify GPU presence and capabilities
      </li>
      <li>
        <strong>Command:</strong> `hipcc --version`<br />
        <strong>Purpose:</strong> Check ROCm HIP compiler installation<br />
        <strong>When to use:</strong> Compile HIP/CUDA-to-HIP workloads
      </li>
      <li>
        <strong>Command:</strong> `watch -n 1 rocm-smi`<br />
        <strong>Purpose:</strong> Live AMD GPU usage monitoring<br />
        <strong>When to use:</strong> Track GPU utilization during parallel workloads
      </li>
      <li>
        <strong>Command:</strong> `clinfo`<br />
        <strong>Purpose:</strong> OpenCL-capable device info (works for AMD GPUs)<br />
        <strong>When to use:</strong> Check compute units for OpenCL workloads
      </li>
    </ul>
  </TabItem>
  <TabItem value="Script" label="Script">

  ```python
  #!/bin/bash
# gpu_debug_toolkit.sh
# A comprehensive GPU debugging and monitoring toolkit for Linux

# Colors for output
RED="\033[0;31m"
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
BLUE="\033[0;34m"
NC="\033[0m" # No Color

# Print help menu
function show_help() {
    echo -e "${BLUE}GPU Debug Toolkit - Help${NC}"
    echo "Usage: $0 [option]"
    echo
    echo "Options:"
    echo "  --all         Run all checks (default)"
    echo "  --nvidia      Run NVIDIA GPU checks only"
    echo "  --amd         Run AMD GPU checks only"
    echo "  --generic     Run generic Linux GPU & system checks"
    echo "  --logs        Show recent system logs related to GPU"
    echo "  --help        Show this help menu"
    echo
}

# ---------------- GENERIC GPU & SYSTEM CHECKS ----------------
function generic_checks() {
    echo -e "${YELLOW}### Generic GPU & System Checks ###${NC}"
    echo "PCI devices:"
    lspci | grep -E "(VGA|3D)"
    echo

    echo "Loaded GPU modules:"
    lsmod | grep -E "(nvidia|amdgpu)"
    echo

    echo "GPU hardware details:"
    lshw -C display 2>/dev/null
    echo

    echo "Graphics summary:"
    inxi -G 2>/dev/null
    echo

    echo "OpenGL info:"
    glxinfo | grep "OpenGL" 2>/dev/null
    echo

    echo "Temperatures (CPU/GPU):"
    sensors 2>/dev/null
    echo

    echo "Disk I/O:"
    iotop -b -n 3 2>/dev/null
    echo
}

# ---------------- NVIDIA GPU CHECKS ----------------
function nvidia_checks() {
    if ! command -v nvidia-smi &>/dev/null; then
        echo -e "${RED}NVIDIA tools not found!${NC}"
        return
    fi

    echo -e "${YELLOW}### NVIDIA GPU Checks ###${NC}"
    echo "nvidia-smi:"
    nvidia-smi
    echo

    echo "Detailed GPU info:"
    nvidia-smi -q
    echo

    echo "Live monitoring (5 seconds, 1 sec interval):"
    watch -n 1 nvidia-smi
    # Note: user can Ctrl+C to exit
    echo

    echo "OpenCL info:"
    clinfo | grep -i nvidia 2>/dev/null
    echo
}

# ---------------- AMD GPU CHECKS ----------------
function amd_checks() {
    if ! command -v rocm-smi &>/dev/null; then
        echo -e "${RED}AMD ROCm tools not found!${NC}"
        return
    fi

    echo -e "${YELLOW}### AMD GPU Checks ###${NC}"
    echo "rocm-smi:"
    rocm-smi -a
    echo

    echo "AMD GPU info:"
    rocminfo 2>/dev/null
    echo

    echo "HIP compiler version:"
    hipcc --version 2>/dev/null
    echo

    echo "OpenCL info:"
    clinfo | grep -i amd 2>/dev/null
    echo

    echo "Live monitoring (5 seconds, 1 sec interval):"
    watch -n 1 rocm-smi
    # Note: user can Ctrl+C to exit
    echo
}

# ---------------- SYSTEM LOGS ----------------
function gpu_logs() {
    echo -e "${YELLOW}### GPU-related System Logs ###${NC}"
    echo "Last 50 kernel messages:"
    dmesg | tail -50
    echo

    echo "GPU errors from syslog:"
    grep -i "error\|gpu\|nvidia\|amd" /var/log/syslog 2>/dev/null
    echo
}

# ---------------- RUN BASED ON USER INPUT ----------------
case "$1" in
    --nvidia)
        nvidia_checks
        ;;
    --amd)
        amd_checks
        ;;
    --generic)
        generic_checks
        ;;
    --logs)
        gpu_logs
        ;;
    --help)
        show_help
        ;;
    --all|"")
        generic_checks
        nvidia_checks
        amd_checks
        gpu_logs
        ;;
    *)
        echo -e "${RED}Unknown option: $1${NC}"
        show_help
        exit 1
        ;;
esac
  ```
**GPU Debug Toolkit - Help Guide**

The **GPU Debug Toolkit** is a bash script for monitoring and debugging **NVIDIA and AMD GPUs** on Linux.

**Features**

* Detects all GPUs (NVIDIA & AMD)
* Shows GPU usage, memory, temperature, and processes
* Displays driver/kernel/module info
* Shows recent logs and errors
* Offers per-vendor checks via a help menu


**Usage**

```python
# Run all checks
./gpu_debug_toolkit.sh --all

# Run only NVIDIA GPU checks
./gpu_debug_toolkit.sh --nvidia

# Run only AMD GPU checks
./gpu_debug_toolkit.sh --amd

# Run generic Linux GPU/system checks
./gpu_debug_toolkit.sh --generic

# Show GPU-related system logs
./gpu_debug_toolkit.sh --logs

# Show help menu
./gpu_debug_toolkit.sh --help
```



**How to Run the Script**

1. Save as `gpu_debug_toolkit.sh`
2. Make it executable:

```python
chmod +x gpu_debug_toolkit.sh
```

3. Run all checks:

```python
./gpu_debug_toolkit.sh --all
```



  </TabItem>
</Tabs>


💡 **Summary:**

| Tool/Command | Purpose                    | GPU Dev Use                       |
| ------------ | -------------------------- | --------------------------------- |
| `lspci`      | List PCI devices           | Identify installed GPUs           |
| `lsmod`      | Show loaded kernel modules | Check GPU driver loaded           |
| `htop`       | Interactive system monitor | Monitor CPU/GPU usage indirectly  |
| `nvidia-smi` | NVIDIA GPU status          | Real-time GPU monitoring          |
| `dmesg`      | Kernel messages            | Debug driver/hardware issues      |
| `grep`       | Search text                | Search GPU errors in logs         |
| `awk`        | Process structured text    | Extract metrics from logs         |
| `sed`        | Stream edit text           | Extract multi-line error sections |


### Development Tools

```python
# Compilers and build systems
gcc --version                         # GNU Compiler Collection
clang --version                      # LLVM Clang compiler
make --version                       # Build automation tool
cmake --version                      # Cross-platform build system

# Package management
apt list --installed | grep -i cuda   # Check installed CUDA packages
dpkg -l | grep nvidia                 # List NVIDIA packages
```

<details>
<summary>💡 Pro Tip: Create GPU Monitoring Dashboard</summary>

```python
# Create a simple monitoring script
cat > gpu-monitor.sh << 'EOF'
#!/bin/bash
echo "=== GPU Monitoring Dashboard ==="
echo "Time: $(date)"
echo
echo "--- GPU Status ---"
if command -v nvidia-smi &> /dev/null; then
    nvidia-smi --query-gpu=name,temperature.gpu,utilization.gpu,memory.used,memory.total --format=csv
else
    echo "NVIDIA tools not available"
fi
echo
echo "--- System Memory ---"
free -h
echo
echo "--- Active Processes ---"
ps aux --sort=-%mem | head -10
EOF

chmod +x gpu-monitor.sh
watch -n 2 ./gpu-monitor.sh
```

</details>

---

## GPU Hardware Detection

<Tabs>
<!-- AMD GPU Detection -->
  <TabItem value="amd" label="AMD GPU">

***Identify Your GPU***

```python
# Comprehensive GPU detection
 lspci -v | grep -A 10 -E "(VGA|3D)"
03:00.0 VGA compatible controller: Advanced Micro Devices, Inc. [AMD/ATI] Navi 44 [Radeon RX 9060 XT] (rev c0) (prog-if 00 [VGA controller])
        Subsystem: Gigabyte Technology Co., Ltd Device 2429
        Flags: bus master, fast devsel, latency 0, IRQ 106, IOMMU group 15
        Memory at f800000000 (64-bit, prefetchable) [size=16G]
        Memory at fc00000000 (64-bit, prefetchable) [size=256M]
        I/O ports at f000 [size=256]
        Memory at f6c00000 (32-bit, non-prefetchable) [size=512K]
        Expansion ROM at f6c80000 [disabled] [size=128K]
        Capabilities: <access denied>
        Kernel driver in use: amdgpu
        Kernel modules: amdgpu
```

**AMD specific**

```python
> lspci | grep -i "amd/ati"

01:00.0 PCI bridge: Advanced Micro Devices, Inc. [AMD/ATI] Navi 10 XL Upstream Port of PCI Express Switch (rev 25)
02:00.0 PCI bridge: Advanced Micro Devices, Inc. [AMD/ATI] Navi 10 XL Downstream Port of PCI Express Switch (rev 25)
03:00.0 VGA compatible controller: Advanced Micro Devices, Inc. [AMD/ATI] Navi 44 [Radeon RX 9060 XT] (rev c0)
03:00.1 Audio device: Advanced Micro Devices, Inc. [AMD/ATI] Navi 48 HDMI/DP Audio Controller
15:00.0 VGA compatible controller: Advanced Micro Devices, Inc. [AMD/ATI] Granite Ridge [Radeon Graphics] (rev c5)
15:00.1 Audio device: Advanced Micro Devices, Inc. [AMD/ATI] Radeon High Definition Audio Controller [Rembrandt/Strix]
> 
```

**Additional hardware info**

```python
sudo lshw -C display 
  *-display                 
       description: VGA compatible controller
       product: Navi 44 [Radeon RX 9060 XT]
       vendor: Advanced Micro Devices, Inc. [AMD/ATI]
       physical id: 0
       bus info: pci@0000:03:00.0
       logical name: /dev/fb0
       version: c0
       width: 64 bits
       clock: 33MHz
       capabilities: pm pciexpress msi vga_controller bus_master cap_list rom fb
       configuration: depth=32 driver=amdgpu latency=0 mode=1920x1080 resolution=1920,1080 visual=truecolor xres=1920 yres=1080
       resources: iomemory:f80-f7f iomemory:fc0-fbf irq:106 memory:f800000000-fbffffffff memory:fc00000000-fc0fffffff ioport:f000(size=256) memory:f6c00000-f6c7ffff memory:f6c80000-f6c9ffff
  *-display
       description: VGA compatible controller
       product: Granite Ridge [Radeon Graphics]
       vendor: Advanced Micro Devices, Inc. [AMD/ATI]
       physical id: 0
       bus info: pci@0000:15:00.0
       version: c5
       width: 64 bits
       clock: 33MHz
       capabilities: pm pciexpress msi msix vga_controller bus_master cap_list
       configuration: driver=amdgpu latency=0
       resources: iomemory:fc0-fbf irq:69 memory:fc20000000-fc2fffffff memory:f6200000-f63fffff ioport:d000(size=256) memory:f6700000-f677ffff
```


**Verify Kernel Recognition**

```python
# Check if GPU is detected by kernel
> sudo dmesg | grep -i "gpu\|drm\|amd"

[    0.000000] Linux version 6.14.0-33-generic (buildd@lcy02-amd64-026) (x86_64-linux-gnu-gcc-13 (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0, GNU ld (GNU Binutils for Ubuntu) 2.42) #33~24.04.1-Ubuntu SMP PREEMPT_DYNAMIC Fri Sep 19 17:02:30 UTC 2 (Ubuntu 6.14.0-33.33~24.04.1-generic 6.14.11)
[    0.000000]   AMD AuthenticAMD
[    0.003715] RAMDISK: [mem 0x65ff8000-0x6e4cdfff]
[    0.004038] ACPI: SSDT 0x000000008D476000 00816C (v02 AMD    Splinter 00000002 MSFT 05000000)
[    0.004046] ACPI: VFCT 0x000000008D3E0000 0194A0 (v01 ALASKA A M I    00000001 AMD  33504F47)
[    0.004047] ACPI: SSDT 0x000000008D46F000 004DEE (v02 AMD    AMD CPU  00000001 AMD  00000001)
[    0.004050] ACPI: SSDT 0x000000008D3DE000 0006D4 (v02 AMD    CPMWLRC  00000001 INTL 20221020)
[    0.004051] ACPI: SSDT 0x000000008D3DC000 00169E (v02 AMD    CPMDFIG2 00000001 INTL 20221020)
[    0.004052] ACPI: SSDT 0x000000008D3D9000 002AA6 (v02 AMD    CDFAAIG2 00000001 INTL 20221020)
[    0.004053] ACPI: SSDT 0x000000008D3D8000 0008BA (v02 AMD    CPMDFDG2 00000001 INTL 20221020)
[    0.004054] ACPI: SSDT 0x000000008D3CE000 009A9E (v02 AMD    CPMCMN   00000001 INTL 20221020)
[    0.004055] ACPI: SSDT 0x000000008D3CB000 002924 (v02 AMD    AOD      00000001 INTL 20221020)
[    0.004058] ACPI: IVRS 0x000000008D3C8000 0000C8 (v02 AMD    AmdTable 00000001 AMD  00000001)
[    0.004059] ACPI: SSDT 0x000000008D3C7000 000500 (v02 AMD    MEMTOOL0 00000002 INTL 20221020)
[    0.004060] ACPI: SSDT 0x000000008D3C6000 0009D0 (v02 AMD    CPMMSOSC 00000001 INTL 20221020)
[    0.004061] ACPI: SSDT 0x000000008D3C5000 00047C (v02 AMD    AMDWOV   00000001 INTL 20221020)
[    0.004062] ACPI: SSDT 0x000000008D3C3000 001046 (v02 AMD    CPMACPV4 00000001 INTL 20221020)
[    0.004064] ACPI: SSDT 0x000000008D3C2000 00044E (v02 AMD    AmdTable 00000001 INTL 20221020)
[    0.112950] AMD-Vi: Using global IVHD EFR:0x246577efa2254afa, EFR2:0x0
[    0.241446] smpboot: CPU0: AMD Ryzen 7 9700X 8-Core Processor (family: 0x1a, model: 0x44, stepping: 0x0)
[    0.241543] Performance Events: Fam17h+ 16-deep LBR, core perfctr, AMD PMU driver.
[    0.317922] pci 0000:00:00.2: AMD-Vi: IOMMU performance counters supported
[    0.321076] AMD-Vi: Extended features (0x246577efa2254afa, 0x0): PPR NX GT [5] IA GA PC GA_vAPIC
[    0.321080] AMD-Vi: Interrupt remapping enabled
[    3.760244] AMD-Vi: Virtual APIC enabled
[    3.760340] perf: AMD IBS detected (0x00081bff)
[    3.760346] perf/amd_iommu: Detected AMD IOMMU #0 (2 banks, 4 counters/bank).
[    3.799373] ACPI: bus type drm_connector registered
[    3.866161] simple-framebuffer simple-framebuffer.0: [drm] Registered 1 planes with drm panic
[    3.866162] [drm] Initialized simpledrm 1.0.0 for simple-framebuffer.0 on minor 0
[    3.866952] simple-framebuffer simple-framebuffer.0: [drm] fb0: simpledrmdrmfb frame buffer device
[    5.267999] amdkcl: loading out-of-tree module taints kernel.
[    5.268003] amdkcl: module verification failed: signature and/or required key missing - tainting kernel
[    6.434987] [drm] amdgpu kernel modesetting enabled.
[    6.434991] [drm] amdgpu version: 6.14.14
[    6.434992] [drm] OS DRM version: 6.14.0
[    6.435009] amdgpu: vga_switcheroo: detected switching method \_SB_.PCI0.GP17.VGA_.ATPX handle
[    6.435125] amdgpu: ATPX version 1, functions 0x00000000
[    6.438385] amdgpu: Virtual CRAT table created for CPU
[    6.438392] amdgpu: Topology: Add CPU node
[    6.440176] amdgpu 0000:03:00.0: enabling device (0006 -> 0007)
[    6.440222] [drm] initializing kernel modesetting (IP DISCOVERY 0x1002:0x7590 0x1458:0x2429 0xC0).
[    6.440231] [drm] register mmio base: 0xF6C00000
[    6.440232] [drm] register mmio size: 524288
[    6.443237] amdgpu 0000:03:00.0: amdgpu: detected ip block number 0 <soc24_common>
[    6.443238] amdgpu 0000:03:00.0: amdgpu: detected ip block number 1 <gmc_v12_0>
[    6.443239] amdgpu 0000:03:00.0: amdgpu: detected ip block number 2 <ih_v7_0>
[    6.443239] amdgpu 0000:03:00.0: amdgpu: detected ip block number 3 <psp>
[    6.443240] amdgpu 0000:03:00.0: amdgpu: detected ip block number 4 <smu>
[    6.443241] amdgpu 0000:03:00.0: amdgpu: detected ip block number 5 <dm>
[    6.443241] amdgpu 0000:03:00.0: amdgpu: detected ip block number 6 <gfx_v12_0>
[    6.443242] amdgpu 0000:03:00.0: amdgpu: detected ip block number 7 <sdma_v7_0>
[    6.443242] amdgpu 0000:03:00.0: amdgpu: detected ip block number 8 <vcn_v5_0_0>
[    6.443243] amdgpu 0000:03:00.0: amdgpu: detected ip block number 9 <jpeg_v5_0_0>
[    6.443243] amdgpu 0000:03:00.0: amdgpu: detected ip block number 10 <mes_v12_0>
[    6.443255] amdgpu 0000:03:00.0: amdgpu: Fetched VBIOS from VFCT
[    6.443257] amdgpu: ATOM BIOS: 113-R906XTGO-F2
[    6.498539] amdgpu 0000:03:00.0: vgaarb: deactivate vga console
[    6.498542] amdgpu 0000:03:00.0: amdgpu: Trusted Memory Zone (TMZ) feature not supported
```

```python
# Check loaded graphics modules
> sudo lsmod | grep -E "amdgpu|radeon"
amdgpu              19804160  18
amddrm_ttm_helper      12288  1 amdgpu
amdttm                131072  2 amdgpu,amddrm_ttm_helper
amddrm_buddy           24576  1 amdgpu
amdxcp                 16384  1 amdgpu
amddrm_exec            12288  1 amdgpu
amd_sched              61440  1 amdgpu
amdkcl                 49152  4 amd_sched,amdttm,amddrm_exec,amdgpu
drm_panel_backlight_quirks    12288  1 amdgpu
drm_display_helper    278528  1 amdgpu
cec                    94208  2 drm_display_helper,amdgpu
i2c_algo_bit           16384  1 amdgpu
drm_ttm_helper         16384  1 amdgpu
video                  77824  1 amdgpu
```

</TabItem>

<!-- NVIDIA Tab Coming Soon -->
<TabItem value="nvidia" label="NVIDIA GPU">
 <p>
  Coming soon 🚧

</p>
 </TabItem> 
 
 </Tabs>
---

## Driver Installation

Before installing GPU drivers on Linux, it’s essential to fully understand your system’s requirements. 
***Conducting proper pre-checks—such as identifying*** your **GPU model**, **verifying kernel compatibility**, 
and ensuring **no conflicting drivers** are present—can prevent installation failures, driver conflicts, 
and performance issues. 

:::tip > ***Taking these precautions ensures a smooth setup, maximizes hardware efficiency, and avoids frustrating troubleshooting later.*** 
:::

<details>
  <summary><strong>How to Detect What You Need</strong> <em>(***Think Before Downloading***)</em></summary>
  <p>

  **Before Installing GPU Drivers**

  >Before downloading or installing GPU drivers on Linux, you should take care of the following points to avoid conflicts, installation failures, or performance issues:  

  **Points to take care of:**  
  1. Identify your GPU model  
  2. Check your Linux kernel version  
  3. Check for existing GPU drivers  
  4. Check current GPU usage  
  5. Verify your display server configuration  

  ---

  <Tabs>
    <TabItem value="gpu-model" label="GPU Model">
  **Point 1: Identify Your GPU Model**  
  Knowing your GPU model ensures you download the correct driver and avoid compatibility issues.  

  **Question:** How do I check my GPU model?  

  ```python
  # Identify your GPU model
  lspci | grep -i "vga\|3d"
    03:00.0 VGA compatible controller: Advanced Micro Devices, Inc. [AMD/ATI] Navi 44 [Radeon RX 9060 XT] (rev c0)
    15:00.0 VGA compatible controller: Advanced Micro Devices, Inc. [AMD/ATI] Granite Ridge [Radeon Graphics] (rev c5)
  ```
  or you can also use

  ```python
  sudo lshw -C display
  >       sudo lshw -C display
  *-display                 
       description: VGA compatible controller
       product: Navi 44 [Radeon RX 9060 XT]
       vendor: Advanced Micro Devices, Inc. [AMD/ATI]
       physical id: 0
       bus info: pci@0000:03:00.0
       logical name: /dev/fb0
       version: c0
       width: 64 bits
       clock: 33MHz
       capabilities: pm pciexpress msi vga_controller bus_master cap_list rom fb
       configuration: depth=32 driver=amdgpu latency=0 mode=1920x1080 resolution=1920,1080 visual=truecolor xres=1920 yres=1080
       resources: iomemory:f80-f7f iomemory:fc0-fbf irq:106 memory:f800000000-fbffffffff memory:fc00000000-fc0fffffff ioport:f000(size=256) memory:f6c00000-f6c7ffff memory:f6c80000-f6c9ffff
  *-display
       description: VGA compatible controller
       product: Granite Ridge [Radeon Graphics]
       vendor: Advanced Micro Devices, Inc. [AMD/ATI]
       physical id: 0
       bus info: pci@0000:15:00.0
       version: c5
       width: 64 bits
       clock: 33MHz
       capabilities: pm pciexpress msi msix vga_controller bus_master cap_list
       configuration: driver=amdgpu latency=0
       resources: iomemory:fc0-fbf irq:69 memory:fc20000000-fc2fffffff memory:f6200000-f63fffff ioport:d000(size=256) memory:f6700000-f677ffff
  ```
  </TabItem>

    <TabItem value="kernel-version" label="Kernel Version">
  **Point 2: Check your Linux Kernel Version**  
  GPU drivers are tightly coupled with the kernel; incompatible drivers can fail to load.  

  **Question:** How do I check my kernel version?  

  ```python
  > uname -r
    6.14.0-33-generic
  ```
  </TabItem>

    <TabItem value="existing-drivers" label="Existing Drivers">
  **Point 3: Check for Existing GPU Drivers**  
  Existing drivers may conflict with new installations, causing errors or instability.  

  **Question:** How do I see if any GPU drivers are already installed?  

```python
>lsmod | grep -E "nvidia|amdgpu|radeon"
amdgpu              19804160  19
amddrm_ttm_helper      12288  1 amdgpu
amdttm                131072  2 amdgpu,amddrm_ttm_helper
amddrm_buddy           24576  1 amdgpu
amdxcp                 16384  1 amdgpu
amddrm_exec            12288  1 amdgpu
amd_sched              61440  1 amdgpu
amdkcl                 49152  4 amd_sched,amdttm,amddrm_exec,amdgpu
drm_panel_backlight_quirks    12288  1 amdgpu
drm_display_helper    278528  1 amdgpu
cec                    94208  2 drm_display_helper,amdgpu
i2c_algo_bit           16384  1 amdgpu
drm_ttm_helper         16384  1 amdgpu
video                  77824  1 amdgpu
```
  </TabItem>

<TabItem value="display-server" label="Display Server">
  **Point 5: Verify Display Server Configuration**  
  Check if your system uses Xorg or Wayland, as some drivers may require specific configurations.  

  **Question:** How do I verify my display server?  

```python
>echo $XDG_SESSION_TYPE
wayland
```
</TabItem>
</Tabs>

  </p>
</details>

<Tabs>
  {/* AMD GPU */}
  <TabItem value="amd" label="AMD">
    <Tabs>
      {/* Ubuntu 22.04 */}
  <TabItem value="ubuntu2204" label="Ubuntu 22.04">
```bash
sudo tee /etc/apt/sources.list.d/rocm.list << EOF
deb [arch=amd64 signed-by=/etc/apt/keyrings/rocm.gpg] https://repo.radeon.com/rocm/apt/7.0.2 jammy main
deb [arch=amd64 signed-by=/etc/apt/keyrings/rocm.gpg] https://repo.radeon.com/graphics/7.0.2/ubuntu jammy main
EOF

sudo tee /etc/apt/preferences.d/rocm-pin-600 << EOF
Package: *
Pin: release o=repo.radeon.com
Pin-Priority: 600
EOF

sudo apt update
```
</TabItem>

{/* Ubuntu 24.04 */}
<TabItem value="ubuntu2404" label="Ubuntu 24.04">
```bash
  sudo tee /etc/apt/sources.list.d/rocm.list << EOF
  deb [arch=amd64 signed-by=/etc/apt/keyrings/rocm.gpg] https://repo.radeon.com/rocm/apt/7.0.2 noble main
  deb [arch=amd64 signed-by=/etc/apt/keyrings/rocm.gpg] https://repo.radeon.com/graphics/7.0.2/ubuntu noble main
  EOF

  sudo tee /etc/apt/preferences.d/rocm-pin-600 << EOF
  Package: *
  Pin: release o=repo.radeon.com
  Pin-Priority: 600
  EOF

  sudo apt update
```
  </TabItem>
        {/* Ubuntu 24.04 */}
  <TabItem value="Other Arch" label="Other arch">
    - [Visit Here ](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/install-methods/package-manager/package-manager-ubuntu.html)

    - [Check here of other OS](https://www.amd.com/en/support/download/drivers.html)
    - [Using amdgpu-install](https://amdgpu-install.readthedocs.io/en/latest/)



  </TabItem>


</Tabs>
        
  </TabItem>

  {/* NVIDIA GPU */}
  <TabItem value="nvidia" label="NVIDIA">
    {/* Add NVIDIA content or placeholder here */}
    <p><em>Coming soon 🚧 NVIDIA GPU installation and configuration guides.</em></p>
  </TabItem>
</Tabs>
---

## Programming Environment Setup

### OpenCL Development Setup

<Tabs>
  <TabItem value="amd" label="AMD OpenCL">

**Note:** Before installing AMD OpenCL, ensure you download the latest AMD GPU driver from the official AMD support page:  
[AMD Linux Drivers](https://www.amd.com/en/support/download/linux-drivers.html)
```python
# Install OpenCL development packages
sudo apt install ocl-icd-opencl-dev clinfo opencl-headers

# Dry-run AMD OpenCL install (checks what will be installed)
# amdgpu-install only will be available after downloading and installing from the link
# [AMD Linux Drivers](https://www.amd.com/en/support/download/linux-drivers.html)
amdgpu-install --no-dkms --usecase=opencl --opencl=rocr --dryrun #to check which package will be installed

# ⚠ This may prompt you to download the latest amdgpu package from AMD

# Update package lists
sudo apt-get update

# Install ROCm OpenCL runtime
sudo apt-get install rocm-opencl-runtime

# Create shortcut for uninstalling AMD driver
sudo ln -sf /usr/bin/amdgpu-install /usr/bin/amdgpu-uninstall

# Full AMD OpenCL installation
amdgpu-install --no-dkms --usecase=opencl --opencl=rocr
```
:::tip dont forget to reboot the device
:::

```python
> clinfo | grep AMD

  Platform Version:				 OpenCL 2.1 AMD-APP (3662.0)
  Platform Name:				 AMD Accelerated Parallel Processing
  Platform Name:				 AMD Accelerated Parallel Processing
  Board name:					 AMD Radeon RX 9060 XT
  Board name:					 AMD Radeon Graphics
```
</TabItem>

<TabItem value="intel" label="Intel OpenCL">
```bash
# Install OpenCL for Intel integrated GPUs
sudo apt install beignet-opencl-icd
```


</TabItem>

<TabItem value="nvidia" label="NVIDIA OpenCL">
<p><em>Coming soon 🚧</em></p>
</TabItem>
</Tabs>

## Verification and Testing

```python
#!/bin/bash
# gpu-health-check.sh

echo "=== GPU System Health Check ==="
echo

echo "1. Hardware Detection:"
lspci | grep -i "vga\|3d" || echo "No GPU detected"

echo
echo "2. Driver Status:"
if lsmod | grep -q "nvidia"; then
    echo "✅ NVIDIA drivers loaded"
    nvidia-smi --query | head -10
elif lsmod | grep -q "amdgpu"; then
    echo "✅ AMD drivers loaded"
    dmesg | grep "amdgpu" | tail -5
else
    echo "❌ No GPU drivers loaded"
fi

echo
echo "3. OpenCL Platforms:"
if command -v clinfo &> /dev/null; then
    clinfo | grep "Platform Name" || echo "No OpenCL platforms found"
else
    echo "clinfo not installed"
fi

echo
echo "4. Compute Capability:"
if command -v rocminfo &> /dev/null; then
    rocminfo | grep -A 5 "Agent.*gfx"
fi
```

:::tip Sample Output
:::

```python
> sudo ./test.sh
=== GPU System Health Check ===

1. Hardware Detection:
03:00.0 VGA compatible controller: Advanced Micro Devices, Inc. [AMD/ATI] Navi 44 [Radeon RX 9060 XT] (rev c0)
15:00.0 VGA compatible controller: Advanced Micro Devices, Inc. [AMD/ATI] Granite Ridge [Radeon Graphics] (rev c5)

2. Driver Status:
✅ AMD drivers loaded
[11694.685455] amdgpu: Freeing queue vital buffer 0x75a4b9a00000, queue evicted
[11706.920577] amdgpu: Freeing queue vital buffer 0x7d5549800000, queue evicted
[11706.920585] amdgpu: Freeing queue vital buffer 0x7d554a200000, queue evicted
[11728.343797] amdgpu: Freeing queue vital buffer 0x77bfba000000, queue evicted
[11728.343802] amdgpu: Freeing queue vital buffer 0x77bfbaa00000, queue evicted

3. OpenCL Platforms:
  Platform Name:				 AMD Accelerated Parallel Processing
  Platform Name:				 AMD Accelerated Parallel Processing

4. Compute Capability:


```
### OpenCL Platform Verification
<Tabs>
  <TabItem value="opencl" label="OpenCL">

      **What We Want to Achieve**

      We want to detect all OpenCL platforms and devices on the system, query their properties, and print a summary. This helps in selecting the best GPU/CPU for computation.

      **Key Steps:**

      1. Detect OpenCL platforms (vendors like AMD, NVIDIA, Intel).  
      2. Query devices on each platform (CPU, GPU, Accelerator).  
      3. Collect useful information: device type, name, vendor, compute units, global/local memory, max clock frequency.  
      4. Print a summary for easy inspection.

      **Basic Code**

          ```c
          #include <stdio.h>
          #include <stdlib.h>
          #define CL_TARGET_OPENCL_VERSION 220
          #include <CL/cl.h>

          int main() {
              cl_uint platform_count;
              clGetPlatformIDs(0, NULL, &platform_count);
              printf("Found %u OpenCL platform(s)\n", platform_count);
              return 0;
          }
          ```
</TabItem>

<TabItem value="amd" label="AMD">
<Tabs>

  <TabItem value="verify-opencl" label="Verify OpenCL">

  **Basic Idea**

  **Detect OpenCL Platforms**
  A platform is basically an OpenCL implementation provided by a vendor (AMD, NVIDIA, Intel, etc.).

  The code first asks the system:
  *"How many OpenCL platforms are available?"*

  **Query Devices on Each Platform**
  Each platform can have multiple devices: GPUs, CPUs, or accelerators.

  **Collect Useful Information**
  For each device found, it gathers key properties:

  * **Device type:** GPU, CPU, or other
  * **Name:** The model or architecture (e.g., `gfx1200`)
  * **Vendor:** Who made it (AMD, Intel, etc.)
  * **Compute units:** How many processing cores
  * **Global memory:** Total RAM available on the device
  * **Clock frequency:** Max speed of the device
  * **Local memory:** Small fast memory for computations

  **Print a Summary**
  All this information is printed in a readable format.

  :::tip Purpose
  Detect all OpenCL platforms and devices on the system and print their capabilities.
  :::

 </TabItem>

  <TabItem value="verify-code" label="Code">

```c
// detect_opencl_devices.c - Detect GPUs and CPUs with full OpenCL info
#include <stdio.h>
#include <stdlib.h>
#define CL_TARGET_OPENCL_VERSION 220 
#include <CL/cl.h>

const char* device_type_str(cl_device_type type) {
    if (type & CL_DEVICE_TYPE_CPU) return "CPU";
    if (type & CL_DEVICE_TYPE_GPU) return "GPU";
    if (type & CL_DEVICE_TYPE_ACCELERATOR) return "Accelerator";
    return "Other";
}

int main() {
    cl_uint platform_count;
    cl_platform_id *platforms;

    clGetPlatformIDs(0, NULL, &platform_count);
    printf("Found %u OpenCL platform(s)\n", platform_count);

    if (platform_count == 0) {
        printf("❌ No OpenCL platforms found\n");
        return 1;
    }

    platforms = (cl_platform_id*)malloc(sizeof(cl_platform_id) * platform_count);
    clGetPlatformIDs(platform_count, platforms, NULL);

    for (cl_uint i = 0; i < platform_count; i++) {
        char pname[128], pvendor[128];
        clGetPlatformInfo(platforms[i], CL_PLATFORM_NAME, 128, pname, NULL);
        clGetPlatformInfo(platforms[i], CL_PLATFORM_VENDOR, 128, pvendor, NULL);
        printf("\nPlatform %u: %s (%s)\n", i, pname, pvendor);

        cl_uint device_count;
        clGetDeviceIDs(platforms[i], CL_DEVICE_TYPE_ALL, 0, NULL, &device_count);
        if (device_count == 0) {
            printf("  ❌ No devices found on this platform\n");
            continue;
        }

        cl_device_id *devices = (cl_device_id*)malloc(sizeof(cl_device_id) * device_count);
        clGetDeviceIDs(platforms[i], CL_DEVICE_TYPE_ALL, device_count, devices, NULL);

        for (cl_uint j = 0; j < device_count; j++) {
            char dname[128], dvendor[128];
            cl_device_type dtype;
            cl_uint compute_units;
            cl_ulong global_mem;
            cl_uint max_freq;
            cl_ulong local_mem;

            clGetDeviceInfo(devices[j], CL_DEVICE_NAME, 128, dname, NULL);
            clGetDeviceInfo(devices[j], CL_DEVICE_VENDOR, 128, dvendor, NULL);
            clGetDeviceInfo(devices[j], CL_DEVICE_TYPE, sizeof(dtype), &dtype, NULL);
            clGetDeviceInfo(devices[j], CL_DEVICE_MAX_COMPUTE_UNITS, sizeof(compute_units), &compute_units, NULL);
            clGetDeviceInfo(devices[j], CL_DEVICE_GLOBAL_MEM_SIZE, sizeof(global_mem), &global_mem, NULL);
            clGetDeviceInfo(devices[j], CL_DEVICE_MAX_CLOCK_FREQUENCY, sizeof(max_freq), &max_freq, NULL);
            clGetDeviceInfo(devices[j], CL_DEVICE_LOCAL_MEM_SIZE, sizeof(local_mem), &local_mem, NULL);

            printf("  Device %u: %s (%s)\n", j, dname, device_type_str(dtype));
            printf("    Vendor: %s\n", dvendor);
            printf("    Compute Units: %u\n", compute_units);
            printf("    Global Memory: %.2f GB\n", global_mem / (1024.0*1024*1024));
            printf("    Max Clock: %u MHz\n", max_freq);
            printf("    Local Memory: %.2f KB\n", local_mem / 1024.0);
        }

        free(devices);
    }

    free(platforms);
    printf("\n✅ OpenCL devices detection complete\n");
    return 0;
}
```
</TabItem>

  <TabItem value="verify-build" label="Build">

```bash
# AMD OpenCL library path
sudo ln -s /opt/rocm-7.0.2/lib/libamdocl64.so /opt/rocm/lib/libOpenCL.so
```

* `sudo` → Runs the command with root privileges because writing to `/opt/rocm/lib` requires admin access.
* `ln -s` → Creates a **symbolic link** (symlink). A symlink is like a shortcut or alias pointing to another file.
* `/opt/rocm-7.0.2/lib/libamdocl64.so` → The **actual AMD OpenCL library** installed by ROCm.
* `/opt/rocm/lib/libOpenCL.so` → The **link we’re creating**. Many build systems or programs expect `libOpenCL.so` as the standard OpenCL library name.

**Effect:** After this command, any program trying to link against `-lOpenCL` will actually use AMD’s `libamdocl64.so`.

---

**Compile OpenCL Verification Program**

```rust
gcc opencl_check.c -o opencl_check \
    -I/opt/rocm-7.0.2/include \
    -L/opt/rocm/lib -lOpenCL
```

* `gcc` → GNU Compiler for C.
* `opencl_check.c` → Your source code file containing OpenCL device detection code.
* `-o opencl_check` → Output executable name will be `opencl_check`.
* `-I/opt/rocm-7.0.2/include` → Adds the AMD ROCm OpenCL **header files** path so the compiler knows where to find `<CL/cl.h>`.
* `-L/opt/rocm/lib` → Adds the **library search path** so the linker knows where to find libraries like `libOpenCL.so`.
* `-lOpenCL` → Tells the linker to link against the `OpenCL` library (which now points to AMD’s `libamdocl64.so` because of the symlink).

**Effect:** This produces an executable `opencl_check` that can query AMD GPUs using OpenCL.

---

💡 **In short:**

1. **Symlink:** Makes AMD’s OpenCL library available under the standard name `libOpenCL.so`.
2. **Compilation:** Compiles your C code, telling the compiler and linker where the OpenCL headers and library are.
3. **Result:** You get a ready-to-run program that detects and prints OpenCL devices.

</TabItem>

<TabItem value="verify-run" label="Run">

```bash
# Run the OpenCL verification program
./opencl_check
```

:::tip Expected Output:
:::

```rust
Found 1 OpenCL platform(s)
Platform 0: AMD Accelerated Parallel Processing (Advanced Micro Devices, Inc.)
  Device 0: gfx1200 (GPU)
    Vendor: Advanced Micro Devices, Inc.
    Compute Units: 16
    Global Memory: 15.92 GB
    Max Clock: 2787 MHz
    Local Memory: 64.00 KB
  Device 1: gfx1036 (GPU)
    Vendor: Advanced Micro Devices, Inc.
    Compute Units: 1
    Global Memory: 15.23 GB
    Max Clock: 2200 MHz
    Local Memory: 64.00 KB

✅ OpenCL devices detection complete
```

  </TabItem>

</Tabs>

</TabItem>

<TabItem value="nvidia" label="NVIDIA">
Coming Soon 
</TabItem>

</Tabs>



## Troubleshooting Common Issues

### Driver Issues

```python
# Check if GPU is properly initialized
dmesg | grep -i "drm\|gpu\|nvidia\|amd"

# Verify kernel module loading
sudo modprobe amdgpu
lsmod | grep amdgpu

# Check for conflicting drivers
sudo apt remove nvidia-*  # If switching from NVIDIA to AMD
```

### OpenCL Runtime Issues

```python
# Check available OpenCL implementations
update-alternatives --config opencl-icd

# Test with different devices
clinfo -l  # List all platforms and devices
```

### Permission Issues

```python
# Add user to necessary groups
sudo usermod -a -G video $USER
sudo usermod -a -G render $USER

# Verify permissions
groups $USER
```

### Build Issues

```python
# Ensure development packages are installed
sudo apt install opencl-headers ocl-icd-opencl-dev

# Check library paths
ldconfig -p | grep OpenCL
```

---

## Next Steps

### Advanced Learning Path

1. **Performance Optimization**
   - Memory access patterns
   - Work-group size optimization
   - Local memory usage

2. **GPU Programming Models**
   - **HIP** (AMD's CUDA alternative)
   - **SYCL** (Cross-platform C++ abstraction)
   - **OpenMP** GPU offloading

3. **Real-world Applications**
   - Image processing pipelines
   - Machine learning inference
   - Scientific simulations

### Recommended Projects

```python
# Clone and experiment with these projects
git clone https://github.com/GPUOpen-LibrariesAndSDKs/rodinia
git clone https://github.com/OpenCL/OpenCL-Examples
```

---

## FAQ

<ComicQA
question="How do I check if my GPU is properly detected and working?"
answer="Use lspci for hardware detection, dmesg for kernel messages, and vendor tools like clinfo or nvidia-smi for runtime status."
code={`lspci | grep -i vga\ndmesg | grep -i gpu\nclinfo | head -10`}
example="Complete GPU status check"
whenToUse="After driver installation and when troubleshooting"
/>

<ComicQA  
question="What's the difference between OpenCL and CUDA?"
answer="OpenCL is cross-platform (AMD, NVIDIA, Intel, etc.) while CUDA is NVIDIA-specific but has better tooling and ecosystem for AI workloads."
code={`# OpenCL: Cross-platform\nclGetPlatformIDs(1, &platform, NULL);\n\n# CUDA: NVIDIA only (example)\ncudaMalloc(&device_ptr, size);`}
example="Platform vs vendor-specific programming"
whenToUse="When choosing which GPU technology to learn"
/>

<ComicQA
question="Why is my GPU not being used by OpenCL programs?"
answer="Common issues: missing drivers, incorrect ICD configuration, or permission problems. Verify with clinfo and check user groups."
code={`clinfo | grep "Device Name"\ngroups $USER\nsudo usermod -a -G video $USER`}
example="Diagnosing OpenCL device detection issues"
whenToUse="When programs run on CPU instead of GPU"
/>

<ComicQA
question="How can I monitor GPU usage and temperature?"
answer="Use nvidia-smi for NVIDIA, rocm-smi for AMD ROCm, or watch with these tools for real-time monitoring."
code={`# NVIDIA\nwatch -n 1 nvidia-smi\n\n# AMD ROCm\nwatch -n 1 rocm-smi\n\n# Generic\nhtop`}
example="Real-time GPU monitoring dashboard"
whenToUse="During GPU-intensive computations and debugging"
/>

---


### Continue Your Journey

Ready for more? Explore these advanced topics:

- **GPU Memory Hierarchy** - Local vs global memory optimization
- **Performance Profiling** - Using ROCm Profiler or NVIDIA Nsight
- **Multi-GPU Programming** - Scaling across multiple devices
- **AI Framework Integration** - PyTorch and TensorFlow GPU acceleration

---

1. **NVIDIA Developer Blog** – "What’s the Difference Between a CPU and a GPU?"  
   A detailed breakdown of the differences between CPUs and GPUs, their design philosophy, and their respective use cases.  
   [https://blogs.nvidia.com/blog/whats-the-difference-between-a-cpu-and-a-gpu/](https://blogs.nvidia.com/blog/whats-the-difference-between-a-cpu-and-a-gpu/)

2. **Intel** – "How GPUs Accelerate Machine Learning"  
   Intel's insights into how GPUs enhance the performance of machine learning tasks and the role of parallel processing.  
   [https://www.intel.com/content/www/us/en/artificial-intelligence/what-are-gpus-for-machine-learning.html](https://www.intel.com/content/www/us/en/artificial-intelligence/what-are-gpus-for-machine-learning.html)

3. **CDW** – "CPU vs. GPU : What’s the Difference?"  
   A comparison of the roles of CPUs and GPUs  
   [https://www.cdw.com/content/cdw/en/articles/hardware/cpu-vs-gpu.html#:~:text=Modern%20Computing%20Components-,What's%20the%20Difference%20Between%20a%20CPU%20and%20a%20GPU%3F,many%20smaller%20tasks%20at%20once.](https://www.cdw.com/content/cdw/en/articles/hardware/cpu-vs-gpu.html#:~:text=Modern%20Computing%20Components-,What's%20the%20Difference%20Between%20a%20CPU%20and%20a%20GPU%3F,many%20smaller%20tasks%20at%20once.)

4. **TechSpot** – "What is the Difference Between CPU and GPU?"  
   A comprehensive article that compares CPU and GPU architecture, performance, and use in both consumer and industrial applications.  
   [https://www.techspot.com/review/2790-faster-gpu-vs-faster-cpu//](https://www.techspot.com/review/2790-faster-gpu-vs-faster-cpu//)

5. **Wikipedia** – "Graphics Processing Unit"  
   A general overview of the history, architecture, and functions of GPUs in computing.  
   [https://en.wikipedia.org/wiki/Graphics_processing_unit](https://en.wikipedia.org/wiki/Graphics_processing_unit)

6. **History of Parallel Programming** - "History to Parallel programming"
          [Intro to parallel programming](https://www.compilersutra.com/docs/parallel-programming-evolution)
        
7. **Intro to Parallel Programming** - "Introduction to Parallel Programming"
[https://www.compilersutra.com/docs/gpu/Parallel_Programming/Intro_to_Parallel_Programming]



<Tabs>
  <TabItem value="docs" label="📚 Documentation">
             - [CompilerSutra Home](https://compilersutra.com)
                - [CompilerSutra Homepage (Alt)](https://compilersutra.com/)
                - [Getting Started Guide](https://compilersutra.com/get-started)
                - [Newsletter Signup](https://compilersutra.com/newsletter)
                - [Skip to Content (Accessibility)](https://compilersutra.com#__docusaurus_skipToContent_fallback)


  </TabItem>

  <TabItem value="tutorials" label="📖 Tutorials & Guides">

        - [AI Documentation](https://compilersutra.com/docs/Ai)
        - [DSA Overview](https://compilersutra.com/docs/DSA/)
        - [DSA Detailed Guide](https://compilersutra.com/docs/DSA/DSA)
        - [MLIR Introduction](https://compilersutra.com/docs/MLIR/intro)
        - [TVM for Beginners](https://compilersutra.com/docs/tvm-for-beginners)
        - [Python Tutorial](https://compilersutra.com/docs/python/python_tutorial)
        - [C++ Tutorial](https://compilersutra.com/docs/c++/CppTutorial)
        - [C++ Main File Explained](https://compilersutra.com/docs/c++/c++_main_file)
        - [Compiler Design Basics](https://compilersutra.com/docs/compilers/compiler)
        - [OpenCL for GPU Programming](https://compilersutra.com/docs/gpu/opencl)
        - [LLVM Introduction](https://compilersutra.com/docs/llvm/intro-to-llvm)
        - [Introduction to Linux](https://compilersutra.com/docs/linux/intro_to_linux)

  </TabItem>

  <TabItem value="assessments" label="📝 Assessments">

        - [C++ MCQs](https://compilersutra.com/docs/mcq/cpp_mcqs)
        - [C++ Interview MCQs](https://compilersutra.com/docs/mcq/interview_question/cpp_interview_mcqs)

  </TabItem>

  <TabItem value="projects" label="🛠️ Projects">

            - [Project Documentation](https://compilersutra.com/docs/Project)
            - [Project Index](https://compilersutra.com/docs/project/)
            - [Graphics Pipeline Overview](https://compilersutra.com/docs/The_Graphic_Rendering_Pipeline)
            - [Graphic Rendering Pipeline (Alt)](https://compilersutra.com/docs/the_graphic_rendering_pipeline/)

  </TabItem>

  <TabItem value="resources" label="🌍 External Resources">

            - [LLVM Official Docs](https://llvm.org/docs/)
            - [Ask Any Question On Quora](https://compilersutra.quora.com)
            - [GitHub: FixIt Project](https://github.com/aabhinavg1/FixIt)
            - [GitHub Sponsors Page](https://github.com/sponsors/aabhinavg1)

  </TabItem>

  <TabItem value="social" label="📣 Social Media">

            - [🐦 Twitter - CompilerSutra](https://twitter.com/CompilerSutra)
            - [💼 LinkedIn - Abhinav](https://www.linkedin.com/in/abhinavcompilerllvm/)
            - [📺 YouTube - CompilerSutra](https://www.youtube.com/@compilersutra)

  </TabItem>
</Tabs>