---
title: "C++ Interview Questions(Inheritance and Polymorphism)"
description: "Prepare for C++ interviews with this guide to essential C++ interview questions on inheritance and polymorphism. Learn about base and derived classes, virtual functions, method overriding, and best practices."
keywords:
- "C++ Interview Questions"
- "C++ Inheritance"
- "C++ Polymorphism"
- "C++ Virtual Functions"
- "C++ Method Overriding"
- "C++ Abstract Classes"
- "C++ Multiple Inheritance"
- "C++ OOP Concepts"
- "C++ Interview Guide"
- "Master C++ Inheritance and Polymorphism"
---

# **Essential C++ Interview Questions on Inheritance and Polymorphism**

## **1. What is inheritance in C++?**
Inheritance is an object-oriented programming concept that allows one class (child/derived class) to inherit properties and behaviors from another class (parent/base class).

### **Example:**
```cpp
class Base {
public:
    void show() { std::cout << "Base class" << std::endl; }
};

class Derived : public Base {
};

int main() {
    Derived d;
    d.show();  // Inherited from Base
    return 0;
}
```

### **Sample Answer:**
"Inheritance allows me to reuse code by extending a base class. It improves code modularity and reduces redundancy."

**When to use:** Use inheritance when you need a hierarchical relationship between classes.

---

## **2. What is polymorphism in C++?**
Polymorphism allows a function or method to have multiple forms. It enables dynamic behavior through method overriding and virtual functions.

### **Example:**
```cpp
class Base {
public:
    virtual void show() { std::cout << "Base class" << std::endl; }
};

class Derived : public Base {
public:
    void show() override { std::cout << "Derived class" << std::endl; }
};

int main() {
    Base* b = new Derived();
    b->show();  // Calls Derived class implementation
    delete b;
    return 0;
}
```

### **Sample Answer:**
"Polymorphism allows methods to be overridden, enabling runtime behavior changes. I use virtual functions to achieve it."

**When to use:** Use polymorphism when implementing function overriding and dynamic behavior.

---

## **3. What are virtual functions in C++?**
Virtual functions enable dynamic (runtime) polymorphism by allowing method overriding in derived classes.

### **Example:**
```cpp
class Base {
public:
    virtual void display() { std::cout << "Base display" << std::endl; }
};

class Derived : public Base {
public:
    void display() override { std::cout << "Derived display" << std::endl; }
};

int main() {
    Base* obj = new Derived();
    obj->display();  // Calls Derived display
    delete obj;
    return 0;
}
```

### **Sample Answer:**
"A virtual function allows derived classes to override a base class function, enabling runtime polymorphism."

**When to use:** Use virtual functions when dynamic method binding is required.

---

## **4. What is an abstract class in C++?**
An abstract class is a class with at least one pure virtual function. It cannot be instantiated directly.

### **Example:**
```cpp
class Shape {
public:
    virtual void draw() = 0;  // Pure virtual function
};

class Circle : public Shape {
public:
    void draw() override { std::cout << "Drawing Circle" << std::endl; }
};

int main() {
    Shape* s = new Circle();
    s->draw();
    delete s;
    return 0;
}
```

### **Sample Answer:**
"An abstract class in C++ contains at least one pure virtual function and serves as a blueprint for derived classes."

**When to use:** Use abstract classes when you want to define an interface for derived classes.

---

## **5. What is multiple inheritance in C++?**
Multiple inheritance allows a class to inherit from more than one base class.

### **Example:**
```cpp
class A {
public:
    void showA() { std::cout << "Class A" << std::endl; }
};

class B {
public:
    void showB() { std::cout << "Class B" << std::endl; }
};

class C : public A, public B {
};

int main() {
    C obj;
    obj.showA();
    obj.showB();
    return 0;
}
```

### **Sample Answer:**
"Multiple inheritance enables a class to derive from multiple base classes, but it should be used carefully to avoid ambiguity."

**When to use:** Use multiple inheritance when a class logically needs functionality from multiple sources.

---

## **6. What are the best practices for using inheritance and polymorphism?**

### **Best Practices:**
- Use **public inheritance** when the derived class is a specialized version of the base class.
- Prefer **composition over inheritance** when appropriate.
- Use **virtual destructors** in base classes to avoid memory leaks.
- Avoid **excessive multiple inheritance** to reduce complexity.
- Always use **override** keyword for overriding functions.

### **Sample Answer:**
"I follow best practices such as using virtual destructors, avoiding deep inheritance hierarchies, and preferring composition when possible."

**When to use:** Follow best practices to ensure clean and maintainable object-oriented design.

---

For more C++ interview preparation, visit CompilerSutra or contact us for mentoring at `info@compilersutra.com`."

