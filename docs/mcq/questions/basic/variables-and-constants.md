---
id: variables-and-constants
title: Variable and Constant C++ Multiple Choice Questions (MCQs)
description: |
  Test your knowledge of variables and constants in C++ with this set of Multiple Choice Questions (MCQs). This quiz covers topics such as variable types, initialization, constant variables, and scope. It’s perfect for beginners who want to understand variable declaration, initialization, and how constants work in C++. Also useful for those preparing for C++ interviews to strengthen foundational knowledge.
keywords:
  - C++ Variables
  - C++ Constants
  - Variable Declaration in C++
  - Constant Variables in C++
  - C++ Initialization
  - C++ Scope of Variables
  - C++ const Keyword
  - C++ Variable Types
  - C++ const int
  - C++ Constant Expressions
  - C++ Programming Basics
  - C++ MCQs
  - C++ Interview Questions
  - C++ Variable Scope
  - C++ const Keyword Usage
  - C++ Data Types
  - C++ Variable Naming
  - C++ Const Pointers

tags:
  - C++ Variables
  - C++ Constants
  - Variable Declaration
  - Constant Variables
  - C++ const Keyword
  - C++ Variable Types
  - C++ Initialization
  - Variable Scope
  - C++ const int
  - C++ Programming Fundamentals
  - C++ MCQs
  - C++ Interview Questions
  - C++ Data Types
  - Constant Expressions
  - C++ Basic Programming
  - C++ Variable Naming Conventions
  - C++ Scope of Variables

---
import { Question } from '../../Question';  // Adjust the path to your Question.js component

// C++ Data Types Quiz

<Question
  question="1).Which of the following is a built-in data type in C++?"
  options={['int', 'string', 'list', 'vector']}
  answer="int"
/>

<Question
  question="2).What is the size of a `float` data type in C++?"
  options={['4 bytes', '8 bytes', '16 bytes', '2 bytes']}
  answer="4 bytes"
/>

<Question
  question="3).Which of the following data types is used to store a single character?"
  options={['char', 'int', 'float', 'string']}
  answer="char"
/>

<Question
  question="4).What is the default value of an uninitialized `int` variable in C++?"
  options={['0', 'undefined', 'null', 'It throws an error.']}
  answer="undefined"
/>

<Question
  question="5).Which of the following is a non-built-in (user-defined) data type in C++?"
  options={['struct', 'int', 'char', 'float']}
  answer="struct"
/>

<Question
  question="6).Which data type would you use to store large integers in C++?"
  options={['long long int', 'int', 'short', 'char']}
  answer="long long int"
/>

<Question
  question="7).Which of the following is the correct syntax to declare a pointer to an integer in C++?"
  options={['int *p;', 'pointer int p;', 'int p*;', 'pointer *int p;']}
  answer="int *p;"
/>

<Question
  question="8).Which of the following data types has the largest range in C++?"
  options={['long long int', 'int', 'float', 'double']}
  answer="long long int"
/>

<Question
  question="9).What is the size of a `bool` data type in C++?"
  options={['1 byte', '4 bytes', '8 bytes', '2 bytes']}
  answer="1 byte"
/>

<Question
  question="10).Which of the following is a valid declaration for a constant variable in C++?"
  options={['const float pi = 3.14;', 'float pi const = 3.14;', 'constant float pi = 3.14;', 'pi = const 3.14;']}
  answer="const float pi = 3.14;"
/>

<Question
  question="11).Which keyword is used to define a constant integer in C++?"
  options={['const', 'define', 'static', 'immutable']}
  answer="const"
/>

<Question
  question="12).What is the result of using an uninitialized local variable in C++?"
  options={['Undefined behavior', 'It is set to 0', 'Compilation error', 'Null value']}
  answer="Undefined behavior"
/>

<Question
  question="13).What does the keyword `constexpr` indicate in C++?"
  options={['A compile-time constant', 'A run-time constant', 'A variable', 'A pointer']}
  answer="A compile-time constant"
/>

<Question
  question="14).Which symbol is used to denote a reference variable in C++?"
  options={['&', '*', '@', '#']}
  answer="&"
/>

<Question
  question="15).What will the following code output?"
  code={`const int x = 5;\n// x = 10;\ncout << x;`}
  options={['5', '10', 'Compilation Error', 'Runtime Error']}
  answer="5"
/>

<Question
  question="16).What is a variable in C++?"
  options={['A name given to a storage location', 'A keyword', 'A type of function', 'None of the above']}
  answer="A name given to a storage location"
/>

<Question
  question="17).Which of the following statements is true about `static` variables in C++?"
  options={['They retain value between function calls', 'They are reinitialized every time', 'They are global', 'They can’t be used in functions']}
  answer="They retain value between function calls"
/>

<Question
  question="18).Which of the following is not a valid variable name in C++?"
  options={['_count', '2value', 'value_2', 'val2']}
  answer="2value"
/>

<Question
  question="19).Which keyword is used to create a symbolic constant in preprocessor?"
  options={['#define', 'const', 'immutable', 'fixed']}
  answer="#define"
/>

<Question
  question="20).Which modifier limits the visibility of a variable to the file it is declared in?"
  options={['static', 'const', 'extern', 'private']}
  answer="static"
/>

<Question
  question="21).Which of the following can be used to initialize a constant reference?"
  options={['An lvalue', 'A temporary value', 'A literal', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="22).What is the scope of a global variable in C++?"
  options={['Throughout the program', 'Inside one function', 'Inside one file', 'Only in main()']}
  answer="Throughout the program"
/>

<Question
  question="23).What does the `extern` keyword signify?"
  options={['A variable is declared but defined elsewhere', 'It is a private variable', 'It is a constant', 'None of the above']}
  answer="A variable is declared but defined elsewhere"
/>

<Question
  question="24).What type will the variable `auto x = 42;` be?"
  options={['int', 'float', 'double', 'Depends on compiler settings']}
  answer="int"
/>

<Question
  question="25).Can a constant variable be initialized later after its declaration?"
  options={['No', 'Yes, only inside a function', 'Yes, with #define', 'Depends on the value']}
  answer="No"
/>

<Question
  question="26).What will this code produce?"
  code={`int x = 10;\nint &ref = x;\nref = 20;\ncout << x;`}
  options={['10', '20', 'Error', 'Undefined']}
  answer="20"
/>

<Question
  question="27).What does `static const int x = 100;` mean?"
  options={['A constant with internal linkage', 'A global constant', 'An undefined constant', 'A pointer to const']}
  answer="A constant with internal linkage"
/>

<Question
  question="28).What happens if you try to modify a `const` variable?"
  options={['Compile-time error', 'It modifies the value', 'Runtime warning', 'Nothing']}
  answer="Compile-time error"
/>

<Question
  question="29).Which of the following keywords is used to create a read-only constant at compile time?"
  options={['constexpr', 'static', 'mutable', 'final']}
  answer="constexpr"
/>

<Question
  question="30).What is the output of the code below?"
  code={`int x = 5;\nconst int* p = &x;\n// *p = 6;\ncout << *p;`}
  options={['6', '5', 'Error', '0']}
  answer="5"
/>
