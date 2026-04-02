---
title: Polymorphism in C++ - Virtual Functions, Override, Dynamic Dispatch and Design Guide
description: Learn polymorphism in C++ with virtual functions, override, abstract classes, dynamic dispatch, and runtime behavior. Understand how one interface can represent multiple implementations.
keywords:
  - polymorphism in c++
  - virtual function c++
  - override in c++
  - abstract class c++
  - dynamic dispatch c++
tags:
  - C++
  - Polymorphism
  - Virtual Functions
  - OOP
---

import AdBanner from '@site/src/components/AdBanner';

# Polymorphism in C++



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

Polymorphism is one of the most important ideas in object-oriented programming, but it is also one of the most misunderstood.

At a high level, polymorphism means:

> one interface, multiple behaviors

In C++, this usually appears through **runtime polymorphism**, where a base class reference or pointer can call behavior that depends on the actual derived type at runtime.

That sounds abstract, so this article will make it concrete.

<div>
  <AdBanner />
</div>

## Table of Contents

1. [What is polymorphism?](#what-is-polymorphism)
2. [Why polymorphism matters](#why-polymorphism-matters)
3. [Virtual functions](#virtual-functions)
4. [Override](#override)
5. [Abstract classes and pure virtual functions](#abstract-classes-and-pure-virtual-functions)
6. [Dynamic dispatch](#dynamic-dispatch)
7. [Virtual destructors](#virtual-destructors)
8. [Practical example](#practical-example)
9. [When polymorphism is useful](#when-polymorphism-is-useful)
10. [Common mistakes](#common-mistakes)
11. [FAQ](#faq)

## What is Polymorphism?

Polymorphism allows different derived types to be treated through a common base interface.

Example idea:

- `Circle`
- `Rectangle`
- `Triangle`

All can be treated as `Shape`.

You can then write code that works with `Shape` rather than rewriting logic for every concrete type.

## Why Polymorphism Matters

Without polymorphism, code often becomes full of:

- type checks
- switch-like branching on object kinds
- duplicated behavior paths

With polymorphism, behavior is delegated to the object itself.

This makes designs:

- cleaner
- more extensible
- easier to maintain

## Virtual Functions

In C++, runtime polymorphism is usually built using virtual functions.

Example:

```cpp
class Shape {
public:
    virtual double area() const {
        return 0.0;
    }
};
```

The keyword `virtual` tells C++ that calls to this function may be resolved dynamically when used through base-class pointers or references.

## Override

Derived classes can override virtual functions.

```cpp
class Rectangle : public Shape {
public:
    Rectangle(double w, double h) : w_(w), h_(h) {}

    double area() const override {
        return w_ * h_;
    }

private:
    double w_;
    double h_;
};
```

Use `override` whenever you intend to override a virtual function.

Why?

Because the compiler can catch mistakes if the signature does not match.

## Abstract Classes and Pure Virtual Functions

Sometimes the base class should not provide a default implementation at all.

Example:

```cpp
class Shape {
public:
    virtual double area() const = 0;
};
```

This makes `Shape` an abstract class.

That means:

- it defines an interface
- it cannot be instantiated directly

A derived class must implement the pure virtual function to become concrete.

## Dynamic Dispatch

Dynamic dispatch means the actual function call is chosen at runtime based on the real object type.

Example:

```cpp
void print_area(const Shape& shape) {
    std::cout << shape.area() << '\n';
}
```

If you pass a `Rectangle`, the `Rectangle::area()` implementation runs.

That is the key point:

the call is made through a base reference, but the derived behavior still executes.

## Virtual Destructors

If a class is intended to be used polymorphically, its destructor should usually be virtual.

```cpp
class Shape {
public:
    virtual ~Shape() = default;
    virtual double area() const = 0;
};
```

This matters because deleting a derived object through a base pointer must clean up the full derived object correctly.

Without a virtual destructor, cleanup can be incomplete or invalid.

## Practical Example

```cpp
#include <iostream>
#include <memory>
#include <vector>

class Task {
public:
    virtual void run() const = 0;
    virtual ~Task() = default;
};

class CompileTask : public Task {
public:
    void run() const override {
        std::cout << "Running compile task\n";
    }
};

class LinkTask : public Task {
public:
    void run() const override {
        std::cout << "Running link task\n";
    }
};

int main() {
    std::vector<std::unique_ptr<Task>> tasks;
    tasks.push_back(std::make_unique<CompileTask>());
    tasks.push_back(std::make_unique<LinkTask>());

    for (const auto& task : tasks) {
        task->run();
    }
}
```

This is a realistic use case:

- one common interface
- multiple implementations
- runtime behavior chosen automatically

## When Polymorphism is Useful

Polymorphism is useful when:

- different types share one conceptual interface
- new derived types may be added later
- caller code should depend on abstraction, not concrete details

Examples:

- GUI widgets
- compiler passes
- tasks and jobs
- parsers
- rendering backends

## When Polymorphism is Not Necessary

Do not use runtime polymorphism just because it sounds advanced.

If the behavior does not truly vary across types, or if the type is already known statically, simpler designs may be better.

C++ also has template-based compile-time polymorphism, which is another major style of abstraction.

## Common Mistakes

### 1. Forgetting virtual in the base class

Without it, dynamic dispatch does not happen.

### 2. Forgetting virtual destructor

This is dangerous for polymorphic base classes.

### 3. Overusing inheritance

Polymorphism is useful, but not every design problem needs inheritance and virtual dispatch.

### 4. Writing weak abstractions

If the base class does not represent a meaningful common interface, the hierarchy becomes fragile.

## Best Practices

- use `override` on overridden functions
- use virtual destructors for polymorphic bases
- keep base interfaces focused
- prefer meaningful abstraction over forced hierarchy
- use polymorphism when behavior truly varies

## Summary

Polymorphism allows one interface to support multiple implementations.

In C++, that usually means:

- base class
- virtual function
- derived override
- runtime dispatch

When used well, this leads to cleaner and more extensible code. When used badly, it creates complexity for no real gain.

## FAQ

### What is the difference between inheritance and polymorphism?

Inheritance is a relationship between classes. Polymorphism is behavior that lets one interface represent multiple implementations.

### Is every inherited class polymorphic?

No. Polymorphism requires virtual behavior.

### Why should I use override?

Because it makes intent explicit and helps the compiler catch mistakes.

