---
title: "How To Create Dynamic Libraries"
description: "A comprehensive guide for developers on creating, using, and integrating dynamic libraries (shared objects) across Linux, macOS, and Windows platforms. Includes step-by-step instructions, best practices, and cross-platform considerations."
keywords:
  - dynamic library
  - shared library
  - create dynamic library
  - .so file
  - .dll file
  - library in C++
  - C++ library
  - linking dynamic library
  - GCC shared library
  - MSVC DLL
  - Linux shared library
  - macOS dylib
  - Windows DLL
  - runtime linking
  - CMake shared library
  - library versioning
  - cross-platform library
  - LD_LIBRARY_PATH
  - dlopen
  - dlsym
  - dynamic loading
  - developer guide
  - software engineering
  - software development
  - code reuse
  - modular programming
  - reusable code
  - library integration
  - build process
  - compilation
  - programming tutorial
  - C++ tutorial
  - Linux programming
  - macOS development
  - Windows development
  - coding best practices
  - software architecture
  - software library
  - library tutorial
  - library example
  - library creation
  - dynamic linking
  - code optimization
  - object-oriented programming
  - professional guide
  - programming techniques
  - code maintenance
  - library management
  - build tools
  - software build
  - code modularity
  - developer resource
  - compile process
  - CMake integration
  - linker options
  - library usage
  - library FAQ
---

