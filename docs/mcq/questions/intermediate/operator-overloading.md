---
title: "C++ Operator Overloading MCQs"
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

# Operator Overloading

<Question
  question="1).What is operator overloading in C++?"
  options={['Using operators in loops', 'Adding new operators', 'Redefining the behavior of operators for user-defined types', 'None of the above']}
  answer="Redefining the behavior of operators for user-defined types"
/>
<Question
  question="2).Which keyword is used for operator overloading?"
  options={['operator', 'overload', 'None of the above', 'override']}
  answer="operator"
/>
<Question
  question="3).Can all operators be overloaded?"
  options={['Only arithmetic operators', 'None of the above', 'Yes', 'No']}
  answer="No"
/>
<Question
  question="4).Which operator cannot be overloaded?"
  options={['::', '.', 'All of the above', 'sizeof']}
  answer="All of the above"
/>
<Question
  question="5).What is the syntax for overloading an operator?"
  options={['ReturnType operatorSymbol(ParameterList)', 'operator ReturnType Symbol(ParameterList)', 'Symbol operator ReturnType(ParameterList)', 'None of the above']}
  answer="ReturnType operatorSymbol(ParameterList)"
/>
<Question
  question="6).Can operator overloading change the precedence of an operator?"
  options={['Only for arithmetic operators', 'No', 'Yes', 'None of the above']}
  answer="No"
/>
<Question
  question="7).What is the purpose of operator overloading?"
  options={['To improve memory management', 'To modify operator precedence', 'To work with user-defined data types', 'None of the above']}
  answer="To work with user-defined data types"
/>
<Question
  question="8).Can operator overloading be done for all data types?"
  options={['Only for primitive types', 'No, only for user-defined types', 'None of the above', 'Yes, for all types']}
  answer="No, only for user-defined types"
/>
<Question
  question="9).What is the return type of the overloaded assignment operator?"
  options={['Void', 'Class reference', 'None of the above', 'New object']}
  answer="Class reference"
/>
<Question
  question="10).Can the addition operator (+) be overloaded for strings?"
  options={['No', 'Yes', 'None of the above', 'Only for integer strings']}
  answer="Yes"
/>

<div>
<AdBanner />
</div>

<Question
  question="11).Which operator is typically overloaded to output an object?"
  options={['<<', '==', '+', '>>']}
  answer="<<"
/>

<Question
  question="12).Which operator is used to compare objects?"
  options={['+=', '==', '&&', '=']}
  answer="=="
/>

<Question
  question="13).What is required to overload the `<<` operator for `cout`?"
  options={['It must be a friend function', 'It must return void', 'It must be private', 'It must be a member function']}
  answer="It must be a friend function"
/>

<Question
  question="14).Which of the following operators must be overloaded as a friend function?"
  options={['>>', 'None', '<<', 'Both']}
  answer="Both"
/>

<Question
  question="15).Which type of function is used to overload binary operators for two different types?"
  options={['Member function', 'Friend function', 'Constructor', 'Static function']}
  answer="Friend function"
/>

<Question
  question="16).Can you overload the `[]` operator?"
  options={['Only in structs', 'Yes', 'No', 'Only for strings']}
  answer="Yes"
/>

<Question
  question="17).What is the correct signature for overloading the + operator?"
  options={['operator+ ReturnType(const ClassName& obj)', 'None of the above', 'ReturnType operator+(const ClassName& obj)', '+ operator ReturnType(ClassName obj)']}
  answer="ReturnType operator+(const ClassName& obj)"
/>

<Question
  question="18).Which of the following is true about overloading the assignment (=) operator?"
  options={['It returns void', 'It must return a reference to the class', 'It must be static', 'It can’t be overloaded']}
  answer="It must return a reference to the class"
/>

<Question
  question="19).Can the `->` operator be overloaded?"
  options={['Only in structs', 'Only in unions', 'Yes', 'No']}
  answer="Yes"
/>

<Question
  question="20).Can the `new` and `delete` operators be overloaded?"
  options={['Only delete', 'No', 'Yes', 'Only new']}
  answer="Yes"
/>

<div>
<AdBanner />
</div>

<Question
  question="21).Which operator can be overloaded as a unary operator?"
  options={['*', 'All of the above', '-', '++']}
  answer="All of the above"
/>

<Question
  question="22).What is the output of the following?"
  code={`#include <iostream.h>
  using namespace std;
  class Test {
  int x;
  public:
    Test(int a): x(a) {}
    Test operator+(const Test& t) {
    return Test(x + t.x);
  }
  void show() { std::cout << x; }
  };

  int main() {
  Test a(2), b(3);
  Test c = a + b;
  c.show();
  }`}
  options={['5', '6', '23', 'Error']}
  answer="5"
/>

<Question
  question="23).Which of the following operators cannot be overloaded?"
  options={['.*', '::', 'All of the above', '?:']}
  answer="All of the above"
/>

<Question
  question="24).What should an overloaded comparison operator return?"
  options={['void', 'int', 'char', 'bool']}
  answer="bool"
/>

<Question
  question="25).What is the primary advantage of operator overloading?"
  options={['Consumes more memory', 'Decreases performance', 'Improves code readability', 'Increases complexity']}
  answer="Improves code readability"
/>

<Question
  question="26).Can you overload the function call operator `()`?"
  options={['Only if it returns void', 'No', 'Only in functions', 'Yes']}
  answer="Yes"
