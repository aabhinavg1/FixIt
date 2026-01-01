---
title: "LLVM Curriculum (From Beginner to Pro)"
description: "Learn LLVM step by step with a structured curriculum. Covers basics, intermediate pass development, advanced backend design, and real-world compiler engineering."
keywords:
- LLVM Tutorial
- Learn LLVM from Scratch
- LLVM Course
- LLVM Pass Development
- Function Pass Tutorial
- LLVM Compiler Development
- Writing Compiler Passes
- LLVM IR Tutorial
- Clang and LLVM Integration
- LLVM Optimization
- Advanced LLVM Techniques
- Open Source Compiler
- LLVM Roadmap
- Compiler Curriculum
- Docusaurus LLVM Site
- LLVM Architecture
- LLVM Backend Development
- LLVM for Beginners
- Compiler Design and Optimization
- LLVM Tutorial for Developers

---
import AdBanner from '@site/src/components/AdBanner';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div>
    <AdBanner />
</div>


# LLVM Curriculum (From Beginner to Pro)

Welcome to your step-by-step **LLVM Curriculum**, designed to guide learners from **absolute beginners in compiler development** to **advanced LLVM engineers**.  
This roadmap is structured into **10 progressive levels**, starting with compiler fundamentals, moving to LLVM IR and pass development, and culminating in backend, JIT, and advanced compiler research.

:::important What this curriculum is about?
This curriculum takes you from **LLVM basics** to **real-world compiler engineering**.  
It is organized into **10 progressive levels** covering compiler fundamentals, IR mastery, pass development, optimizations, backend, and ecosystem tools.  
:::

:::caution What to expect
- Clear explanations of **LLVM internals** (IR, passes, backend).  
- Step-by-step **custom pass development**.  
- Insights into **compiler optimizations** and **function analysis**.  
- Integration with **Clang** and real-world compilers.  
- Progression from **fundamentals to advanced optimization and backend design**.  
:::


## 🧰 DSA Foundations in Compiler & LLVM

Before diving into LLVM, it’s crucial to master the **data structures and algorithms (DSA)** that compilers rely on.  
This table lists the **DSA concepts**, their role in compiler engineering, and direct mapping to **LLVM internals**.

Here’s a refined and expanded version of your table, now organized with bullet points for clearer readability and including additional data structures used in compilers:  



>> ***Compiler Design: Key Data Structures & Algorithms***

<details>
<summary><strong>LEVEL 0: 📘 Compiler-Specific DSA Foundations</strong></summary>

<table>
  <thead>
    <tr>
      <th>Phase</th>
      <th>Core DSA / Algorithms</th>
      <th>Article Link</th>
      <th>Video</th>
      <th>PDF</th>
      <th>PPT</th>
    </tr>
  </thead>
  <tbody>
    <!-- Lexical Analysis -->
    <tr>
      <td rowspan="4">Lexical Analysis</td>
      <td>Finite Automata (NFA/DFA)</td>
      <td>Token recognition</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>Hash Tables</td>
      <td>Identifier management</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>Tries</td>
      <td>Keyword lookup</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>String Matching (KMP, Rabin-Karp, BM)</td>
      <td>Lexeme recognition</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <!-- Syntax Analysis -->
    <tr>
      <td rowspan="4">Syntax Analysis</td>
      <td>Parse Trees</td>
      <td>Grammar derivation</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>Abstract Syntax Trees (AST)</td>
      <td>Program structure representation</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>Stacks (LL, LR Parsing)</td>
      <td>Recursive & shift-reduce parsing</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>Control Flow Graphs (CFG)</td>
      <td>Flow of program execution</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <!-- Semantic Analysis -->
    <tr>
      <td rowspan="3">Semantic Analysis</td>
      <td>Symbol Table (Hash Map / Tree)</td>
      <td>Scope & type checking</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>Attribute Grammars</td>
      <td>Propagation of semantic info</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>Union-Find (Disjoint Sets)</td>
      <td>Type equivalence, alias analysis</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <!-- Intermediate Code -->
    <tr>
      <td rowspan="3">Intermediate Code</td>
      <td>Directed Acyclic Graphs (DAG)</td>
      <td>Common subexpression elimination</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>Static Single Assignment (SSA)</td>
      <td>
        IR simplification
        <ul>
          <li><a href="../llvm_Curriculum/level0/Static_Single_Assignment/">SSA Part1</a></li>
          <li><a href="../llvm_Curriculum/level0/Static_Single_Assignment_part2/">SSA Part2</a></li>
        </ul>
      </td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>Three-Address Code (TAC)</td>
      <td>IR generation</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <!-- Optimization -->
    <tr>
      <td rowspan="5">Optimization</td>
      <td>Data Flow Graphs</td>
      <td>Liveness & reaching definitions</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>Dominator Trees</td>
      <td>Loop optimization</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>Worklist Algorithms</td>
      <td>Iterative dataflow solving</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>Dynamic Programming</td>
      <td>Instruction scheduling, tiling</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>Graph Coloring</td>
      <td>Register allocation</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <!-- Code Generation -->
    <tr>
      <td rowspan="4">Code Generation</td>
      <td>Expression Trees</td>
      <td>Instruction selection</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>Interference Graphs</td>
      <td>Register assignment</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>Scheduling Algorithms (List Scheduling)</td>
      <td>Instruction scheduling</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>Priority Queues / Heaps</td>
      <td>Peephole & instruction ordering</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
      <td>Coming Soon</td>
    </tr>

  </tbody>
