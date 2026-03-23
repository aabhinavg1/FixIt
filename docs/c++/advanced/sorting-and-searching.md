---
title: Sorting and Searching in C++ - STL Algorithms, Comparators and Practical Usage
description: Learn sorting and searching in C++ with std::sort, std::find, std::binary_search, custom comparators, and STL algorithm design. Understand when and how to use standard algorithms correctly.
keywords:
  - sorting in c++
  - std sort c++
  - searching in c++
  - std find c++
  - binary search c++
  - stl algorithms c++
tags:
  - C++
  - STL
  - Algorithms
  - Sorting
  - Searching
---

import AdBanner from '@site/src/components/AdBanner';

# Sorting and Searching in C++

Sorting and searching are among the most common operations in programming.

Beginners often first learn them through handwritten loops or textbook algorithms. That is useful for understanding the idea, but in practical modern C++, you should also learn the standard algorithm tools immediately.

Why?

Because the STL already gives you:

- tested implementations
- clear interfaces
- better readability
- reusable algorithm patterns

This article focuses on practical C++ use, not just algorithm theory.

<div>
  <AdBanner />
</div>

## Table of Contents

1. [Why use STL algorithms?](#why-use-stl-algorithms)
2. [std::sort](#stdsort)
3. [Custom comparators](#custom-comparators)
4. [std::find](#stdfind)
5. [std::binary_search](#stdbinary_search)
6. [Choosing the right search approach](#choosing-the-right-search-approach)
7. [Practical examples](#practical-examples)
8. [Common mistakes](#common-mistakes)
9. [FAQ](#faq)

## Why Use STL Algorithms?

STL algorithms matter because they let you express intent directly.

Instead of writing:

- manual loops
- manual comparisons
- custom repetitive search logic

you can write:

- `std::sort`
- `std::find`
- `std::binary_search`

That makes code easier to read and easier to trust.

## std::sort

`std::sort` is one of the most important algorithms in C++.

Example:

```cpp
#include <algorithm>
#include <vector>

std::vector<int> values{4, 2, 5, 1, 3};
std::sort(values.begin(), values.end());
```

Now `values` becomes sorted in ascending order.

### Why std::sort matters

It works with iterator ranges, which means it fits naturally into STL container usage.

That is important because C++ does not tie sorting to just one container type. It separates:

- data storage
- algorithm behavior

That design is one of the deepest strengths of STL.

## Custom Comparators

Sometimes default ascending order is not what you want.

Example:

```cpp
std::sort(values.begin(), values.end(), std::greater<int>{});
```

This sorts in descending order.

You can also use a lambda:

```cpp
std::sort(values.begin(), values.end(),
    [](int a, int b) {
        return a > b;
    });
```

This becomes especially useful for:

- custom objects
- multi-field comparisons
- domain-specific ordering

## std::find

`std::find` searches linearly through a range.

Example:

```cpp
#include <algorithm>
#include <vector>

std::vector<int> values{10, 20, 30, 40};
auto it = std::find(values.begin(), values.end(), 30);
```

If found, `it` points to the matching element.

If not found, `it == values.end()`.

That pattern is very common in STL code.

## std::binary_search

`std::binary_search` is useful when the range is already sorted.

Example:

```cpp
std::vector<int> values{1, 2, 3, 4, 5};
bool found = std::binary_search(values.begin(), values.end(), 3);
```

This returns `true` if the element exists.

### Important rule

The range must already be sorted.

If you call `binary_search` on unsorted data, the result is not meaningful.

## Choosing the Right Search Approach

### Use linear search when

- the range is small
- sorting first is unnecessary
- order is arbitrary
- you just need one quick pass

### Use binary search when

- the data is sorted
- repeated searching matters
- logarithmic search benefits justify maintaining sorted order

This is a performance and design tradeoff, not just a syntax choice.

## Practical Examples

## Practical Example 1: Sorting Numbers

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<int> scores{72, 90, 81, 65, 88};

    std::sort(scores.begin(), scores.end());

    for (int score : scores) {
        std::cout << score << ' ';
    }
}
```

## Practical Example 2: Searching in a Sorted Range

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<int> values{1, 3, 5, 7, 9};

    if (std::binary_search(values.begin(), values.end(), 7)) {
        std::cout << "Found\n";
    } else {
        std::cout << "Not found\n";
    }
}
```

## Practical Example 3: Sorting Custom Objects

```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

struct CompilerResult {
    std::string name;
    int score;
};

int main() {
    std::vector<CompilerResult> results{
        {"gcc", 95},
        {"clang", 98},
        {"msvc", 88}
    };

    std::sort(results.begin(), results.end(),
        [](const CompilerResult& a, const CompilerResult& b) {
            return a.score > b.score;
        });

    for (const auto& result : results) {
        std::cout << result.name << " -> " << result.score << '\n';
    }
}
```

This is a realistic STL pattern and a much better example than sorting only primitive integers forever.

## Common Mistakes

### 1. Writing manual sort loops when std::sort already exists

This often adds bugs and reduces clarity.

### 2. Calling binary_search on unsorted data

This is a logic mistake, not a syntax mistake.

### 3. Using the wrong comparator logic

Custom comparators must define a sensible ordering.

### 4. Forgetting to check against `.end()`

With `std::find`, success and failure are both communicated through iterators.

## Best Practices

- prefer STL algorithms over custom loops when the standard algorithm expresses the intent clearly
- use `std::sort` for ordering sequences
- use `std::find` for straightforward linear search
- use `std::binary_search` only on sorted data
- use lambdas when custom ordering is needed

## Summary

Sorting and searching are not just textbook exercises in C++. They are practical everyday tasks, and STL gives you strong standard tools for both.

The key lesson is not just how to call these algorithms. It is how STL encourages you to think:

- use standard containers
- operate through iterators
- express intent through algorithms

That is modern C++ style.

## FAQ

### Should I learn manual sorting algorithms too?

Yes, for algorithm understanding. But in practical application code, prefer STL algorithms unless you have a strong reason not to.

### Is std::find always slower than binary_search?

Not necessarily in every practical scenario, but binary search is generally better for sorted data and repeated lookups.

### Why is std::sort so important?

Because it is fast, standard, readable, and works naturally with iterator ranges.
