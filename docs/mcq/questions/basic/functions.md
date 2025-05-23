---
id: functions
title: Functions in C++ Multiple Choice Questions (MCQs)
description: |
  This set of C++ Multiple Choice Questions (MCQs) focuses on functions in C++, covering function declarations, definitions, arguments, return types, and various advanced topics such as recursion, function overloading, and inline functions. Ideal for learners to test their understanding of C++ function fundamentals and advanced usage.
keywords:
  - C++ Functions
  - Function Declaration in C++
  - Function Definition in C++
  - Function Overloading in C++
  - Inline Functions in C++
  - C++ Recursion
  - C++ Function Pointers
  - Return Types in C++
  - C++ Argument Passing
  - C++ Variable Arguments
  - C++ Function Templates
  - C++ Call by Value
  - C++ Call by Reference
  - C++ Function Scope
  - C++ Lambda Functions
  - C++ Interview Questions
  - C++ MCQs

tags:
  - C++ Functions
  - Function Overloading
  - C++ Recursion
  - Function Pointers
  - Inline Functions
  - C++ MCQs
  - C++ Call by Value
  - C++ Call by Reference
  - C++ Argument Passing
  - Variable Arguments in C++
  - C++ Function Templates
  - C++ Lambda Expressions
  - C++ Interview Questions
  - Function Scope in C++
  - C++ Programming Challenges

---

import AdBanner from '@site/src/components/AdBanner';
import { Question } from '../../Question';  // Adjust the path to your Question.js component

<Question
  question="1).Which keyword is used to define a function in C++?"
  options={['function', 'def', 'void', 'None of the above']}
  answer="None of the above"
/>

<Question
  question="2).What is the correct way to declare a function that returns an integer?"
  options={['int func();', 'void func();', 'function int();', 'declare int func();']}
  answer="int func();"
/>

<Question
  question="3).Which of the following is a valid function name in C++?"
  options={['1main', '_start', 'float', 'void']}
  answer="_start"
/>

<Question
  question="4).What is the return type of a function that doesn't return anything?"
  options={['null', 'int', 'void', 'none']}
  answer="void"
/>

<Question
  question="5).How are parameters passed by default in C++?"
  options={['By reference', 'By value', 'By pointer', 'None of the above']}
  answer="By value"
/>

<Question
  question="6).Which of the following defines a function with default arguments?"
  options={['void display(int x=10);', 'display(int x==10);', 'default display(x);', 'int x=10 = display();']}
  answer="void display(int x=10);"
/>

<Question
  question="7).What is function overloading in C++?"
  options={['Calling a function twice', 'Defining multiple functions with same name but different parameters', 'Using multiple return values', 'None of the above']}
  answer="Defining multiple functions with same name but different parameters"
/>

<Question
  question="8).Which keyword is used to return a value from a function?"
  options={['output', 'return', 'send', 'pass']}
  answer="return"
/>

<Question
  question="9).What is recursion in C++?"
  options={['A function calling itself', 'A function with no return type', 'A loop inside a function', 'None of the above']}
  answer="A function calling itself"
/>

<Question
  question="10).Which of these can be used to stop a recursive function from infinite calls?"
  options={['while loop', 'base condition', 'return 0', 'None of the above']}
  answer="base condition"
/>

<div>
<AdBanner />
</div>

<Question
  question="11).Which function is automatically called when a program starts in C++?"
  options={['start()', 'begin()', 'main()', 'init()']}
  answer="main()"
/>

<Question
  question="12).Which of the following is a function prototype?"
  options={['int add(int, int);', 'add(int a, int b)', 'int add(int a = 0, int b = 0);', 'None of the above']}
  answer="int add(int, int);"
/>

<Question
  question="13).Which is true about inline functions in C++?"
  options={['They are slower', 'They increase function call overhead', 'They replace the call with function code', 'They must be recursive']}
  answer="They replace the call with function code"
/>

<Question
  question="14).What is the purpose of 'const' in a function parameter?"
  options={['To allow modification', 'To prevent changes to the argument', 'To pass by pointer', 'None of the above']}
  answer="To prevent changes to the argument"
/>

<Question
  question="15).Can a function return multiple values directly in C++?"
  options={['Yes, using return statement', 'No', 'Yes, by returning a tuple or struct', 'Only in main function']}
  answer="Yes, by returning a tuple or struct"
/>

<Question
  question="16).Which of the following allows a function to accept a variable number of arguments?"
  options={['Template functions', 'Function overloading', 'Variadic functions', 'None of the above']}
  answer="Variadic functions"
/>

<Question
  question="17).Which symbol is used to define the scope resolution operator in C++?"
  options={['::', '->', '.', ':']}
  answer="::"
/>

<Question
  question="18).Which header is needed for using mathematical functions like sqrt()?"
  options={['<iostream>', '<cmath>', '<math.h>', '<mathlib.h>']}
  answer="<cmath>"
/>

<Question
  question="19).What is a pure virtual function?"
  options={['A function without a body, defined using = 0', 'A function with static keyword', 'A template function', 'None of the above']}
  answer="A function without a body, defined using = 0"
/>

<Question
  question="20).Where is a local variable defined?"
  options={['Outside all functions', 'In the header file', 'Inside a function', 'In global scope']}
  answer="Inside a function"
/>

<div>
<AdBanner />
</div>

<Question
  question="21).Can a function be declared inside a class in C++?"
  options={['No', 'Only static functions', 'Yes', 'Only in public section']}
  answer="Yes"
/>

<Question
  question="22).What is the purpose of a function prototype?"
  options={['To declare a variable', 'To call a function', 'To define the function body', 'To declare a function signature before its definition']}
  answer="To declare a function signature before its definition"
/>

