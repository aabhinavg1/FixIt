---
title: Coroutines in C++20
description: "Coroutines make functions that suspend and resume explicit, useful for asynchronous I/O, generators, and cooperative scheduling. Learn the compiler model, practical trade-offs, and production guidance."
tags:
  - C++
  - Modern C++
keywords:
  - suspend, resume, and coroutine frames
  - Coroutines in C++20
sidebar_label: Coroutines in C++20
---

# Coroutines in C++20

## Introduction

Coroutines make functions that suspend and resume explicit, useful for asynchronous I/O, generators, and cooperative scheduling. It also gives a decision framework for choosing the feature instead of treating syntax as the design.

## Why this exists

C++ evolves by adding facilities that solve recurring systems problems while preserving control over layout, lifetime, and generated code. The historical constraint matters because every abstraction has a cost model.

## How it works

The compiler transforms a coroutine into a state machine and allocates or embeds a coroutine frame according to the promise and allocation path.

co_await delegates suspension behavior to an awaiter; lifetime of the frame and referenced objects must be designed together.

Coroutines do not create threads and do not automatically make blocking code asynchronous. Profile frame allocations and cancellation behavior.

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