import AdBanner from '@site/src/components/AdBanner';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This is Part 3 of our library series. In [Part 1](https://www.compilersutra.com/docs/how_to/library_part1), we discussed library fundamentals, and in [Part 2](https://www.compilersutra.com/docs/how_to/static_library), we covered static libraries.

<strong>You can check the video of both for what is library</strong>

<div style={{ 
  display: 'flex',
  flexDirection: 'row',
  gap: '40px',
  marginTop: '40px'
}}>
  {/* Left Video */}
  <div style={{ flex: 1 }}>
    <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>
      Static Library in C++
    </h3>
    <div style={{ 
      position: 'relative',
      paddingBottom: '56.25%', // maintain 16:9 aspect ratio
      height: 0,
      overflow: 'hidden'
    }}>
      <iframe 
        src="https://www.youtube.com/embed/zmYZeyfPEug"
        title="static library in cpp"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>

  {/* Right Video */}
  <div style={{ flex: 1 }}>
    <h3 style={{ textAlign: 'center', marginBottom: '5px' }}>
      Library Tutorial
    </h3>
    <div style={{ 
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0,
      overflow: 'hidden'
    }}>
      <iframe 
        src="https://www.youtube.com/embed/ypsiVLQMmNM"
        title="library tutorial"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
</div>


<div>
  <AdBanner />
</div>

## Table of Contents

- [What is a Dynamic Library?](#what-is-a-dynamic-library)
  - [Definition](#definition)
  - [Advantages & Disadvantages](#advantages--disadvantages)
- [Creating a Dynamic Library (Linux/macOS)](#creating-a-dynamic-library-linuxmacos)
  - [Step 1: Write Position-Independent Code](#step-1-write-position-independent-code)
  - [Step 2: Compile as Shared Object](#step-2-compile-as-shared-object)
  - [Step 3: Create the .so/.dylib File](#step-3-create-the-shared-library)
  - [Step 4: Use the Library](#step-4-use-the-library)
- [Creating a Dynamic Library (Windows)](#creating-a-dynamic-library-windows)
- [FAQs](#faqs)
- [Explore More](#more-articles)

<div>
  <AdBanner />
</div>

###### <h5 align="center">What is a Dynamic Library?</h5>

##### Definition

A ***dynamic library*** (also called shared library) is a `collection of compiled code` that is `loaded at runtime` rather than being embedded into the executable. Multiple programs can share the same library in memory, and updates to the library don't require recompiling dependent applications.

:::tip `Think of it as`
A toolbox that stays separate from your program - tools are fetched when needed, allowing multiple programs to use the same tools simultaneously.
:::

<img
  src="/img/dynamic_library.svg"
  alt="Diagram showing programs linking to a shared library at runtime"
  style={{
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
  }}
/>

##### Advantages & Disadvantages

| ✅ **Advantage** | ❌ **Corresponding Disadvantage** |
|----------------|-------------------------------|
| **Smaller executables** - Only references to the library are included | **Runtime dependency** - Requires the library to be present on the target system |
| **Memory efficient** - Shared code loaded once in memory | **Versioning issues** - "DLL hell" with incompatible versions |
| **Easy updates** - Replace library without recompiling programs | **Slower startup** - Runtime linking overhead |
| **Plugin architecture** - Can load/unload libraries dynamically | **Complex deployment** - Must distribute library files |
| **Reduced disk space** - Single copy serves multiple programs | **Security risks** - Malicious library replacement possible |

<details>
<summary><strong>Practical Insight</strong></summary>

*Dynamic libraries are ideal for system libraries, large codebases, and when memory efficiency across multiple processes is important.*

</details>

<div>
  <AdBanner />
</div>


###### <h5 align="center">Creating a Dynamic Library (Linux/macOS)</h5>

As we already discussed what a dynamic library is, the next step is to understand how to create one. On Linux and macOS, the process is straightforward and can be broken down into these steps:

1. **Write the source code** that contains the functions you want to reuse.  
2. **Compile the source into position-independent object files** using the `-fPIC` flag.  
3. **Generate the dynamic library** (`.so` on Linux, `.dylib` on macOS) with the `-shared` option.  
4. **Write a main program** that calls the functions from the library.  
5. **Compile the program and link it** with the dynamic library.  
6. **Run the program**, making sure the library path is set.

:::tip (via `LD_LIBRARY_PATH` on Linux or `DYLD_LIBRARY_PATH` on macOS).  
:::

<img
  src="/img/dynamic_library_1.svg"
  alt="Workflow: source files → position-independent object files → shared library → runtime linking"
  style={{
    width: '100%',
    maxWidth: '800px',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
  }}
/>

<div>
  <AdBanner />
</div>


:::caution Let's Start doing it.
:::

###### Step 1: Write Position-Independent Code

<Tabs>
<TabItem value="Header" label="Header of Math">

```cpp
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

// Export the function from a shared library
__attribute__((visibility("default")))
int add(int a, int b);

#endif
```

**Explanation:**

* `#ifndef MATH_UTILS_H` / `#define MATH_UTILS_H` / `#endif`
  These are **include guards**. They prevent the file from being included multiple times in the same translation unit, which avoids *“redefinition”* errors.

* `__attribute__((visibility("default")))`

  * This is a GCC/Clang extension used in shared libraries.
  * It marks the function `add` as **exported** (visible outside the library).
  * Without it, if you compile with `-fvisibility=hidden`, the function wouldn’t be accessible to programs linking against the `.so` (dynamic library).

* `int add(int a, int b);`
  This is the **declaration** of the function. It tells the compiler that a function named `add` exists, takes two integers, and returns an integer.
  The actual code (implementation) is elsewhere, in the `.cpp` file.

</TabItem>
<TabItem value="math_utils.cpp" label="source code">

```cpp
#include "math_utils.h"

int add(int a, int b) {
    return a + b;
}
```

**Explanation:**

* `#include "math_utils.h"`
  Brings in the function declaration from the header file so the compiler knows this definition matches the declaration.
  This ensures consistency between declaration and implementation.

* `int add(int a, int b) { return a + b; }`
  This is the **definition (implementation)** of the function.

  * It takes two integers, `a` and `b`.
  * Returns their sum.

This definition will be compiled into the object code and, when building a dynamic library, will be exported as a symbol (because of the 

</TabItem>
</Tabs>

<div>
  <AdBanner />
</div>


###### Step 2: Compile as Shared Object

```rust
g++ -fPIC -c math_utils.cpp -o math_utils.o
```

| Feature                 | Static Library (.a / .lib)                                                                 | Shared Library (.so / .dll)                                                                 |
|--------------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| **Definition**           | A collection of compiled functions bundled into a single file, linked into the program.    | A collection of compiled functions loaded into memory at runtime and shared among programs. |
| **Linking**              | Linked at **compile time**. Code is copied directly into the executable.                   | Linked at **runtime** using dynamic linking.                                                |
| **File Size**            | Increases executable size because library code is embedded.                                | Smaller executables since the library is external.                                          |
| **Memory Usage**         | Each program has its own copy of the library in memory.                                    | Multiple programs share the same library in memory.                                         |
| **Performance**          | Slightly faster execution (no runtime linking).                                            | Small overhead due to dynamic linking at runtime.                                           |
| **Updates**              | Requires **rebuilding the program** if the library changes.                                | Can update library independently, without recompiling the program.                          |
| **Portability**          | More portable, since everything is in one executable.                                      | Less portable, must ship `.so`/`.dll` files with the program.                               |
| **Use Case**             | Useful for small projects, embedded systems, or when portability is key.                   | Useful for large projects, systems with many apps using common libraries.                   |

:::caution `What happens overall`

* The compiler reads `math_utils.cpp`.
* Produces **position-independent machine code**.
* Stores it inside `math_utils.o`.
* This `.o` file is then ready to be linked into a **shared library (`.so`)** or a **static library (`.a`)**.
:::

<div>
  <AdBanner />
</div>


###### Step 3: Create the Shared Library


```rust
g++ -shared -o libmath.so math_utils.o
```

* **`g++`** → GNU C++ compiler.
* **`-shared`** → Tells the compiler to produce a **shared library** (also called a dynamic library) instead of an executable. On Linux, shared libraries usually have the extension `.so` (shared object).
* **`-o libmath.so`** → Names the output file `libmath.so`.
* **`math_utils.o`** → The object file you want to include in the library. This is typically created first with:


***macOS alternative***

```rust
g++ -dynamiclib -o libmath.dylib math_utils.o
```

* **`-dynamiclib`** → macOS equivalent of `-shared`.
* **`libmath.dylib`** → Output file in macOS style (`.dylib` instead of `.so`).
* **`math_utils.o`** → Same object file.

On macOS, dynamic libraries conventionally use `.dylib`.


:::caution ***Summary***

* On **Linux**, you make `libmath.so`.
* On **macOS**, you make `libmath.dylib`.
* Both are shared libraries that can be loaded at runtime or linked to executables.
:::


<div>
  <AdBanner />
</div>


###### Step 4: Use the Library

The folder structure would be
```rust
├── main.cpp
├── math_utils.cpp
├── math_utils.h
```
***Why we want to test?***

When you create a **dynamic library** in C++, it’s not enough to just build it. You need to test it to ensure:

* The library was built correctly (`.so` on Linux `.dylib` on macOS, `.dll` on Windows).
* Functions inside the library actually work as expected.
* It can be linked with other programs without errors.

Testing basically means **writing a small program (client code)** that uses the functions from the library. If the program compiles, links, and runs correctly, then the dynamic library is good.


:::tip The code for testing library
:::

```cpp
#include <iostream>
#include "math_utils.h"   // Include the header to use add()

int main() {
    std::cout << "[LOG] Program started." << std::endl;

    int x = 12, y = 8;

    std::cout << "[LOG] Calling add(" << x << ", " << y << ")..." << std::endl;
    int result = add(x, y);

    std::cout << "Result of addition: " << result << std::endl;

    std::cout << "[LOG] Program finished." << std::endl;
    return 0;
}
```
```rust
# Compile main program
g++ main.cpp -L. -lmath -o program
```

```rust
# Run (may need to set library path)
export LD_LIBRARY_PATH=.:$LD_LIBRARY_PATH
./program
```

###### <h5 align="center">Creating a Dynamic Library (Windows)</h5>

**Using MSVC (DLL):**

```bat
cl /LD math_utils.cpp
# Creates math_utils.dll and math_utils.lib

# Compile main program
cl main.cpp math_utils.lib
```

**Using MinGW:**

```rust
//same as linux will recommend use wsl in windows
g++ -shared -o math_utils.dll math_utils.o
```



## FAQs

import { ComicQA } from '../mcq/interview_question/Question_comics';

<ComicQA
  question="1) What is a dynamic library?"
  answer="A collection of compiled code loaded at runtime, shared between multiple programs."
  code={`// Linux
g++ -shared -o libmath.so math.o`}
  example="Like a shared toolbox used by different workers when needed."
  whenToUse="When memory efficiency or easy updates are important."
/>

<ComicQA
  question="2) How does dynamic linking work?"
  answer="The linker records library references but actual linking happens at runtime."
  code={`// Compile
g++ main.cpp -lmath -o app

// Runtime
./app  # Loads libmath.so`}
  example="Like making a shopping list vs actually buying items."
  whenToUse="Default approach for most system libraries."
/>

<ComicQA
  question="3) Difference between static and dynamic library?"
  answer="Static libraries are copied into executables, dynamic ones are linked at runtime."
  code={`// Static link
g++ main.cpp libmath.a -o app`}
  example="Static is like owning your own car, dynamic is like using Uber when needed."
  whenToUse="Dynamic for smaller apps and easier updates, static when portability matters."
/>

<ComicQA
  question="4) What is PIC (Position Independent Code)?"
  answer="Machine code that can run at any memory address."
  code={`g++ -fPIC -c math_utils.cpp -o math_utils.o`}
  example="Like furniture designed to fit in any room layout."
  whenToUse="When creating shared libraries."
/>

<ComicQA
  question="5) How do you create a dynamic library on macOS?"
  answer="Use -dynamiclib instead of -shared."
  code={`g++ -dynamiclib -o libmath.dylib math_utils.o`}
  example="Same recipe, but slightly different cooking pan."
  whenToUse="When targeting macOS systems."
/>

<ComicQA
  question="6) What is LD_LIBRARY_PATH?"
  answer="An environment variable that tells the system where to look for shared libraries."
  code={`export LD_LIBRARY_PATH=.:$LD_LIBRARY_PATH`}
  example="Like giving GPS directions to your house before friends visit."
  whenToUse="When your library is not in standard system paths."
/>

<ComicQA
  question="7) What is dlopen and dlsym?"
  answer="Functions in C/C++ to load shared libraries and fetch symbols at runtime."
  code={`#include <dlfcn.h>
void* handle = dlopen("libmath.so", RTLD_LAZY);`}
  example="Like opening a box and looking up items by their labels."
  whenToUse="For plugins or modular applications."
/>

<ComicQA
  question="8) Why use dynamic libraries?"
  answer="They save memory, allow smaller executables, and make updates easier."
  code={`apt-get install libssl-dev  # System-wide dynamic lib`}
  example="Like one fridge shared by a whole family."
  whenToUse="For commonly used or frequently updated code."
/>

<ComicQA
  question="9) What happens if a dynamic library is missing?"
  answer="The program won’t run and throws a loader error."
  code={`error while loading shared libraries: libmath.so: cannot open shared object file`}
  example="Like trying to call a friend whose phone is switched off."
  whenToUse="Ensure deployment bundles required libraries or sets proper paths."
/>

<ComicQA
  question="10) Can dynamic libraries be versioned?"
  answer="Yes, libraries often have version numbers to ensure compatibility."
  code={`libmath.so -> libmath.so.1.2.3`}
  example="Like multiple editions of the same textbook."
  whenToUse="When maintaining backward compatibility across versions."
/>




## More Articles

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
> ***Will cover more in upcoming artilce***

<div>
  <AdBanner />
</div>
