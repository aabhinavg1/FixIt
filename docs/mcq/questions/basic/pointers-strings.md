---
id: pointers-strings
title: Pointer and String C++ Multiple Choice Questions (MCQs)
description: |
  Test your knowledge of pointers and strings in C++ with this set of Multiple Choice Questions (MCQs). This quiz covers topics such as pointer arithmetic, dynamic memory allocation, pointer-to-pointer, and string manipulation in C++. It is ideal for beginners and those preparing for C++ interviews, helping you solidify your understanding of two key concepts in C++ programming.
keywords:
  - C++ Pointers
  - C++ Strings
  - Pointer Arithmetic
  - Dynamic Memory Allocation
  - Pointer-to-Pointer in C++
  - C++ String Manipulation
  - C++ String Functions
  - C++ Memory Management
  - C++ String Handling
  - C++ MCQs
  - C++ Interview Questions
  - C++ Pointer Concepts
  - C++ String Methods
  - C++ Programming
  - C++ Pointers and Arrays
  - C++ Char Arrays
  - C++ Pointer to Array
  - String Manipulation C++

tags:
  - C++ Pointers
  - C++ Strings
  - Pointer Arithmetic
  - Dynamic Memory Allocation
  - Pointer-to-Pointer
  - C++ String Functions
  - C++ String Handling
  - C++ MCQs
  - C++ Interview Questions
  - C++ Memory Management
  - C++ Char Arrays
  - String Manipulation in C++
  - C++ Programming
  - C++ Arrays and Pointers
  - C++ Pointer Basics
  - C++ String Manipulation Techniques

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

<Question
  question="11).Which header file is required to use strings in C++?"
  options={['<cstring>', '<string>', '<stdlib.h>', '<str>']}
  answer="<string>"
/>

<Question
  question="12).What does the following code print?"
  code={`#include <iostream>
using namespace std;

int main() {
  string str = "Hello";
  cout << str.length();
  return 0;
}`}
  options={['4', '5', '6', 'Error']}
  answer="5"
/>

<Question
  question="13).Which function is used to compare two C-style strings?"
  options={['strcmp()', 'strcomp()', 'compare()', 'equals()']}
  answer="strcmp()"
/>

<Question
  question="14).Which of the following correctly copies one string to another (C-style)?"
  options={['strcpy(dest, src);', 'dest = src;', 'strcopy(src, dest);', 'copy(dest, src);']}
  answer="strcpy(dest, src);"
/>

<Question
  question="15).What is the output of this code?"
  code={`#include <iostream>
using namespace std;

int main() {
  char str[] = "World";
  cout << str[0];
  return 0;
}`}
  options={['W', 'o', 'Error', '0']}
  answer="W"
/>

<Question
  question="17).What will be the output of the following code?"
  code={`#include <iostream>
using namespace std;

int main() {
  const char* str = "Pointer";
  cout << str[2];
  return 0;
}`}
  options={['P', 'o', 'i', 'n']}
  answer="i"
/>

<Question
  question="17).What is the correct way to allocate memory for a string in C++ using new?"
  options={['char* str = new char[20];', 'char str = new char;', 'string str = new string;', 'None of the above']}
  answer="char* str = new char[20];"
/>

<Question
  question="18).How would you free dynamically allocated memory for a char array?"
  options={['delete str;', 'free(str);', 'delete[] str;', 'release(str);']}
  answer="delete[] str;"
/>

