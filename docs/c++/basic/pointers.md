---
title: Pointers in C++ - Address, Dereference, Null Pointers, Arrays and Memory Basics
description: Learn pointers in C++ from first principles. Understand addresses, dereferencing, null pointers, pointer arithmetic, arrays, function parameters, memory risks, and why pointers still matter in modern C++.
keywords:
  - pointers in c++
  - address operator in c++
  - dereference operator in c++
  - null pointer in c++
  - pointer arithmetic c++
  - arrays and pointers in c++
tags:
  - C++
  - Pointers
  - Memory
  - Beginner C++
---

import AdBanner from '@site/src/components/AdBanner';

# Pointers in C++



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

Pointers are one of the defining features of C++.

They are also one of the main reasons beginners either start understanding how memory really works or start fearing the language.

Both reactions are normal.

Pointers matter because C++ is not just a high-level language for writing business logic. It is also a systems language that gives you direct control over memory and object access. Pointers are part of that control.

If you want to understand:

- dynamic memory
- references properly
- arrays deeply
- data structures
- system APIs
- smart pointers

then you cannot skip raw pointers.

<div>
  <AdBanner />
</div>

## Table of Contents

1. [What is a pointer?](#what-is-a-pointer)
2. [Address operator and dereference operator](#address-operator-and-dereference-operator)
3. [Declaring and using pointers](#declaring-and-using-pointers)
4. [Null pointers](#null-pointers)
5. [Pointers and functions](#pointers-and-functions)
6. [Pointers and arrays](#pointers-and-arrays)
7. [Pointer arithmetic](#pointer-arithmetic)
8. [Common pointer dangers](#common-pointer-dangers)
9. [Pointers vs references](#pointers-vs-references)
10. [Why pointers still matter in modern c++](#why-pointers-still-matter-in-modern-c)
11. [Best practices](#best-practices)
12. [FAQ](#faq)

## What is a Pointer?

A pointer is a variable that stores the address of another object.

Example:

```cpp
int value = 42;
int* ptr = &value;
```

Here:

- `value` stores the integer `42`
- `&value` gives the memory address of `value`
- `ptr` stores that address

So a pointer does not directly hold the original value. It holds where that value lives.

## Address Operator and Dereference Operator

### Address operator: `&`

This gives you the address of an object.

```cpp
int x = 10;
int* p = &x;
```

### Dereference operator: `*`

This gives access to the object located at the stored address.

```cpp
std::cout << *p << '\n';
```

If `p` points to `x`, then `*p` refers to `x`.

That means:

```cpp
*p = 99;
```

changes the original variable.

## Declaring and Using Pointers

Basic syntax:

```cpp
int* ptr;
```

This means:

- `ptr` is a pointer
- it points to an `int`

Example:

```cpp
int score = 75;
int* score_ptr = &score;

std::cout << score << '\n';
std::cout << *score_ptr << '\n';
```

Both print the same value, but one is direct access and the other is indirect access through a pointer.

## Null Pointers

Sometimes a pointer should point to nothing.

In modern C++, use:

```cpp
int* ptr = nullptr;
```

This is safer and clearer than older forms like `0` or `NULL`.

### Why null pointers matter

If you dereference a null pointer:

```cpp
std::cout << *ptr;
```

the behavior is invalid and can crash the program.

So before dereferencing a pointer that may be empty, check it:

```cpp
if (ptr != nullptr) {
    std::cout << *ptr << '\n';
}
```

## Pointers and Functions

Pointers can be passed to functions.

```cpp
void print_value(const int* ptr) {
    if (ptr) {
        std::cout << *ptr << '\n';
    }
}
```

Call it like this:

```cpp
int value = 8;
print_value(&value);
```

This is useful when:

- a function should work with an object indirectly
- null should be a valid “no object” state
- C-style APIs or system APIs are involved

## Pointers and Arrays

Pointers and arrays are closely related in C++.

Example:

```cpp
int numbers[4] = {10, 20, 30, 40};
int* ptr = numbers;
```

Now:

```cpp
std::cout << *ptr << '\n';       // 10
std::cout << *(ptr + 1) << '\n'; // 20
```

This works because the array name often decays into a pointer to its first element.

That is one of the reasons arrays and pointers are taught together so often.

## Pointer Arithmetic

Pointer arithmetic moves in units of the pointed-to type, not bytes.

```cpp
int arr[3] = {5, 10, 15};
int* p = arr;
```

Then:

```cpp
p + 1
```

points to the next integer, not just the next byte in memory.

This is powerful, but also dangerous if used carelessly.

## Common Pointer Dangers

Pointers are powerful because they let you control memory access directly.

They are dangerous for the same reason.

### 1. Uninitialized pointers

```cpp
int* ptr;
```

This pointer contains garbage unless initialized.

Better:

```cpp
int* ptr = nullptr;
```

### 2. Dereferencing null

```cpp
int* ptr = nullptr;
std::cout << *ptr; // invalid
```

### 3. Dangling pointers

A dangling pointer points to memory that is no longer valid.

This often happens after:

- returning address of a local variable
- deleting heap memory and still using the pointer
- storing pointers to objects whose lifetime ended

### 4. Out-of-bounds access

Pointer arithmetic does not automatically protect you.

If you move beyond the valid range of an array, the behavior is invalid.

## Pointers vs References

Pointers and references both allow indirect access, but they are not the same.

Pointers:

- can be null
- can be reseated
- require explicit dereferencing

References:

- must refer to a valid object
- cannot normally be null
- behave like an alias

If null is meaningful, a pointer often makes more sense.

If an object must exist, a reference is usually cleaner.

## Why Pointers Still Matter in Modern C++

Modern C++ encourages:

- smart pointers for ownership
- references for guaranteed objects
- STL containers for dynamic storage

That is good.

But raw pointers still matter because they are still used for:

- low-level programming
- non-owning access
- legacy APIs
- performance-critical internals
- interoperability with C libraries

So modern C++ does not eliminate pointers. It teaches you to use them more deliberately.

## A Practical Example

```cpp
#include <iostream>

void set_to_zero(int* ptr) {
    if (ptr != nullptr) {
        *ptr = 0;
    }
}

int main() {
    int value = 25;
    set_to_zero(&value);
    std::cout << value << '\n';
}
```

This is simple, but it shows the key idea:

- pass address
- access through pointer
- modify original object

## Best Practices

- initialize pointers immediately
- prefer `nullptr` over `NULL`
- check nullable pointers before dereferencing
- avoid raw owning pointers in modern C++
- use references when null is not valid
- use smart pointers when ownership is involved

## Summary

Pointers are not just a difficult syntax topic. They are a direct bridge between C++ code and memory.

If you understand:

- addresses
- dereferencing
- null pointers
- pointers with arrays
- pointer safety issues

then many later topics in C++ become far easier to understand.

## FAQ

### What is the difference between `ptr` and `*ptr`?

`ptr` is the address. `*ptr` is the object stored at that address.

### Should beginners avoid pointers?

No. Beginners should learn them carefully, not avoid them.

### Are raw pointers obsolete in modern C++?

No. They are still useful for non-owning access and low-level programming. But raw ownership should usually be replaced with smart pointers.

### Is `nullptr` better than `NULL`?

Yes. In modern C++, `nullptr` is the correct and clearer choice.

