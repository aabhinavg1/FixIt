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
