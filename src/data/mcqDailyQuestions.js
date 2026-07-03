const DAY_TOPICS = {
  1: {
    title: 'C++ Foundations',
    focus: ['C++ syntax', 'types', 'control flow', 'basic compilation'],
    prompts: {
      domain: 'C++ basics',
      firstStage: 'lexical analysis',
      secondStage: 'parsing',
      compilerOutput: 'object files',
      memoryArea: 'stack',
      runtimeModel: 'linked executable',
    },
  },
  2: {
    title: 'Arrays, Strings, and Complexity',
    focus: ['arrays', 'strings', 'hashing', 'Big-O'],
    prompts: {
      domain: 'DSA basics',
      firstStage: 'contiguous storage',
      secondStage: 'prefix sums',
      compilerOutput: 'sorted ranges',
      memoryArea: 'heap',
      runtimeModel: 'amortized analysis',
    },
  },
  3: {
    title: 'Compiler Pipeline',
    focus: ['lexer', 'parser', 'AST', 'front end'],
    prompts: {
      domain: 'compiler design',
      firstStage: 'tokens',
      secondStage: 'AST',
      compilerOutput: 'IR',
      memoryArea: 'symbol table',
      runtimeModel: 'optimization pass',
    },
  },
  4: {
    title: 'Processes and Threads',
    focus: ['fork', 'exec', 'scheduling', 'synchronization'],
    prompts: {
      domain: 'operating systems',
      firstStage: 'process',
      secondStage: 'thread',
      compilerOutput: 'context switch',
      memoryArea: 'address space',
      runtimeModel: 'race condition',
    },
  },
  5: {
    title: 'CPU Execution and Cache',
    focus: ['pipeline', 'cache', 'branch prediction', 'latency'],
    prompts: {
      domain: 'CPU behavior',
      firstStage: 'fetch',
      secondStage: 'decode',
      compilerOutput: 'writeback',
      memoryArea: 'cache line',
      runtimeModel: 'instruction-level parallelism',
    },
  },
  6: {
    title: 'STL and Containers',
    focus: ['vector', 'map', 'set', 'iterators'],
    prompts: {
      domain: 'STL usage',
      firstStage: 'random access',
      secondStage: 'associative lookup',
      compilerOutput: 'iterator invalidation',
      memoryArea: 'contiguous storage',
      runtimeModel: 'amortized reallocation',
    },
  },
  7: {
    title: 'Pointers and Memory',
    focus: ['pointers', 'references', 'ownership', 'RAII'],
    prompts: {
      domain: 'memory management',
      firstStage: 'allocation',
      secondStage: 'lifetime',
      compilerOutput: 'undefined behavior',
      memoryArea: 'heap',
      runtimeModel: 'resource ownership',
    },
  },
  8: {
    title: 'Recursion and Dynamic Programming',
    focus: ['recursion', 'DP', 'memoization', 'graphs'],
    prompts: {
      domain: 'algorithm design',
      firstStage: 'overlapping subproblems',
      secondStage: 'state transition',
      compilerOutput: 'memo table',
      memoryArea: 'call stack',
      runtimeModel: 'optimal substructure',
    },
  },
  9: {
    title: 'GPU Execution Model',
    focus: ['warps', 'work-groups', 'occupancy', 'coalescing'],
    prompts: {
      domain: 'GPU programming',
      firstStage: 'work-item',
      secondStage: 'warp',
      compilerOutput: 'kernel launch',
      memoryArea: 'shared memory',
      runtimeModel: 'SIMT execution',
    },
  },
  10: {
    title: 'LLVM IR and SSA',
    focus: ['IR', 'SSA', 'phi nodes', 'passes'],
    prompts: {
      domain: 'LLVM',
      firstStage: 'basic block',
      secondStage: 'phi node',
      compilerOutput: 'lowering',
      memoryArea: 'virtual register',
      runtimeModel: 'SSA form',
    },
  },
  11: {
    title: 'Modern C++ Features',
    focus: ['move semantics', 'lambdas', 'smart pointers', 'constexpr'],
    prompts: {
      domain: 'modern C++',
      firstStage: 'move construction',
      secondStage: 'lambda capture',
      compilerOutput: 'rvalue reference',
      memoryArea: 'unique ownership',
      runtimeModel: 'compile-time evaluation',
    },
  },
  12: {
    title: 'Concurrency and Synchronization',
    focus: ['atomics', 'mutexes', 'threads', 'deadlocks'],
    prompts: {
      domain: 'concurrency',
      firstStage: 'atomic operation',
      secondStage: 'critical section',
      compilerOutput: 'data race',
      memoryArea: 'shared state',
      runtimeModel: 'happens-before',
    },
  },
  13: {
    title: 'Virtual Memory and Paging',
    focus: ['paging', 'segmentation', 'TLB', 'address translation'],
    prompts: {
      domain: 'memory hierarchy',
      firstStage: 'page table',
      secondStage: 'TLB hit',
      compilerOutput: 'page fault',
      memoryArea: 'virtual address space',
      runtimeModel: 'demand paging',
    },
  },
  14: {
    title: 'IPC and Signals',
    focus: ['pipes', 'signals', 'shared memory', 'message queues'],
    prompts: {
      domain: 'inter-process communication',
      firstStage: 'pipe',
      secondStage: 'signal',
      compilerOutput: 'file descriptor',
      memoryArea: 'shared segment',
      runtimeModel: 'asynchronous notification',
    },
  },
  15: {
    title: 'Performance and Profiling',
    focus: ['profiling', 'bottlenecks', 'locality', 'throughput'],
    prompts: {
      domain: 'performance engineering',
      firstStage: 'hot path',
      secondStage: 'cache miss',
      compilerOutput: 'profiling trace',
      memoryArea: 'working set',
      runtimeModel: 'microbenchmark',
    },
  },
  16: {
    title: 'GPU Memory and Kernels',
    focus: ['global memory', 'shared memory', 'occupancy', 'latency hiding'],
    prompts: {
      domain: 'GPU memory',
      firstStage: 'kernel',
      secondStage: 'thread block',
      compilerOutput: 'memory coalescing',
      memoryArea: 'device memory',
      runtimeModel: 'latency hiding',
    },
  },
  17: {
    title: 'Parsing and Syntax Trees',
    focus: ['grammar', 'parse tree', 'AST', 'recursive descent'],
    prompts: {
      domain: 'parsing',
      firstStage: 'token stream',
      secondStage: 'parse tree',
      compilerOutput: 'syntax error',
      memoryArea: 'parser stack',
      runtimeModel: 'grammar production',
    },
  },
  18: {
    title: 'Low-Level Systems Basics',
    focus: ['ABI', 'file descriptors', 'calling convention', 'kernel boundary'],
    prompts: {
      domain: 'systems programming',
      firstStage: 'system call',
      secondStage: 'ABI',
      compilerOutput: 'ELF binary',
      memoryArea: 'stack frame',
      runtimeModel: 'user-kernel transition',
    },
  },
  19: {
    title: 'Algorithms and Interview Drill',
    focus: ['graphs', 'greedy', 'trees', 'hash maps'],
    prompts: {
      domain: 'interview prep',
      firstStage: 'BFS',
      secondStage: 'DFS',
      compilerOutput: 'topological order',
      memoryArea: 'queue',
      runtimeModel: 'amortized complexity',
    },
  },
  20: {
    title: 'Final Mixed Revision',
    focus: ['C++', 'DSA', 'compiler', 'OS', 'CPU', 'GPU'],
    prompts: {
      domain: 'mixed revision',
      firstStage: 'compilation pipeline',
      secondStage: 'scheduler',
      compilerOutput: 'performance tuning',
      memoryArea: 'hardware cache',
      runtimeModel: 'full-stack reasoning',
    },
  },
};

