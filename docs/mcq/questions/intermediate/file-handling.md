---
title: "C++ File Handling MCQs"
description: "Top multiple-choice questions (MCQs) on C++ Classes and Objects for interview preparation. Covers constructors, access specifiers, friend functions, and object creation."
keywords:
  - C++
  - C++ MCQs
  - C++ Questions
  - C++ Programming
  - C++ Interview Questions
  - C++ Quiz
  - cpp mcq
  - cpp mcq questions
  - cpp interview questions
  - c++ mcq
  - advanced c++ interview questions
  - C++ Multiple Choice Questions
  - C++ Objective Questions
  - C++ Basics
  - C++ Concepts
  - C++ Fundamentals
  - C++ Exam Questions
  - C++ Test Questions
  - C++ Online Test
  - C++ Practice Questions
  - Learn C++
  - C++ Data Structures
  - C++ STL
  - Object-Oriented Programming
  - OOP in C++
  - C++ Functions
  - C++ Classes
  - C++ Objects
  - C++ Constructors
  - C++ Destructors
  - C++ Access Specifiers
  - C++ Scope Resolution Operator
  - C++ Friend Function
  - C++ Inheritance
  - C++ Polymorphism
  - C++ Abstraction
  - C++ Encapsulation
  - Advanced C++ Topics
  - Multi-threading in C++
  - Competitive Programming in C++
  - C++ Coding Interview Questions

tags:
  - C++
  - C++ MCQs
  - C++ Interview Questions
  - C++ Online Test
  - C++ Quiz
  - C++ Objective Questions
  - C++ OOP
  - C++ Classes
  - C++ Objects
  - C++ Functions
  - C++ Programming Questions
  - Learn C++
  - C++ Test
  - C++ Beginner Guide
  - C++ Coding Questions
  - C++ Technical Interview
  - C++ Coding Interview
  - OOP in C++
  - C++ Constructors
  - C++ Destructors
  - C++ Polymorphism
  - C++ Virtual Functions
  - C++ Competitive Programming
  - Data Structures in C++
  - Algorithms in C++
  - STL in C++
  - C++ Performance Optimization
---

import { Question } from '../../Question';

# File Handling

<Question
  question="1).What is file handling in C++?"
  options={['Managing files for reading and writing', 'Creating classes', 'Handling memory leaks', 'None of the above']}
  answer="Managing files for reading and writing"
/>
<Question
  question="2).Which header file is required for file handling?"
  options={['<fstream>', '<iostream>', '<file.h>', 'None of the above']}
  answer="<fstream>"
/>
<Question
  question="3).Which class is used for reading from files?"
  options={['ifstream', 'ofstream', 'fstream', 'None of the above']}
  answer="ifstream"
/>
<Question
  question="4).Which class is used for writing to files?"
  options={['ofstream', 'ifstream', 'fstream', 'None of the above']}
  answer="ofstream"
/>
<Question
  question="5).How do you open a file in append mode?"
  options={['ios::app', 'ios::in', 'ios::out', 'None of the above']}
  answer="ios::app"
/>
<Question
  question="6).What is the default mode for opening a file?"
  options={['ios::in', 'ios::out', 'ios::binary', 'None of the above']}
  answer="ios::in"
/>
<Question
  question="7).How do you check if a file was opened successfully?"
  options={['Use the is_open() method', 'Check the file size', 'Read the file header', 'None of the above']}
  answer="Use the is_open() method"
/>
<Question
  question="8).What does the eof() function check?"
  options={['End of file', 'File size', 'File permissions', 'None of the above']}
  answer="End of file"
/>
<Question
  question="9).How do you close a file in C++?"
  options={['Use the close() method', 'Use the end() method', 'Use the terminate() method', 'None of the above']}
  answer="Use the close() method"
/>
<Question
  question="10).What happens if you try to read from a file that doesn’t exist?"
  options={['An error occurs', 'A new file is created', 'The program crashes', 'None of the above']}
  answer="An error occurs"
/>
<Question
  question="11).Which class in C++ is used for both reading and writing to files?"
  options={['fstream', 'ifstream', 'ofstream', 'file']}
  answer="fstream"
/>
<Question
  question="12).Which operator is used to write data into a file?"
  options={['<<', '>>', '=', '->']}
  answer="<<"
/>
<Question
  question="13).Which operator is used to read data from a file?"
  options={['>>', '<<', '=', '->']}
  answer=">>"
/>
<Question
  question="14).What is the purpose of ios::binary?"
  options={['Open file in binary mode', 'Open file in text mode', 'Close file automatically', 'None of the above']}
  answer="Open file in binary mode"
/>
<Question
  question="15).What does the seekg() function do?"
  options={['Moves the get pointer', 'Moves the put pointer', 'Closes the file', 'Flushes the buffer']}
  answer="Moves the get pointer"
/>
<Question
  question="16).What does the seekp() function do?"
  options={['Moves the put pointer', 'Moves the get pointer', 'Checks file end', 'Flushes the file']}
  answer="Moves the put pointer"
/>
<Question
  question="17).What does tellg() return?"
  options={['Current position of get pointer', 'Current position of put pointer', 'File size', 'None of the above']}
  answer="Current position of get pointer"
/>
<Question
  question="18).What does tellp() return?"
  options={['Current position of put pointer', 'Current position of get pointer', 'File name', 'None of the above']}
  answer="Current position of put pointer"
/>
<Question
  question="19).Which function is used to write a block of binary data to a file?"
  options={['write()', 'put()', 'insert()', 'send()']}
  answer="write()"
/>
<Question
  question="20).Which function is used to read a block of binary data from a file?"
  options={['read()', 'get()', 'scan()', 'receive()']}
  answer="read()"
/>
<Question
  question="21).What does the flush() function do?"
  options={['Flushes output buffer to file', 'Flushes memory cache', 'Closes the file', 'None of the above']}
  answer="Flushes output buffer to file"
/>
<Question
  question="22).Which file mode is used to truncate an existing file before writing?"
  options={['ios::trunc', 'ios::app', 'ios::ate', 'ios::binary']}
  answer="ios::trunc"
/>
<Question
  question="23).Which file mode opens the file and moves the pointer to the end?"
  options={['ios::ate', 'ios::in', 'ios::out', 'ios::binary']}
  answer="ios::ate"
/>
<Question
  question="24).What is the return type of is_open()?"
  options={['bool', 'int', 'void', 'string']}
  answer="bool"
/>
<Question
  question="25).Can we open a file in multiple modes simultaneously?"
  options={['Yes, using bitwise OR (|)', 'No', 'Only for read/write', 'Only for binary']}
  answer="Yes, using bitwise OR (|)"
/>
<Question
  question="26).What is the default file mode for ofstream?"
  options={['ios::out', 'ios::in', 'ios::binary', 'ios::app']}
  answer="ios::out"
/>
<Question
  question="27).Which method writes a single character to a file?"
  options={['put()', 'write()', 'insert()', 'append()']}
  answer="put()"
/>
<Question
  question="28).Which method reads a single character from a file?"
  options={['get()', 'read()', 'scan()', 'take()']}
  answer="get()"
/>
<Question
  question="29).Which function should be used to check for file read errors?"
  options={['fail()', 'check()', 'verify()', 'error()']}
  answer="fail()"
/>
<Question
  question="30).Which of the following best practices should be followed with file handling?"
  options={['Always close the file after use', 'Ignore file errors', 'Never check file mode', 'Use magic numbers']}
  answer="Always close the file after use"
/>
