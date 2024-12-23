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

