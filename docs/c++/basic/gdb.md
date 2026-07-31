---
title: GDB Basics for C++
description: A practical beginner guide to gdb in C++, with concrete workflows, compiler behavior, and common mistakes.
tags:
  - C++
  - Basic
  - gdb
sidebar_label: Gdb
---

# GDB Basics for C++

## What problem this solves

Compile with -g, break at the first function that can violate an invariant, then use run, next, print, bt, info threads, and watch. A non-null pointer is not proof of a live object. Optimisation can inline and eliminate variables, so confirm important findings in a release-like build. Pair GDB with AddressSanitizer and a regression test; a debugger cannot prove a race is absent.

## How to practice

Create the smallest reproducible example, compile with warnings, observe the compiler or tool output, and turn the result into a test or documented decision. Record the compiler version, standard mode, platform, and command.

## Compiler and runtime view

The compiler parses and type-checks source, resolves overloads and templates, and emits object code. The linker combines translation units. At runtime, the operating system provides memory, files, processes, and threads. Use the workflow above to inspect the boundary relevant to the bug.

## Further reading

- [C++ compiler workflow](/docs/c++/basic/c++_compilers)
- [C++ testing concepts](/docs/c++/basic/testing)
- [C++ resource hub](/docs/c++/resources/index)
