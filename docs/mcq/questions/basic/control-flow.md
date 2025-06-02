---
id: control-flow
title: Control Flow C++ Multiple Choice Questions (MCQs)
description: |
  This collection of C++ Multiple Choice Questions (MCQs) focuses on control flow concepts, including loops, conditional statements, branching, and decision-making. Perfect for beginners and intermediate learners to test their knowledge on essential C++ control structures such as `if-else`, `switch`, `for`, `while`, and `do-while` loops.
keywords:
  - C++ Control Flow
  - C++ Loops
  - C++ Conditional Statements
  - C++ Decision Making
  - C++ Branching
  - If-Else in C++
  - Switch Statement in C++
  - For Loop in C++
  - While Loop in C++
  - Do-While Loop in C++
  - C++ MCQs
  - C++ Quiz
  - C++ Interview Questions
  - C++ Syntax
  - Flow Control C++
  - C++ Basics Quiz
  - C++ Programming Test
  - C++ Exam Questions
  - C++ Testing
  - C++ interview questions
  - C++ coding interview
  - C++ interview prep
  - C++ programming interview
  - C++ interview answers
  - C++ concepts
  - C++ object-oriented programming (OOP)
  - C++ algorithms
  - C++ data structures
  - C++ multi-threading
  - C++ STL (Standard Template Library)
  - Interview questions for C++ developers
  - C++ technical interviews
  - C++ memory management
  - C++ dynamic memory allocation
  - C++ inheritance and polymorphism
  - C++ class and object design
  - C++ constructor and destructor behavior
  - C++ virtual functions and dynamic dispatch
  - C++ function overloading and overriding
  - C++ operator overloading techniques
  - C++ smart pointers (std::unique_ptr, std::shared_ptr)
  - C++ concurrency and synchronization
  - C++ mutex and locks
  - C++ threads and thread safety
  - C++ exception handling and best practices
  - C++ copy and move semantics
  - C++ lambda functions and captures
  - C++ template programming and specialization
  - C++ iterators and range-based loops
  - C++ vector and list operations
  - C++ map, set, and unordered_map
  - C++ algorithmic complexity analysis (Big O notation)
  - C++ memory leak detection and prevention
  - C++ static and dynamic libraries
  - C++ file input/output (fstream, ifstream, ofstream)
  - C++ multi-threaded programming patterns
  - C++ design patterns (Singleton, Factory, etc.)
  - C++ compiler optimizations
  - C++ modern features (C++11, C++14, C++17, C++20)
  - C++ move constructor and move assignment
  - C++ RAII (Resource Acquisition Is Initialization)
  - C++ dynamic polymorphism using virtual functions
  - C++ performance tuning and profiling
  - C++ code debugging techniques
  - C++ pointer arithmetic and memory access
  - C++ type traits and SFINAE
  - C++ operator precedence and associativity
  - C++ class templates and template metaprogramming
  - C++ custom memory allocators
  - C++ concurrency models (thread, async, futures)
  - C++ atomic operations and lock-free data structures
  - C++ error handling using try-catch blocks
  - C++ namespace and scope resolution
  - C++ constexpr and consteval
  - C++ file handling and serialization
  - C++ dynamic casting and runtime type identification (RTTI)
  - C++ const correctness and const references
  - C++ vector vs array vs linked list


tags:
  - Control Flow
  - C++ Loops
  - Conditional Statements
  - C++ MCQs
  - C++ Test
  - C++ Interview Questions
  - Programming Quiz
  - C++ Syntax
  - C++ Quiz Questions
  - C++ Beginners
  - C++ Practice
  - C++ For Loop
  - C++ While Loop
  - C++ Decision Making
  - C++ Switch Statement
  - C++ Programming Challenge
  - C++ Testing and Practice

---
import AdBanner from '@site/src/components/AdBanner';
import { Question } from '../../Question';  // Adjust the path to your Question.js component


<Question
  question="1).Which of the following is the correct syntax for an `if` statement in C++?"
  options={['if (condition) { // code }', 'if condition { // code }', 'if {condition} { // code }', 'if: condition { // code }']}
  answer="if (condition) { // code }"
