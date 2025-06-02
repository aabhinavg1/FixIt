---
title: "C++ Memory Managementt MCQs"
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
import AdBanner from '@site/src/components/AdBanner';
import { Question } from '../../Question';

# Memory Management

<Question
  question="1).What is dynamic memory allocation in C++?"
  options={['Allocating memory during runtime', 'Allocating memory during compile time', 'Using static memory', 'None of the above']}
  answer="Allocating memory during runtime"
/>
<Question
  question="2).Which operator is used for dynamic memory allocation?"
  options={[ 'malloc', 'allocate', 'None of the above','new']}
  answer="new"
/>
<Question
  question="3).Which operator is used to deallocate memory in C++?"
  options={[ 'free', 'delete','dispose', 'None of the above']}
  answer="delete"
/>
<Question
  question="4).What is a memory leak?"
  options={['Memory that is not deallocated', 'Memory allocated at compile time', 'Excessive memory usage', 'None of the above']}
  answer="Memory that is not deallocated"
/>
<Question
  question="5).What is a smart pointer?"
  options={[ 'A pointer that points to other pointers', 'A pointer that only works with arrays', 'A pointer that automatically manages memory','None of the above']}
  answer="A pointer that automatically manages memory"
/>
<Question
  question="6).What does the new operator return?"
  options={['A pointer to the allocated memory', 'The size of allocated memory', 'The address of the deallocated memory', 'None of the above']}
  answer="A pointer to the allocated memory"
/>
<Question
  question="7).What is the difference between malloc and new?"
  options={['malloc is procedural, new is object-oriented', 'malloc does not call constructors', 'Both A and B', 'None of the above']}
  answer="Both A and B"
/>
<Question
  question="8).What happens if delete is used on NULL?"
  options={[ 'It causes a segmentation fault', 'It deallocates NULL', 'None of the above','No operation is performed']}
  answer="No operation is performed"
/>
<Question
  question="9).Which smart pointer type prevents cyclic references?"
  options={['weak_ptr', 'shared_ptr', 'unique_ptr', 'None of the above']}
  answer="weak_ptr"
/>
<Question
  question="10).What is the purpose of the delete[] operator?"
  options={['To deallocate memory allocated for arrays', 'To deallocate static memory', 'To deallocate class objects', 'None of the above']}
  answer="To deallocate memory allocated for arrays"
/>

<div>
<AdBanner />
</div>

<Question
  question="11).What happens if you delete a pointer that was not allocated using new?"
  options={['Undefined behavior', 'Memory leak', 'Compilation error', 'Segmentation fault']}
  answer="Undefined behavior"
/>
<Question
  question="12).What does std::unique_ptr ensure?"
  options={['Shared ownership of a resource', 'Exclusive ownership of a resource', 'Global access to a resource', 'Constant-time deletion']}
  answer="Exclusive ownership of a resource"
/>
<Question
  question="13).Which smart pointer allows multiple references to the same object?"
  options={['unique_ptr', 'shared_ptr', 'weak_ptr', 'auto_ptr']}
  answer="shared_ptr"
/>
<Question
  question="14).What is the use of weak_ptr in C++?"
  options={['To manage cyclic references', 'To allocate memory', 'To enforce unique ownership', 'To call destructors']}
  answer="To manage cyclic references"
/>
<Question
  question="15).What is the effect of using delete on a null pointer?"
  options={[ 'Throws an exception', 'Causes a crash', 'Deallocates null','Nothing happens']}
  answer="Nothing happens"
/>
<Question
  question="16).Which operator is used to allocate memory for an array?"
  options={['new[]', 'malloc', 'calloc', 'new']}
  answer="new[]"
/>
<Question
  question="17).What is std::make_shared used for?"
  options={[ 'Conversion to weak_ptr', 'Destruction of shared_ptr', 'Efficient creation of shared_ptr','Creating unique_ptr']}
  answer="Efficient creation of shared_ptr"
/>
<Question
  question="18).Which header file is needed to use smart pointers in C++?"
  options={[ '<smartptr>', '<memory>','<stdlib.h>', '<iostream>']}
  answer="<memory>"
/>
<Question
  question="19).What is the use of reset() in smart pointers?"
  options={[ 'Allocates memory', 'Calls constructor', 'Returns raw pointer','Deletes managed object and resets pointer',]}
  answer="Deletes managed object and resets pointer"
/>
<Question
  question="20).What is the purpose of enable_shared_from_this?"
  options={['To create a shared_ptr from within the object', 'To enable unique ownership', 'To break cyclic references', 'To allocate raw memory']}
  ans wer="To create a shared_ptr from within the object"
/>

<div>
<AdBanner />
</div>

<Question
  question="21).Which smart pointer can be safely copied?"
  options={['unique_ptr', 'shared_ptr', 'raw pointer', 'auto_ptr']}
  answer="shared_ptr"
/>
<Question
  question="22).What does the function weak_ptr::expired() do?"
  options={['Checks if resource is still valid', 'Deallocates the memory', 'Resets the pointer', 'Creates a shared_ptr']}
  answer="Checks if resource is still valid"
/>
<Question
  question="23).What happens when the last shared_ptr to an object is destroyed?"
  options={[ 'Nothing happens', 'The object is deleted','The object is reset', 'Memory leak occurs']}
  answer="The object is deleted"
/>
<Question
  question="24).What does shared_ptr::use_count() return?"
  options={[ 'Size of object', 'Total memory used', 'Number of shared_ptrs managing the object','Number of weak_ptrs']}
  answer="Number of shared_ptrs managing the object"
/>
<Question
  question="25).Which smart pointer type is designed for unique ownership?"
  options={['shared_ptr', 'unique_ptr', 'weak_ptr', 'auto_ptr']}
  answer="unique_ptr"
