---
id: design-patterns
title: C++ Design Patterns
description: |
  This guide explores common and powerful design patterns implemented in C++, helping you write clean, modular, and scalable software. Learn about creational, structural, and behavioral patterns such as Singleton, Factory, Observer, Strategy, Adapter, and more. Ideal for developers looking to strengthen their architecture and design skills using modern C++ techniques.
keywords:
  - C++ Design Patterns
  - Software Design in C++
  - Singleton Pattern C++
  - Factory Pattern C++
  - Observer Pattern C++
  - Strategy Pattern C++
  - Adapter Pattern C++
  - Creational Patterns C++
  - Structural Patterns C++
  - Behavioral Patterns C++
  - Design Patterns in Programming
  - Modern C++ Architecture
  - Reusable Code in C++
  - C++ Design Principles
  - SOLID Principles in C++
  - Clean Code C++
  - C++ OOP Best Practices
  - Scalable C++ Applications
  - C++ Interview Preparation

tags:
  - Design Patterns
  - C++ Design Patterns
  - Singleton Pattern
  - Factory Pattern
  - Observer Pattern
  - Strategy Pattern
  - Adapter Pattern
  - Creational Patterns
  - Structural Patterns
  - Behavioral Patterns
  - C++ Architecture
  - Software Design
  - Clean Code
  - Reusable Components
  - OOP Best Practices
  - SOLID in C++
  - Modern C++
  - C++ Interview Preparation

---
import { Question } from '../../Question';

# C++ Design Patterns

<Question
  question="1).What is a design pattern in C++?"
  options={['A reusable solution to a common problem', 'A specific algorithm', 'A C++ feature', 'None of the above']}
  answer="A reusable solution to a common problem"
/>
<Question
  question="2).Which of the following is a structural design pattern?"
  options={['Observer', 'Decorator', 'Factory', 'None of the above']}
  answer="Decorator"
/>
<Question
  question="3).What is the purpose of the Singleton design pattern?"
  options={['To ensure a class has only one instance', 'To allow multiple instances of a class', 'To hide the implementation details', 'None of the above']}
  answer="To ensure a class has only one instance"
/>
<Question
  question="4).Which design pattern is used to create objects without specifying the exact class?"
  options={['Factory Method', 'Singleton', 'Abstract Factory', 'None of the above']}
  answer="Abstract Factory"
/>
<Question
  question="5).Which design pattern is used to provide a way to access elements of a collection without exposing the underlying structure?"
  options={['Iterator', 'Observer', 'Decorator', 'None of the above']}
  answer="Iterator"
/>
<Question
  question="6).What is the purpose of the Observer design pattern?"
  options={['To allow an object to notify other objects about changes', 'To control the creation of objects', 'To represent a hierarchy of classes', 'None of the above']}
  answer="To allow an object to notify other objects about changes"
/>
<Question
  question="7).Which design pattern is used to add new functionality to an object without changing its structure?"
  options={['Decorator', 'Strategy', 'Composite', 'None of the above']}
  answer="Decorator"
/>
<Question
  question="8).Which of the following is an example of a behavioral design pattern?"
  options={['Observer', 'Abstract Factory', 'Prototype', 'None of the above']}
  answer="Observer"
/>
<Question
  question="9).Which design pattern is used to represent part-whole hierarchies?"
  options={['Composite', 'Strategy', 'Chain of Responsibility', 'None of the above']}
  answer="Composite"
/>
<Question
  question="10).Which design pattern allows an object to behave differently based on its internal state?"
  options={['State', 'Factory Method', 'Singleton', 'None of the above']}
  answer="State"
/>
<Question
  question="11). What is the main purpose of the Command design pattern?"
  options={['Encapsulate a request as an object', 'Extend functionality dynamically', 'Restrict object creation', 'Convert one interface to another']}
  answer="Encapsulate a request as an object"
/>

<Question
  question="12). Which pattern allows behavior to be added to individual objects dynamically without affecting others?"
  options={['Decorator', 'Adapter', 'Factory', 'Command']}
  answer="Decorator"
/>

<Question
  question="13). What is the primary intent of the Proxy pattern?"
  options={['Simplify a complex interface', 'Allow interface conversion', 'Control access to another object', 'Define object creation steps']}
  answer="Control access to another object"
