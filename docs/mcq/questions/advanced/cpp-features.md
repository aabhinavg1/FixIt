---
id: cpp-features-11-14-17-20
title: C++11/14/17/20 Features
description: |
  Explore the powerful features introduced in the C++11, C++14, C++17, and C++20 standards. This guide covers the evolution of the language, from modernizing syntax and improving performance to adding powerful libraries and tools for developers. Learn about new data structures, concurrency features, lambda expressions, auto types, smart pointers, and more. Stay up-to-date with the best practices for using the most recent C++ standards in real-world applications.
keywords:
  - C++11 Features
  - C++14 Features
  - C++17 Features
  - C++20 Features
  - Modern C++ Syntax
  - C++ Lambda Expressions
  - C++ Auto Type
  - Smart Pointers
  - C++ Concurrency
  - C++ Ranges
  - C++ Modules
  - C++ Templates
  - C++ Type Inference
  - C++ Standard Library
  - C++ Algorithms
  - C++ Language Evolution
  - C++ Data Structures
  - C++ Memory Management
  - C++ Performance Optimization
  - C++ Standardization

tags:
  - C++11
  - C++14
  - C++17
  - C++20
  - Modern C++
  - C++ Syntax
  - C++ Lambda
  - C++ Auto
  - Smart Pointers
  - C++ Concurrency
  - C++ Memory Management
  - C++ Data Structures
  - C++ Ranges
  - C++ Templates
  - Type Inference
  - C++ Algorithms
  - C++ Modules
  - C++ Performance


---
import { Question } from '../../Question';

# C++11/14/17/20 Features

<Question
  question="1).What new feature was introduced in C++11?"
  options={['Lambda functions', 'Range-based for loops', 'Move semantics', 'All of the above']}
  answer="All of the above"
/>
<Question
  question="2).What is 'auto' keyword used for in C++11?"
  options={['Automatic type deduction', 'Declaring variables', 'Dynamic memory allocation', 'None of the above']}
  answer="Automatic type deduction"
/>
<Question
  question="3).What is the 'nullptr' keyword in C++11?"
  options={['A type-safe null pointer constant', 'A reference to null', 'An undefined pointer', 'None of the above']}
  answer="A type-safe null pointer constant"
/>
<Question
  question="4).Which of the following features was added in C++14?"
  options={['Lambda expression return type deduction', 'constexpr variables', 'Explicit casting', 'None of the above']}
  answer="Lambda expression return type deduction"
/>
<Question
  question="5).Which feature was introduced in C++17?"
  options={['std::filesystem', 'std::optional', 'Structured bindings', 'All of the above']}
  answer="All of the above"
/>
<Question
  question="6).Which feature is introduced in C++20?"
  options={['Modules', 'Concepts', 'Coroutines', 'All of the above']}
  answer="All of the above"
/>
<Question
  question="7).What is the purpose of 'std::optional' in C++17?"
  options={['To represent an object that may or may not have a value', 'To represent null objects', 'To represent a collection of values', 'None of the above']}
  answer="To represent an object that may or may not have a value"
/>
<Question
  question="8).What does 'std::byte' represent in C++17?"
  options={['A byte of memory', 'A reference to a byte', 'An object of type byte', 'None of the above']}
  answer="A byte of memory"
/>
<Question
  question="9).What feature does 'std::coroutine' in C++20 provide?"
  options={['Asynchronous programming', 'Synchronous programming', 'Both synchronous and asynchronous', 'None of the above']}
  answer="Asynchronous programming"
/>
<Question
  question="10).What is the 'concepts' feature in C++20?"
  options={['A way to constrain template parameters', 'A new data structure', 'A new type of pointer', 'None of the above']}
  answer="A way to constrain template parameters"
/>

<Question
  question="11).What does the 'override' keyword do in C++11?"
  options={[ 'Forces a method to be virtual','Explicitly marks a method as overriding a virtual function', 'Prevents method overriding', 'None of the above']}
  answer="Explicitly marks a method as overriding a virtual function"
/>
<Question
  question="12).What is the purpose of 'final' keyword in C++11?"
  options={['Prevents a class from being inherited or method from being overridden', 'Marks the last element in a container', 'Indicates the end of a program', 'None of the above']}
  answer="Prevents a class from being inherited or method from being overridden"
/>
<Question
  question="13).What are 'rvalue references' used for in C++11?"
  options={[ 'Right-side operations only', 'Move semantics and perfect forwarding','Reference counting', 'None of the above']}
  answer="Move semantics and perfect forwarding"
