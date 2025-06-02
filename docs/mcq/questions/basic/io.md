---
id: io
title: Input Output C++ Multiple Choice Questions (MCQs)
description: |
  Test your knowledge on C++ Input and Output operations with this set of Multiple Choice Questions (MCQs). The questions cover topics like `cin`, `cout`, file handling, streams, and error handling, essential for any C++ programmer. Ideal for beginners and those preparing for C++ interviews, this quiz will help you strengthen your understanding of I/O operations in C++.
keywords:
  - C++ Input and Output
  - C++ cin
  - C++ cout
  - C++ File Handling
  - C++ Streams
  - C++ Input
  - C++ Output
  - C++ Error Handling
  - C++ I/O Operations
  - C++ MCQs
  - C++ Interview Questions
  - C++ Programming
  - C++ Input-Output Quiz
  - C++ File Streams
  - C++ I/O Functions
  - C++ Stream Manipulators
  - C++ I/O Techniques
  - C++ Text File Handling
  - C++ Binary File Handling

tags:
  - C++ Input and Output
  - C++ MCQs
  - C++ File Handling
  - C++ Streams
  - cin and cout
  - C++ File Streams
  - C++ Error Handling
  - C++ I/O Functions
  - C++ Interview Questions
  - Programming Quiz
  - C++ Input
  - C++ Output
  - C++ Text File Handling
  - C++ Binary Files
  - Stream Manipulators
  - Beginner C++
  - C++ Programming Fundamentals

---

import { Question } from '../../Question';  // Adjust the path to your Question.js component

  <Question
    question="1).What is the correct way to declare a function in C++?"
    options={[ 'functionName() void', 'void functionName()','function void()', 'None of the above']}
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
    options={[ 'Functions with the same name and parameters cannot be overloaded', 'Function overloading is not allowed in C++', 'Functions with the same name but different parameter types can be overloaded','None of the above']}
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
    options={['int factorial(int n) { return n * factorial(n); }','int factorial(int n) { if (n == 0) return 1; else return n * factorial(n-1); }',  'int factorial(int n) { return n; }', 'None of the above']}
    answer="int factorial(int n) { if (n == 0) return 1; else return n * factorial(n-1); }"
  />

  <Question
    question="8).What does the `inline` keyword do in C++?"
    options={[ 'It defines a function with no return type', 'It ensures the function is only called once', 'It tells the compiler to insert the function code directly at the point of call','None of the above']}
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
  <div>
<AdBanner />
</div>

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
  options={['4 decimal places',  '2 decimal places', '8 decimal places','6 decimal places']}
  answer="6 decimal places"
/>

<div>
<AdBanner />
</div>

<Question
  question="21). What is the use of 'ios::fixed'?"
  options={['Forces floating-point numbers to be displayed in fixed notation', 'Rounds the numbers', 'Sets precision to default', 'None of the above']}
  answer="Forces floating-point numbers to be displayed in fixed notation"
/>

<Question
  question="22). How do you flush the output buffer manually?"
  options={['cin.flush();','cout.flush();',  'flush();', 'None of the above']}
  answer="cout.flush();"
/>

<Question
    question="23). What will be the output of the following code? "
    code= {`#include <iostream>
          using namespace std;
          int main() {
            int x = 5;
            cout << x++ * ++x;
            return 0;
          }`}
    options={['30', '35', '25', 'Undefined behavior']}
    answer="35"
/>

<Question
    question="24). Which of the following is true about constructors in C++?"
    options={['Constructors cannot be overloaded', 'Constructors have a return type', 'Constructors are automatically called when an object is created', 'Constructors can only be defined outside a class']}
    answer="Constructors are automatically called when an object is created"
/>

<Question
    question="25). What is the output of the following code? "
    code={`#include <iostream>
          using namespace std;
          int main() {
            char arr[] = 'Hello'              ;
            cout << arr[1] + arr[4];
            return 0;
          }`}
    options={['H', 'o', '181', 'Compilation Error']}
    answer="Compilation Error"
/>

<Question
    question="26). What will be the output of the following code? "
    code={`#include <iostream>
          using namespace std;
          class A {
          public:
              A() { cout << 'A'; }
          };
          class B : public A {
          public:
              B() { cout << 'B'; }
          };
          int main() {
              B obj;
              return 0;
          }`}
    options={['A', 'B', 'AB', 'BA']}
    answer="AB"
/>


<Question
    question="27). What will be the output of this C++ program?" 
    code={`#include <iostream>
          using namespace std;
          int main() {
              int a = 10, b = 0;
              try {
                  if (b == 0)
                      throw "Division by zero error";
                  cout << a / b;
              }
              catch (const char* msg) {
                  cout << msg;
              }
              return 0;
          }`}
    options={['0', '10', 'Division by zero error', 'Compilation Error']}
    answer="Division by zero error"
