import { DAY_01_QUESTIONS } from './mcqDailyQuestionsDay01';

function fact(term, definition, use, statement, area) {
  return { term, definition, use, statement, area };
}

function rotateOptions(correct, distractors, seed) {
  const pool = [correct, ...distractors];
  const unique = [];

  for (const item of pool) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }

  while (unique.length < 4) {
    unique.push(`Distractor ${unique.length}`);
  }

  const rotated = unique.slice(0, 4);
  const shift = seed % 4;
  return rotated.slice(shift).concat(rotated.slice(0, shift));
}

function makeQuestion(question, correct, distractors, seed) {
  return {
    question,
    options: rotateOptions(correct, distractors, seed),
    answer: correct,
  };
}

function buildQuestions(dayTitle, facts, dayNumber) {
  return facts.flatMap((item, index) => {
    const otherDefinitions = facts.filter((_, i) => i !== index).map((f) => f.definition);
    const otherUses = facts.filter((_, i) => i !== index).map((f) => f.use);
    const otherStatements = facts.filter((_, i) => i !== index).map((f) => f.statement);
    const otherAreas = facts.filter((_, i) => i !== index).map((f) => f.area);
    const baseQuestionNumber = index * 4;

    return [
      makeQuestion(
        `${String(baseQuestionNumber + 1).padStart(2, '0')}. What does \`${item.term}\` mean in ${dayTitle}?`,
        item.definition,
        otherDefinitions,
        index,
      ),
      makeQuestion(
        `${String(baseQuestionNumber + 2).padStart(2, '0')}. Which use best matches \`${item.term}\`?`,
        item.use,
        otherUses,
        index + 1,
      ),
      makeQuestion(
        `${String(baseQuestionNumber + 3).padStart(2, '0')}. Which statement about \`${item.term}\` is correct?`,
        item.statement,
        otherStatements,
        index + 2,
      ),
      makeQuestion(
        `${String(baseQuestionNumber + 4).padStart(2, '0')}. Which topic area best fits \`${item.term}\`?`,
        item.area,
        otherAreas,
        index + 3,
      ),
    ];
  });
}

