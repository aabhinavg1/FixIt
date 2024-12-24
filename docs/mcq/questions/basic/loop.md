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
    question="8).What is the output of the following C++ code?"
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
    question="9).What will be printed if the following C++ code is executed?"
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
    answer="Equal to 10"
  />

  <Question
    question="10).Which of the following statements is true about a `do-while` loop in C++?"
    options={['It is guaranteed to execute at least once', 'It may not execute at all', 'It requires the condition to be checked first', 'None of the above']}
    answer="It is guaranteed to execute at least once"
  />
