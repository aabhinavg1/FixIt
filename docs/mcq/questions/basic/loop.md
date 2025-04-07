---
title: Loop C++ Learning Guide
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

import { Question } from '../../Question';  // Adjust the path based on your project structure

{/* Basics of Control Flow and Looping in C++ */}

<Question
  question="1). Which of the following is the correct syntax for an `if` statement in C++?"
  options={[
    'if (condition) { // code }',
    'if condition { // code }',
    'if {condition} { // code }',
    'if: condition { // code }'
  ]}
  answer="if (condition) { // code }"
/>

<Question
  question="2). Which of the following is the correct syntax to declare a `while` loop in C++?"
  options={[
    'while condition { // code }',
    'while (condition) { // code }',
    'while (condition) : { // code }',
    'while {condition} { // code }'
  ]}
  answer="while (condition) { // code }"
/>

<Question
  question="3). What is the output of the following C++ code?"
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
  question="4). What is the purpose of the `break` statement in C++?"
  options={[
    'To stop the execution of the program',
    'To exit a loop or switch statement',
    'To pause the program execution',
    'To terminate the current function'
  ]}
  answer="To exit a loop or switch statement"
/>

<Question
  question="5). Which loop is guaranteed to execute at least once in C++?"
  options={['for loop', 'while loop', 'do-while loop', 'None of the above']}
  answer="do-while loop"
/>

<Question
  question="6). What is the correct syntax for a `switch` statement in C++?"
  options={[
    'switch (expression) { case x: // code; break; }',
    'switch {expression} { case x: // code; break; }',
    'switch: expression { case x: // code; break; }',
    'switch(expression) { case x: // code }'
  ]}
  answer="switch (expression) { case x: // code; break; }"
/>

<Question
  question="7). In which scenario would you use a `continue` statement in C++?"
  options={[
    'To stop the execution of the current loop iteration and move to the next iteration',
    'To exit the loop entirely',
    'To break out of a function',
    'To jump to the end of the function'
  ]}
  answer="To stop the execution of the current loop iteration and move to the next iteration"
/>

<Question
  question="8). What is the output of the following C++ code?"
  code={`#include <iostream>
using namespace std;

int main() {
  for (int i = 0; i < 4; i++) {
    cout << i << " ";
  }
  return 0;
}`}
  options={['0 1 2', '1 2 3', '0 1 2 3', '0 1 2 3 4']}
  answer="0 1 2 3"
/>

<Question
  question="9). What will be printed if the following C++ code is executed?"
  code={`#include <iostream>
using namespace std;

int main() {
  int x = 10;
  if (x < 5) {
    cout << "Less than 5";
  } else if (x > 5) {
    cout << "Greater than 5";
  } else {
    cout << "Equal to 10";
  }
  return 0;
}`}
  options={['Less than 5', 'Equal to 10', 'Greater than 5', 'Nothing will be printed']}
  answer="Greater than 5"
/>

<Question
  question="10). Which of the following statements is true about a `do-while` loop in C++?"
  options={[
    'It is guaranteed to execute at least once',
    'It may not execute at all',
    'It requires the condition to be checked first',
    'None of the above'
  ]}
  answer="It is guaranteed to execute at least once"
/>

{/* Intermediate to Advanced MCQs on Loops */}

<Question
  question="11). What is the main difference between a `while` loop and a `do-while` loop in C++?"
  options={[
    'while checks the condition first; do-while checks after execution',
    'do-while runs only if the condition is true',
    'while always runs once',
    'They both behave the same'
  ]}
  answer="while checks the condition first; do-while checks after execution"
/>

<Question
  question="12). Which of the following is a valid `for` loop declaration in C++?"
  options={[
    'for i = 0 to 10 { }',
    'for (int i = 0; i < 10; i++) { }',
    'loop (int i = 0; i < 10; i++) { }',
    'repeat (i = 0; i < 10; i++) { }'
  ]}
  answer="for (int i = 0; i < 10; i++) { }"
/>

<Question
  question="13). How many times will this loop execute?"
  code={`int i = 0;
while (i < 5) {
  i++;
}`}
  options={['4', '5', '6', 'Infinite']}
  answer="5"
