const DAILY_MCQ_START_DATE = '2026-07-03';
const DAILY_MCQ_LENGTH = 40;

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
  {
    topic: "OOP fundamentals",
    title: "Day 21 - Class and Object Basics",
    summary: "Classes, objects, members, and the first object lifecycle ideas.",
    focus: ["class", "object", "members", "constructors"],
  },
  {
    topic: "Access control",
    title: "Day 22 - Encapsulation and Access Control",
    summary: "Private, public, protected, and controlled access patterns.",
    focus: ["encapsulation", "access control", "getters", "setters"],
  },
  {
    topic: "Interfaces",
    title: "Day 23 - Abstraction and Interfaces",
    summary: "Abstract classes, pure virtual functions, and API contracts.",
    focus: ["abstraction", "interfaces", "contracts", "abstract classes"],
  },
  {
    topic: "Inheritance basics",
    title: "Day 24 - Inheritance and Substitutability",
    summary: "Base classes, derived classes, and is-a relationships.",
    focus: ["inheritance", "base class", "derived class", "overriding"],
  },
  {
    topic: "Polymorphism",
    title: "Day 25 - Polymorphism and Dynamic Dispatch",
    summary: "Virtual functions, vtables, and runtime binding behavior.",
    focus: ["polymorphism", "virtual functions", "dynamic binding", "vtable"],
  },
  {
    topic: "Overloading",
    title: "Day 26 - Overloading and Operator Overload",
    summary: "Function overloads, operators, and compile-time dispatch.",
    focus: ["overloading", "operators", "resolution", "compile-time"],
  },
  {
    topic: "Construction",
    title: "Day 27 - Constructors and Initialization",
    summary: "Default, parameterized, copy, and delegating constructors.",
    focus: ["constructors", "initialization", "copying", "delegation"],
  },
  {
    topic: "Destruction",
    title: "Day 28 - Destructors and Resource Cleanup",
    summary: "Destructors, RAII, and safe cleanup during stack unwinding.",
    focus: ["destructors", "RAII", "cleanup", "exceptions"],
  },
  {
    topic: "Object relationships",
    title: "Day 29 - Composition and Aggregation",
    summary: "Composition, aggregation, association, and dependency links.",
    focus: ["composition", "aggregation", "association", "dependency"],
  },
  {
    topic: "Class-level state",
    title: "Day 30 - Static Members and this",
    summary: "Shared class state, const member functions, and the this pointer.",
    focus: ["static members", "this", "const methods", "mutable"],
  },
  {
    topic: "Copy control",
    title: "Day 31 - Copy Control and Ownership",
    summary: "Shallow copy, deep copy, and the rule of three versus zero.",
    focus: ["copy control", "ownership", "copying", "rule of zero"],
  },
  {
    topic: "Move semantics",
    title: "Day 32 - Move Semantics in Classes",
    summary: "Move constructors, move assignment, and moved-from states.",
    focus: ["move constructor", "move assignment", "rvalue references", "noexcept"],
  },
  {
    topic: "Inheritance pitfalls",
    title: "Day 33 - Multiple Inheritance and Diamond Shapes",
    summary: "Multiple inheritance, virtual bases, and the diamond problem.",
    focus: ["multiple inheritance", "virtual inheritance", "diamond problem", "ambiguity"],
  },
  {
    topic: "Polymorphic copying",
    title: "Day 34 - Abstract Types and Slicing",
    summary: "Object slicing, runtime type checks, and polymorphic clones.",
    focus: ["slicing", "runtime type", "factory methods", "clone"],
  },
  {
    topic: "Controlled access",
    title: "Day 35 - Friends and Controlled Access",
    summary: "Friend functions, friend classes, and narrow access escapes.",
    focus: ["friends", "access control", "helpers", "encapsulation"],
  },
  {
    topic: "Static polymorphism",
    title: "Day 36 - Templates and Static Polymorphism",
    summary: "Generic programming, CRTP, and compile-time interfaces.",
    focus: ["templates", "CRTP", "generic programming", "concepts"],
  },
  {
    topic: "Design patterns",
    title: "Day 37 - Design Patterns in OOP",
    summary: "Singleton, factory, strategy, observer, and decorator patterns.",
    focus: ["singleton", "factory", "strategy", "observer"],
  },
  {
    topic: "Design principles",
    title: "Day 38 - SOLID Principles",
    summary: "SRP, OCP, LSP, ISP, and DIP for cleaner object design.",
    focus: ["SRP", "OCP", "LSP", "DIP"],
  },
  {
    topic: "RTTI and casting",
    title: "Day 39 - RTTI and Safe Casting",
    summary: "static_cast, dynamic_cast, typeid, and polymorphic checks.",
    focus: ["RTTI", "casting", "typeid", "safety"],
  },
  {
    topic: "Advanced class design",
    title: "Day 40 - Pimpl, Lifetime, and Value Semantics",
    summary: "Pimpl, copy elision, object lifetime, and aggregate initialization.",
    focus: ["pimpl", "lifetime", "value semantics", "initialization"],
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
