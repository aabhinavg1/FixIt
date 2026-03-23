---
title: File I/O in C++
description: Learn how file streams work in C++, how to read and write files safely, and how file handling fits into real systems programming.
tags:
  - C++
  - File I/O
  - Systems Programming
keywords:
  - file io in c++
  - fstream c++
  - read write file c++
  - ifstream ofstream c++
sidebar_label: File I/O
---

import AdBanner from '@site/src/components/AdBanner';

# File I/O in C++

File I/O is one of the first places where C++ stops being only about language syntax and starts touching the operating system directly. Reading configuration files, writing logs, loading assets, generating reports, and serializing intermediate data all depend on it.

If you understand file I/O well, your code becomes much more practical.

<AdBanner />

## Table of Contents

1. [Why file I/O matters](#why-file-io-matters)
2. [The main stream types](#the-main-stream-types)
3. [Writing files](#writing-files)
4. [Reading files](#reading-files)
5. [Working line by line](#working-line-by-line)
6. [Text vs binary I/O](#text-vs-binary-io)
7. [Error handling](#error-handling)
8. [Practical examples](#practical-examples)
9. [Common mistakes](#common-mistakes)
10. [Best practices](#best-practices)
11. [FAQ](#faq)

## Why file I/O matters

Real systems constantly interact with files:

- compilers read source files
- build tools generate artifacts
- benchmark runners store results
- applications load configuration
- services write logs

This means file handling is not an optional topic for serious C++ work.

## The main stream types

The standard library gives you three common file stream types:

- `std::ifstream` for reading
- `std::ofstream` for writing
- `std::fstream` for both reading and writing

These types live in `<fstream>`.

## Writing files

The simplest write flow opens a file and sends text into it.

```cpp
#include <fstream>

int main() {
    std::ofstream out("report.txt");
    out << "gcc vs clang\n";
    out << "branch-heavy loop: clang faster\n";
}
```

If the file can be opened, writing behaves much like `std::cout`.

Appending instead of overwriting:

```cpp
#include <fstream>

int main() {
    std::ofstream log("run.log", std::ios::app);
    log << "new run finished\n";
}
```

## Reading files

Reading starts with `std::ifstream`.

```cpp
#include <fstream>
#include <iostream>
#include <string>

int main() {
    std::ifstream in("report.txt");
    std::string line;

    if (std::getline(in, line)) {
        std::cout << line << '\n';
    }
}
```

You should always assume file access can fail because:

- the file does not exist
- permissions are wrong
- the path is incorrect
- the content is malformed

## Working line by line

Line-oriented processing is common for logs, config files, and text-based formats.

```cpp
#include <fstream>
#include <iostream>
#include <string>

int main() {
    std::ifstream in("input.txt");
    std::string line;

    while (std::getline(in, line)) {
        std::cout << "Read: " << line << '\n';
    }
}
```

This is often the simplest and safest way to process text input.

## Text vs binary I/O

Text I/O is human-readable. Binary I/O is more compact and can better preserve exact byte layout.

Binary write example:

```cpp
#include <fstream>

int main() {
    int value = 12345;

    std::ofstream out("value.bin", std::ios::binary);
    out.write(reinterpret_cast<const char*>(&value), sizeof(value));
}
```

Binary read example:

```cpp
#include <fstream>
#include <iostream>

int main() {
    int value = 0;

    std::ifstream in("value.bin", std::ios::binary);
    in.read(reinterpret_cast<char*>(&value), sizeof(value));

    std::cout << value << '\n';
}
```

Binary I/O is useful, but you need to be careful about:

- endianness
- alignment assumptions
- compiler-dependent object layout
- cross-platform portability

## Error handling

The minimum safe pattern is checking whether the stream opened successfully.

```cpp
#include <fstream>
#include <iostream>

int main() {
    std::ifstream in("missing.txt");

    if (!in) {
        std::cerr << "Failed to open file\n";
        return 1;
    }
}
```

You can also check stream state after operations:

- `good()`
- `fail()`
- `bad()`
- `eof()`

For larger systems, you may choose exception-based stream handling, but many codebases prefer explicit checks because they make control flow obvious.

## Practical Examples

## Practical Example 1: Copy a text file

```cpp
#include <fstream>
#include <iostream>
#include <string>

int main() {
    std::ifstream in("source.txt");
    std::ofstream out("copy.txt");

    if (!in || !out) {
        std::cerr << "File open failed\n";
        return 1;
    }

    std::string line;
    while (std::getline(in, line)) {
        out << line << '\n';
    }
}
```

## Practical Example 2: Count lines in a file

```cpp
#include <fstream>
#include <iostream>
#include <string>

int main() {
    std::ifstream in("input.txt");
    std::string line;
    std::size_t count = 0;

    while (std::getline(in, line)) {
        ++count;
    }

    std::cout << "Lines: " << count << '\n';
}
```

## Practical Example 3: Save benchmark results

```cpp
#include <fstream>
#include <iostream>

int main() {
    std::ofstream out("results.csv");
    if (!out) {
        std::cerr << "Could not create results.csv\n";
        return 1;
    }

    out << "test,compiler,time_ms\n";
    out << "branch_threshold,gcc,16.07\n";
    out << "branch_threshold,clang,12.33\n";
}
```

This kind of simple output path appears everywhere in tooling, CI, and performance work.

## Common mistakes

### Assuming a file opened successfully

Never assume. Check the stream state.

### Using binary I/O on complex objects blindly

Writing raw bytes of a complex object is often unsafe and non-portable.

### Mixing formatted extraction with line-based input carelessly

If you use `>>` and `std::getline()` together, be careful about leftover newline characters.

### Ignoring encoding and platform differences

Text data can behave differently depending on environment and format expectations.

## Best practices

- Always check open success.
- Prefer line-by-line parsing for text formats.
- Use binary mode only when you truly need byte-exact handling.
- Separate parsing logic from stream-opening logic.
- Keep file formats explicit and documented.
- Log or surface failures clearly.

## FAQ

## Should I use `ifstream` and `ofstream` or C-style file APIs?

For most C++ applications, standard stream classes are a better starting point. They integrate well with the language and standard library.

## When should I use binary mode?

When you need exact byte-level storage or communication and have thought through portability implications.

## Is file I/O part of systems programming?

Yes. It is one of the most common operating-system-facing activities in C++ programs.

## What is the most common beginner bug here?

Assuming file operations succeeded without checking the stream state.

## More Articles

- [POSIX in C++ Workflows](./posix.md)
- [Sockets in C++](./sockets.md)
- [Async and Futures](../advanced/async-and-futures.md)
