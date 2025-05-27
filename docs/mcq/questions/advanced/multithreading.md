---
id: multithreading
title: Multi-threading Multiple Choice Questions (MCQs)
description: |
  Test your knowledge of multi-threading with this set of Multiple Choice Questions (MCQs). Learn about thread creation, synchronization, race conditions, thread safety, deadlock, and various concurrency mechanisms. These questions help reinforce your understanding of multi-threading concepts and their application in building efficient and thread-safe applications.
keywords:
  - Multi-threading
  - Thread Creation
  - Synchronization
  - Thread Safety
  - Deadlock
  - Race Conditions
  - Thread Pools
  - Concurrency Mechanisms
  - Synchronization Primitives
  - Mutex
  - Condition Variables
  - Parallelism
  - Multi-threading MCQs
  - Concurrency Concepts
  - Thread Management
  - Parallel Programming
  - Concurrency Test

tags:
  - Multi-threading
  - Thread Creation
  - Synchronization
  - Thread Safety
  - Deadlock
  - Race Conditions
  - Thread Pools
  - Concurrency Mechanisms
  - Mutex
  - Condition Variables
  - Parallelism
  - Concurrency MCQs
  - Thread Management
  - Parallel Programming
  - Concurrency Concepts

---
import AdBanner from '@site/src/components/AdBanner';
import { Question } from '../../Question';

# Multi-threading

<Question
  question="1).What is multi-threading in C++?"
  options={['Running multiple tasks concurrently', 'Running a single task concurrently', 'Executing multiple tasks sequentially', 'None of the above']}
  answer="Running multiple tasks concurrently"
/>
<Question
  question="2).Which header file is required for multi-threading in C++?"
  options={['<thread>', '<mutex>', '<future>', 'All of the above']}
  answer="All of the above"
/>
<Question
  question="3).What is the default number of threads in a C++ program?"
  options={['1', '2', 'Depends on the hardware', 'None of the above']}
  answer="1"
/>
<Question
  question="4).Which of the following is used to create a thread in C++?"
  options={['std::thread', 'std::task', 'std::async', 'std::run']}
  answer="std::thread"
/>
<Question
  question="5).What is the role of the 'join()' function in multi-threading?"
  options={['To pause the main thread until the thread completes', 'To detach a thread from the main thread', 'To cancel a thread', 'None of the above']}
  answer="To pause the main thread until the thread completes"
/>
<Question
  question="6).What is a 'detached' thread in C++?"
  options={['A thread that does not require joining', 'A thread that terminates after execution', 'A thread that runs in the background indefinitely', 'None of the above']}
  answer="A thread that does not require joining"
/>
<Question
  question="7).What happens when you call 'join()' on a thread twice?"
  options={['It throws an exception', 'It joins the thread multiple times', 'It causes undefined behavior', 'None of the above']}
  answer="It throws an exception"
/>
<Question
  question="8).What is a race condition in multi-threading?"
  options={['A condition where multiple threads access shared data simultaneously', 'A condition where no threads run simultaneously', 'A condition where threads do not share data', 'None of the above']}
  answer="A condition where multiple threads access shared data simultaneously"
/>
<Question
  question="9).How can you avoid race conditions in C++?"
  options={['By using mutexes', 'By using semaphores', 'By avoiding shared data', 'All of the above']}
  answer="All of the above"
/>
<Question
  question="10).What is the purpose of 'std::async' in multi-threading?"
  options={['To run a function asynchronously', 'To create a new thread', 'To schedule a task for later execution', 'None of the above']}
  answer="To run a function asynchronously"
/>
<div>
<AdBanner />
</div>

<Question
question="11).What is a deadlock in multi-threading?"
options={['When a thread terminates unexpectedly', 'When memory allocation fails', 'When threads wait indefinitely for each other', 'When too many threads are created']}
answer="When threads wait indefinitely for each other"
/>

<Question
question="12).Which of these is NOT a mutex type in C++?"
options={['std::mutex', 'std::shared_mutex', 'std::recursive_mutex', 'std::atomic_mutex']}
answer="std::atomic_mutex"
/>

