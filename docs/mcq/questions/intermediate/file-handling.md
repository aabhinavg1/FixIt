---
title: "C++ File Handling MCQs"
description: "Top multiple-choice questions (MCQs) on C++ Classes and Objects for interview preparation. Covers constructors, access specifiers, friend functions, and object creation."
keywords:
  - C++
  - C++ MCQs
  - C++ Questions
  - C++ Programming
  - C++ Interview Questions
  - C++ Quiz
  - cpp mcq
  - cpp mcq questions
  - cpp interview questions
  - c++ mcq
  - advanced c++ interview questions
  - C++ Multiple Choice Questions
  - C++ Objective Questions
  - C++ Basics
  - C++ Concepts
  - C++ Fundamentals
  - C++ Exam Questions
  - C++ Test Questions
  - C++ Online Test
  - C++ Practice Questions
  - Learn C++
  - C++ Data Structures
  - C++ STL
  - Object-Oriented Programming
  - OOP in C++
  - C++ Functions
  - C++ Classes
  - C++ Objects
  - C++ Constructors
  - C++ Destructors
  - C++ Access Specifiers
  - C++ Scope Resolution Operator
  - C++ Friend Function
  - C++ Inheritance
  - C++ Polymorphism
  - C++ Abstraction
  - C++ Encapsulation
  - Advanced C++ Topics
  - Multi-threading in C++
  - Competitive Programming in C++
  - C++ Coding Interview Questions

tags:
  - C++
  - C++ MCQs
  - C++ Interview Questions
  - C++ Online Test
  - C++ Quiz
  - C++ Objective Questions
  - C++ OOP
  - C++ Classes
  - C++ Objects
  - C++ Functions
  - C++ Programming Questions
  - Learn C++
  - C++ Test
  - C++ Beginner Guide
  - C++ Coding Questions
  - C++ Technical Interview
  - C++ Coding Interview
  - OOP in C++
  - C++ Constructors
  - C++ Destructors
  - C++ Polymorphism
  - C++ Virtual Functions
  - C++ Competitive Programming
  - Data Structures in C++
  - Algorithms in C++
  - STL in C++
  - C++ Performance Optimization
---

import { Question } from '../../Question';

# File Handling

<Question
  question="1).What is file handling in C++?"
  options={['Managing files for reading and writing', 'Creating classes', 'Handling memory leaks', 'None of the above']}
  answer="Managing files for reading and writing"
/>
<Question
  question="2).Which header file is required for file handling?"
  options={['<fstream>', '<iostream>', '<file.h>', 'None of the above']}
  answer="<fstream>"
/>
<Question
  question="3).Which class is used for reading from files?"
  options={['ifstream', 'ofstream', 'fstream', 'None of the above']}
  answer="ifstream"
/>
<Question
  question="4).Which class is used for writing to files?"
  options={['ofstream', 'ifstream', 'fstream', 'None of the above']}
  answer="ofstream"
/>
<Question
  question="5).How do you open a file in append mode?"
  options={['ios::app', 'ios::in', 'ios::out', 'None of the above']}
  answer="ios::app"
/>
<Question
  question="6).What is the default mode for opening a file?"
  options={['ios::in', 'ios::out', 'ios::binary', 'None of the above']}
  answer="ios::in"
/>
<Question
  question="7).How do you check if a file was opened successfully?"
  options={['Use the is_open() method', 'Check the file size', 'Read the file header', 'None of the above']}
  answer="Use the is_open() method"
/>
<Question
  question="8).What does the eof() function check?"
  options={['End of file', 'File size', 'File permissions', 'None of the above']}
  answer="End of file"
/>
<Question
  question="9).How do you close a file in C++?"
  options={['Use the close() method', 'Use the end() method', 'Use the terminate() method', 'None of the above']}
  answer="Use the close() method"
/>
<Question
  question="10).What happens if you try to read from a file that doesn’t exist?"
  options={['An error occurs', 'A new file is created', 'The program crashes', 'None of the above']}
  answer="An error occurs"
