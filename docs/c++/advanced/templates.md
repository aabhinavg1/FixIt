---
title: Templates in C++ - Generic Programming, Function Templates and Class Templates
description: Learn templates in C++ with detailed examples. Understand generic programming, function templates, class templates, type parameters, code reuse, compile-time polymorphism, and template design basics.
keywords:
  - templates in c++
  - generic programming c++
  - function templates c++
  - class templates c++
  - compile time polymorphism c++
tags:
  - C++
  - Templates
  - Generic Programming
  - STL Foundation
---

import AdBanner from '@site/src/components/AdBanner';

# Templates in C++



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

Templates are one of the most powerful features in C++.

They are also one of the features that separate “basic C++” from “modern and serious C++.”

Why?

Because templates let you write logic once and make it work across many types while keeping:

- type safety
- performance
- compile-time checking

That is why templates are the foundation of:

- the STL
- generic libraries
- modern abstractions
- much of high-performance C++ design

<div>
  <AdBanner />
</div>

## Table of Contents

1. [What is a template?](#what-is-a-template)
2. [Why templates matter](#why-templates-matter)
3. [Function templates](#function-templates)
4. [Class templates](#class-templates)
5. [Type deduction in templates](#type-deduction-in-templates)
6. [Templates and code reuse](#templates-and-code-reuse)
7. [Templates and compile-time polymorphism](#templates-and-compile-time-polymorphism)
8. [Practical example](#practical-example)
9. [Common mistakes](#common-mistakes)
10. [FAQ](#faq)

## What is a Template?

A template is a blueprint for generating code based on one or more types or values.

Instead of writing separate versions of the same logic for `int`, `double`, `std::string`, and so on, you write one template and let the compiler generate the appropriate versions.

## Why Templates Matter

Without templates, generic programming usually goes in one of two bad directions:

- duplicated code for every type
- unsafe low-level abstractions like `void*`

Templates solve that by letting C++ remain:

- generic
- efficient
- strongly typed

This is one of the biggest reasons the STL is so powerful.

## Function Templates

A function template lets one function work with multiple types.

Example:

```cpp
template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}
```

Usage:

```cpp
std::cout << maximum(10, 20) << '\n';
std::cout << maximum(3.5, 2.1) << '\n';
```

The compiler generates the appropriate versions based on the call.

### typename vs class

In most template parameter lists, `typename` and `class` mean the same thing.

```cpp
template <class T>
T add(T a, T b) {
    return a + b;
}
```

## Class Templates

A class template lets one class work with multiple types.

Example:

```cpp
template <typename T>
class Box {
private:
    T value_;

public:
    Box(T value) : value_(value) {}

    T get() const {
        return value_;
    }
};
```

Usage:

```cpp
Box<int> int_box(10);
Box<std::string> text_box("CompilerSutra");
```

Now one class design works for many value types.

## Type Deduction in Templates

Function templates often allow the compiler to deduce template arguments automatically.

```cpp
maximum(10, 20);
```

Here the compiler deduces `T` as `int`.

But for class templates, you often specify the type explicitly:

```cpp
Box<int> b(5);
```

Modern C++ has class template argument deduction in some cases, but explicit form is still clearer for learning.

## Templates and Code Reuse

Templates are one of the most elegant forms of reuse in C++.

Without templates, you might write:

```cpp
int add_int(int a, int b);
double add_double(double a, double b);
```

With templates:

```cpp
template <typename T>
T add(T a, T b);
```

That reduces duplication while keeping correctness.

## Templates and Compile-Time Polymorphism

Templates are often described as compile-time polymorphism.

Why?

Because the behavior is selected at compile time rather than runtime.

Compare:

- runtime polymorphism uses virtual functions
- compile-time polymorphism uses templates

Templates often have no virtual dispatch overhead, which is one reason they are so important in performance-oriented C++.

## Practical Example

```cpp
#include <iostream>
#include <vector>

template <typename T>
T sum_vector(const std::vector<T>& values) {
    T total{};
    for (const T& value : values) {
        total += value;
    }
    return total;
}

int main() {
    std::vector<int> ints{1, 2, 3, 4};
    std::vector<double> doubles{1.1, 2.2, 3.3};

    std::cout << sum_vector(ints) << '\n';
    std::cout << sum_vector(doubles) << '\n';
}
```

This is a strong example because:

- one implementation works for multiple numeric types
- type safety is preserved
- no manual duplication is needed

## Why Templates Feel Hard

Templates are powerful, but they also increase complexity.

They can be hard because:

- errors become longer
- syntax becomes denser
- abstractions become more generic than beginners are used to

That is normal.

The right way to learn templates is:

- start with simple function templates
- move to class templates
- understand STL examples
- only later study advanced metaprogramming

## Common Mistakes

### 1. Using templates where simple code is enough

Not every repeated idea needs a template.

### 2. Making templates too abstract too early

Begin with practical generic cases, not clever type tricks.

### 3. Ignoring readability

Generic code should still be understandable.

### 4. Thinking templates are only for advanced library authors

That is false. Even everyday C++ developers benefit from understanding templates well.

## Best Practices

- use templates when real generic reuse exists
- keep the first version simple
- avoid overengineering
- connect templates to STL usage so the motivation stays practical
- prefer readable generic code over “clever” generic code

## Summary

Templates are one of C++’s defining strengths.

They let you:

- write generic code
- preserve type safety
- avoid duplication
- support compile-time abstraction

If inheritance introduces runtime polymorphism, templates introduce compile-time polymorphism.

That makes them central to modern C++.

## FAQ

### Are templates only for advanced developers?

No. Beginners should absolutely learn the basics because templates are everywhere in STL and real C++ code.

### What is the difference between a function template and a class template?

A function template generates functions for multiple types. A class template generates classes for multiple types.

### Are templates faster than virtual functions?

Not always in every sense, but template-based abstractions often avoid runtime dispatch overhead because decisions happen at compile time.

