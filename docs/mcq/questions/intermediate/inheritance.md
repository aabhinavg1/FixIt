---
title: "C++ Inheritence MCQs"
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

# Inheritance

<Question
  question="1).What is inheritance in C++?"
  options={['A process of acquiring properties from another class', 'A process of creating new objects', 'A function of encapsulation', 'None of the above']}
  answer="A process of acquiring properties from another class"
/>
<Question
  question="2).Which type of inheritance is not supported in C++?"
  options={['Multiple', 'Multilevel', 'Single', 'Cyclic']}
  answer="Cyclic"
/>
<Question
  question="3).Which keyword is used to define inheritance in C++?"
  options={['extends', 'inherits', 'derived', 'None of the above']}
  answer="None of the above"
/>
<Question
  question="4).What is the base class in inheritance?"
  options={['The class from which properties are inherited', 'The class that inherits properties', 'A function inside a class', 'None of the above']}
  answer="The class from which properties are inherited"
/>
<Question
  question="5).What access specifier is used to prevent inheritance?"
  options={['private', 'protected', 'public', 'final']}
  answer="final"
/>
<Question
  question="6).What is a virtual base class?"
  options={['A base class designed to avoid multiple inheritance conflicts', 'A base class for dynamic polymorphism', 'A base class that cannot have objects', 'None of the above']}
  answer="A base class designed to avoid multiple inheritance conflicts"
/>
<Question
  question="7).What is the correct syntax for inheritance?"
  options={['class Derived : public Base {}', 'class Derived inherits Base {}', 'class Derived :: Base {}', 'None of the above']}
  answer="class Derived : public Base {}"
/>
<Question
  question="8).What is function overriding?"
  options={['A derived class redefining a base class function', 'A function calling another function', 'A function with multiple definitions', 'None of the above']}
  answer="A derived class redefining a base class function"
/>
<Question
  question="9).Which of the following is an advantage of inheritance?"
  options={['Code reuse', 'Improved encapsulation', 'Better performance', 'None of the above']}
  answer="Code reuse"
/>
<Question
  question="10).What is the use of the 'super' keyword in inheritance?"
  options={['To access base class members', 'To call the base class constructor', 'Both A and B', 'None of the above']}
  answer="None of the above"
/>
<Question
  question="11).What type of inheritance occurs when a class is derived from more than one base class?"
  options={['Hierarchical inheritance', 'Multiple inheritance', 'Single inheritance', 'Hybrid inheritance']}
  answer="Multiple inheritance"
/>

<Question
  question="12).In C++, how can you prevent a class from being inherited?"
  options={['Using sealed keyword', 'Using private inheritance', 'Declaring the class as final', 'Making the constructor private']}
  answer="Declaring the class as final"
/>

<Question
  question="13).In multilevel inheritance, which class acts both as a derived and base class?"
  options={['Intermediate class', 'Primary class', 'Secondary class', 'Top class']}
  answer="Intermediate class"
/>

<Question
  question="14).Which inheritance type creates a diamond problem?"
  options={['Single', 'Multiple', 'Multilevel', 'Hierarchical']}
  answer="Multiple"
/>

<Question
  question="15).Which access specifier allows a derived class to access protected members of a base class?"
  options={['private', 'protected', 'public', 'internal']}
  answer="protected"
/>

<Question
  question="16).Which constructor is called first during the creation of a derived class object?"
  options={['Derived class constructor', 'Base class constructor', 'Friend class constructor', 'Sibling class constructor']}
  answer="Base class constructor"
/>

<Question
  question="17).Which concept allows the same function name to behave differently in different classes?"
  options={['Overriding', 'Overloading', 'Encapsulation', 'Virtualization']}
  answer="Overriding"
/>

<Question
  question="18).What happens if a derived class has no constructor?"
  options={['Base class constructor is not called', 'Base class constructor is called automatically', 'Compilation error occurs', 'Program crashes']}
  answer="Base class constructor is called automatically"
/>

<Question
  question="19).Which member of the base class is never inherited by the derived class?"
  options={['Public members', 'Protected members', 'Private members', 'Static members']}
  answer="Private members"
/>

<Question
  question="20).In C++, which inheritance visibility mode makes public members of the base class become private in the derived class?"
  options={['public', 'private', 'protected', 'virtual']}
  answer="private"
/>

<Question
  question="21).What is hybrid inheritance?"
  options={['Inheritance involving only two classes', 'Inheritance combining multiple types of inheritance', 'Inheritance without constructors', 'None of the above']}
  answer="Inheritance combining multiple types of inheritance"
/>

<Question
  question="22).Which feature is primarily used to achieve runtime polymorphism in C++ inheritance?"
  options={['Function Overloading', 'Operator Overloading', 'Virtual Functions', 'Templates']}
  answer="Virtual Functions"
/>

<Question
  question="23).What is the order of destructor calls in case of inheritance?"
  options={['Base to Derived', 'Derived to Base', 'Random', 'Depends on compiler']}
  answer="Derived to Base"
/>

<Question
  question="24).When can a derived class access the private members of a base class?"
  options={['Directly', 'By using friend functions', 'By making them protected', 'It cannot access them']}
  answer="By using friend functions"
/>

<Question
  question="25).Which inheritance type best represents a tree-like hierarchy?"
  options={['Single', 'Hierarchical', 'Multilevel', 'Multiple']}
  answer="Hierarchical"
