---
title: "Comprehensive C++ Tutorial Intro - Master C++ from Basics to Advanced Concepts"
description: "This comprehensive C++ tutorial is designed to take you through every aspect of C++ programming, from beginner to advanced topics. Learn the basics of C++ syntax, control structures, data types, and functions, then dive deeper into advanced topics like object-oriented programming (OOP), memory management, templates, the Standard Template Library (STL), and multi-threading. Whether you're just starting out or looking to refine your skills, this tutorial is your one-stop resource for mastering C++."
keywords:
  - Comprehensive C++ Tutorial
  - Master C++ Programming
  - C++ Basics
  - C++ Advanced Concepts
  - Object-Oriented Programming in C++
  - C++ Functions
  - C++ Data Structures
  - C++ Templates
  - C++ STL
  - C++ Memory Management
  - C++ Classes and Objects
  - C++ Smart Pointers
  - C++ Lambda Expressions
  - C++ Multi-threading
  - C++ Exception Handling
  - C++ Inheritance
  - C++ Polymorphism
  - C++ Algorithms
  - C++ Best Practices
  - C++ Interview Preparation

tags:
  - Comprehensive C++ Tutorial
  - Master C++ Programming
  - C++ Basics
  - C++ Advanced Concepts
  - Object-Oriented Programming (OOP)
  - C++ Functions
  - Data Structures in C++
  - C++ Templates
  - C++ STL
  - Memory Management in C++
  - C++ Classes and Objects
  - Smart Pointers in C++
  - Lambda Expressions in C++
  - C++ Multi-threading
  - C++ Exception Handling
  - C++ Inheritance
  - C++ Polymorphism
  - C++ Algorithms
  - C++ Best Practices
  - C++ Coding Standards
  - C++ Interview Preparation
  - C++ for Beginners and Experts
  - C++ Performance Optimization

slug: /cpp-tutorial
sidebar_label: Comprehensive C++ Tutorial
---



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AdBanner from '@site/src/components/AdBanner';

<div>
    <AdBanner />
</div>

## Table of Contents