/>
<Question
  question="11).Which class in C++ is used for both reading and writing to files?"
  options={['fstream', 'ifstream', 'ofstream', 'file']}
  answer="fstream"
/>
<Question
  question="12).Which operator is used to write data into a file?"
  options={['<<', '>>', '=', '->']}
  answer="<<"
/>
<Question
  question="13).Which operator is used to read data from a file?"
  options={['>>', '<<', '=', '->']}
  answer=">>"
/>
<Question
  question="14).What is the purpose of ios::binary?"
  options={['Open file in binary mode', 'Open file in text mode', 'Close file automatically', 'None of the above']}
  answer="Open file in binary mode"
/>
<Question
  question="15).What does the seekg() function do?"
  options={['Moves the get pointer', 'Moves the put pointer', 'Closes the file', 'Flushes the buffer']}
  answer="Moves the get pointer"
/>
<Question
  question="16).What does the seekp() function do?"
  options={['Moves the put pointer', 'Moves the get pointer', 'Checks file end', 'Flushes the file']}
  answer="Moves the put pointer"
/>
<Question
  question="17).What does tellg() return?"
  options={['Current position of get pointer', 'Current position of put pointer', 'File size', 'None of the above']}
  answer="Current position of get pointer"
/>
<Question
  question="18).What does tellp() return?"
  options={['Current position of put pointer', 'Current position of get pointer', 'File name', 'None of the above']}
  answer="Current position of put pointer"
/>
<Question
  question="19).Which function is used to write a block of binary data to a file?"
  options={['write()', 'put()', 'insert()', 'send()']}
  answer="write()"
/>
<Question
  question="20).Which function is used to read a block of binary data from a file?"
  options={['read()', 'get()', 'scan()', 'receive()']}
  answer="read()"
/>
<Question
  question="21).What does the flush() function do?"
  options={['Flushes output buffer to file', 'Flushes memory cache', 'Closes the file', 'None of the above']}
  answer="Flushes output buffer to file"
/>
<Question
  question="22).Which file mode is used to truncate an existing file before writing?"
  options={['ios::trunc', 'ios::app', 'ios::ate', 'ios::binary']}
  answer="ios::trunc"
/>
<Question
  question="23).Which file mode opens the file and moves the pointer to the end?"
  options={['ios::ate', 'ios::in', 'ios::out', 'ios::binary']}
  answer="ios::ate"
/>
<Question
  question="24).What is the return type of is_open()?"
  options={['bool', 'int', 'void', 'string']}
  answer="bool"
/>
<Question
  question="25).Can we open a file in multiple modes simultaneously?"
  options={['Yes, using bitwise OR (|)', 'No', 'Only for read/write', 'Only for binary']}
  answer="Yes, using bitwise OR (|)"
/>
<Question
  question="26).What is the default file mode for ofstream?"
  options={['ios::out', 'ios::in', 'ios::binary', 'ios::app']}
  answer="ios::out"
/>
<Question
  question="27).Which method writes a single character to a file?"
  options={['put()', 'write()', 'insert()', 'append()']}
  answer="put()"
/>
<Question
  question="28).Which method reads a single character from a file?"
  options={['get()', 'read()', 'scan()', 'take()']}
  answer="get()"
/>
<Question
  question="29).Which function should be used to check for file read errors?"
  options={['fail()', 'check()', 'verify()', 'error()']}
  answer="fail()"
/>
<Question
  question="30).Which of the following best practices should be followed with file handling?"
  options={['Always close the file after use', 'Ignore file errors', 'Never check file mode', 'Use magic numbers']}
  answer="Always close the file after use"
/>
<Question
  question="1).Which of the following is the correct syntax for an `if` statement in C++?"
  options={['if (condition) { // code }', 'if condition { // code }', 'if {condition} { // code }', 'if: condition { // code }']}
  answer="if (condition) { // code }"
/>

