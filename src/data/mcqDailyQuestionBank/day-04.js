import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'Processes and Threads';

const FACTS = [
  fact('std::thread', 'the C++ thread object', 'launching concurrent work in a C++ program', 'A std::thread represents one execution thread.', 'concurrency'),
  fact('mutex', 'an exclusive lock for a critical section', 'protecting shared data from concurrent access', 'Only one thread should hold a mutex at a time.', 'synchronization'),
  fact('condition_variable', 'a synchronization primitive for waiting on a condition', 'blocking until work becomes available', 'It is usually paired with a mutex and a predicate.', 'synchronization'),
  fact('fork', 'a POSIX call that creates a child process', 'duplicating the current process to create a child', 'The child initially gets a copy of the parent address space.', 'processes'),
  fact('exec', 'a family of calls that replaces the current process image', 'starting a different program in the same process', 'exec does not create a new process on its own.', 'process management'),
];

export const DAY_04_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 4);
