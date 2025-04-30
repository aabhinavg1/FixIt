---
id: array-and-strings
title: Array and String MCQs
description: |
  This guide covers the fundamentals and advanced techniques for working with arrays and strings in C++. Learn how to manipulate fixed-size arrays, dynamic arrays, and C-style strings, as well as leverage the power of `std::array`, `std::vector`, and `std::string` for safer, more efficient coding. Ideal for beginners and intermediates preparing for interviews or building foundational logic.
keywords:
  - Arrays in C++
  - Strings in C++
  - std::array C++
  - std::vector C++
  - std::string C++
  - Dynamic Arrays in C++
  - Fixed Size Arrays
  - C-style Strings
  - Character Arrays
  - C++ String Functions
  - Array Manipulation
  - String Reversal C++
  - Palindrome Check C++
  - Substrings in C++
  - Two-Pointer Technique
  - C++ Interview Questions
  - Basic Data Structures in C++
  - String Matching Algorithms
  - String to Integer Conversion
  - C++ Practice Problems

tags:
  - Arrays
  - Strings
  - C++ Vectors
  - std::array
  - std::string
  - Dynamic Memory
  - C++ Basics
  - String Algorithms
  - C++ Interview Prep
  - Data Structures
  - C-style Strings
  - Array Operations
  - Substrings
  - Character Arrays
  - Two-Pointer Technique
  - Coding Practice
  - Beginner C++
  - Intermediate C++

---
import { Question } from '../../Question';  // Adjust the path to your Question.js component


  
  <Question
    question="1).Which of the following is the correct syntax to declare an array in C++?"
    options={['int arr[];', 'int[] arr;', 'array<int> arr;', 'None of the above']}
    answer="int arr[];"
  />

  <Question
    question="2).What is the index of the first element of an array in C++?"
    options={['1', '0', '-1', 'None of the above']}
    answer="0"
  />

  <Question
    question="3).What will be the output of the following code?"
    code={`#include <iostream>
using namespace std;

int main() {
int arr[] = {10, 20, 30, 40};
cout << arr[1];
return 0;
}`}
    options={['10', '20', '30', '40']}
    answer="20"
  />

  <Question
    question="4).Which function is used to find the length of a string in C++?"
    options={['length()', 'size()', 'str_length()', 'None of the above']}
    answer="length()"
  />

  <Question
    question="5).Which of the following is the correct way to initialize a string in C++?"
    options={['string str = "Hello";', 'char str[] = "Hello";', 'char[] str = "Hello";', 'All of the above']}
    answer="All of the above"
  />

  <Question
    question="6).Which of the following functions is used to copy one string to another in C++?"
    options={['strcpy()', 'string_copy()', 'copy_string()', 'None of the above']}
    answer="strcpy()"
  />

  <Question
    question="7).What will be the output of the following code?"
    code={`#include <iostream>
#include <cstring>
using namespace std;

int main() {
char str1[] = "Hello";
char str2[] = "Hello";
cout << (strcmp(str1, str2) == 0 ? "Equal" : "Not Equal");
return 0;
}`}
    options={['Equal', 'Not Equal', 'Error', 'None of the above']}
    answer="Equal"
  />

  <Question
    question="8).What is the size of the array `int arr[5]` in C++?"
    options={['5', '10', '20', 'Depends on the compiler']}
    answer="5"
  />

  <Question
    question="9).How do you access the third element of an array `arr[]` in C++?"
    options={['arr[2]', 'arr[3]', 'arr(2)', 'arr(3)']}
    answer="arr[2]"
  />

  <Question
    question="10).What is the correct way to declare a multidimensional array in C++?"
    options={['int arr[3][3];', 'int arr[3,3];', 'int arr[3, 3] = {};', 'None of the above']}
    answer="int arr[3][3];"
  />

  <Question
    question="11).Which header file is needed to use the strlen() function in C++?"
    options={['<string>', '<cstring>', '<cstdlib>', '<iostream>']}
    answer="<cstring>"
  />

  <Question
    question="12).How do you declare a string object in C++?"
    options={['string s;', 'String s;', 'str s;', 'text s;']}
    answer="string s;"
  />

  <Question
    question="13).What is the index of the first element in a C++ array?"
    options={['1', '0', '-1', 'Depends on array type']}
    answer="0"
  />

  <Question
    question="14).Which of these is a valid way to declare and initialize a string in C++?"
    options={['string s("Hello");', 'string s = "Hello";', 'string s; s = "Hello";', 'All of the above']}
    answer="All of the above"
  />

  <Question
    question="15).What does the following code print?"
    code={`string str = "Hello";\ncout << str.length();`}
    options={['4', '5', '6', 'Error']}
    answer="5"
  />

  <Question
    question="16).Which of the following correctly copies one C++ string object to another?"
    options={['s1 = s2;', 'strcpy(s1, s2);', 'copy(s1, s2);', 'None of the above']}
    answer="s1 = s2;"
  />

  <Question
    question="17).Which of the following is not a valid operation on a C++ string object?"
    options={['Appending with +', 'Comparing with ==', 'Using strlen()', 'Using size()']}
    answer="Using strlen()"
  />

  <Question
    question="18).What will the following code output?"
    code={`int arr[4] = {1, 2, 3};\ncout << arr[3];`}
    options={['0', '3', 'Garbage value', 'Error']}
    answer="0"
  />

  <Question
    question="19).What does `sizeof(arr)/sizeof(arr[0])` give for an array?"
    options={['Number of elements in arr', 'Size of first element', 'Total memory', 'None of the above']}
    answer="Number of elements in arr"
  />

  <Question
    question="20).How do you pass an array to a function in C++?"
    options={['By value', 'By reference', 'As a pointer', 'All of the above']}
    answer="All of the above"
  />

  <Question
    question="21).What will this code output?"
    code={`char str[] = "Hi";\ncout << sizeof(str);`}
    options={['2', '3', '4', 'Undefined']}
    answer="3"
  />

  <Question
    question="22).Which of the following methods checks if a C++ string is empty?"
    options={['str.empty()', 'str.isEmpty()', 'empty(str)', 'str == ""']}
    answer="str.empty()"
  />

  <Question
    question="23).What is the output of this code?"
    code={`string s = "Code";\ns += "Sutra";\ncout << s;`}
    options={['Code Sutra', 'CodeSutra', 'Error', 'SutraCode']}
    answer="CodeSutra"
  />

  <Question
    question="24).Which function is used to compare two strings in C-style?"
    options={['strcmp()', 'compare()', 'equals()', '==']}
    answer="strcmp()"
  />

  <Question
    question="25).Which function returns the capacity of a C++ string?"
    options={['size()', 'length()', 'capacity()', 'max_size()']}
    answer="capacity()"
  />

  <Question
    question="26).What will this code return?"
    code={`int arr[5] = {10, 20, 30, 40, 50};\ncout << arr[4];`}
    options={['40', '50', '60', 'Error']}
    answer="50"
  />

  <Question
    question="27).Which function appends a string at the end of another in C++ STL?"
    options={['append()', 'push()', 'add()', 'concat()']}
    answer="append()"
  />

  <Question
    question="28).How many dimensions can an array in C++ have?"
    options={['Up to 2', 'Up to 3', 'Up to 10', 'As many as memory allows']}
    answer="As many as memory allows"
  />

  <Question
    question="29).What is the default value of an int array element in C++ (non-static, uninitialized)?"
    options={['0', 'Garbage value', 'null', 'Undefined']}
    answer="Garbage value"
  />

  <Question
    question="30).Which keyword is used to get the number of characters in a string in C++?"
    options={['length', 'size', 'length()', 'None of the above']}
    answer="length()"
  />

  <Question
    question="31).What will be the output of the following code?"
    code={`#include <iostream>
      using namespace std;
      int main() {
        int arr[5] = {1};
          for(int i = 0; i < 5; i++) {
            cout << arr[i] << " ";
        }
        return 0;
      }`}
    options={['1 0 0 0 0', '1 1 1 1 1', '0 0 0 0 0', '1 garbage garbage garbage garbage']}
    answer="1 0 0 0 0"