/>

<Question
  question="14). The State pattern is useful when:"
  options={['You want to notify multiple objects', 'An object must alter its behavior based on its internal state', 'Object creation is costly', 'There is a need to separate abstraction and implementation']}
  answer="An object must alter its behavior based on its internal state"
/>

<Question
  question="15). Which pattern defines an object that centralizes communication between other objects to reduce coupling?"
  options={['Mediator', 'Observer', 'Command', 'Composite']}
  answer="Mediator"
/>

<Question
  question="16). In the Command pattern, what role does the Invoker play?"
  options={['Executes a specific algorithm', 'Holds a command and triggers its execution', 'Stores and manages object state', 'Defines the interface for requests']}
  answer="Holds a command and triggers its execution"
/>

<Question
  question="17). Which design pattern is commonly used for remote method invocation or lazy loading?"
  options={['Bridge', 'Strategy', 'Proxy', 'Builder']}
  answer="Proxy"
/>

<Question
  question="18). In the Decorator pattern, decorators usually:"
  options={['Override the main constructor', 'Inherit from unrelated classes', 'Implement the same interface as the object they wrap', 'Convert interface types']}
  answer="Implement the same interface as the object they wrap"
/>

<Question
  question="19). The State pattern often uses:"
  options={['A single interface with multiple implementations', 'A factory to create new objects', 'Static methods for state changes', 'Class templates for variation']}
  answer="A single interface with multiple implementations"
/>

<Question
  question="20). Mediator pattern promotes:"
  options={['Loose coupling between components', 'Multiple inheritance', 'High cohesion within objects', 'Tight binding of interfaces']}
  answer="Loose coupling between components"
/>

<Question
  question="21). What is a design pattern in C++?"
  options={['A reusable solution to a common problem', 'A specific algorithm', 'A C++ feature', 'None of the above']}
  answer="A reusable solution to a common problem"
/>

<Question
  question="22). Which design pattern ensures that a class has only one instance and provides a global point of access to it?"
  options={['Factory', 'Singleton', 'Observer', 'Adapter']}
  answer="Singleton"
/>
<Question
  question="23). Which of the following is a Creational design pattern?"
  options={['Observer', 'Adapter', 'Factory', 'Strategy']}
  answer="Factory"
/>

<Question
  question="24). Which design pattern is used to allow objects to be notified when the state of another object changes?"
  options={['Strategy', 'Observer', 'Bridge', 'Prototype']}
  answer="Observer"
/>

<Question
  question="25). The Strategy pattern is best used for:"
  options={['Creating a single instance', 'Interchanging algorithms at runtime', 'Notifying observers', 'Converting interfaces']}
  answer="Interchanging algorithms at runtime"
/>

<Question
  question="26). The Adapter pattern is used to:"
  options={['Create object families', 'Notify observers of changes', 'Convert one interface into another', 'Control instance creation']}
  answer="Convert one interface into another"
/>

<Question
  question="27). In C++, which pattern is commonly implemented using function pointers, `std::function`, or inheritance?"
  options={['Prototype', 'Strategy', 'Facade', 'Builder']}
  answer="Strategy"
/>
<Question
  question="28). Which pattern is useful for decoupling abstraction from implementation so they can vary independently?"
  options={['Bridge', 'Adapter', 'Factory', 'Observer']}
  answer="Bridge"
/>

<Question
  question="29). Which design pattern provides a simplified interface to a complex subsystem?"
  options={['Composite', 'Builder', 'Facade', 'Decorator']}
  answer="Facade"
/>

<Question
  question="30). The Factory pattern focuses on:"
  options={['Extending class behavior', 'Creating objects without exposing instantiation logic', 'Ensuring only one object exists', 'Maintaining state across observers']}
  answer="Creating objects without exposing instantiation logic"
/>
<Question
  question="31). Which design pattern lets you construct complex objects step by step?"
  options={['Builder', 'Prototype', 'Command', 'Flyweight']}
  answer="Builder"
/>

<Question
  question="32). The Flyweight pattern is used to:"
  options={['Encapsulate operations', 'Minimize memory usage by sharing data', 'Provide a unified interface', 'Control instance creation']}
  answer="Minimize memory usage by sharing data"
