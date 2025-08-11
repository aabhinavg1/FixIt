---
title: "C++ Template Interview Questions for Freshers with Answers"
description: "A complete set of interview questions on C++ templates. Covers function templates, class templates, specialization, template parameters, and best practices for generic programming."
keywords:
- Template Metaprogramming
- Variadic Templates
- Template Parameters
- Non-type Template Parameters
- Template Inheritance
- Template Instantiation
- Template Argument Deduction
- Default Template Arguments
- CRTP (Curiously Recurring Template Pattern)
- SFINAE (Substitution Failure Is Not An Error)
- Concepts in C++20
- C++20 Templates
- Templates vs Macros in C++
- Template Best Practices
- Nested Templates in C++
- Template Overloading in C++
- Partial Template Specialization
- Template Type Traits
- STL Templates
- Compile-time Programming in C++

---

import { ComicQA } from '../Question_comics' ;

<ComicQA
  question="1) What is a template in C++?"
  answer="A template is a feature in C++ that allows functions and classes to operate with generic types, enabling code reusability."
  code={`template <typename T>
T add(T a, T b) {
    return a + b;
}
int main() {
    cout << add(2, 3) << endl;      // int
    cout << add(2.5, 3.1) << endl;  // double
}`}
  example={`// One function works for multiple data types.`}
  whenToUse="When you need the same logic for different data types without code duplication."
/>

<ComicQA
  question="2) What are the types of templates in C++?"
  answer="C++ supports:
1. Function Templates
2. Class Templates
3. Variable Templates (C++14 and later)."
  code={`template <typename T> // function
template <class T> class MyClass {}; // class`}
  example={`// Variable template example:
template<typename T>
T pi = T(3.14159);`}
  whenToUse="Choose based on whether you need a generic function, class, or constant."
/>

<ComicQA
  question="3) What is the syntax of a function template?"
  answer="A function template is defined using the `template` keyword followed by template parameters in angle brackets."
  code={`template <typename T>
T multiply(T a, T b) {
    return a * b;
}`}
  example={`// Works with int, float, double, etc.`}
  whenToUse="Use function templates when the function logic is type-independent."
/>

<ComicQA
  question="4) What is a class template?"
  answer="A class template allows defining a class to work with any data type."
  code={`template <typename T>
class Box {
    T value;
public:
    Box(T v) : value(v) {}
    T getValue() { return value; }
};`}
  example={`Box<int> intBox(10);
Box<string> strBox("Hello");`}
  whenToUse="Use when designing containers or utility classes that must handle multiple data types."
/>

<ComicQA
  question="5) What is template specialization?"
  answer="Template specialization allows customizing a template for a specific type."
  code={`template <typename T>
class Printer {
public:
    void print(T value) { cout << value; }
};

// Specialization for char*
template <>
class Printer<char*> {
public:
    void print(char* value) { cout << "C-string: " << value; }
};`}
  example={`Printer<int> p1; p1.print(42);
Printer<char*> p2; p2.print("Hello");`}
  whenToUse="Use when generic logic doesn't suit a particular data type."
/>

<ComicQA
  question="6) What is the difference between template and macro?"
  answer="Templates are type-safe and checked at compile-time; macros are preprocessor directives without type checking."
  code={`#define SQUARE(x) (x*x)
template <typename T>
T square(T x) { return x*x; }`}
  example={`// Macro: SQUARE(2+3) -> 2+3*2+3 (wrong)
Template: square(2+3) -> 25 (correct)`}
  whenToUse="Prefer templates over macros for type safety and maintainability."
/>

<ComicQA
  question="7) Can templates have multiple parameters?"
  answer="Yes, you can define multiple template parameters separated by commas."
  code={`template <typename T, typename U>
void show(T a, U b) {
    cout << a << " " << b;
}`}
  example={`show(10, "Hello");`}
  whenToUse="Use when you need a generic function or class working with more than one type."
/>

<ComicQA
  question="8) What is a non-type template parameter?"
  answer="A non-type template parameter is a constant value (like int, char, or pointer) passed to a template."
  code={`template <typename T, int size>
class Array {
    T arr[size];
};`}
  example={`Array<int, 5> myArray;`}
  whenToUse="Use for fixed-size arrays or compile-time constants."
/>