<Question
  question="2).Which of the following is the correct syntax to declare a `while` loop in C++?"
  options={['while condition { // code }', 'while (condition) { // code }', 'while (condition) : { // code }', 'while {condition} { // code }']}
  answer="while (condition) { // code }"
/>

<Question
  question="3).What is the output of the following C++ code?"
  code={`#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 3; i++) {
        cout << i << " ";
    }
    return 0;
}`}
  options={['0 1 2', '1 2 3', '0 1 2 3', '1 2 3 4']}
  answer="0 1 2"
  
/>


<Question
  question="4).What is the purpose of the `break` statement in C++?"
  options={['To stop the execution of the program', 'To exit a loop or switch statement', 'To pause the program execution', 'To terminate the current function']}
  answer="To exit a loop or switch statement"
/>

<Question
  question="5).Which loop is guaranteed to execute at least once in C++?"
  options={['for loop', 'while loop', 'do-while loop', 'None of the above']}
  answer="do-while loop"
/>

<Question
  question="6).What is the correct syntax for a `switch` statement in C++?"
  options={['switch (expression) { case x: // code; break; }', 'switch {expression} { case x: // code; break; }', 'switch: expression { case x: // code; break; }', 'switch(expression) { case x: // code }']}
  answer="switch (expression) { case x: // code; break; }"
/>

<Question
  question="7).In which scenario would you use a `continue` statement in C++?"
  options={['To stop the execution of the current loop iteration and move to the next iteration', 'To exit the loop entirely', 'To break out of a function', 'To jump to the end of the function']}
  answer="To stop the execution of the current loop iteration and move to the next iteration"
/>
<Question
  question="8) What is the output of the following C++ code?"

  code={`#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 3; i++) {
        if (i == 0) {
            cout << i << " ";
        } else if (i == 1) {
            cout << i << " ";
        } else {
            cout << i << " ";
        }
    }
    return 0;
}`}
  options={['0 1 2', '1 2 3', '0 1 2 3', '0 1 2 3 4']}
  answer="0 1 2"
/>


<Question
  question="9).What will be printed if the following C++ code is executed?"

  options={['Less than 5', 'Equal to 10', 'Greater than 5', 'Nothing will be printed']}
  answer="Equal to 10"
/>

<Question
  question="10).Which of the following statements is true about a `do-while` loop in C++?"
  options={['It is guaranteed to execute at least once', 'It may not execute at all', 'It requires the condition to be checked first', 'None of the above']}
  answer="It is guaranteed to execute at least once"
/>

<Question
  question="11).What will the following code output?"
  code={`int x = 10;
if (x > 5)
    cout << "A";
else
    cout << "B";`}
  options={['A', 'B', 'Error', 'Nothing']}
  answer="A"
/>

<Question
  question="12).What is the output of this code?"
  code={`int i = 0;
while (i < 2) {
    cout << i;
    i++;
}`}
  options={['01', '12', '02', '10']}
  answer="01"
/>

<Question
  question="13).Which of the following keywords is used to terminate a loop early in C++?"
  options={['exit', 'return', 'continue', 'break']}
  answer="break"
/>

<Question
  question="14).Which statement skips the current loop iteration and proceeds to the next one?"
  options={['return', 'break', 'continue', 'skip']}
  answer="continue"
/>

<Question
  question="15).What is the output of this code?"
  code={`int x = 3;
switch (x) {
    case 1: cout << "One"; break;
    case 2: cout << "Two"; break;
    case 3: cout << "Three"; break;
    default: cout << "Other";
}`}
  options={['One', 'Two', 'Three', 'Other']}
  answer="Three"
/>

<Question
  question="16).What is the output of the following nested loop?"
  code={`for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
        cout << i << j << " ";
    }
}`}
  options={['00 01 10 11', '00 01 10', '01 10 11', '00 10 11']}
  answer="00 01 10 11"
/>

