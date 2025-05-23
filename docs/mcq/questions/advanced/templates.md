---
id: templates
title: Templates Multiple Choice Questions (MCQs)
description: |
  Test your knowledge of templates in programming with this set of Multiple Choice Questions (MCQs). This guide covers function templates, class templates, template specialization, and template metaprogramming. Learn how templates provide flexibility and code reuse in your programs, and understand the benefits of generic programming.
keywords:
  - Templates
  - Function Templates
  - Class Templates
  - Template Specialization
  - Template Metaprogramming
  - C++ Templates
  - Generic Programming
  - Type Deduction
  - Template Arguments
  - Template Parameters
  - Template Instantiation
  - SFINAE (Substitution Failure Is Not An Error)
  - Variadic Templates
  - Template Functions
  - Template Classes
  - Template MCQs
  - Template Knowledge Test

tags:
  - Templates
  - Function Templates
  - Class Templates
  - Template Specialization
  - Template Metaprogramming
  - C++ Templates
  - Generic Programming
  - Type Deduction
  - Template Parameters
  - Template Instantiation
  - SFINAE
  - Variadic Templates
  - Template Functions
  - Template Classes
  - Template MCQs
  - Template Concepts

---
import { Question } from '../../Question';

# Templates

<Question
  question="1).What is the purpose of templates in C++?"
  options={['To allow generic programming', 'To enable function overloading', 'To define custom data types', 'None of the above']}
  answer="To allow generic programming"
/>
<Question
  question="2).Which of the following can be templated in C++?"
  options={['Functions', 'Classes', 'Structures', 'All of the above']}
  answer="All of the above"
/>
<Question
  question="3).What does the 'typename' keyword in templates do?"
  options={['Defines a type parameter', 'Declares a function', 'Indicates a template argument', 'None of the above']}
  answer="Defines a type parameter"
/>
<Question
  question="4).What is the syntax for declaring a template for a function?"
  options={['template<typename T> return_type function_name()', 'template<class T> return_type function_name()', 'Both A and B', 'None of the above']}
  answer="Both A and B"
/>
<Question
  question="5).What is the main advantage of using class templates?"
  options={['Code reuse for different data types', 'Better performance', 'Faster execution', 'None of the above']}
  answer="Code reuse for different data types"
/>
<Question
  question="6).Can templates be used with non-type parameters?"
  options={['Yes', 'No', 'Only for functions', 'Only for classes']}
  answer="Yes"
/>
<Question
  question="7).What happens if no explicit template specialization is provided?"
  options={['The compiler generates code for every type', 'The code will not compile', 'The function is ignored', 'None of the above']}
  answer="The compiler generates code for every type"
/>
<Question
  question="8).What is the difference between 'template<class T>' and 'template<typename T>'?"
  options={['There is no difference', 'template<class T> allows more complex types', 'template<typename T> is more efficient', 'None of the above']}
  answer="There is no difference"
/>
<Question
  question="9).Which of the following is used to specialize a template?"
  options={['template<>', 'template<class T> specialization', 'template<T> specialization', 'None of the above']}
  answer="template<>"
/>
<Question
  question="10).Can template functions be overloaded?"
  options={['Yes', 'No', 'Only for different types', 'Only for different return types']}
  answer="Yes"
/>

<Question
  question="11). Can class templates have more than one template parameter?"
  options={['Yes', 'No', 'Only two parameters', 'Only for structures']}
  answer="Yes"
/>
<Question
  question="12). What is template specialization?"
  options={['Custom implementation for a specific type', 'Function overloading', 'Redefining templates', 'None of the above']}
  answer="Custom implementation for a specific type"
/>
<Question
  question="13). What is partial specialization in C++ templates?"
  options={['Specializing a subset of template parameters', 'Full template specialization', 'Overloading a class', 'None']}
  answer="Specializing a subset of template parameters"
/>
<Question
  question="14). Which of the following is correct syntax for non-type template parameter?"
  options={['template<int N>', 'template<typename int>', 'template<class int>', 'template<>']}
  answer="template<int N>"
/>
<Question
  question="15). Can a constructor be templated inside a non-templated class?"
  options={['Yes', 'No', 'Only in C++20', 'Only with specialization']}
  answer="Yes"
/>
<Question
  question="16). Which operator can be overloaded in template classes?"
  options={['Any operator', 'Only arithmetic operators', 'Only assignment operator', 'None']}
  answer="Any operator"
/>
<Question
  question="17). Which of the following template instantiations is valid?"
  options={['MyClass<int>', 'MyClass()', 'template<int>', 'None']}
  answer="MyClass<int>"
/>
<Question
  question="18). When does the compiler generate code for a template?"
  options={['When instantiated', 'At template declaration', 'At runtime', 'During linking']}
  answer="When instantiated"
/>
<Question
  question="19). What is an instantiation of a template?"
  options={['Creating a concrete class/function from a template', 'Declaring a function', 'Writing main()', 'Using typedef']}
  answer="Creating a concrete class/function from a template"
/>
<Question
  question="20). Which of these is not a type of template?"
  options={['Function template', 'Class template', 'Variable template', 'Loop template']}
  answer="Loop template"
/>

<Question
  question="21). Can template classes be inherited?"
  options={['Yes', 'No', 'Only by other template classes', 'Only in STL']}
  answer="Yes"
/>
<Question
  question="22). What is a template parameter pack?"
  options={['A variadic number of template parameters', 'An STL container', 'A header file', 'None']}
  answer="A variadic number of template parameters"
