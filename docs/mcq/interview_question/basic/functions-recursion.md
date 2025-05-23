---
title: "Recursion"
description: "Explore recursion in C++ with examples, base and recursive cases, and how it can be used to solve problems."
keywords:
  - Recursion
  - Recursive Functions
  - Base Case
  - Recursive Call
  - Algorithm Design
  - Divide and Conquer
  - Backtracking
  - Stack
  - Function Call Stack
  - Depth-First Search (DFS)
  - Tail Recursion
  - Memoization
  - Dynamic Programming
  - Recursive Tree
  - Problem Solving
  - Divide and Conquer Algorithm
  - Recursive Algorithms
  - Recursion vs Iteration

tags:
  - Recursion
  - Recursive Functions
  - Base Case
  - Algorithm Design
  - Problem Solving
  - Divide and Conquer
  - Backtracking
  - Function Call Stack
  - Stack
  - Depth-First Search
  - Tail Recursion
  - Memoization
  - Dynamic Programming
  - Recursive Algorithms
  - Recursive Tree
  - Recursive Problem Solving
  - Algorithm Optimization
  - Recursion vs Iteration

---
# Question on the Recursion in C++

## What is Recursion?

Recursion occurs when a function calls itself to solve smaller instances of the same problem. It simplifies complex problems by breaking them down into smaller, manageable parts.

### Example of Recursion:

```cpp
int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
```
### Sample Answer:
Recursion is used in C++ to solve problems that can be broken down into smaller sub-problems with similar characteristics. By reducing the problem size at each recursive call, recursion efficiently solves complex problems.

``Base Case`` and ``Recursive Case``
1. Base Case: Prevents infinite recursion by defining when the recursion should stop.
2. Recursive Case: The condition where the function calls itself to solve a smaller problem.

```cpp
int fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```
::: note
In recursion, the base case ensures the function stops calling itself, while the recursive case solves smaller instances progressively. For example, in Fibonacci, the base cases are ``fibonacci(0)`` and ``fibonacci(1)``, while the recursive case computes ``fibonacci(n-1) + fibonacci(n-2)``
:::