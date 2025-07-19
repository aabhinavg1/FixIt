---
id: concurrency-and-synchronization
title: "Concurrency and Synchronization"
description: "This guide focuses on concurrency and synchronization, essential concepts for writing efficient multi-threaded programs. It covers topics like thread management, synchronization primitives such as mutexes, condition variables, and race conditions. Understanding these concepts is crucial for developing high-performance and thread-safe applications. Learn how to manage multiple threads, coordinate their execution, and avoid common pitfalls in concurrent programming."
keywords:
  - Concurrency
  - Multi-threading
  - Thread Management
  - Mutex
  - Condition Variables
  - Race Conditions
  - Thread Synchronization
  - Synchronization Primitives
  - Parallel Programming
  - Thread Safety
  - Atomic Operations
  - Deadlock Prevention
  - Locking Mechanisms
  - Thread Pools
  - Memory Models
  - Parallel Algorithms
  - Synchronization Techniques
  - Thread Coordination
  - Concurrent Programming

tags:
  - Concurrency
  - Multi-threading
  - Thread Management
  - Mutex
  - Condition Variables
  - Synchronization
  - Race Conditions
  - Parallel Programming
  - Thread Safety
  - Deadlock
  - Atomic Operations
  - Locking
  - Thread Pools
  - Memory Models
  - Parallel Algorithms
  - Synchronization Primitives
  - Thread Coordination
  - Concurrent Programming Techniques

---
import AdBanner from '@site/src/components/AdBanner';
import { Question } from '../../Question';


# Concurrency and Synchronization

<Question
  question="1).What is concurrency in C++?"
  options={['Executing multiple tasks in parallel', 'Executing multiple tasks without overlap', 'Executing tasks in a sequential order', 'None of the above']}
  answer="Executing multiple tasks in parallel"
/>
<Question
  question="2).Which of the following is used for synchronizing threads in C++?"
  options={['std::mutex', 'std::thread', 'std::async', 'std::condition_variable']}
  answer="std::mutex"
/>
<Question
  question="3).What does 'std::mutex' do in C++?"
  options={['It provides mutual exclusion to avoid race conditions', 'It allows for asynchronous execution', 'It blocks threads from execution', 'None of the above']}
  answer="It provides mutual exclusion to avoid race conditions"
/>
<Question
  question="4).Which function is used to lock a mutex in C++?"
  options={['lock()', 'unlock()', 'try_lock()', 'None of the above']}
  answer="lock()"
/>
<Question
  question="5).What is 'std::condition_variable' used for?"
  options={['For synchronizing threads and notifying one thread to proceed', 'To pause a thread', 'For avoiding race conditions', 'None of the above']}
  answer="For synchronizing threads and notifying one thread to proceed"
/>
<Question
  question="6).What happens if a thread tries to lock an already locked mutex?"
  options={['The thread waits until the mutex is unlocked', 'The thread proceeds without waiting', 'The thread throws an exception', 'None of the above']}
  answer="The thread waits until the mutex is unlocked"
/>
<Question
  question="7).What is a deadlock in multi-threading?"
  options={['When threads are waiting for each other to release resources', 'When a thread is not executing', 'When threads execute in a single sequence', 'None of the above']}
  answer="When threads are waiting for each other to release resources"
/>
<Question
  question="8).Which of the following can prevent deadlocks in C++?"
  options={['Using timeouts for locks', 'Avoiding circular wait', 'Using mutexes in the same order', 'All of the above']}
  answer="All of the above"
/>
<Question
  question="9).What is a semaphore used for?"
  options={['To control access to shared resources', 'To monitor thread execution time', 'To synchronize thread priorities', 'None of the above']}
  answer="To control access to shared resources"
/>
<Question
  question="10).What is 'std::lock_guard' in C++?"
  options={['A class that automatically locks and unlocks a mutex', 'A function that locks multiple mutexes', 'A method to lock a mutex manually', 'None of the above']}
  answer="A class that automatically locks and unlocks a mutex"
/>
<div>
<AdBanner />
</div>


<Question
question="11).What is a race condition in C++?"
options={['When multiple threads access shared data without synchronization', 'When threads execute too slowly', 'When a thread terminates unexpectedly', 'None of the above']}
answer="When multiple threads access shared data without synchronization"
/>

<Question
question="12).Which C++ standard introduced the <thread> library?"
options={['C++11', 'C++14', 'C++17', 'C++20']}
answer="C++11"
/>

