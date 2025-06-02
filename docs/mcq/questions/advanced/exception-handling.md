---
id: exception-handling
title: Exception Handling
description: |
  Exception handling is a crucial concept in modern programming. This guide explores the mechanisms for managing runtime errors in a safe and controlled manner. Learn how to use `try`, `catch`, and `throw` to handle exceptions, define custom exception classes, and manage multiple exceptions. This topic is essential for writing robust, error-resistant applications.
keywords:
  - Exception Handling
  - try-catch
  - throw
  - Custom Exceptions
  - Error Handling
  - Exception Classes
  - Runtime Errors
  - Exception Handling Mechanisms
  - Exception Safety
  - Error Management
  - Exception Types
  - Standard Exception
  - try block
  - catch block
  - Exception Propagation
  - noexcept
  - Exception Handling Best Practices
  - Exception Handling Techniques

tags:
  - Exception Handling
  - try-catch
  - throw
  - Custom Exceptions
  - Error Handling
  - Runtime Errors
  - Exception Classes
  - Exception Propagation
  - Exception Safety
  - Error Management
  - Exception Types
  - Standard Exception
  - Exception Handling Best Practices
  - noexcept
  - Robust Programming

---
import { Question } from '../../Question';

# Exception Handling

<Question
  question="1).What is the purpose of exception handling in C++?"
  options={['To handle errors', 'To make code more readable', 'To optimize performance', 'None of the above']}
  answer="To handle errors"
/>
<Question
  question="2).Which of the following keywords is used to throw an exception?"
  options={['throw', 'catch', 'try', 'exception']}
  answer="throw"
/>
<Question
  question="3).What is the keyword used to handle an exception?"
  options={['catch', 'try', 'throw', 'exception']}
  answer="catch"
/>
<Question
  question="4).Which of the following is the correct syntax for handling exceptions?"
  options={['try { // code } catch(exception e) { // code }', 'catch(exception e) { // code } try { // code }', 'try catch { // code }', 'None of the above']}
  answer="try { // code } catch(exception e) { // code }"
/>
<Question
  question="5).Can a C++ function throw multiple exceptions?"
  options={['Yes', 'No', 'Only for different types', 'Only in specific cases']}
  answer="Yes"
/>
<Question
  question="6).What happens when an exception is not caught?"
  options={['Program terminates', 'Exception is ignored', 'A default exception handler is invoked', 'None of the above']}
  answer="Program terminates"
/>
<Question
  question="7).What is a standard exception in C++?"
  options={['An exception that is defined in the C++ standard library', 'A user-defined exception', 'An exception that is raised by the compiler', 'None of the above']}
  answer="An exception that is defined in the C++ standard library"
/>
<Question
  question="8).What does the 'throw' keyword do?"
  options={['Throws an exception', 'Catches an exception', 'Terminates the program', 'None of the above']}
  answer="Throws an exception"
/>
<Question
  question="9).Which class is the base class for all exceptions in C++?"
  options={['std::exception', 'std::runtime_error', 'std::error', 'None of the above']}
  answer="std::exception"
/>
<Question
  question="10).What is a 'catch' block used for?"
  options={['To handle exceptions', 'To throw exceptions', 'To define exception types', 'None of the above']}
  answer="To handle exceptions"
/>

<Question
question="11).What is the purpose of the 'try' block?"
options={[ 'To handle exceptions', 'To throw exceptions', 'To enclose code that might throw exceptions','None of the above']}
answer="To enclose code that might throw exceptions"
/>

<Question
question="12).Can a 'catch' block exist without a 'try' block?"
options={[ 'Yes', 'No','Only in main()', 'Only for standard exceptions']}
answer="No"
/>

<Question
question="13).What is exception propagation?"
options={['The process of searching for a matching catch block up the call stack', 'The way exceptions are created', 'How exceptions are logged', 'None of the above']}
answer="The process of searching for a matching catch block up the call stack"
/>

