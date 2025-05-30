---
title: "C++ Constructor and Destructor MCQs"
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
  - cpp mcq
  - cpp mcq questions
  - cpp interview questions
  - c++ mcq
  - advanced c++ interview questions
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
import AdBanner from '@site/src/components/AdBanner';
import { Question } from '../../Question';

# Constructors and Destructors

<Question
  question="1).What is a constructor in C++?"
  options={['A special member function used to initialize objects', 'A function used to destroy objects', 'A function with a return type', 'None of the above']}
  answer="A special member function used to initialize objects"
/>
<Question
  question="2).Which of the following is true about constructors?"
  options={['They have the same name as the class', 'They have a return type', 'They cannot be overloaded', 'None of the above']}
  answer="They have the same name as the class"
/>
<Question
  question="3).What is a destructor in C++?"
  options={['A special member function used to destroy objects', 'A function used to initialize objects', 'A function with a return type', 'None of the above']}
  answer="A special member function used to destroy objects"
/>
<Question
  question="4).How many destructors can a class have?"
  options={['Only one', 'Multiple', 'None', 'None of the above']}
  answer="Only one"
/>
<Question
  question="5).Which of the following is true about destructors?"
  options={['They have the same name as the class but with a ~ prefix', 'They can be overloaded', 'They can have parameters', 'None of the above']}
  answer="They have the same name as the class but with a ~ prefix"
/>
<Question
  question="6).What happens if a class does not have a constructor?"
  options={['A default constructor is automatically provided', 'The program will not compile', 'Objects cannot be created', 'None of the above']}
  answer="A default constructor is automatically provided"
/>
<Question
  question="7).Which of the following is a valid constructor declaration?"
  options={['ClassName();', 'ClassName(void);', 'Both A and B', 'None of the above']}
  answer="Both A and B"
/>
<Question
  question="8).Can a constructor call another constructor in the same class?"
  options={['Yes, using constructor delegation', 'No', 'Only in derived classes', 'None of the above']}
  answer="Yes, using constructor delegation"
/>
<Question
  question="9).What is the purpose of a copy constructor?"
  options={['To create a new object as a copy of an existing object', 'To destroy an object', 'To handle memory allocation', 'None of the above']}
  answer="To create a new object as a copy of an existing object"
/>
<Question
  question="10).When is a destructor automatically invoked?"
  options={['When an object goes out of scope', 'When a new object is created', 'When a constructor is called', 'None of the above']}
  answer="When an object goes out of scope"
/>

<div>
<AdBanner />
</div>


<Question
  question="11).Can a constructor be declared as virtual in C++?"
  options={['Yes', 'No', 'Only in abstract classes', 'Depends on the compiler']}
  answer="No"
/>
<Question
  question="12).What is constructor overloading?"
  options={['Using different names for multiple constructors', 'Having multiple constructors with different parameter lists', 'Creating virtual constructors', 'None of the above']}
  answer="Having multiple constructors with different parameter lists"
/>
<Question
  question="13).Which constructor is invoked when an object is initialized using another object?"
  options={['Default constructor', 'Parameterized constructor', 'Copy constructor', 'Move constructor']}
  answer="Copy constructor"
/>
<Question
  question="14).Which constructor is called when an object is initialized with `std::move()`?"
  options={['Default constructor', 'Copy constructor', 'Move constructor', 'None']}
  answer="Move constructor"
/>
<Question
  question="15).Which keyword is used to define a constructor outside the class?"
  options={['this', 'new', '::', 'extern']}
  answer="::"
/>
<Question
  question="16).What is a parameterized constructor?"
  options={['A constructor that takes arguments', 'A constructor with no parameters', 'A constructor with a return type', 'None of the above']}
  answer="A constructor that takes arguments"
/>
<Question
  question="17).Can a constructor be private in C++?"
  options={['Yes', 'No', 'Only for abstract classes', 'Only for static classes']}
  answer="Yes"
/>
<Question
  question="18).When is the copy constructor called?"
  options={['When an object is passed by value', 'When an object is returned by value', 'When an object is explicitly copied', 'All of the above']}
  answer="All of the above"
/>
<Question
  question="19).Which of the following does NOT invoke the destructor?"
  options={['Object goes out of scope', 'delete is used on object pointer', 'Program crashes', 'Object is created']}
  answer="Object is created"
/>
<Question
  question="20).What happens if you don’t define a destructor in your class?"
  options={['Compiler provides a default destructor', 'Objects cannot be destroyed', 'It causes a runtime error', 'None of the above']}
  answer="Compiler provides a default destructor"
/>
<div>
<AdBanner />
</div>


<Question
  question="21).Can you explicitly call a destructor?"
  options={['Yes, using object.~ClassName()', 'No, destructors are always implicit', 'Only for static objects', 'None of the above']}
  answer="Yes, using object.~ClassName()"
/>
<Question
  question="22).Which constructor is invoked when no arguments are passed during object creation?"
  options={['Copy constructor', 'Default constructor', 'Move constructor', 'Destructor']}
  answer="Default constructor"
/>
<Question
  question="23).Can a class have both a copy and a move constructor?"
  options={['Yes', 'No', 'Only one is allowed', 'Depends on object type']}
  answer="Yes"
/>
<Question
  question="24).What does the compiler do if you define a copy constructor but not a destructor?"
  options={['Generates a default destructor', 'Throws a compile-time error', 'Deletes the destructor', 'Generates a move constructor automatically']}
  answer="Generates a default destructor"
