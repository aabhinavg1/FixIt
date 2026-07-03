import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'GPU Execution Model';

const FACTS = [
  fact('kernel', 'a function executed on the GPU', 'launching parallel work on the device', 'A kernel is usually marked with __global__ in CUDA.', 'GPU programming'),
  fact('warp', 'a group of GPU threads that execute together', 'SIMT execution on NVIDIA hardware', 'A warp commonly contains 32 threads on NVIDIA GPUs.', 'execution model'),
  fact('shared memory', 'fast on-chip memory shared by threads in a block', 'cooperating on data with lower latency than global memory', 'Shared memory is faster than global memory but much smaller.', 'GPU memory'),
  fact('coalescing', 'arranging accesses so adjacent threads touch adjacent memory', 'reducing memory traffic and improving throughput', 'Coalesced loads are generally more efficient.', 'GPU memory access'),
  fact('syncthreads', 'a block-level barrier synchronization point', 'making all threads in a block wait for each other', 'All threads in the block must reach __syncthreads().', 'synchronization'),
];

export const DAY_09_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 9);