/>

<Question
  question="32).What will be the output of the following code?"
  code={` #include <iostream>
   using namespace std; 
   int main() { 
    int arr[3] = {1, 2, 3}; 
    cout << *(arr + 1);
     return 0;
      } `}
  options={['1', '2', '3', 'Address of arr[1]']}
  answer="2"
/>

<Question
  question="33).Which of these correctly declares and initializes a C++ string with 5 'a' characters?"
  options={[
    "string s(5, 'a');",
    'string s = "aaaaa";',
    "string s; s.assign(5, 'a');",
    "All of the above"
  ]}
  answer="All of the above"
/>


<Question
question="34).What does this code output?"
  code={`#include <iostream>
   #include <cstring> 
   using namespace std;
    int main() {
       char str[10] = "Hello"; 
       cout << strlen(str); 
       return 0;
        }`}
  options={['5', '6', '10', 'Undefined']}
  answer="5"
/>

<Question
  question="35).How do you correctly deallocate a dynamically allocated array in C++?"
  options={['delete arr;', 'delete[] arr;', 'free(arr);', 'Both B and C']}
  answer="delete[] arr;"
/>

<Question
  question="36).What is the value of arr[2] after this code executes?"
  code={`int arr[5] = {10, 20}; arr[2] = arr[0] + arr[1];`}
  options={['0', '10', '20', '30']}
  answer="30"
/>


<Question
  question="37).Which function is used to find a substring in a C++ string object?"
  options={['find()', 'search()', 'substr()', 'locate()']}
  answer="find()"
  />

<Question
  question="38).What is the output of this code?"
    code={`#include <iostream> 
    using namespace std; 
    int main() { 
      string s1 = "C++";
      string s2 = s1; 
      s1[0] = 'P'; 
      cout << s2; 
      return 0; 
      }`}
  options={['P++', 'C++', 'Error', 'Undefined']}
  answer="C++"
  />

<Question
  question="39).What is the correct way to pass an array to a function without specifying its size?"
  options={['void func(int arr[])', 'void func(int* arr)', 'Both A and B', 'None of the above']}
  answer="Both A and B"
  />

<Question
  question="40).What does this code output?"
    code={`#include <iostream>
    using namespace std;
    int main() { 
      int arr[] = {1, 2, 3, 4, 5}; 
      cout << *(arr + 3);
      return 0; 
      }`}
  options={['1', '3', '4', 'Address of arr[3]']}
  answer="4"
  />