1. [Introduction](#introduction)
2. [What is C++?](#what-is-c)
3. [Why Learn C++?](#why-learn-c)
4. [Basic Syntax and Structure](#basic-syntax-and-structure)
5. [Data Types and Variables](#data-types-and-variables)
6. [Control Structures](#control-structures)
7. [Functions in C++](#functions-in-c)
8. [Object-Oriented Programming (OOP)](#object-oriented-programming-oop)
9. [Memory Management and Pointers](#memory-management-and-pointers)
10. [Input and Output](#input-and-output)
11. [Comparison with Other Languages](#comparison-with-other-languages)
12. [Applications of C++](#applications-of-c)
13. [C++ Interview Questions](#c-interview-questions)
14. [Further Reading](#further-reading)

<div>
    <AdBanner />
</div>

## Introduction

# Introduction to C++

**C++** is a **general-purpose programming language** that was developed by **Bjarne Stroustrup** in **1979** at **Bell Labs**.  
It was created as an **extension of the C programming language**, meaning it keeps the power and efficiency of C while adding modern programming features that make development easier and more structured.

C++ is a language that allows programmers to work **close to the hardware** (like C) and still **build large, complex applications** in an organized way.  
This makes it suitable for a wide range of tasks — from small utility programs to huge software systems.

Unlike older procedural languages, C++ introduced the concept of **Object-Oriented Programming (OOP)**, which focuses on **objects** rather than just functions.  
This approach helps developers create software that is **easier to understand, reuse, and maintain**.

## Why C++ Matters

C++ is not just another programming language — it’s one of the **foundations of modern software development**.  
It has influenced many other popular languages like **Java, C#, and even parts of Python**.

Because of its **speed, flexibility, and control**, C++ is used in many high-performance areas such as:

- **Operating Systems** — like Windows, macOS, and parts of Linux  
- **Game Engines** — including Unreal Engine and Unity’s backend  
- **Web Browsers** — such as Chrome and Firefox  
- **Embedded Systems** — like microcontrollers and IoT devices  
- **Competitive Programming** — where performance and efficiency matter most  


C++ is like a **supercharged version of C** — it keeps the speed and precision but adds tools that make coding easier and more reliable.  
It helps you write software that is:

- **Fast** — runs directly on the hardware without unnecessary overhead  
- **Organized** — thanks to object-oriented programming  
- **Portable** — works across different systems  
- **Powerful** — capable of handling both small and massive applications  

Whether you want to build **games, applications, or system software**, learning C++ gives you the **core foundation of programming logic** and **deep computer understanding** that will benefit you in every other language.


## Summary

| Aspect | Details |
|--------|----------|
| **Creator** | Bjarne Stroustrup |
| **Year** | 1979 |
| **Base Language** | C |
| **Paradigm** | Procedural + Object-Oriented |
| **Key Strength** | Combines speed, control, and structure |
| **Common Uses** | Operating systems, games, browsers, compilers, embedded systems |

C++ combines the **power of C** with the **ease of modern programming**, making it one of the best languages to start your coding journey and build a strong foundation in computer science.


<div>
    <AdBanner />
</div>

## What is C++?

C++ is a **compiled**, **statically typed**, and **multi-paradigm** programming language that supports both **procedural** and **object-oriented** programming styles.

It enables developers to write **high-performance software** with precise control over **hardware resources and memory**.

### Key Characteristics

- Compiled and statically typed  
- Supports both procedural and OOP paradigms  
- High performance and efficient memory control  
- Rich standard template library (STL)  
- Portable and platform-independent  

<div>
    <AdBanner />
</div>

## Why Learn C++?

C++ remains one of the **most relevant programming languages** due to its:

* **Speed and performance** — ideal for system-level programming  
* **Flexibility** — combines low-level and high-level features  
* **OOP support** — simplifies large-scale application development  
* **Industry use** — used in AI, finance, embedded systems, and game development  

:::tip
###  Tip: Why C++ Still Matters
> C++ offers the **power of C** with **modern abstractions**.
>
> It’s the go-to language for:
> - Competitive programming  
> - Performance-critical software  
> - System-level applications  
> - Game engines (Unreal, Unity)  
:::

<div>
    <AdBanner />
</div>

## Basic Syntax and Structure

A simple **C++ program** consists of **headers**, a **main()** function, and statements ending with semicolons.

<Tabs>
<TabItem value="C++" label="C++">
```cpp
#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
```
</TabItem>

<TabItem value="Java" label="Java">
```javascript
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
</TabItem>
<TabItem value="Python" label="Python">
```python
print("Hello, World!")
```
</TabItem>
</Tabs>

### Explanation:

* `#include <iostream>` — imports input/output library
* `using namespace std;` — allows standard library use without prefix
* `main()` — entry point of the program
* `cout` — prints text to console
* `return 0;` — indicates successful program termination

<div>
    <AdBanner />
</div>

## Data Types and Variables

C++ supports multiple data types, including **primitive**, **derived**, and **user-defined** types.

| Category     | Examples                       |
| ------------ | ------------------------------ |
| Primitive    | int, float, double, char, bool |
| Derived      | array, pointer, reference      |
| User-defined | struct, class, enum            |

```cpp
int age = 21;
float height = 5.9;
char grade = 'A';
bool isPassed = true;
```

<div>
    <AdBanner />
</div>


## Control Structures

In C++, **control structures** decide **how and when** certain parts of your program will run.  
They control the *flow of execution* — meaning the order in which statements are executed depending on conditions, loops, or jumps.

Without control structures, a program would simply run line by line from top to bottom, which isn’t enough for making decisions or handling repetition.

There are three main types of control structures in C++:

1. **Conditional Statements** – for decision-making  
2. **Looping Statements** – for repeating tasks  
3. **Jump Statements** – for altering the normal flow of execution  

---

### Conditional Statements

**Conditional statements** are used when you want your program to make decisions — that is, to **execute a certain block of code only if a condition is true**.

For example, suppose we want to check whether a number is greater than 5.  
Here’s how we can write it in C++:

```cpp
#include <iostream>
using namespace std;

int main() {
    int x = 10;

    if (x > 5)
        cout << "x is greater than 5";
    else
        cout << "x is less or equal to 5";

    return 0;
}
```

**Output:**

```
x is greater than 5
```

---

### Explanation

Let’s break down what happens step by step:

* `int x = 10;`
  → A variable named `x` is created and given the value `10`.

* `if (x > 5)`
  → This line checks the condition: *“Is x greater than 5?”*
  Since `x` is 10, the condition is **true**.

* When the condition is **true**, the first statement runs:

  ```
  cout << "x is greater than 5";
  ```

* If the condition were **false**, then the statement inside the `else` block would execute:

  ```
  cout << "x is less or equal to 5";
  ```

---

### Real-Life Analogy

Think of an **if-else statement** like a real-world decision:

> If it’s raining, take an umbrella.
> Else, go without one.

C++ makes similar logical decisions while running your program.

---

In short, **conditional statements** give your C++ programs the ability to think and decide.
They are the foundation of all logic and decision-making in programming.


Here’s your **“Loops”** section fully elaborated and written in a clear, beginner-friendly **Markdown (MD)** format — following the same consistent style as your earlier sections 👇

---

### Loops

**Loops** in C++ are used to **execute a block of code multiple times**, as long as a certain condition remains true.  
They are extremely useful when you need to perform **repetitive tasks** — like printing numbers, processing arrays, or checking user input repeatedly.

Instead of writing the same line of code several times, loops help make your program **shorter, cleaner, and more efficient**.

---

### Example: The `for` Loop

Here’s a simple example that prints numbers from 0 to 4:

```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 5; i++)
        cout << i << " ";

    return 0;
}
````

**Output:**

```
0 1 2 3 4
```

---

### Explanation

Let’s break down the `for` loop syntax:

```cpp
for (initialization; condition; update)
```

* **Initialization:** `int i = 0;`
  → This runs **once** at the beginning. It sets up a counter variable (`i`) starting from 0.

* **Condition:** `i < 5;`
  → Before each loop iteration, this condition is checked.
  If it’s **true**, the loop runs again; if **false**, the loop stops.

* **Update:** `i++`
  → After each iteration, the counter `i` increases by 1.

So in this case:

1. `i` starts at 0
2. Checks if `i < 5` → true → prints `0`
3. `i` becomes 1 → checks again → prints `1`
4. This continues until `i` becomes 5 → condition false → loop ends.

---

### Types of Loops in C++

| Loop Type         | Description                                    | When to Use                                           |
| ----------------- | ---------------------------------------------- | ----------------------------------------------------- |
| `for` loop        | Runs a fixed number of times                   | When you know how many times to repeat                |
| `while` loop      | Runs as long as a condition is true            | When you don’t know the number of repetitions         |
| `do...while` loop | Similar to `while`, but runs **at least once** | When code must execute once before checking condition |

---

### Example: `while` Loop

```cpp
#include <iostream>
using namespace std;

int main() {
    int i = 0;

    while (i < 5) {
        cout << i << " ";
        i++;
    }

    return 0;
}
```

**Output:**

```
0 1 2 3 4
```

Here, the loop continues **while** `i` is less than 5.

---

### Example: `do...while` Loop

```cpp
#include <iostream>
using namespace std;

int main() {
    int i = 0;

    do {
        cout << i << " ";
        i++;
    } while (i < 5);

    return 0;
}
```

**Output:**

```
0 1 2 3 4
```

The key difference here is that the **do-while loop runs at least once**, even if the condition is false at the start.

---

### Summary

| Loop Type    | Executes                             | Example Use Case                  |
| ------------ | ------------------------------------ | --------------------------------- |
| `for`        | Fixed number of times                | Counting from 1 to 10             |
| `while`      | Until condition becomes false        | Reading input until user enters 0 |
| `do...while` | At least once, then checks condition | Menu-driven programs              |

---

In short, **loops** make your programs more powerful by letting them **repeat actions automatically** — saving time and reducing errors.


<div>
    <AdBanner />
</div>


## Functions in C++

Functions in C++ help organize code into smaller, reusable blocks that perform specific tasks. Instead of writing the same code multiple times, a function allows you to define it once and use it anywhere in your program. This makes the code cleaner, easier to debug, and more efficient.

---

### What is a Function?

A **function** is a group of statements that perform a particular task.  
Every C++ program must have at least one function — the **`main()`** function — which acts as the entry point of execution.  
Apart from `main()`, programmers can define their own functions, known as **user-defined functions**, to handle specific operations.

---

### Syntax of a Function

```cpp
return_type function_name(parameters) {
    // body of the function
    // return statement (if required)
}
````

* **return_type** — the data type of the value returned by the function (e.g., `int`, `float`, `void`).
* **function_name** — the name used to identify the function.
* **parameters** — values or variables passed into the function.
* **body** — a set of statements that define what the function does.
* **return statement** — sends a value back to the calling part of the program.

---

### Example: A Simple Function

```cpp
#include <iostream>
using namespace std;

// Function definition
int add(int a, int b) {
    return a + b;
}

int main() {
    cout << "Sum: " << add(5, 3);
    return 0;
}
```

**Output:**

```
Sum: 8
```

---

### Step-by-Step Explanation

1. **Function Definition** — The `add()` function takes two integers as parameters (`a` and `b`) and returns their sum.
2. **Function Call** — Inside `main()`, the function is called using `add(5, 3)`.
3. **Execution Flow** — The control transfers to the `add()` function, computes the result `5 + 3`, and returns `8`.
4. **Result Display** — The returned value is printed using `cout`.

---

### Why Functions are Useful

* **Reusability:** Define once, use multiple times.
* **Readability:** Code becomes easier to understand and maintain.
* **Modularity:** Divides large programs into manageable parts.
* **Debugging:** Easier to test smaller pieces of code individually.

---

### Example: Void Function (No Return Value)

Some functions perform an action but don’t return any value. Such functions use the keyword **`void`** as their return type.

```cpp
#include <iostream>
using namespace std;

void greet() {
    cout << "Hello! Welcome to C++ Programming.";
}

int main() {
    greet();
    return 0;
}
```

**Output:**

```
Hello! Welcome to C++ Programming.
```

Here, `greet()` simply prints a message and doesn’t return anything.

---

### Example: Function with Parameters and Return Value

```cpp
#include <iostream>
using namespace std;

int multiply(int x, int y) {
    return x * y;
}

int main() {
    int result = multiply(4, 6);
    cout << "Product: " << result;
    return 0;
}
```

**Output:**

```
Product: 24
```

In this example, the `multiply()` function receives two integers, multiplies them, and returns the product.

---

### Types of Functions in C++

| Type                   | Description                 | Example                          |
| ---------------------- | --------------------------- | -------------------------------- |
| Built-in Functions     | Predefined in C++ libraries | `sqrt()`, `pow()`, `abs()`       |
| User-defined Functions | Created by the programmer   | `add()`, `greet()`, `multiply()` |

---

### Function Declaration vs Definition

A function can be declared before it’s defined.
This tells the compiler about the function’s name, return type, and parameters before it is actually implemented.

```cpp
#include <iostream>
using namespace std;

// Function declaration
int square(int x);

int main() {
    cout << "Square: " << square(5);
    return 0;
}

// Function definition
int square(int x) {
    return x * x;
}
```

**Output:**

```
Square: 25
```

The **declaration** informs the compiler that the function exists, and the **definition** contains the actual logic.

---

### Passing Arguments to Functions

In C++, arguments can be passed to functions in two ways:

1. **Pass by Value** — A copy of the actual value is passed, and changes inside the function don’t affect the original variable.
2. **Pass by Reference** — The actual memory address is passed, allowing the function to modify the original variable.

#### Example: Pass by Value

```cpp
void changeValue(int x) {
    x = 20;
}

int main() {
    int num = 10;
    changeValue(num);
    cout << num;
    return 0;
}
```

**Output:**

```
10
```

The value of `num` remains unchanged because only a copy was passed.

#### Example: Pass by Reference

```cpp
void changeValue(int &x) {
    x = 20;
}

int main() {
    int num = 10;
    changeValue(num);
    cout << num;
    return 0;
}
```

**Output:**

```
20
```

Here, the actual variable `num` is modified since it was passed by reference using `&`.

---

### Function Overloading

C++ allows **multiple functions with the same name** as long as they have **different parameter types or counts**.
This is known as **function overloading**.

```cpp
#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int main() {
    cout << add(3, 4) << endl;
    cout << add(2.5, 4.3);
    return 0;
}
```

**Output:**

```
7
6.8
```

Both `add()` functions have the same name but handle different data types.

---

### Summary Table

| Concept              | Description                     | Example                                   |
| -------------------- | ------------------------------- | ----------------------------------------- |
| Function Definition  | Defines what the function does  | `int add(int a, int b)`                   |
| Function Call        | Executes the function           | `add(5, 3)`                               |
| Return Type          | Type of value returned          | `int`, `void`, `float`                    |
| Parameters           | Inputs given to a function      | `(int a, int b)`                          |
| Function Overloading | Same name, different parameters | `add(int, int)` and `add(double, double)` |
| Pass by Value        | Sends a copy of variable        | `void func(int x)`                        |
| Pass by Reference    | Sends actual variable           | `void func(int &x)`                       |



---

<div>
    <AdBanner />
</div>

## Object-Oriented Programming (OOP)

**Object-Oriented Programming (OOP)** is one of the most important features of C++.  
It allows programmers to structure code around **objects** — real-world entities that have both **data** (attributes) and **functions** (behaviors).  
This makes programs more organized, reusable, and easier to understand compared to procedural programming.

In simple terms, **OOP helps you model your code the way you think about real-life things** — for example, a student, a car, or a bank account.

---

### Example: Class and Object

```cpp
#include <iostream>
using namespace std;

class Student {
  public:
    string name;
    int age;

    void introduce() {
        cout << "Hi, I'm " << name << " and I'm " << age << " years old.";
    }
};

int main() {
    Student s1;          // Create an object
    s1.name = "Aditya";  // Assign values
    s1.age = 21;
    s1.introduce();      // Call function
    return 0;
}
```

**Output:**

```
Hi, I'm Aditya and I'm 21 years old.
```

---

### Explanation

* **Class:** Acts as a blueprint or template for creating objects.
* **Object:** A real instance of a class with actual data.
* **Methods:** Functions defined inside a class that describe the behavior of objects.

In the example above:

* `Student` is a class.
* `s1` is an object of that class.
* `introduce()` is a method that prints the object’s details.

---

### Advantages of OOP

* **Reusability:** Code can be reused using inheritance.
* **Modularity:** Code is divided into separate classes.
* **Maintainability:** Easier to update and fix specific parts.
* **Abstraction:** Only essential details are exposed.
* **Encapsulation:** Data is protected from direct access.

---

### Core OOP Concepts in C++

| Concept           | Description                                | Example                          |
| ----------------- | ------------------------------------------ | -------------------------------- |
| **Class**         | Blueprint of an object                     | `class Car {}`                   |
| **Object**        | Instance of a class                        | `Car c1;`                        |
| **Encapsulation** | Hiding internal data                       | Private variables                |
| **Inheritance**   | Reusing properties of one class in another | `class Child : public Parent {}` |
| **Polymorphism**  | One interface, multiple behaviors          | Function overloading             |
| **Abstraction**   | Hiding complex details                     | Using simple interfaces          |

OOP in C++ makes software design more logical, efficient, and close to how things work in the real world.

<div>
    <AdBanner />
</div>


## Memory Management and Pointers

C++ provides **direct access to memory** through **pointers**, allowing developers to manage how and where data is stored.  
This is one of the features that makes C++ powerful — and also requires careful handling to avoid errors like memory leaks or invalid access.

---

### What Are Pointers?

A **pointer** is a variable that stores the **memory address** of another variable.  
In simple terms, instead of storing a value directly, a pointer stores *where that value is located* in memory.

---

### Example: Basic Pointer Usage

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 10;       // Normal integer variable
    int* ptr = &a;    // Pointer storing the address of 'a'

    cout << "Address of a: " << &a << endl;
    cout << "Value of a: " << *ptr << endl; // Access value using pointer

    return 0;
}
```

**Output:**

```
Address of a: 0x7ffee5b3a8fc
Value of a: 10
```

---

### Explanation

1. **`int* ptr`** – Declares a pointer to an integer.
2. **`&a`** – Returns the memory address of variable `a`.
3. **`*ptr`** – Dereferences the pointer, i.e., accesses the value stored at the address it points to.

---

### Dynamic Memory Allocation

C++ also allows **manual memory management** using the `new` and `delete` operators.

```cpp
#include <iostream>
using namespace std;

int main() {
    int* num = new int;   // Dynamically allocate memory for an integer
    *num = 25;            // Store value in allocated memory
    cout << "Value: " << *num << endl;
    
    delete num;           // Free the allocated memory
    return 0;
}
```

**Output:**

```
Value: 25
```

---

### Key Points

* **Pointers** store memory addresses, not actual data.
* The `*` operator (dereference) accesses the value at the address.
* The `&` operator retrieves the address of a variable.
* Use `new` to allocate memory and `delete` to free it.
* Always free memory after use to avoid **memory leaks**.

---

### Quick Example: Pointer to Array

```cpp
int arr[3] = {1, 2, 3};
int* p = arr;

for (int i = 0; i < 3; i++) {
    cout << *(p + i) << " ";
}
```

**Output:**

```
1 2 3
```

Pointers are one of the most powerful yet sensitive features of C++, enabling fine-grained control over performance and memory — a key reason C++ remains dominant in system programming and game development.


### Dynamic Memory Allocation

```cpp
int* p = new int(5);
cout << *p;
delete p;
```

<div>
    <AdBanner />
</div>

## Input and Output

C++ handles input and output operations using **streams** — objects that connect your program to input/output devices such as the keyboard and console.  
The two most common streams are:

- **`cout`** — used to **display output** (console output stream).  
- **`cin`** — used to **take input** from the user (console input stream).

These are defined in the **`<iostream>`** header file.

---

### Example: Taking User Input and Displaying Output

```cpp
#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "Enter age: ";  // Output message
    cin >> age;             // Take input from user
    cout << "You entered: " << age;
    return 0;
}
```

**Output:**

```
Enter age: 21
You entered: 21
```

---

### Explanation

1. **`#include <iostream>`** – Includes the input/output stream library.
2. **`cout`** – Prints text to the screen using the insertion operator `<<`.
3. **`cin`** – Reads user input from the keyboard using the extraction operator `>>`.
4. **`return 0;`** – Indicates successful program execution.

---

### Example: Multiple Inputs

You can also take multiple inputs at once:

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    cout << "Sum: " << a + b;
    return 0;
}
```

**Output:**

```
Enter two numbers: 4 6
Sum: 10
```

---

### Quick Notes

* Use **`cout <<`** to print output.
* Use **`cin >>`** to take input.
* You can chain multiple outputs like:

  ```cpp
  cout << "Name: " << name << ", Age: " << age;
  ```
* Always include the **`<iostream>`** header and the **`using namespace std;`** statement for simpler syntax.

<div>
    <AdBanner />
</div>

## Comparison with Other Languages

| Feature        | C++        | Java                 | Python        |
| -------------- | ---------- | -------------------- | ------------- |
| Compilation    | Compiled   | Compiled to bytecode | Interpreted   |
| Typing         | Static     | Static               | Dynamic       |
| Memory Control | Manual     | Automatic (GC)       | Automatic     |
| Speed          | Very Fast  | Moderate             | Slower        |
| Syntax         | Complex    | Verbose              | Simple        |
| Use Case       | System/DSA | Web, Apps            | AI, Scripting |

---

## Applications of C++

* Operating systems (Windows, macOS)
* Game engines (Unreal Engine)
* Browsers (Chrome, Firefox)
* Competitive programming
* Embedded systems
* Compilers and interpreters

<div>
    <AdBanner />
</div>

## C++ Interview Questions

<details>
<summary>

**What are the key features of C++?**
</summary>

**Answer:**
C++ supports:
- Object-oriented programming (OOP)
- Compile-time polymorphism
- Memory management via pointers
- STL (Standard Template Library)
- Platform independence
</details>

<details>
<summary>

**What is the difference between C and C++?**
</summary>

**Answer:**
C is procedural; C++ is both procedural and object-oriented.  
C lacks features like classes, objects, and templates.
</details>

<details>
<summary>

**Explain constructors and destructors.**
</summary>

**Answer:**
- **Constructor** initializes objects automatically.
- **Destructor** frees memory when an object goes out of scope.
</details>

<details>
<summary>

**What is the use of `this` pointer?**
</summary>

**Answer:**
`this` pointer refers to the current instance of a class and resolves naming conflicts between class data members and local variables.
</details>

<details>
<summary>

**What is function overloading?**
</summary>

**Answer:**
It allows multiple functions with the same name but different parameters.
</details>

<details>
<summary>

**What are access specifiers in C++?**
</summary>

**Answer:**
- `public`: accessible everywhere  
- `private`: accessible only within the class  
- `protected`: accessible in class and derived classes
</details>

<details>
<summary> 

**What is the difference between `new` and `malloc()`?** 
</summary>

**Answer:**
`new` is type-safe and calls constructors.  
`malloc()` is from C, doesn’t call constructors or check type.
</details>

<details>
<summary>

**What are templates in C++?**
</summary>

**Answer:**
Templates allow **generic programming**, enabling functions and classes to work with any data type.
</details>

<div>
    <AdBanner />
</div>

## Further Reading

* [C++ Official Documentation](https://isocpp.org/)
* [CompilerSutra C++ Module](https://compilersutra.com/docs/c++/CppTutorial)
* [GeeksforGeeks C++ Basics](https://www.geeksforgeeks.org/c-plus-plus/)
* [Learn C++ from Scratch](https://www.learncpp.com/)
* [Competitive Programming in C++](https://compilersutra.com/docs/DSA/)

<Tabs>
  <TabItem value="docs" label="📚 Documentation">
        - [CompilerSutra Home](https://compilersutra.com)
        - [C++ Main File Explained](https://compilersutra.com/docs/c++/c++_main_file)
        - [C++ Advanced Concepts](https://compilersutra.com/docs/c++/CppTutorial)
        - [OOP in C++](https://compilersutra.com/docs/c++/oop)
  </TabItem>

  <TabItem value="tutorials" label="📖 Tutorials & Guides">
        - [DSA in C++](https://compilersutra.com/docs/DSA/)
        - [Competitive Programming Setup](https://compilersutra.com/docs/cpp/competitive-setup)
        - [STL Reference](https://compilersutra.com/docs/cpp/stl)
  </TabItem>

  <TabItem value="projects" label="🛠️ Projects">
        - [Mini Compiler Project](https://compilersutra.com/docs/Project)
        - [FixIt GitHub](https://github.com/aabhinavg1/FixIt)
  </TabItem>

  <TabItem value="social" label="📣 Social Media">
        - [🐦 Twitter - CompilerSutra](https://twitter.com/CompilerSutra)
        - [💼 LinkedIn - CompilerSutra](https://www.linkedin.com/company/compilersutra/?viewAsMember=true/)
        - [📺 YouTube - CompilerSutra](https://www.youtube.com/@compilersutra)
  </TabItem>
</Tabs>
```