---
title: "C++ Classes and Objects MCQs"
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

# Classes and Objects

<Question
  question="1).What is a class in C++?"
  options={['A user-defined data type', 'A built-in data type', 'A predefined function', 'None of the above']}
  answer="A user-defined data type"
/>
<Question
  question="2).How do you create an object of a class in C++?"
  options={['className obj;', 'obj className;', 'object className;', 'None of the above']}
  answer="className obj;"
/>
<Question
  question="3).Which access specifier allows members to be accessed outside the class?"
  options={['private', 'protected', 'public', 'None of the above']}
  answer="public"
/>
<Question
  question="4).Which of the following defines a constructor in a class?"
  code={`class Example {
  public:
    Example() { }
};`}
  options={['Correct syntax', 'Error: Missing return type', 'Error: Missing parameters', 'None of the above']}
  answer="Correct syntax"
/>
<Question
  question="5).How do you define a member function outside a class?"
  options={['Using :: operator', 'Using . operator', 'Using -> operator', 'None of the above']}
  answer="Using :: operator"
/>
<Question
  question="6).Which operator is used to access members of a class through a pointer?"
  options={['.', '->', '::', 'None of the above']}
  answer="->"
/>
<Question
  question="7).What is the default access specifier for members in a class?"
  options={['private', 'protected', 'public', 'None of the above']}
  answer="private"
/>
<Question
  question="8).What happens if a constructor is not defined in a class?"
  options={['Compiler provides a default constructor', 'Error is thrown', 'Class cannot be used', 'None of the above']}
  answer="Compiler provides a default constructor"
/>
<Question
  question="9).What is a friend function in a class?"
  options={['A function declared outside but has access to private members', 'A member function that is private', 'A function that belongs to a derived class', 'None of the above']}
  answer="A function declared outside but has access to private members"
/>
<Question
  question="10).Which member function is called automatically when an object is destroyed?"
  options={['Destructor', 'Constructor', 'Friend function', 'None of the above']}
  answer="Destructor"
/>

<Question
  question="11).What is constructor overloading in C++?"
  options={['Using multiple constructors with different parameters', 'Using multiple constructors with same parameters', 'Using constructor in a loop', 'None of the above']}
  answer="Using multiple constructors with different parameters"
/>

<Question
  question="12).Which of the following is true about destructors in C++?"
  options={['They have the same name as class preceded with ~', 'They can be overloaded', 'They can have parameters', 'They return a value']}
  answer="They have the same name as class preceded with ~"
/>

<Question
  question="13).What is the output of accessing a private member of a class directly outside the class?"
  options={['Compile-time error', 'Runtime error', 'Zero', 'Undefined behavior']}
  answer="Compile-time error"
/>

