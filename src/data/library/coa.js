export const coaTopic = {
  id: 'coa',
  title: 'COA',
  description: 'Computer organization, architecture intuition, and machine-level execution references.',
  coverTone: 'coverCopper',
  coverImage: '/img/og/coa.png',
  articleCategory: 'Computer Architecture',
  articleDescription:
    'A compact reading shelf for execution flow, memory behavior, and the machine-level details that shape compiler output.',
  relatedTopicIds: ['llvm', 'compilersutra-material'],
  sections: [
    {
      id: 'execution-model',
      title: 'Execution model',
      paragraphs: [
        'Computer organization and architecture gives the context for why generated code behaves the way it does on real machines.',
        'For compiler learners, the useful layer is the one that connects source code, assembly, caches, branches, and memory access into a single mental model.',
      ],
      code: {
        language: 'cpp',
        snippet: `for (int i = 0; i < n; ++i) {\n  sum += values[i];\n}`,
      },
    },
    {
      id: 'what-to-watch',
      title: 'What to watch',
      paragraphs: [
        'Start with the cost of loads, stores, and branches. Those three decisions explain a large part of performance variation in compiled programs.',
        'A good COA study path is not about memorizing hardware diagrams. It is about recognizing which machine constraints a compiler is optimizing around.',
      ],
    },
    {
      id: 'library-collection',
      title: 'Library collection',
      paragraphs: [
        'This shelf collects the papers and decks on execution flow and source-to-binary reasoning that map directly to the rest of CompilerSutra.',
      ],
    },
  ],
  conclusion:
    'Use this shelf when you want to understand why low-level code shape matters before moving into IR design or optimization pipelines.',
};

export const coaPapers = [
  {
    id: 'Pipeline architecture: ',
    topic: 'coa',
    category: 'Execution Flow',
    thumbnailLabel: 'Pipeline',
    title: 'Pipeline architecture: ',
    author: 'CompilerSutra',
    year: 'Internal',
    coverTone: 'coverTeal',
    file: 'https://wjaets.com/sites/default/files/fulltext_pdf/WJAETS-2025-0540.pdf',
    renderMode: 'browser',
    note: 'CompilerSutra material covering source-to-binary execution flow.',
  },
  {
    id: 'coa-volta-architecture',
    topic: 'coa',
    category: 'Architecture Reading',
    thumbnailLabel: 'VA',
    title: 'Volta GPU Architecture via Microbenchmarking',
    author: 'Jia et al.',
    year: '2018',
    coverTone: 'coverCopper',
    file: 'https://arxiv.org/pdf/1804.06826',
    note: 'Embed-friendly architecture reading hosted on arXiv.',
  },
];
