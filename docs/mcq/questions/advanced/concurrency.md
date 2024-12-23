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