/>
<Question
  question="25).What is the syntax for a move constructor?"
  options={['ClassName(ClassName&& obj)', 'ClassName(const ClassName& obj)', 'ClassName(ClassName obj)', 'ClassName(ClassName* obj)']}
  answer="ClassName(ClassName&& obj)"
/>
<Question
  question="26).What is the rule of three in C++?"
  options={['Define copy constructor, assignment operator, and destructor together', 'Use only three constructors', 'Only three objects allowed in a class', 'None of the above']}
  answer="Define copy constructor, assignment operator, and destructor together"
/>
<Question
  question="27).Which of the following best describes constructor initialization list?"
  options={['Initializes data members before constructor body executes', 'Is used for destructors', 'Used to create arrays', 'None of the above']}
  answer="Initializes data members before constructor body executes"
/>
<Question
  question="28).Which operator is implicitly deleted if a class has a move constructor but not a copy constructor?"
  options={['Copy assignment operator', 'Destructor', 'Default constructor', 'New operator']}
  answer="Copy assignment operator"
/>
<Question
  question="29).What happens when you assign one object to another after creation?"
  options={['Copy assignment operator is called', 'Copy constructor is called', 'Move constructor is called', 'Destructor is called']}
  answer="Copy assignment operator"
/>
<Question
  question="30).Can destructors be overloaded in C++?"
  options={['Yes', 'No', 'Only with templates', 'Only in base classes']}
  answer="No"
/>

<div>
<AdBanner />
</div>


<Question
question="31).What is the default access specifier for a constructor if not specified?"
options={['public', 'private', 'protected', 'None of the above']}
answer="public"
/>

<Question
question="32).Can a constructor throw an exception in C++?"
options={['Yes', 'No', 'Only in debug mode', 'Only for virtual classes']}
answer="Yes"
/>

<Question
question="33).What is the order of constructor invocation in inheritance?"
options={['Base class first, then derived class', 'Derived class first, then base class', 'Random order', 'None of the above']}
answer="Base class first, then derived class"
/>

<Question
question="34).What is the order of destructor invocation in inheritance?"
options={['Derived class first, then base class', 'Base class first, then derived class', 'Same as constructor order', 'None of the above']}
answer="Derived class first, then base class"
/>

<Question
question="35).Which of the following is NOT a type of constructor in C++?"
options={['Default constructor', 'Copy constructor', 'Static constructor', 'Move constructor']}
answer="Static constructor"
/>

<Question
question="36).What happens if a destructor is not defined in a derived class?"
options={['The base class destructor is used', 'A default destructor is provided', 'It causes a compilation error', 'None of the above']}
answer="A default destructor is provided"
/>

<Question
question="37).Can a constructor be inherited in C++?"
options={['Yes', 'No', 'Only in virtual inheritance', 'Depends on the compiler']}
answer="No"
/>

<Question
question="38).What is the purpose of the explicit keyword for constructors?"
options={['Prevents implicit type conversions', 'Makes constructors virtual', 'Allows multiple inheritance', 'None of the above']}
answer="Prevents implicit type conversions"
/>

<Question
question="39).Can a constructor be private in a Singleton pattern?"
options={['Yes', 'No', 'Only if marked final', 'Only in C++17']}
answer="Yes"
/>

<Question
question="40).What happens if a move constructor is not defined?"
options={['Copy constructor is used instead', 'Compilation error occurs', 'Object cannot be moved', 'None of the above']}
answer="Copy constructor is used instead"
/>

<div>
<AdBanner />
</div>


<Question
question="41).What happens if a destructor throws an exception?"
options={['Undefined behavior if another exception is active', 'Program terminates safely', 'Compiler ignores it', 'None of the above']}
answer="Undefined behavior if another exception is active"
/>

<Question
question="42).Which constructor is called when initializing an object with braces {}?"
options={['Default constructor', 'Copy constructor', 'Initializer-list constructor', 'Move constructor']}
answer="Initializer-list constructor"
/>

<Question
question="43).Can a constructor be const in C++?"
options={['Yes', 'No', 'Only for static members', 'Only in C++17']}
answer="No"
/>

<Question
question="44).What is the role of a default constructor?"
options={['Initializes objects with no arguments', 'Deletes objects', 'Copies objects', 'None of the above']}
answer="Initializes objects with no arguments"
/>

<Question
question="45).Can a constructor be static in C++?"
options={['Yes', 'No', 'Only in template classes', 'Only for friend classes']}
answer="No"
/>

<Question
question="46).What is the rule of five in C++?"
options={['Extends rule of three with move constructor and move assignment', 'Only five constructors allowed', 'Five destructors per class', 'None of the above']}
answer="Extends rule of three with move constructor and move assignment"
/>

<Question
question="47).Which keyword prevents a constructor from being implicitly called?"
options={['explicit', 'final', 'override', 'static']}
answer="explicit"
/>

<Question
question="48).Can a destructor be virtual?"
options={['Yes', 'No', 'Only in abstract classes', 'Only in C++11']}
answer="Yes"
/>

<Question
question="49).Can a constructor be a template function?"
options={['Yes', 'No', 'Only in abstract classes', 'Only for virtual inheritance']}
answer="Yes"
/>

<Question
question="50).What happens if a class has a deleted destructor?"
options={['Objects cannot be destroyed', 'Default destructor is used', 'It causes a warning', 'None of the above']}
answer="Objects cannot be destroyed"
/>

<div>
<AdBanner />
</div>