/>

<Question
  question="14). Which loop type is best when the number of iterations is known?"
  options={['while loop', 'do-while loop', 'for loop', 'recursive function']}
  answer="for loop"
/>

<Question
  question="15). What is the output of this code?"
  code={`for (int i = 1; i <= 3; i++) {
  cout << i * 2 << " ";
}`}
  options={['2 4 6', '1 2 3', '0 2 4', '2 3 4']}
  answer="2 4 6"
/>

<Question
  question="16). What happens if the condition in a `while` loop is never false?"
  options={[
    'The loop will never execute',
    'The loop runs once',
    'The loop causes a compile error',
    'The loop becomes infinite'
  ]}
  answer="The loop becomes infinite"
/>

<Question
  question="17). What is the output?"
  code={`int i = 10;
do {
  cout << i << " ";
  i--;
} while (i > 7);`}
  options={['10 9 8', '10 9 8 7', '9 8 7', '10 9']}
  answer="10 9 8"
/>

<Question
  question="18). Which keyword is used to immediately exit a loop in C++?"
  options={['exit', 'return', 'stop', 'break']}
  answer="break"
/>

<Question
  question="19). What will the following code print?"
  code={`for (int i = 0; i < 3; i++) {
  if (i == 1) continue;
  cout << i << " ";
}`}
  options={['0 1 2', '0 2', '1 2', '0 1']}
  answer="0 2"
/>

<Question
  question="20). Which statement skips the current iteration and moves to the next?"
  options={['return', 'exit', 'continue', 'skip']}
  answer="continue"
/>

<Question
  question="21). What is the output of the following code?"
  code={`int x = 3;
while (x--) {
  cout << x << " ";
}`}
  options={['3 2 1', '2 1 0', '2 1', '3 2']}
  answer="2 1 0"
/>

<Question
  question="22). Which loop is best suited for iterating through an array in C++?"
  options={['for loop', 'while loop', 'do-while loop', 'goto loop']}
  answer="for loop"
/>

<Question
  question="23). What is the output?"
  code={`for (int i = 5; i > 0; i--) {
  if (i == 3) break;
  cout << i << " ";
}`}
  options={['5 4', '5 4 3', '5 4 3 2', '4 3 2']}
  answer="5 4"
/>

<Question
  question="24). Which loop ensures condition is checked after each iteration?"
  options={['for loop', 'while loop', 'do-while loop', 'infinite loop']}
  answer="do-while loop"
/>

<Question
  question="25). What will be printed?"
  code={`int i = 0;
do {
  cout << i++ << " ";
} while (i < 3);`}
  options={['0 1 2', '1 2 3', '0 1 2 3', '0 1']}
  answer="0 1 2"
/>

<Question
  question="26). Which statement is true about nested loops?"
  options={[
    'Only while loops can be nested',
    'Only two loops can be nested at a time',
    'You can nest any type of loop inside any other',
    'Nested loops cause infinite loops by default'
  ]}
  answer="You can nest any type of loop inside any other"
/>

<Question
  question="27). Which of the following causes a compile-time error?"
  options={[
    'for (int i = 0; i < 5; i++)',
    'while (true)',
    'do { } while(0);',
    'while i < 5 { }'
  ]}
  answer="while i < 5 { }"
/>

<Question
  question="28). What is the output of the code below?"
  code={`int i = 1;
while (i <= 3) {
  cout << i++ * 2 << " ";
}`}
  options={['2 4 6', '1 2 3', '2 3 4', '2 4 6 8']}
  answer="2 4 6"
/>

<Question
  question="29). Which of the following loops is post-tested?"
  options={['for loop', 'while loop', 'do-while loop', 'None of the above']}
  answer="do-while loop"
/>

<Question
  question="30). Identify the infinite loop from the options:"
  options={[
    'for (int i = 0; i < 10; i++) {}',
    'while (i > 0) {}',
    'while (true) {}',
    'for (int i = 0; i < 5; i++) { cout << i; }'
  ]}
  answer="while (true) {}"
/>
