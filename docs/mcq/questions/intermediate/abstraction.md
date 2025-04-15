---
title: "C++ Abstraction MCQs"
description: "Top multiple-choice questions (MCQs) on C++ Classes and Objects for interview preparation. Covers constructors, access specifiers, friend functions, and object creation."
keywords:
  - C++
  - C++ MCQs
  - C++ Questions
  - C++ Programming
  - C++ Interview Questions
  - C++ Quiz
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
  - cpp mcq
  - cpp mcq questions
  - cpp interview questions
  - c++ mcq
  - advanced c++ interview questions
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

# Abstraction

<Question
  question="1).What is abstraction in C++?"
  options={['Hiding implementation details', 'Separating data from methods', 'Providing access to all data members', 'None of the above']}
  answer="Hiding implementation details"
/>
<Question
  question="2).Which type of class supports abstraction?"
  options={['Abstract class', 'Derived class', 'Friend class', 'None of the above']}
  answer="Abstract class"
/>
<Question
  question="3).Which keyword is used to declare an abstract class?"
  options={['virtual', 'abstract', 'pure', 'None of the above']}
  answer="None of the above"
/>
<Question
  question="4).What is the difference between abstraction and encapsulation?"
  options={['Abstraction focuses on design, encapsulation focuses on implementation', 'Encapsulation hides data, abstraction hides implementation', 'Both A and B', 'None of the above']}
  answer="Both A and B"
/>
<Question
  question="5).What is a pure virtual function?"
  options={['A function with no implementation', 'A function with default implementation', 'A function that initializes data members', 'None of the above']}
  answer="A function with no implementation"
/>
<Question
  question="6).Can an abstract class have a constructor?"
  options={['Yes', 'No', 'Only for derived classes', 'None of the above']}
  answer="Yes"
/>
<Question
  question="7).What happens when you try to instantiate an abstract class?"
  options={['Compiler error', 'A default object is created', 'The derived class is instantiated', 'None of the above']}
  answer="Compiler error"
/>
<Question
  question="8).Why are abstract classes used in C++?"
  options={['To provide a base for derived classes', 'To create objects directly', 'To ensure data hiding', 'None of the above']}
  answer="To provide a base for derived classes"
/>
<Question
  question="9).Can an abstract class have non-pure virtual functions?"
  options={['Yes', 'No', 'Only in derived classes', 'None of the above']}
  answer="Yes"
/>
<Question
  question="10).Which of the following is an example of abstraction in C++?"
  options={['Using interfaces', 'Using private members', 'Using inline functions', 'None of the above']}
  answer="Using interfaces"
/>

<Question
  question="11).Which of the following makes a class abstract in C++?"
  options={['At least one pure virtual function', 'All methods must be private', 'It inherits another class', 'It uses virtual inheritance']}
  answer="At least one pure virtual function"
/>

<Question
  question="12).How do you declare a pure virtual function?"
  options={['virtual void func();', 'virtual void func() = 0;', 'void virtual func();', 'pure virtual void func();']}
  answer="virtual void func() = 0;"
/>

<Question
  question="13).Can you have pointers to abstract classes?"
  options={['Yes', 'No', 'Only if they point to derived classes', 'Only inside main()']}
  answer="Yes"
/>

<Question
  question="14).What is the purpose of a pure virtual destructor?"
  options={['To prevent deletion of derived objects', 'To enforce destruction through base pointers', 'To make the class abstract and allow cleanup', 'None of the above']}
  answer="To make the class abstract and allow cleanup"
/>

<Question
  question="15).What is the output of this C++ code?"
  code={`class A {
public:
    virtual void show() = 0;
};

class B : public A {};`}
  options={['No error', 'Compiler error', 'Runtime error', 'Undefined behavior']}
  answer="Compiler error"
/>

<Question
  question="16).Can an abstract class have member variables?"
  options={['Yes', 'No', 'Only static members', 'Only private members']}
  answer="Yes"
/>

<Question
  question="17).Which of the following statements is true about abstract classes?"
  options={['You can’t create a pointer to them', 'They must only contain pure virtual functions', 'They can have both implemented and pure virtual methods', 'They can’t be inherited']}
  answer="They can have both implemented and pure virtual methods"
/>

<Question
  question="18).How can abstraction be achieved in C++?"
  options={['Using classes and access specifiers', 'Using templates', 'Using friend functions', 'Using arrays']}
  answer="Using classes and access specifiers"
/>

<Question
  question="19).Which of the following C++ features supports abstraction the most?"
  options={['Operator overloading', 'Inheritance', 'Polymorphism', 'Access specifiers']}
  answer="Access specifiers"
/>

<Question
  question="20).In C++, which type of member function helps in abstraction?"
  options={['Friend function', 'Virtual function', 'Inline function', 'Global function']}
  answer="Virtual function"
/>

<Question
  question="21).Which statement is true about abstract base classes in C++?"
  options={['They must be inherited', 'They can only have private members', 'They are instantiated directly', 'They can’t have a constructor']}
  answer="They must be inherited"
/>

<Question
  question="22).What is the role of a virtual table (vtable) in abstraction?"
  options={['It stores abstract classes', 'It maintains a list of all base classes', 'It helps resolve function calls at runtime', 'It enables template instantiation']}
  answer="It helps resolve function calls at runtime"
/>

<Question
  question="23).Can you override a pure virtual function in a derived class?"
  options={['Yes, it’s mandatory', 'No, it must remain pure', 'Only in private scope', 'Only if declared inline']}
  answer="Yes, it’s mandatory"
/>

<Question
  question="24).What is the result if a derived class does not override all pure virtual functions of the base class?"
  options={['It becomes abstract itself', 'It throws a runtime error', 'It compiles but fails to run', 'None of the above']}
  answer="It becomes abstract itself"
/>

<Question
  question="25).Which of the following access specifiers is most useful in achieving abstraction?"
  options={['private', 'public', 'protected', 'inline']}
  answer="private"
/>

<Question
  question="26).Which of these best demonstrates abstraction?"
  options={['A function that performs I/O operations', 'A class with only private data and public methods', 'A global variable', 'A static function']}
  answer="A class with only private data and public methods"
/>

<Question
  question="27).Is it possible to create an array of pointers to an abstract base class?"
  options={['Yes, if they point to derived class objects', 'No', 'Only if the base class is not pure virtual', 'Only in templates']}
  answer="Yes, if they point to derived class objects"
/>

<Question
  question="28).Which of the following is NOT related to abstraction?"
  options={['Encapsulation', 'Hiding details', 'Function overloading', 'Interface design']}
  answer="Function overloading"
/>

<Question
  question="29).What type of error will occur if you don’t override a pure virtual function in a concrete class?"
  options={['Syntax error', 'Runtime error', 'Compiler error', 'Linker error']}
  answer="Compiler error"
/>

<Question
  question="30).How does abstraction improve software design?"
  options={['Increases memory usage', 'Improves data visibility', 'Reduces complexity by hiding internal implementation', 'Allows access to low-level system calls']}
  answer="Reduces complexity by hiding internal implementation"
/>
