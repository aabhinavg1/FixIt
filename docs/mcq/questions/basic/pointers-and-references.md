---
id: pointers-and-references
title: Pointer and References C++ Multiple Choice Questions (MCQs)
description: |
  Test your knowledge of pointers and references in C++ with this set of Multiple Choice Questions (MCQs). This quiz covers topics such as pointer arithmetic, dynamic memory allocation, pointer-to-pointer, and references in C++. It is ideal for beginners and those preparing for C++ interviews, helping you solidify your understanding of two key concepts in C++ programming.
keywords:
  - C++ Pointers
  - C++ References
  - Pointer Arithmetic
  - Dynamic Memory Allocation
  - Pointer-to-Pointer in C++
  - C++ Call by value
  - C++ Call by references
  - C++ References using pointers
  - C++ References without pointers
  - C++ MCQs
  - C++ Interview Questions
  - C++ Pointer Concepts
  - C++ Programming
  - C++ Pointers and Arrays
  - C++ Char Arrays
  - C++ Pointer to Array
  

tags:
  - C++ Pointers
  - C++ Reference
  - Pointer Arithmetic
  - Dynamic Memory Allocation
  - Pointer-to-Pointer
  - C++ Call by value
  - C++ Call by references
  - C++ MCQs
  - C++ Interview Questions
  - C++ Memory Management
  - C++ Char Arrays
  - References using pointers
  - C++ Programming
  - C++ Arrays and Pointers
  - C++ Pointer Basics
  - C++ References without pointers

---

import AdBanner from '@site/src/components/AdBanner';
import { Question } from '../../Question';  // Adjust the path to your Question.js component

<Question
  question="1) What is the correct syntax to declare a pointer in C++?"
  options={['int* ptr;', 'pointer int ptr;', 'ptr int*;', 'None of the above']}
  answer="int* ptr;"
/>

<Question
  question="2) What does the & symbol represent in a variable declaration?"
  options={['Bitwise AND', 'Address-of operator', 'Reference', 'Dereference']}
  answer="Reference"
/>

<Question
  question="3) What does the * symbol represent when used in a declaration?"
  options={['Multiplication', 'Pointer declaration', 'Reference', 'Address-of']}
  answer="Pointer declaration"
/>

<Question
  question="4) What is the output of: int a = 5; int* p = &a; cout << *p;"
  options={['5', '&a', 'p', '*p']}
  answer="5"
/>

<Question
  question="5) Which of the following is used to get the address of a variable?"
  options={['*', '&', '%', '#']}
  answer="&"
/>

<Question
  question="6) What will the expression `*(&a)` return?"
  options={['Address of a', 'Value of a', 'Compilation error', 'Undefined']}
  answer="Value of a"
/>

<Question
  question="7) Which of the following can modify the original value of a variable?"
  options={['Passing by value', 'Passing by reference', 'Returning by value', 'None']}
  answer="Passing by reference"
/>

<Question
  question="8) What is the default value of an uninitialized pointer?"
  options={['0', 'nullptr', 'Undefined', 'NULL']}
  answer="Undefined"
/>

<Question
  question="9) What is a dangling pointer?"
  options={['A pointer that points to NULL', 'A pointer that is uninitialized',
  'A pointer that points to deallocated memory', 'A reference to pointer']}
  answer="A pointer that points to deallocated memory"
/>

<Question
  question="10) Which keyword is used to define a reference variable?"
  options={['*', '&', 'ref', '^']}
  answer="&"
/>

<div>
<AdBanner />
</div>

<Question
  question="11) Can we change the reference to refer to another variable?"
  options={['Yes', 'No', 'Only in classes', 'Only in functions']}
  answer="No"
/>

<Question
  question="12) What does `nullptr` represent in C++?"
  options={['A macro', 'An integer', 'A constant null pointer', 'A keyword for null references']}
  answer="A constant null pointer"
/>