/>

<Question
    question="28). What is the output of the following code?"
    code={`#include <iostream>
          using namespace std;
          void func(int& x) {
              x = x * 2;
          }
          int main() {
              int a = 5;
              func(a);
              cout << a;
              return 0;
    }`}
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
    code={`#include <iostream>
          using namespace std;
          int main() {
            cout << "C++ " << 2024;
            return 0;
          }`}
    options={['C++2024', 'C++ 2024', 'C+2024', 'Compilation Error']}
    answer="C++ 2024"
/>
<div>
<AdBanner />
</div>

<Question
    question="31).What will be the output of the following code?"
    code={`#include <iostream>
          using namespace std;
          int main() {
            cout << "Hello" << ends << "World";
            return 0;}`}
    options={['HelloWorld','Hello World','Hello\0World','Compilation Error']}
    answer="HelloWorld"
    />

 <Question
    question="32).Which manipulator is used to change the fill character in cout?"
    options={['setfill()','fill()','setw()','padding()']}
    answer="setfill()"
  />

 <Question
    question="33).What will cout << showpos << 25; print?"
    options={['25','+25','25.0','Error']}
    answer="+25"
  />

<Question
    question="34)How do you read an entire line (including spaces) from cin?"
    options={['cin >> line;','getline(cin, line);','cin.read(line);','cin.getline(line);']}
    answer="getline(cin, line);"
/>

<Question
    question="35)What will be the output of this code?"
    code={`#include <iostream>
          using namespace std;
          int main() {
          cout << hex << 255;
          return 0;
        }`}
    options={['255','0xFF','ff','0x255']}
    answer="ff"
/>

<Question
    question=" 36)Which function is used to check if cin has encountered an error?"
    options={['cin.good()','cin.fail()','cin.bad()','All of the above']}
    answer="All of the above"
/>

<Question
    question="37)What does cout << noshowpoint << 10.0; print?"
    options={['10.0','10','10.','None of the above']}
    answer="10"
/>

<Question
    question="38)What is the purpose of cin.ignore(n, ch)?"
    options={['Skips the next n lines','Clears the input buffer completely','Ignores n characters or until ch is encountered','None of the above']}
    answer="Ignores n characters or until ch is encountered"
/>

<Question
    question="39)Which manipulator is used to align output to the left?"
    options={['left','right','adjustleft','setleft']}
    answer="left"
/>

<Question
    question="40)What will cout << boolalpha << true; print?"
    options={['1','True','true','Yes']}
    answer="true"
/>
<div>
<AdBanner />
</div>
<Question
  question="41). What does the `explicit` keyword in C++ prevent?"
  options={[ 'Function overloading', 'Template instantiation', 'Operator overloading','Implicit conversions']}
  answer="Implicit conversions"
/>

<Question
  question="42). Which of the following is the correct way to dynamically allocate memory for an array of 5 integers?"
  options={[ 'int arr = new int[5];', 'int *arr = malloc(5);', 'int *arr = new int[5];','int arr[5] = new int;']}
  answer="int *arr = new int[5];"
/>

<Question
  question="43). Which operator is used to deallocate memory allocated with `new`?"
  options={['delete', 'remove', 'free', 'release']}
  answer="delete"
/>

<Question
  question="44). What does the `this` pointer refer to in a class method?"
  options={[ 'It refers to the base class', 'It refers to the parent function', 'It refers to the memory address of main()','It refers to the current object instance']}
  answer="It refers to the current object instance"
/>

<Question
  question="45). Which of the following is used to define a constant pointer in C++?"
  options={['int* const ptr;', 'const int* ptr;', 'int const* ptr;', 'All of the above']}
  answer="int* const ptr;"
/>

<Question
  question="46). Which C++ keyword is used to prevent a class from being inherited?"
  options={['sealed', 'final', 'static', 'private']}
  answer="final"
/>

<Question
  question="47). What is the default access specifier for members of a C++ class?"
  options={['public', 'private', 'protected', 'None']}
  answer="private"
/>

<Question
  question="48). Which header file is needed to use the `std::vector` container?"
  options={['<array>', '<vector>', '<list>', '<map>']}
  answer="<vector>"
/>

<Question
  question="49). What is the output of `sizeof(char)` in C++?"
  options={['1', '2', '4', 'Depends on compiler']}
  answer="1"
/>

<Question
  question="50). What happens when you delete a null pointer in C++?"
  options={['It throws a runtime error', 'It results in undefined behavior', 'Nothing happens', 'It crashes the program']}
  answer="Nothing happens"
/>
<div>
<AdBanner />
</div>


