<Question
question="14).What happens if no matching catch block is found?"
options={['std::terminate() is called', 'The exception is ignored', 'The program continues execution', 'None of the above']}
answer="std::terminate() is called"
/>

<Question
question="15).Can constructors throw exceptions?"
options={[ 'No', 'Only if marked noexcept', 'Yes','None of the above']}
answer="Yes"
/>
<Question
question="16).Can virtual functions have exception specifications?"
options={[ 'No', 'Only pure virtual functions', 'None of the above','Yes']}
answer="Yes"
/>

<Question
question="17).What happens if derived class violates base class exception spec?"
options={['std::terminate() if exception thrown', 'Compile error', 'Undefined behavior', 'None of the above']}
answer="std::terminate() if exception thrown"
/>

<Question
question="18).Which component uses std::system_error?"
options={[ 'std::vector', 'std::thread','std::string', 'None of the above']}
answer="std::thread"
/>


<Question
question="19).What is exception specification?"
options={['Declaring what exceptions a function might throw', 'Documenting exceptions', 'A way to catch all exceptions', 'None of the above']}
answer="Declaring what exceptions a function might throw"
/>

<Question
question="20).What does 'noexcept' specifier do?"
options={['Indicates function want not throw exceptions', 'Catches all exceptions', 'Throws exceptions', 'None of the above']}
answer="Indicates function want not throw exceptions"
/>
<Question
question="21).What is basic exception safety guarantee?"
options={['No resource leaks and objects remain usable', 'No exceptions can occur', 'Program want not crash', 'None of the above']}
answer="No resource leaks and objects remain usable"
/>

<Question
question="22).What is strong exception safety guarantee?"
options={[ 'No exceptions can occur', 'All exceptions are caught', 'Operation either completes or leaves state unchanged','None of the above']}
answer="Operation either completes or leaves state unchanged"
/>
<Question
question="23).What is RAII in exception handling?"
options={['Resource Acquisition Is Initialization', 'Random Access Iterator Interface', 'Runtime Allocation Information Indicator', 'None of the above']}
answer="Resource Acquisition Is Initialization"
/>

<Question
question="24).Why use smart pointers with exceptions?"
options={[ 'To catch exceptions', 'To prevent memory leaks','To throw exceptions', 'None of the above']}
answer="To prevent memory leaks"
/>
<Question
question="25).What does std::bad_alloc represent?"
options={[ 'Invalid allocation', 'Deallocation error', 'Memory allocation failure','None of the above']}
answer="Memory allocation failure"
/>
<Question
question="26).What happens if move constructor throws?"
options={[ 'No effect', 'Compile error', 'Strong exception guarantee may be broken' ,'None of the above']}
answer="Strong exception guarantee may be broken"
/>

<Question
question="27).What happens if derived class violates base class exception spec?"
options={['std::terminate() if exception thrown', 'Compile error', 'Undefined behavior', 'None of the above']}
answer="std::terminate() if exception thrown"
/>

<Question
question="28).What happens if an exception is thrown from a destructor during stack unwinding?"
options={['std::terminate() is called', 'The exception is ignored', 'Both exceptions propagate', 'None of the above']}
answer="std::terminate() is called"
/>

<Question
question="29).Can lambda expressions throw exceptions?"
options={[ 'No','Yes', 'Only if specified', 'None of the above']}
answer="Yes"
/>


<Question
question="30).How can you propagate exceptions between threads?"
options={['Using std::future', 'Using std::exception_ptr', 'Both A and B', 'None of the above']}
answer="Both A and B"
/>
<Question
question="31).Can noexcept functions call functions that might throw?"
options={['Yes, but will call std::terminate() if they throw', 'No, compiler error', 'Only if wrapped in try-catch', 'None of the above']}
answer="Yes, but will call std::terminate() if they throw"
/>
<Question
question="32).How do you create a custom exception class?"
options={['Inherit from std::exception', 'Use the exception keyword', 'Use throw custom_exception', 'None of the above']}
answer="Inherit from std::exception"
/>