</table>
</details>

<h1 class="curriculum-title">The Curriculum for the compiler</h1>

<div id="llvm-toc-page">

<details>
<summary>
  <strong>
    <span class="level-prefix">LEVEL 1:</span> 🌈 Basics — Compiler & LLVM Introduction
  </strong>
</summary>

| #  | Title                                              | Link                                |
| -- | :------------------------------------------------- | :---------------------------------- |
| 1  | What is a Compiler? Phases of Compilation          | Coming Soon                         |
| 2  | LLVM Overview: Architecture and Design             | [Introduction](./llvm_basic/index.md) |
| 3  | Compiler Toolchain: Frontend, Optimizer, Backend   | Coming Soon                         |
| 4  | First Hands-on with Clang & LLVM IR                | Coming Soon                         |
| 5  | Using `opt` and `llc`                              | Coming Soon                         |

</details>


<details>
<summary>
  <strong>
    <span class="level-prefix">LEVEL 2:</span> 🔧 Pass Development (Compiler Fundamentals)
  </strong>
</summary>

| #  | Title                                                | Link                                                                |
| -- | :--------------------------------------------------- | :------------------------------------------------------------------ |
| 1  | What are LLVM Passes?                                | [Intro to Passes](./Intermediate/What_Is_LLVM_Passes.md)            |
| 2  | Writing a Function Pass                              | Coming Soon                                                         |
| 3  | Writing a Module Pass                                | Coming Soon                                                         |
| 4  | Analyzing Functions and Instructions                 | Coming Soon                                                         |
| 5  | Implementing Basic Optimizations (Dead Code, Folding)| Coming Soon                                                         |
| 6  | Running and Debugging Your Custom Pass               | Coming Soon                                                         |
| 7  | Pass Pipelines and Optimization Levels (`-O1`, `-O2`)| Coming Soon                                                         |

</details>


<details>
<summary>
  <strong>
    <span class="level-prefix">LEVEL 3:</span> 🧩 IR Mastery
  </strong>
</summary>

| #  | Title                                    | Link |
| -- | :--------------------------------------- | :--- |
| 1  | Deep Dive into LLVM IR                   | Coming Soon |
| 2  | Understanding SSA Form                   | Coming Soon |
| 3  | Control Flow Graphs and Dominators       | Coming Soon |
| 4  | Peephole Optimizations in IR             | Coming Soon |
| 5  | Loop Transformations at IR Level         | Coming Soon |

</details>


<details>
<summary>
  <strong>
    <span class="level-prefix">LEVEL 4:</span> ⚡ Code Generation Basics
  </strong>
</summary>

| #  | Title                                    | Link |
| -- | :--------------------------------------- | :--- |
| 1  | Instruction Selection                    | Coming Soon |
| 2  | Register Allocation                      | Coming Soon |
| 3  | Calling Conventions & ABI in LLVM        | Coming Soon |
| 4  | Machine IR (MIR) Basics                  | Coming Soon |
| 5  | Emitting Assembly with `llc`             | Coming Soon |

