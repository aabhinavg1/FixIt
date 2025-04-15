---
title: Control Flow C++ MCQ
keywords: 
- C++
- learning C++ 
- basics
- control statement
- if else
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
