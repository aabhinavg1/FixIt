
# LLVM with Clang Build Instructions

This guide explains how to set up, build, and test LLVM with Clang on your local machine.

## Prerequisites

Before you start building LLVM and Clang, make sure the following software is installed:

- **CMake** (version 3.13 or higher)
- **Ninja** (recommended for faster builds)
- **Python** (for running tests)
- **Git** (optional for version control)

### Installing Dependencies

- **Ubuntu**:
  ```bash
  sudo apt-get install cmake ninja-build python3 git
  ```

- **macOS**:
  Install dependencies using Homebrew:
  ```bash
  brew install cmake ninja python git
  ```

## Cloning the LLVM Project

Clone the LLVM project from GitHub. This includes Clang and other subprojects:

```bash
git clone https://github.com/llvm/llvm-project.git
cd llvm-project
```

If you want to build a specific release, check out the corresponding tag. For example:

```bash
git checkout llvmorg-16.0.0
```

## Configuring the Build

Create a separate directory for building the project:

```bash
mkdir build
cd build
```

Configure the build using **CMake**. It's recommended to use **Ninja** as the build system for faster builds:

```bash
cmake -G Ninja -DLLVM_ENABLE_PROJECTS=clang -DCMAKE_BUILD_TYPE=Release ../llvm
```

### Common CMake Options:

- `-DLLVM_ENABLE_PROJECTS=clang`: This enables Clang to be built alongside LLVM.
- `-DCMAKE_BUILD_TYPE=Release`: Builds LLVM in release mode with optimizations.
- `-DLLVM_TARGETS_TO_BUILD=X86`: You can specify the target architecture(s). Replace `X86` with your desired architecture (e.g., `ARM`, `AArch64`).

## Building LLVM with Clang

Once the configuration is complete, build the project:

```bash
ninja
```

If you are not using Ninja, you can use Make instead:

```bash
make
```

The build process can take some time depending on your machine's specifications.

## Running Tests

After the build is complete, you can run the tests to ensure everything is working correctly:

```bash
ninja check-all
```

This command will run all available tests for LLVM, Clang, and other enabled subprojects.

## Cleaning Up the Build

To clean the build directory, run:

```bash
ninja clean
```

Or with Make:

```bash
make clean
```

## Additional Resources

For more details, refer to the official LLVM documentation:
- [LLVM Build Instructions](https://llvm.org/docs/GettingStarted.html)
- [CMake Guide for LLVM](https://llvm.org/docs/CMake.html)
