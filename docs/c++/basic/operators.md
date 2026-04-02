---
title: Operators in C++ - Arithmetic, Logical, Comparison, Assignment and Bitwise Guide
description: Learn C++ operators in depth. Understand arithmetic, comparison, logical, assignment, increment, conditional, and bitwise operators with examples, precedence rules, pitfalls, and best practices.
keywords:
  - operators in c++
  - arithmetic operators in c++
  - logical operators in c++
  - comparison operators in c++
  - bitwise operators in c++
  - c++ operator precedence
tags:
  - C++
  - Operators
  - Expressions
  - C++ Basics
---

import AdBanner from '@site/src/components/AdBanner';

# Operators in C++



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

Operators are the mechanism C++ gives you to work with values.

You use operators to:

- add numbers
- compare values
- combine conditions
- assign results
- work with bits
- build expressions that drive real program logic

Most beginners think operators are easy because symbols like `+`, `-`, and `==` look familiar. But operators are one of the earliest places where real bugs start showing up:

- integer division surprises
- using `=` instead of `==`
- precedence mistakes
- signed and unsigned confusion
- subtle behavior with increment operators

So this topic deserves more attention than it usually gets.

<div>
  <AdBanner />
</div>

## Table of Contents

1. [What is an operator?](#what-is-an-operator)
2. [Arithmetic operators](#arithmetic-operators)
3. [Assignment operators](#assignment-operators)
4. [Comparison operators](#comparison-operators)
5. [Logical operators](#logical-operators)
6. [Increment and decrement](#increment-and-decrement)
7. [Bitwise operators](#bitwise-operators)
8. [Conditional operator](#conditional-operator)
9. [Operator precedence](#operator-precedence)
10. [Common mistakes](#common-mistakes)
11. [Best practices](#best-practices)
12. [FAQ](#faq)

## What is an Operator?

An operator is a symbol that tells the compiler to perform an operation on one or more operands.

For example:

```cpp
int sum = 10 + 20;
```

Here:

- `10` and `20` are operands
- `+` is the operator

Operators in C++ are grouped by purpose:

- arithmetic
- assignment
- comparison
- logical
- bitwise
- conditional

## Arithmetic Operators

Arithmetic operators work on numeric values.

### Addition

```cpp
int a = 5 + 3;
```

### Subtraction

```cpp
int b = 10 - 4;
```

### Multiplication

```cpp
int c = 6 * 7;
```

### Division

```cpp
int d = 20 / 5;
```

### Modulus

```cpp
int r = 17 % 5;
```

The modulus operator gives the remainder.

## Integer Division

This is one of the most important early concepts.

```cpp
int x = 5;
int y = 2;
int result = x / y;
```

The result is `2`, not `2.5`.

Why?

Because both operands are integers, so C++ performs integer division.

If you want a decimal result, at least one operand must be floating point:

```cpp
double result = 5.0 / 2;
```

Now the result is `2.5`.

## Assignment Operators

The basic assignment operator is `=`.

```cpp
int count = 10;
```

But C++ also gives compound assignment operators:

- `+=`
- `-=`
- `*=`
- `/=`
- `%=`

Example:

```cpp
int score = 50;
score += 10;   // 60
score *= 2;    // 120
```

These are very common in loops, counters, and accumulators.

## Comparison Operators

Comparison operators produce a boolean result:

- `==`
- `!=`
- `<`
- `>`
- `<=`
- `>=`

Example:

```cpp
int age = 18;
bool adult = age >= 18;
```

This stores `true` in `adult`.

### Equality vs Assignment

This is one of the classic beginner mistakes:

```cpp
if (x = 10) {
    // wrong
}
```

This assigns `10` to `x`.

What you probably meant was:

```cpp
if (x == 10) {
    // correct
}
```

## Logical Operators

Logical operators are used with boolean conditions.

- `&&` logical AND
- `||` logical OR
- `!` logical NOT

Example:

```cpp
bool has_ticket = true;
bool is_adult = true;

if (has_ticket && is_adult) {
    std::cout << "Entry allowed\n";
}
```

### Short-circuit behavior

Logical operators in C++ short-circuit.

That means:

- for `&&`, if the left side is false, the right side is not evaluated
- for `||`, if the left side is true, the right side is not evaluated

Example:

```cpp
if (ptr != nullptr && ptr->ready()) {
    // safe access
}
```

This matters because short-circuiting often prevents crashes.

## Increment and Decrement

C++ has:

- `++`
- `--`

### Prefix

```cpp
++i;
```

### Postfix

```cpp
i++;
```

Both increase the value, but they differ in expression behavior:

- prefix increments first, then returns the updated value
- postfix returns the old value, then increments

Example:

```cpp
int i = 5;
int a = ++i;  // i = 6, a = 6
```

```cpp
int j = 5;
int b = j++;  // b = 5, j = 6
```

In simple loops, this difference often does not matter practically. But in expressions, it matters a lot.

## Bitwise Operators

Bitwise operators work at the bit level.

- `&` bitwise AND
- `|` bitwise OR
- `^` bitwise XOR
- `~` bitwise NOT
- `<<` left shift
- `>>` right shift

Example:

```cpp
unsigned int a = 6;   // 110
unsigned int b = 3;   // 011
unsigned int c = a & b; // 010
```

These are used heavily in:

- systems programming
- embedded code
- graphics
- compression
- performance-sensitive utilities

If you are a beginner, understand what they do conceptually, but do not force them into everyday code where a clearer solution exists.

## Conditional Operator

The conditional operator is:

```cpp
condition ? expr1 : expr2
```

Example:

```cpp
int age = 20;
std::string result = (age >= 18) ? "Adult" : "Minor";
```

This is compact and useful for simple choices, but long nested ternary expressions reduce readability quickly.

## Operator Precedence

Not all operators are evaluated in the same order.

Example:

```cpp
int result = 2 + 3 * 4;
```

This becomes:

```cpp
2 + (3 * 4)
```

So the answer is `14`, not `20`.

Precedence rules are important, but in production code you should not rely on readers memorizing them. Use parentheses when clarity matters.

Better:

```cpp
int result = 2 + (3 * 4);
```

Or:

```cpp
int result = (2 + 3) * 4;
```

## A Realistic Example

```cpp
#include <iostream>

int main() {
    int completed = 18;
    int total = 24;

    double progress = static_cast<double>(completed) / total;
    bool can_certify = (progress >= 0.75) && (total > 0);

    std::cout << "Progress: " << progress << '\n';
    std::cout << std::boolalpha << "Eligible: " << can_certify << '\n';
}
```

This uses:

- assignment
- arithmetic
- casting
- comparison
- logical operators

That is what happens in real code. Operators rarely appear in isolation.

## Common Mistakes

### 1. Using `=` instead of `==`

This is classic and still happens in real code.

### 2. Forgetting integer division

```cpp
int result = 5 / 2; // 2
```

### 3. Overcomplicated expressions

Do not try to be clever with too many operators in one line.

### 4. Misusing increment operators

Expressions like this are hard to reason about:

```cpp
int x = i++ + ++i;
```

Avoid writing code that depends on subtle sequencing behavior.

### 5. Ignoring precedence

If you need to pause and think, use parentheses.

## Best Practices

- use parentheses for readability
- keep expressions simple
- be extra careful with integer division
- use `==` for comparison, not `=`
- avoid clever increment-heavy expressions
- treat bitwise code as specialized code, not casual syntax

## Summary

Operators are the grammar of expressions in C++.

They control how values are:

- computed
- compared
- assigned
- combined

If you understand operators properly, your logic becomes cleaner and your bug rate drops. If you treat them casually, tiny symbols can create large problems.

## FAQ

### What is the difference between `=` and `==`?

`=` assigns a value. `==` compares two values for equality.

### Why does `5 / 2` give `2` in C++?

Because both operands are integers, so integer division is used.

### Should I memorize all precedence rules?

Know the important ones, but prefer parentheses for clarity.

### When should I use bitwise operators?

Use them when you are working with masks, flags, low-level programming, or performance-sensitive binary logic. Not as a replacement for normal logical operations.

