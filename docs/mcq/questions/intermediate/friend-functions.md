---
title: "C++ Friend  MCQs"
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

# Friend Functions

<Question
  question="1).What is a friend function in C++?"
  options={['A function declared inside another function', 'A function that can access private and protected members of a class', 'A function used for operator overloading', 'None of the above']}
  answer="A function that can access private and protected members of a class"
/>
<Question
  question="2).How is a friend function declared?"
  options={['Using the friend keyword', 'Using the public keyword', 'Using the virtual keyword', 'None of the above']}
  answer="Using the friend keyword"
/>
<Question
  question="3).Can a friend function be a member of a class?"
  options={['No', 'Yes', 'Only in derived classes', 'None of the above']}
  answer="No"
/>
<Question
  question="4).Which of the following can be a friend function?"
  options={['A non-member function', 'A member function of another class', 'Both A and B', 'None of the above']}
  answer="Both A and B"
/>
<Question
  question="5).What is the purpose of a friend function?"
  options={[ 'To inherit properties from a base class', 'To override virtual functions','To provide controlled access to private data', 'None of the above']}
  answer="To provide controlled access to private data"
/>
<Question
  question="6).Can friend functions be inherited?"
  options={['Yes','No', 'Only in certain cases', 'None of the above']}
  answer="No"
/>
<Question
  question="7).What is the scope of a friend function?"
  options={['It is not limited to the class', 'It is limited to the class', 'It has global scope', 'None of the above']}
  answer="It is not limited to the class"
/>
<Question
  question="8).Can a friend function access the members of multiple classes?"
  options={['No','Yes', 'Only if those classes are related', 'None of the above']}
  answer="Yes"
/>
<Question
  question="9).Which of the following is true about friend functions?"
  options={['They violate encapsulation', 'They increase security', 'They require virtual inheritance', 'None of the above']}
  answer="They violate encapsulation"
/>
<Question
  question="10).Can a friend function be overloaded?"
  options={['Yes', 'No', 'Only with operator functions', 'None of the above']}
  answer="Yes"
/>
<Question
  question="11).Where is a friend function typically defined?"
  options={['Inside the class', 'Outside the class', 'In the constructor', 'None of the above']}
  answer="Outside the class"
/>
<Question
  question="12).How does a class grant friendship to a function?"
  options={['By defining it in public section', 'By declaring it with friend keyword', 'By defining it as a member', 'None of the above']}
  answer="By declaring it with friend keyword"
/>
<Question
  question="13).Is a friend function limited to one object at a time?"
  options={['No', 'Yes', 'Depends on the access specifier', 'None of the above']}
  answer="No"
/>
<Question
  question="14).Can a friend function be declared as inline?"
  options={['Yes', 'No', 'Only if defined inside the class', 'None of the above']}
  answer="Yes"
/>
<Question
  question="15).Which access specifier is used for friend function declaration?"
  options={['Public', 'Private', 'Protected', 'Any access specifier']}
  answer="Any access specifier"
/>
<Question
  question="16).Can a friend function modify private members of a class?"
  options={['Yes', 'No', 'Only if the class is derived', 'None of the above']}
  answer="Yes"
/>
<Question
  question="17).Friendship between a class and a function is:"
  options={['One-way', 'Two-way', 'Mutual', 'None of the above']}
  answer="One-way"
/>
<Question
  question="18).Is friendship in C++ inherited by derived classes?"
  options={['No', 'Yes', 'Only if base class is virtual', 'None of the above']}
  answer="No"
/>
<Question
  question="19).What happens if a function is not declared as a friend but tries to access private data?"
  options={['Compiler error', 'Runtime error', 'Undefined behavior', 'None of the above']}
  answer="Compiler error"
/>
<Question
  question="20).What is the syntax to declare a friend function?"
  options={['friend void display();', 'void friend display();', 'friend class display();', 'None of the above']}
  answer="friend void display();"
/>
<Question
  question="21).Which is true about the declaration of friend functions?"
  options={['They must be unique', 'They must be overloaded', 'They can be declared multiple times', 'None of the above']}
  answer="They can be declared multiple times"
/>
<Question
  question="22).A friend function is most commonly used for:"
  options={['Operator overloading', 'Template classes', 'Virtual functions', 'None of the above']}
  answer="Operator overloading"
/>
<Question
  question="23).Can a class be a friend of another class?"
  options={['Yes', 'No', 'Only in multiple inheritance', 'None of the above']}
  answer="Yes"
/>
<Question
  question="24).Which of the following is necessary to access private data of two different classes?"
  options={['Inheritance', 'Friend function', 'Polymorphism', 'None of the above']}
  answer="Friend function"
/>
<Question
  question="25).Friend functions are defined ________."
  options={['Inside the class body', 'Outside the class body', 'Both inside and outside', 'None of the above']}
  answer="Outside the class body"
/>
<Question
  question="26).Can a constructor be declared as a friend?"
  options={['Yes', 'No', 'Only copy constructors', 'None of the above']}
  answer="Yes"
/>
<Question
  question="27).Which is NOT a characteristic of friend functions?"
  options={['Access private data', 'Belong to the class', 'Are called like normal functions', 'None of the above']}
  answer="Belong to the class"
/>
<Question
  question="28).Can a friend function be declared in multiple classes?"
  options={['Yes', 'No', 'Only if they are base classes', 'None of the above']}
  answer="Yes"
/>
<Question
  question="29).What keyword is used to grant friendship to a class or function?"
  options={['private', 'protected', 'friend', 'public']}
  answer="friend"
/>
<Question
  question="30).Which of the following statements is correct about friend functions?"
  options={['Friend functions are part of class\'s public interface', 'Friend functions are not members of a class', 'Friend functions cannot be overloaded', 'Friend functions cannot be templates']}
  answer="Friend functions are not members of a class"
/>
