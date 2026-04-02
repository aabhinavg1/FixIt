---
id: cpp-learning-roadmap
title: "C++ Programming Curriculum (From Zero to Advanced)"
description: "A complete C++ roadmap that takes you from computer basics to modern C++ systems programming, templates, concurrency, and professional development."
keywords:
  - Learn C++ from Scratch
  - C++ Programming
  - C++ Course
  - C++ Tutorial
  - C++ Roadmap
  - Modern C++
  - STL Course
  - Systems Programming
  - Beginner to Advanced C++
  - C++ Developer Docs
  - C++ Curriculum
  - CMake Build System
  - Low-Level Programming
  - C++ Programming Guide
---

import AdBanner from '@site/src/components/AdBanner';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



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

<AdBanner />

# C++ Programming Curriculum (From Zero to Advanced)

This roadmap is the structured version of the C++ section. It is designed to take a learner from zero programming background to strong modern C++ fundamentals, then into advanced topics such as templates, STL, concurrency, systems programming, and compile-time techniques.

The important change here is that this page now maps to the articles that actually exist in the docs instead of pointing at placeholder entries.

:::important What this curriculum covers
- core C++ syntax and language fundamentals
- pointers, references, resource management, and object lifetime
- object-oriented programming and generic programming
- STL usage and algorithmic thinking
- threads, mutexes, and asynchronous work
- systems programming with files, sockets, and POSIX APIs
- modern C++ topics such as concepts, ranges, SFINAE, and `constexpr`
:::

:::tip How to use this roadmap
- Follow the levels in order if you are new to C++.
- If you already know the basics, jump to the level where your understanding starts becoming shaky.
- Do not skip memory, STL, and concurrency topics if your goal is interviews or systems work.
:::

<AdBanner />

## The Curriculum

<details>
<summary><strong><span class="level-prefix">LEVEL 0:</span> Computer Basics</strong></summary>

Build the machine-level intuition needed to understand why C++ looks the way it does and why compilers, memory, and binary representation matter.