/>

<Question
  question="26).What is a pure virtual function?"
  options={['A function with no implementation', 'A function that must be overridden', 'A function marked with =0', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="27).What is the size of a derived class object compared to its base class?"
  options={['Always smaller', 'Always larger', 'Depends on number of members added', 'Always same']}
  answer="Depends on number of members added"
/>

<Question
  question="28).Which keyword is used to inherit constructors from base class in C++11?"
  options={['base', 'constructor', 'using', 'inherits']}
  answer="using"
/>

<Question
  question="29).What happens if you call a base class function using a derived class object?"
  options={['Base class version is invoked', 'Derived class version is invoked', 'Both are invoked', 'Compilation error']}
  answer="Base class version is invoked"
/>

<Question
  question="30).Which type of function must a derived class implement if it inherits a pure virtual function?"
  options={['Normal function', 'Static function', 'Constructor', 'Pure virtual function']}
  answer="Pure virtual function"
/>
<Question
  question="31).What is the default inheritance visibility mode for classes in C++?"
  options={['private', 'public', 'protected', 'None of the above']}
  answer="private"
/>
<Question
  question="32).Can a derived class override a non-virtual base class function?"
  options={['Yes, but it won’t be polymorphic', 'No', 'Yes, always polymorphic', 'Only if base class is abstract']}
  answer="Yes, but it won’t be polymorphic"
/>
<Question
  question="33).Which function call mechanism is used for virtual functions in inheritance?"
  options={['Static binding', 'Early binding', 'Late binding', 'Function overloading']}
  answer="Late binding"
/>
<Question
  question="34).Which keyword is used to make a class abstract in C++?"
  options={['abstract', 'virtual', 'pure', 'None explicitly; use pure virtual functions']}
  answer="None explicitly; use pure virtual functions"
/>
<Question
  question="35).Which of the following is true about destructors in inheritance?"
  options={['Base class destructors should be virtual', 'Derived class destructors are called first', 'Both A and B', 'None of the above']}
  answer="Both A and B"
/>
<Question
  question="36).Which access specifier inheritance hides base class public members in derived class?"
  options={['private', 'protected', 'public', 'virtual']}
  answer="private"
/>
<Question
  question="37).What is object slicing in inheritance?"
  options={['When base part of derived object is copied to base class object', 'When virtual function is sliced off', 'Compiler optimization', 'Derived object deleting base object']}
  answer="When base part of derived object is copied to base class object"
/>
<Question
  question="38).Which type of inheritance is best suited for modeling real-world relationships?"
  options={['Single', 'Hierarchical', 'Multilevel', 'Hybrid']}
  answer="Hierarchical"
/>
<Question
  question="39).How can a derived class constructor explicitly call a base class constructor?"
  options={['Using constructor initializer list', 'Using super keyword', 'Using static block', 'Using override keyword']}
  answer="Using constructor initializer list"
/>
<Question
  question="40).Which feature allows dynamic method resolution in inheritance?"
  options={['Templates', 'Static casting', 'Virtual functions', 'Constructor overloading']}
  answer="Virtual functions"
/>
<Question
  question="41).Which of the following results from improper handling of diamond problem?"
  options={['Ambiguity in base members', 'Object slicing', 'Memory leak', 'Stack overflow']}
  answer="Ambiguity in base members"
/>
<Question
  question="42).In which inheritance does a derived class inherit from two or more base classes?"
  options={['Single', 'Multilevel', 'Multiple', 'Hierarchical']}
  answer="Multiple"
/>
<Question
  question="43).Can a constructor be virtual in C++?"
  options={['Yes', 'No', 'Only for abstract classes', 'Only in inheritance']}
  answer="No"
/>
<Question
  question="44).Which class in a hybrid inheritance may need to be declared virtual to avoid ambiguity?"
  options={['Leaf class', 'Intermediate class', 'Top-level base class', 'Any derived class']}
  answer="Top-level base class"
/>
<Question
  question="45).What happens if the base class has a virtual destructor and the derived class doesn’t?"
  options={['Base destructor is called correctly', 'Undefined behavior', 'Derived destructor won’t be called', 'Compilation error']}
  answer="Base destructor is called correctly"
/>
<Question
  question="46).What does the ‘protected’ inheritance mode mean?"
  options={['Public members become protected', 'Protected and public members stay public', 'Private members become public', 'All members become private']}
  answer="Public members become protected"
/>
<Question
  question="47).Which method allows calling an overridden base class method in the derived class?"
  options={['BaseClass::method()', 'this->method()', 'override()', 'super.method()']}
  answer="BaseClass::method()"
/>
<Question
  question="48).Why should destructors be virtual in base classes with inheritance?"
  options={['To ensure derived class destructors are called', 'To optimize memory', 'To enable polymorphism', 'To override constructors']}
  answer="To ensure derived class destructors are called"
/>
<Question
  question="49).Which type of inheritance forms a chain of classes, each derived from the previous one?"
  options={['Hierarchical', 'Multilevel', 'Multiple', 'Hybrid']}
  answer="Multilevel"
/>
<Question
  question="50).In a class hierarchy, what does the term 'is-a' relationship imply?"
  options={['Composition', 'Inheritance', 'Aggregation', 'Friendship']}
  answer="Inheritance"
/>