import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'Performance and Profiling';

const FACTS = [
  fact('profiling', 'measuring where a program spends time', 'finding hot paths before optimizing', 'Profiling helps identify bottlenecks before optimization work.', 'performance analysis'),
  fact('-O2', 'a compiler optimization level that balances speed and build time', 'building optimized release binaries', 'O2 usually enables more optimizations than O0.', 'compiler flags'),
  fact('inlining', 'replacing a call with the function body', 'reducing call overhead in small functions', 'Small functions are often good candidates for inlining.', 'optimization'),
  fact('microbenchmark', 'a tiny benchmark for one specific operation', 'comparing implementation choices carefully', 'A microbenchmark can mislead you if the compiler optimizes too aggressively.', 'measurement'),
  fact('cache locality', 'keeping accessed data close together in memory', 'improving throughput with contiguous access', 'Contiguous data often performs better than scattered data.', 'performance'),
];

export const DAY_15_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 15);
