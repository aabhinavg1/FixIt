---
title: C++ Tutorial with CMake
description: |
  This tutorial provides a complete walkthrough of setting up and building C++ projects using CMake. Learn the basics of creating `CMakeLists.txt` files, organizing project structure, linking libraries, and compiling code efficiently. Ideal for beginners and intermediate developers who want to modernize their C++ development workflow using CMake.
keywords:
  - C++
  - CMake
  - CMake Tutorial
  - Modern C++ Development
  - C++ Project Structure
  - C++ Build System
  - CMakeLists
  - Linking Libraries
  - C++ Compilation
  - Build Automation
  - Cross-Platform Development
  - C++ Tools
  - C++ Workflow
  - CMake for Beginners
  - C++ Project Setup

tags:
  - C++
  - CMake
  - Build System
  - CMakeLists
  - Linking Libraries
  - Project Setup
  - Build Automation
  - Cross-Platform
  - Modern C++ Workflow
  - C++ Compilation
  - Cpp CMake

author: CompilerSutra
date: 2024-10-09
slug: /cpp_tutorial_with_cmake
sidebar_label: cpp_tutorial_with_cmake 
---

# C++ Tutorial with Basic CMake



📩 Interested in deep dives like pipelines, cache, and compiler optimizations?

<div
  style={{
    width: '100%',
    maxWidth: '900px',
    margin: '1rem auto',
  }}
>
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSebP1JfLFDp0ckTxOhODKPNVeI1e21rUqMJ0fbBwJoaa-i4Yw/viewform?embedded=true"
    style={{
      width: '100%',
      minHeight: '620px',
      border: '0',
      borderRadius: '12px',
      background: '#fff',
    }}
    loading="lazy"
  >
    Loading…
  </iframe>
</div>

## Summary

This tutorial introduces C++, explaining why it is important for performance-critical applications, and guides you through setting up a simple C++ project using CMake. You'll write a basic "Hello, World!" program, create a `CMakeLists.txt` file, and compile the project using CMake, a versatile tool for cross-platform builds.
## What is C++? 🤔

C++ is one of the most powerful programming languages out there! 🦾 Created by Bjarne Stroustrup in 1983 as an improvement of the C language, it was designed to be **fast**, **efficient**, and super versatile. From developing video games 🎮 to operating systems 🖥️, C++ is everywhere.

It's a **middle-level language**, meaning it can do both low-level stuff (like talking to hardware) and high-level things (like creating desktop apps or websites). Basically, C++ is like the Swiss Army knife of programming languages 🔪.

### 🔍 Key Concepts in Simple Terms

<details>
<summary>🎯 Object-Oriented Programming (OOP)</summary>

Think of OOP like organizing your life into neat little boxes 📦. You can create "blueprints" (called classes) for things like cars 🚗, and then make as many cars (objects) as you want based on that blueprint. This way, your program stays tidy, organized, and easier to handle.
</details>

<details>
<summary>🔧 Templates for Reusability</summary>

Why write the same code over and over? With **templates**, you write something once and can reuse it for different data types. It’s like having a universal remote control 🕹️ that works with all your devices, saving time and effort.
</details>

<details>
<summary>📦 Standard Template Library (STL)</summary>

STL is like a magic toolbox ✨ that comes with C++. It gives you ready-made containers (like lists and maps) and tools to quickly sort, search, and manipulate data. No need to reinvent the wheel 🛞!
</details>

<details>
<summary>⚙️ Low-Level Access</summary>

If you want to write programs that can run super-fast 🚀, C++ is your friend. It gives you the power to control how memory and hardware are used, making it perfect for system-level programming, like creating parts of an operating system or controlling a robot 🤖.
</details>

<details>
<summary>🚨 Exception Handling</summary>

Mistakes happen 🤷‍♂️, but C++ won’t let your program crash and burn. It has built-in error-handling so your program can gracefully recover from unexpected problems. Think of it as an airbag for your code 💥🛡️.
</details>

### 🛠️ Real-World Examples of C++ Use

C++ may be behind the scenes, but it powers many of the things we use every day:

- **Operating Systems** 🖥️: Parts of Windows, macOS, and Linux are written in C++. Without it, your computer wouldn’t be able to manage hardware and software efficiently.
  
- **Video Games** 🎮: Games like Fortnite and Call of Duty rely on C++ for smooth graphics and fast gameplay. No one likes lagging, right?