function mcq(question, options, answer, code) {
  const item = { question, options, answer };

  if (code) {
    item.code = code;
  }

  return item;
}

function buildQuestions(theme, day) {
  const n = String(day).padStart(2, '0');
  const p = theme.prompts;
  const name = theme.title;

  return [
    mcq(
      `${n}. In ${name}, which statement best describes ${p.domain}?`,
      [
        `${p.domain} is the central theme of the day`,
        'It is unrelated to the track',
        'It only covers web design',
        'It only covers databases',
      ],
      `${p.domain} is the central theme of the day`,
    ),
    mcq(
      `${n}. Which option is the best fit for ${p.firstStage}?`,
      [
        `The correct first-step idea for ${p.domain}`,
        'A random distractor with no relation',
        'A file format',
        'A browser feature',
      ],
      `The correct first-step idea for ${p.domain}`,
    ),
    mcq(
      `${n}. Which concept is most closely associated with ${p.secondStage}?`,
      [
        `A second-stage concept in ${p.domain}`,
        'A graphics card driver setting',
        'A database index',
        'A shell prompt',
      ],
      `A second-stage concept in ${p.domain}`,
    ),
    mcq(
      `${n}. What is the most likely result of a well-formed ${p.domain} flow?`,
      [
        p.compilerOutput,
        'Undefined source code',
        'A deleted file',
        'A network outage',
      ],
      p.compilerOutput,
    ),
    mcq(
      `${n}. In this topic, which storage model is the closest match to ${p.memoryArea}?`,
      [
        `${p.memoryArea} is the relevant storage model`,
        'CSS flexbox',
        'A printer queue',
        'An email inbox',
      ],
      `${p.memoryArea} is the relevant storage model`,
    ),
    mcq(
      `${n}. Which runtime idea best matches ${p.runtimeModel}?`,
      [
        `${p.runtimeModel} is the relevant runtime idea`,
        'An irrelevant UI animation',
        'A markdown heading',
        'A YAML anchor',
      ],
      `${p.runtimeModel} is the relevant runtime idea`,
    ),
    mcq(
      `${n}. Which choice is the best summary of ${theme.focus[0]}?`,
      [
        theme.focus[0],
        'An unrelated browser API',
        'A spreadsheet function',
        'A random shell alias',
      ],
      theme.focus[0],
    ),
    mcq(
      `${n}. Which concept would you expect when studying ${theme.focus[1]}?`,
      [
        theme.focus[1],
        'An image format',
        'A CSS selector',
        'A DNS record',
      ],
      theme.focus[1],
    ),
    mcq(
      `${n}. Which one is a good fit for the theme’s practical drill?`,
      [
        theme.focus[2],
        'A web cookie',
        'A monitor refresh rate',
        'A package manager mirror',
      ],
      theme.focus[2],
    ),
    mcq(
      `${n}. Which of these is the best match for the day’s revision target?`,
      [
        theme.focus[3],
        'A font family',
        'A JPEG header',
        'A login banner',
      ],
      theme.focus[3],
    ),
    mcq(
      `${n}. What does this C++ snippet print?`,
      ['3', '4', '5', '6'],
      '4',
      `#include <iostream>\nint main() {\n  int x = 2;\n  std::cout << x + 2;\n}`,
    ),
    mcq(
      `${n}. Which complexity is the best match for scanning a contiguous array once?`,
      ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      'O(n)',
    ),
    mcq(
      `${n}. Which tool or concept is most associated with ${p.domain}?`,
      [
        `${p.domain}`,
        'A browser tab',
        'A calendar app',
        'A markdown linter',
      ],
      `${p.domain}`,
    ),
    mcq(
      `${n}. When a problem has many repeated subproblems, which technique is useful?`,
      ['Memoization', 'Linking', 'Paging', 'Branch prediction'],
      'Memoization',
    ),
    mcq(
      `${n}. Which statement about a stack is correct in systems terms?`,
      [
        'It usually supports last-in, first-out access',
        'It is the same as a GPU warp',
        'It stores only text files',
        'It replaces the compiler front end',
      ],
      'It usually supports last-in, first-out access',
    ),
    mcq(
      `${n}. Which choice best matches the role of a queue in BFS?`,
      [
        'It keeps the frontier in first-in, first-out order',
        'It stores code comments',
        'It removes the need for graphs',
        'It is a CPU register file',
      ],
      'It keeps the frontier in first-in, first-out order',
    ),
    mcq(
      `${n}. Which phrase best fits a compiler or runtime pass that improves the program without changing semantics?`,
      ['Optimization', 'Rendering', 'Compression', 'Formatting'],
      'Optimization',
    ),
    mcq(
      `${n}. Which answer best fits a low-level performance topic?`,
      [
        'Cache locality matters',
        'Color contrast matters most',
        'Tab width matters most',
        'Font weight matters most',
      ],
      'Cache locality matters',
    ),
    mcq(
      `${n}. Which option is the best match for a GPU or parallel execution model?`,
      [
        'Many lightweight threads execute in parallel',
        'Only one instruction is ever active',
        'The CPU must always wait for text input',
        'The compiler skips memory access',
      ],
      'Many lightweight threads execute in parallel',
    ),
    mcq(
      `${n}. Which closing statement fits this mixed revision day?`,
      [
        'It combines theory and practical reasoning across the stack',
        'It only covers web layouts',
        'It only covers color theory',
        'It only covers HTML tags',
      ],
      'It combines theory and practical reasoning across the stack',
    ),
  ];
}

export const DAILY_MCQ_QUESTION_BANK = Object.fromEntries(
  Object.entries(DAY_TOPICS).map(([day, theme]) => [Number(day), buildQuestions(theme, Number(day))]),
);

export function getDailyMcqQuestions(day) {
  return DAILY_MCQ_QUESTION_BANK[day] || [];
}