<ComicQA
  question="9) What is template instantiation?"
  answer="Template instantiation is the process where the compiler generates a specific version of the template for the given types."
  code={`add<int>(2, 3); // instantiates int version`}
  example={`Compiler generates type-specific code at compile time.`}
  whenToUse="Happens automatically when you use a template with a specific type."
/>

<ComicQA
  question="10) What is the difference between class template and template class?"
  answer="They are the same — 'class template' is the correct term; 'template class' is an informal way of saying it."
  code={`template <typename T>
class Example { /* ... */ };`}
  example={`Example<int> obj;`}
  whenToUse="Use correct terminology in interviews to avoid confusion."
/>

<ComicQA
  question="11) What is partial template specialization?"
  answer="It allows customizing a template for a subset of template parameters."
  code={`template <typename T1, typename T2>
class MyPair { /* generic */ };

template <typename T>
class MyPair<T, int> { /* specialized */ };`}
  example={`MyPair<double, int> obj;`}
  whenToUse="When you need special behavior for certain parameter combinations."
/>

<ComicQA
  question="12) Can templates be overloaded?"
  answer="Yes, you can overload function templates like normal functions."
  code={`template <typename T>
void func(T a) { cout << a; }

template <typename T1, typename T2>
void func(T1 a, T2 b) { cout << a << " " << b; }`}
  example={`func(10); func(10, "Hi");`}
  whenToUse="When you need multiple versions of a template with different parameters."
/>

<ComicQA
  question="13) What is variadic template in C++?"
  answer="Introduced in C++11, variadic templates allow functions/classes to take a variable number of template parameters."
  code={`template<typename... Args>
void printAll(Args... args) {
    (cout << ... << args);
}`}
  example={`printAll(1, "Hello", 3.14);`}
  whenToUse="When the number of arguments is unknown at compile time."
/>

<ComicQA
  question="14) What is SFINAE in templates?"
  answer="SFINAE (Substitution Failure Is Not An Error) is a rule where invalid template substitutions are discarded instead of causing a compile error."
  code={`template<typename T>
auto test(T t) -> decltype(t.begin(), void()) { cout << "Has begin()"; }`}
  example={`Used in template metaprogramming to check type traits.`}
  whenToUse="When you need to enable/disable template functions based on type properties."
/>

<ComicQA
  question="15) Can templates be used with default parameters?"
  answer="Yes, templates can have default type or non-type parameters."
  code={`template<typename T = int, int size = 10>
class Array { T arr[size]; };`}
  example={`Array<> arr; // uses int and size 10`}
  whenToUse="When you want default behavior but allow customization."
/>

<ComicQA
  question="16) What are template aliases?"
  answer="Template aliases (using) create shorthand names for template types."
  code={`template<typename T>
using Vec = std::vector<T>;
Vec<int> v;`}
  example={`// Vec<int> is the same as std::vector<int>`}
  whenToUse="To make template usage cleaner and easier to read."
/>

<ComicQA
  question="17) Can templates be declared in a .cpp file?"
  answer="No, template definitions must be in the header file so the compiler can instantiate them when needed."
  code={`// mytemplate.h
template<typename T>
T add(T a, T b) { return a + b; }`}
  example={`Put template code in .h to avoid linker errors.`}
  whenToUse="Always define templates in headers."
/>

<ComicQA
  question="18) What is the difference between typename and class in templates?"
  answer="In template parameter lists, `typename` and `class` are interchangeable for type parameters."
  code={`template<typename T> // same as template<class T>`}
  example={`Both are identical except in dependent scope declarations.`}
  whenToUse="Prefer 'typename' for clarity when indicating a type parameter."
/>

<ComicQA
  question="19) What are template constraints (C++20)?"
  answer="Constraints allow restricting template parameters using concepts."
  code={`template<typename T>
concept Number = std::is_arithmetic_v<T>;

template<Number T>
T add(T a, T b) { return a + b; }`}
  example={`add(1, 2); // works
add("a", "b"); // compile error`}
  whenToUse="To make templates safer and produce better compile-time errors."
/>

<ComicQA
  question="20) What is template metaprogramming?"
  answer="Template metaprogramming uses templates to perform computations at compile time."
  code={`template<int N>
struct Factorial { static const int value = N * Factorial<N-1>::value; };

template<>
struct Factorial<0> { static const int value = 1; };`}
  example={`Factorial<5>::value; // 120`}
  whenToUse="When you need compile-time computations or type traits."
/>