/>

<Question
  question="2).Which of the following is the correct syntax to declare a `while` loop in C++?"
  options={[ 'while (condition) { // code }', 'while (condition) : { // code }', 'while {condition} { // code }','while condition { // code }',]}
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
  options={[ '1 2 3', '0 1 2','0 1 2 3', '1 2 3 4']}
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
  options={[ 'switch {expression} { case x: // code; break; }', 'switch: expression { case x: // code; break; }', 'switch(expression) { case x: // code }','switch (expression) { case x: // code; break; }',]}
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
  options={[ 'It may not execute at all', 'It requires the condition to be checked first', 'It is guaranteed to execute at least once','None of the above']}
  answer="It is guaranteed to execute at least once"
/>

<div>
<AdBanner />
</div>

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

<div>
<AdBanner />
</div>

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

<div>
<AdBanner />
</div>

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
<div>
<AdBanner />
</div>

<Question
  question="41). What will this code output?"
  code={`int x = 4;
        if (x % 2 == 0)
          cout << "Even";
        else
          cout << "Odd";`}
  options={['Even', 'Odd', '4', 'Error']}
  answer="Even"
/>


<Question
  question="42). Which is the correct way to write a for-loop that counts from 10 down to 1?"
  options={[
    'for (int i = 10; i >= 1; i--)',
    'for (int i = 10; i > 0; i--)',
    'for (int i = 1; i <= 10; i--)',
    'for (int i = 1; i < 10; i--)'
  ]}
  answer="for (int i = 10; i > 0; i--)"
/>

<Question
  question="43). What is the output of the following code?"
  code={`int x = 7;
        if (x < 10)
        if (x > 5)
          cout << "Good";
        else
          cout << "Bad";`}
  options={['Good', 'Bad', 'Error', 'Nothing']}
  answer="Good"
/>

<Question
  question="44). What is the output of this code?"
  code={`int x = 3;
switch (x) {
    case 1:
    case 2:
        cout << "Small"; break;
    case 3:
    case 4:
        cout << "Medium"; break;
    default:
        cout << "Large";
}`}
  options={['Small', 'Medium', 'Large', 'Error']}
  answer="Medium"
/>

<Question
  question="45). How many times will this loop execute?"
  code={`for (int i = 0; i != 5; i++) {
    cout << i << " ";
}`}
  options={['4', '5', '6', 'Infinite']}
  answer="5"
/>

<Question
  question="46). Identify the mistake in this loop:"
  code={`int i = 0;
while (i < 5)
    cout << i << " ";`}
  options={['No increment for i', 'Wrong condition', 'Extra semicolon', 'Incorrect syntax']}
  answer="No increment for i"
/>

<Question
  question="47). What is the output?"
  code={`int a = 0;
if (a = 5)
    cout << "True";
else
    cout << "False";`}
  options={['True', 'False', 'Error', 'Nothing']}
  answer="True"
/>

<Question
  question="48). Choose the correct way to use an \if-else\ statement."
  options={[
    'if (x == 1) cout << "One"; else cout << "Not one";',
    'if x == 1: cout << "One"; else: cout << "Not one";',
    'if x == 1 then cout << "One"; else cout << "Not one";',
    'if (x == 1) then cout << "One"; else cout << "Not one";'
  ]}
  answer='if (x == 1) cout << "One"; else cout << "Not one";'
/>

<Question
  question="49). What will this code print?"
  code={`int x = 0;
do {
    cout << x;
} while (x);`}
  options={['0', '1', 'Infinite loop', 'Nothing']}
  answer="0"
/>

<Question
  question="50). What does this nested if-else ladder represent?"
  code={`if (x < 0)
    cout << "Negative";
else if (x == 0)
    cout << "Zero";
else
    cout << "Positive";`}
  options={['It checks for parity', 'It classifies a number', 'It performs a calculation', 'It prints all values of x']}
  answer="It classifies a number"
/>