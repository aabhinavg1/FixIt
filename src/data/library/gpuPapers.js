export const gpuPapersTopic = {
  id: 'gpu-papers',
  title: 'GPU Papers',
  description: 'GPU architecture, parallel execution, memory hierarchy, and compiler-facing GPU material.',
  coverTone: 'coverSlate',
  coverImage: '/img/og/compilers.png',
  articleCategory: 'GPU Systems',
  articleDescription:
    'A shelf for GPU execution models, memory behavior, kernel optimization, and compiler-oriented accelerator reading.',
  relatedTopicIds: ['coa', 'machine-learning'],
  sections: [
    {
      id: 'gpu-execution-model',
      title: 'GPU execution model',
      paragraphs: [
        'GPU-focused reading is useful when you want to understand how SIMT execution, memory hierarchy, and launch configuration shape performance.',
        'For compiler work, the important layer is how parallel hardware constraints affect IR design, scheduling, and code generation decisions.',
      ],
      code: {
        language: 'cuda',
        snippet: `__global__ void saxpy(float a, const float* x, float* y) {\n  int i = blockIdx.x * blockDim.x + threadIdx.x;\n  y[i] = a * x[i] + y[i];\n}`,
      },
    },
    {
      id: 'what-to-read',
      title: 'What to read',
      paragraphs: [
        'Start with material that explains threads, warps, occupancy, and memory access patterns before moving into compiler or ML-system papers.',
        'That foundation makes later GPU compiler papers much easier to interpret.',
      ],
    },
    {
      id: 'library-collection',
      title: 'Library collection',
      paragraphs: [
        'This shelf is ready for GPU architecture references, kernel optimization decks, and accelerator compiler papers.',
      ],
    },
  ],
  conclusion:
    'Use this shelf when you want to connect GPU hardware behavior with compiler and performance engineering decisions.',
};

export const gpuPapers = [
  {
    id: 'amd-rdna4-isa',
    topic: 'gpu-papers',
    title: 'RDNA 4 Instruction Set Architecture Reference Guide',
    author: 'AMD',
    year: 'Current',
    coverTone: 'coverCopper',
    file: 'https://docs.amd.com/v/u/en-US/rdna4-instruction-set-architecture',
    note: 'AMD RDNA 4 ISA reference hosted on AMD documentation.',
    renderMode: 'browser',
  },
  {
    id: 'cronos-gpu-paper',
    topic: 'gpu-papers',
    title: 'CRONOS: Low-Overhead Instruction-Accurate Simulation using Dynamic Binary Translation',
    author: 'Philipp Gschwandtner et al.',
    year: '2021',
    coverTone: 'coverSlate',
    file: 'https://dps.uibk.ac.at/~philipp/publication/gschwandtner-2021-cronos/gschwandtner-2021-cronos.pdf',
    note: 'Instruction-accurate simulation paper added to the GPU shelf.',
  },
  {
    id: 'volta-gpu-architecture',
    topic: 'gpu-papers',
    title: 'Dissecting the NVIDIA Volta GPU Architecture via Microbenchmarking',
    author: 'Jia et al.',
    year: '2018',
    coverTone: 'coverTeal',
    file: 'https://arxiv.org/pdf/1804.06826',
    note: 'Embed-friendly external GPU architecture paper hosted on arXiv.',
  },
];