<Question
  question="23).Which of the following is true for pass-by-reference?"
  options={['Copies the value', 'Uses a pointer internally', 'Creates a new object', 'Consumes more memory']}
  answer="Uses a pointer internally"
/>

<Question
  question="24).Which keyword is used to define a function that cannot be overridden?"
  options={['const', 'final', 'static', 'override']}
  answer="final"
/>

<Question
  question="25).Can a function be overloaded based on return type alone?"
  options={['Yes', 'No', 'Only in templates', 'Only in classes']}
  answer="No"
/>

<Question
  question="26).What does the following function signature mean: `void func(int& x)`?"
  options={['Function accepts pointer', 'Function returns a value', 'Function accepts a reference', 'Function uses default arguments']}
  answer="Function accepts a reference"
/>

<Question
  question="27).What is the lifetime of a static local variable in a function?"
  options={['Till function ends', 'Global', 'Until main ends', 'Throughout the program execution']}
  answer="Throughout the program execution"
/>

<Question
  question="28).What happens if you don't provide a return value in a non-void function?"
  options={['Error', 'Garbage value may be returned', 'Zero is returned', 'Compiler fixes it']}
  answer="Garbage value may be returned"
/>

<Question
  question="29).Which function is used to get the absolute value in C++?"
  options={['abs()', 'absolute()', 'fabs()', 'mod()']}
  answer="abs()"
/>

<Question
  question="30).Can functions be nested in C++?"
  options={['Yes', 'No', 'Only member functions', 'Only inline functions']}
  answer="No"
/>

<div>
<AdBanner />
</div>

<Question
question="31).What is the purpose of the 'inline' keyword in function declaration?"
  options={['To make the function recursive', 'To suggest compiler to expand function code at call site', 'To make the function global', 'To prevent function overloading']}
  answer="To suggest compiler to expand function code at call site"
/>

<Question
  question="32).What is a lambda function in C++?"
  options={['A function defined inside another function', 'An anonymous function object', 'A virtual function', 'A recursive function']}
  answer="An anonymous function object"
/>

<Question
  question="33). What is the return type of a function that doesn't return anything?"
  options={['null', 'int', 'void', 'none']}
  answer="void"
/>

<Question
  question="34).Which storage class specifier makes a function visible only within its translation unit?"
  options={['static', 'extern', 'auto', 'register']}
  answer="static"
/>

<Question
  question="35).How many values can a C++ function return directly using the return statement?"
  options={['Only 1', 'Up to 3', 'Unlimited', 'Depends on compiler']}
  answer="Only 1"
/>

<Question
  question="36).What is function hiding in C++?"
  options={['When a derived class function hides base class functions with same name', 'Making functions private', 'Using anonymous functions', 'When functions are optimized away by compiler']}
  answer="When a derived class function hides base class functions with same name"
/>


<Question
 question="37).Which of these function declarations is invalid?"
 options={['int func(int);', 'int func(int x);', 'int func(int x = 5);', 'int func(x);']}
 answer="int func(x);"
/>

<Question
 question="38).Which of these is NOT a valid function qualifier in C++?"
 options={['const', 'volatile', 'mutable', 'override']}
 answer="mutable"
/>

<Question 
  question="39).What does a pure virtual function in C++ imply about its class?" 
  options={['The class cannot be instantiated', 'The class must be final', 'The class must be derived', 'The class is abstract']} answer="The class is abstract" 
/> 

<Question
  question="40).Which of these function declarations uses perfect forwarding?"
  options={['void func(T&& t);', 'void func(T& t);', 'void func(const T& t);', 'void func(T t);']}
  answer="void func(T&& t);"
/>

<div>
<AdBanner />
</div>


<Question
  question="41).What does the 'noexcept' specifier indicate in a C++ function?"
  options={['The function does not return', 'The function may throw exceptions', 'The function does not throw exceptions', 'The function must return an exception']}
  answer="The function does not throw exceptions"
/>

<Question
  question="42).Which of the following is used to define a function outside a class in C++?"
  options={['Using :: operator', 'Using -> operator', 'Using the & symbol', 'Using the this pointer']}
  answer="Using :: operator"
/>

<Question
  question="43).What is the default return type of a function in C++ if none is specified?"
  options={['int', 'void', 'float', 'It causes a compile error']}
  answer="int"
/>

<Question
  question="44).Which of the following allows a function to accept arguments of any type?"
  options={['Templates', 'Function pointers', 'Lambda expressions', 'Virtual functions']}
  answer="Templates"
/>

<Question
  question="45).Which function qualifier prevents a member function from modifying any class member?"
  options={['const', 'static', 'inline', 'final']}
  answer="const"
/>

<Question
  question="46).Which of the following is true about function pointers in C++?"
  options={['They point to data variables', 'They can store the address of any variable', 'They point to functions of specific signature', 'They are not allowed in C++']}
  answer="They point to functions of specific signature"
/>

<Question
  question="47).How can you define a recursive lambda function in C++11 or later?"
  options={['Using auto keyword', 'Using std::function', 'Using global variable', 'You can’t define recursive lambdas']}
  answer="Using std::function"
/>

<Question
  question="48).Which of the following allows changing a function’s behavior at runtime in C++?"
  options={['Virtual functions', 'Const functions', 'Inline functions', 'Static functions']}
  answer="Virtual functions"
/>

<Question
  question="49).What happens if you declare a function but never define it?"
  options={['It is ignored by the compiler', 'It causes a runtime error', 'It causes a linker error', 'The function returns 0 by default']}
  answer="It causes a linker error"
/>

<Question
  question="50).Which of the following is NOT a valid way to pass arguments to a function?"
  options={['Pass by value', 'Pass by reference', 'Pass by name', 'Pass by pointer']}
  answer="Pass by name"
/>

<div>
<AdBanner />
</div>
