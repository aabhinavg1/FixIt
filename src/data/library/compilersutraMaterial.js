export const compilersutraMaterialTopic = {
  id: 'compilersutra-material',
  title: 'CompilerSutra Material',
  description: 'Internal slides and learning material hosted directly on CompilerSutra.',
  coverTone: 'coverCopper',
  coverImage: '/img/og/master.png',
  articleCategory: 'Internal Material',
  articleDescription:
    'Internal slides, explainers, and teaching material organized into a cleaner reading shelf for CompilerSutra learners.',
  relatedTopicIds: ['llvm', 'coa'],
  sections: [
    {
      id: 'how-to-use-this-shelf',
      title: 'How to use this shelf',
      paragraphs: [
        'This section is built for guided learning. The material is grouped into shelves so you can move from broad orientation to more focused internals.',
        'Treat it like a study sequence rather than a raw dump of PDFs. Start with introductions, then move into architecture and internals.',
      ],
      code: {
        language: 'text',
        snippet: `Start here:\n1. LLVM Introduction\n2. LLVM Architecture Slides\n3. Compiler Inside Part 1`,
      },
    },
    {
      id: 'study-path',
      title: 'Study path',
      paragraphs: [
        'The internal material is most effective when paired with one external paper and one internal deck at the same time.',
        'That combination gives both the original research framing and the simplified teaching version.',
      ],
    },
    {
      id: 'library-collection',
      title: 'Library collection',
      paragraphs: [
        'This shelf gathers CompilerSutra-owned material so it can be opened directly in the reader without external friction.',
      ],
    },
  ],
  conclusion:
    'Use this shelf as the practical path through the site when you want direct teaching material instead of only formal papers.',
};

export const compilersutraMaterialPapers = [
  {
    id: 'compiler-inside-part1',
    topic: 'compilersutra-material',
    category: 'Compiler Internals',
    thumbnailLabel: 'CI',
    title: 'Compiler Inside Part 1',
    author: 'CompilerSutra',
    year: 'Internal',
    coverTone: 'coverCopper',
    file: '/ppt/live/compiler_inside_part1.pdf',
    renderMode: 'browser',
    note: 'Internal CompilerSutra learning material.',
  },
  {
    id: 'llvm-architecture',
    topic: 'compilersutra-material',
    category: 'LLVM Foundations',
    thumbnailLabel: 'LA',
    title: 'LLVM Architecture Slides',
    author: 'CompilerSutra',
    year: 'Internal',
    coverTone: 'coverSlate',
    file: '/ppt/live/llvm_archotecture.pdf',
    renderMode: 'browser',
    note: 'Internal LLVM architecture slides.',
  },
  {
    id: 'llvm-intro',
    topic: 'compilersutra-material',
    category: 'LLVM Foundations',
    thumbnailLabel: 'LI',
    title: 'LLVM Introduction',
    author: 'CompilerSutra',
    year: 'Internal',
    coverTone: 'coverTeal',
    file: '/papers/llvm_intro.pdf',
    renderMode: 'browser',
    note: 'Internal LLVM introduction material hosted on CompilerSutra.',
  },
];
