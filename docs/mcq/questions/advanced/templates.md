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
import AdBanner from '@site/src/components/AdBanner';
import { Question } from '../../Question';

# Templates

<Question
  question="1).What is the purpose of templates in C++?"
  options={['To enable function overloading', 'To allow generic programming', 'To define custom data types', 'None of the above']}
  answer="To allow generic programming"
/>
<Question
  question="2).Which of the following can be templated in C++?"
  options={['Functions', 'Classes', 'Structures', 'All of the above']}
  answer="All of the above"
/>
<Question
  question="3).What does the 'typename' keyword in templates do?"
  options={['Defines a type parameter', 'Indicates a template argument', 'Declares a function', 'None of the above']}
  answer="Defines a type parameter"
/>
<Question
  question="4).What is the syntax for declaring a template for a function?"
  options={['template<class T> return_type function_name()','template<typename T> return_type function_name()','Both A and B','None of the above' ]}
  answer="Both A and B"
/>
<Question
  question="5).What is the main advantage of using class templates?"
  options={['Code reuse for different data types', 'Better performance', 'None of the above', 'Faster execution']}
  answer="Code reuse for different data types"
/>
<Question
  question="6).Can templates be used with non-type parameters?"
  options={['Only for classes', 'Only for functions', 'No', 'Yes']}
  answer="Yes"
/>
<Question
  question="7).What happens if no explicit template specialization is provided?"
  options={['The function is ignored', 'The compiler generates code for every type', 'None of the above', 'The code will not compile']}
  answer="The compiler generates code for every type"
/>
<Question
  question="8).What is the difference between 'template<class T>' and 'template<typename T>'?"
  options={['template<typename T> is more efficient', 'There is no difference', 'None of the above', 'template<class T> allows more complex types']}
  answer="There is no difference"
/>
<Question
  question="9).Which of the following is used to specialize a template?"
  options={['None of the above', 'template<class T> specialization', 'template<>', 'template<T> specialization']}
  answer="template<>"
/>
<Question
  question="10).Can template functions be overloaded?"
  options={['Only for different return types', 'Only for different types', 'Yes', 'No']}
  answer="Yes"
/>

<div>
<AdBanner />
</div>

<Question
  question="11). Can class templates have more than one template parameter?"
  options={['Only two parameters', 'Yes', 'Only for structures', 'No']}
  answer="Yes"
/>
<Question
  question="12). What is template specialization?"
  options={['Function overloading', 'Custom implementation for a specific type', 'None of the above', 'Redefining templates']}
  answer="Custom implementation for a specific type"
/>
<Question
  question="13). What is partial specialization in C++ templates?"
  options={['Full template specialization', 'Specializing a subset of template parameters', 'Overloading a class', 'None']}
  answer="Specializing a subset of template parameters"
/>
<Question
  question="14). Which of the following is correct syntax for non-type template parameter?"
  options={['template<int N>', 'template<class int>', 'template<>', 'template<typename int>']}
  answer="template<int N>"
/>
<Question
  question="15). Can a constructor be templated inside a non-templated class?"
  options={['Only with specialization', 'Yes', 'No', 'Only in C++20']}
  answer="Yes"
/>
<Question
  question="16). Which operator can be overloaded in template classes?"
  options={['Only arithmetic operators', 'Any operator', 'None', 'Only assignment operator']}
  answer="Any operator"
/>
<Question
  question="17). Which of the following template instantiations is valid?"
  options={['template<int>', 'MyClass<int>', 'MyClass()', 'None']}
  answer="MyClass<int>"
/>
<Question
  question="18). When does the compiler generate code for a template?"
  options={['During linking', 'At template declaration', 'When instantiated', 'At runtime']}
  answer="When instantiated"
/>
<Question
  question="19). What is an instantiation of a template?"
  options={['Writing main()', 'Declaring a function', 'Creating a concrete class/function from a template', 'Using typedef']}
  answer="Creating a concrete class/function from a template"
/>
<Question
  question="20). Which of these is not a type of template?"
  options={['Variable template', 'Loop template', 'Function template', 'Class template']}
  answer="Loop template"
/>

<div>
<AdBanner />
</div>

<Question
  question="21). Can template classes be inherited?"
  options={['Only in STL', 'Only by other template classes', 'No', 'Yes']}
  answer="Yes"
/>
<Question
  question="22). What is a template parameter pack?"
  options={['An STL container', 'None', 'A variadic number of template parameters', 'A header file']}
  answer="A variadic number of template parameters"
/>
<Question
  question="23). What is the purpose of 'template<class... Args>'?"
  options={['Function overloading', 'Variadic templates', 'Smart pointers', 'Multiple inheritance']}
  answer="Variadic templates"
/>
<Question
  question="24). Can you use default arguments in templates?"
  options={['Only for classes', 'No', 'Yes', 'Only in function templates']}
  answer="Yes"
/>
<Question
  question="25). Which C++ version introduced variadic templates?"
  options={['C++03', 'C++11', 'C++20', 'C++98']}
  answer="C++11"
