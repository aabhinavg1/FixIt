---

title: "LLVM Tools – Essential Utilities for IR, Analysis, and Optimization"
description: "Explore the key LLVM tools used for IR manipulation, symbol inspection, optimization, and static analysis. Learn how to effectively use tools like llvm-as, llvm-dis, llvm-nm, llvm-link, opt, and more."
keywords:
- LLVM Tools Overview
- LLVM Command Line Utilities
- llvm-as and llvm-dis Usage
- llvm-nm and Symbol Inspection
- Bitcode Analysis with llvm-bcanalyzer
- Object Dumping using llvm-objdump
- Intermediate Representation with llvm-ir
- Profiling with llvm-profdata and llvm-cov
- Linking with llvm-link
- Optimizing with opt Tool
- Debugging LLVM IR
- Visualizing Control Flow Graphs
- Using llvm-dwarfdump
- LLVM Toolchain Integration
- LLVM Tool Development
- Building Custom LLVM Tools
- Understanding LLVM Pass Manager via Tools
- IR Validation with llvm-verifier
- Bytecode Manipulation Tools
- Tooling for Static Analysis in LLVM
---

import AdBanner from '@site/src/components/AdBanner';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div>
    <AdBanner />
</div>

# LLVM Tools Overview


LLVM provides a powerful collection of command-line tools for working with compiler infrastructure. This guide covers the most essential tools, their purposes, and when to use them.

:::important
 LLVM tools generally work with intermediate representations (IR) and various compiler artifacts. Start with small examples before working on complex projects.

## Table of Contents

