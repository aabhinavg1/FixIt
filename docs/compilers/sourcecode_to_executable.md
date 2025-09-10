---
title: "From Source Code to Binary"
description: "Learn how source code in C or C++ transforms into an executable binary. This guide covers preprocessing, compilation, assembly, linking, and execution, including the role of compilers, loaders, ISA, ABI, and toolchains. Part 2 of our series on libraries and compilation in system programming."
keywords:
  - source code to binary
  - c compilation process
  - c++ compilation process
  - compiler vs assembler vs linker
  - what is preprocessor in c
  - gcc compilation steps
  - clang compilation steps
  - c executable file creation
  - object file vs executable
  - role of loader in execution
  - abi application binary interface
  - isa instruction set architecture
  - machine code vs assembly
  - compilation pipeline explained
  - toolchain in programming
  - c hello world compilation example
  - compilation flow diagram
  - linker error explained
  - cpu binary execution
  - how code runs in cpu
  - executable file format
  - elf executable format
  - windows exe creation
  - linux binary executable
  - gcc command line example
  - clang command line example
  - difference between compiler and interpreter
  - gpu programming prerequisites
  - system programming basics
  - compilation process interview question
  - preprocessing in gcc
  - gcc -E flag explained
  - gcc -S flag explained
  - gcc -c flag explained
  - gcc -o flag explained
  - clang compilation stages
  - assembler in compilation
  - linker in compilation
  - toolchain components
  - build pipeline explained
  - c build system basics
  - compilation optimization
  - dead code elimination compiler
  - cpu isa examples
  - x86 instruction set
  - arm instruction set
  - risc vs cisc isa
  - loader role in os
  - dynamic linking vs static linking
  - shared library linking
  - compilation vs interpretation
  - step by step c program execution
  - c program execution process
  - source code transformation
  - how compilers optimize code
  - compiler optimization levels
  - gcc optimization flags
  - llvm compiler overview
  - clang vs gcc differences
  - compiler front end vs back end
  - how assembler works
  - binary executable format
  - compilation process in detail
  - stages of program execution
  - system software explained
  - difference between hll and machine code
  - cpu execution flow
  - hello world compilation
  - compilation toolchain explained
  - how does compiler work
  - c compiler stages explained
  - introduction to abi
  - introduction to isa
  - source code vs binary code
  - role of compiler in os
  - c program lifecycle
  - binary machine code structure
  - linking object files
  - multiple source files linking
  - program loading in os
  - elf vs exe difference
  - static library vs dynamic library
  - build pipeline visualization
  - compilation for beginners
  - program execution steps
  - os role in execution
  - c compilation practical example
  - tabbed compilation example gcc clang
  - compilation diagram mermaid
  - what happens when you run a program
  - from source code to executable
  - compilation steps in order
  - cpu binary execution process
  - high level language to machine code
  - practical c compilation tutorial

---

# From Source Code to Binary (Part 2)

In [Part 1: how computer works](https://www.compilersutra.com/docs/gpu/gpu_programming/how_computer_works/), we discussed **how hardware software interact with each other using a bridge called OS** .  
Now, in **Part 2**, we explore the **journey of your source code** as it transforms into a **binary executable** that your CPU can run.

import AdBanner from '@site/src/components/AdBanner';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ComicQA } from '../mcq/interview_question/Question_comics';

<div>
  <AdBanner />
</div>


## Introduction

A computer ultimately understands only binary code the *ones and zeros* that directly control the hardware.
>  ***While this is perfect for machines, it’s extremely difficult for humans to write or even think in pure binary.*** 

To make programming practical, we use ***High-Level Languages (HLL)*** such as `C or C++`, which are 
closer to human language and much easier to read, write, and maintain. But since the computer cannot 
directly execute ``HLL``, it must be translated into a ``Low-Level Language (LL)`` like assembly or machine 
code, which the processor can understand. 

This translation from human-friendly code to machine-executable instructions does not happen in a single step. 
Instead, the program passes through a sequence of well-defined stages **preprocessing, compilation, assembling, and linking**. 
Each stage has its own role in gradually transforming the source code written in a **High-Level Language (HLL)** into the **Low-Level Language (LL)** that a computer can actually execute as binary instructions.


>> ***The collection of programs that carry out these transformations is known as the toolchain***

:::important toolchain
 A toolchain typically includes a `preprocessor`, `compiler`, `assembler`, and `linker`, each working together like parts of a pipeline. Managing all these steps manually would be both error-prone and tedious, especially for large projects with many source files and dependencies.