/>
<Question
  question="23). What is the purpose of 'template<class... Args>'?"
  options={['Variadic templates', 'Function overloading', 'Multiple inheritance', 'Smart pointers']}
  answer="Variadic templates"
/>
<Question
  question="24). Can you use default arguments in templates?"
  options={['Yes', 'No', 'Only for classes', 'Only in function templates']}
  answer="Yes"
/>
<Question
  question="25). Which C++ version introduced variadic templates?"
  options={['C++11', 'C++98', 'C++03', 'C++20']}
  answer="C++11"
/>
<Question
  question="26). What is SFINAE in C++ templates?"
  options={['Substitution Failure Is Not An Error', 'Syntax Formatting Is Not An Error', 'Static Field Initialization', 'None']}
  answer="Substitution Failure Is Not An Error"
/>
<Question
  question="27). What does 'decltype' do in templates?"
  options={['Determines the type of an expression', 'Deletes a type', 'Initializes a value', 'None']}
  answer="Determines the type of an expression"
/>
<Question
  question="28). What is the extension of C++ header files that contain templates?"
  options={['.h or .hpp', '.cpp', '.tmpl', '.tpp']}
  answer=".h or .hpp"
/>
<Question
  question="29). Can templates be recursive?"
  options={['Yes', 'No', 'Only for functions', 'Only with metaprogramming']}
  answer="Yes"
/>
<Question
  question="30). What is template metaprogramming?"
  options={['Performing computations at compile-time using templates', 'Runtime memory management', 'Debugging templates', 'None']}
  answer="Performing computations at compile-time using templates"
/>

<Question
  question="31). Can you use typedef in templates?"
  options={['Yes', 'No', 'Only in classes', 'Only in functions']}
  answer="Yes"
/>
<Question
  question="32). What does 'template<class T=int>' mean?"
  options={['Default template parameter', 'Invalid syntax', 'Type constraint', 'None']}
  answer="Default template parameter"
/>
<Question
  question="33). Which of the following is a benefit of templates?"
  options={['Code reuse', 'Type safety', 'Performance', 'All of the above']}
  answer="All of the above"
/>
<Question
  question="34). Can template arguments be expressions?"
  options={['Yes, for non-type parameters', 'No', 'Only with macros', 'Only constants']}
  answer="Yes, for non-type parameters"
/>
<Question
  question="35). Can a template function call a non-template function?"
  options={['Yes', 'No', 'Only in specializations', 'Only if inlined']}
  answer="Yes"
/>
<Question
  question="36). Can you partially specialize a function template?"
  options={['No', 'Yes', 'Only in C++17', 'Only for inline functions']}
  answer="No"
/>
<Question
  question="37). Can you explicitly instantiate a template?"
  options={['Yes', 'No', 'Only classes', 'Only functions']}
  answer="Yes"
/>
<Question
  question="38). Which keyword is used to instantiate a template explicitly?"
  options={['template', 'explicit', 'instantiate', 'force']}
  answer="template"
/>
<Question
  question="39). Can template classes contain static members?"
  options={['Yes', 'No', 'Only in function templates', 'Only with inheritance']}
  answer="Yes"
/>
<Question
  question="40). What does 'typename T::value_type' mean inside a template?"
  options={['Access a nested type inside T', 'Create a value', 'Call a constructor', 'Declare a variable']}
  answer="Access a nested type inside T"
/>

<Question
  question="41). What is the primary use of 'std::enable_if' in template programming?"
  options={['Conditional template instantiation', 'Enabling smart pointers', 'Memory allocation', 'Multithreading']}
  answer="Conditional template instantiation"
/>
<Question
  question="42). Can function templates have default template arguments?"
  options={['Yes', 'No', 'Only for return type', 'Only for parameters']}
  answer="Yes"
/>
<Question
  question="43). What happens if you use a template with a type that does not support a required operation?"
  options={['Compilation error', 'Runtime error', 'Undefined behavior', 'Code runs with warning']}
  answer="Compilation error"
/>
<Question
  question="44). What does the 'template' keyword before a dependent name signify?"
  options={['It tells the compiler it’s a template', 'Marks a function as inline', 'Declares a class', 'Starts a namespace']}
  answer="It tells the compiler it’s a template"
/>
<Question
  question="45). What is a dependent name in C++ templates?"
  options={['A name depending on a template parameter', 'A global variable', 'A class name', 'A namespace alias']}
  answer="A name depending on a template parameter"
/>
<Question
  question="46). Can you overload a templated function with a non-templated version?"
  options={['Yes', 'No', 'Only for inline functions', 'Only in STL']}
  answer="Yes"
/>
<Question
  question="47). What keyword is required when using a member template inside a dependent base class?"
  options={['template', 'typename', 'using', 'override']}
  answer="template"
/>
<Question
  question="48). What is a constraint in the context of C++20 templates?"
  options={['A compile-time requirement on template parameters', 'A syntax error', 'A new class type', 'None of the above']}
  answer="A compile-time requirement on template parameters"
/>
<Question
  question="49). What does 'concept' mean in C++ templates?"
  options={['A named constraint for template parameters', 'A template class', 'An STL container', 'A debugging tool']}
  answer="A named constraint for template parameters"
/>
<Question
  question="50). Which of the following keywords introduces a constraint in C++20?"
  options={['requires', 'concept', 'typename', 'static']}
  answer="requires"
/>
