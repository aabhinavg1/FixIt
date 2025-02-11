# How to Disable an LLVM Pass by Modifying the LLVM Source Code

LLVM uses a pass-based infrastructure to transform and optimize code. There might be scenarios where you want to disable a specific pass due to debugging requirements, performance tuning, or custom compiler modifications. This guide explains how to disable an LLVM pass by modifying the LLVM source code.

## Understanding LLVM Passes
LLVM passes are modular transformations that operate on different levels of LLVM IR. These passes are registered in the LLVM framework and are part of the compilation pipeline. Each pass can be enabled or disabled at different stages of execution.

## Steps to Disable an LLVM Pass

### 1. Identify the Pass Name
Each LLVM pass has a unique identifier. To list all available passes in your LLVM build, you can run:

```sh
opt --help-hidden | grep "Pass"  
```

Find the pass name that you want to disable.

### 2. Locate the Pass in the Source Code
LLVM passes are usually implemented in the `lib/Transforms/` directory. You can search for the pass using:

```sh
grep -r "PassName" llvm-project/llvm/lib/Transforms/
```

Alternatively, you can check `llvm/lib/Passes/PassBuilder.cpp`, which registers and configures passes in the LLVM pass pipeline.

### 3. Modify the Pass Registration
Once you have located the pass, you can disable it by modifying its registration in `PassBuilder.cpp`. Look for:

```cpp
PB.registerPipelineParsingCallback([](StringRef Name, FunctionPassManager &FPM, ...) {
    if (Name == "pass-to-disable") {
        return false; // This prevents the pass from being added
    }
    return true;
});
```

Alternatively, comment out the registration:

```cpp
// PB.registerFunctionPass([] { return createYourPass(); });
```

### 4. Rebuild LLVM
After modifying the source code, rebuild LLVM to apply the changes:

```sh
cd llvm-project
mkdir build && cd build
cmake -G "Ninja" -DCMAKE_BUILD_TYPE=Release ..
ninja
```

### 5. Verify the Changes
Run `opt --print-pipeline` to check if the pass is still present. If it is successfully removed, it should not appear in the list.

### 6. (Optional) Modify the Pass Manager
If the pass is included in the default optimization pipeline, you may need to modify `llvm/lib/Passes/PassManagerBuilder.cpp` and remove its explicit addition.

## Example
Let's assume we want to disable the **GVN pass**. Locate the pass registration in `PassBuilder.cpp`:

```cpp
PB.registerFunctionPass([] { return createGVNPass(); });
```

Comment it out:

```cpp
// PB.registerFunctionPass([] { return createGVNPass(); });
```

Rebuild LLVM and verify that **GVN** no longer appears in the pipeline.

## Conclusion
By following these steps, you can effectively disable an LLVM pass by modifying its source code. This can be useful for debugging and compiler customization. Always ensure that your modifications do not break essential compiler functionalities.

For further exploration, refer to the [LLVM documentation](https://llvm.org/docs/WritingAnLLVMPass.html) and source code in the official [LLVM repository](https://github.com/llvm/llvm-project).
