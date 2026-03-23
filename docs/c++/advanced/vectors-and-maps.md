---
title: Vectors and Maps in C++ - Choosing the Right STL Container for Real Code
description: Learn std::vector, std::map, and std::unordered_map in C++ with practical examples, performance tradeoffs, iteration patterns, lookup strategies, and best practices for real-world STL usage.
keywords:
  - vector in c++
  - map in c++
  - unordered_map in c++
  - stl vector c++
  - associative containers c++
  - c++ container selection
tags:
  - C++
  - STL
  - vector
  - map
  - unordered_map
---

import AdBanner from '@site/src/components/AdBanner';

# Vectors and Maps in C++

Once you begin using the STL seriously, two container families show up everywhere:

- sequence containers, especially `std::vector`
- key-value containers, especially `std::map` and `std::unordered_map`

If you learn these well, a large amount of everyday C++ code starts making sense.

This article is not just about syntax. It is about choosing the right container based on:

- memory layout
- lookup needs
- ordering requirements
- performance tradeoffs

That is what turns STL usage from “I know the method names” into actual engineering judgment.

<div>
  <AdBanner />
</div>

## Table of Contents

1. [Why vectors and maps matter](#why-vectors-and-maps-matter)
2. [std::vector overview](#stdvector-overview)
3. [Why vector is often the default](#why-vector-is-often-the-default)
4. [Working with vector](#working-with-vector)
5. [std::map overview](#stdmap-overview)
6. [std::unordered_map overview](#stdunordered_map-overview)
7. [map vs unordered_map](#map-vs-unordered_map)
8. [Practical examples](#practical-examples)
9. [Container selection advice](#container-selection-advice)
10. [Common mistakes](#common-mistakes)
11. [FAQ](#faq)

## Why Vectors and Maps Matter

In real C++ programs, you constantly need to answer two different kinds of storage questions:

1. I have a sequence of values. Which container should hold them?
2. I have keys and associated values. Which container should model that mapping?

For the first case, `std::vector` is often the best starting point.

For the second case, `std::map` and `std::unordered_map` are the most common choices.

That is why these containers deserve focused study.

## std::vector Overview

`std::vector` is a dynamic array with contiguous storage.

Example:

```cpp
#include <vector>

std::vector<int> values{10, 20, 30};
```

You can add more elements dynamically:

```cpp
values.push_back(40);
```

### Important characteristics of vector

- elements are stored contiguously
- random access is fast
- iteration is cache-friendly
- growth is dynamic

That combination is why `vector` is one of the most important containers in all of C++.

## Why vector is Often the Default

Many C++ developers follow a simple and useful rule:

> If you need a sequence and you do not yet have a strong reason to choose something else, start with `std::vector`.

Why?

Because vectors are:

- simple
- fast in practice
- memory efficient
- easy to reason about

This matters more than beginners often realize. A lot of people jump to more complex containers too early when `vector` would already be the best tool.

## Working with Vector

### Access

```cpp
std::vector<int> scores{90, 85, 78};
std::cout << scores[1] << '\n';
```

### Safer access with `at`

```cpp
std::cout << scores.at(1) << '\n';
```

`at()` performs bounds checking, while `operator[]` does not.

### Iteration

```cpp
for (int score : scores) {
    std::cout << score << '\n';
}
```

### Modification

```cpp
scores.push_back(100);
scores.pop_back();
```

### Capacity-related ideas

Vectors may reallocate when they grow. That means:

- addresses of elements may change
- iterators may become invalid

This matters when you keep pointers or iterators to vector elements.

## std::map Overview

`std::map` stores key-value pairs in sorted key order.

Example:

```cpp
#include <map>
#include <string>

std::map<std::string, int> compiler_scores;
compiler_scores["gcc"] = 95;
compiler_scores["clang"] = 98;
```

Important characteristics:

- keys are unique
- data is ordered by key
- lookup is typically logarithmic

This makes `map` useful when:

- sorted traversal matters
- ordered output matters
- predictable tree-based structure is useful

## std::unordered_map Overview

`std::unordered_map` also stores key-value pairs, but it uses hashing instead of ordering.

Example:

```cpp
#include <unordered_map>

std::unordered_map<std::string, int> counts;
counts["clang"] = 4;
counts["gcc"] = 3;
```

Important characteristics:

- keys are unique
- element order is not sorted
- average lookup is usually very fast

This is often the best choice when:

- key-based lookup is the main goal
- order does not matter

## map vs unordered_map

This is one of the most common STL design choices.

### Use `std::map` when

- you need sorted keys
- you want stable ordered traversal
- you want tree-based semantics

### Use `std::unordered_map` when

- fast average lookup matters most
- ordering is irrelevant
- hashing fits the workload well

### A practical way to think about it

- `map` = ordered dictionary
- `unordered_map` = fast hash table

That is a good first mental model.

## Practical Examples

## Practical Example 1: Frequency Counting

```cpp
#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

int main() {
    std::vector<std::string> compilers{"gcc", "clang", "gcc", "clang", "clang"};
    std::unordered_map<std::string, int> freq;

    for (const auto& compiler : compilers) {
        ++freq[compiler];
    }

    for (const auto& [name, count] : freq) {
        std::cout << name << ": " << count << '\n';
    }
}
```

This is a classic `unordered_map` use case.

## Practical Example 2: Ordered Reporting

```cpp
#include <iostream>
#include <map>
#include <string>

int main() {
    std::map<std::string, int> scores;
    scores["clang"] = 98;
    scores["gcc"] = 95;
    scores["msvc"] = 88;

    for (const auto& [name, score] : scores) {
        std::cout << name << " -> " << score << '\n';
    }
}
```

The output is ordered by key automatically.

That is where `map` shines.

## Practical Example 3: Why vector remains essential

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<int> values{7, 2, 9, 1, 5};
    std::sort(values.begin(), values.end());

    for (int value : values) {
        std::cout << value << ' ';
    }
}
```

This is another reason vector is so central:

- it works naturally with STL algorithms
- it offers strong locality
- it often outperforms more complicated containers for many real workloads

## Container Selection Advice

Here is a practical selection rule set:

- start with `vector` for sequential data
- use `map` when sorted key order matters
- use `unordered_map` when key lookup matters more than order

Do not pick containers only by theoretical complexity tables. Real code also depends on:

- memory layout
- cache behavior
- mutation patterns
- iteration frequency

## Common Mistakes

### 1. Choosing `map` when order is irrelevant

Sometimes `unordered_map` is the simpler and faster choice.

### 2. Choosing complex containers before trying vector

Many problems that beginners solve with heavier structures are already solved well by `vector`.

### 3. Forgetting that vector reallocation can invalidate references and iterators

This is a real source of subtle bugs.

### 4. Assuming unordered_map always wins

Hash-based containers are powerful, but not automatically better for every workload.

## Best Practices

- use `vector` as the first candidate for sequence data
- use `map` when sorted order is meaningful
- use `unordered_map` for fast key-based access when order does not matter
- choose containers based on actual access patterns
- write code other C++ developers can immediately recognize and trust

## Summary

`std::vector`, `std::map`, and `std::unordered_map` are some of the most useful containers in practical C++.

They solve different problems:

- `vector` for sequential dynamic storage
- `map` for ordered key-value storage
- `unordered_map` for fast hash-based lookup

Understanding when to choose each one is a major part of STL fluency.

## FAQ

### Should I always use vector first?

For sequence-like data, often yes. It is a strong default.

### Is unordered_map always faster than map?

Not in every situation. Average lookup is often faster, but ordering, memory behavior, and workload shape still matter.

### Why is vector so important in C++?

Because it combines simplicity, performance, dynamic sizing, and strong compatibility with STL algorithms.