<Question
  question="17).How many times will the loop run?"
  code={`int count = 0;
do {
    count++;
} while (count < 3);`}
  options={['0', '1', '2', '3']}
  answer="3"
/>

<Question
  question="18).Which loop is best when the number of iterations is known in advance?"
  options={['while', 'do-while', 'for', 'switch']}
  answer="for"
/>

<Question
  question="19).Which of the following is not a valid conditional operator in C++?"
  options={['==', '!=', '<>', '<=']}
  answer="<>"
/>

<Question
  question="20).What does the ternary operator `? :` do in C++?"
  options={['Creates a loop', 'Evaluates a condition and returns a value', 'Declares a variable', 'Compares two strings']}
  answer="Evaluates a condition and returns a value"
/>

<Question
  question="21).What will be printed?"
  code={`int a = 5, b = 10;
cout << (a > b ? a : b);`}
  options={['5', '10', '0', 'Error']}
  answer="10"
/>

<Question
  question="22).Which of the following is true about `switch` statements?"
  options={['They can evaluate float expressions', 'They can evaluate string expressions', 'They can evaluate integer expressions', 'None of the above']}
  answer="They can evaluate integer expressions"
/>

<Question
  question="23).Choose the correct syntax for a ternary operator."
  options={['condition ? value1 : value2;', 'condition : value1 ? value2;', 'if (condition) ? value1 : value2;', 'condition ? value1 , value2;']}
  answer="condition ? value1 : value2;"
/>

<Question
  question="24).What is the output?"
  code={`for (int i = 5; i > 0; i--) {
    if (i == 3) break;
    cout << i << " ";
}`}
  options={['5 4 3', '5 4', '4 3 2', '5 4 3 2 1']}
  answer="5 4"
/>

<Question
  question="25).Identify the error in this code:"
  code={`int x = 1;
if x == 1
    cout << "Yes";`}
  options={['Missing semicolon', 'Incorrect if syntax', 'Missing else block', 'None']}
  answer="Incorrect if syntax"
/>

