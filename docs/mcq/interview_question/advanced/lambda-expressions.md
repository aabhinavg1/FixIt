---
title: "C++ Lambda Expressions Interview Questions and Answers"
description: "20 essential interview questions on Lambda Expressions in C++ (C++11/14/17/20) with answers, code examples, and usage scenarios."
keywords:
  - C++ Lambda Expressions
  - Lambda in C++
  - Lambda Functions in C++
  - C++11 Lambda
  - C++14 Lambda
  - C++17 Lambda
  - C++20 Lambda
  - Lambda Capture
  - Capture by Value
  - Capture by Reference
  - Mutable Lambda
  - Generic Lambda
  - Recursive Lambda
  - Lambda with auto parameter
  - Lambda Return Type
  - Lambda in Algorithms
  - Lambda in Multithreading
  - Lambda in STL
  - C++ Functional Programming
  - std::function with Lambda
  - Lambda Expressions Examples
  - Lambda Expressions Uses
  - Inline Functions C++
  - Lambda Closures C++
  - Lambda Capture List
  - Lambda Capture Default
  - C++ Lambda vs Function Pointer
  - Passing Lambda to Function
  - Lambda Capture by Move
  - Lambda and std::bind
  - Lambda State
  - Lambda Syntax C++
  - Lambda in std::for_each
  - Lambda with Condition
  - Lambda in Sort
  - Lambda and Functors
  - Lambda Expression Interview Questions
---
import { ComicQA } from '../Question_comics' ;

<ComicQA
  question="1) What is a lambda expression in C++?"
  answer="A lambda expression is an anonymous function that can be defined inline, capturing variables from its surrounding scope."
  code={`auto add = [](int a, int b) { return a + b; };
std::cout << add(2, 3);`}
  example={`// Output: 5`}
  whenToUse="Use for short, inline functions without needing a separate named function."
/>

<ComicQA
  question="2) What is the syntax of a lambda expression?"
  answer="Basic syntax: [capture list](parameters) -> return_type { body }"
  code={`[](int x, int y) -> int { return x + y; };`}
  example={`// [] for capture list, (..) for parameters`}
  whenToUse="When you want concise inline functionality."
/>

<ComicQA
  question="3) What is the capture list in a lambda?"
  answer="The capture list specifies which variables from the surrounding scope the lambda can access."
  code={`[x, &y]() { y = x + 1; }`}
  example={`// Captures x by value, y by reference`}
  whenToUse="When you need to use outer variables inside lambda."
/>

<ComicQA
  question="4) What is capture by value?"
  answer="Capturing by value copies the variable into the lambda, creating its own copy."
  code={`[x]() { return x + 1; }`}
  example={`// Modifying x inside lambda won't affect outer x`}
  whenToUse="When you want to protect outer variables from modification."
/>

<ComicQA
  question="5) What is capture by reference?"
  answer="Capturing by reference allows the lambda to access and modify the original variable."
  code={`[&x]() { x += 5; }`}
  example={`// Changes outer x directly`}
  whenToUse="When you want to modify the outer variable."
/>

<ComicQA
  question="6) What does [=] mean in lambda capture?"
  answer="[=] captures all variables in the surrounding scope by value."
  code={`[=]() { return a + b; }`}
  example={`// Shorthand for capturing all needed variables by value`}
  whenToUse="When you want read-only access to all outer variables."
/>

<ComicQA
  question="7) What does [&] mean in lambda capture?"
  answer="[&] captures all variables in the surrounding scope by reference."
  code={`[&]() { a += b; }`}
  example={`// Can modify all outer variables`}
  whenToUse="When you want to modify multiple outer variables."
/>

<ComicQA
  question="8) What is a mutable lambda?"
  answer="A mutable lambda allows modification of captured-by-value variables inside the lambda."
  code={`[x]() mutable { x += 5; return x; }`}
  example={`// Without mutable, x is treated as const`}
  whenToUse="When you want to change value-captured variables inside lambda."
/>

<ComicQA
  question="9) What is a generic lambda?"
  answer="A generic lambda uses auto in its parameter list to accept any type."
  code={`auto print = [](auto val) { std::cout << val; };`}
  example={`// Works for int, string, double, etc.`}
  whenToUse="When you want a type-agnostic inline function."
/>

<ComicQA
  question="10) How to specify return type in lambda?"
  answer="Use -> after the parameter list."
  code={`[](int a, int b) -> double { return a / (double)b; };`}
  example={`// Ensures floating-point division`}
  whenToUse="When type deduction is incorrect or ambiguous."
/>

<ComicQA
  question="11) How to use a lambda with STL algorithms?"
  answer="Pass the lambda as the function argument."
  code={`std::for_each(v.begin(), v.end(), [](int n){ std::cout << n; });`}
  example={`// Prints each element in the vector`}
  whenToUse="When you need quick logic inside STL calls."
/>

<ComicQA
  question="12) How to pass a lambda to a function?"
  answer="Use std::function or a template parameter."
  code={`void call(std::function<void()> f) { f(); }
call([](){ std::cout << "Hello"; });`}
  example={`// Flexible lambda passing`}
  whenToUse="When you want functions to accept lambdas."
/>

<ComicQA
  question="13) How to store a lambda in a variable?"
  answer="Assign it to auto or std::function."
  code={`auto square = [](int x){ return x*x; };`}
  example={`// Call square(4) to get 16`}
  whenToUse="When you want to reuse the lambda."
/>

<ComicQA
  question="14) How to make a recursive lambda?"
  answer="Use std::function to declare the lambda's type."
  code={`std::function<int(int)> fact = [&](int n){ return n <= 1 ? 1 : n * fact(n-1); };`}
  example={`// Factorial using recursive lambda`}
  whenToUse="When recursion is needed in inline function."
/>

<ComicQA
  question="15) What is capture by move?"
  answer="Allows moving resources into the lambda."
  code={`[ptr = std::move(p)](){ /* use ptr */ };`}
  example={`// Transfers ownership into lambda`}
  whenToUse="When working with move-only types inside lambda."
/>

<ComicQA
  question="16) What are init captures in C++14?"
  answer="Allows initializing new variables in capture list."
  code={`[sum = a + b]() { return sum; };`}
  example={`// sum is created inside the lambda`}
  whenToUse="When you want to compute and store values before lambda body."
/>

<ComicQA
  question="17) What are constexpr lambdas?"
  answer="Lambdas that can be evaluated at compile-time."
  code={`constexpr auto add = [](int a, int b){ return a + b; };`}
  example={`// Requires C++17 or later`}
  whenToUse="When you want compile-time evaluated functions."
/>

<ComicQA
  question="18) What is a stateless lambda?"
  answer="A lambda with an empty capture list that stores no state."
  code={`[](){ std::cout << "Hello"; };`}
  example={`// Can be converted to function pointer`}
  whenToUse="When no outer variables are needed."
/>

<ComicQA
  question="19) Can lambdas replace functors?"
  answer="Yes, lambdas often replace functors for short, single-use cases."
  example={`// Cleaner and more concise than defining a class with operator()`}
  whenToUse="When function object is small and inline."
/>

<ComicQA
  question="20) When should you avoid lambdas?"
  answer="Avoid when the logic is complex enough to deserve a named function or when reusability is needed across multiple translation units."
  example={`// For large algorithms, use a named function`}
  whenToUse="When clarity and maintainability are more important than brevity."
/>
