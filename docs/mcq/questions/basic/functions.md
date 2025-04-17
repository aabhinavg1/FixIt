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
