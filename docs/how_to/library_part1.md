---
title: "Library and Types of Library"
description: "A complete beginner-to-intermediate guide to programming libraries — what they are, how they work, types like static, dynamic, header-only, frameworks, plugin libraries, and platform-specific formats."
keywords:
- static library
- dynamic library
- shared library
- C++ libraries
- header-only library
- framework vs library
- plugin library
- fat / universal library
- library formats Windows Linux macOS
- linking in C++
- compile-time linking
- runtime linking
- precompiled library
- cross-platform libraries
- modular libraries
- software plugins
- dependency management C++
- STL (Standard Template Library)
- ABI vs API in libraries
- DLL Hell / version conflicts
- library creation Linux
- library creation Windows
- library creation macOS
- linking static libraries
- linking dynamic libraries
- shared object files
- import libraries
- external libraries C++
- library versioning
- runtime library loading
- framework architecture
- inversion of control IoC
- library optimization techniques
- reusable code C++
- software extensibility
- header-only templates
- precompiled headers
- C++ module libraries
- multi-architecture libraries
- library portability
- dynamic module loading
- plugin-based architecture
- cross-platform framework
- library vs API
- system libraries
- third-party C++ libraries
- application skeleton frameworks
- object files (.o / .obj)
- build and link process
- library best practices

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AdBanner from '@site/src/components/AdBanner';

# Library and Types of Library

In this guide, you’ll master the essentials of programming ***libraries—pre-built*** code blocks that supercharge development. You’ll start by understanding what libraries are and why they’re indispensable for modern software, ***from avoiding reinvented wheels*** to leveraging battle-tested solutions. 

> We’ll demystify key types like static libraries (embedded directly into executables) and dynamic libraries (loaded at runtime), along with niche variants like header-only libraries (e.g., [Eigen](https://eigen.tuxfamily.org/index.php?title=Main_Page)) and plugin systems (used in apps like Photoshop). 

:::important
You’ll explore platform-specific formats (.dll, .so, .dylib) and learn how linking works under the hood, including common pitfalls like "DLL Hell." 

- Practical insights include creating your own libraries, managing dependencies safely, and navigating licensing (MIT vs. GPL). 

- By the end, you’ll know how to choose the right library type for `performance`, `maintainability`, or `cross-platform` needs whether you’re `building a lightweight script` or a `complex framework-dependent` app.
:::
---


🎥 **Watch the Playlist**: 
<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '20px' }}>
  <iframe 
    src="https://www.youtube.com/embed/ypsiVLQMmNM"
    title="MakeFile tutorial"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
</div>


<div>
    <AdBanner />
</div>


## Table of Contents — *Library and Types of Library*