<Question
question="13).What does std::lock_guard provide?"
options={['Atomic operations', 'Deadlock prevention', 'Thread-safe memory allocation', 'Automatic mutex unlocking']}
answer="Automatic mutex unlocking"
/>

<Question
question="14).What is the purpose of std::unique_lock?"
options={['More flexible than lock_guard', 'Faster than mutex', 'Works without mutexes', 'Smaller memory footprint']}
answer="More flexible than lock_guard"
/>

<Question
question="15).What does thread_local storage duration mean?"
options={['Temporary thread storage', 'Global to all threads', 'Variable unique to each thread', 'Shared between thread pairs']}
answer="Variable unique to each thread"
/>

<Question
question="16).Which atomic operation is NOT provided by std::atomic?"
options={['copy()', 'load()', 'store()', 'exchange()']}
answer="copy()"
/>

<Question
question="17).What is memory_order_relaxed used for?"
options={['Acquire-release semantics', 'Thread cancellation', 'No ordering constraints', 'Sequential consistency']}
answer="No ordering constraints"
/>

<Question
question="18).What does std::condition_variable require?"
options={['Atomic variables', 'Exactly two threads', 'A mutex to work with', 'Shared memory']}
answer="A mutex to work with"
/>

<Question
question="19).What is false sharing in multi-threading?"
options={['Cache line contention', 'Incorrect mutex usage', 'Thread priority inversion', 'Deadlock detection']}
answer="Cache line contention"
/>

<Question
question="20).Which is NOT a thread synchronization primitive?"
options={['std::gate', 'std::counting_semaphore', 'std::barrier', 'std::latch']}
answer="std::gate"
/>

<div>
<AdBanner />
</div>

<Question
question="21).What does std::promise provide?"
options={['A way to set future values', 'Memory allocation', 'Exception handling', 'Thread cancellation']}
answer="A way to set future values"
/>

<Question
question="22).What is std::packaged_task used for?"
options={['Wrapping callable objects for async execution', 'Memory management', 'Thread pooling', 'Task prioritization']}
answer="Wrapping callable objects for async execution"
/>

<Question
question="23).What does std::this_thread::yield() do?"
options={['Locks current thread', 'Pauses for fixed time', 'Terminates current thread', 'Offers CPU to other threads']}
answer="Offers CPU to other threads"
/>

<Question
question="24).Which is NOT a valid mutex locking strategy?"
options={['try_lock_for()', 'lock_shared()', 'try_lock()', 'attempt_lock()']}
answer="attempt_lock()"
/>

<Question
question="25).What is thread contention?"
options={['Thread creation failure', 'Competition for shared resources', 'Memory leaks', 'Incorrect scheduling']}
answer="Competition for shared resources"
/>

<Question
question="26).What does std::scoped_lock provide?"
options={['Atomic operations', 'Thread-local storage', 'Faster single mutex locking', 'Deadlock-free multiple mutex locking']}
answer="Deadlock-free multiple mutex locking"
/>

<Question
question="27).Which memory order provides sequential consistency?"
options={['memory_order_seq_cst', 'memory_order_consume', 'memory_order_acq_rel', 'memory_order_relaxed']}
answer="memory_order_seq_cst"
/>

<Question
question="28).What is a spinlock?"
options={['Memory barrier', 'Atomic flag', 'Special thread type', 'Busy-wait mutex alternative']}
answer="Busy-wait mutex alternative"
/>

<Question
question="29).What does std::call_once guarantee?"
options={['Atomic variable creation', 'Both 1 and 2', 'Single execution of callable', 'Thread-safe initialization']}
answer="Both 1 and 2"
/>

<Question
question="30).Which is NOT a thread attribute?"
options={['Memory address', 'Stack size', 'Priority', 'Affinity mask']}
answer="Memory address"
/>

<div>
<AdBanner />
</div>

