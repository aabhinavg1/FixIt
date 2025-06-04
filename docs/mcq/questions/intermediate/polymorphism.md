---
title: "C++ Polymorphism MCQs"
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

# Polymorphism

<Question
  question="1).What is polymorphism in C++?"
  options={[
    'Ability to process objects differently based on their type',
    'Inheritance of base class properties',
    'A type of memory management',
    'None of the above'
  ]}
  answer="Ability to process objects differently based on their type"
/>

<Question
  question="2).What are the two types of polymorphism in C++?"
  options={[
    'Static and Dynamic',
    'Compile-time and Runtime',
    'Both A and B',
    'None of the above',
  ]}
  answer="Both A and B"
/>

<Question
  question="3).Which function is used to achieve runtime polymorphism?"
  options={[
    'Inline function',
    'Virtual function',
    'Static function',
    'None of the above',
  ]}
  answer="Virtual function"
/>

<Question
  question="4).What is required to make a function in a base class virtual?"
  options={[
    'Use the static keyword',
    'Declare the function as private',
    'Use the virtual keyword',
    'None of the above',
  ]}
  answer="Use the virtual keyword"
/>

<Question
  question="5).How does C++ implement runtime polymorphism?"
  options={[
    'By using vtables and vptr',
    'Using templates',
    'Through function overloading',
    'None of the above',
  ]}
  answer="By using vtables and vptr"
/>

<Question
  question="6).What is function overloading?"
  options={[
    'A function calling itself',
    'Same function name with different parameters',
    'Multiple classes sharing the same function',
    'None of the above',
  ]}
  answer="Same function name with different parameters"
/>

<Question
  question="7).Can constructors be virtual in C++?"
  options={[
    'Only for abstract classes',
    'Yes',
    'No',
    'None of the above',
  ]}
  answer="No"
/>

<Question
  question="8).What is the difference between function overloading and overriding?"
  options={[
    'Overriding requires virtual functions',
    'Overloading happens in the same class; overriding happens in inherited classes',
    'Both A and B',
    'None of the above',
  ]}
  answer="Both A and B"
/>

<Question
  question="9).What is the purpose of the 'override' specifier in C++?"
  options={[
    'Marks a function as virtual',
    'Declares a function as static',
    'Ensures a function is overriding a base class function',
    'None of the above',
  ]}
  answer="Ensures a function is overriding a base class function"
/>

<Question
  question="10).Can a virtual function in the base class be overridden in the derived class?"
  options={[
    'No',
    'Only if declared with final',
    'Yes',
    'None of the above',
  ]}
  answer="Yes"
/>


<div>
<AdBanner />
</div>

<Question
  question="11).What keyword prevents further overriding of a virtual function?"
  options={['sealed', 'final', 'const', 'static']}
  answer="final"
/>

<Question
  question="12).Which of the following achieves compile-time polymorphism?"
  options={['Operator overloading', 'All of the above', 'Function overloading', 'Templates']}
  answer="All of the above"
/>

<Question
  question="13).What does RTTI stand for?"
  options={['Run-Time Type Interface', 'Run-Time Type Information', 'Real-Time Template Interface', 'None of the above']}
  answer="Run-Time Type Information"
/>

<Question
  question="14).Which operator is used in C++ for RTTI?"
  options={['Both', 'typeid', 'dynamic_cast', 'None']}
  answer="Both"
/>

<Question
  question="15).What will `typeid` return?"
  options={['Object value', 'Type information at runtime', 'Function name', 'Address of variable']}
  answer="Type information at runtime"
/>

<Question
  question="16).Which cast is used in runtime polymorphism?"
  options={['reinterpret_cast', 'dynamic_cast', 'static_cast', 'const_cast']}
  answer="dynamic_cast"
/>

<Question
  question="17).What will happen if dynamic_cast fails?"
  options={['Crashes', 'Both A and B', 'Throws bad_cast (for references)', 'Returns nullptr (for pointers)']}
  answer="Both A and B"
