import { buildQuestions, fact } from './shared';

const DAY_BANK = {
  21: {
    title: "Class and Object Basics",
    facts: [
      fact("class", "a blueprint that defines data and behavior together", "grouping related state and methods into one type", "A class can contain both data members and member functions.", "C++ classes"),
      fact("object", "a concrete instance created from a class", "representing one real value or entity in memory", "An object is created when a class is instantiated.", "C++ objects"),
      fact("member variable", "data stored inside a class or object", "keeping the state that belongs to each object", "Each object can have its own member variable values.", "object state"),
      fact("member function", "a function that belongs to a class", "operating on the data inside an object", "A member function can access private members of its class.", "class behavior"),
      fact("constructor", "a special function that runs when an object is created", "initializing an object into a valid starting state", "A constructor has the same name as its class and no return type.", "object initialization"),
    ],
  },
  22: {
    title: "Encapsulation and Access Control",
    facts: [
      fact("encapsulation", "bundling data and methods while hiding implementation details", "protecting invariants and reducing accidental misuse", "Encapsulation is one of the core ideas of OOP.", "OOP principles"),
      fact("private", "an access level visible only inside the class and its friends", "hiding implementation details from outside code", "Private members are not accessible directly from unrelated code.", "access control"),
      fact("public", "an access level visible to all callers", "exposing the stable interface of a type", "Public members are the main API of a class.", "access control"),
      fact("protected", "an access level visible to the class and its derived classes", "allowing inheritance-friendly access without full exposure", "Protected members are not accessible from unrelated non-member code.", "access control"),
      fact("getter and setter", "small methods used to read and update internal state safely", "validating and controlling access to private data", "Getters and setters let you enforce rules around a member value.", "encapsulation"),
    ],
  },
  23: {
    title: "Abstraction and Interfaces",
    facts: [
      fact("abstraction", "showing only the essential features of a type", "reducing complexity for users of the class", "Abstraction lets you hide implementation details behind a simple interface.", "OOP design"),
      fact("interface", "a contract that describes what a type must be able to do", "defining behavior without tying callers to an implementation", "In C++, an interface is often modeled with pure virtual functions.", "polymorphic design"),
      fact("pure virtual function", "a virtual function declared with = 0", "forcing derived classes to provide their own implementation", "A class with a pure virtual function becomes abstract.", "abstract types"),
      fact("abstract class", "a class that cannot be instantiated directly", "serving as a base type for shared behavior and contracts", "An abstract class usually contains at least one pure virtual function.", "inheritance"),
      fact("contract", "the expected behavior and guarantees of an API", "making caller and implementer expectations explicit", "A contract helps describe what a function promises to do.", "design by contract"),
    ],
  },
  24: {
    title: "Inheritance and Substitutability",
    facts: [
      fact("inheritance", "a mechanism where one class derives from another", "reusing and specializing behavior in a hierarchy", "Inheritance is often described as an is-a relationship.", "class hierarchy"),
      fact("base class", "the parent class in an inheritance relationship", "sharing common interface or implementation", "A base class can be used through a pointer or reference to a derived class.", "inheritance"),
      fact("derived class", "a class that extends a base class", "adding or overriding behavior from the parent type", "A derived class can introduce new members and override virtual ones.", "inheritance"),
      fact("is-a relationship", "a relationship where the derived type can stand in for the base type", "reasoning about substitutability and polymorphism", "If B is-a A, then B should behave like A where A is expected.", "OOP modeling"),
      fact("overriding", "redefining a virtual function in a derived class", "specializing inherited behavior at runtime", "Overriding only works for virtual functions with matching signatures.", "runtime polymorphism"),
    ],
  },
  25: {
    title: "Polymorphism and Dynamic Dispatch",
    facts: [
      fact("polymorphism", "the ability for the same interface to behave differently", "writing flexible code that works with multiple concrete types", "Polymorphism is a core technique for extensible design.", "OOP"),
      fact("virtual function", "a member function selected dynamically through a base pointer or reference", "enabling runtime polymorphism", "A virtual function allows derived behavior to run through a base handle.", "dynamic dispatch"),
      fact("dynamic binding", "choosing the function implementation at runtime", "calling the derived override through a base interface", "Dynamic binding happens when the actual object type is known at runtime.", "polymorphism"),
      fact("vtable", "a compiler-generated table used for virtual function dispatch", "supporting runtime lookup of the correct override", "A vtable is one common implementation technique for virtual calls.", "object model"),
      fact("override specifier", "a keyword that tells the compiler a function is meant to override", "catching signature mismatches early", "Using override helps prevent subtle mistakes in derived classes.", "safe polymorphism"),
    ],
  },
  26: {
    title: "Overloading and Operator Overload",
    facts: [
      fact("function overloading", "reusing the same function name with different parameter lists", "making related operations easier to call", "Function overloads are resolved at compile time.", "compile-time polymorphism"),
      fact("operator overloading", "defining operator behavior for user-defined types", "making custom types feel natural to use", "Operator overloading can improve readability when used carefully.", "C++ syntax"),
      fact("default argument", "a parameter value used when the caller omits it", "simplifying common function calls", "Default arguments are applied when no explicit value is supplied.", "function design"),
      fact("compile-time polymorphism", "polymorphic behavior chosen by the compiler", "using overloads or templates to avoid runtime dispatch", "Compile-time polymorphism is also called static polymorphism in many contexts.", "C++ dispatch"),
      fact("overload resolution", "the compiler process of choosing the best matching overload", "selecting the most appropriate function or operator", "Overload resolution considers the argument types and conversions.", "compiler behavior"),
    ],
  },
  27: {
    title: "Constructors and Initialization",
    facts: [
      fact("default constructor", "a constructor that takes no arguments", "creating an object with default initialization", "If you define no constructors, the compiler may generate one.", "construction"),
      fact("parameterized constructor", "a constructor that accepts one or more arguments", "creating an object with explicit initial values", "Parameterized constructors are useful when an object needs required data.", "construction"),
      fact("copy constructor", "a constructor that initializes one object from another", "duplicating object state safely", "The copy constructor is invoked when a new object is created from an existing one.", "copy control"),
      fact("initializer list", "the syntax used to initialize members before the constructor body runs", "initializing const members, references, and base classes", "Initializer lists are often the best way to initialize class members.", "object initialization"),
      fact("delegating constructor", "a constructor that calls another constructor in the same class", "centralizing initialization logic and reducing duplication", "Delegating constructors help keep constructor code consistent.", "construction"),
    ],
  },
  28: {
    title: "Destructors and Resource Cleanup",
    facts: [
      fact("destructor", "a special function called when an object is destroyed", "releasing resources before the object disappears", "A destructor has the same name as the class with a tilde prefix.", "lifetime"),
      fact("RAII", "a pattern where resources are tied to object lifetime", "ensuring cleanup happens automatically through scope exit", "RAII is one of the strongest idioms in modern C++.", "resource management"),
      fact("virtual destructor", "a destructor declared virtual in a base class", "allowing safe deletion through a base pointer", "A polymorphic base class should usually have a virtual destructor.", "polymorphism"),
      fact("stack unwinding", "the cleanup process during exception propagation", "running destructors as scopes are exited by exceptions", "During stack unwinding, local objects are destroyed in reverse order.", "exceptions"),
      fact("resource cleanup", "the act of releasing memory, handles, files, or locks", "avoiding leaks and keeping programs correct", "Good cleanup logic prevents resource leaks and undefined behavior.", "ownership"),
    ],
  },
  29: {
    title: "Composition and Aggregation",
    facts: [
      fact("composition", "a strong has-a relationship where one object owns another", "modeling parts whose lifetime depends on the whole", "Composition is usually implemented with member objects.", "object relationships"),
      fact("aggregation", "a weaker has-a relationship where one object refers to another it does not own", "modeling shared or externally managed parts", "Aggregation often uses pointers or references to existing objects.", "object relationships"),
      fact("association", "a general relationship where objects know or work with each other", "modeling collaboration between types", "Association is broader than composition or aggregation.", "UML"),
      fact("dependency", "a relationship where one type temporarily uses another", "passing objects into functions or using local helpers", "A dependency is often the weakest form of relationship.", "coupling"),
      fact("has-a relationship", "a design relationship where one class contains or relies on another", "choosing composition over inheritance when appropriate", "Has-a is a useful alternative to is-a when modeling behavior.", "design choice"),
    ],
  },
  30: {
    title: "Static Members and this",
    facts: [
      fact("static member", "a class-level member shared by every object of the class", "counting instances or storing shared configuration", "A static data member exists once for the class rather than once per object.", "class state"),
      fact("static function", "a member function that belongs to the class instead of an object", "providing utility or factory behavior without a this pointer", "A static member function cannot directly access non-static members.", "class interface"),
      fact("const member function", "a member function that does not modify observable object state", "exposing read-only operations safely", "Marking a member function const lets it be called on const objects.", "const correctness"),
      fact("this pointer", "the pointer to the current object inside a member function", "referring to the instance being operated on", "The this pointer is implicitly available in non-static member functions.", "member functions"),
      fact("mutable member", "a data member allowed to change inside const member functions", "supporting caches or lazy evaluation without breaking const APIs", "A mutable member is useful when logical constness differs from physical constness.", "const correctness"),
    ],
  },
  31: {
    title: "Copy Control and Ownership",
    facts: [
      fact("shallow copy", "copying a handle or pointer without duplicating the pointed-to resource", "useful when ownership is not transferred", "A shallow copy can lead to aliasing or double deletion if ownership is unclear.", "copy semantics"),
      fact("deep copy", "duplicating the underlying resource as well as the handle", "giving each object independent ownership", "A deep copy is often needed when an object owns dynamic memory.", "ownership"),
      fact("copy assignment", "the assignment operator that copies an existing object into another", "replacing the contents of an already constructed object", "Copy assignment differs from copy construction because the target already exists.", "copy control"),
      fact("rule of three", "the guideline to define destructor, copy constructor, and copy assignment together", "managing raw resources consistently", "If a class needs one of the three, it often needs all three.", "special member functions"),
      fact("rule of zero", "the guideline to prefer classes that need no custom copy or destruction logic", "leaning on standard library members to manage resources", "Rule of zero usually leads to simpler and safer code.", "modern C++ design"),
    ],
  },
  32: {
    title: "Move Semantics in Classes",
    facts: [
      fact("move constructor", "a constructor that takes resources from an rvalue source", "transferring ownership efficiently instead of copying", "A move constructor usually leaves the source object valid but unspecified.", "move control"),
      fact("move assignment", "the assignment operator that transfers ownership from one object to another", "reusing an existing object without expensive copying", "Move assignment is useful when a target object already exists.", "move control"),
      fact("rvalue reference", "a reference type that can bind to temporary objects", "supporting moves and perfect forwarding", "An rvalue reference is written with && in C++.", "value categories"),
      fact("noexcept move", "a move operation that promises not to throw exceptions", "letting containers prefer move over copy during reallocation", "Marking moves noexcept can improve container performance.", "performance"),
      fact("moved-from state", "the valid but unspecified state left after a move", "allowing the object to be destroyed or reassigned safely", "You should not rely on the contents of a moved-from object.", "object semantics"),
    ],
  },
  33: {
    title: "Multiple Inheritance and Diamond Shapes",
    facts: [
      fact("multiple inheritance", "a class deriving from more than one base class", "combining behaviors or interfaces from several parents", "Multiple inheritance can be powerful but needs careful design.", "inheritance"),
      fact("virtual inheritance", "a way to share one base subobject among multiple inheritance paths", "solving duplicated base state in diamond hierarchies", "Virtual inheritance helps avoid the diamond problem.", "advanced inheritance"),
      fact("diamond problem", "the ambiguity that appears when two base classes share a common ancestor", "recognizing why duplicated base subobjects are problematic", "The diamond problem often appears in complex inheritance graphs.", "inheritance pitfalls"),
      fact("ambiguity", "a situation where the compiler cannot determine which base member to use", "forcing explicit qualification to disambiguate", "Ambiguity is common when names are inherited from multiple bases.", "name lookup"),
      fact("base subobject", "the inherited part of an object that comes from a base class", "reasoning about memory layout and constructor order", "A derived object can contain more than one base subobject in MI.", "object model"),
    ],
  },
  34: {
    title: "Abstract Types and Slicing",
    facts: [
      fact("object slicing", "copying a derived object into a base object and losing the derived parts", "warning against pass-by-value for polymorphic types", "Object slicing can silently drop derived-class data.", "polymorphism pitfalls"),
      fact("downcast", "a conversion from base type to derived type", "accessing derived-specific behavior after checking the dynamic type", "Downcasts should be used carefully because the target may not actually be the derived type.", "casting"),
      fact("runtime type", "the actual type an object has during execution", "supporting polymorphic checks and safe casts", "The runtime type can differ from the static type seen by the compiler.", "RTTI"),
      fact("factory method", "a method or function that creates objects for the caller", "hiding concrete class selection behind a common interface", "Factory methods are common when the exact derived type depends on runtime input.", "creational patterns"),
      fact("polymorphic clone", "a virtual copy function that preserves the dynamic type of the object", "copying through a base interface without slicing", "A clone function is often used for polymorphic value-like behavior.", "copying"),
    ],
  },
  35: {
    title: "Friends and Controlled Access",
    facts: [
      fact("friend function", "a non-member function granted access to private and protected members", "supporting symmetric operators or helper utilities", "A friend function is an explicit exception to access control.", "access control"),
      fact("friend class", "a class that is allowed to access another class private internals", "supporting tightly coupled helper types", "Friend classes should be used sparingly because they weaken encapsulation.", "access control"),
      fact("encapsulation tradeoff", "the balance between hiding internals and allowing necessary access", "keeping APIs usable without exposing too much state", "Good design uses the narrowest access needed for the job.", "design tradeoff"),
      fact("hidden friend", "a friend function declared inside the class so it participates in argument dependent lookup", "making operator overloads discoverable without polluting namespaces", "Hidden friends are a common C++ idiom for operator overloads.", "C++ lookup"),
      fact("accessor", "a small method that exposes state safely", "providing read access without exposing the raw member directly", "Accessors are often paired with validation logic or const interfaces.", "encapsulation"),
    ],
  },
  36: {
    title: "Templates and Static Polymorphism",
    facts: [
      fact("generic programming", "writing code parameterized by types or values", "reusing algorithms across many concrete types", "Generic programming is a major strength of templates in C++. ", "templates"),
      fact("CRTP", "a template pattern where a class derives from a template instantiation of itself", "achieving static polymorphism and mixin-style reuse", "CRTP is short for curiously recurring template pattern.", "advanced templates"),
      fact("static polymorphism", "polymorphic behavior resolved at compile time", "avoiding virtual dispatch overhead", "Static polymorphism often uses templates or CRTP.", "compile-time dispatch"),
      fact("type erasure", "a technique that hides concrete types behind a uniform runtime interface", "building flexible APIs while keeping implementation details hidden", "Type erasure is common in classes like std::function and std::any.", "abstraction"),
      fact("concept", "a template constraint that specifies required operations or properties", "improving template readability and error messages", "Concepts help make generic code easier to understand.", "modern templates"),
    ],
  },
  37: {
    title: "Design Patterns in OOP",
    facts: [
      fact("singleton", "a pattern that ensures only one instance of a class exists", "sharing one global service or resource", "Singletons can make testing harder if overused.", "creational patterns"),
      fact("factory", "a pattern that centralizes object creation", "hiding concrete implementation choices from callers", "Factories are useful when the exact type depends on configuration or runtime data.", "creational patterns"),
      fact("strategy", "a pattern that swaps algorithms behind a common interface", "changing behavior without changing the caller", "Strategy is a good fit when several interchangeable algorithms exist.", "behavioral patterns"),
      fact("observer", "a pattern where dependents are notified when state changes", "building event-driven or publish-subscribe systems", "Observer decouples the subject from its listeners.", "behavioral patterns"),
      fact("decorator", "a pattern that adds behavior by wrapping an object", "combining features without a deep inheritance tree", "Decorator lets you stack responsibilities at runtime.", "structural patterns"),
    ],
  },
  38: {
    title: "SOLID Principles",
    facts: [
      fact("SRP", "the single responsibility principle, meaning one reason to change per class", "keeping modules focused and easy to maintain", "SRP helps prevent classes from becoming too large or vague.", "design principles"),
      fact("OCP", "the open closed principle, meaning open for extension and closed for modification", "adding new behavior through abstraction instead of editing core code", "OCP encourages extension through interfaces and polymorphism.", "design principles"),
      fact("LSP", "the Liskov substitution principle, meaning derived types should work anywhere the base type is expected", "preserving substitutability in inheritance hierarchies", "LSP is one of the strongest tests of whether inheritance is appropriate.", "polymorphism"),
      fact("ISP", "the interface segregation principle, meaning clients should not depend on methods they do not use", "splitting large interfaces into smaller focused ones", "ISP reduces the burden of irrelevant methods on consumers.", "design principles"),
      fact("DIP", "the dependency inversion principle, meaning depend on abstractions rather than concretions", "reducing coupling between high-level and low-level code", "DIP often pairs well with dependency injection.", "architecture"),
    ],
  },
  39: {
    title: "RTTI and Safe Casting",
    facts: [
      fact("static_cast", "a compile-time cast for related types", "performing explicit but unchecked conversions when the programmer knows they are valid", "static_cast does not do runtime type checking.", "type conversion"),
      fact("dynamic_cast", "a runtime-checked cast for polymorphic types", "safely downcasting within inheritance hierarchies", "dynamic_cast can return null for pointers when the cast fails.", "RTTI"),
      fact("typeid", "an operator that reveals type information for an expression", "inspecting runtime type metadata in polymorphic code", "typeid is commonly used together with polymorphic types.", "RTTI"),
      fact("polymorphic type", "a type that has at least one virtual function", "enabling runtime dispatch and type checks", "Only polymorphic types support dynamic_cast across class hierarchies.", "object model"),
      fact("safe downcasting", "casting to a derived type only after verifying the actual dynamic type", "avoiding undefined behavior in inheritance hierarchies", "Safe downcasting usually uses dynamic_cast or an equivalent check.", "type safety"),
    ],
  },
  40: {
    title: "Pimpl, Lifetime, and Value Semantics",
    facts: [
      fact("pimpl", "the pointer to implementation idiom that hides private details behind an indirection", "reducing compile-time dependencies and header churn", "Pimpl is a common technique for preserving ABI stability.", "encapsulation"),
      fact("copy elision", "an optimization where the compiler removes unnecessary copies or moves", "improving return-by-value efficiency", "Copy elision often happens when returning a local object.", "optimization"),
      fact("object lifetime", "the period during which an object exists and can be used safely", "avoiding dangling references and undefined behavior", "An object must be alive before you access it.", "semantics"),
      fact("value semantics", "treating objects as independent values that can be copied or moved", "making code easier to reason about", "Value semantics are often preferred for small, self-contained types.", "design"),
      fact("aggregate initialization", "brace initialization for a type that meets the aggregate rules", "initializing simple data carriers directly and clearly", "Aggregates are commonly initialized with braces and no custom constructor.", "initialization"),
    ],
  },
};

export const OOP_DAILY_QUESTION_BANK = Object.fromEntries(
  Object.entries(DAY_BANK).map(([day, entry]) => [Number(day), buildQuestions(entry.title, entry.facts, Number(day))]),
);

