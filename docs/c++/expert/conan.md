---
title: Conan Package Manager for C++ - Complete Guide
description: Learn how to use Conan for C++ dependency management. Understand package installation, profiles, conanfile, CMake integration, and how Conan solves version conflicts, platform differences, and CI reproducibility in professional C++ projects.
keywords:
  - conan c++
  - c++ dependency management
  - conan package manager
  - conan cmake integration
  - c++ package management
  - conan profile
  - conanfile.txt
  - conanfile.py
tags:
  - C++
  - Conan
  - Build Tools
  - Package Management
---

import AdBanner from '@site/src/components/AdBanner';

# Conan Package Manager for C++



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

C++ is one of the few mainstream languages without a universal package manager. For years, developers handled dependencies by cloning repos, copying headers, or writing custom build scripts. This works for small projects but breaks down as teams and codebases grow.

Conan is a decentralized package manager for C++ that solves the core problems: version conflicts, platform differences, local environment drift, and CI reproducibility.

This article covers how Conan works, how to set it up, and how to integrate it with CMake for real projects.

<div>
  <AdBanner />
</div>

## Table of Contents

1. [Why C++ needs a package manager](#why-c-needs-a-package-manager)
2. [What Conan solves](#what-conan-solves)
3. [Installing Conan](#installing-conan)
4. [Understanding profiles](#understanding-profiles)
5. [conanfile.txt vs conanfile.py](#conanfiletxt-vs-conanfilepy)
6. [Installing packages](#installing-packages)
7. [CMake integration](#cmake-integration)
8. [A complete workflow example](#a-complete-workflow-example)
9. [Conan Center and remote repositories](#conan-center-and-remote-repositories)
10. [Common mistakes](#common-mistakes)
11. [FAQ](#faq)

## Why C++ Needs a Package Manager

Without a package manager, C++ projects face these problems:

- **Version conflicts** — Project A needs Boost 1.78, Project B needs Boost 1.81. Manually managing both is painful.
- **Platform differences** — A library compiled on macOS may not work on Linux. Cross-compilation adds more complexity.
- **Local environment drift** — "It works on my machine" because your local build has different library versions than your colleague's.
- **CI reproducibility** — CI servers need the exact same dependencies as development machines.

Conan addresses all of these by managing packages per project, per profile, with reproducible builds.

## What Conan Solves

Conan manages C++ libraries at the binary and source level. It handles:

| Problem | How Conan Solves It |
|---------|-------------------|
| Version conflicts | Per-project dependency resolution |
| Platform differences | Binary packages per platform and compiler |
| Build reproducibility | Lockfiles pin exact versions |
| Cross-compilation | Profiles define target platform |
| CI consistency | Same conanfile + lockfile = same build |

Conan is **decentralized** — there is no single registry like npm. The default remote is **Conan Center**, but teams can run their own private remotes.

## Installing Conan

Conan 2.x is the current version. Install it via pip:

```bash
pip install conan
```

Verify the installation:

```bash
conan --version
# conan/2.x.x
```

### Installing on macOS

```bash
pip3 install conan
```

### Installing on Linux

```bash
pip install conan
# or via your package manager
sudo apt install conan  # Ubuntu (may be older version)
```

### Installing on Windows

```bash
pip install conan
```

Always prefer pip to get the latest version. System package managers often have outdated versions.

<div>
  <AdBanner />
</div>

## Understanding Profiles

A profile tells Conan about your build environment: compiler, build type, architecture, and other settings. Conan ships with auto-detected default profiles.

```bash
conan profile detect
```

This creates a default profile at `~/.conan2/profiles/default`. You can view it:

```bash
conan profile show
```

Example output:

```ini
[settings]
arch=armv8
build_type=Release
compiler=apple-clang
compiler.cppstd=17
compiler.libcxx=libc++
compiler.version=15
os=Macos
```

### Creating Custom Profiles

For different build configurations, create separate profiles:

```bash
# Debug profile
conan profile new debug --detect
conan profile update settings.build_type=Debug debug

# Release profile
conan profile new release --detect
conan profile update settings.build_type=Release release
```

### Why Profiles Matter

Profiles ensure that:

- The same `conanfile.txt` produces consistent builds across machines
- CI uses the same profile as development
- Cross-compilation targets the right platform

## conanfile.txt vs conanfile.py

Conan uses two formats for declaring dependencies:

### conanfile.txt (Simple)

For straightforward projects where you just need to install packages:

```ini
[requires]
boost/1.83.0
fmt/10.2.1
nlohmann_json/3.11.3

[generators]
CMakeDeps
CMakeToolchain
```

### conanfile.py (Advanced)

For projects that need custom build logic, version ranges, or conditional dependencies:

```python
from conan import ConanFile
from conan.tools.cmake import cmake_layout

class MyProjectConan(ConanFile):
    name = "myproject"
    version = "1.0"
    settings = "os", "compiler", "build_type", "arch"

    def requirements(self):
        self.requires("boost/1.83.0")
        self.requires("fmt/10.2.1")

    def layout(self):
        cmake_layout(self)

    def generate(self):
        # custom generation logic if needed
        pass
```

**When to use which:**

| Use Case | Format |
|----------|--------|
| Simple dependency list | `conanfile.txt` |
| Version ranges | `conanfile.py` |
| Conditional dependencies | `conanfile.py` |
| Custom build logic | `conanfile.py` |
| Library packages you distribute | `conanfile.py` |

## Installing Packages

With a `conanfile.txt` in place:

```bash
# Install dependencies
conan install . --output-folder=build --build=missing
```

This command:

1. Reads the `conanfile.txt`
2. Resolves the dependency graph
3. Downloads or builds missing binaries
4. Generates CMake files in the `build` directory

The `--build=missing` flag tells Conan to build packages from source if a pre-built binary is not available for your profile.

### Key Install Options

```bash
# Install in debug mode
conan install . -pr:a debug --build=missing

# Install and build specific package from source
conan install . --build=boost

# Force all packages to build from source
conan install . --build=*
```

<div>
  <AdBanner />
</div>

## CMake Integration

Conan generates CMake files that your `CMakeLists.txt` can consume. The standard workflow:

### CMakeLists.txt

```cmake
cmake_minimum_required(VERSION 3.15)
project(myproject LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Boost REQUIRED)
find_package(fmt REQUIRED)

add_executable(myapp main.cpp)
target_link_libraries(myapp Boost::boost fmt::fmt)
```

### Build Commands

```bash
# Step 1: Install dependencies and generate CMake files
conan install . --output-folder=build --build=missing

# Step 2: Configure CMake using Conan-generated toolchain
cmake -S . -B build -DCMAKE_TOOLCHAIN_FILE=build/conan_toolchain.cmake

# Step 3: Build
cmake --build build

# Step 4: Run
./build/myapp
```

### Why the Toolchain File Matters

The `conan_toolchain.cmake` file tells CMake where to find the Conan-installed packages. Without it, CMake cannot locate the headers and libraries that Conan downloaded or built.

## A Complete Workflow Example

Let us build a small project that uses `fmt` for formatted output.

### Project Structure

```
myproject/
├── CMakeLists.txt
├── conanfile.txt
└── main.cpp
```

### main.cpp

```cpp
#include <fmt/format.h>
#include <iostream>

int main() {
    std::string name = "World";
    int year = 2024;
    fmt::print("Hello, {}! Welcome to {}.\n", name, year);
    return 0;
}
```

### conanfile.txt

```ini
[requires]
fmt/10.2.1

[generators]
CMakeDeps
CMakeToolchain
```

### CMakeLists.txt

```cmake
cmake_minimum_required(VERSION 3.15)
project(myproject LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(fmt REQUIRED)

add_executable(myapp main.cpp)
target_link_libraries(myapp fmt::fmt)
```

### Build and Run

```bash
conan install . --output-folder=build --build=missing
cmake -S . -B build -DCMAKE_TOOLCHAIN_FILE=build/conan_toolchain.cmake
cmake --build build
./build/myapp
# Output: Hello, World! Welcome to 2024.
```

This workflow is the foundation for all Conan-based C++ projects.

## Conan Center and Remote Repositories

Conan Center is the default public remote with thousands of packages:

```bash
# Search for packages
conan search fmt

# List available versions
conan search "fmt/*" -r conancenter

# Add a private remote
conan remote add mycompany https://conan.mycompany.com
```

### Using Private Remotes

For proprietary libraries or internal packages, teams run their own Conan remote (using Artifactory, Conan Server, or a file-based remote):

```bash
# Add private remote
conan remote add mycompany https://conan.mycompany.com

# Upload a package
conan upload mylib/1.0 -r mycompany --all

# Install from private remote
conan install . -r mycompany
```

## Common Mistakes

**1. Not using --build=missing correctly**

If you skip `--build=missing`, Conan will fail when a pre-built binary is not available for your platform. Always use it during development.

**2. Mixing Conan 1.x and 2.x**

Conan 2.x is not backward-compatible with 1.x. Do not mix conanfile formats or commands between versions. If you are starting fresh, use Conan 2.x.

**3. Forgetting the toolchain file**

The most common build failure is CMake not finding Conan packages. This almost always means you forgot to pass `-DCMAKE_TOOLCHAIN_FILE=build/conan_toolchain.cmake`.

**4. Not checking lockfiles in version control**

If you use `conan.lock`, commit it to version control. Without it, your CI may resolve different versions than your local build.

**5. Installing packages globally**

Conan installs packages per profile, not globally. Do not assume a package installed for one profile is available for another. This is by design — it prevents conflicts.

**6. Using conanfile.txt when you need conanfile.py**

If your project has version ranges, conditional dependencies, or custom build logic, use `conanfile.py`. The extra complexity pays off in maintainability.

<div>
  <AdBanner />
</div>

## FAQ

**Q: Conan vs vcpkg — which should I use?**

Both are viable. Conan is more flexible and has a larger package ecosystem. vcpkg integrates more tightly with Visual Studio and CMake. For cross-platform projects, Conan is often the more mature choice.

**Q: Can I use Conan with header-only libraries?**

Yes. Conan handles header-only libraries well. They do not require compilation and are simply made available in the include path.

**Q: How does Conan handle transitive dependencies?**

Conan resolves the full dependency graph and installs all transitive dependencies. You only need to declare direct dependencies — Conan handles the rest.

**Q: Do I need Conan for small projects?**

No. For personal projects with zero or one external dependency, manual management is fine. Conan becomes valuable when you have multiple dependencies, multiple platforms, or multiple developers.

**Q: Can I use Conan without CMake?**

Yes. Conan supports other generators (Meson, MSBuild, etc.) and can work with any build system. CMake is the most common pairing but not required.

**Q: How do I update dependencies?**

Edit the version in your `conanfile.txt` or `conanfile.py`, then run `conan install` again. Conan will resolve the new version and rebuild if needed.

## Related Articles

- [CMake Tutorial](/docs/c++/basic/cpp_tutorial_with_cmake.md) — CMake fundamentals
- [Interview Preparation](./interview-prep.md) — C++ career guide
- [Tools](/docs/c++/resources/tools.md) — Development tools overview
