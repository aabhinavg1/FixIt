---
title: Inheritance in C++ - Base Classes, Derived Classes and Design Tradeoffs
description: Learn inheritance in C++ with clear examples. Understand base classes, derived classes, public inheritance, protected and private members, method reuse, is-a relationships, and composition vs inheritance.
keywords:
  - inheritance in c++
  - base class and derived class c++
  - public inheritance c++
  - composition vs inheritance c++
tags:
  - C++
  - Inheritance
  - OOP
  - Class Design
---

import AdBanner from '@site/src/components/AdBanner';

# Inheritance in C++



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

Inheritance is one of the most recognized features of object-oriented programming.

It allows one class to derive from another, so the derived class can reuse or extend parts of the base class.

This sounds straightforward, but inheritance is also one of the most misused design tools in beginner and even intermediate code.

That is why this topic needs to be learned carefully.

The right question is not only:

> How do I write inheritance syntax?

The more important question is:

> When does inheritance actually make sense?

<div>
  <AdBanner />
</div>

## Table of Contents

1. [What is inheritance?](#what-is-inheritance)
2. [Base class and derived class](#base-class-and-derived-class)
3. [Basic syntax](#basic-syntax)
4. [Access control in inheritance](#access-control-in-inheritance)
5. [What inheritance is good for](#what-inheritance-is-good-for)
6. [When inheritance is the wrong tool](#when-inheritance-is-the-wrong-tool)
7. [Composition vs inheritance](#composition-vs-inheritance)
8. [Practical example](#practical-example)
9. [Common mistakes](#common-mistakes)
10. [FAQ](#faq)

## What is Inheritance?

Inheritance allows one class to build on another.

Example:

```cpp
class Animal {
public:
    void eat() {
        std::cout << "Eating\n";
    }
};

class Dog : public Animal {
public:
    void bark() {
        std::cout << "Bark\n";
    }
};
```

Here:

- `Animal` is the base class
- `Dog` is the derived class

`Dog` inherits the behavior of `Animal`, so it can use `eat()`.

## Base Class and Derived Class

The base class provides common members.

The derived class:

- reuses base behavior
- can add new behavior
- can later override virtual behavior

This helps when multiple types share a meaningful common abstraction.

## Basic Syntax

```cpp
class Derived : public Base {
};
```

The `public` here matters.

It controls how inheritance relationships are exposed.

## Access Control in Inheritance

Inside a class, members may be:

- `public`
- `protected`
- `private`

### public members

Accessible from outside the class.

### protected members

Accessible inside the class and derived classes.

### private members

Accessible only inside the class itself.

Example:

```cpp
class Employee {
protected:
    int id;

public:
    void set_id(int value) {
        id = value;
    }
};

class Engineer : public Employee {
public:
    void print_id() {
        std::cout << id << '\n';
    }
};
```

`Engineer` can access `id` because it is protected.

## What Inheritance is Good For

Inheritance works best when:

- there is a real **is-a** relationship
- multiple types share meaningful behavior or interface
- a common abstraction helps reasoning

Examples:

- `Dog` is an `Animal`
- `Rectangle` is a `Shape`
- `CompileTask` is a `Task`

That is different from simply saying:

- `Car` uses an `Engine`

That is not inheritance. That is composition.

## When Inheritance is the Wrong Tool

Beginners often use inheritance just to reuse code.

That is dangerous.

Bad design often starts with things like:

```cpp
class Car : public Engine {
};
```

A car is not an engine.

It has an engine.

That means composition is a better model.

Inheritance is about meaningful abstraction, not lazy code sharing.

## Composition vs Inheritance

Composition means one class contains another as a member.

Example:

```cpp
class Engine {
public:
    void start() {
        std::cout << "Engine started\n";
    }
};

class Car {
private:
    Engine engine;

public:
    void start() {
        engine.start();
    }
};
```

This models the relationship correctly.

### A useful rule

If the relationship is:

- **is-a** → inheritance may fit
- **has-a** → composition is usually better

## Practical Example

```cpp
#include <iostream>
#include <string>

class BuildStep {
public:
    void print_name() const {
        std::cout << name_ << '\n';
    }

protected:
    std::string name_;
};

class CompileStep : public BuildStep {
public:
    CompileStep() {
        name_ = "Compile";
    }
};

class LinkStep : public BuildStep {
public:
    LinkStep() {
        name_ = "Link";
    }
};

int main() {
    CompileStep c;
    LinkStep l;

    c.print_name();
    l.print_name();
}
```

This is a simple example, but it shows inheritance being used to represent a shared concept.

## Common Mistakes

### 1. Using inheritance only for code reuse

This often creates bad class hierarchies.

### 2. Deep inheritance chains

Very deep hierarchies become hard to understand and maintain.

### 3. Exposing too much through protected members

Derived classes should not depend on too much fragile internal detail.

### 4. Ignoring composition

Many problems that beginners solve with inheritance are better solved with composition.

## Best Practices

- use inheritance only for real abstraction relationships
- prefer composition unless inheritance clearly improves the design
- keep hierarchies shallow
- do not force inheritance just because OOP syntax exists
- design the base class around a meaningful common interface

## Summary

Inheritance is powerful, but it is not automatically good design.

Use it when:

- the abstraction is real
- the relationship is meaningful
- the shared interface improves your model

Otherwise, composition is often the safer and clearer choice.

## FAQ

### What is the difference between a base class and a derived class?

The base class provides shared behavior or interface. The derived class builds on it.

### Is inheritance required for OOP in C++?

No. C++ classes are useful even without inheritance. Encapsulation and abstraction matter just as much.

### Which is better: inheritance or composition?

Neither is always better. But composition is often the safer default unless the relationship is clearly an is-a relationship.