| # | Title | Video | Article | PDF |
| - | ----- | ----- | ------- | --- |
| 1 | How Computers Work | [link](https://youtu.be/2jtmDTQbYf4) | [How Computers Work](https://www.compilersutra.com/docs/gpu/gpu_programming/how_computer_works/) | Coming Soon |
| 2 | Binary and Hexadecimal | Coming Soon | [Binary and Hexadecimal](./basic/binary_hexadecimal.md) | Coming Soon |
| 3 | C++ Compilers | Coming Soon | [C++ Compilers](./basic/c++_compilers.md) | Coming Soon |

</details>

<details>
<summary><strong><span class="level-prefix">LEVEL 1:</span> C++ Fundamentals</strong></summary>

Start with syntax, types, operators, and the control structures that shape every C++ program.

| # | Title | Video | Article | PDF |
| - | ----- | ----- | ------- | --- |
| 1 | Variables and Types | Coming Soon | [Variables and Types](./basic/variables-and-types.md) | Coming Soon |
| 2 | Operators | Coming Soon | [Operators](./basic/operators.md) | Coming Soon |
| 3 | Control Flow | Coming Soon | [Control Flow](./basic/control-flow.md) | Coming Soon |
| 4 | Introductory C++ Walkthrough | Coming Soon | [Comprehensive C++ Intro](./basic/intro.md) | Coming Soon |

</details>

<details>
<summary><strong><span class="level-prefix">LEVEL 2:</span> Functions and Memory Basics</strong></summary>

Learn how to write reusable functions, pass data effectively, and reason about pointers and references without hand-waving.

| # | Title | Video | Article | PDF |
| - | ----- | ----- | ------- | --- |
| 1 | Functions | Coming Soon | [Functions](./basic/functions.md) | Coming Soon |
| 2 | Pointers | Coming Soon | [Pointers](./basic/pointers.md) | Coming Soon |
| 3 | References | Coming Soon | [References](./basic/references.md) | Coming Soon |
| 4 | Build and Run with CMake | Coming Soon | [CMake for Beginners](./basic/cpp_tutorial_with_cmake.md) | Coming Soon |

</details>

<details>
<summary><strong><span class="level-prefix">LEVEL 3:</span> OOP Basics</strong></summary>

Use classes to organize code, control object lifetime, and reuse behavior through inheritance.

| # | Title | Video | Article | PDF |
| - | ----- | ----- | ------- | --- |
| 1 | Classes and Objects | Coming Soon | [Classes and Objects](./intermediate/classes-and-objects.md) | Coming Soon |
| 2 | Constructors and Destructors | Coming Soon | [Constructors and Destructors](./intermediate/constructors-and-destructors.md) | Coming Soon |
| 3 | Inheritance | Coming Soon | [Inheritance](./intermediate/inheritance.md) | Coming Soon |
| 4 | OOP Overview | Coming Soon | [Object-Oriented Programming in C++](./basic/opp-cpp.md) | Coming Soon |

</details>

<details>
<summary><strong><span class="level-prefix">LEVEL 4:</span> Advanced OOP and Generic Programming</strong></summary>

Move from basic object modeling into virtual dispatch, templates, and the standard library mindset.

| # | Title | Video | Article | PDF |
| - | ----- | ----- | ------- | --- |
| 1 | Polymorphism | Coming Soon | [Polymorphism](./advanced/polymorphism.md) | Coming Soon |
| 2 | Templates | Coming Soon | [Templates](./advanced/templates.md) | Coming Soon |
| 3 | STL Introduction | Coming Soon | [STL Intro](./advanced/stl-intro.md) | Coming Soon |

</details>

<details>
<summary><strong><span class="level-prefix">LEVEL 5:</span> STL and Algorithms</strong></summary>

<Tabs>
  <TabItem value="containers" label="Containers">

Work with the containers you will actually use in real C++ code.

| # | Title | Article |
| - | ----- | ------- |
| 1 | Vectors and Maps | [Vectors and Maps](./advanced/vectors-and-maps.md) |
| 2 | STL Foundations | [STL Intro](./advanced/stl-intro.md) |

  </TabItem>

  <TabItem value="algorithms" label="Algorithms">

Use the standard library to search, sort, and transform data instead of reinventing basic operations.

| # | Title | Article |
| - | ----- | ------- |
| 1 | Sorting and Searching | [Sorting and Searching](./advanced/sorting-and-searching.md) |
| 2 | Templates in Practice | [Templates](./advanced/templates.md) |

  </TabItem>
</Tabs>

</details>

<details>
<summary><strong><span class="level-prefix">LEVEL 6:</span> Resource Management</strong></summary>

This is where modern C++ starts separating itself from beginner-level code. Learn ownership, move support, and specialized memory strategies.

| # | Title | Video | Article | PDF |
| - | ----- | ----- | ------- | --- |
| 1 | Smart Pointers | Coming Soon | [Smart Pointers](./advanced/smart-pointers.md) | Coming Soon |
| 2 | Move Semantics | Coming Soon | [Move Semantics](./advanced/move-semantics.md) | Coming Soon |
| 3 | Custom Allocators | Coming Soon | [Custom Allocators](./advanced/custom-allocators.md) | Coming Soon |

</details>

<details>
<summary><strong><span class="level-prefix">LEVEL 7:</span> Concurrency</strong></summary>

Understand the core models behind multithreaded C++ code and the synchronization required to keep it correct.

| # | Title | Video | Article | PDF |
| - | ----- | ----- | ------- | --- |
| 1 | Threads | Coming Soon | [Threads](./advanced/threads.md) | Coming Soon |
| 2 | Mutexes and Locking | Coming Soon | [Mutexes and Locking](./advanced/mutexes-and-locking.md) | Coming Soon |
| 3 | Async and Futures | Coming Soon | [Async and Futures](./advanced/async-and-futures.md) | Coming Soon |

</details>

<details>
<summary><strong><span class="level-prefix">LEVEL 8:</span> Systems Programming</strong></summary>

Study how C++ touches the operating system through files, networking, and Unix-style low-level APIs.

| # | Title | Video | Article | PDF |
| - | ----- | ----- | ------- | --- |
| 1 | File I/O | Coming Soon | [File I/O](./expert/file-io.md) | Coming Soon |
| 2 | Sockets | Coming Soon | [Sockets](./expert/sockets.md) | Coming Soon |
| 3 | POSIX Basics | Coming Soon | [POSIX Basics](./expert/posix.md) | Coming Soon |

</details>

<details>
<summary><strong><span class="level-prefix">LEVEL 9:</span> Modern and Compile-Time C++</strong></summary>

<Tabs>
  <TabItem value="modern" label="Modern C++">

Learn the language features that make modern generic code clearer and safer.

| # | Title | Article |
| - | ----- | ------- |
| 1 | Concepts and Ranges | [Concepts and Ranges](./expert/concepts-and-ranges.md) |
| 2 | C++ Standards Overview | [Standards Overview](./standard/intro.md) |
| 3 | C++11 | [C++11](./standard/C++11.md) |
| 4 | C++14 | [C++14](./standard/c++14.md) |
| 5 | C++17 | [C++17](./standard/c++17.md) |
| 6 | C++23 | [C++23](./standard/c++23.md) |

  </TabItem>

  <TabItem value="metaprogramming" label="Compile-Time Programming">

Study the older and newer techniques used to constrain templates and move logic into compile time.

| # | Title | Article |
| - | ----- | ------- |
| 1 | SFINAE | [SFINAE](./expert/sfinae.md) |
| 2 | constexpr | [constexpr](./expert/constexpr.md) |
| 3 | Templates Refresher | [Templates](./advanced/templates.md) |

  </TabItem>
</Tabs>

</details>

<details>
<summary><strong><span class="level-prefix">LEVEL 10:</span> Professional Development</strong></summary>

<Tabs>
  <TabItem value="build" label="Build and Packaging">

Move from language knowledge to project-level competence.

| # | Title | Article |
| - | ----- | ------- |
| 1 | CMake | [CMake for Beginners](./basic/cpp_tutorial_with_cmake.md) |
| 2 | Conan | [Conan](./expert/conan.md) |

  </TabItem>

  <TabItem value="career" label="Career and Practice">

Use the docs section not just to learn syntax, but to prepare for practical work and professional growth.

| # | Title | Article |
| - | ----- | ------- |
| 1 | Interview Preparation | [Interview Prep](./expert/interview-prep.md) |
| 2 | Books | [Books](./resources/books.md) |
| 3 | Tools | [Tools](./resources/tools.md) |
| 4 | Testing | [Testing](./resources/testing.md) |
| 5 | Open Source | [Open Source](./resources/open-source.md) |

  </TabItem>
</Tabs>

</details>

## Final Words

This roadmap is meant to be used, not skimmed once and forgotten.

1. Start from the level that matches your current reality.
2. Read actively and compile the examples yourself.
3. Build small projects after every few levels.
4. Revisit memory, STL, and concurrency topics more than once.
5. Use the hub page at [C++ Learning Hub](/docs/c++) to navigate the section quickly.

:::important Why C++ still matters
- It remains central to systems programming, game engines, compilers, tooling, HPC, and embedded software.
- It teaches resource management and performance reasoning in a way higher-level languages often hide.
- Strong C++ fundamentals transfer well to Rust, Zig, GPU programming, and low-level engineering more broadly.
:::

## Additional Resources

### Documentation

- [cppreference](https://cppreference.com)
- [ISO C++](https://isocpp.org)
- [C++ Learning Hub](/docs/c++)

### Practice

- [CompilerSutra Home](https://compilersutra.com)
- [C++ MCQs](https://compilersutra.com/docs/mcq/cpp_mcqs)
- [C++ Interview MCQs](https://compilersutra.com/docs/mcq/interview_question/cpp_interview_mcqs)