<Question
  question="19).Which of these operators is overloaded in the C++ string class?"
  options={['+', '==', '=', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="20).What does the following code print?"
  code={`#include <iostream>
#include <string>
using namespace std;

int main() {
  string str = "Hello";
  str += " World";
  cout << str;
  return 0;
}`}
  options={['Hello', 'World', 'Hello World', 'Error']}
  answer="Hello World"
/>

<Question
  question="21).Which of the following is used to get a character at a specific index in a string?"
  options={['str.at(i)', 'str[i]', 'Both A and B', 'None of the above']}
  answer="Both A and B"
/>

<Question
  question="22).What is the output?"
  code={`#include <iostream>
using namespace std;

int main() {
  string s = "abc";
  cout << s[3];
  return 0;
}`}
  options={['\\0 (null char)', 'Error', 'c', 'a']}
  answer="\0 (null char)"
/>

<Question
  question="23).Which of these best describes pointer arithmetic?"
  options={['It moves the pointer based on data type size', 'It adds bytes to address', 'It does nothing', 'None']}
  answer="It moves the pointer based on data type size"
/>

<Question
  question="24).How do you declare a pointer to a string object in C++?"
  options={['string* ptr;', '*string ptr;', 'ptr string*;', 'None']}
  answer="string* ptr;"
/>

<Question
  question="25).What is the output?"
  code={`#include <iostream>
using namespace std;

int main() {
  string str = "Code";
  string* ptr = &str;
  cout << *ptr;
  return 0;
}`}
  options={['Code', 'str', 'ptr', 'Error']}
  answer="Code"
/>

<Question
  question="26).Which keyword is used to prevent a pointer from modifying the value it points to?"
  options={['const', 'static', 'final', 'restrict']}
  answer="const"
/>

<Question
  question="27).What is the result of dereferencing an uninitialized pointer?"
  options={['Segmentation fault', '0', 'Random value', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="28).Which of the following is valid to check if a pointer is null?"
  options={['if(ptr == nullptr)', 'if(!ptr)', 'if(ptr == NULL)', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="29).What does `&*ptr` return if `ptr` is a valid pointer?"
  options={['Address stored in ptr', 'Value stored at ptr', 'Error', 'None']}
  answer="Address stored in ptr"
/>

<Question
  question="30).What is the output?"
  code={`#include <iostream>
using namespace std;

int main() {
  string s = "abc";
  string* p = &s;
  cout << p->length();
  return 0;
}`}
  options={['2', '3', 'abc', 'Error']}
  answer="3"
/>

<Question
  question="31).What is the default value of an uninitialized pointer in C++?"
  options={['nullptr', '0', 'Random address', 'Error']}
  answer="nullptr"
/>

<Question
  question="32).What does the expression `*ptr++` do in C++?"
  options={['Dereferences ptr, then increments the pointer', 'Increments the pointer, then dereferences it', 'Increments ptr by 1 byte', 'None of the above']}
  answer="Dereferences ptr, then increments the pointer"
/>

<Question
  question="33).What happens if you try to dereference a pointer to a local variable after the function has returned?"
  options={['Segmentation fault', 'The pointer will hold the last valid value', 'It will print a garbage value', 'It will not compile']}
  answer="Segmentation fault"
/>

<Question
  question="34).Which of the following can a pointer in C++ point to?"
  options={['An integer', 'A float', 'A string', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="35).Which of these is a valid way to declare a constant pointer in C++?"
  options={['int* const ptr;', 'const int* ptr;', 'int* ptr const;', 'None of the above']}
  answer="int* const ptr;"
/>

<Question
  question="36).What does the following code print?"
  code={`#include <iostream>
  using namespace std;

  int main() {
  int x = 5;
  int* ptr = &x;
  *ptr = 10;
  cout << x;
  return 0;
  }`}
  options={['5', '10', 'Error', 'None of the above']}
  answer="10"
/>

<Question
  question="37).How would you declare a pointer to a pointer in C++?"
  options={['int** ptr;', 'pointer int* ptr;', 'int* ptr*;', 'None of the above']}
  answer="int** ptr;"
/>

<Question
  question="38).What is the output of the following code?"
  code={`#include <iostream>
  using namespace std;

  int main() {
  int arr[] = {1, 2, 3};
  int* ptr = arr;
  cout << *(ptr + 1);
  return 0;
  }`}
  options={['1', '2', '3', 'Error']}
  answer="2"
/>

<Question
  question="39).Which of the following is true about a `nullptr` in C++?"
  options={['It is a constant pointer to a memory address', 'It is used to initialize a pointer to null', 'It cannot be dereferenced', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="40).What is the correct way to declare a pointer to a constant in C++?"
  options={['const int* ptr;', 'int* const ptr;', 'const int ptr*;', 'None of the above']}
  answer="const int* ptr;"
/>

<Question
  question="41).What is the purpose of `delete[]` in C++?"
  options={['It deallocates memory for a dynamically allocated array', 'It frees a single dynamically allocated object', 'It marks the pointer as deleted', 'None of the above']}
  answer="It deallocates memory for a dynamically allocated array"
/>

<Question
  question="42).Which function is used to dynamically allocate memory for a single object in C++?"
  options={['new', 'malloc', 'calloc', 'None of the above']}
  answer="new"
/>

<Question
  question="43).What will happen if you call `delete` on a pointer that points to an array?"
  options={['Memory leak', 'Undefined behavior', 'It will delete the array correctly', 'Error']}
  answer="Undefined behavior"
/>

<Question
  question="44).What does the following code print?"
  code={`#include <iostream>
  using namespace std;

  int main() {
  string s = "C++";
  char* ptr = &s[0];
  cout << ptr;
  return 0;
  }`}
  options={['C+', 'C++', '++', 'Error']}
  answer="C++"
/>

<Question
  question="45).What is the purpose of `memset()` in C++?"
  options={['To set all bytes of a memory block to a specific value', 'To initialize a pointer to null', 'To clear the memory of a pointer', 'None of the above']}
  answer="To set all bytes of a memory block to a specific value"
/>

<Question
  question="46).How do you declare a constant reference to a string in C++?"
  options={['const string& str;', 'string& const str;', 'const string str&;', 'None of the above']}
  answer="const string& str;"
/>

<Question
  question="47).What does `&ptr` return in C++?"
  options={['The address stored in ptr', 'The value stored at ptr', 'The address of the pointer variable', 'None of the above']}
  answer="The address of the pointer variable"
/>

<Question
  question="48).Which of the following is true about C++ string manipulation?"
  options={['Strings in C++ are mutable', 'Strings in C++ are immutable', 'String literals are pointers', 'Both A and C']}
  answer="Both A and C"
/>

<Question
  question="49).What happens when you try to assign one pointer to another in C++?"
  options={['The two pointers will point to the same address', 'It causes a compilation error', 'The memory at that address is copied', 'None of the above']}
  answer="The two pointers will point to the same address"
/>

<Question
  question="50).What will the following code print?"
  code={`#include <iostream>
  using namespace std;

  int main() {
  string str = "Example";
  cout << str.substr(2, 4);
  return 0;
  }`}
  options={['Ex', 'ampl', 'xam', 'Error']}
  answer="ampl"
/>
