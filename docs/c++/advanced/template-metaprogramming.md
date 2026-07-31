---
title: Template Metaprogramming Basics
description: "Template metaprogramming moves selection and computation into compilation, allowing generic libraries to reject invalid programs or remove runtime branches. Learn the compiler model, practical trade-offs, and production guidance."
tags:
  - C++
  - Modern C++
keywords:
  - compile-time computation and type traits
  - Template Metaprogramming Basics
sidebar_label: Template Metaprogramming Basics
---

# Template Metaprogramming Basics

## Introduction

Template metaprogramming moves selection and computation into compilation, allowing generic libraries to reject invalid programs or remove runtime branches. It also gives a decision framework for choosing the feature instead of treating syntax as the design.

## Why this exists

C++ evolves by adding facilities that solve recurring systems problems while preserving control over layout, lifetime, and generated code. The historical constraint matters because every abstraction has a cost model.

## How it works

Substitution, partial specialization, and constexpr evaluation operate during instantiation. Concepts provide clearer constraints for new interfaces.

The cost is compile time, diagnostics, and possible code bloat. Keep public constraints simple and inspect instantiation depth when builds slow down.

Use type_traits and concepts before writing recursive metaprogramming; link this topic to the SFINAE and constexpr guides.

## Compiler and runtime perspective

The compiler type-checks the source, selects overloads or instantiations, lowers the result to an intermediate representation, and emits target code. Runtime behavior depends on object lifetime, allocation, scheduling, cache locality, and ABI boundaries. Inspect generated code when a claim depends on inlining, dispatch, synchronization, or frame layout.

## Production checklist

- State ownership and failure behavior in the API.
- Compile examples with warnings and a supported language standard.
- Add a focused regression test before changing behavior.
- Measure allocations, latency, and code size on a representative workload.
- Document portability assumptions and cancellation or shutdown behavior.

## Common mistakes

The most expensive mistakes hide a lifetime or contract decision behind a convenient syntax. Avoid assuming that a feature creates a thread, makes code exception-safe automatically, or improves performance without measurement.

## Further reading

- [C++ compiler workflow](/docs/c++/basic/c++_compilers)
- [Move semantics](/docs/c++/advanced/move-semantics)
- [Concepts and ranges](/docs/c++/expert/concepts-and-ranges)
- [C++ resources](/docs/c++/resources/index)

:::tip
Prefer the simplest type or control-flow structure that makes the ownership and failure contract obvious.
:::
