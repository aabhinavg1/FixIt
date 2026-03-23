---
title: constexpr in C++
description: Learn how constexpr enables compile-time computation, where it improves design, and how to use it without turning code into unreadable metaprogramming.
tags:
  - C++
  - constexpr
  - Compile Time
keywords:
  - constexpr in c++
  - compile time c++
  - consteval c++
sidebar_label: constexpr
---

import AdBanner from '@site/src/components/AdBanner';

# `constexpr` in C++

`constexpr` is one of the clearest examples of what modern C++ tries to do well: move work to compile time when possible, express intent clearly, and still let the programmer write ordinary-looking code.

It is powerful, but it is easy to misunderstand if you reduce it to "this runs at compile time." That is only part of the story.

<AdBanner />

## Table of Contents

1. [What constexpr means](#what-constexpr-means)
2. [Why it matters](#why-it-matters)
3. [constexpr functions](#constexpr-functions)
4. [constexpr objects](#constexpr-objects)
5. [Compile-time vs runtime use](#compile-time-vs-runtime-use)
6. [consteval and constinit](#consteval-and-constinit)
7. [Practical examples](#practical-examples)
8. [Common mistakes](#common-mistakes)
9. [Best practices](#best-practices)
10. [FAQ](#faq)

## What `constexpr` means

At a high level, `constexpr` marks something as eligible for constant evaluation under the right conditions.

That can apply to:

- functions
- variables
- constructors
- member functions

It does not mean "this always executes only at compile time." It means the compiler is allowed to evaluate it at compile time when the context requires or permits constant evaluation.

## Why it matters

Compile-time computation can help in several ways:

- remove runtime work
- validate values earlier
- make APIs safer
- enable better optimization
- express invariants directly in code

This is useful in areas like:

- numeric utilities
- lookup tables
- template-heavy libraries
- parsers and DSL support code
- performance-sensitive low-level components

## `constexpr` functions

The basic example is familiar:

```cpp
constexpr int square(int x) {
    return x * x;
}
```

Now the function can participate in constant expressions:

```cpp
constexpr int value = square(5);
```

But it can also run at runtime:

```cpp
int n = 8;
int result = square(n);
```

This dual-use property is part of what makes `constexpr` practical.

## `constexpr` objects

You can also define values that must be constant-evaluable:

```cpp
constexpr int buffer_size = 256;
```

This makes the intent obvious and lets the value be used where a compile-time constant is required.

## Compile-time vs runtime use

This distinction matters:

- if the surrounding context requires a constant expression, the compiler must evaluate it at compile time
- otherwise the same `constexpr` function may execute at runtime

Example:

```cpp
constexpr int cube(int x) {
    return x * x * x;
}

constexpr int a = cube(3); // compile time

int n = 4;
int b = cube(n);           // runtime
```

So `constexpr` is not magic. It is a capability combined with context.

## `consteval` and `constinit`

Modern C++ added related tools:

- `consteval`: the function must be evaluated at compile time
- `constinit`: the variable must have static initialization, but is not necessarily immutable

Example:

```cpp
consteval int always_compile_time(int x) {
    return x + 10;
}
```

This is stricter than `constexpr`.

## Practical Examples

## Practical Example 1: Compile-time table size

```cpp
#include <array>

constexpr std::size_t entries() {
    return 16;
}

int main() {
    std::array<int, entries()> values{};
}
```

The array size is resolved at compile time.

## Practical Example 2: Simple compile-time utility

```cpp
#include <iostream>

constexpr bool is_even(int x) {
    return x % 2 == 0;
}

int main() {
    static_assert(is_even(10));
    std::cout << is_even(7) << '\n';
}
```

This shows both compile-time validation and runtime use.

## Practical Example 3: Branch-free compile-time selection

```cpp
template <typename T>
constexpr T clamp_zero(T value) {
    return value < 0 ? 0 : value;
}
```

Utilities like this can remain simple while still being constant-evaluable.

## Common mistakes

### Thinking `constexpr` means "guaranteed compile-time execution"

That is false unless the context demands it or you use `consteval`.

### Forcing compile-time cleverness where normal code would be clearer

`constexpr` should improve design, not become a performance superstition.

### Ignoring language-version differences

`constexpr` became more capable over time. What is allowed in C++20 is broader than what was allowed in early standards.

### Using it without measuring practical benefit

Sometimes it improves clarity. Sometimes it improves performance. Sometimes it just adds noise.

## Best practices

- Use `constexpr` when a value or function is naturally constant-evaluable.
- Prefer clarity over metaprogramming theater.
- Use `static_assert` with `constexpr` utilities when it improves correctness.
- Reach for `consteval` only when compile-time-only behavior is truly required.
- Keep compile-time logic understandable to future maintainers.

## FAQ

## Is `constexpr` only for template experts?

No. Many useful `constexpr` functions are small and ordinary-looking.

## Does `constexpr` automatically make code faster?

Not always. It may remove runtime work in some cases, but the real benefit depends on usage.

## Should every utility function be `constexpr`?

No. Use it where it fits naturally and improves correctness or expressiveness.

## Is `constexpr` part of modern C++ you should know well?

Yes. It is one of the core ideas behind modern compile-time expressiveness.

## More Articles

- [Templates](../advanced/templates.md)
- [Concepts and Ranges](./concepts-and-ranges.md)
- [SFINAE](./sfinae.md)