:::tip build system
That’s why we rely on a **build system**. The build system automates the entire toolchain making sure 
the right steps are run in the right order, handling dependencies, and finally producing the executable 
binary. In short, the **toolchain** provides the tools, and the **build system** orchestrates them to 
consistently convert HLL code into LL instructions the computer can run.
:::

**What’s Covered:**
- Preprocessing, Compilation, Assembly, Linking  
- Execution flow and the role of the loader  
- ABI and ISA in program execution  
- Toolchain overview with practical examples  

---

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/vN6C7_5uN9s"
    title="Source Code to the Binary"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>




## Table of Contents

1. [Why High-Level Languages Exist](#why-high-level-languages-exist)  
2. [From Code to Executable](#from-code-to-executable)  
   - [Stage 1: Preprocessing](#stage-1-preprocessing)  
   - [Stage 2: Compilation](#stage-1-preprocessing)  
   - [Stage 3: Assembly](#stage-1-preprocessing)  
   - [Stage 4: Linking](#stage-1-preprocessing)  
3. [Program Execution](#program-execution)    
4. [Toolchain Insight](#toolchain-insight)  
6. [Practical Example](#practical-example)  
7. [Quizzes & Notes](#quizzes--notes)  
9. [Conclusion](#conclusion)  

---

## Why High-Level Languages Exist

High-Level Languages (HLL) such as C, C++, Python, and Java are designed to be human-friendly.
They are readable, expressive, and intentionally hide the complex details of the underlying hardware.

> ***However, a CPU cannot directly execute HLL code.
> Processors only understand binary instructions (0s and 1s), 
> which are strictly defined by their Instruction Set Architecture (ISA).***

You can think of HLL as giving instructions in plain English, while binary is like Morse code for computers. To bridge the gap, we need a series of translators that convert human-like code into machine-level instructions.

:::tip
> Think of HLL as **English instructions**, and binary as **Morse code for computers**. We need translators in between.
:::

---

## From Code to Executable

The build pipeline has **four key stages**: Preprocessing, Compilation, Assembly, and Linking.

<img
  src="/img/build_system.svg"
  alt="Digram for showng the basic block of digram and how it work"
  style={{
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
  }}
/>

<details>
<summary>Explanation of the Diagram</summary>

The flowchart shows how a C/C++ program goes from **source code** all the way to **execution on the CPU**. Each stage plays a very specific role:



###### 1. **Source Code (C/C++)**

* This is the code you write (`.c`, `.cpp` files).
* Contains functions, variables, comments, and references to header files.

---

###### 2. **Preprocessor**

* Handles all lines beginning with `#` (directives).
* Key tasks:

  * **Expands macros** (`#define MAX 10`)
  * **Includes headers** (`#include <stdio.h>`)
  * **Removes comments** (`//` or `/* ... */`)
* Output: A “cleaned” version of the source code with no macros, includes, or comments left.

**Input:** Source code + header files
**Output:** Preprocessed source

---

###### 3. **Compiler**

* Translates the preprocessed code into **assembly language** (human-readable instructions close to machine code).
* Performs:

  * **Syntax checking**
  * **Optimizations**
  * **Code generation**
* Output: Assembly code (`.s` files).

---

###### 4. **Assembler**

* Converts **assembly code** into **machine code** (binary instructions that the CPU understands).
* Produces an **object file** (`.o` or `.obj`).

**Input:** Assembly file
**Output:** Object file

---

###### 5. **Linker**

* Combines **multiple object files** and **external libraries** into one final program.
* Resolves **symbol references** (e.g., linking `printf` from the C standard library).
* Produces the **executable binary**.

**Input:** Object files + libraries
**Output:** Executable binary (`a.out`, `.exe`, ELF, etc.)


###### 6. **Executable Binary**

* The compiled program in binary format.
* Can be run directly by the operating system.

###### 7. **Loader + CPU Execution**

* When you run the program, the **OS loader** loads it into memory.
* Sets up:

  * Memory space (stack, heap, code, data sections)
  * System calls (I/O, file handling, networking, etc.)
* Then the **CPU executes the instructions**.

**Input:** Executable binary + system calls
**Output:** Running program



###### Supporting Inputs in the Diagram

* **Header Files (.h):** Provide function declarations and macros → used by the preprocessor.
* **Libraries (.lib / .a / .so / .dll):** Provide external functionality → linked at linker stage.
* **System Calls & OS Services:** Provide interaction with the OS during execution (I/O, memory, processes).



</details>

---

### Build Stages


<Tabs>  
            
  <TabItem value="preprocessing" label="📝 Stage 1: Preprocessing">  
  
  ###### Stage 1: Preprocessing
  The **preprocessor** is the first stage in the compilation pipeline. Its primary role is to prepare your source code for the compiler by handling **preprocessor directives**, such as:

* `#include` – Inserts the contents of header files directly into your source file.
* `#define` – Expands macros and symbolic constants.
* Conditional compilation directives like `#if`, `#ifdef`, `#ifndef`, and `#endif`.

Essentially, the preprocessor **produces a “translation unit”** a single expanded source file that the compiler can work with. This step ensures that all included headers, macros, and definitions are resolved before actual compilation begins.

**Example – Preprocessing a C Source File**

```rust
# Preprocess hello.c to produce the expanded source hello.i
gcc -E hello.c -o hello.i
```

**Explanation:**

* `-E` tells `gcc` to stop **after preprocessing**.
* `hello.i` is the **preprocessed output**: a complete C source file with all macros expanded and all `#include` files inlined.
* You can inspect `hello.i` to see exactly what the compiler will process in the next stage.

<details>
<summary>Practical Insight</summary>

* Use this step to debug macro expansions or missing header issues.
* If your program fails to compile due to missing definitions, examining the `.i` file can help identify the problem.
* Preprocessing is purely **text substitution and inclusion** no machine code is generated yet.

</details>

  </TabItem>  


<TabItem value="compilation" label="Stage 2: Compilation">

###### Stage 2 Compilation

The **compiler** takes the **preprocessed source code** (after macros are expanded and headers included) and converts it into **assembly code** tailored for the **target architecture** (x86, ARM, etc.).

**Key points:**

- Performs **syntax and semantic analysis** of the code.
- Applies **optimizations** if enabled (`-O1`, `-O2`, `-O3`).
- Generates **human-readable assembly instructions** (`.s` files).
- Does **not yet produce machine code**; that’s the assembler’s job.

**Command Example:**

```rust
# Convert preprocessed code (hello.i) to assembly code (hello.s)
gcc -S hello.i -o hello.s
```

**Explanation:**

* `-S` → instructs GCC to stop after the compilation stage and output **assembly code**.
* `hello.i` → input preprocessed file (generated from `gcc -E hello.c`).
* `hello.s` → resulting assembly file.

**Next Step:**

* The **assembler** (`as`) will take `hello.s` and produce an **object file** (`hello.o`) containing machine code ready for linking.

</TabItem>

<TabItem value="assembly" label="Stage 3: Assembly">

###### stage 3 Assembly
The **assembler** takes the **assembly code** generated by the compiler and converts it into **raw machine instructions** that the CPU can understand.  
The output is an **object file** (`.o` or `.obj`) which is not yet a complete executable — it still needs to be linked with other object files and libraries.

**Key Points:**

- Translates **assembly instructions** into **binary machine code**.  
- Generates **object files** that contain code and data segments.  
- Prepares the program for the **linking stage**.

**Command Example:**

```rust
# Convert assembly code (hello.s) into an object file (hello.o)
gcc -c hello.s -o hello.o
````

**Explanation:**

* `-c` → tells GCC to **compile/assemble only**, do **not link**.
* `hello.s` → input assembly file from the compiler.
* `hello.o` → resulting **object file** containing machine code.

**Next Step:**

* The **linker** will combine `hello.o` with other object files and libraries to produce the **final executable**.

</TabItem>

<TabItem value="linking" label="Stage 4: Linking">

The **linker** takes one or more **object files** (`.o`) and **libraries** and combines them into a single **executable binary**.  
It resolves references to functions and variables, ensuring that all calls point to the correct memory locations.

**Key Points:**

- Combines multiple **object files** into a single program.  
- Links with **static** (`.a`) or **dynamic libraries** (`.so`, `.dll`) as needed.  
- Resolves **symbol references** so functions and variables are correctly addressed.  
- Produces a final **executable** ready for the operating system to run.

**Command Example:**

```rust
# Link object file(s) into an executable binary
gcc hello.o -o hello
```

**Explanation:**

* `hello.o` → input object file produced by the assembler.
* `-o hello` → specifies the **output executable** name.
* Additional object files or library flags (`-lm`, `-lpthread`) can be included if needed.

**Next Step:**

* The **loader** will load this executable into memory for **CPU execution**.

</TabItem>


</Tabs>  



<div>  
  <AdBanner />  
</div>  



## Program Execution

After the linker produces the executable binary, the program is ready to run on the system. 
Execution involves several critical components of the operating system and hardware that work 
together to bring the program to life. These components handle everything from loading the program 
into memory to ensuring proper interaction with the CPU and runtime libraries.  

To understand this process in detail, we can break it down into the following stages:

<Tabs defaultValue="loader" values={[
  { label: 'Loader', value: 'loader' },
  { label: 'ABI', value: 'abi' },
  { label: 'CPU Execution', value: 'cpu' },
  { label: 'Runtime Support', value: 'runtime' },
]}>

<TabItem value="loader" label="Loader">
The **loader** is part of the operating system responsible for **loading the executable into memory**.  

**Key Tasks:**  
- Allocates **memory space** for the program, including **code**, **data**, **stack**, and **heap**.  
- Loads **initial values** and sets up **program arguments** and **environment variables**.  
- Prepares the program for **execution starting from the entry point** (usually `main()` in C/C++).  
</TabItem>

<TabItem value="abi" label="Application Binary Interface (ABI)">
The **ABI** defines the **low-level interface between the compiled program and the hardware/OS**, ensuring compatibility across systems for the same architecture.  

**Responsibilities:**  
- **Calling conventions**: how functions receive parameters and return values.  
- **Register usage**: which registers are reserved for specific purposes.  
- **System calls**: how programs request OS services (I/O, memory allocation, etc.).  
- Ensures the program runs correctly on compliant operating systems and CPUs.  
</TabItem>

<TabItem value="cpu" label="CPU Execution">
The **CPU** fetches instructions from memory and executes them according to the **fetch-decode-execute cycle**:  

1. **Fetch**: Retrieve instruction from memory.  
2. **Decode**: Interpret the instruction according to the **Instruction Set Architecture (ISA)**.  
3. **Execute**: Perform the operation (arithmetic, memory access, branch, etc.).  

Additional Notes:  
- The CPU may use **caches, pipelines, and registers** to optimize execution.  
- Control flow instructions (loops, function calls, conditional branches) are handled as defined by program logic.  
</TabItem>

<TabItem value="runtime" label="Runtime Support">
During execution, programs rely on **runtime libraries**, **dynamic loaders**, and **OS services**.  

**Examples:**  
- Memory management (`malloc`, `free`)  
- File I/O (`fopen`, `read`, `write`)  
- Thread scheduling and synchronization  

**Summary:**  
The **loader**, **ABI**, **CPU**, and runtime support work together to:  
- Turn the **static executable** into a **live program** in memory.  
- Ensure instructions execute **correctly and efficiently**.  
- Provide seamless interaction between the program, operating system, and hardware.  
</TabItem>

</Tabs>


## Toolchain Insight


Compiling a program involves much more than just running a compiler. It is a **coordinated process handled by a complete toolchain**, which ensures that high-level source code is eventually transformed into an executable that the CPU can run.

The key components of this toolchain are:

1. **Preprocessor** – Handles macros, header files, and code cleanup before compilation.
2. **Compiler** – Translates preprocessed code into assembly instructions for the target architecture.
3. **Assembler** – Converts assembly code into machine-readable object files.
4. **Linker** – Combines object files and libraries into a single executable binary.
5. **Loader** – Loads the executable into memory and prepares it for CPU execution.

Understanding the role of each component helps developers **debug, optimize, and control the build process** more effectively, and provides deeper insight into how source code becomes a running program.

## Practical Example


The following examples demonstrate how to compile and run a simple `hello.c` program using different toolchains on popular operating systems. Each tab shows the **commands required to compile and execute** the program on that platform.


<Tabs>
  <TabItem value="gcc-linux" label="GCC on Linux">

```bash
gcc hello.c -o hello
./hello
```

  </TabItem>

  <TabItem value="clang-macos" label="Clang on macOS">

```bash
clang hello.c -o hello
./hello
```

  </TabItem>

  <TabItem value="msvc-windows" label="MSVC on Windows">

```powershell
cl hello.c
hello.exe
```

  </TabItem>
</Tabs>

---

## Quizzes & Notes

<ComicQA
  question="1) What is the role of a compiler in program development?"
  answer="A compiler translates high-level programming code into assembly or machine code that a computer can execute."
  code={``}
  example="Like translating a novel from English into a different language so others can read it."
  whenToUse="Understanding how your written code becomes executable on a system."
/>

<ComicQA
  question="2) How does the assembler convert assembly language into machine code?"
  answer="The assembler takes human-readable assembly instructions and converts them into object files containing machine-readable code."
  code={``}
  example="Like converting sheet music into actual notes played by an instrument."
  whenToUse="When working with low-level assembly programming."
/>

<ComicQA
  question="3) What is the purpose of a linker in software development?"
  answer="The linker combines multiple object files and external libraries into a single executable binary."
  code={``}
  example="Like stitching together multiple chapters to create a complete book."
  whenToUse="When your program depends on multiple compiled modules or external libraries."
/>

<ComicQA
  question="4) How does the loader prepare an executable for CPU execution?"
  answer="The loader allocates memory, loads the executable and its data, sets up the stack and heap, and starts execution at the program entry point."
  code={``}
  example="Like setting up a stage with all props and actors before a play begins."
  whenToUse="Before running any compiled program on an operating system."
/>

<ComicQA
  question="5) What is the Application Binary Interface (ABI) and why is it important?"
  answer="The ABI defines the low-level interface between compiled programs and the operating system or CPU, ensuring compatibility across systems."
  code={``}
  example="Like rules for how Lego pieces from different sets can fit together."
  whenToUse="When ensuring your compiled program runs correctly on different machines or compilers."
/>

<ComicQA
  question="6) What is the difference between source code, object code, and executable?"
  answer="Source code is human-readable code written by programmers, object code is machine code generated by the assembler, and the executable is the final binary linked and ready to run."
  code={``}
  example="Like a recipe (source), prepped ingredients (object code), and the final cooked dish (executable)."
  whenToUse="Understanding the compilation and execution pipeline."
/>

<ComicQA
  question="7) How do runtime libraries support program execution?"
  answer="Runtime libraries provide prewritten functions and system interfaces for tasks like memory management, file I/O, and thread handling during program execution."
  code={``}
  example="Like a kitchen stocked with utensils and pre-prepared ingredients for cooking."
  whenToUse="When your program relies on standard library functions or system calls."
/>

<ComicQA
  question="8) What is the fetch-decode-execute cycle in a CPU?"
  answer="It is the repeated process where the CPU retrieves instructions from memory (fetch), interprets them (decode), and performs operations (execute)."
  code={``}
  example="Like reading a recipe step, understanding it, and performing the action in the kitchen."
  whenToUse="Understanding how the CPU processes instructions during program execution."
/>

<ComicQA
  question="9) How do compiler optimizations improve program performance?"
  answer="Compiler optimizations reorganize code, remove redundancies, and apply algorithmic improvements to produce faster and smaller executables."
  code={``}
  example="Like a chef rearranging cooking steps to prepare a meal more efficiently."
  whenToUse="When building performance-critical applications or embedded systems."
/>

<ComicQA
  question="10) What is the difference between static linking and dynamic linking?"
  answer="Static linking embeds all library code into the executable, while dynamic linking loads libraries at runtime from the system."
  code={``}
  example="Like copying all recipe steps into one cookbook (static) vs referencing another cookbook when needed (dynamic)."
  whenToUse="Understanding how dependencies are handled in compiled programs."
/>

## Conclusion

From HLL code to binary execution:

1. Preprocessing
2. Compilation
3. Assembly
4. Linking
5. Execution via Loader + CPU

Every program follows this journey not magic, but **engineering at its finest**.

<div>
  <AdBanner />
</div>

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

  <TabItem value="Courses" label="📣 Explore Cirriculum">
            - [GPU Programming from non CS to Expert](https://www.compilersutra.com/docs/gpu/gpu_programming/gpu_programming_toc/)
            - [C++ Tutorial](https://www.compilersutra.com/docs/c++/cpp-learning-roadmap)
  </TabItem>
  <TabItem value="social" label="📣 Social Media">

    - [🐦 Twitter - CompilerSutra](https://twitter.com/CompilerSutra)  
    - [💼 LinkedIn - Abhinav](https://www.linkedin.com/in/abhinavcompilerllvm/)  
    - [📺 YouTube - CompilerSutra](https://www.youtube.com/@compilersutra)  
    - [📘 Facebook - CompilerSutra](https://www.facebook.com/profile.php?id=61577245012547)  
    - [📝 Quora - CompilerSutra](https://compilersutra.quora.com/)  


  </TabItem>
</Tabs>
