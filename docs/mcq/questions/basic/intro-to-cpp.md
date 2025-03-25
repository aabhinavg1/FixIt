---
title: Intro to the C++ Learning Guide
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

// C++ Introduction Quiz

<Question
  question="1).What is the main purpose of the C++ programming language?"
  options={['To provide a platform-independent programming language for system and application software.',
           'To create web pages.',
           'To design graphics and animations.',
           'To simulate mathematical models in physics and engineering.']}
  answer="To provide a platform-independent programming language for system and application software."
/>

<Question
  question="2).Which of the following is a valid C++ identifier?"
  options={['123abc', '_myVariable', 'int', 'return']}
  answer="_myVariable"
/>

<Question
  question="3).Which of the following is the correct syntax to include a header file in C++?"
  options={['#include <iostream>', 'include iostream.h', '#include iostream', '#import <iostream>']}
  answer="#include <iostream>"
/>

<Question
  question="4).Which of the following is the correct way to print 'Hello, World!' in C++?"
  options={['print("Hello, World!");', 'echo "Hello, World!";', 'cout << "Hello, World!";', 'console.log("Hello, World!");']}
  answer="cout << 'Hello, World!';"
/>

<Question
  question="5).What is the default value of a global variable in C++ if it is not explicitly initialized?"
  options={['0', 'null', 'undefined', 'It throws an error.']}
  answer="0"
/>

<Question
  question="6).Which operator is used to access members of a class in C++?"
  options={['.', '->', '&', '*']}
  answer="."
/>

<Question
  question="7).In C++, which of the following types is used for dynamic memory allocation?"
  options={['new', 'malloc', 'alloc', 'allocmem']}
  answer="new"
/>

<Question
  question="8).Which of the following is the correct way to comment a single line in C++?"
  options={['// This is a comment', '/* This is a comment */', '<!-- This is a comment -->', '# This is a comment']}
  answer="// This is a comment"
/>

<Question
  question="9).Which of the following is the correct syntax to declare a constant in C++?"
  options={['const int x = 10;', 'int x const = 10;', 'constant int x = 10;', 'x = const 10;']}
  answer="const int x = 10;"
/>

<Question
  question="10).Which of the following statements is true about C++ functions?"
  options={['A function must always return a value.',
           'A function may or may not return a value.',
           'A function can only return an integer.',
           'A function cannot take parameters.']}
  answer="A function may or may not return a value."
/>
<Question
  question="11). Which keyword is used to define a constant in C++?"
  options={['final', 'const', 'static', 'immutable']}
  answer="const"
/>

<Question
  question="12). What is the default value of a local variable in C++?"
  options={['0', 'null', 'undefined', 'It throws an error.']}
  answer="It throws an error."
/>

<Question
  question="13). Which of the following is used to declare a pointer in C++?"
  options={['&', '*', '->', '%']}
  answer="*"
/>

<Question
  question="14). What is the result of dividing two integers in C++?"
  options={['Float', 'Integer division', 'Error', 'None of the above']}
  answer="Integer division"
/>