<Question
question="31).What is std::jthread in C++20?"
options={['Auto-joining thread', 'Shared thread', 'Faster thread', 'Atomic thread']}
answer="Auto-joining thread"
/>

<Question
question="32).What does std::atomic_flag guarantee?"
options={['Memory ordering', 'All of above', 'Lock-free boolean', 'Thread safety']}
answer="All of above"
/>

<Question
question="33).What is ABA problem in lock-free programming?"
options={['Thread starvation', 'Memory corruption', 'Deadlock variant', 'Value changes back to original between reads']}
answer="Value changes back to original between reads"
/>

<Question
question="34).Which is NOT a valid future status?"
options={['deferred', 'timeout', 'waiting', 'ready']}
answer="waiting"
/>

<Question
question="35).What does std::shared_future allow?"
options={['Shared thread ownership', 'Multiple reads of same result', 'Atomic operations', 'Memory sharing']}
answer="Multiple reads of same result"
/>

<Question
question="36).What is thread pooling?"
options={['Reusing existing threads', 'Atomic operations', 'Priority scheduling', 'Sharing stack memory']}
answer="Reusing existing threads"
/>

<Question
question="37).Which is NOT a mutex lock type?"
options={['scoped_lock', 'shared_lock', 'atomic_lock', 'unique_lock']}
answer="atomic_lock"
/>

<Question
question="38).What is priority inversion?"
options={['Thread priority corruption', 'Scheduling error', 'High-priority thread waits for low-priority thread', 'Memory conflict']}
answer="High-priority thread waits for low-priority thread"
/>

<Question
question="39).What does std::counting_semaphore limit?"
options={['Memory usage', 'CPU cores', 'Concurrent thread count', 'Stack size']}
answer="Concurrent thread count"
/>

<Question
question="40).What is std::latch used for?"
options={['Memory barriers', 'Thread creation', 'Atomic counters', 'One-time thread synchronization']}
answer="One-time thread synchronization"
/>

<div>
<AdBanner />
</div>

<Question
question="41).What is std::barrier used for?"
options={['Priority control', 'Memory allocation', 'Thread termination', 'Synchronizing thread groups at a point']}
answer="Synchronizing thread groups at a point"
/>

<Question
question="42).What does std::hardware_destructive_interference_size provide?"
options={['Thread limit', 'Cache line size', 'CPU cores count', 'Memory page size']}
answer="Cache line size"
/>

<Question
question="43).What is a futex?"
options={['Future extension', 'Fast userspace mutex', 'Function template', 'Atomic variable']}
answer="Fast userspace mutex"
/>

<Question
question="44).Which is NOT a valid thread creation error?"
options={['too_many_threads', 'invalid_argument', 'permission_denied', 'resource_unavailable']}
answer="too_many_threads"
/>

<Question
question="45).What does std::notify_all_at_thread_exit do?"
options={['Cancels pending futures', 'Terminates all threads', 'Releases all mutexes', 'Notifies condition variables on thread exit']}
answer="Notifies condition variables on thread exit"
/>

<Question
question="46).What is thread starvation?"
options={['Thread creation limit', 'Thread gets insufficient CPU time', 'Deadlock variant', 'Memory allocation failure']}
answer="Thread gets insufficient CPU time"
/>

<Question
question="47).What does std::atomic::wait() do?"
options={['Terminates thread', 'Blocks until value changes', 'Yields CPU', 'Releases mutex']}
answer="Blocks until value changes"
/>

<Question
question="48).What is std::stop_token used for?"
options={['Memory synchronization', 'Thread priority', 'Thread cancellation signaling', 'Atomic operations']}
answer="Thread cancellation signaling"
/>

<Question
question="49).What does std::atomic_ref provide?"
options={['Memory management', 'Atomic operations on non-atomic objects', 'Reference counting', 'Thread safety']}
answer="Atomic operations on non-atomic objects"
/>

<Question
question="50).What is std::osyncstream in C++20?"
options={['Operating system thread', 'Memory-mapped I/O', 'Synchronized output stream', 'Atomic stream']}
answer="Synchronized output stream"
/>