<Question
question="13).What is a memory model in C++ concurrency?"
options={['Defines how threads interact with memory', 'A way to allocate memory for threads', 'A type of mutex', 'None of the above']}
answer="Defines how threads interact with memory"
/>

<Question
question="14).What is the purpose of std::async in C++?"
options={['To run a function asynchronously', 'To lock a mutex', 'To terminate a thread', 'None of the above']}
answer="To run a function asynchronously"
/>

<Question
question="15).What is std::shared_lock used for?"
options={['To allow multiple threads to read shared data', 'To lock a mutex exclusively', 'To terminate threads', 'None of the above']}
answer="To allow multiple threads to read shared data"
/>
<Question
question="16).What does std::atomic provide in C++?"
options={['Thread-safe operations on shared variables', 'Automatic thread termination', 'Deadlock prevention', 'None of the above']}
answer="Thread-safe operations on shared variables"
/>

<Question
question="17).What is a livelock in multithreading?"
options={['Threads keep changing states without making progress', 'Threads terminate unexpectedly', 'Threads execute too quickly', 'None of the above']}
answer="Threads keep changing states without making progress"
/>

<Question
question="18).Which function is used to join a thread in C++?"
options={['join()', 'detach()', 'terminate()', 'None of the above']}
answer="join()"
/>

<Question
question="19).What happens if a thread is not joined or detached in C++?"
options={['The program terminates with an exception', 'The thread continues running in the background', 'The thread automatically joins', 'None of the above']}
answer="The program terminates with an exception"
/>

<Question
question="20).What is std::recursive_mutex used for?"
options={['Allowing the same thread to lock a mutex multiple times', 'Locking multiple mutexes at once', 'Preventing deadlocks', 'None of the above']}
answer="Allowing the same thread to lock a mutex multiple times"
/>
<div>
<AdBanner />
</div>


<Question
question="21).Which of the following is a lock-free synchronization mechanism?"
options={['std::atomic', 'std::mutex', 'std::lock_guard', 'None of the above']}
answer="std::atomic"
/>

<Question
question="22).What is the difference between std::mutex and std::shared_mutex?"
options={['std::shared_mutex allows multiple readers but single writer', 'std::mutex is faster', 'std::shared_mutex does not support locking', 'None of the above']}
answer="std::shared_mutex allows multiple readers but single writer"
/>

<Question
question="23).What does std::future represent in C++?"
options={['A placeholder for a result of an asynchronous operation', 'A type of mutex', 'A thread handle', 'None of the above']}
answer="A placeholder for a result of an asynchronous operation"
/>

<Question
question="24).Which function is used to retrieve a value from std::future?"
options={['get()', 'wait()', 'lock()', 'None of the above']}
answer="get()"
/>

<Question
question="25).What is std::promise used for in C++?"
options={['To store a value that can be retrieved by a std::future', 'To lock a mutex', 'To terminate a thread', 'None of the above']}
answer="To store a value that can be retrieved by a std::future"
/>

<Question
question="26).What is thread starvation?"
options={['When a thread is unable to gain access to resources', 'When a thread runs too fast', 'When a thread terminates early', 'None of the above']}
answer="When a thread is unable to gain access to resources"
/>

<Question
question="27).Which C++ feature allows waiting for multiple futures?"
options={['std::wait_for_any()', 'std::future::wait()', 'std::condition_variable', 'None of the above']}
answer="None of the above"
/>

<Question
question="28).What is the purpose of std::scoped_lock?"
options={['To lock multiple mutexes safely', 'To unlock a mutex automatically', 'To terminate threads', 'None of the above']}
answer="To lock multiple mutexes safely"
/>

<Question
question="29).What is a spinlock?"
options={['A lock where a thread waits in a loop until it acquires the lock', 'A type of deadlock', 'A C++ standard mutex', 'None of the above']}
answer="A lock where a thread waits in a loop until it acquires the lock"
/>

<Question
question="30).Which of the following is true about std::thread::detach()?"
options={['The thread runs independently of the main thread', 'The thread must be joined later', 'The thread terminates immediately', 'None of the above']}
answer="The thread runs independently of the main thread"
/>
<div>
<AdBanner />
</div>



<Question
question="31).What is thread-local storage (TLS) in C++?"
options={['Each thread has its own copy of a variable', 'A shared memory space for threads', 'A type of mutex', 'None of the above']}
answer="Each thread has its own copy of a variable"
/>

<Question
question="32).Which keyword is used for thread-local storage in C++?"
options={['thread_local', 'atomic_thread', 'mutex_local', 'None of the above']}
answer="thread_local"
/>