/>

<Question
  question="18).What is function overriding?"
  options={['Redefining a base class function in a derived class', 'Defining multiple functions with same name in a class', 'Calling a base function from a derived class', 'None of the above']}
  answer="Redefining a base class function in a derived class"
/>

<Question
  question="19).Can you override a non-virtual function?"
  options={['No', 'Only with templates', 'Only if final', 'Yes']}
  answer="No"
/>

<Question
  question="20) What is the output of the following code?"
  code={`#include <iostream>
using namespace std;
class A {
public:
  virtual void show() { std::cout << "A"; }
};

class B : public A {
public:
  void show() override { std::cout << "B"; }
};

int main() {
  A* obj = new B();
  obj->show();
  return 0;
}`}
  options={['Undefined', 'B', 'Error', 'A']}
  answer="B"
/>

<div>
<AdBanner />
</div>

<Question
  question="21).Can destructors be virtual?"
  options={['Only if final', 'Yes', 'Only in abstract classes', 'No']}
  answer="Yes"
/>

<Question
  question="22).Why should base class destructors be virtual?"
  options={['To allow overriding', 'To ensure proper cleanup in derived classes', 'None of the above', 'To make base class abstract']}
  answer="To ensure proper cleanup in derived classes"
/>

<Question
  question="23).Can a pure virtual function have a definition?"
  options={['Only if it’s static', 'Only if inline', 'No', 'Yes']}
  answer="Yes"
/>

<Question
  question="24).What makes a class abstract?"
  options={['Having no constructors', 'Having only private data members', 'Inheriting from another class', 'Having at least one pure virtual function']}
  answer="Having at least one pure virtual function"
/>

<Question
  question="25).Can an abstract class have constructors?"
  options={['Only if no virtual function', 'Yes', 'No', 'Only in base classes']}
  answer="Yes"
/>

<Question
  question="26).Which of the following enables polymorphism in templates?"
  options={['Function templates', 'Class templates', 'All of the above', 'Template specialization']}
  answer="All of the above"
/>

<Question
  question="27).What is slicing in polymorphism?"
  options={['Memory fragmentation', 'Losing derived class part when assigning to base', 'Object splitting', 'Dividing memory']}
  answer="Losing derived class part when assigning to base"
/>

<Question
  question="28).Which specifier ensures a function is not overridden further?"
  options={['static', 'sealed', 'final', 'const']}
  answer="final"
/>

<Question
  question="29).How many pure virtual functions are required to make a class abstract?"
  options={['None', 'Two', 'At least one', 'All must be pure virtual']}
  answer="At least one"
/>

<Question
  question="30).What is the output?"
  code={` #include <iostream>
using namespace std;
class A {
public:
  virtual void f() { std::cout << "A"; }
};

class B : public A {
public:
  void f() override { std::cout << "B"; }
};

void call(A& a) { a.f(); }

int main() {
  B b;
  call(b);
  return 0;
}`}
  options={['Undefined', 'B', 'A', 'Error']}
  answer="B"
/>

<div>
<AdBanner />
</div>

<Question
  question="31).Can a derived class object be assigned to a base class reference?"
  options={['Only for final classes', 'Only in static_cast', 'Yes', 'No']}
  answer="Yes"
/>

<Question
  question="32).What happens if a virtual function is not overridden in a derived class?"
  options={['It becomes abstract', 'Error', 'Base version is called', 'Program crashes']}
  answer="Base version is called"
/>

<Question
  question="33).What does 'virtual table' contain?"
  options={['Class variables', 'Inheritance hierarchy', 'Function parameters', 'Pointers to virtual functions']}
  answer="Pointers to virtual functions"
/>

<Question
  question="34).What is the size of an object with only one virtual function?"
  options={['Zero', 'Greater due to vptr', 'Cannot be determined', 'Same as normal object']}
  answer="Greater due to vptr"
/>