- **Web Browsers** 🌐: Browsers like Chrome and Firefox use C++ to render web pages super fast, so you don’t waste time waiting for your cat GIFs 🐱 to load.

- **Embedded Systems** 🔌: Your smart TV, microwave, and even your car 🚗 likely use C++ for their internal programming. When things need to be fast and efficient, C++ is often the go-to.

- **Scientific Software** 🧬: Programs that do complex calculations for scientific research or financial trading need to be super accurate and fast. C++ is the hero here, too! 🦸‍♂️

### 💡 Why Learn C++? (And Why It's Not as Scary as You Think)

Learning C++ may sound intimidating 😱, but don't worry! It’s like learning to drive a car 🚗—it seems complicated at first, but once you get the hang of it, you’ll wonder how you ever lived without it. Plus:

- **🚀 High Demand:** C++ developers are highly sought after in industries like gaming, system software, and embedded systems.
  
- **🛠️ Versatility:** From building video games to programming robots, C++ has a place in every corner of the tech world.

- **🎓 Foundational Knowledge:** Learning C++ makes it easier to pick up other languages, like Java or Python. It’s like learning the martial art of programming 🥋—once you master it, everything else feels easier!

### 🌍 How C++ Compares to Other Languages

- **Python 🐍:** Easier to learn but slower. C++ is better when performance really matters (like in gaming).
  
- **Java ☕:** Similar to C++ in some ways, but C++ gives you more control. Java has auto memory management (garbage collection), which makes it easier to use, but C++ wins in efficiency.

- **C 💻:** C++ is like C but with superpowers 🦸‍♂️. It gives you everything C has plus more modern features like classes and object-oriented programming.

---

### 🧠 Fun Fact: C++ Has a Sense of Humor! 

Bjarne Stroustrup once said, “I invented C++, but nobody believes me. Therefore, I invented something else: C++0x. And no one believes that either!”

*So, if you’re ready to code in a language that has stood the test of time and keeps evolving, give C++ a try. You’ll not only learn a language, but you’ll unlock the power to build almost anything.*

---

*🔧 "C++: Because you deserve to program with power."* 🔧

## Why is C++ Important? 🤷‍♂️

C++ isn't just another programming language—it’s a powerhouse of performance, flexibility, and real-world use. Here’s why C++ still reigns supreme in the tech world:

### ⚡ Performance: Speed and Power

C++ is **lightning fast** ⚡! It gives developers **fine control** over system resources like memory and CPU usage, making it perfect for high-performance software like **video games** 🎮, **real-time applications** 🕒, and **operating systems** 🖥️. Imagine driving a race car 🏎️ where you control every little detail—that’s C++ for you!

> "If speed is what you need, C++ is the language to lead!" 🚀

---

### 🏭 Widely Used in Industry

You might not know it, but C++ is the secret sauce in tons of software we use every day. From powering **gaming engines** like **Unreal Engine** 🎮, to running parts of **operating systems** 🖥️ like Windows, to working behind the scenes in **automotive software** 🚗, C++ is everywhere. It’s also big in **embedded systems** like smart devices and gadgets.

> *Fun fact:* Your car’s software might be secretly thanking C++ for getting you where you need to go! 🚗

---

### 🌍 Cross-Platform Development

One of C++’s biggest superpowers is its **cross-platform** compatibility 🌐. Whether you’re coding for Windows, Linux, or macOS, you can write your code once and run it anywhere. It’s like learning one language and being able to speak in every country! 🌎

---

### 📚 Community & Libraries: Power Tools Galore

The C++ community is huge—and growing! With a vast number of **open-source libraries** 📚, you can easily access pre-built tools for almost anything, from graphics rendering to scientific computing 🧑‍🔬. Why reinvent the wheel 🛞 when someone already built a turbocharged one for you?

> “Need a tool? The C++ library ecosystem has got you covered!” 🧰

---

In short, **C++** is like a Swiss Army knife of programming languages 🛠️—whether you need speed, flexibility, or cross-platform support, C++ is ready for the job. 💼
## What is CMake? 🛠️

CMake is like your project’s **build wizard** 🧙‍♂️! It’s a **cross-platform tool** that magically manages the build process of your software by using simple, human-readable configuration files called `CMakeLists.txt` 📜.

CMake takes the pain out of setting up the build process across different operating systems. Whether you’re coding on Windows, Linux, or macOS, CMake has got your back! 🖥️🛠️