/>
<Question
  question="26).Why is auto_ptr deprecated in modern C++?"
  options={['Transfers ownership on copy', 'Doesn’t deallocate memory', 'Cannot be moved', 'Lacks efficiency']}
  answer="Transfers ownership on copy"
/>
<Question
  question="27).Which smart pointer does not increase the reference count?"
  options={['weak_ptr', 'shared_ptr', 'unique_ptr', 'auto_ptr']}
  answer="weak_ptr"
/>
<Question
  question="28).What does new (std::nothrow) return if memory allocation fails?"
  options={[ 'Throws exception', 'Returns zero', 'Segmentation fault','nullptr']}
  answer="nullptr"
/>
<Question
  question="29).What is the primary benefit of make_unique?"
  options={[ 'Manual memory management', 'Exception safety and better performance','Support for shared ownership', 'Automatic casting']}
  answer="Exception safety and better performance"
/>
<Question
  question="30).Which of these is true for delete[] operator?"
  options={['Used for array deallocation', 'Used only for pointers to objects', 'Cannot be overloaded', 'Used with malloc']}
  answer="Used for array deallocation"
/>

<div>
<AdBanner />
</div>

<Question
  question="31).What is the output of use_count on a default-initialized shared_ptr?"
  options={[ '1', 'Undefined', 'null','0']}
  answer="0"
/>
<Question
  question="32).Which statement about unique_ptr is correct?"
  options={[ 'It supports reference counting', 'It can be shared', 'It can be assigned to shared_ptr directly','It can be moved but not copied']}
  answer="It can be moved but not copied"
/>
<Question
  question="33).What does weak_ptr::lock() return?"
  options={['shared_ptr', 'nullptr', 'raw pointer', 'bool']}
  answer="shared_ptr"
/>
<Question
  question="34).What happens if you copy a unique_ptr?"
  options={[ 'Both manage same object', 'Creates a dangling pointer','Compilation error', 'Reference count increases']}
  answer="Compilation error"
/>
<Question
  question="35).What is a dangling pointer?"
  options={['Pointer pointing to deallocated memory', 'Pointer pointing to global variable', 'Uninitialized pointer', 'Shared pointer with zero references']}
  answer="Pointer pointing to deallocated memory"
/>
<Question
  question="36).Which pointer type automatically destroys the object when it goes out of scope?"
  options={['shared_ptr', 'unique_ptr', 'weak_ptr', 'Both A and B']}
  answer="Both A and B"
/>
<Question
  question="37).When is delete[] required instead of delete?"
  options={['When deleting array memory', 'When freeing raw pointers', 'When using malloc', 'When using references']}
  answer="When deleting array memory"
/>
<Question
  question="38).What will happen if a shared_ptr is assigned to another shared_ptr?"
  options={['Reference count increases', 'Object is deleted', 'It throws an exception', 'Memory is leaked']}
  answer="Reference count increases"
/>
<Question
  question="39).Which of the following best prevents memory leaks in C++?"
  options={['Smart pointers', 'Raw pointers', 'Stack variables', 'Virtual functions']}
  answer="Smart pointers"
/>
<Question
  question="40).Which one of the following can break shared_ptr cycles?"
  options={['weak_ptr', 'auto_ptr', 'malloc', 'unique_ptr']}
  answer="weak_ptr"
/>

<div>
<AdBanner />
</div>

<Question
  question="41).What does delete operator do in C++?"
  options={['Deallocates memory and calls destructor', 'Releases only pointer', 'Clears object data', 'Calls constructor']}
  answer="Deallocates memory and calls destructor"
/>
<Question
  question="42).How does memory management differ between malloc and new?"
  options={['malloc doesn’t call constructor', 'new calls constructor', 'Both A and B', 'None']}
  answer="Both A and B"
/>
<Question
  question="43).Which of the following is a valid way to move a unique_ptr?"
  options={['std::move(ptr)', 'ptr.clone()', 'ptr.copy()', 'new ptr']}
  answer="std::move(ptr)"
/>
<Question
  question="44).What happens when a weak_ptr is converted to shared_ptr after object is destroyed?"
  options={[ 'Creates a new object','Returns nullptr', 'Throws exception', 'Segmentation fault']}
  answer="Returns nullptr"
/>
<Question
  question="45).What is RAII in C++?"
  options={[ 'Runtime Allocation Is Internal', 'Resource Allocation Is Instant', 'None of the above','Resource Acquisition Is Initialization']}
  answer="Resource Acquisition Is Initialization"
/>
<Question
  question="46).Which of the following is NOT true about smart pointers?"
  options={['They prevent memory leaks', 'They manage object lifetime', 'They use garbage collection', 'They support custom deleters']}
  answer="They use garbage collection"
/>
<Question
  question="47).Which smart pointer was removed in C++17?"
  options={['auto_ptr', 'unique_ptr', 'shared_ptr', 'weak_ptr']}
  answer="auto_ptr"
/>
<Question
  question="48).What is the role of custom deleters in smart pointers?"
  options={[ 'Prevent move semantics', 'Disable memory deallocation','Define how objects are destroyed', 'Increase performance']}
  answer="Define how objects are destroyed"
/>
<Question
  question="49).What does std::bad_alloc represent?"
  options={['Failure to allocate memory', 'Invalid pointer access', 'Type mismatch error', 'Overloaded function error']}
  answer="Failure to allocate memory"
/>
<Question
  question="50).How does shared_ptr avoid double deletion?"
  options={[ 'Blocks copy constructors', 'Uses reference counting','Creates raw pointers', 'Throws compile error']}
  answer="Uses reference counting"
/>

<div>
<AdBanner />
</div>