const DAY_BANK = {
  1: {
    title: 'C++ Foundations',
    facts: [
      fact('std::cout', 'the standard output stream', 'printing formatted text to the console', 'It comes from the <iostream> header.', 'C++ I/O'),
      fact('const', 'a qualifier that makes an object read-only after initialization', 'preventing accidental modification', 'A const variable cannot be reassigned after it is initialized.', 'C++ type qualifiers'),
      fact('reference', 'an alias for an existing object', 'passing or returning objects without copying them', 'A reference must bind to a valid object.', 'C++ references'),
      fact('scope resolution operator', 'the :: operator used to qualify a name', 'accessing namespace or class members', 'It helps name things such as std::vector and class methods.', 'C++ namespaces'),
      fact('vector', 'a resizable contiguous sequence container', 'storing elements with random access', 'Its elements are stored contiguously in memory.', 'STL containers'),
    ],
  },
  2: {
    title: 'Arrays, Strings, and Complexity',
    facts: [
      fact('array', 'a fixed-size contiguous block of elements', 'storing a small group of items with direct indexing', 'A built-in array has its size fixed when the array is created.', 'arrays'),
      fact('std::string', 'a C++ class for text with helper functions', 'working with text and character data', 'std::string manages its own storage and size information.', 'strings'),
      fact('prefix sum', 'a running-total technique for preprocessing values', 'answering many range-sum queries quickly', 'Prefix sums let you answer interval sums after one preprocessing pass.', 'prefix sums'),
      fact('binary search', 'a search method that repeatedly halves a sorted range', 'finding values in sorted data in logarithmic time', 'Binary search requires the data to be sorted.', 'searching'),
      fact('deque', 'a double-ended queue container', 'pushing and popping efficiently at both ends', 'A deque supports fast insertion at the front and back.', 'STL containers'),
    ],
  },
  3: {
    title: 'Compiler Pipeline',
    facts: [
      fact('preprocessor', 'the phase that handles #include and #define directives', 'expanding macros and including headers before compilation', 'The preprocessor runs before the compiler proper.', 'build pipeline'),
      fact('lexer', 'the component that turns characters into tokens', 'identifying keywords, identifiers, and literals', 'The lexer produces tokens for the parser.', 'front end'),
      fact('parser', 'the phase that builds syntax structure from tokens', 'checking grammar and building an AST-like structure', 'The parser consumes the token stream.', 'parsing'),
      fact('object file', 'the result of compiling one translation unit', 'linking later with other compiled units', 'An object file can still contain unresolved external symbols.', 'code generation'),
      fact('linker', 'the tool that combines object files and resolves symbols', 'creating an executable or library from compiled pieces', 'The linker matches declarations to definitions across files.', 'linking'),
    ],
  },
  4: {
    title: 'Processes and Threads',
    facts: [
      fact('std::thread', 'the C++ thread object', 'launching concurrent work in a C++ program', 'A std::thread represents one execution thread.', 'concurrency'),
      fact('mutex', 'an exclusive lock for a critical section', 'protecting shared data from concurrent access', 'Only one thread should hold a mutex at a time.', 'synchronization'),
      fact('condition_variable', 'a synchronization primitive for waiting on a condition', 'blocking until work becomes available', 'It is usually paired with a mutex and a predicate.', 'synchronization'),
      fact('fork', 'a POSIX call that creates a child process', 'duplicating the current process to create a child', 'The child initially gets a copy of the parent address space.', 'processes'),
      fact('exec', 'a family of calls that replaces the current process image', 'starting a different program in the same process', 'exec does not create a new process on its own.', 'process management'),
    ],
  },
  5: {
    title: 'CPU Execution and Cache',
    facts: [
      fact('cache line', 'the unit of data transferred between memory and cache', 'understanding why nearby data is often reused together', 'Adjacent data often shares a cache line.', 'memory hierarchy'),
      fact('reserve', 'a vector method that preallocates capacity', 'avoiding repeated reallocations while growing a vector', 'reserve can reduce iterator invalidation caused by growth.', 'vector performance'),
      fact('branch prediction', 'the CPU technique that guesses control-flow direction', 'reducing pipeline stalls on predictable branches', 'A predictable branch is usually faster than a random one.', 'CPU execution'),
      fact('contiguous access', 'reading memory in sequence rather than jumping around', 'writing cache-friendly loops over arrays or vectors', 'Sequential access is usually faster than random access.', 'locality'),
      fact('false sharing', 'a performance problem where separate variables share one cache line', 'padding hot per-thread counters to avoid cache ping-pong', 'It can hurt performance even when threads update different variables.', 'multithreading performance'),
    ],
  },
  6: {
    title: 'STL and Containers',
    facts: [
      fact('map', 'an ordered associative container', 'key lookup when you want sorted keys', 'A map keeps its keys in order.', 'associative containers'),
      fact('unordered_map', 'a hash-table-based key-value container', 'average constant-time key lookup', 'Its key order is unspecified.', 'hashing'),
      fact('set', 'an ordered container that stores unique keys', 'membership tests without duplicates', 'A set does not store duplicate keys.', 'associative containers'),
      fact('list', 'a doubly linked list container', 'frequent insert and erase in the middle', 'A list does not provide random access.', 'sequence containers'),
      fact('iterator invalidation', 'the loss of validity of iterators after a container changes', 'updating containers carefully after reallocation or erase', 'Vector growth can invalidate existing iterators.', 'iterator rules'),
    ],
  },
  7: {
    title: 'Pointers and Memory',
    facts: [
      fact('pointer', 'a variable that stores an address', 'indirectly accessing an object through its address', 'A pointer can be null.', 'pointers'),
      fact('reference', 'an alias that cannot be reseated', 'passing objects without copying them', 'A reference must be initialized when it is created.', 'references'),
      fact('new/delete', 'the pair used for dynamic allocation and deallocation', 'managing heap memory in raw C++', 'delete must match the allocation form used by new.', 'dynamic memory'),
      fact('unique_ptr', 'a smart pointer with exclusive ownership', 'managing a resource that has a single owner', 'A unique_ptr cannot be copied.', 'smart pointers'),
      fact('shared_ptr', 'a reference-counted smart pointer with shared ownership', 'allowing multiple owners of one resource', 'Copying a shared_ptr increases its control-block count.', 'smart pointers'),
    ],
  },
  8: {
    title: 'Recursion and Dynamic Programming',
    facts: [
      fact('base case', 'the stopping condition for a recursive function', 'preventing infinite recursion', 'Every recursive function needs at least one base case.', 'recursion'),
      fact('memoization', 'caching previously solved subproblems', 'top-down dynamic programming', 'Memoization trades extra memory for fewer repeated calls.', 'dynamic programming'),
      fact('bottom-up DP', 'an iterative way to build answers from smaller states', 'tabulation over subproblems', 'Bottom-up DP usually starts from smaller subproblems.', 'dynamic programming'),
      fact('overlapping subproblems', 'the same subproblem appearing many times', 'spotting where DP can replace repeated recursion', 'Memoization helps when subproblems repeat.', 'DP theory'),
      fact('call stack', 'the runtime stack used to track function calls', 'keeping recursion state while functions call other functions', 'Deep recursion can overflow the call stack.', 'runtime execution'),
    ],
  },
  9: {
    title: 'GPU Execution Model',
    facts: [
      fact('kernel', 'a function executed on the GPU', 'launching parallel work on the device', 'A kernel is usually marked with __global__ in CUDA.', 'GPU programming'),
      fact('warp', 'a group of GPU threads that execute together', 'SIMT execution on NVIDIA hardware', 'A warp commonly contains 32 threads on NVIDIA GPUs.', 'execution model'),
      fact('shared memory', 'fast on-chip memory shared by threads in a block', 'cooperating on data with lower latency than global memory', 'Shared memory is faster than global memory but much smaller.', 'GPU memory'),
      fact('coalescing', 'arranging accesses so adjacent threads touch adjacent memory', 'reducing memory traffic and improving throughput', 'Coalesced loads are generally more efficient.', 'GPU memory access'),
      fact('syncthreads', 'a block-level barrier synchronization point', 'making all threads in a block wait for each other', 'All threads in the block must reach __syncthreads().', 'synchronization'),
    ],
  },
  10: {
    title: 'LLVM IR and SSA',
    facts: [
      fact('SSA', 'static single assignment form', 'simplifying optimization by giving each value one definition', 'A phi node helps merge values from different predecessors in SSA.', 'IR design'),
      fact('phi node', 'an SSA instruction that selects a value based on control-flow predecessor', 'merging values at control-flow joins', 'A phi node appears at the top of a block with multiple incoming edges.', 'SSA'),
      fact('basic block', 'a straight-line sequence with one entry and one exit', 'building a control-flow graph', 'A branch instruction usually ends a basic block.', 'control flow'),
      fact('IR', 'intermediate representation', 'target-independent optimization and analysis', 'LLVM IR sits between source code and machine code.', 'compiler pipeline'),
      fact('mem2reg', 'an optimization that promotes stack variables into SSA registers', 'removing unnecessary loads and stores', 'mem2reg often makes later optimizations easier.', 'optimization'),
    ],
  },
  11: {
    title: 'Modern C++ Features',
    facts: [
      fact('auto', 'the type-deduction keyword', 'avoiding long explicit type names', 'auto deduces the type from the initializer.', 'type deduction'),
      fact('move semantics', 'a way to transfer resource ownership instead of copying', 'avoiding expensive deep copies', 'std::move does not move data by itself; it casts to an rvalue.', 'value categories'),
      fact('lambda', 'an unnamed callable object', 'writing short inline functions', 'A lambda can capture variables from the surrounding scope.', 'functional features'),
      fact('constexpr', 'a marker for compile-time evaluable expressions', 'doing computation during compilation when possible', 'A constexpr function can often be evaluated at compile time.', 'compile-time programming'),
      fact('std::optional', 'a type that can hold either a value or no value', 'expressing maybe-result semantics without sentinel values', 'std::optional helps represent an absent value explicitly.', 'modern utilities'),
    ],
  },
  12: {
    title: 'Concurrency and Synchronization',
    facts: [
      fact('atomic', 'an operation that is indivisible with respect to other threads', 'building counters and lock-free state safely', 'Atomic operations help prevent data races on that object.', 'concurrency'),
      fact('lock_guard', 'a small RAII wrapper for a mutex', 'scoped locking with automatic unlock', 'A lock_guard unlocks automatically when it leaves scope.', 'synchronization'),
      fact('condition_variable', 'a wait/notify synchronization primitive', 'coordinating producer-consumer style threads', 'It is commonly used with a mutex and a predicate.', 'coordination'),
      fact('deadlock', 'a situation where threads wait forever on each other', 'spotting lock-order bugs in concurrent code', 'Deadlock can happen when two mutexes are locked in opposite order.', 'concurrency hazards'),
      fact('data race', 'unsynchronized concurrent access to shared data', 'avoiding undefined behavior in multithreaded code', 'In C++, a data race causes undefined behavior.', 'concurrency hazards'),
    ],
  },
  13: {
    title: 'Virtual Memory and Paging',
    facts: [
      fact('page', 'a fixed-size chunk of virtual memory', 'the unit the operating system manages for paging', 'The OS manages memory in pages.', 'memory management'),
      fact('page fault', 'an access to a page that is not currently resident or mapped', 'demand paging and lazy loading of memory', 'A page fault can trigger the OS to load a page into RAM.', 'paging'),
      fact('TLB', 'the translation lookaside buffer', 'caching virtual-to-physical address translations', 'A TLB hit speeds up address translation.', 'address translation'),
      fact('mmap', 'a call that maps files or anonymous memory into an address space', 'memory-mapped file access', 'mmap can let a program access a file like memory.', 'virtual memory'),
      fact('copy-on-write', 'sharing pages until one side writes', 'efficient process creation and memory sharing', 'After a write, the shared page is duplicated.', 'memory optimization'),
    ],
  },
  14: {
    title: 'IPC and Signals',
    facts: [
      fact('pipe', 'a unidirectional byte stream between processes', 'parent-child communication or shell pipelines', 'A pipe has a read end and a write end.', 'IPC'),
      fact('signal', 'an asynchronous notification sent to a process', 'interrupting or notifying a running program', 'SIGINT is usually generated by Ctrl-C.', 'process control'),
      fact('shared memory', 'a memory region mapped into more than one process', 'fast IPC for bulk data', 'Both processes can access the same mapped region.', 'IPC'),
      fact('file descriptor', 'an integer handle for an open resource', 'working with files, sockets, and pipes in Unix', 'open returns a file descriptor on success.', 'Unix I/O'),
      fact('waitpid', 'a call that waits for child process state changes', 'reaping children and avoiding zombies', 'waitpid can prevent zombies when used correctly.', 'process management'),
    ],
  },
  15: {
    title: 'Performance and Profiling',
    facts: [
      fact('profiling', 'measuring where a program spends time', 'finding hot paths before optimizing', 'Profiling helps identify bottlenecks before optimization work.', 'performance analysis'),
      fact('-O2', 'a compiler optimization level that balances speed and build time', 'building optimized release binaries', 'O2 usually enables more optimizations than O0.', 'compiler flags'),
      fact('inlining', 'replacing a call with the function body', 'reducing call overhead in small functions', 'Small functions are often good candidates for inlining.', 'optimization'),
      fact('microbenchmark', 'a tiny benchmark for one specific operation', 'comparing implementation choices carefully', 'A microbenchmark can mislead you if the compiler optimizes too aggressively.', 'measurement'),
      fact('cache locality', 'keeping accessed data close together in memory', 'improving throughput with contiguous access', 'Contiguous data often performs better than scattered data.', 'performance'),
    ],
  },
  16: {
    title: 'GPU Memory and Kernels',
    facts: [
      fact('global memory', 'the large but high-latency device memory on a GPU', 'storing large arrays and input buffers', 'Global memory is slower than shared memory.', 'GPU memory'),
      fact('shared memory', 'a fast per-block scratchpad memory', 'cooperating on tiles of data inside a block', 'Shared memory is often used to stage data for reuse.', 'GPU memory'),
      fact('occupancy', 'the ratio of active warps to the maximum supported', 'balancing registers and shared memory usage', 'Higher occupancy can help hide memory latency.', 'execution efficiency'),
      fact('bank conflict', 'contention when multiple threads hit the same shared-memory bank', 'understanding why some warp accesses slow down', 'A bank conflict can serialize access inside a warp.', 'GPU memory access'),
      fact('latency hiding', 'keeping useful work ready while some threads wait on memory', 'using many ready warps to cover stalls', 'Extra ready warps can cover memory latency.', 'GPU execution'),
    ],
  },
  17: {
    title: 'Parsing and Syntax Trees',
    facts: [
      fact('token', 'the smallest lexical unit produced from source code', 'feeding the parser with keywords, identifiers, and literals', 'Identifiers, keywords, and literals become tokens.', 'lexical analysis'),
      fact('AST', 'an abstract syntax tree that captures program structure', 'semantic analysis and later compiler passes', 'An AST is usually smaller than a full parse tree.', 'syntax analysis'),
      fact('parse tree', 'a full grammar derivation tree', 'representing the exact syntax of a language input', 'A parse tree tends to include more grammar detail than an AST.', 'parsing'),
      fact('recursive descent', 'a top-down parser built from functions', 'handwriting parsers for simple grammars in C++', 'Recursive descent parsers can be written directly in C++.', 'parser implementation'),
      fact('operator precedence', 'the rules that decide expression binding order', 'parsing arithmetic and other expressions correctly', 'Multiplication usually binds tighter than addition.', 'expression parsing'),
    ],
  },
  18: {
    title: 'Low-Level Systems Basics',
    facts: [
      fact('ABI', 'the application binary interface', 'making compiled code interoperable across translation units and libraries', 'An ABI defines calling convention and binary layout rules.', 'binary compatibility'),
      fact('calling convention', 'the rule set for passing arguments and returning values', 'function calls across compiled code', 'A calling convention specifies which registers or stack slots carry parameters.', 'function calls'),
      fact('ELF', 'the executable and linkable format', 'Linux binaries and shared libraries', 'ELF is a common executable format on Unix-like systems.', 'binary format'),
      fact('stack frame', 'the activation record for one function call', 'storing locals, saved registers, and return data', 'Recursive calls create multiple stack frames.', 'runtime stack'),
      fact('name mangling', 'the encoding of names for overloading and namespaces', 'linking C++ functions with unique signatures', 'extern "C" reduces or disables C++ name mangling.', 'ABI and linking'),
    ],
  },
  19: {
    title: 'Algorithms and Interview Drill',
    facts: [
      fact('BFS', 'breadth-first search', 'finding shortest paths in unweighted graphs', 'BFS explores neighbors level by level.', 'graph traversal'),
      fact('DFS', 'depth-first search', 'exploring connected regions or components', 'DFS often uses recursion or an explicit stack.', 'graph traversal'),
      fact('topological sort', 'an ordering of DAG vertices by dependency', 'build systems and prerequisite scheduling', 'Topological sort only exists for directed acyclic graphs.', 'graph algorithms'),
      fact('heap', 'a tree-based priority structure', 'retrieving the minimum or maximum quickly', 'priority_queue is often built on a heap.', 'data structures'),
      fact('hash map', 'a key-value table based on hashing', 'average O(1) lookup for key access', 'unordered_map is the standard C++ hash map.', 'hash tables'),
    ],
  },
  20: {
    title: 'Final Mixed Revision',
    facts: [
      fact('std::span', 'a non-owning view of contiguous elements', 'passing slices of arrays or vectors without copying', 'std::span does not own the elements it views.', 'modern C++ views'),
      fact('std::string_view', 'a non-owning view of character data', 'reading text without allocating a new string', 'std::string_view is useful for lightweight string handling.', 'modern C++ views'),
      fact('std::scoped_lock', 'a RAII helper that can lock multiple mutexes safely', 'avoiding deadlocks when locking several mutexes together', 'std::scoped_lock unlocks automatically at scope exit.', 'concurrency utilities'),
      fact('std::array', 'a fixed-size container with contiguous storage', 'small buffers where the size is known at compile time', 'std::array has value semantics and does not decay to a pointer.', 'STL containers'),
      fact('steady_clock', 'a monotonic clock for measuring intervals', 'timing benchmarks and elapsed durations', 'steady_clock is preferred for measuring durations.', 'chrono'),
    ],
  },
};

export const DAILY_MCQ_QUESTION_BANK = Object.fromEntries(
  Object.entries(DAY_BANK).map(([day, entry]) => [Number(day), buildQuestions(entry.title, entry.facts, Number(day))]),
);

export function getDailyMcqQuestions(day) {
  if (day === 1) {
    return DAY_01_QUESTIONS;
  }

  return DAILY_MCQ_QUESTION_BANK[day] || [];
}
