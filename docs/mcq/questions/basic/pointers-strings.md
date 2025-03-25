---
title: Pointer and String C++ Learning Guide
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
    question="1).What is the correct syntax to declare a pointer in C++?"
    options={['int* ptr;', 'pointer int ptr;', 'ptr int*;', 'None of the above']}
    answer="int* ptr;"
  />

  <Question
    question="2).Which of the following is used to access the value at the pointer address in C++?"
    options={['*', '&', '#', '%']}
    answer="*"
  />

  <Question
    question="3).What will be the output of the following code?"
    code={`#include <iostream>
using namespace std;

int main() {
int x = 10;
int* ptr = &x;
cout << *ptr;
return 0;
}`}
    options={['10', 'x', 'ptr', 'Error']}
    answer="10"
  />

  <Question
    question="4).What is the correct way to declare a reference in C++?"
    options={['int& ref;', 'reference int ref;', 'ref int&;', 'None of the above']}
    answer="int& ref;"
  />

  <Question
    question="5).Which operator is used to obtain the address of a variable in C++?"
    options={['*', '&', '@', '#']}
    answer="&"
  />

  <Question
    question="6).What is the purpose of the `nullptr` keyword in C++?"
    options={['It is used to initialize a pointer to null', 'It is used to delete a pointer', 'It is used to declare a reference', 'None of the above']}
    answer="It is used to initialize a pointer to null"
  />

  <Question
    question="7).What will happen if you dereference a null pointer in C++?"
    options={['The program will terminate', 'The value will be 0', 'It will return an error', 'Nothing will happen']}
    answer="The program will terminate"
  />

  <Question
    question="8).Which of the following functions is used to get the size of a pointer in C++?"
    options={['sizeof()', 'length()', 'size()', 'None of the above']}
    answer="sizeof()"
  />

  <Question
    question="9).What is the difference between a pointer and a reference in C++?"
    options={['A reference must be initialized at declaration, a pointer can be null', 'A pointer cannot be null, a reference can be', 'A pointer is always constant, a reference is not', 'None of the above']}
    answer="A reference must be initialized at declaration, a pointer can be null"
  />

  <Question
    question="10).What will be the output of the following code?"
    code={`#include <iostream>
using namespace std;

int main() {
int x = 10;
int& ref = x;
ref = 20;
cout << x;
return 0;
}`}
    options={['10', '20', 'Error', 'None of the above']}
    answer="20"
  />

