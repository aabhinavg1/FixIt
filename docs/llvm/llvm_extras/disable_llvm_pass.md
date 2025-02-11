---
id: disable_pass
title: "How to Disable LLVM Pass New Pass Manager"
description: "Comprehensive guide to understanding LLVM: disabling and enabling passes of your choice."
keywords:
  - LLVM Tutorial
  - LLVM Function Pass
  - LLVM Pass Creation
  - Disable LLVM Pass
  - Compiler Pass Development
  - Function Analysis in LLVM
  - LLVM for Beginners
  - Advanced LLVM Techniques
  - LLVM Optimization
  - Writing Compiler Passes
  - Clang and LLVM Integration
  - LLVM Architecture and Design
tags:
  - LLVM
  - Compiler Development
  - Compiler Pass
  - LLVM Development
  - Compiler Optimization
  - Clang
  - Programming Tutorials
  - Open Source Compiler
  - LLVM IR
  - Machine Learning in LLVM
  - LLVM Pass
---

# How to Disable LLVM Pass Using New Pass Manager

LLVM uses a pass-based infrastructure to transform and optimize code. Passes are the core of LLVM's optimization framework. LLVM has two types of pass managers:

- **Legacy Pass Manager**
- **New Pass Manager**

There are scenarios where you might want to disable a specific pass, such as for debugging, performance tuning, or custom compiler modifications. This guide explains how to disable an LLVM pass by modifying the LLVM source code.

## Comparison of Legacy and New Pass Managers in LLVM

| Feature               | Legacy Pass Manager            | New Pass Manager |
|-----------------------|--------------------------------|------------------|
| **Default in LLVM**   | Pre-LLVM 11                   | LLVM 11+        |
| **Performance**       | Slower, more overhead         | Faster, optimized |
| **Pass Execution**    | Runs all passes in order, less flexible | Supports finer-grained pass management |
| **Dependency Tracking** | Limited dependency tracking | Improved pass dependencies and scheduling |
| **Modularity**        | Monolithic design            | More modular and composable |
| **IR Analysis**       | Less efficient analysis       | More optimized and avoids redundant analysis |
| **Opt Tool Support**  | `opt` supports it via `-enable-new-pm=0` | Default in `opt` |
| **Custom Passes**     | Requires manual registration | Easier to integrate and manage custom passes |
| **Usage in Frontend** | Commonly used in older Clang-based frontends | Default in modern Clang-based frontends |
| **Usage in Backend**  | Still used in some older backend components | Used in modern backend optimizations |


## Knowing Your Passes

Before disabling a pass, you should first identify the available passes in LLVM. Use the `opt` tool to list all supported passes:

```bash
opt --print-passes
```

:::note
This command provides a list of all available passes. For more details, use:

```bash
opt --help
```
:::

## Steps to Disable an LLVM Pass

### 1. Identify the Pass Name

Each LLVM pass has a unique identifier. Suppose we want to disable the **SROA** (Scalar Replacement of Aggregates) pass. To list the `SROA` pass in your LLVM build, run:

```bash
opt --print-passes | grep sroa
```

Example output:
```sh
sroa<preserve-cfg;modify-cfg>
```

### 2. Check if the SROA Pass is Present

Compile a test file and inspect the IR output to check if the **SROA** pass is applied:

#### Test Code:
```cpp
#include <iostream>
int add(int a, int b) {
    return a + b;
}
int main() {
    int x = 10, y = 20;
    int result = add(x, y);
    std::cout << "Result: " << result << std::endl;
    return 0;
}
```

#### Generate LLVM IR with Pass Information:
```bash
bin/clang test/test.c -mllvm -print-after-all &> without_disabling_any_flag.ll
```

:::note
The `-print-after-all` flag prints the IR after every pass in the optimization pipeline.
:::

Check if **SROA** is present:
```bash
cat without_disabling_any_flag.ll | grep SROAPass
```
Example output:
```sh
; *** IR Dump After SROAPass on add ***
; *** IR Dump After SROAPass on main ***
```
Since the **SROA** pass is applied, we will now disable it.

### 3. Locate the Pass in the Source Code

Find where **SROA** is registered in LLVM:
```bash
opt --print-passes | grep sroa
```

Locate **SROA** in `PassRegistry.def`:
```bash
cat ./llvm/lib/Passes/PassRegistry.def | grep sroa
```
Output:
```sh
"sroa", "SROAPass",
```

Find the `SROAPass` occurrences in the LLVM source:
```bash
grep -inr "SROAPass" ./llvm/lib/Passes
```
Example output:
```sh
./llvm/lib/Passes/PassBuilderPipelines.cpp:419:  FPM.addPass(SROAPass(SROAOptions::ModifyCFG));
./llvm/lib/Passes/PassBuilderPipelines.cpp:1106:    EarlyFPM.addPass(SROAPass(SROAOptions::ModifyCFG));
./llvm/lib/Passes/PassRegistry.def:612:    "sroa", "SROAPass",
```

Alternatively, check `llvm/lib/Passes/PassBuilder.cpp`, ``llvm/lib/Passes/PassBuilderPipelines.cpp`` where LLVM registers passes.

### 4. Modify the Pass Registration

Comment out the `SROAPass` registration lines in `PassBuilderPipelines.cpp` or other relevant files.

### 5. Rebuild LLVM

After modifying the source code, rebuild LLVM:

```bash
cd llvm-project
mkdir build && cd build
cmake -G "Ninja" -DCMAKE_BUILD_TYPE=Release ..
ninja
```

### 6. Verify the Changes

Recompile the test file with the new build:
```bash
bin/clang test/test.c -mllvm -print-after-all &> with_sroa_disabled.ll
```

Check if **SROA** is removed:
```bash
cat with_sroa_disabled.ll | grep SROA
```
If no output is returned, the **SROA** pass has been successfully disabled.

### 6. (Optional) Modify the Pass Manager
You may need to modify `llvm/lib/Passes/PassManagerBuilder.cpp` and remove SROA.

Rebuild LLVM and verify that **SROA** no longer appears in the pipeline.


## Conclusion

By following these steps, you can effectively disable an LLVM pass by modifying its source code. This is useful for debugging and compiler customization. Always ensure that your modifications do not break essential compiler functionalities.

For further details, refer to the [LLVM documentation](https://llvm.org/docs/WritingAnLLVMPass.html) and the official [LLVM repository](https://github.com/llvm/llvm-project).