<Question
  question="35).What is the result of dynamic dispatch?"
  options={['Memory leak', 'Compile-time error', 'Correct function is called based on object type at runtime', 'Faster compilation']}
  answer="Correct function is called based on object type at runtime"
/>

<Question
  question="36).Can polymorphism be achieved using pointers?"
  options={['Only using static functions', 'Only in multiple inheritance', 'No', 'Yes']}
  answer="Yes"
/>

<Question
  question="37).Which of the following is NOT required for runtime polymorphism?"
  options={['Template', 'Virtual function', 'Function overriding', 'Base class pointer/reference']}
  answer="Template"
/>

<Question
  question="38).Which class type is used to define a common interface?"
  options={['Friend class', 'Final class', 'Abstract class', 'Base class']}
  answer="Abstract class"
/>

<Question
  question="39).What is the advantage of runtime polymorphism?"
  options={['Compile-time speed', 'Flexibility and extensibility', 'Memory optimization', 'Reduced code readability']}
  answer="Flexibility and extensibility"
/>

<Question
  question="40).What is the output?"
  code={` #include <iostream>
using namespace std;
class Base {
public:
  void show() { std::cout << "Base"; }
};

class Derived : public Base {
public:
  void show() { std::cout << "Derived"; }
};

int main() {
  Base* b = new Derived();
  b->show();
  return 0;
}`}
  options={['Derived', 'Base', 'Undefined', 'Error']}
  answer="Base"
/>

<div>
<AdBanner />
</div>

<Question
  question="41).How can polymorphism help with maintainability?"
  options={['Minimizes need for variables', 'Code is more modular and easier to extend', 'None of the above', 'Reduces use of functions']}
  answer="Code is more modular and easier to extend"
/>

<Question
  question="42).What is function hiding?"
  options={['Derived class method with same name hides base method', 'Overriding virtual function', 'Function marked as final', 'None of the above']}
  answer="Derived class method with same name hides base method"
/>

<Question
  question="43).Can virtual functions be static?"
  options={['No', 'Only in templates', 'Only if pure virtual', 'Yes']}
  answer="No"
/>

<Question
  question="44).What is the use of dynamic_cast?"
  options={['Allocate memory dynamically', 'Convert static to dynamic types', 'None', 'Safely downcast in polymorphic hierarchy']}
  answer="Safely downcast in polymorphic hierarchy"
/>

<Question
  question="45).What is the output?"
  code={`#include <iostream>
using namespace std;
class A {
public:
  virtual void display() { std::cout << "A"; }
};

class B : public A {
public:
  void display() { std::cout << "B"; }
};

int main() {
  A a;
  B b;
  A* ptr = &b;
  ptr->display();
  return 0;
}`}
  options={['A', 'Undefined', 'Error', 'B']}
  answer="B"
/>

<Question
  question="46).Which of these prevents polymorphism?"
  options={['Using static function', 'All of the above', 'Private non-virtual method', 'Slicing']}
  answer="All of the above"
/>

<Question
  question="47).What is the result of calling a virtual function in a constructor?"
  options={['Undefined behavior', 'Derived class version is called', 'Base class version is called', 'Error']}
  answer="Base class version is called"
/>

<Question
  question="48).What is the main purpose of the `virtual` keyword in C++?"
  options={['To allow dynamic binding', 'To define a static method', 'To define a function template', 'To declare a pure virtual function']}
  answer="To allow dynamic binding"
/>

<Question
  question="49).Which of the following can be used to achieve polymorphism in C++?"
  options={['Operator overloading', 'Function overloading', 'All of the above', 'Inheritance and virtual functions']}
  answer="Inheritance and virtual functions"
/>

<Question
  question="50).Which of the following statements is true about a pure virtual function?"
  options={['It cannot be called directly', 'It must be declared in the derived class', 'It cannot be overridden', 'It must have a body']}
  answer="It cannot be called directly"
/>

<div>
<AdBanner />
</div>
