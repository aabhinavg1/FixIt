import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'CPU Execution and Cache';

const FACTS = [
  fact('cache line', 'the unit of data transferred between memory and cache', 'understanding why nearby data is often reused together', 'Adjacent data often shares a cache line.', 'memory hierarchy'),
  fact('reserve', 'a vector method that preallocates capacity', 'avoiding repeated reallocations while growing a vector', 'reserve can reduce iterator invalidation caused by growth.', 'vector performance'),
  fact('branch prediction', 'the CPU technique that guesses control-flow direction', 'reducing pipeline stalls on predictable branches', 'A predictable branch is usually faster than a random one.', 'CPU execution'),
  fact('contiguous access', 'reading memory in sequence rather than jumping around', 'writing cache-friendly loops over arrays or vectors', 'Sequential access is usually faster than random access.', 'locality'),
  fact('false sharing', 'a performance problem where separate variables share one cache line', 'padding hot per-thread counters to avoid cache ping-pong', 'It can hurt performance even when threads update different variables.', 'multithreading performance'),
];

export const DAY_05_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 5);