/>

<Question
  question="33). What is the primary goal of the Prototype pattern?"
  options={['Clone existing objects', 'Intercept method calls', 'Switch algorithms dynamically', 'Wrap methods with extra functionality']}
  answer="Clone existing objects"
/>

<Question
  question="34). Which pattern helps to avoid coupling the sender of a request to its receiver by giving multiple objects a chance to handle the request?"
  options={['Observer', 'Chain of Responsibility', 'Strategy', 'Factory']}
  answer="Chain of Responsibility"
/>

<Question
  question="35). In which pattern do classes have only one reason to change, helping follow the Single Responsibility Principle?"
  options={['Builder', 'Facade', 'Command', 'Mediator']}
  answer="Facade"
/>

<Question
  question="36). Which design pattern involves a subject and multiple observers who are automatically updated when the subject changes?"
  options={['Mediator', 'Observer', 'Command', 'Strategy']}
  answer="Observer"
/>

<Question
  question="37). What does the Memento pattern allow you to do?"
  options={['Undo operations by restoring an object’s previous state', 'Extend object behavior', 'Switch states dynamically', 'Control object instantiation']}
  answer="Undo operations by restoring an object’s previous state"
/>

<Question
  question="38). Which of the following is a Structural design pattern?"
  options={['Decorator', 'Factory', 'Strategy', 'Command']}
  answer="Decorator"
/>

<Question
  question="39). The Template Method pattern:"
  options={['Allows subclasses to override steps of an algorithm', 'Provides a unique instance globally', 'Creates families of objects', 'Converts incompatible interfaces']}
  answer="Allows subclasses to override steps of an algorithm"
/>

<Question
  question="40). What pattern would you use to give a simplified interface to a set of interfaces in a subsystem?"
  options={['Facade', 'Decorator', 'Prototype', 'Mediator']}
  answer="Facade"
/>
<Question
  question="41). What is the main advantage of using the Factory Method pattern?"
  options={['Allows for loose coupling by delegating instantiation to subclasses', 'Reduces the number of classes', 'Increases runtime speed', 'Forces inheritance of all classes']}
  answer="Allows for loose coupling by delegating instantiation to subclasses"
/>
<Question
  question="42). Which pattern allows treating individual objects and compositions of objects uniformly?"
  options={['Composite', 'Prototype', 'Command', 'Flyweight']}
  answer="Composite"
/>

<Question
  question="43). In the Proxy pattern, what is the role of the proxy object?"
  options={['Generate reports', 'Manage memory allocations', 'Control access to the real object', 'Convert object types at runtime']}
  answer="Control access to the real object"
/>

<Question
  question="44). Which pattern uses a central object to mediate communication between other objects?"
  options={['Observer', 'Mediator', 'Strategy', 'Decorator']}
  answer="Mediator"
/>
<Question
  question="45). Which design pattern defines a family of algorithms and encapsulates each one so they can be swapped independently?"
  options={['Strategy', 'Adapter', 'Factory', 'Bridge']}
  answer="Strategy"
/>

<Question
  question="46). What does the Bridge pattern separate?"
  options={['Data and logic', 'Abstraction and implementation', 'Class and object', 'Observer and subject']}
  answer="Abstraction and implementation"
/>

<Question
  question="47). When should the Prototype pattern be considered?"
  options={['When object creation is expensive and a similar object already exists', 'When many classes share the same interface', 'When implementing GUI controls', 'When threading is needed']}
  answer="When object creation is expensive and a similar object already exists"
/>
<Question
  question="48). Which of the following patterns would you use to cache shared objects?"
  options={['Flyweight', 'Command', 'Adapter', 'Factory']}
  answer="Flyweight"
/>
<Question
  question="49). The role of the 'Originator' in the Memento pattern is to:"
  options={['Store history of changes', 'Capture and restore its internal state', 'Coordinate objects', 'Apply changes to observers']}
  answer="Capture and restore its internal state"
/>
<Question
  question="51). Which design pattern provides a surrogate or placeholder to control access to another object, often for reasons like lazy initialization, access control, or logging?"
  options={['Proxy', 'Mediator', 'Strategy', 'Adapter']}
  answer="Proxy"
/>


