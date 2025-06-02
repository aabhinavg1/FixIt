---
id: loop
title: Loop C++ Multiple Choice Questions (MCQs)
description: |
  This set of C++ Multiple Choice Questions (MCQs) focuses on loops in C++. Test your knowledge on `for`, `while`, `do-while`, nested loops, and loop control statements like `break`, `continue`, and `return`. Whether you're a beginner or preparing for a C++ interview, these questions will help reinforce your understanding of loop structures in C++.
keywords:
  - C++ Loops
  - C++ for loop
  - C++ while loop
  - C++ do-while loop
  - Nested Loops in C++
  - Loop Control Statements
  - C++ break statement
  - C++ continue statement
  - Looping in C++
  - C++ MCQs
  - C++ Interview Questions
  - C++ Programming
  - Looping Constructs
  - C++ Looping Techniques
  - C++ Exam Questions
  - C++ Quiz
  - C++ Coding Challenges

tags:
  - C++ Loops
  - C++ for loop
  - C++ while loop
  - C++ do-while loop
  - Loop Control
  - Nested Loops
  - C++ MCQs
  - C++ Interview Questions
  - C++ Break and Continue
  - C++ Programming
  - Loop Structures
  - Looping Constructs
  - C++ Quiz
  - C++ Exam Questions
  - C++ Coding Practice
  - C++ Loop Techniques

---
import AdBanner from '@site/src/components/AdBanner';
import { Question } from '../../Question';  // Adjust the path based on your project structure

{/* Basics of Control Flow and Looping in C++ */}

<Question
  question="1). Which of the following is the correct syntax for an `if` statement in C++?"
  options={[
    'if condition { // code }',
    'if {condition} { // code }',
    'if: condition { // code }',
    'if (condition) { // code }'
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
    'To exit the loop entirely',
    'To break out of a function',
    'To jump to the end of the function',
    'To stop the execution of the current loop iteration and move to the next iteration'
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

<div>
<AdBanner />
</div>

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

<div>
<AdBanner />
</div>

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

<div>
<AdBanner />
</div>

<Question
  question="31). What is the output of this `for` loop with a step of 2?"
  code={` #include <iostream>
  using namespace std;
  int main() {
    for (int i = 2; i <= 6; i += 2) {
        cout << i << " ";
    }
    return 0;
  }`}
  options={['1 3 5', '2 4 6', '2 3 4 5 6', '2 4 6 8']}
  answer="2 4 6"
/>

<Question
  question="32). What is the primary purpose of a loop in programming?"
  options={[
    'To execute code sequentially without repetition',
    'To repeat a block of code until a condition is met',
    'To store multiple values in a single variable',
    'To define functions'
  ]}
  answer="To repeat a block of code until a condition is met"
/>

<Question
  question="33). Which loop type is most suitable when the number of iterations is unknown?"
  options={[
    'for loop',
    'while loop',
    'do-while loop',
    'range-based for loop'
  ]}
  answer="while loop"
/>

<Question
  question="34). What is the output of this `continue` example?"
  code={`#include <iostream>
  using namespace std;
    int main() {
    for (int i = 1; i <= 4; i++) {
        if (i == 2) continue;
        cout << i << " ";
    }
    return 0;
  }`}
  options={['1 2 3 4', '1 3 4', '2', '1 3']}
  answer="1 3 4"
/>

<Question
  question="35). Which loop is guaranteed to terminate?"
  options={[
    'for (int i = 0; i < 5; i++) { }',
    'while (true) { break; }',
    'int i=0; while(i<5) { cout << i; }',
    'do { } while (1 == 1);'
  ]}
  answer="for (int i = 0; i < 5; i++) { }"
/>

<Question
  question="36). What does this single-iteration loop print?"
  code={`#include <iostream>
  using namespace std;
  int main() {
    for (int i = 1; i <= 1; i++) {
        cout << i << " ";
    }
    return 0;
  }`}
  options={['0', '1', '1 2', 'Nothing']}
  answer="1"
/>

<Question
  question="37). How to fix this infinite loop?"
  code={`#include <iostream>
  using namespace std;
    int main() {
    int i = 0;
    while (i < 5) {
        cout << i << " ";
  }}`}
  options={[
    'Add i++ inside loop',
    'Change while to for',
    'Remove cout',
    'Change condition to i > 5'
  ]}
  answer="Add i++ inside loop"
/>

<Question
  question="38). What is the output of this zero-iteration loop?"
  code={`#include <iostream>
  using namespace std;
    int main() {
    for (int i = 0; i < 0; i++) {
        cout << i << " ";
    }
    return 0;
  }`}
  options={['0', '1', 'No output', 'Infinite zeros']}
  answer="No output"
/>

<Question
  question="39). What is the key difference between `break` and `continue`?"
  options={[
    'break exits the program, continue skips one line',
    'break exits the loop, continue skips to next iteration',
    'Both terminate the loop immediately',
    'continue exits the loop, break skips one iteration'
  ]}
  answer="break exits the loop, continue skips to next iteration"
/>

<Question
  question="40). What is the key difference between these loops?"
  code={`while (false) {
    /* code */
    }   // vs
    do {
    /* code */
  } while (false);`}
  options={[
    'Both behave identically',
    'First runs once, second never runs',
    'First never runs, second runs once',
    'Both cause compile errors'
  ]}
  answer="First never runs, second runs once"
/>

<div>
<AdBanner />
</div>

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
<div>
<AdBanner />
</div>