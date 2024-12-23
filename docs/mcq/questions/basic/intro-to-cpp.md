import { Question } from '../../Question';  // Adjust the path to your Question.js component

// C++ Introduction Quiz

<Question
  question="1).What is the main purpose of the C++ programming language?"
  options={['To provide a platform-independent programming language for system and application software.',
           'To create web pages.',
           'To design graphics and animations.',
           'To simulate mathematical models in physics and engineering.']}
  answer="To provide a platform-independent programming language for system and application software."
/>

<Question
  question="2).Which of the following is a valid C++ identifier?"
  options={['123abc', '_myVariable', 'int', 'return']}
  answer="_myVariable"
/>

<Question
  question="3).Which of the following is the correct syntax to include a header file in C++?"
  options={['#include <iostream>', 'include iostream.h', '#include iostream', '#import <iostream>']}
  answer="#include <iostream>"
/>

<Question
  question="4).Which of the following is the correct way to print 'Hello, World!' in C++?"
  options={['print("Hello, World!");', 'echo "Hello, World!";', 'cout << "Hello, World!";', 'console.log("Hello, World!");']}
  answer="cout << 'Hello, World!';"
/>

<Question
  question="5).What is the default value of a global variable in C++ if it is not explicitly initialized?"
  options={['0', 'null', 'undefined', 'It throws an error.']}
  answer="0"
/>

<Question
  question="6).Which operator is used to access members of a class in C++?"
  options={['.', '->', '&', '*']}
  answer="."
/>

<Question
  question="7).In C++, which of the following types is used for dynamic memory allocation?"
  options={['new', 'malloc', 'alloc', 'allocmem']}
  answer="new"
/>

<Question
  question="8).Which of the following is the correct way to comment a single line in C++?"
  options={['// This is a comment', '/* This is a comment */', '<!-- This is a comment -->', '# This is a comment']}
  answer="// This is a comment"
/>

<Question
  question="9).Which of the following is the correct syntax to declare a constant in C++?"
  options={['const int x = 10;', 'int x const = 10;', 'constant int x = 10;', 'x = const 10;']}
  answer="const int x = 10;"
/>

<Question
  question="10).Which of the following statements is true about C++ functions?"
  options={['A function must always return a value.',
           'A function may or may not return a value.',
           'A function can only return an integer.',
           'A function cannot take parameters.']}
  answer="A function may or may not return a value."
/>
