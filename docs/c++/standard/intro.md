---
title: Introduction to C++ Standards - Evolution from C++98 to C++23
description: A complete guide to C++ standards history and evolution. Learn what each C++ version introduced, how the standardization process works, which compiler supports what, and how to choose the right standard for your project.
keywords:
  - C++ Standards
  - C++ versions history
  - C++11 to C++23
  - ISO C++ standard
  - C++ evolution
  - Modern C++ features
  - C++ standard timeline
  - C++ compiler support
  - C++ standardization process
tags:
  - C++
  - Standard C++
  - C++ Standards
  - Modern C++
  - C++ History
---

import AdBanner from '@site/src/components/AdBanner';

# Introduction to C++ Standards



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

C++ is not a single static language. It evolves through a formal standardization process, with new versions published every few years. Each version adds features, fixes mistakes, and changes what is considered good practice.

Understanding the standards matters because it tells you which features are available, why certain code patterns exist, and how to reason about portability and compiler support.

This article covers the full history of C++ standards, what each version introduced, and how to choose the right standard for your work.

<div>
  <AdBanner />
</div>

## Table of Contents

1. [How C++ standardization works](#how-c-standardization-works)
2. [The full timeline](#the-full-timeline)
3. [C++98 / C++03 — the foundation](#c98--c03--the-foundation)
4. [C++11 — the modern revolution](#c11--the-modern-revolution)
5. [C++14 — polish and refinement](#c14--polish-and-refinement)
6. [C++17 — practical additions](#c17--practical-additions)
7. [C++20 — major expansion](#c20--major-expansion)
8. [C++23 — the latest standard](#c23--the-latest-standard)
9. [How to choose a standard for your project](#how-to-choose-a-standard-for-your-project)
10. [Compiler support overview](#compiler-support-overview)
11. [Common mistakes](#common-mistakes)
12. [FAQ](#faq)

## How C++ Standardization Works

C++ is standardized by ISO (International Organization for Standardization) through the working group **WG21**. The process works like this:

1. **Proposals** — developers submit papers proposing new features or changes.
2. **Discussion** — the committee reviews, debates, and refines proposals.
3. **Voting** — features are voted on through multiple rounds.
4. **Publication** — the final standard is published as an ISO document.

This process takes years. A feature might be proposed in 2015, accepted in 2017, and officially published in 2020. That is why you sometimes see features labeled "C++20" even though they were available in compilers before the official publication.

The main compilers (GCC, Clang, MSVC) often implement features before the standard is finalized. This is called **experimental support** and is usually enabled with a flag like `-std=c++2a` (before finalization) or `-std=c++20` (after finalization).

## The Full Timeline

| Standard | Year | Key Theme |
|----------|------|-----------|
| C++98 | 1998 | First ISO standard |
| C++03 | 2003 | Bug fixes to C++98 |
| C++11 | 2011 | Modern C++ begins |
| C++14 | 2014 | Refinement of C++11 |
| C++17 | 2017 | Practical additions |
| C++20 | 2020 | Major expansion |
| C++23 | 2023 | Latest standard |
| C++26 | 2026 | In development |

The gap between standards has been roughly 3 years since C++11. Each version builds on the previous one.

<div>
  <AdBanner />
</div>

## C++98 / C++03 — The Foundation

C++98 was the first international standard. C++03 was a minor update that fixed defect reports but added no new features.

What C++98 gave us:

- **Classes and objects** — the core OOP model
- **Templates** — generic programming
- **STL** — containers, algorithms, iterators
- **Exceptions** — error handling via `try`/`catch`
- **Namespaces** — avoiding name collisions
- **Operator overloading** — extending operators for user types

What C++98 lacked:

- No `auto` for type deduction
- No range-based for loops
- No move semantics
- No lambdas
- No smart pointers in the standard library
- Verbose and error-prone syntax for many common patterns

Most legacy C++ codebases still contain C++98-era patterns. Understanding this era helps you read and maintain older code.

## C++11 — The Modern Revolution

C++11 was the most important update to C++. It fundamentally changed how C++ is written and is often called "the new C++."

Key features:

| Feature | What It Does |
|---------|-------------|
| `auto` type deduction | Compiler deduces the type for you |
| Range-based for loops | `for (auto& x : vec)` instead of iterators |
| Move semantics | Transferring resources instead of copying |
| `nullptr` | Type-safe null pointer (replaces `NULL`) |
| Lambdas | Anonymous functions for callbacks and algorithms |
| `constexpr` | Compile-time function evaluation |
| Smart pointers | `unique_ptr`, `shared_ptr`, `weak_ptr` in `<memory>` |
| `enum class` | Scoped enumerations |
| Uniform initialization | `{}` syntax for all types |
| Variadic templates | Templates that accept any number of arguments |
| `decltype` | Get the type of an expression |
| `static_assert` | Compile-time assertions |
| `thread` and `mutex` | Standard threading and synchronization |
| Initializer lists | `std::initializer_list` for convenient initialization |

Example of C++11 style:

```cpp
#include <vector>
#include <algorithm>
#include <memory>

int main() {
    // auto type deduction
    auto numbers = std::vector{1, 2, 3, 4, 5};

    // range-based for
    for (const auto& n : numbers) {
        // process n
    }

    // lambda
    std::sort(numbers.begin(), numbers.end(),
        [](int a, int b) { return a > b; });

    // smart pointer
    auto ptr = std::make_unique<std::string>("hello");

    return 0;
}
```

If you are still writing C++98-style code, learning C++11 features is the single biggest improvement you can make.

## C++14 — Polish and Refinement

C++14 was a smaller release that fixed pain points from C++11.

Key features:

| Feature | What It Does |
|---------|-------------|
| Generic lambdas | `auto` parameters in lambdas |
| Variable templates | Templates for variables, not just types |
| `constexpr` relaxed | More code allowed in `constexpr` functions |
| `std::make_unique` | Safer way to create `unique_ptr` |
| Return type deduction | Compiler deduces function return types |
| Binary literals | `0b1010` syntax |
| Digit separators | `1'000'000` for readability |

```cpp
// Generic lambda (C++14)
auto add = [](auto a, auto b) { return a + b; };
int x = add(3, 4);       // works with ints
double y = add(1.5, 2.5); // works with doubles

// Variable template (C++14)
template<typename T>
constexpr T pi = T(3.14159265358979);

auto r = pi<double>;  // 3.14159...
```

C++14 did not introduce paradigm-shifting features, but it made C++11 more comfortable to use.

## C++17 — Practical Additions

C++17 focused on practical, everyday improvements.

Key features:

| Feature | What It Does |
|---------|-------------|
| `std::optional` | A value that might not exist |
| `std::variant` | Type-safe union |
| `std::any` | Type-erased value container |
| `std::string_view` | Non-owning string reference |
| Structured bindings | `auto [key, value] = map_entry;` |
| `if constexpr` | Compile-time branching |
| `std::filesystem` | File system operations |
| `std::byte` | Explicit byte type |
| Nested namespaces | `namespace A::B::C` |
| Class template argument deduction | `std::pair{1, 2.0}` without template args |

```cpp
#include <optional>
#include <string_view>
#include <map>

// std::optional
std::optional<int> findValue(const std::string& key) {
    auto it = data.find(key);
    if (it != data.end()) return it->second;
    return std::nullopt;
}

auto result = findValue("key");
if (result) {
    // use *result
}

// string_view — no allocation, no copy
void print(std::string_view sv) {
    // read-only access to any string-like data
}

// Structured bindings
for (const auto& [key, value] : myMap) {
    // key and value are directly accessible
}
```

C++17 is the minimum standard most modern C++ codebases target today.

<div>
  <AdBanner />
</div>

## C++20 — Major Expansion

C++20 was the second most important update after C++11. It added several large features.

Key features:

| Feature | What It Does |
|---------|-------------|
| Concepts | Constraints on template parameters |
| Ranges | Composable range algorithms |
| Coroutines | Asymmetric coroutine support |
| Modules | Alternative to header files |
| `std::format` | Type-safe string formatting |
| `std::span` | Non-owning view over contiguous data |
| Three-way comparison | `<=>` spaceship operator |
| `std::chrono` calendar and time zones | Date and time utilities |
| `std::jthread` | Cooperative thread with auto-join |

```cpp
#include <concepts>
#include <ranges>

// Concepts — constrain templates
template<typename T>
concept Numeric = std::integral<T> || std::floating_point<T>;

template<Numeric T>
T add(T a, T b) { return a + b; }

// Ranges — composable algorithms
auto result = numbers
    | std::views::filter([](int n) { return n > 0; })
    | std::views::transform([](int n) { return n * 2; });

// std::format
std::string msg = std::format("Hello, {}! You have {} messages.", name, count);
```

C++20 is where modern C++ really starts feeling different from C++17.

## C++23 — The Latest Standard

C++23 is the most recent published standard. It builds on C++20 with improvements and new utilities.

Key features:

| Feature | What It Does |
|---------|-------------|
| `std::expected` | Error handling without exceptions |
| `std::print` / `std::println` | Simple output (replaces cout for many cases) |
| `std::mdspan` | Multidimensional array view |
| `std::flat_map` | Sorted flat container |
| `std::generator` | Coroutine-based generator |
| `std::stacktrace` | Stack trace capture |
| `import std;` | Import the entire standard library |
| `std::ranges` improvements | More range adaptors and algorithms |
| `if consteval` | Compile-time evaluation context |
| `std::move_only_function` | Move-only callable wrapper |

```cpp
#include <expected>
#include <print>

// std::expected — error handling without exceptions
std::expected<int, std::string> divide(int a, int b) {
    if (b == 0) return std::unexpected("division by zero");
    return a / b;
}

auto result = divide(10, 0);
if (!result) {
    std::println("Error: {}", result.error());
}

// std::print — simple output
std::println("Value: {}", 42);
```

C++23 is still gaining compiler support. Check your compiler version before using these features.

## How to Choose a Standard for Your Project

| Situation | Recommended Standard |
|-----------|---------------------|
| Maintaining legacy code | Keep existing standard, migrate gradually |
| New project with full compiler control | C++20 or C++23 |
| Cross-platform with older compilers | C++17 |
| Maximum portability needed | C++14 or C++17 |
| Library development | C++17 minimum, C++20 features optional |
| Learning new features | C++20 or C++23 |

The practical advice: use the newest standard your compilers and target platforms support. C++17 is the safe minimum for new projects. C++20 is ideal if your toolchain allows it.

## Compiler Support Overview

| Feature | GCC | Clang | MSVC |
|---------|-----|-------|------|
| C++17 | 7+ | 5+ | 19.14+ |
| C++20 | 10+ | 10+ | 19.29+ |
| C++23 | 13+ | 17+ | 19.36+ |
| Concepts | 10+ | 10+ | 19.29+ |
| Ranges | 10+ | 10+ | 19.29+ |
| Modules | 15+ | 15+ | 19.26+ |
| Coroutines | 10+ | 14+ | 19.28+ |
| `std::expected` | 12+ | 16+ | 19.33+ |

Always check the latest status on [cppreference.com](https://cppreference.com) for the most accurate compiler support information.

## Common Mistakes

**1. Using C++11 features without understanding them**

Range-based for loops, auto, and lambdas are powerful but can hide important details. Make sure you understand what the compiler is doing, not just the syntax.

**2. Mixing standard versions inconsistently**

If your project uses C++17, do not write C++98 patterns out of habit. Use `std::optional` instead of output parameters, `std::string_view` instead of `const std::string&`, structured bindings instead of `.first`/`.second`.

**3. Assuming features are available everywhere**

`std::format` is C++20. `std::expected` is C++23. If you use them, check compiler support on all target platforms. The compile error will be cryptic if the feature is not available.

**4. Ignoring the standard library**

Many developers focus on language features and ignore the standard library. `std::filesystem`, `std::chrono`, `std::ranges`, and `std::format` are all part of the standard and save significant effort.

**5. Not setting the standard in your build system**

Always explicitly set the C++ standard in your CMake or build configuration. Do not rely on compiler defaults.

```cmake
# In CMakeLists.txt
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
```

<div>
  <AdBanner />
</div>

## FAQ

**Q: Should I learn C++98 first?**

No. Start with C++17 or later. Understanding C++98 is useful for maintaining old code, but it is not the right starting point for learning.

**Q: Is C++23 production-ready?**

For most features, yes. GCC, Clang, and MSVC support most C++23 features. Always check the specific feature you need on cppreference.com.

**Q: What is the difference between `-std=c++17` and `-std=c++1z`?**

`-std=c++1z` was the experimental flag used before C++17 was finalized. Use `-std=c++17` now. The same pattern applies: `-std=c++2a` became `-std=c++20`.

**Q: Do I need to learn all versions in order?**

No. Learn the current standard (C++17 or C++20) and pick up older features as needed when reading existing code. The standard versions are cumulative — C++20 includes everything from C++17, which includes C++14, and so on.

**Q: How do I check which standard my compiler is using?**

```bash
# GCC/Clang
g++ -dM -E -x c++ /dev/null | grep __cplusplus

# Or write a simple check
#include <iostream>
int main() {
    std::cout << "C++ version: " << __cplusplus << std::endl;
}
// C++17 outputs: 201703L
// C++20 outputs: 202002L
// C++23 outputs: 202302L
```

## Related Articles

- [C++11](./C++11.md) — Modern C++ features in detail
- [C++14](./c++14.md) — Refinement features
- [C++17](./c++17.md) — Practical additions
- [C++23](./c++23.md) — Latest standard features
- [Concepts and Ranges](../expert/concepts-and-ranges.md) — C++20 features deep dive
- [constexpr](../expert/constexpr.md) — Compile-time programming
- [Templates](../advanced/templates.md) — Generic programming fundamentals
