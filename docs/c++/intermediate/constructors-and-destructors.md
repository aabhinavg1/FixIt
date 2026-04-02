---
title: Constructors and Destructors in C++ - Initialization, Cleanup and RAII Guide
description: Learn constructors and destructors in C++ with practical examples. Understand initialization, member initializer lists, default constructors, parameterized constructors, destructors, object lifetime, and RAII.
keywords:
  - constructors in c++
  - destructors in c++
  - object lifetime in c++
  - member initializer list c++
  - raii in c++
tags:
  - C++
  - Constructors
  - Destructors
  - RAII
  - Object Lifetime
---

import AdBanner from '@site/src/components/AdBanner';

# Constructors and Destructors in C++



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

Once you start writing real classes, one question appears immediately:

> How does an object begin its life correctly, and how does it clean up when it ends?

That is exactly what constructors and destructors are for.

This topic is central to C++, because object lifetime is one of the language’s biggest strengths. C++ lets you tie resource management directly to object lifetime, and that is the foundation of RAII.

If you understand constructors and destructors well, you will understand much more than syntax. You will understand:

- initialization discipline
- resource ownership
- lifetime
- cleanup
- the philosophy of modern C++

<div>
  <AdBanner />
</div>

## Table of Contents

1. [What is a constructor?](#what-is-a-constructor)
2. [Default constructor](#default-constructor)
3. [Parameterized constructor](#parameterized-constructor)
4. [Member initializer lists](#member-initializer-lists)
5. [What is a destructor?](#what-is-a-destructor)
6. [Object lifetime](#object-lifetime)
7. [RAII](#raii)
8. [When to write custom constructors and destructors](#when-to-write-custom-constructors-and-destructors)
9. [Common mistakes](#common-mistakes)
10. [FAQ](#faq)

## What is a Constructor?

A constructor is a special member function that runs automatically when an object is created.

It is used to initialize the object.

Example:

```cpp
class Student {
public:
    Student() {
        std::cout << "Student created\n";
    }
};
```

When an object of `Student` is created, the constructor runs automatically.

Constructors:

- have the same name as the class
- do not have a return type
- are called automatically

## Default Constructor

A default constructor takes no arguments.

```cpp
class Counter {
public:
    Counter() {
        value = 0;
    }

private:
    int value;
};
```

Now every new `Counter` starts with a valid initial value.

This matters because uninitialized state is a common bug source.

### Compiler-generated default constructor

If you do not define a constructor, the compiler may generate one for you.

But the generated behavior may not be enough if your class needs explicit initialization rules.

## Parameterized Constructor

A parameterized constructor accepts arguments so the object can start with meaningful data.

```cpp
class Book {
public:
    Book(const std::string& title, int pages) {
        title_ = title;
        pages_ = pages;
    }

private:
    std::string title_;
    int pages_;
};
```

This lets you create objects like:

```cpp
Book b("Modern C++", 500);
```

Now the object is initialized immediately with useful values.

## Member Initializer Lists

In C++, constructors often initialize members using an initializer list.

Example:

```cpp
class Book {
public:
    Book(const std::string& title, int pages)
        : title_(title), pages_(pages) {}

private:
    std::string title_;
    int pages_;
};
```

This is usually better than assigning inside the constructor body.

Why?

Because members are initialized directly instead of default-constructing first and then assigning later.

This is especially important for:

- `const` members
- reference members
- members without default constructors

## What is a Destructor?

A destructor is a special member function that runs automatically when an object is destroyed.

Example:

```cpp
class Logger {
public:
    ~Logger() {
        std::cout << "Logger destroyed\n";
    }
};
```

The destructor:

- has the same name as the class
- starts with `~`
- takes no parameters
- has no return type

Its job is cleanup.

## Object Lifetime

Local objects are destroyed automatically when they leave scope.

Example:

```cpp
int main() {
    Logger log;
}
```

When `main()` ends, `log` is destroyed and its destructor runs.

That automatic cleanup is one of the most useful aspects of C++.

## RAII

RAII stands for:

**Resource Acquisition Is Initialization**

This means:

- acquire resources in the constructor
- release them in the destructor

Example idea:

- open a file in the constructor
- close it in the destructor

This ties resource management to object lifetime.

That is one of the biggest design strengths of C++.

### Why RAII matters

RAII helps prevent:

- leaks
- forgotten cleanup
- partially cleaned state
- exception-related cleanup failures

This is not a minor pattern. It is one of the central philosophies of idiomatic C++.

## A Practical Example

```cpp
#include <iostream>
#include <string>

class Session {
public:
    Session(const std::string& name)
        : name_(name) {
        std::cout << "Session started: " << name_ << '\n';
    }

    ~Session() {
        std::cout << "Session ended: " << name_ << '\n';
    }

private:
    std::string name_;
};

int main() {
    Session s("benchmark");
    std::cout << "Inside main\n";
}
```

This demonstrates automatic start and cleanup behavior.

## When to Write Custom Constructors and Destructors

Write custom constructors when:

- the object needs controlled initialization
- the object must enforce valid starting state
- some setup must happen immediately

Write a custom destructor when:

- the object directly manages a resource
- cleanup must happen automatically

Examples of resources:

- file handles
- sockets
- mutex-like wrappers
- raw heap memory

## When Not to Write Them

In modern C++, many classes do not need custom destructors because standard library types already manage resources correctly.

For example:

- `std::string`
- `std::vector`
- `std::unique_ptr`

These already follow RAII.

That is why modern advice often favors the **rule of zero**:

> if standard components already manage lifetime correctly, do not write special member functions unless you really need to

## Common Mistakes

### 1. Forgetting to initialize members

Leaving members in invalid states creates fragile classes.

### 2. Assigning in constructor body when initializer list is better

This is not always wrong, but it is often less efficient and less correct.

### 3. Putting too much logic in destructors

Destructors should usually focus on cleanup, not complex business logic.

### 4. Managing raw resources carelessly

If a destructor is responsible for cleanup, ownership must be very clear.

## Best Practices

- initialize objects into valid states immediately
- prefer member initializer lists
- use RAII consistently
- avoid custom destructors unless resource ownership requires them
- let standard library types manage resources when possible

## Summary

Constructors and destructors are not just syntax for object creation and destruction.

They define:

- how objects begin
- how they remain valid
- how they clean up

And from that foundation comes one of the strongest ideas in C++:

- safe, automatic lifetime-based resource management

## FAQ

### Can a class have multiple constructors?

Yes. This is called constructor overloading.

### Does every class need a destructor?

No. Many classes rely perfectly well on compiler-generated behavior and RAII through standard members.

### Why are initializer lists important?

Because members are initialized directly, which is often more correct and efficient than assigning later.