/>
<Question
  question="14).What does 'std::move' do in C++11?"
  options={[ 'Physically moves an object', 'Copies an object efficiently', 'None of the above','Converts an lvalue to an rvalue reference']}
  answer="Converts an lvalue to an rvalue reference"
/>
<Question
  question="15).What is 'std::unique_ptr' in C++11?"
  options={[ 'A pointer that can be copied', 'A reference-counted pointer','A smart pointer with exclusive ownership semantics', 'None of the above']}
  answer="A smart pointer with exclusive ownership semantics"
/>
<Question
  question="16).What is 'std::ranges::views' in C++20?"
  options={['Namespace for range adaptors', 'A way to view memory ranges', 'A deprecated feature', 'None of the above']}
  answer="Namespace for range adaptors"
/>
<Question
  question="17).What is 'std::weak_ptr' used for?"
  options={['Breaking circular references of shared_ptr', 'Strong references', 'Unique ownership', 'None of the above']}
  answer="Breaking circular references of shared_ptr"
/>
<Question
  question="18).What are 'constexpr' functions in C++11?"
  options={['Functions that can be evaluated at compile time', 'Constant functions', 'Functions that cannot be optimized', 'None of the above']}
  answer="Functions that can be evaluated at compile time"
/>
<Question
  question="19).What is 'std::initializer_list' used for?"
  options={['Initializing containers with list syntax', 'Dynamic lists', 'Linked lists', 'None of the above']}
  answer="Initializing containers with list syntax"
/>
<Question
  question="20).What does '= delete' syntax do in C++11?"
  options={['Explicitly deletes a function', 'Deletes an object', 'Marks a function as deprecated', 'None of the above']}
  answer="Explicitly deletes a function"
/>
<Question
  question="21).What are binary literals in C++14?"
  options={[ 'Hexadecimal literals','Literals prefixed with 0b or 0B', 'Octal literals', 'None of the above']}
  answer="Literals prefixed with 0b or 0B"
/>
<Question
  question="22).What are digit separators in C++14?"
  options={['Single quotes used to separate digits in literals', 'Underscores used as separators', 'Commas used as separators', 'None of the above']}
  answer="Single quotes (') used to separate digits in literals"
/>
<Question
  question="23).What is 'std::make_unique' in C++14?"
  options={[ 'A way to copy unique_ptr','A factory function for creating unique_ptr', 'A deprecated feature', 'None of the above']}
  answer="A factory function for creating unique_ptr"
/>
<Question
  question="24).What are generic lambdas in C++14?"
  options={['Lambdas with auto parameters', 'Lambdas that can return any type', 'Lambdas with variable capture', 'None of the above']}
  answer="Lambdas with auto parameters"
/>
<Question
  question="25).What is 'std::exchange' in C++14?"
  options={['Replaces the value of an object and returns its old value', 'Currency conversion', 'A deprecated feature', 'None of the above']}
  answer="Replaces the value of an object and returns its old value"
/>
<Question
  question="26).What is 'std::variant' in C++17?"
  options={[ 'A new container type', 'A variant of vector', 'A type-safe union','None of the above']}
  answer="A type-safe union"
/>
<Question
  question="27).What is 'std::any' in C++17?"
  options={['A type-safe container for single values of any type', 'A replacement for void*', 'A deprecated feature', 'None of the above']}
  answer="A type-safe container for single values of any type"
/>
<Question
  question="28).What is 'if constexpr' in C++17?"
  options={['Compile-time if statement', 'A new loop construct', 'A deprecated feature', 'None of the above']}
  answer="Compile-time if statement"
/>
<Question
  question="29).What are structured bindings in C++17?"
  options={['Decomposing objects into individual variables', 'Binding functions to objects', 'A deprecated feature', 'None of the above']}
  answer="Decomposing objects into individual variables"
/>
<Question
  question="30).What is 'std::string_view' in C++17?"
  options={['A non-owning reference to a string', 'A new string type', 'A deprecated feature', 'None of the above']}
  answer="A non-owning reference to a string"
/>
<Question
  question="31).What is 'std::variant' in C++17?"
  options={['A new container type', 'A type-safe union', 'A variant of vector', 'None of the above']}
  answer="A type-safe union"
