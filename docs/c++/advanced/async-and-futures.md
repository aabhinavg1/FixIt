---
title: Async and Futures in C++
description: Learn how std::async, std::future, std::promise, and shared futures structure asynchronous work in modern C++.
tags:
  - C++
  - Concurrency
  - Async
  - Future
keywords:
  - std async c++
  - std future c++
  - std promise c++
  - async programming in c++
sidebar_label: Async and Futures
---

import AdBanner from '@site/src/components/AdBanner';

# Async and Futures in C++

`std::thread` gives you low-level control over execution. `std::async`, `std::future`, and `std::promise` sit one level above that. They focus on a different problem: launching work, waiting for completion, and collecting a result without manually wiring every synchronization detail yourself.

For many real applications, that model is a better starting point than raw threads.

<AdBanner />

## Table of Contents

1. [Why async exists](#why-async-exists)
2. [The core types](#the-core-types)
3. [std::async and launch policies](#stdasync-and-launch-policies)
4. [Working with std::future](#working-with-stdfuture)
5. [std::promise and manual result delivery](#stdpromise-and-manual-result-delivery)
6. [shared_future](#shared_future)
7. [Practical examples](#practical-examples)
8. [Common mistakes](#common-mistakes)
9. [Best practices](#best-practices)
10. [FAQ](#faq)

## Why async exists

Not every concurrency problem is "start a thread and manage it forever." A lot of tasks are closer to this:

- run some expensive work
- continue doing something else
- collect the answer later
- handle failure cleanly

That is exactly what futures are good at.

Examples:

- parsing a large config file while the UI continues
- loading assets in the background
- dispatching independent computations in a build tool
- running multiple independent benchmark stages and collecting results later

## The core types

Modern C++ provides a small set of types around asynchronous result handling:

- `std::async`: starts asynchronous work and returns a future
- `std::future<T>`: represents a result that will become available later
- `std::promise<T>`: lets one thread produce a result for another thread
- `std::shared_future<T>`: allows multiple consumers to observe the same result

The main idea is simple: one side produces, another side waits or retrieves.

## `std::async` and launch policies

The simplest entry point is `std::async`.

```cpp
#include <future>
#include <iostream>

int compute() {
    return 42;
}

int main() {
    std::future<int> result = std::async(std::launch::async, compute);
    std::cout << result.get() << '\n';
}
```

Important detail: `std::async` can use different launch policies.

- `std::launch::async`: run on a separate thread
- `std::launch::deferred`: delay execution until someone waits or calls `get()`
- default policy: the implementation may choose either

If you care about predictable behavior, specify the policy explicitly.

```cpp
auto future_value = std::async(std::launch::async, [] {
    return 10 * 20;
});
```

## Working with `std::future`

A future has a one-time retrieval model.

```cpp
#include <chrono>
#include <future>
#include <iostream>
#include <thread>

int work() {
    std::this_thread::sleep_for(std::chrono::milliseconds(100));
    return 7;
}

int main() {
    auto f = std::async(std::launch::async, work);

    if (f.wait_for(std::chrono::milliseconds(50)) == std::future_status::timeout) {
        std::cout << "Still running...\n";
    }

    std::cout << "Result: " << f.get() << '\n';
}
```

Useful operations:

- `get()`: wait if needed, then retrieve the value
- `wait()`: block until ready
- `wait_for(duration)`: wait with timeout
- `wait_until(time_point)`: wait until a deadline

Once you call `get()`, the stored value is consumed. Calling `get()` again on the same `std::future` is an error.

## `std::promise` and manual result delivery

`std::async` is convenient, but sometimes you want explicit producer-consumer wiring. That is where `std::promise` helps.

```cpp
#include <future>
#include <iostream>
#include <thread>

void producer(std::promise<int> p) {
    p.set_value(99);
}

int main() {
    std::promise<int> promise;
    std::future<int> future = promise.get_future();

    std::thread t(producer, std::move(promise));

    std::cout << "Received: " << future.get() << '\n';
    t.join();
}
```

This is useful when:

- a thread or subsystem computes the result manually
- you need to propagate exceptions explicitly
- the execution mechanism is not `std::async`

You can also send exceptions through the promise:

```cpp
try {
    throw std::runtime_error("worker failed");
} catch (...) {
    promise.set_exception(std::current_exception());
}
```

Then `future.get()` will rethrow that exception on the consumer side.

## `shared_future`

`std::future` is move-only and one-shot. Sometimes several readers need access to the same result. Use `std::shared_future`.

```cpp
#include <future>
#include <iostream>

int main() {
    std::shared_future<int> shared = std::async(std::launch::async, [] {
        return 123;
    }).share();

    std::cout << shared.get() << '\n';
    std::cout << shared.get() << '\n';
}
```

This is helpful when:

- several subsystems depend on one computed value
- you want multiple observers
- you need reuse instead of one-time consumption

## Practical Examples

## Practical Example 1: Parallel independent computations

```cpp
#include <future>
#include <iostream>

int square(int x) {
    return x * x;
}

int main() {
    auto a = std::async(std::launch::async, square, 10);
    auto b = std::async(std::launch::async, square, 20);

    std::cout << "Total: " << a.get() + b.get() << '\n';
}
```

This pattern is good when the tasks are independent and each returns a clean result.

## Practical Example 2: Background loading

```cpp
#include <chrono>
#include <future>
#include <iostream>
#include <thread>

std::string load_asset() {
    std::this_thread::sleep_for(std::chrono::milliseconds(200));
    return "texture_loaded";
}

int main() {
    auto asset_future = std::async(std::launch::async, load_asset);

    std::cout << "Preparing scene...\n";
    std::cout << "Asset state: " << asset_future.get() << '\n';
}
```

The value here is not "more threads are always better." The value is that the control flow clearly expresses deferred result retrieval.

## Practical Example 3: Promise-based worker result

```cpp
#include <future>
#include <iostream>
#include <thread>

void parse_file(std::promise<std::size_t> p) {
    try {
        std::size_t lines = 2048;
        p.set_value(lines);
    } catch (...) {
        p.set_exception(std::current_exception());
    }
}

int main() {
    std::promise<std::size_t> p;
    auto f = p.get_future();

    std::thread worker(parse_file, std::move(p));
    std::cout << "Lines parsed: " << f.get() << '\n';
    worker.join();
}
```

## Common mistakes

### Assuming `std::async` always spawns a thread

It does not unless you request `std::launch::async`. The default policy can defer execution.

### Calling `get()` twice on the same `future`

`std::future` is a one-consumer object.

### Using async for tightly coupled shared-state code

If tasks constantly mutate the same data, futures alone will not solve the synchronization problem. You still need careful design and possibly mutexes or message passing.

### Ignoring exception propagation

If background work throws, `future.get()` will surface that exception. That is a feature, but only if you handle it deliberately.

## Best practices

- Prefer `std::async` for simple result-oriented asynchronous work.
- Pass `std::launch::async` when you need real concurrent execution.
- Use `wait_for()` for timeout-aware designs.
- Use `std::promise` only when you need explicit producer-consumer wiring.
- Keep task boundaries coarse enough to justify concurrency overhead.
- Avoid mixing asynchronous execution with uncontrolled shared mutable state.

## FAQ

## Is `std::async` better than `std::thread`?

Not universally. It is better when your problem is "run work and collect a result later." `std::thread` is lower-level and more flexible.

## When should I use `promise` instead of `async`?

Use `promise` when the result producer is not naturally expressed as a single callable launched by `std::async`.

## Why would I use `shared_future`?

When multiple consumers need to read the same asynchronous result.

## Is async enough for building a thread pool?

No. `std::async` is a task-launching abstraction, not a general thread-pool framework.

## More Articles

- [Threads](./threads.md)
- [Mutexes and Locking](./mutexes-and-locking.md)
- [File I/O](../expert/file-io.md)
