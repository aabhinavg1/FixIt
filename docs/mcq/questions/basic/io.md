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


  <Question
    question="11). What header file is required for using 'cin' and 'cout' in C++?"
    options={['<stdio.h>', '<conio.h>', '<iostream>', '<fstream>']}
    answer="<iostream>"
  />

  
<Question
  question="12). How can you format floating-point numbers to 2 decimal places in C++?"
  options={['setprecision(2);', 'cout.precision(2);', 'cout << fixed << setprecision(2);', 'None of the above']}
  answer="cout << fixed << setprecision(2);"
/>

<Question
  question="13). What will 'cout << 10 / 3;' print?"
  options={['3.33333', '3', '3.0', 'Compilation error']}
  answer="3"
/>

<Question
  question="14). How do you reset 'cin' after an input failure?"
  options={['cin.reset();', 'cin.clear();', 'cin.ignore();', 'cin.flush();']}
  answer="cin.clear();"
/>

<Question
  question="15). How can you print a tab space in 'cout'?"
  options={['tab', '\\t', 'TAB()', '\\n']}
  answer="\t"
/>

<Question
  question="16). What is the default behavior of 'cin' when taking input?"
  options={['It reads a single character', 'It reads an entire line', 'It stops at whitespace', 'It throws an error']}
  answer="It stops at whitespace"
/>

<Question
  question="17). What is the difference between 'endl' and '\\n' in 'cout'?"
  options={['endl flushes the output buffer, \\n does not', '\\n is faster than endl', 'Both insert a new line', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="18). Which operator is used for output in C++?"
  options={['>>', '<<', '->', '<>']}
  answer="<<"
/>

<Question
  question="19). What happens if 'cin' fails to read input (e.g., user enters a string instead of an integer)?"
  options={['It enters a fail state', 'It throws an error', 'It takes default input', 'None of the above']}
  answer="It enters a fail state"
/>

<Question
  question="20). What is the default precision of floating-point numbers in 'cout'?"
  options={['4 decimal places', '6 decimal places', '2 decimal places', '8 decimal places']}
  answer="6 decimal places"
/>

<Question
  question="21). What is the use of 'ios::fixed'?"
  options={['Forces floating-point numbers to be displayed in fixed notation', 'Rounds the numbers', 'Sets precision to default', 'None of the above']}
  answer="Forces floating-point numbers to be displayed in fixed notation"
/>

<Question
  question="22). How do you flush the output buffer manually?"
  options={['cout.flush();', 'cin.flush();', 'flush();', 'None of the above']}
  answer="cout.flush();"
/>

<Question
    question="23). What will be the output of the following code? "
    code= "#include <iostream>
          using namespace std;
          int main() {
            int x = 5;
            cout << x++ * ++x;
            return 0;
          }"
    options={['30', '35', '25', 'Undefined behavior']}
    answer="30"
/>

<Question
    question="24). Which of the following is true about constructors in C++?"
    options={['Constructors cannot be overloaded', 'Constructors have a return type', 'Constructors are automatically called when an object is created', 'Constructors can only be defined outside a class']}
    answer="Constructors are automatically called when an object is created"
/>

<Question
    question="25). What is the output of the following code? "
    code="#include <iostream>
          using namespace std;
          int main() {
            char arr[] = 'Hello';
            cout << arr[1] + arr[4];
            return 0;
          }"
    options={['H', 'o', '181', 'Compilation Error']}
    answer="181"
/>

<Question
    question="26). What will be the output of the following code? "
    code="#include <iostream>
          using namespace std;
          class A {
          public:
              A() { cout << \'A\'; }
          };
          class B : public A {
          public:
              B() { cout << \'B\'; }
          };
          int main() {
              B obj;
              return 0;
          }"
    options={['A', 'B', 'AB', 'BA']}
    answer="AB"
/>


<Question
    question="27). What will be the output of this C++ program?" 
    code="#include <iostream>
          using namespace std;
          int main() {
              int a = 10, b = 0;
              try {
                  if (b == 0)
                      throw \'Division by zero error\';
                  cout << a / b;
              }
              catch (const char* msg) {
                  cout << msg;
              }
              return 0;
          }"
    options={['0', '10', 'Division by zero error', 'Compilation Error']}
    answer="Division by zero error"
/>

<Question
    question="28). What is the output of the following code?"
    code="#include <iostream>
          using namespace std;
          void func(int& x) {
              x = x * 2;
          }
          int main() {
              int a = 5;
              func(a);
              cout << a;
              return 0;
    }"
    options={['5', '10', '0', 'Compilation Error']}
    answer="10"
/>

<Question
    question="29). What happens when a base class constructor is private and a derived class tries to inherit it?"
    options={['It compiles successfully', 'It results in a compilation error', 'It throws an exception at runtime', 'None of the above']}
    answer="It results in a compilation error"
/>

<Question
    question="30). What will be the output of the following program?"
    code="#include <iostream>
          using namespace std;
          int main() {
            cout << 'C++ ' << 2024;
            return 0;
          }"
    options={['C++2024', 'C++ 2024', 'C++\n2024', 'Compilation Error']}
    answer="C++ 2024"
/>