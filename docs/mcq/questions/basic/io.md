---
title: Input Output C++ Learning Guide
keywords: 
- C++
- learning C++ 
- basics
- cpp mcq
- cpp mcq questions
- cpp interview questions
- c++ mcq
- advanced c++ interview questions
- c++ mcq questions and answers
- C++ programming
- cpp mcqs
- mcq in c++
- variables
- functions
- c++ mcq test
- pointers
- control flow
- loops
---

import { Question } from '../../Question';  // Adjust the path to your Question.js component

  <Question
    question="1).What is the correct way to declare a function in C++?"
    options={['void functionName()', 'functionName() void', 'function void()', 'None of the above']}
    answer="void functionName()"
  />

  <Question
    question="2).Which of the following is the correct syntax for passing arguments to a function in C++?"
    options={['functionName(arg1, arg2)', 'functionName{arg1, arg2}', 'functionName[arg1, arg2]', 'functionName(arg1: arg2)']}
    answer="functionName(arg1, arg2)"
  />

  <Question
    question="3).What is the purpose of the `return` statement in C++ functions?"
    options={['To stop the function execution', 'To return a value to the calling function', 'To pass control to the next function', 'To call another function']}
    answer="To return a value to the calling function"
  />

  <Question
    question="4).Which of the following is true about function overloading in C++?"
    options={['Functions with the same name but different parameter types can be overloaded', 'Functions with the same name and parameters cannot be overloaded', 'Function overloading is not allowed in C++', 'None of the above']}
    answer="Functions with the same name but different parameter types can be overloaded"
  />

  <Question
    question="5).What will happen if a function does not have a return statement in C++?"
    options={['The program will terminate', 'The function will return a random value', 'The function will not return anything', 'Compilation error']}
    answer="The function will not return anything"
  />

  <Question
    question="6).Which keyword is used to define a function in C++ that does not return any value?"
    options={['void', 'return', 'static', 'None of the above']}
    answer="void"
  />

  <Question
    question="7).Which of the following is a valid recursive function in C++?"
    options={['int factorial(int n) { if (n == 0) return 1; else return n * factorial(n-1); }', 'int factorial(int n) { return n * factorial(n); }', 'int factorial(int n) { return n; }', 'None of the above']}
    answer="int factorial(int n) { if (n == 0) return 1; else return n * factorial(n-1); }"
  />

  <Question
    question="8).What does the `inline` keyword do in C++?"
    options={['It tells the compiler to insert the function code directly at the point of call', 'It defines a function with no return type', 'It ensures the function is only called once', 'None of the above']}
    answer="It tells the compiler to insert the function code directly at the point of call"
  />

  <Question
    question="9).What is the correct way to declare a function that returns a pointer to an integer in C++?"
    options={['int* functionName()', 'int functionName*()', 'int* functionName*()', 'None of the above']}
    answer="int* functionName()"
  />

  <Question
    question="10).Which of the following is the correct syntax for passing a reference to a function in C++?"
    options={['functionName(int& x)', 'functionName(&int x)', 'functionName(int* x)', 'None of the above']}
    answer="functionName(int& x)"
  />