<Question
  question="14).Which of the following can access private members of a class?"
  options={['Friend function', 'Public member function', 'Constructor', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="15).How many times is a constructor called?"
  options={['Once when the object is created', 'Every time a function is called', 'When the class is declared', 'None of the above']}
  answer="Once when the object is created"
/>

<Question
  question="16).Which of the following allows data sharing between two objects of the same class?"
  options={['Static members', 'Private members', 'Constructor', 'Destructor']}
  answer="Static members"
/>

<Question
  question="17).Which of the following is true about a static member function?"
  options={['It can be called using class name', 'It can access only static members', 'It doesn’t need an object to be called', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="18).How can you make a function inline in a class?"
  options={['Define it inside the class definition', 'Use the inline keyword outside class', 'Declare it as static', 'None of the above']}
  answer="Define it inside the class definition"
/>

<Question
  question="19).What does the `this` pointer represent in a class?"
  options={['Current object’s address', 'Class’s base address', 'Address of derived object', 'None of the above']}
  answer="Current object’s address"
/>

<Question
  question="20).What is the purpose of using 'const' after a member function declaration?"
  options={['To prevent the function from modifying class members', 'To protect the return type', 'To make the class immutable', 'None of the above']}
  answer="To prevent the function from modifying class members"
/>

<Question
  question="21).What is an object in C++?"
  options={['An instance of a class', 'A function call', 'A template', 'A header file']}
  answer="An instance of a class"
/>

<Question
  question="22).Can a class have a pointer to itself?"
  options={['Yes', 'No', 'Only for friend classes', 'Only for static classes']}
  answer="Yes"
/>

<Question
  question="23).What is the output of the following code?"
  code={`class A {
  public:
    A() { cout << "A"; }
    ~A() { cout << "B"; }
};

int main() {
  A obj;
  return 0;
}`}
  options={['A', 'B', 'AB', 'BA']}
  answer="AB"
/>

<Question
  question="24).Which operator is used to overload class behavior in C++?"
  options={['::', '->', 'new', 'operator']}
  answer="operator"
/>

<Question
  question="25).How is memory allocated to class objects in C++?"
  options={['During object creation', 'At compile time', 'Only if constructor is defined', 'Manually using malloc']}
  answer="During object creation"
/>

<Question
  question="26).What is the role of a copy constructor in a class?"
  options={['It creates a new object as a copy of an existing object', 'It assigns default values', 'It calls the destructor', 'None of the above']}
  answer="It creates a new object as a copy of an existing object"
/>

<Question
  question="27).Which of the following keywords is used to make a class member accessible to derived classes but not outside?"
  options={['protected', 'private', 'public', 'friend']}
  answer="protected"
/>

<Question
  question="28).Which of the following is a user-defined type?"
  options={['class', 'int', 'float', 'bool']}
  answer="class"
/>

<Question
  question="29).What is the size of an empty class in C++?"
  options={['1 byte', '0 byte', 'Depends on compiler', 'Undefined']}
  answer="1 byte"
/>

<Question
  question="30).Which of the following best describes encapsulation?"
  options={['Wrapping data and functions into a single unit', 'Separating logic from data', 'Inheriting members from another class', 'Overloading operators']}
  answer="Wrapping data and functions into a single unit"
/>

<Question
question="31).What is the correct syntax to declare a class in C++?"
options={['class MyClass {};', 'MyClass class {};', 'object MyClass {};', 'struct MyClass {};']}
answer="class MyClass {};"
/>

<Question
question="32).How do you create an object of class 'Car'?"
options={['Car myCar;', 'new Car();', 'Car = new object;', 'object Car myCar;']}
answer="Car myCar;"
/>

<Question
question="33).What is the default access specifier for class members if not specified?"
options={['public', 'private', 'protected', 'friend']}
answer="private"
/>

<Question
question="34).Which operator is used to access members of an object (not a pointer)?"
options={['->', '::', '.', '*']}
answer="."
/>

<Question
question="35).Can a class have multiple constructors?"
options={['No', 'Yes (constructor overloading)', 'Only if they are static', 'Only in derived classes']}
answer="Yes (constructor overloading)"
/>

<Question
question="36).How do you define a member function outside the class?"
options={['ClassName::function() {}', 'function() ClassName {}', 'ClassName.function() {}', 'extern function() {}']}
answer="ClassName::function() {}"
/>

<Question
question="37).Which keyword allows a function to access private members of a class without being a member?"
options={['static', 'const', 'friend', 'extern']}
answer="friend"
/>

<Question
question="38).How is a static member variable declared inside a class?"
options={['static int x;', 'int static x;', 'static x int;', 'int x static;']}
answer="static int x;"
/>

<Question
question="39).Where must a static member variable be defined outside the class?"
options={['In a header file', 'In the global scope', 'Inside main()', 'Nowhere (it’s auto-defined)']}
answer="In the global scope"
/>

<Question
question="40).What is the size of an empty class object?"
options={['0 bytes', '1 byte', '4 bytes', 'Depends on compiler']}
answer="1 byte"
/>

<Question
question="41).When is an object destroyed in C++?"
options={['When it goes out of scope', 'When the program ends', 'When delete is called (for dynamic objects)', 'All of the above']}
answer="All of the above"
/>

<Question
question="42).Can a class have an object of itself as a member?"
options={['Yes', 'No', 'Only if static', 'Only as a pointer']}
answer="Only as a pointer"
/>

<Question
question="43).What is the output of this code?"
code={'class Test { public: Test() { cout << "A"; } ~Test() { cout << "B"; } }; int main() { Test t; return 0; }'}
options={['A', 'B', 'AB', 'BA']}
answer="AB"
/>

<Question
question="44).Which of these is NOT a class member type?"
options={['static', 'const', 'friend', 'mutable']}
answer="friend"
/>

<Question
question="45).Which of the following is true about nested classes?"
options={['They can access private members of the outer class', 'They cannot be instantiated', 'They must be static', 'None of the above']}
answer="None of the above"
/>

<Question
question="46).What is the correct way to declare a class template?"
options={['template <class T> class ClassName {};', 'class template <T> ClassName {};', 'template ClassName <class T> {};', 'None of the above']}
answer="template <class T> class ClassName {};"
/>

<Question
question="47).What is the correct way to overload the + operator for a class?"
options={['ClassName operator+(ClassName obj);', 'operator+ ClassName(ClassName obj);', '+ operator ClassName(ClassName obj);', 'None of the above']}
answer="ClassName operator+(ClassName obj);"
/>

<Question
question="48).How do you initialize class members using a constructor?"
options={['Using an initializer list', 'Using assignment inside constructor', 'Both A and B', 'None of the above']}
answer="Both A and B"
/>

<Question
question="49).What happens if a class has no constructor defined?"
options={['Compiler provides a default constructor', 'Compilation error', 'Runtime error', 'Class cannot be used']}
answer="Compiler provides a default constructor"
/>

<Question
question="50).Which keyword is used to prevent a class from being inherited?"
options={['final', 'static', 'const', 'private']}
answer="final"
/>