</details>


<details>
<summary>
  <strong>
    <span class="level-prefix">LEVEL 5:</span> 🔍 Analysis & Optimizations
  </strong>
</summary>

| #  | Title                                    | Link |
| -- | :--------------------------------------- | :--- |
| 1  | Data Flow Analysis in LLVM               | Coming Soon |
| 2  | Dominator Trees and Liveness Analysis    | Coming Soon |
| 3  | Constant Propagation & Folding           | Coming Soon |
| 4  | Loop Unrolling & Invariant Hoisting      | Coming Soon |
| 5  | Function Inlining                        | Coming Soon |

</details>


<details>
<summary>
  <strong>
    <span class="level-prefix">LEVEL 6:</span> 🚀 Advanced Backend Engineering
  </strong>
</summary>

| #  | Title                                    | Link |
| -- | :--------------------------------------- | :--- |
| 1  | LLVM Backend Overview: Target Descriptions | Coming Soon |
| 2  | TableGen and Instruction Patterns        | Coming Soon |
| 3  | Instruction Selection (ISel) Advanced    | Coming Soon |
| 4  | Advanced Register Allocation             | Coming Soon |
| 5  | Lowering High-Level Constructs to Machine Code | Coming Soon |

</details>


<details>
<summary>
  <strong>
    <span class="level-prefix">LEVEL 7:</span> 🔥 JIT Compilation
  </strong>
</summary>

| #  | Title                                    | Link |
| -- | :--------------------------------------- | :--- |
| 1  | Introduction to MCJIT and ORC JIT        | Coming Soon |
| 2  | Writing a Simple JIT with LLVM           | Coming Soon |
| 3  | Lazy Compilation & On-Demand Compilation | Coming Soon |
| 4  | JIT Optimizations                        | Coming Soon |
| 5  | JIT for Dynamic Languages                | Coming Soon |

</details>


<details>
<summary>
  <strong>
    <span class="level-prefix">LEVEL 8:</span> 📖 LLVM Tools & Ecosystem
  </strong>
</summary>

| #  | Title                                    | Link |
| -- | :--------------------------------------- | :--- |
| 1  | Clang: Frontend for LLVM                 | Coming Soon |
| 2  | LLD: The LLVM Linker                     | Coming Soon |
| 3  | Polly: Loop Optimizer for LLVM           | Coming Soon |
| 4  | MLIR: Multi-Level IR for Modern Compilers| Coming Soon |
| 5  | Integrating LLVM into Other Projects     | Coming Soon |

</details>


<details>
<summary>
  <strong>
    <span class="level-prefix">LEVEL 9:</span> 🧠 Research & Advanced Topics
  </strong>
</summary>

| #  | Title                                    | Link |
| -- | :--------------------------------------- | :--- |
| 1  | Parallelism and Vectorization in LLVM    | Coming Soon |
| 2  | Profile-Guided Optimizations (PGO)       | Coming Soon |
| 3  | Hardware-Specific Optimizations (CPU/GPU)| Coming Soon |
| 4  | Security & Sanitizers in LLVM            | Coming Soon |
| 5  | Compiler Research Areas with LLVM        | Coming Soon |

</details>


<details>
<summary>
  <strong>
    <span class="level-prefix">LEVEL 10:</span> 🌟 Real-World Compiler Engineering
  </strong>
</summary>

| #  | Title                                    | Link |
| -- | :--------------------------------------- | :--- |
| 1  | Building a Custom Language with LLVM     | Coming Soon |
| 2  | Industry Case Studies (Swift, Rust, Julia)| Coming Soon |
| 3  | Contributing to LLVM Open Source         | Coming Soon |
| 4  | Debugging Large Compiler Projects        | Coming Soon |
| 5  | LLVM in AI & GPU Compiler Frameworks     | Coming Soon |

</details>

</div>

---

<div>
    <AdBanner />
</div>

### 🚀 Get Started!  
Choose a level to begin your **LLVM journey**. Whether you’re a beginner or aiming for advanced backend engineering, this curriculum will give you the structured roadmap to **master LLVM step by step**.