/>

<Question
  question="27).What is the result of this code?"
  code={` #include <iostream.h>
  using namespace std;
  class Complex {
  int real;
  public:
    Complex(int r): real(r) {}
    Complex operator++() {
    return Complex(++real);
  }
  int get() { return real; }
  };

  int main() {
  Complex c(5);
  Complex d = ++c;
  std::cout << d.get();
  }`}
  options={['0', 'Error', '6', '5']}
  answer="6"
/>

<Question
  question="28).Which is the correct way to overload postfix increment operator?"
  options={['ReturnType operator++(int)', 'ReturnType ++operator()', 'ReturnType operator++()', 'ReturnType ++(int)operator']}
  answer="ReturnType operator++(int)"
/>

<Question
  question="29).Why is `int` used in postfix increment overloading?"
  options={['To differentiate it from prefix', 'None of the above', 'To store the result', 'For memory allocation']}
  answer="To differentiate it from prefix"
/>

<Question
  question="30).Which of these operators can be overloaded as member functions?"
  options={['()', '[]', 'All of the above', '=']}
  answer="All of the above"
/>

<div>
<AdBanner />
</div>

<Question
  question="31).Can `==` be overloaded to compare two objects?"
  options={['Only for integers', 'Yes', 'Only for built-in types', 'No']}
  answer="Yes"
/>

<Question
  question="32).Is it mandatory to overload `operator=` in all classes?"
  options={['Only in templates', 'Yes', 'No', 'Only if there’s a constructor']}
  answer="No"
/>

<Question
  question="33).Can a friend function access private members?"
  options={['Yes', 'Only public members', 'Only static members', 'No']}
  answer="Yes"
/>

<Question
  question="34).Choose the correct overloaded `<<` operator definition:"
  options={[
    'ClassName operator<<(ostream&, int);',
    'void operator<<(ClassName, std::ostream);',
    'None of the above',
    'friend std::ostream& operator<<(std::ostream&, const ClassName&);'
  ]}
  answer="friend std::ostream& operator<<(std::ostream&, const ClassName&);"
/>

<Question
  question="35).What is returned by a typical overloaded `<<` operator?"
  options={['std::ostream&', 'char', 'Class object', 'void']}
  answer="std::ostream&"
/>

<Question
  question="36).Can we overload `+` to perform string concatenation for a custom class?"
  options={['Only for std::string', 'Yes', 'Only for char arrays', 'No']}
  answer="Yes"
/>

<Question
  question="37).Is it possible to overload an operator multiple times?"
  options={['Only for arithmetic operators', 'Only with inheritance', 'No', 'Yes']}
  answer="Yes"
/>

<Question
  question="38).What is the best practice while overloading `=`?"
  options={['Make it static', 'Check for self-assignment', 'Use dynamic_cast', 'Return void']}
  answer="Check for self-assignment"
/>

<Question
  question="39).What does the following code output?"
  code={` #include <iostream.h>
  using namespace std;
  class Sample {
  int x;
  public:
    Sample(int val): x(val) {}
    Sample operator*(const Sample& s) {
    return Sample(x * s.x);
  }
  void print() { std::cout << x; }
  };

  int main() {
  Sample a(4), b(5);
  Sample c = a * b;
  c.print();
  }`}
  options={['20', '25', '9', 'Error']}
  answer="20"
/>

<Question
  question="40).Is it possible to restrict access to an overloaded operator?"
  options={['Only in templates', 'Yes, by using access specifiers', 'Only for =', 'No, always public']}
  answer="Yes, by using access specifiers"
/>

<div>
<AdBanner />
</div>

<Question
  question="41).What does the keyword `mutable` allow in operator overloading?"
  options={['Overload `=` operator', 'None of the above', 'Modification in const function', 'Use in friend function']}
  answer="Modification in const function"
/>

<Question
  question="42).Can overloaded operators be inherited?"
  options={['Only if virtual', 'Only in base class', 'No', 'Yes']}
  answer="Yes"
/>

<Question
  question="43).Which operator is commonly overloaded for memory management?"
  options={['new and delete', 'malloc and free', '++ and --', 'None']}
  answer="new and delete"
/>

<Question
  question="44).Can overloading lead to ambiguity?"
  options={['Only with multiple inheritance', 'Only in templates', 'Yes', 'No']}
  answer="Yes"
/>

<Question
  question="45).Which operator is overloaded for dereferencing a pointer object?"
  options={['*', '!', '&', '->']}
  answer="*"
/>

<Question
  question="46).How many arguments does a binary operator overload take when defined as member function?"
  options={['Three', 'Two', 'One', 'None']}
  answer="One"
/>

<Question
  question="47).How many arguments does a unary operator overload take when defined as friend function?"
  options={['Two', 'None', 'One', 'Three']}
  answer="One"
/>

<Question
  question="48).Which concept is closely related to operator overloading?"
  options={['Recursion', 'Encapsulation', 'Abstraction', 'Polymorphism']}
  answer="Polymorphism"
/>

<Question
  question="49).Overloading which operator allows object to be used like a function?"
  options={['&', '()', '*', '[]']}
  answer="()"
/>

<Question
  question="50).Which of the following is used for custom object comparison in STL containers?"
  options={['operator+', 'operator<', 'operator==', 'operator=']}
  answer="operator<"
/>

<div>
<AdBanner />
</div>