/>
<Question
  question="32).What is 'std::any' in C++17?"
  options={[ 'A replacement for void*', 'A deprecated feature','A type-safe container for single values of any type', 'None of the above']}
  answer="A type-safe container for single values of any type"
/>
<Question
  question="33).What is 'if constexpr' in C++17?"
  options={['Compile-time if statement', 'A new loop construct', 'A deprecated feature', 'None of the above']}
  answer="Compile-time if statement"
/>
<Question
  question="34).What are structured bindings in C++17?"
  options={['Decomposing objects into individual variables', 'Binding functions to objects', 'A deprecated feature', 'None of the above']}
  answer="Decomposing objects into individual variables"
/>
<Question
  question="35).What is 'std::string_view' in C++17?"
  options={[ 'A new string type', 'A deprecated feature', 'None of the above','A non-owning reference to a string']}
  answer="A non-owning reference to a string"
/>
<Question
  question="36).What does 'decltype' do in C++11?"
  options={['Deduces the type of an expression', 'Declares a new type', 'Deletes a type', 'None of the above']}
  answer="Deduces the type of an expression"
/>

<Question
  question="37).What is 'std::tuple' in C++11?"
  options={[ 'A type of smart pointer','Fixed-size collection of heterogeneous values', 'A mathematical tuple class', 'None of the above']}
  answer="Fixed-size collection of heterogeneous values"
/>

<Question
  question="38).What does 'noexcept' specify in C++11?"
  options={['That a function will not throw exceptions', 'That a function must throw exceptions', 'That exceptions are disabled', 'None of the above']}
  answer="That a function will not throw exceptions"
/>
<Question
  question="39).What are variable templates in C++14?"
  options={[ 'Variables that can store templates', 'Templates that can represent variables','Special template variables', 'None of the above']}
  answer="Templates that can represent variables"
/>

<Question
  question="40).What is 'std::quoted' in C++14?"
  options={['Manipulator for quoted string I/O', 'A string quoting function', 'A deprecated feature', 'None of the above']}
  answer="Manipulator for quoted string I/O"
/>
<Question
  question="41).What is 'std::apply' in C++17?"
  options={['Applies a function to a range', 'A deprecated feature','Invokes a callable with arguments from a tuple',  'None of the above']}
  answer="Invokes a callable with arguments from a tuple"
/>

<Question
  question="42).What is 'std::invoke' in C++17?"
  options={[ 'A way to invoke threads', 'A deprecated feature', 'None of the above','Generic function call wrapper']}
  answer="Generic function call wrapper"
/>

<Question
  question="43).What are 'inline variables' in C++17?"
  options={['Variables that can be defined in headers without ODR violations', 'Variables that must be inlined', 'A deprecated feature', 'None of the above']}
  answer="Variables that can be defined in headers without ODR violations"
/>
<Question
  question="44).What is 'std::source_location' in C++20?"
  options={[ 'A way to locate memory sources','Class representing source code location information', 'A deprecated feature', 'None of the above']}
  answer="Class representing source code location information"
/>

<Question
  question="45).What are 'std::span' constexpr constructors in C++20?"
  options={[ 'Make span constructors constant', 'A deprecated feature','Allow span to be used in constant expressions', 'None of the above']}
  answer="Allow span to be used in constant expressions"
/>
<Question
  question="46).What is 'std::reduce' in C++17?"
  options={['Parallel version of std::accumulate', 'A way to reduce memory usage', 'A deprecated feature', 'None of the above']}
  answer="Parallel version of std::accumulate"
/>

<Question
  question="47).What is 'std::sample' in C++17?"
  options={[ 'Takes a statistical sample','Selects n random elements from a sequence', 'A deprecated feature', 'None of the above']}
  answer="Selects n random elements from a sequence"
/>

<Question
  question="48).What is 'std::clamp' in C++17?"
  options={['Constrains a value between a pair of boundary values', 'A tool for clamping variables', 'A deprecated feature', 'None of the above']}
  answer="Constrains a value between a pair of boundary values"
/>
<Question
  question="49).What is 'std::same_as' concept in C++20?"
  options={[ 'Checks for similar types', 'A deprecated feature', 'Checks if two types are the same','None of the above']}
  answer="Checks if two types are the same"
/>

<Question
  question="50).What is 'std::convertible_to' concept in C++20?"
  options={[ 'Checks for type conversion operators', 'A deprecated feature', 'None of the above','Checks if one type can be converted to another']}
  answer="Checks if one type can be converted to another!!!"
/>


