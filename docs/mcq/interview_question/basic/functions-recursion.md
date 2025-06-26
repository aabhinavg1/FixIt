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


## What is a Recursive Function?

A recursive function is a function that calls itself either directly or indirectly in order to solve a problem.

### Example of Recursion function:

```cpp
void countDown(int n) {
    if (n == 0) return;
    cout << n << " ";
    countDown(n - 1);
}
```
### Sample Answer:
A recursive function calls itself until it reaches a base case. It's commonly used in problems where the solution involves smaller subproblems of the same type.


## What is the Function Call Stack?

When a recursive function is executed, each function call is added to the call stack. The function at the top of the stack executes, and once it completes, it is popped off the stack.

### Example of Function Call Stack

```cpp
int sum(int n) {
    if (n == 0) return 0;
    return n + sum(n - 1); // call stack builds up here
}
```
### Sample Answer:
The call stack stores information about active subroutines. In recursion, each call adds a new layer to the stack until the base case is reached.


## What is Divide and Conquer?

Divide and Conquer is a problem-solving technique where a problem is divided into smaller sub-problems, solved recursively, and then combined to get the final result.

### Example of Divide and Conquer

```cpp
int binarySearch(int arr[], int low, int high, int key) {
    if (low > high) return -1;
    int mid = (low + high) / 2;
    if (arr[mid] == key) return mid;
    else if (arr[mid] > key) return binarySearch(arr, low, mid - 1, key);
    else return binarySearch(arr, mid + 1, high, key);
}
```
### Sample Answer:
Divide and Conquer splits the problem into smaller parts, solves them recursively, and merges the solutions. Binary search is a classic example.


## What is Backtracking?

Backtracking is a recursive technique for solving problems by exploring all possible options and undoing the last step if it leads to a dead end.

### Example of Backtracking

```cpp
bool solveMaze(int x, int y, int maze[5][5]) {
    if (x == 4 && y == 4) return true;
    // try right
    if (maze[x][y+1] == 1 && solveMaze(x, y+1, maze)) return true;
    // try down
    if (maze[x+1][y] == 1 && solveMaze(x+1, y, maze)) return true;
    return false;
}
```
### Sample Answer:
Backtracking tries out all paths and returns as soon as it finds a solution or reaches a dead end. It's used in problems like mazes, N-Queens, and puzzles.


## What is Tail Recursion?

Tail recursion is when the recursive call is the last operation in the function.

### Example of Tail Recursion

```cpp
int tailSum(int n, int acc = 0) {
    if (n == 0) return acc;
    return tailSum(n - 1, acc + n); // tail-recursive
}
```
### Sample Answer:
Tail-recursive functions can be optimized by the compiler to avoid extra stack frames, making recursion as efficient as iteration.


## What is Memoization?

Memoization is an optimization technique that stores results of expensive function calls and returns the cached result when the same inputs occur again.

### Example of Memoizing

```cpp
int fib(int n, vector<int>& dp) {
    if (n <= 1) return n;
    if (dp[n] != -1) return dp[n];
    return dp[n] = fib(n - 1, dp) + fib(n - 2, dp);
}
```
### Sample Answer:
Memoization avoids repeated computation by storing previously computed results. It significantly improves the performance of recursive algorithms like Fibonacci.


## What is Dynamic Programming?

Dynamic Programming (DP) solves problems by breaking them down into subproblems, solving each subproblem once, and storing the results for future reference.

### Example of Dynamic programming

```cpp
int fib(int n) {
    vector<int> dp(n + 1);
    dp[0] = 0; dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
```
### Sample Answer:
In the Fibonacci example, each call to fib(n) creates two more calls, forming a tree of recursive calls. It helps visualize how recursion unfolds.


## What is Recursive Problem Solving?

Recursive problem solving involves breaking a problem into smaller subproblems of the same type and solving them recursively.

### Example of Recursive Problem Solving

```cpp
int power(int x, int n) {
    if (n == 0) return 1;
    return x * power(x, n - 1);
}
```
### Sample Answer:
Recursive problem solving is ideal for problems like power, factorial, search, and traversal, where each solution step depends on a smaller subproblem.


## What is Algorithm Optimization in Recursion?

Algorithm optimization in recursion involves reducing time and space complexity using techniques like memoization, tail recursion, and pruning unnecessary calls.

### Example of Algorithm Optimization in Recursion

```cpp
int powerOptimized(int x, int n) {
    if (n == 0) return 1;
    int half = powerOptimized(x, n / 2);
    return (n % 2 == 0) ? half * half : x * half * half;
}
```
### Sample Answer:
By avoiding redundant calls and reducing the depth of recursion, optimized recursive algorithms improve performance in problems with exponential time complexity.
