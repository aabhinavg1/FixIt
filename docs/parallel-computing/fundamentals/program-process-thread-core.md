---
title: Program, Process, Thread, Core
description: Understand the difference between a program, process, thread, and core — how the OS schedules them, context switching, hardware threads, and how the concepts relate.
keywords:
  - program vs process
  - process vs thread
  - thread vs core
  - what is a thread
  - what is a process
  - context switching
  - hyperthreading
  - hardware threads
  - os scheduling
  - process scheduling
  - thread model
  - 1 thread per core
  - multicore
  - concurrency
---

# Program, Process, Thread, Core

Before writing any parallel code you need to be precise about the four words people use casually but that mean very different things: **program**, **process**, **thread**, and **core**. Getting them confused leads to wrong mental models of performance, race conditions, and scheduling.

The short version:

- A **program** is a static file of instructions.
- A **process** is a running instance of a program — an isolated execution environment owned by the OS.
- A **thread** is a single stream of execution *inside* a process.
- A **core** is physical hardware that actually executes instructions.

## Program

A **program** is a static sequence of instructions stored on disk (an executable, script, bytecode). It is *passive* — nothing is executing while it sits on disk. A program becomes active only when the operating system loads it into memory and starts executing it.

```
gcc -o hello hello.c     # produces the program file "hello"
./hello                  # now we RUN it -> a process is born
```

## Process

A **process** is an executing instance of a program. The operating system gives each process:

- Its **own virtual address space** (its own view of memory, protected from other processes).
- Its **own file descriptors**, environment, and working directory.
- At least **one thread of execution** (the main thread).
- A **process ID (PID)**.

Because processes have isolated address spaces, one process cannot accidentally overwrite another process's memory. Communication between processes must go through explicit mechanisms like **pipes, files, shared memory, sockets, or MPI**.

### Process Address Space

A process's virtual memory is divided into segments:

| Segment | Contents | Grows |
|---------|----------|-------|
| Text (code) | Executable machine instructions | fixed |
| Data | Global and static variables | fixed |
| Heap | Dynamically allocated memory (`malloc`/`new`) | upward |
| Stack | Function call frames, local variables | downward |
| MMIO / kernel | Kernel space, memory-mapped I/O | — |

### How a Process is Created

On Linux, a new process is created with `fork()` (which clones the current process) followed by `exec()` (which replaces the image with a new program). `fork`+`exec` is cheap because of **copy-on-write**: the child shares the parent's pages until either writes.

```
pid = fork();        // split into two nearly identical processes
if (pid == 0) {
  exec("./worker");  // child becomes a new program
} else {
  wait(&status);     // parent waits for child
}
```

### Process States

A process is always in one of these states:

- **Running** — currently executing on a CPU.
- **Ready** — runnable, waiting for a core to be assigned.
- **Blocked / Waiting** — waiting for an event (I/O, a lock, a signal).
- **Zombie** — terminated, but parent has not collected its exit status.

## Thread

A **thread** is the smallest unit of execution that the OS scheduler can manage. A process can have one or many threads, and **all threads in a process share**:

- The same **address space** (they can read/write the same memory directly).
- Open file descriptors, signal handlers, and other process resources.

Each thread has **its own**:

- Program counter (where it is executing).
- Register state.
- **Stack** (its own call history and local variables).
- Thread ID (TID).

Because threads share memory, communication between threads is just a **memory read/write** — much cheaper than inter-process communication. But that shared memory is exactly what causes **race conditions**: two threads modifying the same variable without synchronization.

```cpp
#include <thread>
#include <iostream>

void say_hello(int id) {
  std::cout << "Hello from thread " << id << " (tid "
            << std::this_thread::get_id() << ")\n";
}

int main() {
  std::thread t1(say_hello, 1);
  std::thread t2(say_hello, 2);
  t1.join();  // wait for t1
  t2.join();  // wait for t2
}
```

### One vs Many Threads

- A **single-threaded process** has exactly one thread: the main thread. All work happens serially.
- A **multi-threaded process** has several threads that the OS can schedule onto different cores at the same time — this is how a single process uses multiple cores.

```
Process A (1 thread)        Process B (4 threads)
┌───────────────┐           ┌───────────────┐
│ main thread   │           │ thread 0      │──→ core 0
│ (one stream)  │           │ thread 1      │──→ core 1
└───────────────┘           │ thread 2      │──→ core 2
                            │ thread 3      │──→ core 3
                            └───────────────┘
```

