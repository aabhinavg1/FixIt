const DAILY_MCQ_START_DATE = '2026-07-03';
const DAILY_MCQ_LENGTH = 20;

const DAILY_MCQ_THEMES = [
  {
    topic: 'C++ warm-up',
    title: 'Day 01 - C++ Foundations',
    summary: 'Core syntax, types, control flow, and mental warm-up questions.',
    focus: ['C++', 'syntax', 'types', 'control flow'],
  },
  {
    topic: 'DSA warm-up',
    title: 'Day 02 - Arrays, Strings, and Complexity',
    summary: 'Linear scans, prefix thinking, and complexity basics.',
    focus: ['DSA', 'arrays', 'strings', 'complexity'],
  },
  {
    topic: 'Compiler basics',
    title: 'Day 03 - Compiler Pipeline',
    summary: 'Lexing, parsing, ASTs, and the source-to-binary journey.',
    focus: ['compiler', 'lexer', 'parser', 'AST'],
  },
  {
    topic: 'Operating systems',
    title: 'Day 04 - Processes and Threads',
    summary: 'Fork, exec, scheduling, synchronization, and concurrency basics.',
    focus: ['OS', 'processes', 'threads', 'scheduling'],
  },
  {
    topic: 'CPU basics',
    title: 'Day 05 - CPU Execution Flow',
    summary: 'Fetch, decode, execute, caches, and how instructions move.',
    focus: ['CPU', 'pipeline', 'cache', 'memory'],
  },
  {
    topic: 'STL and containers',
    title: 'Day 06 - STL and Containers',
    summary: 'Vectors, maps, sets, iterators, and common container tradeoffs.',
    focus: ['C++', 'STL', 'containers', 'iterators'],
  },
  {
    topic: 'Memory management',
    title: 'Day 07 - Pointers and Memory',
    summary: 'Pointers, references, stack vs heap, and ownership patterns.',
    focus: ['C++', 'pointers', 'memory', 'ownership'],
  },
  {
    topic: 'Recursion and DP',
    title: 'Day 08 - Recursion and Dynamic Programming',
    summary: 'Subproblems, memoization, and state reduction techniques.',
    focus: ['DSA', 'recursion', 'DP', 'memoization'],
  },
  {
    topic: 'GPU fundamentals',
    title: 'Day 09 - GPU Execution Model',
    summary: 'Warps, work-groups, occupancy, and memory coalescing basics.',
    focus: ['GPU', 'warps', 'occupancy', 'memory'],
  },
  {
    topic: 'Compiler IR',
    title: 'Day 10 - IR and SSA',
    summary: 'Lowering, intermediate representations, and SSA reasoning.',
    focus: ['compiler', 'IR', 'SSA', 'optimizations'],
  },
  {
    topic: 'Modern C++',
    title: 'Day 11 - Modern C++ Features',
    summary: 'Move semantics, lambdas, smart pointers, and newer language tools.',
    focus: ['C++', 'modern C++', 'move', 'lambdas'],
  },
  {
    topic: 'Concurrency',
    title: 'Day 12 - Concurrency and Synchronization',
    summary: 'Atomics, locks, data races, and concurrent design choices.',
    focus: ['OS', 'concurrency', 'atomics', 'locks'],
  },
  {
    topic: 'Systems memory',
    title: 'Day 13 - Virtual Memory and Paging',
    summary: 'Address translation, paging, and cache-friendly thinking.',
    focus: ['OS', 'virtual memory', 'paging', 'cache'],
  },
  {
    topic: 'IPC and signals',
    title: 'Day 14 - IPC and Signals',
    summary: 'Pipes, shared memory, signals, and communication between processes.',
    focus: ['OS', 'IPC', 'signals', 'pipes'],
  },
  {
    topic: 'Performance',
    title: 'Day 15 - Performance and Profiling',
    summary: 'Locality, throughput, bottlenecks, and practical tuning questions.',
    focus: ['performance', 'profiling', 'cache', 'throughput'],
  },
  {
    topic: 'GPU memory',
    title: 'Day 16 - GPU Memory and Kernels',
    summary: 'Device memory, latency hiding, kernels, and synchronization.',
    focus: ['GPU', 'kernels', 'memory', 'synchronization'],
  },
  {
    topic: 'Parser internals',
    title: 'Day 17 - Parsing and Syntax Trees',
    summary: 'Grammar, parse trees, AST shape, and front-end reasoning.',
    focus: ['compiler', 'parsing', 'grammar', 'AST'],
  },
  {
    topic: 'Low-level systems',
    title: 'Day 18 - Low-Level Systems Basics',
    summary: 'ABI, calling conventions, file descriptors, and kernel boundaries.',
    focus: ['systems', 'ABI', 'FDs', 'kernel'],
  },
  {
    topic: 'Mixed revision',
    title: 'Day 19 - Mixed DSA and Interview Drill',
    summary: 'Graphs, stacks, queues, trees, and interview-style reasoning.',
    focus: ['DSA', 'graphs', 'trees', 'interviews'],
  },
  {
    topic: 'Final revision',
    title: 'Day 20 - Final Mixed Revision',
    summary: 'A balanced last round across C++, DSA, compilers, OS, CPU, and GPU.',
    focus: ['C++', 'DSA', 'compiler', 'OS', 'CPU', 'GPU'],
  },
];

function addDaysToIsoDate(isoDate, daysToAdd) {
  const base = new Date(`${isoDate}T00:00:00Z`);
  base.setUTCDate(base.getUTCDate() + daysToAdd);
  return base.toISOString().slice(0, 10);
}

function padDay(day) {
  return String(day).padStart(2, '0');
}

function buildDailyMcqEntry(theme, index) {
  const day = index + 1;
  const releaseDate = addDaysToIsoDate(DAILY_MCQ_START_DATE, index);
  const slug = `/docs/mcq/daily/day-${padDay(day)}`;

  return {
    day,
    slug,
    releaseDate,
    topic: theme.topic,
    title: theme.title,
    summary: theme.summary,
    focus: theme.focus,
  };
}

export const DAILY_MCQ_SERIES_START_DATE = DAILY_MCQ_START_DATE;
export const DAILY_MCQ_SERIES_LENGTH = DAILY_MCQ_LENGTH;
export const DAILY_MCQ_SERIES = DAILY_MCQ_THEMES.map(buildDailyMcqEntry);

export function getDailyMcqDay(day) {
  return DAILY_MCQ_SERIES.find((entry) => entry.day === day) || null;
}

export function getDailyMcqDayPath(day) {
  const entry = getDailyMcqDay(day);
  return entry ? entry.slug : null;
}

export function getDailyMcqByDate(date = new Date()) {
  const currentDate = date.toISOString().slice(0, 10);
  return DAILY_MCQ_SERIES.find((entry) => entry.releaseDate === currentDate) || null;
}

export function getLatestUnlockedDailyMcq(date = new Date()) {
  const currentDate = date.toISOString().slice(0, 10);
  return DAILY_MCQ_SERIES.filter((entry) => entry.releaseDate <= currentDate).at(-1) || null;
}

export function isDailyMcqUnlocked(releaseDate, date = new Date()) {
  return date.toISOString().slice(0, 10) >= releaseDate;
}

export function formatDailyMcqDate(dateString) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${dateString}T00:00:00Z`));
}
