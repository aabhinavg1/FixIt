import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'GPU Memory and Kernels';

const FACTS = [
  fact('global memory', 'the large but high-latency device memory on a GPU', 'storing large arrays and input buffers', 'Global memory is slower than shared memory.', 'GPU memory'),
  fact('shared memory', 'a fast per-block scratchpad memory', 'cooperating on tiles of data inside a block', 'Shared memory is often used to stage data for reuse.', 'GPU memory'),
  fact('occupancy', 'the ratio of active warps to the maximum supported', 'balancing registers and shared memory usage', 'Higher occupancy can help hide memory latency.', 'execution efficiency'),
  fact('bank conflict', 'contention when multiple threads hit the same shared-memory bank', 'understanding why some warp accesses slow down', 'A bank conflict can serialize access inside a warp.', 'GPU memory access'),
  fact('latency hiding', 'keeping useful work ready while some threads wait on memory', 'using many ready warps to cover stalls', 'Extra ready warps can cover memory latency.', 'GPU execution'),
];

export const DAY_16_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 16);