<Question
  question="15). Which of the following is a C++ data type?"
  options={['int', 'string', 'float', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="16). Which of the following is used for input in C++?"
  options={['cin', 'input', 'in', 'printf']}
  answer="cin"
/>

<Question
  question="17). What is the syntax for a C++ multiple-line comment?"
  options={['/* Comment */', '# Comment', '// Comment', '<!-- Comment -->']}
  answer="/* Comment */"
/>

<Question
  question="18). What is the correct way to declare an array in C++?"
  options={['int arr[10];', 'arr int[10];', 'int[10] arr;', 'array arr(10);']}
  answer="int arr[10];"
/>

<Question
  question="19). Which operator is used to access a member of a class in C++?"
  options={['.', '->', '&', '*']}
  answer="."
/>

<Question
  question="20). Which of the following is used to declare a constant in C++?"
  options={['const int x = 10;', 'int x const = 10;', 'constant int x = 10;', 'x = const 10;']}
  answer="const int x = 10;"
/>

<Question
  question="21). Which of the following is true about functions in C++?"
  options={['A function must always return a value', 'A function can return no value (void)', 'A function cannot take parameters', 'A function can only return a string']}
  answer="A function can return no value (void)"
/>

<Question
  question="22). Which of the following is used to include a standard library in C++?"
  options={['#import <iostream>', '#include <iostream>', 'include <iostream>', 'import <iostream>']}
  answer="#include <iostream>"
/>

<Question
  question="23). Which of the following is a valid identifier in C++?"
  options={['123abc', '_myVariable', 'int', 'return']}
  answer="_myVariable"
/>

<Question
  question="24). Which operator is used to compare two values in C++?"
  options={['==', '=', '===', '!=']}
  answer="=="
/>

<Question
  question="25). Which of the following types is used for dynamic memory allocation?"
  options={['malloc', 'alloc', 'new', 'allocmem']}
  answer="new"
/>

<Question
  question="26). What is the size of an `int` in C++?"
  options={['2 bytes', '4 bytes', '8 bytes', '16 bytes']}
  answer="4 bytes"
/>

<Question
  question="27). What does the `new` keyword do in C++?"
  options={['Allocates memory on the stack', 'Allocates memory on the heap', 'Creates a new function', 'Creates a new class']}
  answer="Allocates memory on the heap"
/>

<Question
  question="28). Which of the following is the correct syntax for defining a function in C++?"
  options={['function_name() {}', 'void function_name() {}', 'def function_name() {}', 'function function_name() {}']}
  answer="void function_name() {}"
/>

<Question
  question="29). Which of the following is true about C++ classes?"
  options={['A class is a user-defined data type', 'A class can contain only data', 'A class can contain only functions', 'None of the above']}
  answer="A class is a user-defined data type"
/>

<Question
  question="30). Which of the following is the correct way to declare a pointer in C++?"
  options={['int* ptr;', 'ptr* int;', 'int ptr;', 'pointer int*;']}
  answer="int* ptr;"
/>

<Question
  question="31). Which operator is used for logical AND in C++?"
  options={['&', '&&', '|', '||']}
  answer="&&"
/>

<Question
  question="32). Which operator is used to check inequality in C++?"
  options={['!=', '!==', '!==', '==']}
  answer="!="
/>

<Question
  question="33). What will the following code output?\n\n`int a = 5; int b = 10; cout << a + b;`"
  options={['5', '10', '15', 'Error']}
  answer="15"
/>

<Question
  question="34). How do you define a function in C++ that does not return any value?"
  options={['void function_name()', 'function_name()', 'void function_name(void)', 'None of the above']}
  answer="void function_name()"
/>

<Question
  question="35). Which of the following is the correct way to open a file in C++?"
  options={['fstream.open("file.txt")', 'ifstream("file.txt")', 'ofstream.open("file.txt")', 'ifstream file.open("file.txt")']}
  answer='ifstream file("file.txt");'
/>

<Question
  question="36). Which of the following is used to close a file in C++?"
  options={['file.close()', 'close(file)', 'fstream.close()', 'None of the above']}
  answer="file.close()"
/>

<Question
  question="37). How can you initialize a constant in C++?"
  options={['const int a = 5;', 'int const a = 5;', 'Both of the above', 'None of the above']}
  answer="Both of the above"
/>

<Question
  question="38). Which of the following is used to define a constant pointer in C++?"
  options={['const int* ptr;', 'int* const ptr;', 'const int* const ptr;', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="39). Which of the following is the correct way to print to the console in C++?"
  options={['print("Hello World");', 'printf("Hello World");', 'cout << "Hello World";', 'console.log("Hello World");']}
  answer="cout << 'Hello World';"
/>

<Question
  question="40). What is a virtual function in C++?"
  options={['A function that can be called from any class', 'A function defined with the `virtual` keyword', 'A function that can only be accessed from base class', 'None of the above']}
  answer="A function defined with the `virtual` keyword"
/>

<Question
  question="41). Which of the following is the correct way to call a base class function from a derived class in C++?"
  options={['base::function()', 'super::function()', 'this::function()', 'base.function()']}
  answer="base::function()"
/>

<Question
  question="42). What is the output of the following C++ code?\n\n`int x = 10; cout << x++;`"
  options={['10', '11', 'Error', 'None of the above']}
  answer="10"
/>

<Question
  question="43). Which of the following is the correct syntax for declaring a function pointer in C++?"
  options={['void (*func_ptr)();', 'void func_ptr()', 'func_ptr void ();', 'None of the above']}
  answer="void (*func_ptr)();"
/>

<Question
  question="44). What is the purpose of the `const` keyword in function parameters in C++?"
  options={['To make sure the parameter is not modified', 'To allow the function to modify the parameter', 'To make the function parameter constant for any object', 'None of the above']}
  answer="To make sure the parameter is not modified"
/>

<Question
  question="45). Which of the following is a feature of C++?"
  options={['Object-oriented programming', 'Automatic garbage collection', 'Multi-platform support', 'All of the above']}
  answer="Object-oriented programming"
/>

<Question
  question="46). Which of the following is a correct way to allocate memory for an array of 10 integers in C++?"
  options={['int* arr = new int[10];', 'int arr = new int[10];', 'int arr[10] = new int;', 'None of the above']}
  answer="int* arr = new int[10];"
/>

<Question
  question="47). Which of the following is the correct way to free memory allocated with `new`?"
  options={['free()', 'delete()', 'remove()', 'dealloc()']}
  answer="delete()"
/>

<Question
  question="48). Which of the following is used for exception handling in C++?"
  options={['try-catch', 'throw-catch', 'try-throw', 'None of the above']}
  answer="try-catch"
/>

<Question
  question="49). Which of the following is the correct way to define a default constructor in C++?"
  options={['MyClass() {}', 'MyClass(void) {}', 'MyClass()', 'All of the above']}
  answer="MyClass() {}"
/>

<Question
  question="50). How do you define a class in C++?"
  options={['class MyClass {};', 'class MyClass() {};', 'MyClass class {};', 'None of the above']}
  answer="class MyClass {};"
/>
