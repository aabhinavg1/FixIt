export const llvmTopic = {
  id: 'llvm',
  title: 'LLVM',
  description: 'LLVM foundations, IR, passes, and compiler infrastructure papers.',
  coverTone: 'coverSlate',
  coverImage: '/img/og/llvm.png',
  articleCategory: 'Compiler Infrastructure',
  articleDescription:
    'Core LLVM reading for understanding IR, analysis passes, transformations, and the design decisions behind modern compiler toolchains.',
  relatedTopicIds: ['mlir', 'compilersutra-material'],
  sections: [
    {
      id: 'why-llvm',
      title: 'Why LLVM matters',
      paragraphs: [
        'LLVM is the practical bridge between compiler theory and production infrastructure. It gives you an extensible IR, reusable passes, and a portable backend strategy.',
        'For most readers, the important question is not just what LLVM is, but how its design changes the way analysis and transformation can be composed.',
      ],
      code: {
        language: 'llvm',
        snippet: `%sum = add nsw i32 %lhs, %rhs\nret i32 %sum`,
      },
    },
    {
      id: 'how-to-read-llvm',
      title: 'How to read LLVM',
      paragraphs: [
        'Begin with the original LLVM paper, then move to internal material that explains architecture and the pass pipeline in a more operational way.',
        'Once the IR feels natural, most of the rest of the compiler stack becomes easier to reason about.',
      ],
    },
    {
      id: 'library-collection',
      title: 'Library collection',
      paragraphs: [
        'This shelf combines the original research paper with CompilerSutra material so the conceptual model and the internal walkthroughs stay in one place.',
      ],
    },
  ],
  conclusion:
    'Read this shelf when you want the shortest route from LLVM basics to practical pass-level intuition.',
};

export const llvmPapers = [
  {
    id: 'llvm-paper',
    topic: 'llvm',
    title: 'LLVM: A Compilation Framework for Lifelong Program Analysis & Transformation',
    author: 'Chris Lattner, Vikram Adve',
    year: '2004',
    coverTone: 'coverCopper',
    file: 'https://llvm.org/pubs/2004-01-30-CGO-LLVM.pdf',
    note: 'Official LLVM-hosted paper.',
  },
  {
    id: 'llvm-julia-hpc',
    topic: 'llvm',
    title: 'Bridging HPC Communities through the Julia Programming Language',
    author: 'Valentin Churavy et al.',
    year: '2022',
    coverTone: 'coverSlate',
    file: 'https://arxiv.org/pdf/2211.02740',
    note: 'Embed-friendly external paper with practical LLVM-based compilation discussion.',
  },
];
