---
title: Concepts and Ranges in Modern C++
description: Learn how C++20 concepts and ranges improve generic programming, make template code clearer, and reduce iterator-heavy boilerplate.
tags:
  - C++
  - C++20
  - Concepts
  - Ranges
keywords:
  - concepts in c++
  - ranges in c++
  - c++20 concepts ranges
  - generic programming c++
sidebar_label: Concepts and Ranges
---

import AdBanner from '@site/src/components/AdBanner';

# Concepts and Ranges in Modern C++



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

Before C++20, generic programming often meant powerful code with poor diagnostics. Templates could do remarkable things, but the error messages were often hard to read and the requirements on a type were frequently implicit instead of clearly stated.

Concepts and ranges improved that situation in a serious way.

<AdBanner />

## Table of Contents

1. [Why concepts matter](#why-concepts-matter)
2. [From unconstrained templates to constrained ones](#from-unconstrained-templates-to-constrained-ones)
3. [Writing simple concepts](#writing-simple-concepts)
4. [Standard library concepts](#standard-library-concepts)
5. [Why ranges matter](#why-ranges-matter)
6. [Range-based pipelines](#range-based-pipelines)
7. [Practical examples](#practical-examples)
8. [Common mistakes](#common-mistakes)
9. [Best practices](#best-practices)
10. [FAQ](#faq)

## Why concepts matter

Concepts let you express what a template parameter must support.

Without concepts, code often looked like this:

```cpp
template <typename T>
T add(T a, T b) {
    return a + b;
}
```

This works only if `T` supports `operator+`, but that requirement is invisible until compilation fails somewhere inside the template body.

With concepts, you can say what you mean:

```cpp
#include <concepts>

template <std::integral T>
T add(T a, T b) {
    return a + b;
}
```

That improves:

- readability
- diagnostics
- API design
- maintenance of template-heavy code

## From unconstrained templates to constrained ones

Concepts move type requirements from hidden assumptions into the interface itself.

```cpp
#include <concepts>

template <typename T>
concept Addable = requires(T a, T b) {
    a + b;
};

template <Addable T>
T sum(T a, T b) {
    return a + b;
}
```

Now the template communicates intent directly.

## Writing simple concepts

A concept is essentially a compile-time predicate.

```cpp
#include <concepts>

template <typename T>
concept Printable = requires(T value) {
    { value.size() } -> std::convertible_to<std::size_t>;
};
```

This says the type must have a `size()` member returning something convertible to `std::size_t`.

You can then use it like this:

```cpp
template <Printable T>
void describe(const T& obj) {
    // ...
}
```

## Standard library concepts

The standard library already provides useful concepts such as:

- `std::integral`
- `std::floating_point`
- `std::same_as`
- `std::derived_from`
- `std::convertible_to`
- `std::invocable`

These make many template APIs much clearer without inventing custom machinery.

## Why ranges matter

Traditional STL algorithms often use iterator pairs:

```cpp
std::sort(v.begin(), v.end());
```

That style is fine, but ranges make generic code more composable and expressive.

```cpp
#include <algorithm>
#include <ranges>
#include <vector>

std::vector<int> v{5, 2, 9, 1};
std::ranges::sort(v);
```

Ranges let algorithms operate directly on range-like objects, and views allow lazy transformations without building intermediate containers immediately.

## Range-based pipelines

One of the nicest parts of ranges is view composition.

```cpp
#include <iostream>
#include <ranges>
#include <vector>

int main() {
    std::vector<int> values{1, 2, 3, 4, 5, 6};

    auto pipeline = values
        | std::views::filter([](int x) { return x % 2 == 0; })
        | std::views::transform([](int x) { return x * x; });

    for (int v : pipeline) {
        std::cout << v << ' ';
    }
    std::cout << '\n';
}
```

This improves readability when used carefully.

## Practical Examples

## Practical Example 1: Restrict a template with a concept

```cpp
#include <concepts>
#include <iostream>

template <std::integral T>
T increment(T value) {
    return value + 1;
}

int main() {
    std::cout << increment(10) << '\n';
}
```

This avoids accidental misuse with unsupported types.

## Practical Example 2: Sort with ranges

```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
#include <vector>

int main() {
    std::vector<int> values{9, 4, 1, 7};
    std::ranges::sort(values);

    for (int v : values) {
        std::cout << v << ' ';
    }
    std::cout << '\n';
}
```

## Practical Example 3: Filter and transform a range

```cpp
#include <iostream>
#include <ranges>
#include <vector>

int main() {
    std::vector<int> values{1, 2, 3, 4, 5, 6};

    auto even_squares = values
        | std::views::filter([](int x) { return x % 2 == 0; })
        | std::views::transform([](int x) { return x * x; });

    for (int v : even_squares) {
        std::cout << v << ' ';
    }
    std::cout << '\n';
}
```

## Common mistakes

### Overengineering tiny templates with too many custom concepts

Concepts should clarify intent, not turn simple code into a taxonomy exercise.

### Forgetting that views are lazy

A range pipeline may not compute anything until it is iterated.

### Assuming ranges always improve performance automatically

Ranges improve structure and expressiveness, but performance still depends on the actual operations and data flow.

### Replacing all familiar STL style immediately

This usually creates churn. Adopt ranges where they clearly improve clarity.

## Best practices

- Use standard concepts before inventing your own.
- Keep custom concepts narrowly focused.
- Use ranges when they improve readability, not just because they are new.
- Remember that iterator-based algorithms are still valid and useful.
- Treat concepts as part of API design, not just syntax decoration.

## FAQ

## Are concepts just nicer `enable_if`?

In many practical cases, yes. They express constraints more directly and produce better diagnostics.

## Do I need concepts for every template?

No. Use them where requirements matter and where they improve clarity.

## Are ranges replacing the STL?

No. Ranges are an evolution of the STL style, not a separate world.

## Should beginners learn concepts and ranges early?

They should learn the classic STL model first, then adopt concepts and ranges once templates and iterators make sense.

## More Articles

- [Templates](../advanced/templates.md)
- [SFINAE](./sfinae.md)
- [constexpr](./constexpr.md)
