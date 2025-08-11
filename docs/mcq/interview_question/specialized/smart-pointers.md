---
title: "C++ Smart Pointers Interview Questions and Answers"
description: "20 essential interview questions on smart pointers in Modern C++ (C++11/14/17/20) with answers, code examples, and usage scenarios."
keywords:
  - Smart Pointers C++
  - C++11 Smart Pointers
  - unique_ptr C++
  - shared_ptr C++
  - weak_ptr C++
  - auto_ptr Deprecated
  - C++ Memory Management
  - RAII in C++
  - make_unique
  - make_shared
  - std::enable_shared_from_this
  - C++ Circular References
  - weak_ptr lock
  - Smart Pointer vs Raw Pointer
  - Smart Pointer Performance
  - Smart Pointer Thread Safety
  - Smart Pointer Ownership
  - Smart Pointer Reference Count
  - Smart Pointer Use Cases
  - Custom Deleter in Smart Pointer
  - Smart Pointer and Arrays
  - Smart Pointer Pitfalls
  - Smart Pointer Best Practices
  - Passing Smart Pointers to Functions
  - Returning Smart Pointers from Functions
  - Moving Smart Pointers
  - Resetting Smart Pointers
  - Releasing Smart Pointers
  - Smart Pointers with STL Containers
  - Smart Pointer and Polymorphism
---
import { ComicQA } from '../Question_comics' ;

<ComicQA
  question="1) What are smart pointers in C++?"
  answer="Smart pointers are class templates that manage the lifetime of dynamically allocated objects automatically."
  code={`std::unique_ptr<int> p(new int(5));`}
  example={`// Automatically deletes int when p goes out of scope`}
  whenToUse="To prevent memory leaks and manage ownership automatically."
/>

<ComicQA
  question="2) What types of smart pointers are in C++11?"
  answer="unique_ptr, shared_ptr, and weak_ptr."
  example={`// auto_ptr is deprecated and removed in C++17`}
  whenToUse="Choose based on ownership semantics."
/>

<ComicQA
  question="3) What is unique_ptr?"
  answer="A smart pointer with exclusive ownership; cannot be copied, only moved."
  code={`std::unique_ptr<int> p1(new int(10));
auto p2 = std::move(p1);`}
  example={`// p1 becomes null, p2 owns the resource`}
  whenToUse="When only one owner should exist."
/>

<ComicQA
  question="4) How to create unique_ptr safely?"
  answer="Use std::make_unique."
  code={`auto p = std::make_unique<int>(42);`}
  example={`// Exception-safe and concise`}
  whenToUse="Preferred over 'new' for unique_ptr."
/>

<ComicQA
  question="5) What is shared_ptr?"
  answer="A smart pointer with shared ownership; uses reference counting."
  code={`std::shared_ptr<int> p1 = std::make_shared<int>(5);
auto p2 = p1;`}
  example={`// Reference count increases to 2`}
  whenToUse="When multiple owners are needed."
/>

<ComicQA
  question="6) How does shared_ptr manage memory?"
  answer="It uses a control block to track the reference count and delete the object when count reaches zero."
  example={`// Reference count decreases when shared_ptr is destroyed`}
  whenToUse="To share ownership safely."
/>

<ComicQA
  question="7) What is weak_ptr?"
  answer="A non-owning reference to a shared_ptr-managed object."
  code={`std::weak_ptr<int> wp = sp;`}
  example={`// Does not increase reference count`}
  whenToUse="To break circular references."
/>

<ComicQA
  question="8) How to access object from weak_ptr?"
  answer="Use lock() to get a shared_ptr."
  code={`if (auto sp = wp.lock()) { /* use sp */ }`}
  example={`// Safe access only if object still exists`}
  whenToUse="When you need temporary access without ownership."
/>

<ComicQA
  question="9) What is a circular reference in shared_ptr?"
  answer="When two shared_ptrs reference each other, causing memory leaks."
  code={`struct A { shared_ptr<B> b; };
struct B { shared_ptr<A> a; };`}
  example={`// Both reference counts never reach zero`}
  whenToUse="Avoid with weak_ptr."
/>

<ComicQA
  question="10) How to use smart pointers with polymorphism?"
  answer="Store base class pointer; ensure base destructor is virtual."
  code={`unique_ptr<Base> p = make_unique<Derived>();`}
  example={`// Correctly calls Derived destructor`}
  whenToUse="When managing polymorphic objects."
/>

<ComicQA
  question="11) Can unique_ptr hold arrays?"
  answer="Yes, using unique_ptr<T[]>."
  code={`unique_ptr<int[]> arr(new int[10]);`}
  example={`// Automatically deletes array with delete[]`}
  whenToUse="For dynamic arrays."
/>

<ComicQA
  question="12) How to use custom deleters?"
  answer="Pass a callable to smart pointer constructor."
  code={`shared_ptr<FILE> fp(fopen("file.txt","r"), fclose);`}
  example={`// Ensures proper cleanup`}
  whenToUse="When object needs special destruction."
/>

<ComicQA
  question="13) Can smart pointers be stored in containers?"
  answer="Yes, they can be stored like regular objects."
  code={`vector<unique_ptr<int>> v;
v.push_back(make_unique<int>(1));`}
  example={`// Ownership managed automatically`}
  whenToUse="When managing collection of resources."
/>

<ComicQA
  question="14) How to reset a smart pointer?"
  answer="Use reset() to release the current resource."
  code={`p.reset();`}
  example={`// Deletes resource and becomes empty`}
  whenToUse="When you want to free resource before scope ends."
/>

<ComicQA
  question="15) How to release resource from unique_ptr?"
  answer="Use release() to return raw pointer without deleting."
  code={`int* raw = p.release();`}
  example={`// You must delete raw manually`}
  whenToUse="When transferring ownership to non-smart pointer API."
/>

<ComicQA
  question="16) Are smart pointers thread-safe?"
  answer="Reference count modifications in shared_ptr are thread-safe, but object access is not."
  whenToUse="Synchronize access if used from multiple threads."
/>

<ComicQA
  question="17) Why prefer make_shared over shared_ptr with new?"
  answer="make_shared allocates control block and object together, improving performance and exception safety."
  code={`auto sp = make_shared<int>(42);`}
  example={`// One allocation instead of two`}
  whenToUse="Preferred creation method for shared_ptr."
/>

<ComicQA
  question="18) Can you move a shared_ptr?"
  answer="Yes, moves transfer ownership and do not increase reference count."
  code={`shared_ptr<int> p2 = std::move(p1);`}
  example={`// p1 becomes empty`}
  whenToUse="When transferring shared ownership."
/>

<ComicQA
  question="19) What happens when unique_ptr goes out of scope?"
  answer="It deletes the managed object automatically."
  example={`// No need to call delete manually`}
  whenToUse="To manage resources safely."
/>

<ComicQA
  question="20) When not to use smart pointers?"
  answer="Avoid for non-dynamic memory, trivial types, or when manual control is needed."
  example={`// Using smart pointer for stack variable is pointless`}
  whenToUse="When ownership semantics are not needed."
/>