> "CMake: Turning chaos into code, one `CMakeLists.txt` at a time!" 🎩✨

---

### 🔧 How does CMake work?

Here’s how it works: You write a `CMakeLists.txt` file 📝, and then CMake will generate the **native build files** (like makefiles for Linux, Visual Studio projects for Windows, etc.) for your project. In short, it’s like having a **universal translator** 🌐 for your build process, allowing you to develop cross-platform software **without rewriting build scripts** every time.

---

### 🧩 Why should you use CMake?

- **Cross-Platform Compatibility** 🌍: Whether you’re working on Windows, macOS, or Linux, CMake ensures you can build your project **anywhere**.
  
- **Automation & Ease** 🤖: Forget the headaches of writing custom makefiles or handling platform-specific quirks. CMake automates the boring stuff, so you can focus on coding.

- **Powerful Features** 💪: CMake is packed with features to configure, test, and manage your projects. Want to add new libraries or customize build settings? CMake’s got the tools for that! 🛠️

---

> **Tip:** Think of CMake as the Swiss Army knife of build systems—it has everything you need to take your project from source code to running software on any platform! 🛠️🌟

---

So next time you start a project, don’t worry about the build process. Just let **CMake** handle it while you enjoy the magic behind the scenes! 🪄



# Setting Up a Basic CMake Project 🎉

Ready to dive into the world of C++ and CMake? Let's get your first project up and running! Follow these epic steps to set up a **"Hello, World!"** project using **CMake**! 🚀

---

### 🛠️ Step 1: Install CMake

Before we begin, make sure you have CMake installed. Download it from the official website: [CMake Download](https://cmake.org/download/). Follow the installation guide for your operating system (don’t worry, it’s painless 😉).

> "No CMake, no gain!" 😎

---

### 👨‍💻 Step 2: Write a Basic C++ Program

Time to code! We’ll start with a **super simple** C++ program that prints `Hello, World!` to the console. 🎉

<details>
<summary><strong>main.cpp</strong> 📄 (Click to expand)</summary>

```cpp
// main.cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```
</details>

---

### 🗂️ Step 3: Create `CMakeLists.txt`

Now, we need to tell **CMake** how to compile our project. This is where the **CMakeLists.txt** file comes in. Let’s create one in the same directory as `main.cpp`.

<details>
<summary><strong>CMakeLists.txt</strong> 🔧 (Click to expand)</summary>

```cmake
cmake_minimum_required(VERSION 3.10)

# Project Name
project(HelloWorld)

# Set the C++ standard
set(CMAKE_CXX_STANDARD 11)

# Add executable target
add_executable(HelloWorld main.cpp)
```
</details>

> **Pro Tip:** CMake takes care of platform differences—whether you're on Windows, macOS, or Linux, CMake has got you covered! 🛠️

---

### ⚙️ Step 4: Build the Project

Alright, let's get our project ready to run! Follow these steps:

1. Create a `build` directory inside your project folder (this keeps things nice and tidy):
   ```bash
   mkdir build
   cd build
   ```

2. Run **CMake** to generate the build files 🛠️:
   ```bash
   cmake ..
   ```

3. Compile your project! 🏗️:
   ```bash
   cmake --build .
   ```

> "Compiling code feels like magic, doesn’t it? 🔮✨"

---

### 🏃 Step 5: Run the Program

🎉 Drumroll, please... It's time to see the magic happen!

Once the build is complete, run the generated executable:
```bash
./HelloWorld
```

🎉 **Output:**
```
Hello, World!
```

> "Boom! You just built your first C++ program using CMake! 🔥"

---

## 🚀 Conclusion: You Did It!

🎊 Congrats! You’ve successfully set up a **C++ project** using **CMake** and compiled it like a pro! We started from scratch, wrote some code, configured the build, and ran the result. C++ might be a powerhouse for performance, but with tools like CMake, building cross-platform projects becomes a breeze! 🌬️

> *"C++ and CMake: A dynamic duo for serious software."* 💻⚡

### Next Steps:
- Try adding more features to your program! 💡
- Explore how **CMake** manages complex projects and dependencies. 🌱
- Dive deeper into **C++**, and learn about **object-oriented programming**, **STL**, and **modern C++ features**.

---

> "When in doubt, `cmake ..` it out!" 😄🛠️