<Question
question="33).What method should custom exception classes override?"
options={[ 'message()', 'toString()', 'what()','None of the above']}
answer="what()"
/>
<Question
question="34).What is the purpose of std::uncaught_exceptions()?"
options={['Returns count of uncaught exceptions', 'Catches uncaught exceptions', 'Throws uncaught exceptions', 'None of the above']}
answer="Returns count of uncaught exceptions"
/>

<Question
question="35).Can you throw exceptions from signal handlers?"
options={['Yes, with special syntax', 'Only certain exceptions','No, it is undefined behavior',  'None of the above']}
answer="No, it is undefined behavior"
/>
<Question
question="36).What is the no-throw guarantee?"
options={['Operation will never throw exceptions', 'Operation might throw', 'Exceptions are caught internally', 'None of the above']}
answer="Operation will never throw exceptions"
/>

<Question
question="37).Which standard library operations provide no-throw guarantee?"
options={['std::swap for primitive types', 'All container operations', 'Only arithmetic operations', 'None of the above']}
answer="std::swap for primitive types"
/>
<Question
question="38).What is the purpose of std::rethrow_exception?"
options={['To rethrow a caught exception', 'To throw new exceptions', 'To catch nested exceptions', 'None of the above']}
answer="To rethrow a caught exception"
/>
<Question
question="39).Can you throw exceptions in constexpr functions in C++20?"
options={['Yes', 'No', 'Only certain exceptions', 'None of the above']}
answer="No"
/>
<Question
question="40).When are exceptions most expensive?"
options={['When declared', 'When using try blocks', 'None of the above', 'When thrown and caught']}
answer="When thrown and caught"
/>

<Question
question="41).What is zero-cost exception handling?"
options={['No overhead when no exceptions occur', 'Exceptions are free', 'No try-catch blocks needed', 'None of the above']}
answer="No overhead when no exceptions occur"
/>
<Question
question="42).Can template functions have exception specifications?"
options={['Yes', 'No', 'Only for certain types', 'None of the above']}
answer="Yes"
/>

<Question
question="43).What happens if a template instantiation violates exception specification?"
options={['std::terminate() is called', 'Compiler error', 'Exception is ignored', 'None of the above']}
answer="std::terminate() is called"
/>

<Question
question="44).When should exceptions be used?"
options={['For exceptional error conditions', 'For normal control flow', 'For all error handling', 'None of the above']}
answer="For exceptional error conditions"
/>

<Question
question="45).What should you avoid throwing?"
options={[ 'Built-in types', 'Pointers','STL containers', 'None of the above']}
answer="Pointers"
/>

<Question
question="46).Can derived class methods throw more exceptions than base class?"
options={['No, they can throw fewer or same', 'Yes, any exceptions', 'Only if marked override', 'None of the above']}
answer="No, they can throw fewer or same"
/>

<Question
question="47).What is exception specification covariance?"
options={['Derived methods can have more specific exception specs', 'All exceptions must match exactly', 'Exception specs are ignored', 'None of the above']}
answer="Derived methods can have more specific exception specs"
/>
<Question
question="48).What is SEH (Structured Exception Handling)?"
options={['Windows-specific exception mechanism', 'Standard C++ exception', 'Linux exception handling', 'None of the above']}
answer="Windows-specific exception mechanism"
/>

<Question
question="49).Can C++ exceptions interact with SEH?"
options={['No', 'Yes, with special handling', 'Only on 32-bit systems', 'None of the above']}
answer="Yes, with special handling"
/>
<Question
question="50).What happens to uncaught exceptions in threads?"
options={[ 'Main thread catches them', 'They are ignored', 'None of the above', 'std::terminate() is called']}
answer="std::terminate() is called"
/>