<Question
  question="13) Which of the following declares a reference to an integer?"
  options={['int ref;',  'int *ref;', 'ref int;','int& ref;']}
  answer="int& ref;"
/>

<Question
  question="14) What will happen if you dereference a null pointer?"
  options={['Segmentation fault', '0 is printed', 'Compilation error', 'Undefined behavior']}
  answer="Undefined behavior"
/>

<Question
  question="15) What is the correct syntax to declare an array of pointers?"
  options={['int arr*[];', 'int* arr[];', 'int[]* arr;', 'int *arr;[]']}
  answer="int* arr[];"
/>

<Question
  question="16) Which of the following correctly initializes a null pointer in modern C++?"
  options={['int* p = NULL;', 'int* p = 0;', 'int* p = nullptr;', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="17) Can a reference be NULL?"
  options={['Yes', 'No', 'Only in C++11', 'Only with static references']}
  answer="No"
/>

<Question
  question="18) Which of the following operators is used to access members of a struct using a pointer?"
  options={['.', '*', '->', '&']}
  answer="->"
/>

<Question
  question="19) What does double pointer (e.g., int** p) point to?"
  options={['A pointer to an int', 'An array of ints', 'A pointer to a pointer', 'A reference to a pointer']}
  answer="A pointer to a pointer"
/>

<Question
  question="20).What will be the output of the following code?"
  code={`#include <iostream>
  using namespace std;

  int main() {
  int x = 10;
  int* p = &x;
  cout << &p;
  return 0;
  }`}
  options={['Address of x', 'Value of x', 'Address of pointer p', 'Compilation error']}
  answer="Address of pointer p"
/>

<div>
<AdBanner />
</div>

<Question
  question="21) What does the following function parameter mean: void func(int*& ptr)?"
  options={['Pointer passed by value', 'Pointer passed by reference', 'Reference passed by pointer', 'Invalid syntax']}
  answer="Pointer passed by reference"
/>

<Question
  question="22) Which is more efficient: passing by reference or passing by value (for large objects)?"
  options={['Passing by reference', 'Passing by value', 'They are the same', 'Depends on compiler']}
  answer="Passing by reference"
/>

<Question
  question="23) Can a pointer point to a function?"
  options={[ 'No', 'Only in C++11', 'Yes','Only with inline functions']}
  answer="Yes"
/>

<Question
  question="24) Which of the following is correct syntax to define a function pointer?"
  options={[ 'int *fp(int);','int (*fp)(int);', 'int &fp(int);', 'None of the above']}
  answer="int (*fp)(int);"
/>

<Question
  question="25) Which operator is used to dereference a pointer?"
  options={['*', '&', '->', '@']}
  answer="*"
/>

<Question
  question="26).What is the result of the following code?"
  code={`#include <iostream>
  using namespace std;

  int main() {
  int* p = nullptr;
  if (p)
    cout << 'A';
  else
    cout << 'B';
  return 0;
  }`}
  options={['A', 'B', 'Compilation error', 'Runtime error']}
  answer="B"
/>

<Question
  question="27) Which is safer: raw pointers or smart pointers?"
  options={['Raw pointers', 'Smart pointers', 'Both are same', 'Depends on usage']}
  answer="Smart pointers"
/>

<Question
  question="28) What is the keyword for smart pointer in C++?"
  options={['shared_pointer', 'auto_ptr', 'unique_ptr', 'smart_ptr']}
  answer="unique_ptr"
/>

<Question
  question="29) What header file includes std::shared_ptr?"
  options={['<memory>', '<utility>', '<pointer>', '<smartptr>']}
  answer="<memory>"
/>

<Question
  question="30) What will this return: `sizeof(int*)`?"
  options={['2', '4',  'Size of int','8 (typically on 64-bit systems)']}
  answer="8 (typically on 64-bit systems)"
/>

<Question
  question="31) What does this mean: `int* const ptr;`?"
  options={['A constant pointer to int', 'A pointer to a constant int', 'A reference to a pointer', 'None']}
  answer="A constant pointer to int"
/>

<Question
  question="32) What is a pointer to a constant?"
  options={['const int* ptr;', 'int const* ptr;', 'Both', 'None']}
  answer="Both"
/>

<Question
  question="33) Which of the following is invalid?"
  options={['int* p = nullptr;', 'int& r = NULL;', 'int x = 10;', 'int* q = &x;']}
  answer="int& r = NULL;"
/>

<Question
  question="34) What happens when you assign a reference to another variable?"
  options={['Creates new copy',  'Copies memory', 'Creates alias','Nothing']}
  answer="Creates alias"
/>

<Question
  question="35) Can a reference be reassigned to another variable after initialization?"
  options={['Yes', 'No', 'Only in loops', 'Only if passed to functions']}
  answer="No"
/>

<Question
  question="36) What is the output of the following code?"
  code={`#include <iostream>
  using namespace std;

  int main() {
  int a = 5;
  int* p = &a;
  cout << *p + 1;
  return 0;
  }`}
  options={['5', '6', 'Address of a + 1', 'Compilation error']}
  answer="6"
/>

<Question
  question="37) Which is the correct way to increment a pointer?"
  options={['p = p + 1;', '*p++;', 'p++;', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="38) What is the output of the following code?"
  code={`#include <iostream>
  using namespace std;

  int main() {
  int arr[] = {10, 20, 30};
  int* p = arr;
  cout << *(p + 1);
  return 0;
  }`}
  options={['10', '20', '30', 'Error']}
  answer="20"
/>

<Question
  question="39) How can you dynamically allocate memory for an int?"
  options={[ 'int p = new int;', 'int p = malloc(sizeof(int));', 'int* p = new int;','None']}
  answer="int* p = new int;"
/>

<Question
  question="40) Which is correct for deleting dynamically allocated array?"
  options={['delete ptr;', 'free(ptr);', 'delete[] ptr;', 'delete(ptr);']}
  answer="delete[] ptr;"
/>

<div>
<AdBanner />
</div>

<Question
  question="41) What happens when delete is called twice on same pointer?"
  options={['No effect',  'Memory leak', 'Segmentation fault','Undefined behavior']}
  answer="Undefined behavior"
/>

<Question
  question="42) Can a reference be assigned nullptr?"
  options={['Yes', 'No', 'Only in C++11', 'Only with const ref']}
  answer="No"
/>

<Question
  question="43) What is pointer arithmetic?"
  options={['Modifying addresses using operators', 'Using math in arrays', 'Incrementing variables', 'None']}
  answer="Modifying addresses using operators"
/>

<Question
  question="44) What is the base address of an array?"
  options={[ 'NULL', 'Address of last element', 'Size of array','Address of first element',]}
  answer="Address of first element"
/>

<Question
  question="45) Can you return a reference from a function?"
  options={['Yes', 'No', 'Only for pointers', 'Only for arrays']}
  answer="Yes"
/>

<Question
  question="46) What is the syntax to pass a pointer to a function?"
  options={['func(*p);', 'func(p);', 'func(&p);', 'func(p*)']}
  answer="func(p);"
/>

<Question
  question="47) What happens if we use uninitialized pointer?"
  options={['Compilation error', 'Garbage value', 'Undefined behavior', 'Null pointer exception']}
  answer="Undefined behavior"
/>

<Question
  question="48) What is the benefit of using references over pointers?"
  options={['No null references', 'Syntactic clarity', 'Safer usage', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="49) What does the expression *(arr + i) mean?"
  options={['arr[i]', 'Pointer to pointer', 'Invalid', 'Nothing']}
  answer="arr[i]"
/>

<Question
  question="50) How to declare a constant pointer to a constant int?"
  options={['const int* const ptr;', 'int const* ptr;', 'int* const ptr;',
  'const int ptr']}
  answer="const int* const ptr;"
/>

<div>
<AdBanner />
</div>