/>
<Question
  question="26). What is SFINAE in C++ templates?"
  options={['Substitution Failure Is Not An Error', 'Static Field Initialization', 'Syntax Formatting Is Not An Error', 'None']}
  answer="Substitution Failure Is Not An Error"
/>
<Question
  question="27). What does 'decltype' do in templates?"
  options={['Determines the type of an expression', 'Deletes a type', 'None', 'Initializes a value']}
  answer="Determines the type of an expression"
/>
<Question
  question="28). What is the extension of C++ header files that contain templates?"
  options={['.tmpl', '.h or .hpp', '.tpp', '.cpp']}
  answer=".h or .hpp"
/>
<Question
  question="29). Can templates be recursive?"
  options={['Only with metaprogramming', 'Yes', 'Only for functions', 'No']}
  answer="Yes"
/>
<Question
  question="30). What is template metaprogramming?"
  options={['Runtime memory management', 'Performing computations at compile-time using templates', 'None', 'Debugging templates']}
  answer="Performing computations at compile-time using templates"
/>

<div>
<AdBanner />
</div>

<Question
  question="31). Can you use typedef in templates?"
  options={['Only in classes', 'No', 'Yes', 'Only in functions']}
  answer="Yes"
/>
<Question
  question="32). What does 'template<class T=int>' mean?"
  options={['Invalid syntax', 'Default template parameter', 'Type constraint', 'None']}
  answer="Default template parameter"
/>
<Question
  question="33). Which of the following is a benefit of templates?"
  options={['Type safety', 'All of the above', 'Code reuse', 'Performance']}
  answer="All of the above"
/>
<Question
  question="34). Can template arguments be expressions?"
  options={['Only with macros', 'Only constants', 'No', 'Yes, for non-type parameters']}
  answer="Yes, for non-type parameters"
/>
<Question
  question="35). Can a template function call a non-template function?"
  options={['Only if inlined', 'Yes', 'Only in specializations', 'No']}
  answer="Yes"
/>
<Question
  question="36). Can you partially specialize a function template?"
  options={['Yes', 'No', 'Only in C++17', 'Only for inline functions']}
  answer="No"
/>
<Question
  question="37). Can you explicitly instantiate a template?"
  options={['Only classes', 'Yes', 'No', 'Only functions']}
  answer="Yes"
/>
<Question
  question="38). Which keyword is used to instantiate a template explicitly?"
  options={['instantiate', 'explicit', 'template', 'force']}
  answer="template"
/>
<Question
  question="39). Can template classes contain static members?"
  options={['Only in function templates', 'No', 'Yes', 'Only with inheritance']}
  answer="Yes"
/>
<Question
  question="40). What does 'typename T::value_type' mean inside a template?"
  options={['Declare a variable', 'Call a constructor', 'Access a nested type inside T', 'Create a value']}
  answer="Access a nested type inside T"
/>

<div>
<AdBanner />
</div>

<Question
  question="41). What is the primary use of 'std::enable_if' in template programming?"
  options={['Memory allocation', 'Conditional template instantiation', 'Enabling smart pointers', 'Multithreading']}
  answer="Conditional template instantiation"
/>
<Question
  question="42). Can function templates have default template arguments?"
  options={['Only for return type', 'Only for parameters', 'No', 'Yes']}
  answer="Yes"
/>
<Question
  question="43). What happens if you use a template with a type that does not support a required operation?"
  options={['Runtime error', 'Code runs with warning', 'Compilation error', 'Undefined behavior']}
  answer="Compilation error"
/>
<Question
  question="44). What does the 'template' keyword before a dependent name signify?"
  options={['Starts a namespace', 'It tells the compiler it’s a template', 'Marks a function as inline', 'Declares a class']}
  answer="It tells the compiler it’s a template"
/>
<Question
  question="45). What is a dependent name in C++ templates?"
  options={['A namespace alias', 'A name depending on a template parameter', 'A class name', 'A global variable']}
  answer="A name depending on a template parameter"
/>
<Question
  question="46). Can you overload a templated function with a non-templated version?"
  options={['Only in STL', 'Only for inline functions', 'No', 'Yes']}
  answer="Yes"
/>
<Question
  question="47). What keyword is required when using a member template inside a dependent base class?"
  options={['using', 'template', 'typename', 'override']}
  answer="template"
/>
<Question
  question="48). What is a constraint in the context of C++20 templates?"
  options={['A new class type', 'None of the above', 'A compile-time requirement on template parameters', 'A syntax error']}
  answer="A compile-time requirement on template parameters"
/>
<Question
  question="49). What does 'concept' mean in C++ templates?"
  options={['A debugging tool', 'A template class', 'An STL container', 'A named constraint for template parameters']}
  answer="A named constraint for template parameters"
/>
<Question
  question="50). Which of the following keywords introduces a constraint in C++20?"
  options={['static', 'concept', 'requires', 'typename']}
  answer="requires"
/>

<div>
<AdBanner />
</div>