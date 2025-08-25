---
title: "System Programming"
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
  question="1). In Unix, which system call is used to create a new process?"
  options={['fork()', 'exec()', 'clone()', 'wait()']}
  answer="fork()"
/>

<Question
  question="2). What does the exec() system call do in Unix?"
  options={['Creates a new process', 'Replaces the current process image', 'Terminates the process', 'Suspends the process']}
  answer="Replaces the current process image"
/>

<Question
  question="3). Which scheduling algorithm is starvation-free?"
  options={['FCFS', 'SJF', 'Round Robin', 'Priority Scheduling']}
  answer="Round Robin"
/>

<Question
  question="4). Which of the following is NOT a characteristic of a thread?"
  options={['Shares memory with parent process', 'Has independent stack', 'Runs in same address space as parent', 'Has separate code section']}
  answer="Has separate code section"
/>

<Question
  question="5). What will be the output of the following C code?"
  code={`#include <stdio.h>
#include <unistd.h>

int main() {
    fork();
    fork();
    printf("Hello\\n");
    return 0;
}`}
  options={['1', '2', '3', '4']}
  answer="4"
/>

<Question
  question="6). Which of the following best describes a zombie process?"
  options={['A process that is still executing', 'A terminated process that still has an entry in the process table', 'A process waiting for I/O', 'A parentless process taken over by init']}
  answer="A terminated process that still has an entry in the process table"
/>

<Question
  question="7). Which system call is used to create a pipe in Unix?"
  options={['pipe()', 'mkfifo()', 'dup()', 'socket()']}
  answer="pipe()"
/>

<Question
  question="8). In memory management, which allocation method may suffer from external fragmentation?"
  options={['Paging', 'Segmentation', 'Demand Paging', 'Swapping']}
  answer="Segmentation"
/>

<Question
  question="9). Which system call is used to wait for child process termination?"
  options={['exit()', 'wait()', 'kill()', 'signal()']}
  answer="wait()"
/>

<Question
  question="10). What will be the output of the following C code?"
  code={`#include <stdio.h>
#include <unistd.h>

int main() {
    if (fork() == 0) {
        printf("Child\\n");
    } else {
        printf("Parent\\n");
    }
    return 0;
}`}
  options={['Child Parent', 'Parent Child', 'Only Child', 'Only Parent']}
  answer="Child Parent"
/>


<div>
    <AdBanner />
</div>

<Question
  question="11). In Unix, which system call duplicates a file descriptor?"
  options={['dup()', 'open()', 'link()', 'copy()']}
  answer="dup()"
/>

<Question
  question="12). Which of the following synchronization mechanisms can cause deadlock if misused?"
  options={['Semaphores', 'Monitors', 'Spinlocks', 'All of the above']}
  answer="All of the above"
/>

<Question
  question="13). In virtual memory, which page replacement algorithm suffers from Belady’s Anomaly?"
  options={['FIFO', 'LRU', 'Optimal', 'Clock']}
  answer="FIFO"
/>

<Question
  question="14). Which of the following best describes thrashing?"
  options={['CPU is idle due to I/O wait', 'Excessive swapping of pages', 'Deadlock among processes', 'Cache overflow']}
  answer="Excessive swapping of pages"
/>

<Question
  question="15). Which scheduling algorithm gives the minimum average waiting time?"
  options={['FCFS', 'SJF (non-preemptive)', 'Round Robin', 'Priority Scheduling']}
  answer="SJF (non-preemptive)"
/>

<Question
  question="16). In Unix, what is the default signal sent by the kill command?"
  options={['SIGKILL', 'SIGTERM', 'SIGSTOP', 'SIGINT']}
  answer="SIGTERM"
/>

<Question
  question="17). Which inter-process communication (IPC) mechanism provides communication between unrelated processes?"
  options={['Pipes', 'Message Queues', 'Signals', 'Shared Memory']}
  answer="Message Queues"
/>

<Question
  question="18). Which scheduling algorithm is most suitable for time-sharing systems?"
  options={['FCFS', 'Round Robin', 'SJF', 'Priority']}
  answer="Round Robin"
/>

<Question
  question="19). What will be the output of the following C code?"
  code={`#include <stdio.h>
#include <unistd.h>

int main() {
    printf("A");
    fork();
    printf("B");
    return 0;
}`}
  options={['A B', 'AB', 'ABAB', 'AABB']}
  answer="ABAB"
/>

<Question
  question="20). Which of the following is used to prevent race conditions?"
  options={['Semaphores', 'Mutexes', 'Locks', 'All of the above']}
  answer="All of the above"
/>

<div>
    <AdBanner />
</div>