1. [**Introduction to Libraries**](#introduction-to-libraries)  
   1.1 [What is a Library in Programming?](#what-is-a-library-in-programming)  
   1.2 [Why Do We Use Libraries?](#why-do-we-use-libraries)  
   1.3 [Advantages of Using Libraries](#advantages-of-using-libraries)  

2. [**General Definition and Terminology**](#general-definition-and-terminology)  
   2.1 [How a Library Differs from Source Code](#how-a-library-differs-from-source-code)  
   2.2 [Library vs API vs Framework](#library-vs-api-vs-framework)  

3. [**Classification of Libraries**](#classification-of-libraries)  
   3.1 [Static Libraries](#31-static-libraries) *(also called Archive Libraries — `.a`, `.lib`)*  
   3.2 [Dynamic Libraries](#32-dynamic--shared-libraries) *(also called Shared Libraries — `.so`, `.dll`, `.dylib`)*  
   3.3 [Header-Only Libraries](#33-header-only-libraries)  
   3.4 [Frameworks](#34-frameworks)  
   3.5 [Plugin Libraries](#35-plugin-libraries)  
   3.6 [Universal / Fat Libraries](#36-universal--fat-libraries)  

7. [**What Next**](#what-next)  



##### Introduction to Libraries

##### What is a Library in Programming?
A **library** is a collection of precompiled, reusable code that provides specific functionality. Unlike writing everything from scratch, libraries let you leverage existing solutions for common problems.

:::note Key Idea  
Think of a library like a **toolbox**:  
- **Standard Library** = Basic tools (screwdrivers, hammers).  
- **Third-Party Libraries** = Specialized tools (laser levels, power drills).  
:::

**Example in C++:**  
```cpp
#include <vector> // Part of the C++ Standard Library

int main() {
    std::vector<int> nums = {1, 2, 3}; // Reusable dynamic array
    return 0;
}
```

**Example in Python:**  
```python
import requests # Third-party HTTP library

response = requests.get("https://api.example.com")
```



##### Why Do We Use Libraries?

1. **Avoid Reinventing the Wheel**  
   Why write a sorting algorithm when `std::sort()` exists?

2. **Performance Optimized**  
   Libraries like `BLAS` (for math) are hand-tuned for speed.

3. **Cross-Platform Compatibility**  
   Libraries abstract OS-specific details (e.g., `libcurl` works on Windows/Linux/macOS).

:::tip When to Use a Library?  
- If >50% of your task is solved by a well-maintained library, **use it**.  
- For niche needs, consider writing custom code.  
:::

<div>
    <AdBanner />
</div>


##### Advantages of Using Libraries

| Advantage          | Explanation                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| **Faster Development** | Focus on your app’s logic, not low-level details.                          |
| **Fewer Bugs**        | Battle-tested code used by thousands.                                      |
| **Security Updates**  | Patches (e.g., OpenSSL fixes) apply without rewriting your app.            |

:::caution Risk Alert  
**Dependency Hell**: Using too many libraries can bloat your project and introduce conflicts. Always audit dependencies!  
:::

---

## General Definition and Terminology

##### How a Library Differs from Source Code

In programming, source code refers to the ***human-readable instructions*** written by `developers`, typically in languages like `C++ (.cpp) or C (.c)`. I

- It contains the logic, algorithms, and structure of a program and must be compiled to produce an executable. 
> ***While*** 
- A library, on the other hand, is a collection of precompiled code that provides specific functionality, such as math operations, graphics handling, or networking utilities. 

:::important ***Unlike source code***
>> *libraries are distributed as binaries ***(e.g., .a, .so, .dll)*** and are meant to be linked to a program rather than rewritten. Using libraries helps developers save time, reuse tested code, and maintain modularity, while source code gives full control over implementation details*
:::
| Aspect           | Source Code                                        | Library                                                                     |
| ---------------- | -------------------------------------------------- | --------------------------------------------------------------------------- |
| **Form**         | Human-readable text files (e.g., `.cpp`, `.h`)     | Precompiled binary files (e.g., `.a`, `.so`, `.lib`, `.dll`)                |
| **Modification** | Fully editable; you can change the implementation  | Typically opaque; you cannot modify the internal code directly              |
| **Compilation**  | Must be compiled every time you build your project | Already compiled; only linked to your project                               |
| **Usage**        | Used as the main body of your program logic        | Provides reusable functionality without rewriting code                      |
| **Distribution** | Usually shared as source files                     | Can be distributed as binaries, reducing size and protecting IP             |
| **Dependency**   | Standalone or minimal dependencies                 | May depend on other libraries or runtime environments                       |
| **Purpose**      | Represents your program’s actual logic             | Provides prebuilt functionality like math routines, graphics, or networking |

:::note  
Libraries are like **pre-baked ingredients** (e.g., frozen pizza dough), while source code is **raw flour and yeast**.  
:::

---

##### Library vs API vs Framework

In software development, understanding the distinction between a **library**, an **API**, and a **framework** is crucial for building modular and maintainable applications.

* A **library** is a collection of reusable code that you explicitly call to perform specific tasks, such as data manipulation, image processing, or mathematical computations. You remain in control of the program flow.

* An **API (Application Programming Interface)** is a set of `rules and protocols` that allows your code to       **interact** with a library, service, or external system. *It defines how different ***software components*** communicate without exposing internal implementation details.*
* A **framework** provides a **structured environment** for building applications. Unlike libraries, a framework **calls your code**, enforcing a particular design pattern or workflow. It dictates the overall architecture while letting you fill in the specific details.

<img
  src="/img/library_vs_Framework_vs_api.svg"
  alt="Diagram illustrating the difference between Library, API, and Framework in software development. User code calls a library and uses an API, while the framework calls the user's code."
  style={{
    width: '100%',
    maxWidth: '800px',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
  }}
/>



| Term          | Role                                                                                                    | Example                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Library**   | Reusable set of functions or modules that you explicitly call in your code.                             | `libjpeg` for image processing, `NumPy` for numerical computing. |
| **API**       | Interface defining how software components communicate; enables interaction with libraries or services. | Twitter REST API, Google Maps API.                               |
| **Framework** | Provides an application skeleton and structure; it calls your code following its conventions.           | React (JavaScript), Django (Python), .NET.                       |

---

:::tip Remember

* **Library**: *“I call it when I need it.”*
* **Framework**: *“It calls me when needed; I fill in the details.”*
* **API**: *“The contract that defines how components talk to each other.”*
:::


##### Classification of Libraries
Libraries are reusable collections of precompiled code that accelerate development, enforce modularity, and reduce errors. They can be classified as follows:


###### 3.1 Static Libraries 

> A **static library** is a collection of object files (`.o` or `.obj`) that are compiled and **linked into the executable at build time**, making the code part of the final binary.

**Advantages:**  
- **No runtime dependencies:** The executable is self-contained and does not require external libraries at        
 runtime.  
- **High execution performance:** Function calls are direct, with no dynamic linking overhead.  
- **Predictable behavior:** Library updates do not affect the executable unless recompiled.  

**Disadvantages:**  
- **Larger binary size:** All library code is embedded, increasing the executable footprint.  
- **Rigid update cycle:** Updating the library requires recompiling all dependent executables.  
- **Limited flexibility:** Cannot switch or replace library code at runtime.


<img
  src="/img/static_library.svg"
  alt="Diagram illustrating a C++ Static Library workflow. The user’s source files (math.cpp, add.cpp, cos.cpp, mul.cpp) are compiled into object files, which are then combined into a static library (libmymath.a). The main program links with the static library to produce the final executable. Commands for compilation, library creation, and linking are shown as well."
  style={{
    width: '100%',
    maxWidth: '800px',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
  }}
/>

**Usage Example:**  

```rust
ar rcs libmylib.a file1.o file2.o
g++ main.cpp -L. -lmylib -o myprogram
```
:::tip Notes:

Static libraries are ideal for small projects or when runtime library distribution is difficult.
Common file extensions: .a (Unix/Linux), .lib (Windows).
:::
---

###### 3.2 Dynamic / Shared Libraries 

**Definition:**
Dynamic libraries (shared libraries) are **linked at runtime**, keeping the executable and library separate. This allows multiple programs to share the same library and update it independently.


<img
  src="/img/dynamic_library.svg"
  alt="Diagram illustrating Dynamic Libraries: code is linked at runtime, executable and library remain separate. Advantages include smaller executables, independent updates, and memory efficiency. Disadvantages include runtime dependency, slight performance overhead, and potential version conflicts."
  style={{
    width: '100%',
    maxWidth: '800px',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
  }}
/>
**Key Advantages:**

* **Smaller executables** — only references to library code are included.
* **Independent updates** — the library can be replaced without recompiling dependent applications.
* **Memory efficiency** — multiple programs can use the same library in memory simultaneously.

**Key Disadvantages:**

* **Runtime dependency** — the library must be present on the system.
* **Slight performance overhead** due to runtime linking.
* **Version conflicts (“DLL Hell”)** if multiple versions exist.

**Cross-Platform Examples:**

| Platform | Example         |
| -------- | --------------- |
| Linux    | `libmath.so`    |
| macOS    | `libmath.dylib` |
| Windows  | `math.dll`      |

**Usage Example:**

```rust
g++ -shared -fPIC file1.cpp file2.cpp -o libmylib.so
g++ main.cpp -L. -lmylib -o myprogram
```


###### 3.3 Header-Only Libraries

**Definition:**  
A **header-only library** is a library where the **entire implementation resides in header files** (`.h` or `.hpp`). No separate compilation or linking of object files is needed. All code is included directly by the compiler when you `#include` the header.

<img
  src="/img/header_only.svg"
  alt="Diagram illustrating how a C++ header-only library works. The user includes the library header in their source file, the compiler processes all code from the headers along with the source file, generates object code for each translation unit, and the linker combines the object code into the final executable"
  style={{
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
  }}
/>

**Advantages:**  
- **Easy integration:** Just include the headers—no need to manage library files.  
- **Eliminates linking issues:** No separate linking step; reduces build system complexity.  
- **Template-friendly:** Ideal for generic programming and template-heavy C++ code.

**Disadvantages:**  
- **Can increase compile time:** Every translation unit including the header recompiles the same code.  
- **Potential code bloat:** If many files include large headers, executable size can increase.  
- **Debugging complexity:** Errors often point to the included header rather than your own code.

**Usage Example:**  
```cpp
#include "mylib.hpp"

int main() {
    myFunction();
    return 0;
}
```

:::caution Popular Header-Only Libraries

* **[Boost (Headers)](https://www.boost.org/doc/libs/release/more/getting_started/index.html)** – Many modules like `Boost.Asio`, `Boost.Spirit`, and `Boost.SmartPtr` are header-only.
* **[Eigen](https://eigen.tuxfamily.org/dox/GettingStarted.html)** – High-performance linear algebra library for vectors, matrices, and numerical computations.
* **[fmt](https://github.com/fmtlib/fmt)** – Modern formatting library for C++ (`fmt::format`).
* **[Catch2](https://github.com/catchorg/Catch2)** – Unit testing framework for C++ (header-only distribution).
* **[spdlog](https://github.com/gabime/spdlog)** – Fast logging library; optionally header-only.

Header-only libraries are widely used in modern C++ projects for **simplicity, portability, and template-heavy code**.
:::

<div>
    <AdBanner />
</div>


###### 3.4 Frameworks

**Definition:**  
A **framework** is a structured **bundle of libraries, tools, and resources** that provides a **predefined architecture** for building applications. Unlike standalone libraries, a framework **dictates the flow of control**—your code is often called by the framework rather than the other way around.

**Key Characteristics:**  
- Provides reusable components and **pre-built modules** for common tasks.  
- Enforces **design patterns** and application structure.  
- Often includes **documentation, templates, and utilities** to streamline development.

**Advantages:**  
- **Speeds up development** for large-scale applications by providing out-of-the-box solutions.  
- **Promotes consistency** in coding practices and design patterns.  
- Reduces the need to write boilerplate code, improving **maintainability**.

**Disadvantages:**  
- **Limited flexibility:** Must work within the framework’s conventions.  
- **Steep learning curve:** Requires understanding the framework’s lifecycle, APIs, and best practices.  
- **Potential overhead:** May include features not needed, increasing application size.

**Examples:**  
- **iOS UIKit (`.framework`)** – Provides UI components and event handling for Apple platforms.  
- **Web frameworks:**  
  - [Django](https://www.djangoproject.com/) – Python web development framework.  
  - [Angular](https://angular.io/) – TypeScript/JavaScript web application framework.



###### 3.5 Plugin Libraries

**Definition:**  
A **plugin library** is a **dynamically loadable module** that extends the functionality of a host application **at runtime**, without modifying the core program.

**Key Characteristics:**  
- Provides **modular extension points** for applications.  
- Loaded and linked **dynamically** by the host program.  
- Interacts with the host through **well-defined APIs or plugin interfaces**.

**Advantages:**  
- **Modular feature extension:** Add or remove functionality easily.  
- **Runtime flexibility:** Update or replace plugins without recompiling the host.  
- Encourages **separation of concerns**, keeping the host code clean.

**Disadvantages:**  
- Requires **strict interface definitions** to avoid runtime errors.  
- **Dependency management complexity:** Conflicts between plugins or library versions may arise.  
- Potential **security considerations** since plugins are executed dynamically.

**Examples:**  
- **Photoshop plugin (`.8bf`)** – Adds new filters or effects.  
- **Audio VST plugin (`.dll` / `.so`)** – Extends audio processing software.

<div>
    <AdBanner />
</div>


###### 3.6 Universal / Fat Libraries

**Definition:**  
A **universal or fat library** is a **single library file containing binaries for multiple CPU architectures**. This allows the same library to run on different hardware without recompilation.

**Key Characteristics:**  
- Contains compiled code for multiple platforms (e.g., Intel + ARM).  
- Simplifies distribution of libraries for cross-platform applications.  
- Common in **macOS/iOS development** to support legacy and modern devices.

**Advantages:**  
- **Cross-architecture compatibility:** One library works on multiple CPU types.  
- **Simplifies deployment:** No need to maintain separate binaries.  
- Ideal for **SDKs** and large-scale frameworks targeting diverse hardware.

**Disadvantages:**  
- **Larger file size:** Includes multiple architecture binaries in one package.  
- **Build complexity:** Must compile for each architecture and combine.  
- **Debugging challenges:** Harder to pinpoint architecture-specific issues.

**Example:**  
- **macOS Universal Binary (`.dylib` / `.framework`)** – Supports Intel and Apple Silicon.

>>  **Library Formats in Different Platforms**

| Platform | Static       | Dynamic      | Framework       |
|----------|--------------|--------------|-----------------|
| Windows  | `.lib`       | `.dll`       | —               |
| Linux    | `.a`         | `.so`        | —               |
| macOS    | `.a`         | `.dylib`     | `.framework`    |

:::note  
macOS also uses `.tbd` (text-based stub libraries) for SDKs.  
:::

<div>
    <AdBanner />
</div>

### Comprehensive Comparison of Library Types

| Library Type           | Definition | Linking / Usage | Advantages | Disadvantages | Performance | Portability | Dependency Management | Update Flexibility | Typical Use Cases | Examples |
|------------------------|------------|----------------|------------|---------------|------------|------------|----------------------|-----------------|-----------------|---------|
| **Static Library**      | Code is compiled and embedded into the executable at build time | Compile-time linking | No runtime dependencies, high execution speed, predictable behavior | Larger binary size, library updates require recompilation | Very fast, minimal runtime overhead | Platform-specific | Easy to manage once built | Low; need to rebuild executable for updates | Low-level utilities, embedded systems, math libraries | `.a` (Linux), `.lib` (Windows) |
| **Dynamic / Shared Library** | Code is compiled into a separate file and linked at runtime | Runtime linking | Smaller binaries, library can be updated independently, memory sharing | Requires runtime presence, version compatibility issues, potential symbol conflicts | Slight runtime overhead due to dynamic linking | Highly portable across systems supporting the library | Can be tricky if multiple versions exist | High; can update library without recompiling executable | OS libraries, graphics engines, plugins | `.so` (Linux), `.dll` (Windows), `.dylib` (macOS) |
| **Header-Only Library** | Entire implementation exists in header files; no separate compilation | Include headers in source files | Easy integration, no linking issues, template-friendly, inline optimizations | Can increase compile time, potential code bloat, may expose internal implementation | Fast, compiler can inline aggressively | Very portable | Minimal, just include headers | High; just include updated header | Template-heavy libraries, math, utility functions | [Boost](https://www.boost.org/), [Eigen](https://eigen.tuxfamily.org/dox/GettingStarted.html), [fmt](https://github.com/fmtlib/fmt) |
| **Framework**           | Cohesive bundle of libraries, tools, and resources providing architecture | Typically compile-time linking; framework controls execution flow | Speeds up development, enforces consistent design patterns, integrated tooling, often includes templates | Less flexible, learning curve, may include unused features, larger footprint | Depends on framework; can be optimized | Usually portable within supported platforms | Can be complex with multiple dependencies | Medium; updates may require adapting code | Web apps, mobile apps, enterprise software | iOS UIKit (`.framework`), [Django](https://www.djangoproject.com/), [Angular](https://angular.io/) |
| **Plugin Library**      | Dynamically loaded module to extend a host program at runtime | Runtime loading via host API | Modular extension, runtime updates, separation of concerns, can enable optional features | Requires strict interfaces, dependency management complexity, potential security risks | Slight overhead due to dynamic load and symbol resolution | Portable if host supports plugin API | High; plugin versions must match host | Very high; can add/remove features at runtime | Multimedia, graphics software, IDEs | Photoshop `.8bf`, Audio VST `.dll` / `.so` |
| **Universal / Fat Library** | Single library containing binaries for multiple architectures | Compile-time linking per architecture | Cross-architecture compatibility, simplifies distribution, single integration point | Larger file size, build complexity, harder debugging | Similar to static/dynamic depending on linking | Highly portable across CPU architectures | Medium; must ensure correct architecture selection | Medium; rebuilding required for updates | Cross-platform SDKs, macOS/iOS libraries | macOS Universal Binary `.dylib` / `.framework` |



**Final Tip**:  
> "A great developer *stands on the shoulders of giants*—but checks for cracks first."  


### What Next


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

---

<div>
    <AdBanner />
</div>