## Core

A **core** is the physical hardware inside a CPU that fetches and executes instructions. It contains its own ALUs, registers, and (typically) its own L1/L2 caches. A "quad-core" CPU has four of these execution engines.

Key facts:

- **A core runs exactly one thread at any instant.** If there are more runnable threads than cores, threads take turns (time-slicing).
- **Hardware threads / hyperthreading (SMT)** — a single core can hold *multiple* threads' state (e.g., 2), so when one thread stalls (waiting on memory), the core can run the other. This is **Simultaneous Multithreading (SMT)**; Intel calls it Hyper-Threading, AMD calls it SMT. It improves utilization but does **not** double throughput.
- **Vector units** — a modern core also has SIMD units (AVX-512, NEON) that can process many data elements per instruction, giving a form of parallelism even within one core.

### The Relationship Diagram

```
Program (file on disk)
  │  run by OS
  ▼
Process (isolated execution environment, PID)
  │  contains 1..n
  ▼
Threads (shared memory, own stack + PC, TID)
  │  scheduled onto
  ▼
Cores (physical execution engines, 1 running thread at a time;
       SMT lets a core hold 2+ hardware threads' state)
```

## Context Switching

When the OS moves a core from running one thread to running another, it performs a **context switch**:

1. Save the current thread's registers + program counter.
2. Load the next thread's saved registers + program counter.
3. Possibly update memory-mapping info (for a *process* switch, the page tables change).

Context switches are **overhead** — during the switch, the core is not doing useful work. Process switches are heavier than thread switches because the memory mapping (address space) changes and caches must be flushed/warmed. Thread switches within the same process are cheaper because the address space is shared.

```text
Core timeline (time-slicing):
[thread A][ctx-switch][thread B][ctx-switch][thread A] ...
             ↑ overhead          ↑ overhead
```

If you create **too many threads** for the number of cores, the scheduler spends more time switching than working — this is why "more threads" does not always mean "faster".

## How the OS Schedules Threads

The **scheduler** in the kernel decides which runnable thread runs on which core, and for how long:

- **Preemptive scheduling** — the kernel forcibly interrupts a running thread after its time slice (a *quantum*) or when a higher-priority thread becomes ready.
- **Priority** — threads with higher priority run first (Linux uses the CFS/EEVDF scheduler with dynamic priorities).
- **Affinity** — the programmer can *pin* a thread to a specific core with `sched_setaffinity()` or OpenMP `proc_bind`, improving cache locality.

```bash
# See threads of a process on Linux
ps -eLf | grep myapp     # -L shows threads as separate lines

# Pin a process to core 0
taskset -c 0 ./myapp
```

## Practical Implications for Parallel Programming

1. **Threads share memory; processes do not.** Use threads when the problem is naturally shared-memory; use processes/MPI when it is distributed.
2. **Number of useful threads ≤ number of hardware threads** for compute-bound work. Going beyond just adds context-switch overhead (see [Measuring Parallel Performance](/docs/parallel-computing/fundamentals/measuring-parallel-performance)).
3. **SMT gives ~20–30% extra, not 2×.** Never design your parallelism assuming each hardware thread is a full core.
4. **Pinning helps for NUMA-sensitive code.** On multi-socket machines, keep a thread's data and execution on the same socket (see [Memory Models](/docs/parallel-computing/fundamentals/memory-models)).
5. **Thread stacks are limited (typically ~8 MB).** Deep recursion inside many threads can exhaust memory.

## Summary

| Concept | What it is | Shares | Owns | Created by |
|---------|-----------|--------|------|-----------|
| Program | Static instructions on disk | nothing | its file | compiler |
| Process | Running program, isolated | — | address space, PID, 1+ threads | `fork`/`exec`, `spawn` |
| Thread | Unit of execution in a process | memory, FDs with siblings | stack, registers, PC, TID | `pthread_create`, `std::thread` |
| Core | Physical execution engine | — | its own registers, caches | hardware |

### What's Next

- [Memory Models](/docs/parallel-computing/fundamentals/memory-models) — now that threads share memory, how does that memory behave?
- [Parallel Hardware Overview](/docs/parallel-computing/fundamentals/parallel-hardware-overview) — cores, vector units, and the full hierarchy that executes your threads.
