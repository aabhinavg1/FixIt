import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'Concurrency and Synchronization';

const FACTS = [
  fact('atomic', 'an operation that is indivisible with respect to other threads', 'building counters and lock-free state safely', 'Atomic operations help prevent data races on that object.', 'concurrency'),
  fact('lock_guard', 'a small RAII wrapper for a mutex', 'scoped locking with automatic unlock', 'A lock_guard unlocks automatically when it leaves scope.', 'synchronization'),
  fact('condition_variable', 'a wait/notify synchronization primitive', 'coordinating producer-consumer style threads', 'It is commonly used with a mutex and a predicate.', 'coordination'),
  fact('deadlock', 'a situation where threads wait forever on each other', 'spotting lock-order bugs in concurrent code', 'Deadlock can happen when two mutexes are locked in opposite order.', 'concurrency hazards'),
  fact('data race', 'unsynchronized concurrent access to shared data', 'avoiding undefined behavior in multithreaded code', 'In C++, a data race causes undefined behavior.', 'concurrency hazards'),
];

export const DAY_12_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 12);