<Question
  question="26).How can you create an infinite loop in C++?"
  options={['while(1) {}', 'for(;;) {}', 'do {} while(1);', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="27).Which loop structure is generally best for checking a condition at the end of each iteration?"
  options={['while', 'for', 'do-while', 'switch']}
  answer="do-while"
/>

<Question
  question="28).Which of the following is true about nested loops?"
  options={['Only for-loops can be nested', 'You can nest any combination of loops', 'Nested loops must be of same type', 'Nested loops are not allowed']}
  answer="You can nest any combination of loops"
/>

<Question
  question="29).Which control structure is best used for making multiple decisions based on different values of a single variable?"
  options={['if', 'switch', 'while', 'do-while']}
  answer="switch"
/>

<Question
  question="30).What will the following loop print?"
  code={`for (int i = 1; i <= 5; i += 2) {
    cout << i << " ";
}`}
  options={['1 2 3 4 5', '1 3 5', '1 2 4', '2 4 6']}
  answer="1 3 5"
/>

<Question
question="31). What is the output of the following code?"
code={`int x = 5;
if (x == 0) 
    cout << "Zero"; 
else 
    cout << "Non-zero"; `}
options={['Zero', 'Non-zero', 'Compilation error', 'Runtime error']}
answer="Non-zero"
/>

<Question
question="32). Which loop will execute exactly 5 times?"
options={['for (int i=1; i<=5; i++)', 'for (int i=0; i<5; i++)', 'Both A and B', 'None of the above']}
answer="Both A and B"
/>

<Question
question="33). What is the output of this code?"
code={`int i = 10; 
do { cout << i-- << " "; }
 while (i > 8);`
 }
options={['10 9', '10 9 8', '9 8', 'Infinite loop']}
answer="10 9"
/>

<Question
question="34). Which statement about the goto keyword is true?"
options={['It is preferred over loops', 'It can jump to any function', 'It makes code harder to maintain', 'It is mandatory for control flow']}
answer="It makes code harder to maintain"
/>

<Question
question="35). What is the output?"
code={`int x = 2;
 switch(x) 
 { case 1: x++;
  case 2: x++; 
  case 3: x++; 
  default: x++; } 
  cout << x; `}
options={['2', '3', '5', '6']}
answer="5"
/>

<Question
question="36). Which of these is NOT a valid loop control variable modification?"
options={['i++', 'i *= 2', 'i += 0.5', 'i = i * i']}
answer="i += 0.5"
/>

<Question
question="37). What does this code print?"
code={`for (int i = 0; i < 3; i++) 
continue; 
cout << i; `}
options={['012', '2', 'Compilation error', 'Nothing']}
answer="Compilation error"
/>

<Question
question="38). How many times is 'Hello' printed?"
code={`int x = 3;
 while (x--)
  { cout << "Hello "; 
  x--; }`
  }
options={['1', '2', '3', 'Infinite']}
answer="1"
/>

<Question
question="39). Which is equivalent to: if (!condition) ?"
options={['if (condition == false)', 'if (condition != true)', 'if (condition == 0)', 'All of the above']}
answer="All of the above"
/>

<Question
question="40). Which control flow structure is missing in C++?"
options={['unless', 'until', 'elif', 'Both A and B']}
answer="Both A and B"
/>
<Question
  question="41). What will be the output of the following C++ code?"
  code={`#include <iostream>
using namespace std;

int main() {
  int x = 5;
  if (x == 5) {
    cout << "Equal";
  }
  return 0;
}`}
  options={['Equal', 'Not Equal', 'Error', 'Nothing']}
  answer="Equal"
/>

<Question
  question="42). How many times will this loop execute?"
  code={`int count = 0;
for (int i = 0; i < 4; i++) {
  count++;
}`}
  options={['3', '4', '5', 'Infinite']}
  answer="4"
/>

<Question
  question="43). What will be the result of the following code?"
  code={`int a = 3;
int b = 4;
if (a > b)
  cout << "A";
else
  cout << "B";`}
  options={['A', 'B', 'AB', 'Nothing']}
  answer="B"
/>

<Question
  question="44). What is the output of this code using nested loops?"
  code={`for (int i = 0; i < 2; i++) {
  for (int j = 0; j < 2; j++) {
    cout << i << j << " ";
  }
}`}
  options={['00 01 10 11', '00 01 01 10', '00 10 01 11', '00 01 10 11']}
  answer="00 01 10 11"
/>

<Question
  question="45). Which of the following loop structures will never execute?"
  options={[
    'while (false) { cout << "Hi"; }',
    'do { cout << "Hi"; } while (false);',
    'for (int i = 1; i < 1; i++) { cout << "Hi"; }',
    'All of the above except do-while'
  ]}
  answer="All of the above except do-while"
/>

<Question
  question="46). What does this code print?"
  code={`int x = 10;
while (x > 5) {
  x -= 2;
  cout << x << " ";
}`}
  options={['8 6 4', '8 6', '10 8 6', '8 6 4 2']}
  answer="8 6"
/>

<Question
  question="47). What does the default keyword do in a switch statement?"
  options={[
    'Specifies the first case to execute',
    'Acts as a fallback if no other case matches',
    'Skips all cases',
    'Throws an exception'
  ]}
  answer="Acts as a fallback if no other case matches"
/>

<Question
  question="48). Which of the following is NOT a valid control flow statement in C++?"
  options={['break', 'skip', 'continue', 'goto']}
  answer="skip"
/>

<Question
  question="49). What will this code print?"
  code={`int x = 1;
if (x) {
  cout << "True";
} else {
  cout << "False";
}`}
  options={['True', 'False', '0', '1']}
  answer="True"
/>

<Question
  question="50). What is the result of this loop?"
  code={`int sum = 0;
for (int i = 1; i <= 3; i++) {
  sum += i;
}
cout << sum;`}
  options={['3', '6', '5', '7']}
  answer="6"
/>