* [Introduction](#introduction)
* [Why LLVM Tools Matter](#why-llvm-tools-matter)
* [Commonly Used LLVM Tools](#commonly-used-llvm-tools)
* [When to Use Which Tool](#when-to-use-which-tool)
* [Alive2 Compiler Explorer](#alive2-compiler-explorer)
* [References](#references)


<div>
    <AdBanner />
</div>

## Introduction

LLVM is not just a compiler backend. It's a modular compiler infrastructure designed to be reused for a variety of programming language and platform targets. LLVM includes a set of command-line tools that allow you to perform tasks like compiling, analyzing, optimizing, debugging, and inspecting programs at different stages of compilation.

These tools are essential for anyone working with LLVM IR, compiler development, performance optimization, or low-level systems programming.

<div>
    <AdBanner />
</div>


## Why LLVM Tools Matter

LLVM tools provide a way to:

* Translate source code to LLVM Intermediate Representation (IR)
* Apply analysis and optimization passes on IR
* Lower IR to target-specific assembly or object code
* Analyze and debug intermediate or binary outputs
* Perform static analysis and profiling
* Measure instruction throughput and latency on specific CPU models

Understanding these tools allows you to better visualize and control how your source code is transformed.

<div>
    <AdBanner />
</div>

## Commonly Used LLVM Tools

<Tabs>

<TabItem value="frontend" label="Front-End Tools">

| Tool         | Purpose                                  | Example Command                         |
| ------------ | ---------------------------------------- | --------------------------------------- |
| `clang`      | Compile C/C++/Objective-C to LLVM IR     | `clang -S -emit-llvm file.c -o file.ll` |
| `clang-tidy` | Static analysis and linting for C++ code | `clang-tidy file.cpp`                   |

</TabItem>

<TabItem value="middleend" label="Middle-End (IR Passes)">

| Tool           | Purpose                                           | Example Command                            |
| -------------- | ------------------------------------------------- | ------------------------------------------ |
| `opt`          | Run transformation and analysis passes on LLVM IR | `opt -mem2reg file.ll -o out.ll`           |
| `llvm-link`    | Link multiple LLVM bitcode files                  | `llvm-link a.bc b.bc -o linked.bc`         |
| `llvm-extract` | Extract functions or global values from IR        | `llvm-extract -func=foo file.ll -o foo.ll` |

</TabItem>

<TabItem value="backend" label="Back-End Tools">

| Tool           | Purpose                                         | Example Command                |
| -------------- | ----------------------------------------------- | ------------------------------ |
| `llc`          | Convert LLVM IR to target-specific assembly     | `llc file.ll -o file.s`        |
| `llvm-as`      | Assemble LLVM IR to LLVM bitcode                | `llvm-as file.ll -o file.bc`   |
| `llvm-dis`     | Disassemble LLVM bitcode to human-readable IR   | `llvm-dis file.bc -o file.ll`  |
| `llvm-mca`     | Microarchitecture performance analysis          | `llvm-mca -mcpu=znver2 file.s` |
| `llvm-nm`      | List symbols from object files or bitcode       | `llvm-nm file.bc`              |
| `llvm-objdump` | Disassemble object files with LLVM disassembler | `llvm-objdump -d file.o`       |
| `llvm-size`    | Display section sizes in object files           | `llvm-size file.o`             |
| `llvm-ar`      | Manage archive (.a) files                       | `llvm-ar rcs libtest.a test.o` |

</TabItem>

<TabItem value="irdebug" label="IR Reduction & Bug Isolation">

| Tool          | Purpose                                        | Example Command                         |
| ------------- | ---------------------------------------------- | --------------------------------------- |
| `llvm-reduce` | Reduce IR files that reproduce compiler issues | `llvm-reduce --test script.sh input.ll` |
| `bugpoint`    | Reduce and isolate LLVM miscompilation bugs    | `bugpoint input.bc`                     |

</TabItem>

<TabItem value="developer" label="Developer & Debugging Tools">

| Tool              | Purpose                                           | Example Command                               |
| ----------------- | ------------------------------------------------- | --------------------------------------------- |
| `llvm-profdata`   | Merge and process profile data                    | `llvm-profdata merge default.profraw -o prof` |
| `llvm-cov`        | Visualize code coverage                           | `llvm-cov show ./a.out -instr-profile=prof`   |
| `llvm-symbolizer` | Convert addresses into file/line using debug info | `llvm-symbolizer < address.txt`               |
| `llvm-dwarfdump`  | Dump DWARF debug information                      | `llvm-dwarfdump file.o`                       |
| `llvm-readobj`    | Display detailed info about object files          | `llvm-readobj -h file.o`                      |
| `llvm-readelf`    | ELF format introspection                          | `llvm-readelf -h file.o`                      |
| `FileCheck`       | Pattern-based file checker for testing IR         | `FileCheck < output.txt`                      |
| `llvm-lit`        | LLVM Integrated Tester – runs test suites         | `llvm-lit tests/`                             |
| `llvm-config`     | Print LLVM build/configuration options            | `llvm-config --cxxflags --ldflags`            |

</TabItem>

</Tabs>

## [When to Use Which Tool](#when-to-use-which-tool)

<details>
<summary>Frontend Tools</summary>

**`clang`**

* **Purpose**: Compile C, C++, Objective-C to LLVM IR.
* **Example**: `clang -S -emit-llvm input.c -o output.ll`

**`clang++`**

* **Purpose**: Same as `clang`, tailored for C++ compilation.

**`clang-tidy`**

* **Purpose**: Static analysis and style enforcement for C++ code.
* **Example**: `clang-tidy myfile.cpp`

</details>

<details>
<summary>Middle-End (IR) Tools</summary>

**`opt`**

* **Purpose**: Run analysis and transformation passes on LLVM IR.
* **Example**: `opt -mem2reg input.ll -o output.ll`

**`llvm-link`**

* **Purpose**: Combine multiple LLVM bitcode (`.bc`) files into one.
* **Example**: `llvm-link a.bc b.bc -o combined.bc`

**`llvm-extract`**

* **Purpose**: Extract specific functions or globals from a bitcode file.
* **Example**: `llvm-extract -func=foo input.bc -o foo.bc`

**`llvm-reduce`**

* **Purpose**: Reduce a test case that causes bugs in LLVM.
* **Example**: `llvm-reduce bug.ll --test script.sh`

**`bugpoint`**

* **Purpose**: Automate reduction and isolation of miscompilation bugs.
* **Example**: `bugpoint bug.bc`

</details>

<details>
<summary>Backend Tools</summary>

**`llc`**

* **Purpose**: Compile LLVM IR to target assembly.
* **Example**: `llc input.ll -o output.s`

**`llvm-mca`**

* **Purpose**: Analyze machine code performance on target CPUs.
* **Example**: `llvm-mca -march=x86-64 input.s`

</details>

<details>
<summary>Debugging & Inspection Tools</summary>

**`llvm-as`**

* **Purpose**: Convert human-readable IR (`.ll`) to bitcode (`.bc`).
* **Example**: `llvm-as input.ll -o output.bc`

**`llvm-dis`**

* **Purpose**: Convert bitcode (`.bc`) to human-readable IR (`.ll`).
* **Example**: `llvm-dis input.bc -o output.ll`

**`llvm-nm`**

* **Purpose**: Print symbols (functions, globals) in object files or IR.
* **Example**: `llvm-nm input.bc`

**`llvm-objdump`**

* **Purpose**: Disassemble object files, view sections and symbols.
* **Example**: `llvm-objdump -d input.o`

**`llvm-symbolizer`**

* **Purpose**: Convert crash addresses to source line info.
* **Example**: `llvm-symbolizer 0x12345678`

**`llvm-dwarfdump`**

* **Purpose**: Inspect DWARF debug info manually.
* **Example**: `llvm-dwarfdump input.o`

</details>

<details>
<summary>Profiling & Coverage Tools</summary>

**`llvm-profdata`**

* **Purpose**: Merge and manage profile data.
* **Example**: `llvm-profdata merge *.profraw -o merged.profdata`

**`llvm-cov`**

* **Purpose**: Generate code coverage reports.
* **Example**: `llvm-cov show ./a.out -instr-profile=merged.profdata`

</details>

<details>
<summary>Testing & Development Tools</summary>

**`FileCheck`**

* **Purpose**: Validate tool output against patterns in tests.
* **Example**: Used in test files for automated checking.

**`llvm-lit`**

* **Purpose**: LLVM's test runner.
* **Example**: `llvm-lit tests/`

**`llvm-exegesis`**

* **Purpose**: Benchmark instruction latency and throughput.
* **Example**: `llvm-exegesis -mode=latency -opcode-name=ADD32rr`

</details>

<details>
<summary>Utilities & Metadata</summary>

**`llvm-config`**

* **Purpose**: Query LLVM install path, compilation flags, components.
* **Example**: `llvm-config --cxxflags --ldflags`

**`llvm-readobj`**

* **Purpose**: Print detailed object file info.
* **Example**: `llvm-readobj -h input.o`

**`llvm-readelf`**

* **Purpose**: Like `readobj`, but ELF-specific output.
* **Example**: `llvm-readelf -h input.o`

**`llvm-addr2line`**

* **Purpose**: Convert addresses to file/line information like `addr2line`.

**`llvm-lto`**

* **Purpose**: Link Time Optimization support tool.

**`llvm-cxxfilt`**

* **Purpose**: Demangle C++ symbol names.
* **Example**: `llvm-cxxfilt _Z3fooi`

</details>

<div>
    <AdBanner />
</div>

## Alive2 Compiler Explorer

[**Alive2 Compiler Explorer**](https://alive2.llvm.org/ce/) is a powerful web-based tool for verifying the correctness of LLVM compiler optimizations. Here's what makes it special:


#### Key Features

- **Interactive Verification**: Allows you to input both pre- and post-optimization LLVM IR code  
- **Semantic Preservation Check**: Uses formal methods to verify if optimizations maintain program behavior  
- **Bug Detection**: Identifies subtle bugs in LLVM optimization passes that might otherwise go unnoticed  
- **Web-Based Interface**: No local installation required – works right in your browser  

<div>
    <AdBanner />
</div>


***How It Works***

You provide:
- The original LLVM IR (before optimization)  
- The transformed LLVM IR (after optimization)  

***Alive2 performs***
- Automatic equivalence checking  
- Formal verification of semantic preservation  
- Validation of undefined behavior assumptions  

***Who Uses It***

- Compiler developers testing new optimization passes  
- Researchers working on compiler verification  
- Quality assurance teams validating compiler correctness  
- Advanced users debugging optimization-related issues  


<div>
    <AdBanner />
</div>

:::tip
Alive2 has become an essential tool in the LLVM ecosystem, helping ensure that compiler optimizations don't introduce bugs while improving performance.
:::

## References

<Tabs>
  <TabItem value="llvm-core" label="LLVM Core & Docs" default>

1. [LLVM Official Website](https://llvm.org)  
2. [LLVM Documentation Index](https://llvm.org/docs/)  
3. [Clang Documentation](https://clang.llvm.org/docs/)  
4. [LLVM GitHub Repository](https://github.com/llvm/llvm-project)  

  </TabItem>
  <TabItem value="common-tools" label="Common LLVM Tools">

5. [`clang`](https://clang.llvm.org) – C/C++/Objective-C Frontend  
6. [`llvm-as`](https://llvm.org/docs/CommandGuide/llvm-as.html) – LLVM Assembler  
7. [`llvm-dis`](https://llvm.org/docs/CommandGuide/llvm-dis.html) – LLVM Disassembler  
8. [`opt`](https://llvm.org/docs/CommandGuide/opt.html) – Optimizer Driver  
9. [`llc`](https://llvm.org/docs/CommandGuide/llc.html) – LLVM Static Compiler  
10. [`clang++`](https://clang.llvm.org/docs/UsersManual.html) – C++ Compiler  
11. [`llvm-link`](https://llvm.org/docs/CommandGuide/llvm-link.html) – Bitcode Linker  
12. [`llvm-nm`](https://llvm.org/docs/CommandGuide/llvm-nm.html) – Symbol Table Dumper  
13. [`llvm-objdump`](https://llvm.org/docs/CommandGuide/llvm-objdump.html) – Object File Disassembler  
14. [`llvm-dwarfdump`](https://llvm.org/docs/CommandGuide/llvm-dwarfdump.html) – DWARF Debug Info  
15. [`FileCheck`](https://llvm.org/docs/CommandGuide/FileCheck.html) – Output Verifier  

  </TabItem>
  <TabItem value="debug-reduce" label="Debug & Reduce Tools">

16. [`llvm-reduce`](https://llvm.org/docs/CommandGuide/llvm-reduce.html) – Test Case Reducer  
17. [`bugpoint`](https://llvm.org/docs/CommandGuide/bugpoint.html) – Automatic Debugger  
18. [`clang-tidy`](https://clang.llvm.org/extra/clang-tidy/) – C++ Static Analysis  

  </TabItem>
  <TabItem value="alive2" label="Alive2 & Semantics">

19. [Alive2 Compiler Explorer](https://alive2.llvm.org/ce/)  
20. [Alive2 GitHub Repository](https://github.com/AliveToolkit/alive2)  
21. [John Regehr’s Blog on Alive2](https://blog.regehr.org/archives/1722)  
22. [Alive (Original Project)](https://github.com/nunoplopes/alive)  

  </TabItem>
  <TabItem value="external" label="External Learning">

23. [Compiler Explorer (Godbolt)](https://godbolt.org)  
24. [LLVM Discourse Forums](https://discourse.llvm.org)  
  </TabItem>
</Tabs>
