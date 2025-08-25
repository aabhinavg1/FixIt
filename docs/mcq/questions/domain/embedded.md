---
title: "Embedded Programming"
description: "Comprehensive C++ MCQs covering basic to advanced topics. Ideal for interview preparation, competitive programming, and academic exams."
keywords:
  - C++
  - C++ MCQs
  - C++ Questions and Answers
  - c++ multiple choice questions
  - C++ Programming MCQs
  - C++ Quiz
  - cpp mcq
  - cpp mcq questions
  - cpp interview questions
  - c++ mcq
  - advanced c++ interview questions
  - C++ Objective Questions
  - C++ Interview Questions
  - C++ MCQs for Competitive Exams
  - C++ MCQs for Placements
  - C++ Programming Questions
  - C++ Basic MCQs
  - Advanced C++ MCQs
  - Object-Oriented Programming (OOP) MCQs
  - C++ Data Structures MCQs
  - C++ STL MCQs
  - C++ Multi-threading MCQs
  - C++ Polymorphism MCQs
  - C++ Virtual Functions MCQs
  - C++ Exception Handling MCQs
  - C++ Pointers and References MCQs
  - C++ Memory Management MCQs
  - C++ File Handling MCQs
  - C++ Templates MCQs
  - C++ Lambda Expressions MCQs
  - C++ Coding Questions
  - Best C++ MCQ Collection
tags:
  - C++
  - MCQs
  - Programming
  - C++ Quiz
  - C++ Interview Preparation
  - C++ Competitive Programming
  - C++ Concepts
  - OOP in C++
  - STL in C++
  - C++ Exam Questions
  - Coding Interview
  - Data Structures in C++
  - Algorithms in C++
  - Compiler Development
  - Software Development
  - C++ Code Optimization
  - C++ Debugging Techniques
  - C++ Best Practices
---

import AdBanner from '@site/src/components/AdBanner';
import { Question } from '../../Question';


<Question
  question="1). In an embedded system, which memory is typically used to store the bootloader?"
  options={['SRAM', 'EEPROM', 'Flash Memory', 'Cache']}
  answer="Flash Memory"
/>

<Question
  question="2). What is the main purpose of using a watchdog timer in embedded systems?"
  options={['Power saving', 'System reset on failure', 'Increase CPU speed', 'Debugging']}
  answer="System reset on failure"
/>

<Question
  question="3). What is the output of the following C code on a microcontroller?"
  code={`#include <stdio.h>
int main() {
    unsigned char x = 250;
    x = x + 10;
    printf("%d", x);
    return 0;
}`}
  options={['260', '4', '255', 'Compilation Error']}
  answer="4"
/>

<Question
  question="4). Which communication protocol is synchronous and supports multiple master-slave devices?"
  options={['UART', 'SPI', 'I2C', 'CAN']}
  answer="I2C"
/>

<Question
  question="5). What does ISR stand for in embedded systems?"
  options={['Interrupt Service Routine', 'Internal System Register', 'Integrated Software Resource', 'Instruction Set Register']}
  answer="Interrupt Service Routine"
/>

<Question
  question="6). Which addressing mode is most common in embedded assembly programming for accessing I/O devices?"
  options={['Immediate', 'Direct', 'Indexed', 'Register']}
  answer="Direct"
/>

<Question
  question="7). In real-time systems, what does 'latency' refer to?"
  options={['The time CPU is idle', 'Delay between interrupt and its handling', 'Memory access speed', 'Context switching time']}
  answer="Delay between interrupt and its handling"
/>

<Question
  question="8). Which scheduling algorithm is commonly used in real-time embedded systems?"
  options={['Round Robin', 'Priority Scheduling', 'Rate Monotonic Scheduling', 'Multilevel Queue']}
  answer="Rate Monotonic Scheduling"
/>

<Question
  question="9). What will be the output of this C program?"
  code={`#include <stdio.h>
int main() {
    volatile int x = 5;
    int *ptr = (int*)&x;
    *ptr = 10;
    printf("%d", x);
    return 0;
}`}
  options={['5', '10', 'Undefined Behavior', 'Compiler Error']}
  answer="10"
/>

<Question
  question="10). In embedded C, what is the purpose of the 'volatile' keyword?"
  options={['Optimize performance', 'Prevent compiler optimization', 'Reduce power usage', 'Increase speed']}
  answer="Prevent compiler optimization"
/>

<div>
    <AdBanner />
</div>


<Question
  question="11). Which bus is commonly used in automotive embedded systems?"
  options={['PCIe', 'CAN', 'USB', 'UART']}
  answer="CAN"
/>

<Question
  question="12). What will the following C program output on a 32-bit system?"
  code={`#include <stdio.h>
int main() {
    char arr[4] = {'A','B','C','D'};
    printf("%c", *(arr+2));
    return 0;
}`}
  options={['A', 'B', 'C', 'D']}
  answer="C"
/>

<Question
  question="13). In ARM Cortex-M microcontrollers, what is the purpose of NVIC?"
  options={['Memory Protection', 'Interrupt Handling', 'DMA Management', 'Power Management']}
  answer="Interrupt Handling"
/>

<Question
  question="14). Which technique is best for reducing power consumption in embedded systems?"
  options={['Increasing clock speed', 'Disabling unused peripherals', 'Using more interrupts', 'Polling frequently']}
  answer="Disabling unused peripherals"
/>

<Question
  question="15). In embedded systems, DMA (Direct Memory Access) is mainly used for?"
  options={['Reducing memory size', 'Allowing peripherals to access memory without CPU', 'Improving caching', 'Debugging memory issues']}
  answer="Allowing peripherals to access memory without CPU"
/>

<Question
  question="16). What will the following code output?"
  code={`#include <stdio.h>
#define LED_ON  0x01
#define LED_OFF 0x00

int main() {
    int status = LED_ON;
    status ^= LED_ON;
    printf("%d", status);
    return 0;
}`}
  options={['1', '0', '2', 'Undefined']}
  answer="0"
/>

<Question
  question="17). Which timer mode in microcontrollers is used to generate PWM signals?"
  options={['Capture Mode', 'Compare Mode', 'Fast PWM Mode', 'CTC Mode']}
  answer="Fast PWM Mode"
/>

<Question
  question="18). In memory-mapped I/O, device registers are accessed using?"
  options={['Special instructions only', 'Normal memory instructions', 'Dedicated hardware lines', 'Interrupt vectors']}
  answer="Normal memory instructions"
/>

<Question
  question="19). Which of the following is NOT a real-time operating system (RTOS)?"
  options={['FreeRTOS', 'Zephyr', 'Linux Kernel', 'VxWorks']}
  answer="Linux Kernel"
/>

<Question
  question="20). What is the primary role of an embedded bootloader?"
  options={['Run the application directly', 'Load application code into memory', 'Debug the system', 'Reduce power consumption']}
  answer="Load application code into memory"
/>

<div>
    <AdBanner />
</div>