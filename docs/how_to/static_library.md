---
title: "How To Create Static Library"
description: "A comprehensive guide for developers on creating, using, and integrating static libraries across Linux, macOS, and Windows platforms. Includes step-by-step instructions, best practices, and cross-platform considerations."
keywords:
  - static library
  - create static library
  - library in C++
  - C++ library
  - linking static library
  - GCC static library
  - MSVC static library
  - Linux static library
  - macOS static library
  - Windows static library
  - object file
  - ar command
  - cl.exe
  - MinGW library
  - CMake static library
  - library versioning
  - cross-platform library
  - library naming conventions
  - compile-time linking
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
  - static linking
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


This is **Part 2** of our library series. In [Part 1](https://www.compilersutra.com/docs/how_to/library_part1), we discussed what a library is and the types of libraries available.

In this guide, we focus on creating, using, and integrating **static libraries** for different platforms with practical developer-oriented insights.  

🎥 **Watch the Playlist**: 
<div style={{ position: 'relative', paddingBottom: '60%', height: 0, overflow: 'hidden', marginTop: '40px' }}>
  <iframe 
    src="https://www.youtube.com/embed/ypsiVLQMmNM"
    title="library tutorial"
    style={{ position: 'absolute', top: 1, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
</div>

<div>
  <AdBanner />
</div>


## Table of Contents

- [What is a Static Library?](#what-is-a-static-library)
  - [Definition](#definition)
  - [Advantages & Disadvantages](#advantages--disadvantages)
- [Creating a Static Library (Linux/macOS)](#creating-a-static-library-linuxmacos)
  - [Step 1: Write Source Files](#step-1-write-source-files)
  - [Step 2: Compile into Object Files](#step-2-compile-source-files-into-object-files)
  - [Step 3: Create the .a Archive](#step-3-create-the-static-library-archive)
  - [Step 4: Use the Library](#step-4-link-the-library-with-your-program)
- [Creating a Static Library (Windows)](#creating-a-static-library-windows)

- [FAQs](#faqs)
- [Explore More](#more-articles)

<div>
  <AdBanner />
</div>

You can watch the content in the video 

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '20px' }}>
  <iframe 
    src="https://www.youtube.com/embed/zmYZeyfPEug"
    title="static library in cpp"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
</div>


###### <h5 align="center">What is a Static Library?</h5>

##### Definition

A ***static library*** is a `packaged collection of precompiled` object files that are directly linked into an `executable at compile time`. The library’s code becomes an integral part of the final binary, providing all necessary routines within the executable itself. This approach simplifies deployment, ensures predictable performance, and enables faster execution by eliminating any dependency on external files during runtime.

:::tip `Think of it as`
 A toolbox that is permanently built into your `program—everything` you need is included upfront, so the program can run independently without fetching anything externally.
:::

<img
  src="/img/static_library.svg"
  alt="Diagram illustrating the workflow of a static library: individual code parts are compiled into a library, which is then linked with the driver program to produce the final executable."
  style={{
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
  }}
/>


##### Advantages & Disadvantages

| ✅ **Advantage**                                                               | ❌ **Corresponding Disadvantage**                                                 |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Faster execution** – No runtime linking overhead.                           | **Larger executable size** – All library code is embedded.                       |
| **No runtime dependency** – Program runs standalone.                          | **Recompilation required for updates** – Library changes need rebuilding.        |
| **Simplified distribution** – Single executable is enough.                    | **No code sharing at runtime** – Each program keeps its own copy.                |
| **Predictable behavior** – Avoids missing/incompatible library errors.        | **Limited flexibility** – Updates require recompiling dependent programs.        |
| **Better optimization** – Compiler can optimize library and program together. | **Slower build times** – Library code compiles with each program.                |
| **No version conflicts** – Eliminates DLL or dynamic library issues.          | **Wasted memory in multi-program scenarios** – No shared code.                   |
| **Self-contained binaries** – Ideal for embedded systems.                     | **Difficult patching** – Security fixes require rebuilding programs.             |
| **Deterministic behavior** – Runs the same on all systems.                    | **Not suitable for very large libraries** – Huge libraries bloat the executable. |


<details>
<summary><strong>Practical Insight</strong></summary>

Static libraries are ideal for small utilities or embedded systems where deployment simplicity and performance are critical.
</details>


###### <h5 align="center">Creating a Static Library (Linux/macOS)</h5>

As we have already discuss that-    
> A ***static library*** is a collection of precompiled object files packaged together and linked into your program at **compile time**. Follow these steps to create one:


<img
  src="/img/static_library_working.svg"
  alt="Diagram illustrating the workflow of a static library: individual code parts are compiled into a library, which is then linked with the driver program to produce the final executable."
  style={{
    width: '100%',
    maxWidth: '20000px',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
  }}
/>
<details>
<summary>Digram show the following steps</summary>

1. **Write Source Files**

   * Create modular source files containing reusable functions.
   * Example: `add.c`, `log.c`, `validate.c`.

2. **Compile Source Files into Object Files**

   * Convert each source file into an object file (`.o`).
   * Example commands:

     ```rust
     gcc -c math.c -o math.o
     gcc -c logger.c -o logger.o
     gcc -c validate.c -o validate.o
     ```

3. **Create the Static Library**

   * Bundle all object files into a single static library.
   * Example command:

     ```rust
     ar rcs libutils.a math.o log.o validate.o
     ```

4. **Write the Driver Program**

   * Create the main program that calls functions from the static library.
   * Example: `main.c` using `add()`, `log()`, and `validate()`.

5. **Link the Library with the Driver Program**

   * Compile and link the driver with the static library to create the final executable.
   * Example command:

     ```bash
     gcc main.c -L. -lutils -o program
     ```

6. **Run the Executable**

   * The program now contains all library code and runs independently.
   * No external files are required at runtime.
</details>

:::tip Lets see each step in detail
:::

###### Step 1: Write Source Files

Create reusable modules as source files. For example:


<Tabs>
<TabItem value="math_utils function" label="basic math fun">
<Tabs>
<TabItem value="math_utils.h" label="basic math header">

```cpp
// math_utils.h
// Header file for mathematical utility functions

#ifndef MATH_UTILS_H
#define MATH_UTILS_H

// Adds two integers
int add(int a, int b);

// Multiplies two integers
int multiply(int a, int b);

#endif // MATH_UTILS_H
```
| **Code**                      | **Simple Explanation**                        |
| ----------------------------- | --------------------------------------------- |
| `// math_utils.h`             | This file declares math utility functions.    |
| `#ifndef MATH_UTILS_H`        | Prevents multiple inclusion of this header.   |
| `#define MATH_UTILS_H`        | Marks the header as included.                 |
| `int add(int a, int b);`      | Declares a function to add two integers.      |
| `int multiply(int a, int b);` | Declares a function to multiply two integers. |
| `#endif`                      | Ends the include guard.                       |

</TabItem>
<TabItem value="math_utils.cpp" label="basic math source">

```cpp
// math_utils.cpp
// Collection of mathematical utility functions
#include "math_utils.h"
int add(int a, int b) {
    return a + b;
}

int multiply(int a, int b) {
    return a * b;
}
```


| **Function**                 | **Code**                                              | **Purpose**                                                   | **Example Usage**       |
| ---------------------------- | ----------------------------------------------------- | ------------------------------------------------------------- | ----------------------- |
| `int add(int a, int b)`      | `cpp\nint add(int a, int b) { return a + b; }\n`      | Takes two integers `a` and `b` and returns their **sum**.     | `add(3, 5)` → `8`       |
| `int multiply(int a, int b)` | `cpp\nint multiply(int a, int b) { return a * b; }\n` | Takes two integers `a` and `b` and returns their **product**. | `multiply(4, 6)` → `24` |

</TabItem>
</Tabs>

</TabItem>

<TabItem value="log.cpp" label="basic log fun">

<Tabs>
<TabItem value="log_1.h" label="basic log header">

```cpp
// log_1.h
// Header file for logging utility functions

#ifndef LOG_1_H
#define LOG_1_H

#include <string>

// Logs an informational message
void logInfo(const std::string &message);

// Logs a warning message
void logWarning(const std::string &message);

// Logs an error message
void logError(const std::string &message);

#endif // LOG_H

```
| **Code**                                       | **Explanation**                                                                                                                      |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `#ifndef LOG_H`                                | Checks if `LOG_H` is not defined. This prevents multiple inclusions of the header file (start of include guard).                     |
| `#define LOG_H`                                | Defines `LOG_H` to mark that this header has been included (part of include guard).                                                  |
| `#include <string>`                            | Includes the C++ `<string>` library, required because we use `std::string` in function parameters.                                   |
| `void logInfo(const std::string &message);`    | Declares a function that logs an informational message. Takes a constant reference to a string (no modification, efficient passing). |
| `void logWarning(const std::string &message);` | Declares a function that logs a warning message. Same parameter style as above.                                                      |
| `void logError(const std::string &message);`   | Declares a function that logs an error message (prints to error stream in `.cpp`).                                                   |
| `#endif // LOG_H`                              | Ends the include guard. Ensures this header is only included once per translation unit.                                              |

</TabItem>

<TabItem value="log cpp" label="📂 basic log code">

```cpp
// log.cpp
// Basic logging utility functions  
#include "log_1.h"
#include <iostream>
void logInfo(const std::string &message) {
    std::cout << "[INFO]: " << message << std::endl;
}

void logWarning(const std::string &message) {
    std::cout << "[WARNING]: " << message << std::endl;
}

void logError(const std::string &message) {
    std::cerr << "[ERROR]: " << message << std::endl;
}
```
</TabItem>
</Tabs>
</TabItem>


<TabItem value="validate cpp" label="validate the cpp">
<Tabs>
<TabItem value="Validate_1.h" label="validate math header">

```cpp
#ifndef VALIDATE_1_H
#define VALIDATE_1_H

#include <string>

// Checks if a string is numeric (only digits)
bool isNumeric(const std::string& str);

// Checks if a string is alphabetic (only letters)
bool isAlphabetic(const std::string& str);

// Checks if a number is within a given range [min, max]
bool isInRange(int value, int min, int max);

#endif // VALIDATE_H
```
</TabItem>

<TabItem value="Validate.cpp" label="validate source code">


```cpp
// validate.cpp
// Collection of validation utility functions
// Check if a string is numeric
#include "validate_1.h"
bool isNumeric(const std::string& str) {
    if (str.empty()) return false;
    for (char c : str) {
        if (!std::isdigit(static_cast<unsigned char>(c))) {
            return false;
        }
    }
    return true;
}

// Check if a string is alphabetic
bool isAlphabetic(const std::string& str) {
    if (str.empty()) return false;
    for (char c : str) {
        if (!std::isalpha(static_cast<unsigned char>(c))) {
            return false;
        }
    }
    return true;
}

// Check if a number is within a given range [min, max]
bool isInRange(int value, int min, int max) {
    return value >= min && value <= max;
}
```
isNumeric → Valid if the string has only digits.

isAlphabetic → Valid if the string has only letters.

isInRange → Valid if the integer is between min and max (inclusive).

</TabItem>
</Tabs>
</TabItem>
</Tabs>

---
###### <h5 align="center">Step 2: Compile Source Files into Object Files</h5>



📂 ***Folder Structure***

```rust
project_root/
├── log_1.cpp
├── log_1.h
├── math_utils.cpp
├── math_utils.h
├── validate_1.cpp
└── validate_1.h
```


 🔨 **Compile each source file into object files**

```rust
g++ -c math_utils.cpp -o math_utils.o
g++ -c log_1.cpp -o log_1.o
g++ -c validate_1.cpp -o validate_1.o
```


📖 ***Explanation of Commands***

| Command                                 | What it does                                                 |
| --------------------------------------- | ------------------------------------------------------------ |
| `g++ -c math_utils.cpp -o math_utils.o` | Compiles `math_utils.cpp` into `math_utils.o` (object file). |
| `g++ -c log_1.cpp -o log_1.o`           | Compiles `log_1.cpp` into `log_1.o`.                         |
| `g++ -c validate_1.cpp -o validate_1.o` | Compiles `validate_1.cpp` into `validate_1.o`.               |

---

📝 **Key Points**

* `-c` → Compile only (don’t link).
* `.o` (object files) = compiled machine code for each source file.
* These object files are **building blocks** for:

  * a **static library** (`.a`)
  * or directly linked into an **executable**.


###### <h5 align="center">Step 3: Create the Static Library Archive</h5>



```rust
ar rcs libmylib.a math_utils.o log_1.o validate_1.o
```

---

📖 **Explanation**

| Part                                | Meaning                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------ |
| `ar`                                | Archiver program (used to create `.a` static libraries).                             |
| `rcs`                               | Flags: `r` = replace/add, `c` = create if doesn’t exist, `s` = build an index.       |
| `libmylib.a`                        | The name of the static library (by convention starts with `lib` and ends with `.a`). |
| `math_utils.o log_1.o validate_1.o` | The object files to include in the library.                                          |

:::tip  List contents of library

```rust
ar -t libmylib.a
```

* `-t` → table of contents (lists object files).

Output:

```rust
math_utils.o
log_1.o
validate_1.o
```
:::


###### <h5 align="center">Step 4: Link the Library with Your Program</h5>

:::important Use the static library when compiling your main program:
:::
Your **test.cpp** program is designed to test **three separate modules/files**:

* `log_1.h / log_1.cpp` → for logging (`logInfo`, `logError`)
* `validate_1.h / validate_1.cpp` → for validation (`isNumeric`, `isInRange`, `isAlphabetic`)
* `main.cpp` → the driver program (glues everything together)

 🔎 ***Program Flow (simple)***

1. **Start** → Log “Program started”.
2. **Ask number** → User enters a number.

   * If it’s numeric → log success, convert to int.

     * If in range 1–100 → log success.
     * Else → log error “Out of range”.
   * If not numeric → log error “Not a number”.
3. **Ask word** → User enters a word.

   * If only alphabets → log success.
   * Else → log error “Not alphabetic”.
4. **End** → Log “Program finished”.


 **So in short**:

* First it checks the **number validation** (`isNumeric`, `isInRange`).
* Then it checks the **word validation** (`isAlphabetic`).
* Logging module is used throughout to track success/error messages.

```cpp
// test.cpp
#include "log_1.h"
#include "validate_1.h"
#include "math_utils.h"

int main() {
    logInfo("=== Running Automated Tests ===");

    // 1st: Logging test
    logInfo("This is an info message");
    logWarning("This is a warning message");
    logError("This is an error message");

    // 2nd: Validation tests
    logInfo("Testing validation...");
    std::string numeric = "12345";
    std::string notNumeric = "12a45";
    std::string alpha = "HelloWorld";
    std::string notAlpha = "Hello123";

    logInfo(numeric + (isNumeric(numeric) ? " is numeric ✅" : " is not numeric ❌"));
    logInfo(notNumeric + (isNumeric(notNumeric) ? " is numeric ❌" : " is not numeric ✅"));
    logInfo(alpha + (isAlphabetic(alpha) ? " is alphabetic ✅" : " is not alphabetic ❌"));
    logInfo(notAlpha + (isAlphabetic(notAlpha) ? " is alphabetic ❌" : " is not alphabetic ✅"));

    // 3rd: Math tests
    logInfo("Testing math utils...");
    int a = 7, b = 5;
    logInfo("add(7,5) = " + std::to_string(add(a, b)));
    logInfo("multiply(7,5) = " + std::to_string(multiply(a, b)));

    int val = 50;
    logInfo("isInRange(50,1,100) = " + std::string(isInRange(val,1,100) ? "true ✅" : "false ❌"));

    val = 150;
    logInfo("isInRange(150,1,100) = " + std::string(isInRange(val,1,100) ? "true ❌" : "false ✅"));

    logInfo("=== Tests Finished ===");
    return 0;
}

```

```rust 
g++ test.cpp -L. -lmylib -o test
```

**Explanation:**

* `-L.` tells the compiler to look in the current directory for libraries.
* `-lmylib` links `libmylib.a` (`lib` prefix and `.a` suffix are implied).
* The final executable `test` now contains all code from the library.

```rust
$./test
[2025-08-17 15:32:10] [INFO]: === Running Automated Tests ===
[2025-08-17 15:32:10] [INFO]: This is an info message
[2025-08-17 15:32:10] [WARNING]: This is a warning message
[2025-08-17 15:32:10] [ERROR]: This is an error message
[2025-08-17 15:32:10] [INFO]: Testing validation...
[2025-08-17 15:32:10] [INFO]: 12345 is numeric ✅
[2025-08-17 15:32:10] [INFO]: 12a45 is not numeric ✅
[2025-08-17 15:32:10] [INFO]: HelloWorld is alphabetic ✅
[2025-08-17 15:32:10] [INFO]: Hello123 is not alphabetic ✅
[2025-08-17 15:32:10] [INFO]: Testing math utils...
[2025-08-17 15:32:10] [INFO]: add(7,5) = 12
[2025-08-17 15:32:10] [INFO]: multiply(7,5) = 35
[2025-08-17 15:32:10] [INFO]: isInRange(50,1,100) = true ✅
[2025-08-17 15:32:10] [INFO]: isInRange(150,1,100) = false ✅
[2025-08-17 15:32:10] [INFO]: === Tests Finished ===

```
---

#### Best Practices

* Use **clear, descriptive names** for library and object files.
* Maintain **separate headers (`.h`)** for function declarations.
* Keep libraries **modular** to maximize reuse across projects.
* Always **recompile object files** when source changes.

<div>
  <AdBanner />
</div>

<details>
<summary>Alternative Approach</summary>

You can also use `ranlib` after `ar` to index the archive:

```bash
ranlib libmath.a
```

</details>

---
###### <h5 align="center">Creating a Static Library (Windows)</h5>

***Using cl.exe (MSVC)***

```rust
cl /c math_utils.cpp
lib /out:math.lib math_utils.obj
cl main.cpp math.lib
```

***Using MinGW/GCC***

```rust
g++ -c math_utils.cpp -o math_utils.o
ar rcs libmath.a math_utils.o
g++ main.cpp -L. -lmath -o main.exe
```

import { ComicQA } from '../mcq/interview_question/Question_comics' ;


## FAQs

<ComicQA
  question="1) What is a static library in C++?"
  answer="A static library is a collection of object files (.o or .obj) bundled into a single archive (.a or .lib) that gets linked into the final executable at compile time."
  code={`// Create static library on Linux
ar rcs libmylib.a file1.o file2.o

// Link with g++
g++ main.cpp -L. -lmylib -o app`}
  example="// A static library is like a box of compiled code reused in multiple projects."
  whenToUse="When you want faster execution and don’t need dynamic loading at runtime."
/>

<ComicQA
  question="2) How does a static library differ from a dynamic library?"
  answer="A static library is copied into the executable at compile time, while a dynamic library is loaded at runtime."
  code={`// Static linking (Linux)
g++ main.cpp libmylib.a -o app

// Dynamic linking
g++ main.cpp -lmylib -o app`}
  example="// Static → Bigger executables, no runtime dependency. Dynamic → Smaller executables, requires .so/.dll at runtime."
  whenToUse="Use static when deployment simplicity is key, dynamic when saving memory or sharing code is important."
/>

<ComicQA
  question="3) What are the advantages of using static libraries?"
  answer="They improve performance (no runtime linking), simplify deployment, and ensure no external dependency is required."
  code={`// One executable contains everything
./app    // Works without external .so/.dll`}
  example="// Useful in embedded systems or single-binary distributions."
  whenToUse="When you want self-contained binaries with minimal runtime dependencies."
/>

<ComicQA
  question="4) What are the disadvantages of static libraries?"
  answer="They increase executable size, require recompilation for updates, and waste memory if multiple apps use the same library."
  code={`// app1 (5MB) + app2 (5MB) → 10MB
// Both contain duplicate library code`}
  example="// Bad for shared servers where memory usage matters."
  whenToUse="Avoid in large projects where libraries frequently change."
/>

<ComicQA
  question="5) How do you create a static library in Linux?"
  answer="By compiling source files to object files, then using the ar command to archive them."
  code={`g++ -c log.cpp validate.cpp
ar rcs libutils.a log.o validate.o
g++ main.cpp -L. -lutils -o app`}
  example="// 'ar rcs' means replace, create, index symbols."
  whenToUse="Whenever you want to reuse code across multiple projects."
/>

<ComicQA
  question="6) How do you create a static library in Windows (MSVC)?"
  answer="Using the lib tool to bundle object files into a .lib file."
  code={`cl /c log.cpp validate.cpp
lib /out:utils.lib log.obj validate.obj
cl main.cpp utils.lib`}
  example="// Similar to Linux but uses .lib instead of .a"
  whenToUse="On Windows environments using Visual Studio/MSVC."
/>

<ComicQA
  question="7) Can a static library contain other libraries?"
  answer="Not directly. But you can bundle multiple object files (compiled from different source files) into one static library."
  code={`ar rcs libcombined.a file1.o file2.o file3.o`}
  example="// Acts like one package of multiple .o files."
  whenToUse="When you want one easy-to-distribute library instead of many small ones."
/>

<ComicQA
  question="8) How does the linker resolve symbols from static libraries?"
  answer="The linker only pulls in the object files from the library that define symbols actually used by the program."
  code={`// If main.cpp uses only funcA, 
// only funcA.o gets linked from libmylib.a`}
  example="// Saves some space by not pulling unused functions."
  whenToUse="Whenever you want selective linking from a library."
/>

<ComicQA
  question="9) How do you inspect the contents of a static library?"
  answer="Use nm or ar -t on Linux, or dumpbin on Windows."
  code={`ar -t libmylib.a
nm libmylib.a
dumpbin /symbols utils.lib`}
  example="// Lists which object files and symbols exist inside."
  whenToUse="When debugging linking errors or checking library contents."
/>

<ComicQA
  question="10) Can static libraries be linked with dynamic libraries?"
  answer="Yes, an application can use both. A static library provides some code, while other parts may come from dynamic libraries."
  code={`g++ main.cpp libstatic.a -ldynamic -o app`}
  example="// Common in large projects mixing performance-critical static code with shared system libs."
  whenToUse="When you want to balance portability with flexibility."
/>

<div>
  <AdBanner />
</div>


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


<div>
  <AdBanner />
</div>