<Question
question="33).What is the purpose of std::barrier (C++20)?"
options={['To synchronize a group of threads at a certain point', 'To lock a mutex', 'To terminate threads', 'None of the above']}
answer="To synchronize a group of threads at a certain point"
/>

<Question
question="34).What is std::latch (C++20) used for?"
options={['A thread synchronization primitive that decreases a counter', 'A type of mutex', 'A thread termination signal', 'None of the above']}
answer="A thread synchronization primitive that decreases a counter"
/>

<Question
question="35).What is the difference between std::mutex and std::timed_mutex?"
options={['std::timed_mutex supports timeout on locking attempts', 'std::mutex is faster', 'std::timed_mutex cannot be locked', 'None of the above']}
answer="std::timed_mutex supports timeout on locking attempts"
/>

<Question
question="36).Which function is used to try locking a mutex without blocking?"
options={['try_lock()', 'lock()', 'unlock()', 'None of the above']}
answer="try_lock()"
/>

<Question
question="37).What is a thread pool?"
options={['A collection of reusable threads for executing tasks', 'A single thread running multiple tasks', 'A deadlock scenario', 'None of the above']}
answer="A collection of reusable threads for executing tasks"
/>

<Question
question="38).Which C++ feature allows waiting for a future with a timeout?"
options={['std::future::wait_for()', 'std::mutex::lock()', 'std::thread::sleep()', 'None of the above']}
answer="std::future::wait_for()"
/>

<Question
question="39).What is std::jthread (C++20)?"
options={['An automatically joinable thread', 'A faster version of std::thread', 'A thread that cannot be joined', 'None of the above']}
answer="An automatically joinable thread"
/>

<Question
question="40).What is the purpose of std::counting_semaphore (C++20)?"
options={['To allow a limited number of threads to access a resource', 'To lock a mutex', 'To terminate threads', 'None of the above']}
answer="To allow a limited number of threads to access a resource"
/>

<div>
<AdBanner />
</div>


<Question
question="41).What is the purpose of std::atomic_thread_fence in C++?"
options={['To enforce memory ordering constraints', 'To lock a mutex', 'To terminate a thread', 'None of the above']}
answer="To enforce memory ordering constraints"
/>

<Question
question="42).Which of the following is true about std::future::valid()?"
options={['Checks if the future holds a shared state', 'Locks a mutex', 'Terminates a thread', 'None of the above']}
answer="Checks if the future holds a shared state"
/>

<Question
question="43).What is the difference between std::async with std::launch::async and std::launch::deferred?"
options={['async runs immediately in a new thread, deferred runs lazily', 'Both run in the same thread', 'deferred is faster', 'None of the above']}
answer="async runs immediately in a new thread, deferred runs lazily"
/>

<Question
question="44).What is std::packaged_task used for in C++?"
options={['To wrap a callable and store its result in a std::future', 'To lock multiple mutexes', 'To terminate threads', 'None of the above']}
answer="To wrap a callable and store its result in a std::future"
/>

<Question
question="45).What happens if a std::promise is destroyed before setting a value?"
options={['The associated std::future throws std::future_error', 'The program crashes', 'The thread continues running', 'None of the above']}
answer="The associated std::future throws std::future_error"
/>

<Question
question="46).What is std::shared_future used for?"
options={['To allow multiple threads to wait for the same result', 'To lock a mutex', 'To terminate a thread', 'None of the above']}
answer="To allow multiple threads to wait for the same result"
/>

<Question
question="47).Which of the following is a way to avoid false sharing?"
options={['Padding variables to separate cache lines', 'Using std::mutex', 'Increasing thread priority', 'None of the above']}
answer="Padding variables to separate cache lines"
/>

<Question
question="48).What does std::atomic<T>::fetch_add do?"
options={['Atomically adds a value and returns the previous value', 'Locks a mutex', 'Terminates a thread', 'None of the above']}
answer="Atomically adds a value and returns the previous value"
/>

<Question
question="49).What is std::thread::hardware_concurrency() used for?"
options={['Returns the number of concurrent threads supported by the system', 'Locks a mutex', 'Terminates a thread', 'None of the above']}
answer="Returns the number of concurrent threads supported by the system"
/>

<Question
question="50).What is the purpose of std::stop_source (C++20)?"
options={['To send a stop request to a std::jthread', 'To lock a mutex', 'To join threads', 'None of the above']}
answer="To send a stop request to a std::jthread"
/>

<div>
<AdBanner />
</div>

