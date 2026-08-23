const DAILY_MCQ_START_DATE = '2026-07-03';
const DAILY_MCQ_LENGTH = 100;

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
  {
    topic: "Compilers",
    title: "Day 41 - Lexical Analysis",
    summary: "Tokens, lexemes, scanners, transition diagrams, longest match.",
    focus: ["token", "lexeme", "lexer", "scanner design"],
  },
  {
    topic: "Compilers",
    title: "Day 42 - Regular Languages and Automata",
    summary: "Regex, NFA, DFA, epsilon transitions, subset construction.",
    focus: ["regex", "nfa", "dfa", "automata"],
  },
  {
    topic: "Compilers",
    title: "Day 43 - Grammars and Parse Trees",
    summary: "CFGs, productions, derivations, parse trees, ambiguity.",
    focus: ["cfg", "derivation", "parse tree", "ambiguity"],
  },
  {
    topic: "Compilers",
    title: "Day 44 - Top-Down Parsing",
    summary: "Recursive descent, LL(1), left recursion, FIRST sets.",
    focus: ["recursive descent", "ll1", "left recursion", "first set"],
  },
  {
    topic: "Compilers",
    title: "Day 45 - Bottom-Up Parsing",
    summary: "Shift-reduce, handles, LR parsing, LALR, parser generators.",
    focus: ["shift-reduce", "handle", "lr parser", "lalr"],
  },
  {
    topic: "Compilers",
    title: "Day 46 - ASTs and Symbol Tables",
    summary: "ASTs, symbol tables, scopes, syntax-directed translation.",
    focus: ["ast", "symbol table", "scope", "attributes"],
  },
  {
    topic: "Compilers",
    title: "Day 47 - Semantic Analysis",
    summary: "Type checking, conversions, lvalues vs rvalues, name resolution.",
    focus: ["type checking", "conversion", "lvalue", "name resolution"],
  },
  {
    topic: "Compilers",
    title: "Day 48 - Intermediate Representations",
    summary: "IR, three-address code, quadruples, basic blocks, CFGs.",
    focus: ["ir", "three-address code", "basic block", "control-flow graph"],
  },
  {
    topic: "Compilers",
    title: "Day 49 - SSA and Data-Flow Analysis",
    summary: "SSA form, phi nodes, reaching definitions, liveness, def-use chains.",
    focus: ["ssa", "phi node", "liveness", "data-flow"],
  },
  {
    topic: "Compilers",
    title: "Day 50 - Local Optimizations",
    summary: "Folding, propagation, DCE, CSE, copy propagation.",
    focus: ["constant folding", "dce", "cse", "propagation"],
  },
  {
    topic: "Compilers",
    title: "Day 51 - Loop Optimization and Register Allocation",
    summary: "LICM, unrolling, graph coloring, spilling.",
    focus: ["licm", "unrolling", "register allocation", "spill"],
  },
  {
    topic: "Compilers",
    title: "Day 52 - Linkers and Loaders",
    summary: "Object files, symbols, relocation, static and dynamic linking.",
    focus: ["object file", "relocation", "linking", "loader"],
  },
  {
    topic: "Operating Systems",
    title: "Day 53 - Process Fundamentals",
    summary: "Processes, PCBs, states, context switches, system calls.",
    focus: ["process", "pcb", "context switch", "system call"],
  },
  {
    topic: "Operating Systems",
    title: "Day 54 - CPU Scheduling Algorithms",
    summary: "FCFS, SJF, round robin, priority scheduling, time quanta.",
    focus: ["fcfs", "sjf", "round robin", "priority"],
  },
  {
    topic: "Operating Systems",
    title: "Day 55 - Scheduling Metrics and Starvation",
    summary: "Turnaround, waiting time, response time, starvation, aging.",
    focus: ["turnaround", "waiting time", "starvation", "aging"],
  },
  {
    topic: "Operating Systems",
    title: "Day 56 - Threads and Concurrency Models",
    summary: "User vs kernel threads, thread pools, thread safety.",
    focus: ["thread", "user-level", "kernel-level", "thread pool"],
  },
  {
    topic: "Operating Systems",
    title: "Day 57 - Synchronization Primitives",
    summary: "Race conditions, critical sections, mutexes, spinlocks, condition variables.",
    focus: ["race condition", "critical section", "mutex", "spinlock"],
  },
  {
    topic: "Operating Systems",
    title: "Day 58 - Classic Synchronization Problems",
    summary: "Producer-consumer, readers-writers, dining philosophers, monitors.",
    focus: ["producer-consumer", "readers-writers", "philosophers", "monitor"],
  },
  {
    topic: "Operating Systems",
    title: "Day 59 - Deadlock Fundamentals",
    summary: "Deadlocks, Coffman conditions, circular wait, resource graphs.",
    focus: ["deadlock", "hold and wait", "circular wait", "rag"],
  },
  {
    topic: "Operating Systems",
    title: "Day 60 - Deadlock Handling Strategies",
    summary: "Prevention, avoidance, the Banker algorithm, safe states, recovery.",
    focus: ["prevention", "avoidance", "banker algorithm", "safe state"],
  },
  {
    topic: "Operating Systems",
    title: "Day 61 - Memory Allocation Strategies",
    summary: "Contiguous allocation, fragmentation kinds, compaction, buddy allocators.",
    focus: ["fragmentation", "compaction", "buddy allocator", "partitions"],
  },
  {
    topic: "Operating Systems",
    title: "Day 62 - Paging",
    summary: "Pages and frames, page tables, TLBs, multilevel tables.",
    focus: ["paging", "page table", "tlb", "multilevel"],
  },
  {
    topic: "Operating Systems",
    title: "Day 63 - Virtual Memory",
    summary: "Demand paging, page faults, working sets, thrashing.",
    focus: ["demand paging", "page fault", "working set", "thrashing"],
  },
  {
    topic: "Operating Systems",
    title: "Day 64 - Page Replacement Policies",
    summary: "FIFO, LRU, optimal, Belady anomaly, clock algorithm.",
    focus: ["fifo", "lru", "belady", "clock"],
  },
  {
    topic: "Operating Systems",
    title: "Day 65 - Segmentation and Protection",
    summary: "Segments, logical addresses, faults, protection keys, copy-on-write.",
    focus: ["segmentation", "logical address", "protection", "copy-on-write"],
  },
  {
    topic: "Operating Systems",
    title: "Day 66 - File Systems",
    summary: "Inodes, descriptors, directory entries, journaling, CoW filesystems.",
    focus: ["inode", "file descriptor", "journaling", "cow fs"],
  },
  {
    topic: "Operating Systems",
    title: "Day 67 - Disk Scheduling and RAID",
    summary: "Seek time, rotational latency, SCAN, RAID levels, wear leveling.",
    focus: ["seek time", "scan", "raid", "wear leveling"],
  },
  {
    topic: "Operating Systems",
    title: "Day 68 - IPC and Signals",
    summary: "Pipes, message queues, signals, sockets.",
    focus: ["ipc", "pipe", "signal", "socket"],
  },
  {
    topic: "Computer Architecture",
    title: "Day 69 - Processor Organization Basics",
    summary: "Von Neumann vs Harvard, system buses, address width, word size.",
    focus: ["von neumann", "harvard", "system bus", "word size"],
  },
  {
    topic: "Computer Architecture",
    title: "Day 70 - Instruction Cycle and Registers",
    summary: "Fetch-decode-execute, PC, IR, MAR, MDR.",
    focus: ["fetch decode execute", "pc", "ir", "mar mdr"],
  },
  {
    topic: "Computer Architecture",
    title: "Day 71 - Addressing Modes",
    summary: "Immediate, direct, indirect, indexed operand access.",
    focus: ["addressing modes", "immediate", "indirect", "indexed"],
  },
  {
    topic: "Computer Architecture",
    title: "Day 72 - Cache Memory Principles",
    summary: "Caches, locality of reference, temporal and spatial locality, cache lines.",
    focus: ["cache", "locality", "temporal", "spatial", "cache line"],
  },
  {
    topic: "Computer Architecture",
    title: "Day 73 - Cache Organization",
    summary: "Hits, direct mapping, associativity, tags and valid bits.",
    focus: ["hit rate", "direct mapped", "set associative", "tag"],
  },
  {
    topic: "Computer Architecture",
    title: "Day 74 - Cache Policies and Coherence",
    summary: "Write-through vs write-back, dirty bits, MESI coherence.",
    focus: ["write-through", "write-back", "dirty bit", "mesi"],
  },
  {
    topic: "Computer Architecture",
    title: "Day 75 - Instruction Pipelining",
    summary: "Pipeline stages, registers, throughput, hazards, bubbles.",
    focus: ["pipeline", "throughput", "hazard", "bubble"],
  },
  {
    topic: "Computer Architecture",
    title: "Day 76 - Pipeline Hazards and Forwarding",
    summary: "Structural, data, and control hazards; forwarding; load-use gaps.",
    focus: ["structural hazard", "data hazard", "forwarding", "load-use"],
  },
  {
    topic: "Computer Architecture",
    title: "Day 77 - Advanced CPU Techniques",
    summary: "Branch prediction, speculation, superscalar, OoO, renaming.",
    focus: ["branch prediction", "speculation", "superscalar", "out-of-order"],
  },
  {
    topic: "Computer Architecture",
    title: "Day 78 - Control Unit Design",
    summary: "Hardwired vs microprogrammed control, micro-ops, control words.",
    focus: ["control unit", "hardwired", "microprogram", "micro-operation"],
  },
  {
    topic: "Computer Architecture",
    title: "Day 79 - Interrupts and DMA",
    summary: "Interrupts, ISRs, vectored dispatch, polling, DMA.",
    focus: ["interrupt", "isr", "polling", "dma"],
  },
  {
    topic: "Computer Architecture",
    title: "Day 80 - Data Representation and Arithmetic",
    summary: "Two complement, endianness, flags, overflow, Booth multiplication.",
    focus: ["two complement", "endianness", "overflow", "booth"],
  },
  {
    topic: "Networking",
    title: "Day 81 - Network Models",
    summary: "Protocols, OSI layers, encapsulation, TCP/IP stack, PDUs.",
    focus: ["osi", "encapsulation", "tcp/ip", "pdu"],
  },
  {
    topic: "Networking",
    title: "Day 82 - Link Layer Fundamentals",
    summary: "MAC addresses, ARP, Ethernet frames, CSMA/CD, collision domains.",
    focus: ["mac address", "arp", "ethernet", "csma/cd"],
  },
  {
    topic: "Networking",
    title: "Day 83 - IP Layer and Routing",
    summary: "IPv4 addressing, subnet masks, gateways, routing tables, TTL.",
    focus: ["ipv4", "subnet mask", "gateway", "ttl"],
  },
  {
    topic: "Networking",
    title: "Day 84 - Transport Layer TCP and UDP",
    summary: "Ports, the three-way handshake, flow and congestion control, UDP.",
    focus: ["tcp", "udp", "handshake", "flow control"],
  },
  {
    topic: "Networking",
    title: "Day 85 - DNS and Name Resolution",
    summary: "DNS hierarchy, resolvers, authoritative servers, record types, caching.",
    focus: ["dns", "resolver", "authoritative", "records"],
  },
  {
    topic: "Networking",
    title: "Day 86 - Web Protocols",
    summary: "HTTP methods, status codes, TLS handshakes, certificates, cookies.",
    focus: ["http", "status code", "tls", "cookie"],
  },
  {
    topic: "Databases",
    title: "Day 87 - Relational Model",
    summary: "Relations, tuples and attributes, keys, NULL semantics.",
    focus: ["relation", "primary key", "foreign key", "null"],
  },
  {
    topic: "Databases",
    title: "Day 88 - SQL Essentials",
    summary: "DDL vs DML, joins, aggregates, subqueries.",
    focus: ["ddl", "dml", "join", "aggregate"],
  },
  {
    topic: "Databases",
    title: "Day 89 - Normalization",
    summary: "Functional dependencies, partial and transitive dependencies, 3NF, denormalization.",
    focus: ["fd", "partial dependency", "3nf", "denormalization"],
  },
  {
    topic: "Databases",
    title: "Day 90 - Indexes and Query Execution",
    summary: "Indexes, B-trees, clustered indexes, covering indexes, query plans.",
    focus: ["index", "b-tree", "clustered", "query plan"],
  },
  {
    topic: "Databases",
    title: "Day 91 - Transactions and ACID",
    summary: "ACID properties, commit and rollback, isolation levels, dirty reads.",
    focus: ["acid", "commit", "isolation level", "dirty read"],
  },
  {
    topic: "Databases",
    title: "Day 92 - Concurrency Control",
    summary: "Two-phase locking, MVCC, optimistic schemes, lost updates, phantoms.",
    focus: ["2pl", "mvcc", "optimistic", "phantom read"],
  },
  {
    topic: "Developer Tooling",
    title: "Day 93 - Version Control with Git",
    summary: "Commits as snapshots, branches, conflicts, rebasing.",
    focus: ["git", "commit", "branch", "rebase"],
  },
  {
    topic: "Developer Tooling",
    title: "Day 94 - Build Systems and CI",
    summary: "Build systems, incremental builds, toolchains, cross-compilation, CI.",
    focus: ["build system", "incremental build", "toolchain", "ci"],
  },
  {
    topic: "Developer Tooling",
    title: "Day 95 - Debugging and Profiling",
    summary: "Breakpoints, watchpoints, core dumps, profilers, flame graphs.",
    focus: ["breakpoint", "watchpoint", "core dump", "flame graph"],
  },
  {
    topic: "Developer Tooling",
    title: "Day 96 - Testing Discipline",
    summary: "Unit and integration tests, doubles, regression tests, coverage.",
    focus: ["unit test", "integration test", "mock", "coverage"],
  },
  {
    topic: "Modern C++ and Performance",
    title: "Day 97 - Undefined Behavior and Specifications",
    summary: "UB, implementation-defined vs unspecified, strict aliasing, signed overflow.",
    focus: ["ub", "implementation-defined", "strict aliasing", "overflow"],
  },
  {
    topic: "Modern C++ and Performance",
    title: "Day 98 - ABI and Interoperability",
    summary: "ABIs, name mangling, the ODR, extern C, opaque pointers.",
    focus: ["abi", "mangling", "odr", "extern c"],
  },
  {
    topic: "Modern C++ and Performance",
    title: "Day 99 - Memory Model and Atomics",
    summary: "Memory models, atomics, ordering, happens-before, CAS.",
    focus: ["memory model", "atomic", "ordering", "cas"],
  },
  {
    topic: "Modern C++ and Performance",
    title: "Day 100 - Performance Engineering Mindset",
    summary: "Benchmarks, Amdahl law, SIMD, cache blocking, premature optimization.",
    focus: ["benchmark", "amdahl", "simd", "blocking"],
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
