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
