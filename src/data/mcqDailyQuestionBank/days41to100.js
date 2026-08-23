import { buildQuestions, fact } from './shared';

// Days 41-52: Compilers
const COMPILER_BANK = {
  41: {
    title: 'Lexical Analysis',
    facts: [
      fact('token', 'the smallest meaningful unit of a source program produced by the scanner', 'feeding structured symbols to the parser', 'A token carries a category such as identifier or keyword plus its value.', 'lexical analysis'),
      fact('lexeme', 'the exact character sequence that matches a token pattern', 'recording how a keyword or identifier actually appeared in the input', 'The lexeme is the raw spelling behind a single token.', 'lexical analysis'),
      fact('lexer', 'the compiler phase that converts raw characters into tokens', 'separating word-level recognition from grammar checking', 'The lexer strips whitespace and comments before parsing begins.', 'compiler front end'),
      fact('transition diagram', 'a state machine drawing used to recognize token patterns', 'designing scanners by hand one state at a time', 'Each arrow of a transition diagram consumes one input character.', 'scanner design'),
      fact('longest match rule', 'the convention that a scanner returns the longest lexeme any pattern accepts', 'deciding that abc123 is one identifier rather than abc then 123', 'Longest match prevents splitting valid multi-character tokens.', 'scanner design'),
    ],
  },
  42: {
    title: 'Regular Languages and Automata',
    facts: [
      fact('regular expression', 'an algebraic notation describing sets of strings using union, concatenation, and repetition', 'specifying token patterns for lexical analysis', 'Every regular expression denotes a regular language.', 'formal languages'),
      fact('nondeterministic finite automaton', 'a finite automaton that may track several possible states at once', 'building a matcher directly from a regular expression', 'An NFA accepts if at least one of its active paths accepts the input.', 'automata theory'),
      fact('deterministic finite automaton', 'a finite automaton with exactly one transition per input symbol from each state', 'implementing fast single-pass token recognition', 'A DFA never needs backtracking while reading input.', 'automata theory'),
      fact('epsilon transition', 'an automaton edge taken without consuming any input character', 'constructing an NFA from a regular expression', 'Epsilon transitions let the automaton change state for free.', 'automata theory'),
      fact('subset construction', 'the algorithm that converts an NFA into an equivalent DFA over sets of states', 'producing table-driven scanners without backtracking', 'Subset construction can exponentially grow the state count.', 'automata theory'),
    ],
  },
  43: {
    title: 'Grammars and Parse Trees',
    facts: [
      fact('context-free grammar', 'a set of rewrite rules describing the syntax of a language hierarchically', 'defining what programs the parser can accept', 'A context-free grammar replaces nonterminals regardless of surrounding context.', 'syntax specification'),
      fact('production rule', 'one rewrite rule of a grammar with a head nonterminal and a body of symbols', 'encoding constructs such as statements and expressions', 'Each production says how a nonterminal can expand.', 'syntax specification'),
      fact('derivation', 'a step-by-step sequence of production applications from the start symbol', 'showing exactly how a sentence is generated', 'A leftmost derivation always expands the leftmost nonterminal first.', 'parsing theory'),
      fact('parse tree', 'a tree recording how a string derives from the start symbol', 'giving structure that later phases can walk', 'Interior nodes of a parse tree are nonterminals.', 'parsing theory'),
      fact('ambiguous grammar', 'a grammar that gives some string more than one parse tree', 'detecting expressions whose precedence is not pinned down', 'Ambiguity is undecidable to detect in general.', 'parsing theory'),
    ],
  },
  44: {
    title: 'Top-Down Parsing',
    facts: [
      fact('recursive descent parser', 'a top-down parser written as one function per nonterminal', 'hand-writing readable parsers for small languages', 'Recursive descent follows the grammar structure directly in code.', 'top-down parsing'),
      fact('LL(1) grammar', 'a grammar decidable by looking at one lookahead token and choosing one production', 'enabling predictive parsers without backtracking', 'LL(1) requires disjoint FIRST sets among a nonterminal alternatives.', 'top-down parsing'),
      fact('left recursion', 'a production whose head reappears as the leftmost body symbol', 'rewriting rules that would loop a top-down parser forever', 'Left-recursive grammars cause infinite descent in LL parsers.', 'top-down parsing'),
      fact('left factoring', 'extracting a common prefix from alternative productions into a shared rule', 'making grammar choices visible after one token', 'Left factoring delays the decision point until prefixes diverge.', 'top-down parsing'),
      fact('FIRST set', 'the collection of terminals that can begin strings derived from a symbol', 'choosing productions during predictive parsing', 'FIRST tables drive which arm an LL(1) parser takes.', 'top-down parsing'),
    ],
  },
  45: {
    title: 'Bottom-Up Parsing',
    facts: [
      fact('shift-reduce parsing', 'a bottom-up technique that pushes symbols and reduces handles to nonterminals', 'building parsers for full expression grammars', 'Shift-reduce parsers discover parse trees from leaves toward the root.', 'bottom-up parsing'),
      fact('handle', 'a substring matching a production body that should be reduced next', 'identifying the next reduction step on the stack', 'Handles appear at the top of the stack in shift-reduce parsing.', 'bottom-up parsing'),
      fact('LR parser', 'a bottom-up parser driven by states built from LR items and one lookahead symbol', 'accepting nearly all programming language grammars efficiently', 'LR parsing detects errors at the earliest possible token.', 'bottom-up parsing'),
      fact('LALR construction', 'a compression of LR(1) tables that merges similar states', 'shrinking parser tables for tools such as yacc and bison', 'LALR keeps LR power with far fewer states.', 'bottom-up parsing'),
      fact('parser generator', 'a tool that turns a grammar specification into parser code', 'maintaining grammar-driven parsers without hand coding', 'yacc and bison are classic parser generators.', 'tooling'),
    ],
  },
  46: {
    title: 'ASTs and Symbol Tables',
    facts: [
      fact('abstract syntax tree', 'a condensed parse tree holding only semantically useful nodes', 'walking program structure during analysis and transformation', 'An AST drops punctuation nodes that a parse tree keeps.', 'intermediate structures'),
      fact('symbol table', 'a data structure mapping identifiers to their declared kinds and attributes', 'resolving names during semantic analysis and codegen', 'Symbol tables are usually stacked to model nested scopes.', 'intermediate structures'),
      fact('nested scope', 'a region inside another scope where inner declarations shadow outer ones', 'modeling blocks, functions, and namespaces', 'Inner declarations hide same-named outer ones until the scope ends.', 'name binding'),
      fact('syntax-directed translation', 'attaching attributes and actions to grammar productions', 'computing values and emitting code during parsing', 'Syntax-directed schemes evaluate attributes as reductions happen.', 'semantic methods'),
      fact('annotated AST', 'an AST whose nodes carry computed attributes such as types or constants', 'passing analysis results between compiler phases', 'Annotation avoids recomputing facts in later passes.', 'intermediate structures'),
    ],
  },
  47: {
    title: 'Semantic Analysis',
    facts: [
      fact('type checking', 'verifying that operators receive operands of compatible types', 'catching whole classes of bugs before runtime', 'Type checking can happen at compile time, run time, or both.', 'semantics'),
      fact('implicit conversion', 'an automatic value transform inserted when types do not exactly match', 'smoothing mixed-type arithmetic and assignments', 'Implicit conversions follow language-specific ranking rules.', 'type systems'),
      fact('lvalue', 'an expression that designates a location and may appear left of assignment', 'distinguishing assignable targets from temporary values', 'Only lvalues may bind to non-const references in C++.', 'semantics'),
      fact('rvalue', 'a value produced by an expression that has no stable identity', 'modeling temporaries eligible for moves', 'Rvalues cannot appear on the left side of plain assignment.', 'semantics'),
      fact('name resolution', 'binding each identifier use to its correct declaration', 'connecting calls and accesses to definitions', 'Overload resolution picks among candidates after name resolution.', 'name binding'),
    ],
  },
  48: {
    title: 'Intermediate Representations',
    facts: [
      fact('intermediate representation', 'a machine-independent program form between source and target code', 'sharing optimizations across many source languages and chips', 'LLVM IR is a widely used industrial intermediate representation.', 'compiler middle end'),
      fact('three-address code', 'instructions with at most one result and two source operands', 'expressing computation close to machine level yet portably', 'Three-address code splits complex expressions into simple steps.', 'compiler middle end'),
      fact('quadruple', 'a four-field record storing operator, two operands, and result', 'linearizing three-address code for easy rewriting', 'Quadruples make reordering and deletion straightforward.', 'compiler middle end'),
      fact('basic block', 'a straight-line instruction sequence entered only at its start and exited only at its end', 'dividing functions into analysis-friendly regions', 'Basic blocks have exactly one entry point and one exit point.', 'control flow'),
      fact('control-flow graph', 'a graph whose nodes are basic blocks and edges are possible jumps', 'reasoning about all paths a program may take', 'Loops become cycles inside a control-flow graph.', 'control flow'),
    ],
  },
  49: {
    title: 'SSA and Data-Flow Analysis',
    facts: [
      fact('static single assignment', 'an IR form where every variable is assigned exactly once', 'making def-use relationships explicit for optimizers', 'In SSA form each new value gets a fresh versioned name.', 'data-flow analysis'),
      fact('phi node', 'an SSA instruction merging different reaching versions at join points', 'keeping SSA valid after branches merge', 'Phi nodes select the operand coming along the executed path.', 'data-flow analysis'),
      fact('reaching definition', 'an assignment that can arrive at a program point without being overwritten', 'powering propagation and dependency analyses', 'Reaching definitions are computed by iterative data-flow equations.', 'data-flow analysis'),
      fact('live variable analysis', 'computing which variables hold values needed later from a given point', 'guiding register allocation and dead store removal', 'A variable is live if some future use reads it before redefinition.', 'data-flow analysis'),
      fact('def-use chain', 'a link listing every use reached from one definition', 'tracking how a computed value spreads through a function', 'Def-use chains shrink to simple edges under SSA.', 'data-flow analysis'),
    ],
  },
  50: {
    title: 'Local Optimizations',
    facts: [
      fact('constant folding', 'evaluating expressions whose operands are all known at compile time', 'precomputing arithmetic instead of emitting instructions', 'Constant folding turns 2*16 into 32 inside the compiler.', 'optimization'),
      fact('constant propagation', 'replacing variables known to hold constants with those constants', 'exposing more folding opportunities downstream', 'Propagation stops where control flow merges differing values.', 'optimization'),
      fact('dead code elimination', 'removing computations whose results can never be observed', 'shrinking binaries and speeding up execution', 'Dead code includes unreachable blocks and unused stores.', 'optimization'),
      fact('common subexpression elimination', 'reusing an earlier computation of an identical expression', 'avoiding repeated loads and arithmetic', 'CSE assumes intervening code does not change the operands.', 'optimization'),
      fact('copy propagation', 'substituting copied variables with their sources before optimization', 'undoing clutter introduced by earlier transformations', 'Copy propagation exposes redundancy that copies were hiding.', 'optimization'),
    ],
  },
  51: {
    title: 'Loop Optimization and Register Allocation',
    facts: [
      fact('loop-invariant code motion', 'hoisting computations unchanged by loop iterations outside the loop', 'paying once instead of on every iteration', 'LICM requires proof that the hoisted store dominates exits safely.', 'optimization'),
      fact('loop unrolling', 'replicating loop bodies to cut iteration overhead and expose parallelism', 'reducing branch counts in hot kernels', 'Unrolling trades code size for fewer loop-control operations.', 'optimization'),
      fact('register allocation', 'mapping unlimited IR values onto a finite set of processor registers', 'minimizing slow memory traffic in hot code', 'Register allocation runs after IR-level optimization.', 'code generation'),
      fact('graph coloring allocation', 'treating interference between live values as a graph-coloring problem', 'assigning registers so simultaneously-live values differ', 'If coloring fails the allocator spills values to the stack.', 'code generation'),
      fact('spill code', 'extra loads and stores inserted when registers run out', 'keeping correctness when demand exceeds physical registers', 'Spilling hot values costs performance disproportionately.', 'code generation'),
    ],
  },
  52: {
    title: 'Linkers and Loaders',
    facts: [
      fact('object file', 'a compiled unit containing machine code plus relocation and symbol metadata', 'packaging translation units before linking', 'Object files are not directly executable on their own.', 'program building'),
      fact('symbol resolution', 'matching each referenced symbol to exactly one definition across inputs', 'wiring calls between separately compiled files', 'Duplicate strong symbols are link-time errors.', 'linking'),
      fact('relocation', 'patching addresses once final placement of code and data is known', 'letting each module compile independently', 'Relocation entries describe exactly which bytes to fix up.', 'linking'),
      fact('static linking', 'copying library code into the executable at link time', 'shipping self-contained binaries', 'Static linking increases size but removes runtime library dependencies.', 'linking'),
      fact('dynamic linking', 'deferring library binding to load time against shared objects', 'sharing one library copy among many processes', 'Dynamic linking enables independent security updates of libraries.', 'linking'),
    ],
  },

  // Days 53-68: Operating Systems
  53: {
    title: 'Process Fundamentals',
    facts: [
      fact('process', 'a program in execution with its own address space and resources', 'running isolated units of work concurrently', 'Each process gets private virtual address space.', 'processes'),
      fact('process control block', 'the kernel record holding one process state, registers, and accounting', 'saving and restoring processes during switches', 'The PCB is the identity card the scheduler reads.', 'processes'),
      fact('process state', 'the current lifecycle phase such as ready, running, or blocked', 'deciding which processes may consume CPU', 'Blocked processes move to ready when their event arrives.', 'processes'),
      fact('context switch', 'saving one process kernel state and loading another', 'multiplexing CPUs among processes safely', 'Context switch time is pure overhead paid for multiprogramming.', 'processes'),
      fact('system call', 'the controlled gateway from user code into kernel services', 'requesting I/O, memory, or process operations', 'System calls trap into ring 0 with a syscall number.', 'kernel interface'),
    ],
  },
  54: {
    title: 'CPU Scheduling Algorithms',
    facts: [
      fact('first-come first-served', 'the schedule that runs processes strictly in arrival order', 'simplicity in batch systems', 'FCFS suffers the convoy effect behind long jobs.', 'cpu scheduling'),
      fact('shortest job first', 'the schedule picking the smallest remaining burst next', 'minimizing average waiting time mathematically', 'SJF is optimal for average waiting time when bursts are known.', 'cpu scheduling'),
      fact('round robin', 'a preemptive schedule giving each process a fixed time slice in turn', 'fair interactive time-sharing', 'Round robin responsiveness improves as the quantum shrinks.', 'cpu scheduling'),
      fact('priority scheduling', 'running the ready process with the highest priority level', 'favoring important workloads deterministically', 'Low priorities can starve unless aging is applied.', 'cpu scheduling'),
      fact('time quantum', 'the maximum slice a round-robin process keeps the CPU', 'balancing switch overhead against fairness', 'Typical quanta sit between ten and one hundred milliseconds.', 'cpu scheduling'),
    ],
  },
  55: {
    title: 'Scheduling Metrics and Starvation',
    facts: [
      fact('turnaround time', 'the total duration from submission to completion of a job', 'measuring end-to-end batch performance', 'Turnaround includes waiting plus execution time.', 'scheduling metrics'),
      fact('waiting time', 'the accumulated time a process spends in the ready queue', 'comparing schedulers fairly across workloads', 'Waiting time excludes execution and blocked periods.', 'scheduling metrics'),
      fact('response time', 'the delay from a request until the first output appears', 'judging interactivity of desktop and server systems', 'Interactive users feel response time more than throughput.', 'scheduling metrics'),
      fact('starvation', 'indefinite denial of CPU to a runnable process', 'detecting unfairness in priority systems', 'Starvation is solved by aging or fair-share policies.', 'fairness'),
      fact('aging', 'gradually raising the priority of processes that wait longer', 'guaranteeing eventual service under priority scheduling', 'Aging converts priority scheduling into eventually-fair service.', 'fairness'),
    ],
  },
  56: {
    title: 'Threads and Concurrency Models',
    facts: [
      fact('thread', 'an independent execution stream sharing its process address space', 'overlapping I/O and compute cheaply inside one program', 'Threads share heap memory but own stacks and registers.', 'threads'),
      fact('user-level thread', 'a thread scheduled by a library without kernel awareness', 'switching threads without expensive traps', 'One blocking call can stall all user-level threads on a kernel thread.', 'threads'),
      fact('kernel-level thread', 'a thread the operating system schedules directly', 'exploiting multiple cores with true parallelism', 'Kernel threads can run concurrently on separate processors.', 'threads'),
      fact('thread pool', 'a fixed set of worker threads reused across queued tasks', 'bounding creation cost and limiting concurrency', 'Thread pools amortize thread startup across many jobs.', 'threads'),
      fact('thread safety', 'the property that code behaves correctly when called from many threads', 'writing libraries safe for concurrent callers', 'Thread safety needs synchronization or immutable state.', 'correctness'),
    ],
  },
  57: {
    title: 'Synchronization Primitives',
    facts: [
      fact('race condition', 'a defect where results depend on unpredictable interleaving of threads', 'explaining flaky tests and heisenbugs under load', 'Race conditions vanish under debuggers that slow interleavings.', 'concurrency bugs'),
      fact('critical section', 'code touching shared data that only one thread may execute at once', 'protecting invariants around shared structures', 'Mutual exclusion admits one thread into a critical section.', 'synchronization'),
      fact('mutex', 'a lock granting exclusive ownership until released by its holder', 'serializing access to protected resources', 'A mutex must be released by the thread that acquired it.', 'synchronization'),
      fact('spinlock', 'a lock whose waiter loops instead of sleeping', 'guarding very short critical sections on multicore machines', 'Spinlocks waste CPU if held for long durations.', 'synchronization'),
      fact('condition variable', 'a primitive letting threads sleep until a predicate becomes true', 'coordinating producer and consumer handoffs', 'Condition variables are always paired with a mutex.', 'synchronization'),
    ],
  },
  58: {
    title: 'Classic Synchronization Problems',
    facts: [
      fact('producer-consumer problem', 'coordination where makers fill a buffer consumers drain', 'modeling queues between pipelines stages', 'Producers sleep when full and consumers when empty.', 'classic problems'),
      fact('bounded-buffer problem', 'the producer-consumer setting with a fixed-size shared buffer', 'teaching semaphore counting for capacity', 'Two semicators track empty and filled slots.', 'classic problems'),
      fact('readers-writers problem', 'allowing many readers but exclusive writers on shared data', 'designing caches and config stores', 'Writer preference risks reader starvation without care.', 'classic problems'),
      fact('dining philosophers problem', 'a thought experiment where philosophers compete for adjacent forks', 'illustrating deadlock and resource ordering', 'Picking forks in one order avoids the circular wait.', 'classic problems'),
      fact('monitor', 'a construct bundling shared data with mutually exclusive procedures', 'centralizing locking discipline inside one type', 'Monitors implicitly lock around member calls.', 'synchronization'),
    ],
  },
  59: {
    title: 'Deadlock Fundamentals',
    facts: [
      fact('deadlock', 'a standstill where a cycle of processes each wait on resources the others hold', 'explaining hung systems that no signal fixes', 'Deadlocked processes cannot progress without external help.', 'deadlock'),
      fact('hold and wait', 'holding one resource while requesting another', 'describing the second Coffman condition', 'Atomic all-or-nothing requests eliminate hold and wait.', 'deadlock conditions'),
      fact('circular wait', 'a closed chain of processes each awaiting the next one resource', 'the structural heart of every deadlock', 'Totally ordering resources breaks circular waits.', 'deadlock conditions'),
      fact('no preemption condition', 'resources cannot be forcibly taken from their holder', 'why locks differ from CPU time slices', 'Preemptable resources like CPU cannot deadlock.', 'deadlock conditions'),
      fact('resource allocation graph', 'a bipartite graph of processes and resources showing requests and assignments', 'visually proving whether a deadlock cycle exists', 'A cycle in a single-instance graph means deadlock.', 'deadlock modeling'),
    ],
  },
  60: {
    title: 'Deadlock Handling Strategies',
    facts: [
      fact('deadlock prevention', 'designing away at least one necessary Coffman condition', 'ordering lock acquisition to stop cycles', 'Prevention is conservative but always safe.', 'deadlock handling'),
      fact('deadlock avoidance', 'granting requests only when the system stays in a safe state', 'dynamic admission control for resources', 'Avoidance needs advance knowledge of maximum demands.', 'deadlock handling'),
      fact('Banker algorithm', 'an avoidance method simulating grants to confirm a safe sequence remains', 'allocating identical resource pools cautiously', 'The Banker algorithm rejects grants leading to unsafe states.', 'deadlock handling'),
      fact('safe state', 'a state from which some execution order finishes every process', 'the acceptance criterion of avoidance algorithms', 'Unsafe states risk deadlock but are not themselves deadlock.', 'deadlock handling'),
      fact('deadlock recovery', 'aborting victims or preempting resources after detection', 'restoring progress when avoidance was not used', 'Victim selection weighs cost and rollback ability.', 'deadlock handling'),
    ],
  },
  61: {
    title: 'Memory Allocation Strategies',
    facts: [
      fact('contiguous allocation', 'assigning each process one unbroken stretch of physical memory', 'simple early OS designs', 'Growing a contiguous block may require relocating it.', 'memory management'),
      fact('internal fragmentation', 'wasted space inside an allocated block larger than requested', 'quantifying padding loss in fixed partitions', 'Internal fragmentation lives inside allocations you paid for.', 'memory management'),
      fact('external fragmentation', 'free memory split into pieces too small to satisfy requests', 'explaining failures despite enough total RAM', 'External fragmentation is cured by compaction or paging.', 'memory management'),
      fact('compaction', 'shuffling allocated blocks together to merge free holes', 'recovering contiguous space at runtime cost', 'Compaction needs movable allocations and stops execution.', 'memory management'),
      fact('buddy allocator', 'splitting power-of-two blocks recursively and coalescing freed partners', 'fast kernel physical-page allocation', 'Buddy systems trade slight internal waste for speed.', 'memory management'),
    ],
  },
  62: {
    title: 'Paging',
    facts: [
      fact('paging', 'dividing memory into equal pages mapped to physical frames', 'eliminating external fragmentation entirely', 'Any page can occupy any free frame.', 'virtual memory'),
      fact('page table', 'the per-process map translating virtual pages to physical frames', 'performing every address translation', 'Page tables live in kernel memory pointed to by a register.', 'virtual memory'),
      fact('translation lookaside buffer', 'a small cache of recent page-table translations', 'avoiding an extra memory read per access', 'TLB hits translate addresses in a single cycle.', 'virtual memory'),
      fact('TLB miss', 'an access requiring a walk of the page table itself', 'costing tens to hundreds of extra cycles', 'Huge pages reduce TLB misses for large datasets.', 'virtual memory'),
      fact('multilevel page table', 'a tree of page tables allocating entries lazily per region', 'shrinking table memory for sparse address spaces', 'x86-64 uses four or five levels of page tables.', 'virtual memory'),
    ],
  },
  63: {
    title: 'Virtual Memory',
    facts: [
      fact('virtual memory', 'the illusion of a large private address space backed by disk', 'isolating processes and oversubscribing RAM', 'Virtual memory decouples logical from physical layout.', 'virtual memory'),
      fact('demand paging', 'loading pages only when first touched', 'starting processes quickly with lazy loading', 'Demand paging relies on faults to bring pages in.', 'virtual memory'),
      fact('page fault', 'an exception raised when the accessed page is absent from memory', 'triggering the OS to fetch or allocate the page', 'Minor faults are soft; major faults touch the disk.', 'virtual memory'),
      fact('working set', 'the set of pages a process actively needs in an interval', 'sizing memory allocations per process', 'Allocating below the working set forces constant refaulting.', 'virtual memory'),
      fact('thrashing', 'a collapse where paging activity dominates real computing', 'diagnosing overload by sky-high fault rates', 'Thrashing means the sum of working sets exceeds RAM.', 'virtual memory'),
    ],
  },
  64: {
    title: 'Page Replacement Policies',
    facts: [
      fact('page replacement policy', 'the rule choosing which resident page to evict on demand', 'managing contention for limited frames', 'Good policies approximate future reference patterns.', 'page replacement'),
      fact('FIFO replacement', 'evicting the page that has been resident longest', 'a trivially cheap baseline policy', 'FIFO ignores how recently or often pages are used.', 'page replacement'),
      fact('least recently used replacement', 'evicting the page untouched for the longest time', 'approximating optimal behavior with recency', 'Exact LRU needs hardware support for timestamps.', 'page replacement'),
      fact('Belady anomaly', 'the paradox where more frames increase faults under FIFO', 'showing stack-property violations in policies', 'LRU and OPT never exhibit Belady anomaly.', 'page replacement'),
      fact('clock algorithm', 'a FIFO ring using reference bits to approximate LRU', 'cheap second-chance eviction in real kernels', 'The clock hand sweeps giving referenced pages a second chance.', 'page replacement'),
    ],
  },
  65: {
    title: 'Segmentation and Protection',
    facts: [
      fact('segmentation', 'dividing memory into variable-sized logical segments', 'reflecting program modules in hardware layout', 'Segments can grow independently of each other.', 'memory organization'),
      fact('logical address', 'the address generated by the CPU before translation', 'expressing locations as segment plus offset', 'Logical addresses become physical after MMU translation.', 'memory organization'),
      fact('segmentation fault', 'the signal raised by accessing memory outside permitted regions', 'catching wild pointers at runtime', 'Segmentation faults come from MMU permission checks.', 'memory protection'),
      fact('memory protection keys', 'per-domain tags letting one instruction check group permissions', 'isolating subsystems without separate page tables', 'Keys allow permission changes without TLB flushes.', 'memory protection'),
      fact('copy-on-write', 'sharing pages read-only until a write triggers a private copy', 'forking processes and passing COW strings cheaply', 'COW makes fork fast by deferring actual copies.', 'memory organization'),
    ],
  },
  66: {
    title: 'File Systems',
    facts: [
      fact('inode', 'the on-disk record holding one file metadata and block pointers', 'storing permissions, sizes, and data locations', 'File names point to inodes, not the reverse.', 'file systems'),
      fact('file descriptor', 'the integer handle a process uses to reference an open file', 'performing reads, writes, and seeks through the kernel', 'Descriptors 0, 1, and 2 are standard input, output, error.', 'file systems'),
      fact('directory entry', 'a name-to-inode mapping stored inside directories', 'resolving pathnames step by step', 'Hard links create several entries for one inode.', 'file systems'),
      fact('journaling', 'logging intended changes before applying them to a file system', 'crash-safe updates that survive power loss', 'Journals are replayed at mount to repair partial writes.', 'file systems'),
      fact('copy-on-write filesystem', 'a design writing new blocks and atomically swapping roots instead of overwriting', 'snapshotting volumes instantly', 'ZFS and btrfs are copy-on-write filesystems.', 'file systems'),
    ],
  },
  67: {
    title: 'Disk Scheduling and RAID',
    facts: [
      fact('seek time', 'the delay moving a disk head to the target track', 'dominating mechanical disk latency budgets', 'Seek time dwarfs transfer time for random I/O.', 'storage'),
      fact('rotational latency', 'the wait for the platter to rotate the sector under the head', 'averaging half a rotation per random access', 'At 7200 RPM average latency is about four milliseconds.', 'storage'),
      fact('SCAN scheduling', 'servicing requests while sweeping the head end to end', 'organizing elevator-like fairness for disks', 'SCAN bounds wait times by direction of travel.', 'storage'),
      fact('RAID', 'combining disks for redundancy or parallel bandwidth', 'surviving drive failures without downtime', 'RAID levels trade capacity, speed, and fault tolerance.', 'storage'),
      fact('wear leveling', 'spreading writes evenly across flash cells', 'extending SSD lifespan', 'Wear leveling hides erase-cycle limits behind remapping.', 'storage'),
    ],
  },
  68: {
    title: 'IPC and Signals',
    facts: [
      fact('inter-process communication', 'kernel-mediated channels letting processes exchange data', 'building cooperating programs safely', 'IPC mechanisms enforce isolation boundaries.', 'ipc'),
      fact('pipe', 'a unidirectional byte stream connecting related processes', 'chaining commands in shells', 'Shell pipelines are chains of pipes.', 'ipc'),
      fact('message queue', 'a kernel-managed queue of discrete typed messages', 'decoupling producers from consumer timing', 'Message queues preserve message boundaries unlike pipes.', 'ipc'),
      fact('signal', 'an asynchronous notification delivered to a process', 'handling interrupts like termination or timers', 'Signals have default actions, handlers, or blocking masks.', 'ipc'),
      fact('socket', 'an endpoint abstraction for communication across processes or hosts', 'networking programs with one uniform API', 'Unix-domain sockets extend sockets to local IPC.', 'ipc'),
    ],
  },

  // Days 69-80: Computer Organization and Architecture
  69: {
    title: 'Processor Organization Basics',
    facts: [
      fact('von Neumann architecture', 'a design storing instructions and data in one shared memory', 'general-purpose computing as we know it', 'Shared memory creates the classic von Neumann bottleneck.', 'architecture'),
      fact('Harvard architecture', 'a design with separate memories for instructions and data', 'microcontrollers needing simultaneous fetch and access', 'Harvard buses double available bandwidth.', 'architecture'),
      fact('system bus', 'the shared wiring carrying address, data, and control between components', 'interconnecting CPU, memory, and devices', 'Bus arbitration decides who drives shared lines.', 'architecture'),
      fact('address bus width', 'the number of lines determining addressable memory space', 'explaining why 32-bit machines cap near 4 GiB', 'Each added line doubles the addressable range.', 'architecture'),
      fact('word size', 'the native data width a CPU processes in one go', 'characterizing integer and register capacity', 'A 64-bit word holds eight bytes.', 'architecture'),
    ],
  },
  70: {
    title: 'Instruction Cycle and Registers',
    facts: [
      fact('fetch-decode-execute cycle', 'the repeating loop that runs every stored instruction', 'understanding the heartbeat of a CPU', 'The cycle repeats billions of times per second.', 'cpu operation'),
      fact('program counter', 'the register holding the address of the next instruction', 'sequencing execution and implementing jumps', 'Branches overwrite the program counter directly.', 'cpu registers'),
      fact('instruction register', 'the register currently holding the fetched instruction bits', 'feeding the decode logic', 'Decode circuitry reads only the instruction register.', 'cpu registers'),
      fact('memory address register', 'the register driving the address lines toward memory', 'selecting which cell reads or writes', 'MAR holds the target before a memory cycle starts.', 'cpu registers'),
      fact('memory buffer register', 'the register staging data moving to or from memory', 'buffering transfers against bus timing', 'MDR temporarily holds fetched instructions too.', 'cpu registers'),
    ],
  },
  71: {
    title: 'Addressing Modes',
    facts: [
      fact('addressing mode', 'the rule defining how an instruction finds its operands', 'balancing encoding compactness against flexibility', 'Addressing modes decide effective address computation.', 'instruction sets'),
      fact('immediate addressing', 'embedding the operand value inside the instruction itself', 'loading constants without memory traffic', 'Immediate fields are fixed-width at encode time.', 'instruction sets'),
      fact('direct addressing', 'stating the operand memory address explicitly in the instruction', 'accessing fixed global variables simply', 'Direct addressing needs no extra indirection.', 'instruction sets'),
      fact('indirect addressing', 'using a register or memory cell as a pointer to the operand', 'implementing pointers and dynamic dispatch', 'Indirect addressing adds one lookup hop.', 'instruction sets'),
      fact('indexed addressing', 'adding an index register offset to a base address', 'iterating arrays element by element', 'Index scaling enables byte, halfword, and word strides.', 'instruction sets'),
    ],
  },
  72: {
    title: 'Cache Memory Principles',
    facts: [
      fact('cache memory', 'small fast memory keeping recently used data near the core', 'hiding main memory latency', 'Caches exploit predictable program behavior.', 'memory hierarchy'),
      fact('locality of reference', 'the tendency of programs to reuse nearby data and code soon', 'justifying every level of the memory hierarchy', 'Locality makes small caches act like large fast ones.', 'memory hierarchy'),
      fact('temporal locality', 'recently accessed items likely being reused soon', 'keeping loop counters and hot objects cached', 'Temporal locality rewards keeping recent lines resident.', 'memory hierarchy'),
      fact('spatial locality', 'items near a recent access likely being used soon', 'prefetching sequential streams effectively', 'Spatial locality motivates multi-byte cache lines.', 'memory hierarchy'),
      fact('cache line', 'the fixed-size unit transferred between cache and memory', 'aligning structures to fill lines efficiently', 'Typical cache lines are sixty-four bytes wide.', 'memory hierarchy'),
    ],
  },
  73: {
    title: 'Cache Organization',
    facts: [
      fact('cache hit', 'an access satisfied by the requested line already present', 'counting fast-path memory service', 'Hit ratios above ninety percent are common in tuned loops.', 'cache design'),
      fact('direct-mapped cache', 'a cache where each address maps to exactly one line', 'simple hardware with minimal lookup delay', 'Direct mapping suffers conflict misses between rivals.', 'cache design'),
      fact('fully associative cache', 'a cache where a line may reside anywhere', 'eliminating conflict misses in small structures like TLBs', 'Full associativity needs parallel search everywhere.', 'cache design'),
      fact('set-associative cache', 'a compromise grouping lines into sets searched in parallel', 'mainstream L1 and L2 designs today', 'Eight-way sets balance conflict and complexity.', 'cache design'),
      fact('valid bit and tag', 'line metadata saying presence and identity of stored data', 'deciding hits versus stale entries', 'Tags distinguish addresses sharing one set.', 'cache design'),
    ],
  },
  74: {
    title: 'Cache Policies and Coherence',
    facts: [
      fact('write-through policy', 'writing data to cache and memory together', 'keeping memory coherent cheaply', 'Write-through simplifies snooping at higher traffic.', 'cache policies'),
      fact('write-back policy', 'deferring memory updates until a dirty line is evicted', 'bandwidth savings for write-heavy workloads', 'Write-back needs dirty bits to know what to flush.', 'cache policies'),
      fact('dirty bit', 'a per-line flag marking modified unflushed data', 'deciding eviction writebacks', 'Clean lines drop without any memory traffic.', 'cache policies'),
      fact('cache coherence', 'keeping multiple caches views of one address consistent', 'multicore correctness on shared data', 'Coherence protocols migrate or invalidate stale copies.', 'multiprocessor'),
      fact('MESI protocol', 'a coherence scheme tagging lines Modified, Exclusive, Shared, Invalid', 'industry-standard SMP cache coordination', 'MESI lets one core hold a line exclusively for fast writes.', 'multiprocessor'),
    ],
  },
  75: {
    title: 'Instruction Pipelining',
    facts: [
      fact('instruction pipeline', 'overlapping the stages of consecutive instructions', 'raising throughput without raising clock speed', 'Classic five-stage pipelines fetch while others decode and execute.', 'pipelining'),
      fact('pipeline register', 'state latching results between stages each clock', 'carrying work forward through the pipe', 'Pipeline registers isolate stage timing.', 'pipelining'),
      fact('pipeline throughput', 'instructions completing per cycle once filled', 'the headline benefit of deeper pipes', 'Steady-state pipelines ideally finish one instruction per stage-group per cycle.', 'pipelining'),
      fact('pipeline hazard', 'any situation preventing the next instruction from issuing on schedule', 'classifying stalls by cause', 'Hazards come in structural, data, and control flavors.', 'pipelining'),
      fact('pipeline bubble', 'a deliberately wasted slot inserted to resolve hazards', 'visualizing the cost of stalls', 'Bubbles lower effective CPI below the ideal.', 'pipelining'),
    ],
  },
  76: {
    title: 'Pipeline Hazards and Forwarding',
    facts: [
      fact('structural hazard', 'two instructions needing the same hardware resource in one cycle', 'designing duplicated ports to avoid stalls', 'Split instruction and data caches remove a classic structural clash.', 'hazards'),
      fact('data hazard', 'an instruction depending on results still traveling the pipeline', 'RAW dependencies causing read-too-early faults', 'Data hazards are the most frequent stall source.', 'hazards'),
      fact('operand forwarding', 'routing results directly between stages without memory round trips', 'short-circuiting RAW stalls almost entirely', 'Forwarding paths feed ALU outputs back to ALU inputs.', 'hazards'),
      fact('load-use hazard', 'the unavoidable gap after a load before its data can be used', 'needing one stall even with forwarding', 'Compilers schedule independent work into load slots.', 'hazards'),
      fact('control hazard', 'uncertainty over the next fetch until a branch resolves', 'motivating prediction and delayed slots', 'Control hazards cost the most on deep pipelines.', 'hazards'),
    ],
  },
  77: {
    title: 'Advanced CPU Techniques',
    facts: [
      fact('branch prediction', 'guessing branch direction and target before resolution', 'keeping front ends fed through control hazards', 'Modern predictors exceed ninety-five percent accuracy.', 'cpu techniques'),
      fact('speculative execution', 'executing predicted paths before certainty, rolling back if wrong', 'hiding memory and branch latency', 'Spectre showed speculation leaves observable traces.', 'cpu techniques'),
      fact('superscalar execution', 'issuing multiple instructions in one cycle to parallel units', 'exploiting instruction-level parallelism', 'Superscalar widths of four to six issue ports are typical.', 'cpu techniques'),
      fact('out-of-order execution', 'reordering instructions dynamically around stalls', 'keeping execution units busy despite dependencies', 'Retirement stays in order to preserve precise exceptions.', 'cpu techniques'),
      fact('register renaming', 'mapping architectural registers onto a larger physical pool', 'removing false WAR and WAW dependencies', 'Renaming unlocks more parallelism than ISA names suggest.', 'cpu techniques'),
    ],
  },
  78: {
    title: 'Control Unit Design',
    facts: [
      fact('control unit', 'the circuitry sequencing fetch-decode-execute and signaling other units', 'conducting the entire datapath', 'Control units come in hardwired or microprogrammed styles.', 'control'),
      fact('hardwired control', 'control implemented directly as combinational logic', 'maximum speed in RISC designs', 'Hardwired decoding is fast but inflexible to change.', 'control'),
      fact('microprogrammed control', 'control steps stored as microinstructions in control memory', 'flexible CISC instruction emulation', 'Adding instructions means editing firmware, not silicon.', 'control'),
      fact('micro-operation', 'one elementary register-transfer step of an instruction', 'decomposing complex instructions precisely', 'Each micro-op drives specific control signals.', 'control'),
      fact('control word', 'the bit pattern of one microinstruction naming active signals', 'encoding horizontal or vertical microprograms', 'Horizontal words are wide and parallel; vertical are encoded.', 'control'),
    ],
  },
  79: {
    title: 'Interrupts and DMA',
    facts: [
      fact('interrupt', 'a hardware signal diverting the CPU to a handler asynchronously', 'reacting to devices without busy waiting', 'Interrupts preserve context via saved state.', 'io systems'),
      fact('interrupt service routine', 'the handler executed in response to a specific interrupt', 'acknowledging and servicing device events', 'ISRs should stay short, deferring work to threads.', 'io systems'),
      fact('vectored interrupt', 'delivery supplying the handler address directly from a table', 'dispatching without software polling loops', 'Vectors map interrupt numbers to fixed entries.', 'io systems'),
      fact('polling', 'repeatedly checking device status in software', 'simple embedded loops without interrupt lines', 'Polling wastes cycles when events are rare.', 'io systems'),
      fact('direct memory access', 'a controller transferring data between device and memory without CPU moves', 'offloading bulk I/O from the processor', 'DMA completes with an interrupt when finished.', 'io systems'),
    ],
  },
  80: {
    title: 'Data Representation and Arithmetic',
    facts: [
      fact('two complement', 'the binary encoding making subtraction work via addition of negated values', 'representing signed integers universally in hardware', 'Negation is invert plus one in two complement.', 'arithmetic'),
      fact('endianness', 'the byte-order convention for multi-byte values in memory', 'interfacing protocols and binary formats correctly', 'Network order is big endian; x86 is little endian.', 'arithmetic'),
      fact('carry flag', 'the status bit capturing unsigned overflow out of the top bit', 'implementing multiprecision addition', 'Carry also powers compare via borrow semantics.', 'arithmetic'),
      fact('arithmetic overflow', 'a result exceeding what the destination format represents', 'detecting signed wraparound bugs', 'Signed overflow is undefined behavior in C and C++.', 'arithmetic'),
      fact('Booth algorithm', 'a multiplication scheme skipping runs of ones via add-subtract shifts', 'speeding signed multiplication in hardware', 'Booth recoding halves worst-case adder operations.', 'arithmetic'),
    ],
  },

  // Days 81-86: Networking
  81: {
    title: 'Network Models',
    facts: [
      fact('protocol', 'an agreed message format and procedure between communicating parties', 'making heterogeneous vendors interoperate', 'Protocols layer responsibilities cleanly.', 'networking basics'),
      fact('OSI model', 'a seven-layer reference framework from physical to application', 'teaching where each network concern lives', 'OSI layers are conceptual, not literal products.', 'networking basics'),
      fact('encapsulation', 'wrapping upper-layer messages with successive headers', 'adding transport, network, and link metadata en route', 'Decapsulation reverses the process on receipt.', 'networking basics'),
      fact('TCP/IP stack', 'the practical four-layer suite ruling the internet', 'structuring real deployed networking', 'TCP/IP collapses OSI presentation and session upward.', 'networking basics'),
      fact('protocol data unit', 'the named payload at each layer: bits, frames, packets, segments', 'precise discussion of headers and payloads', 'Each layer treats the PDU above as opaque data.', 'networking basics'),
    ],
  },
  82: {
    title: 'Link Layer Fundamentals',
    facts: [
      fact('MAC address', 'the forty-eight-bit hardware identifier of a network interface', 'delivering frames on the local segment', 'MAC prefixes identify hardware vendors.', 'link layer'),
      fact('ARP protocol', 'the question-answer scheme resolving IP addresses to MAC addresses', 'bridging network-layer to link-layer delivery', 'ARP replies are cached to limit broadcast storms.', 'link layer'),
      fact('Ethernet frame', 'the link-layer packet with preamble, addresses, payload, and checksum', 'carrying all local traffic physically', 'Minimum frames pad to sixty-four bytes.', 'link layer'),
      fact('CSMA/CD', 'carrier sensing with collision detection governing shared wires', 'classic half-duplex Ethernet arbitration', 'Collisions trigger exponential backoff retries.', 'link layer'),
      fact('collision domain', 'the set of ports sharing one contention space', 'sizing hubs versus switches correctly', 'Switch ports divide collision domains per link.', 'link layer'),
    ],
  },
  83: {
    title: 'IP Layer and Routing',
    facts: [
      fact('IPv4 address', 'the thirty-two-bit logical host identifier written dot-separated', 'addressing endpoints on the internet', 'IPv4 space is exhausted, motivating NAT and IPv6.', 'internet layer'),
      fact('subnet mask', 'the bitmask splitting an address into network and host parts', 'scoping broadcast domains and routes', 'CIDR notation writes masks as slash lengths.', 'internet layer'),
      fact('default gateway', 'the router used when no more specific route matches', 'leaving the local subnet', 'Hosts send off-link traffic to the gateway MAC.', 'internet layer'),
      fact('routing table', 'the prefix-to-next-hop mapping guiding forwarding decisions', 'longest-prefix-match packet steering', 'Routing tables converge via protocols like OSPF and BGP.', 'internet layer'),
      fact('time to live field', 'the hop counter decremented at every router', 'killing routing loops deterministically', 'TTL zero triggers an ICMP time-exceeded reply.', 'internet layer'),
    ],
  },
  84: {
    title: 'Transport Layer TCP and UDP',
    facts: [
      fact('port number', 'the sixteen-bit demultiplexing key identifying a socket endpoint', 'running many services per host', 'Well-known ports run below one thousand twenty-four.', 'transport layer'),
      fact('three-way handshake', 'the SYN, SYN-ACK, ACK exchange opening a TCP connection', 'establishing synchronized sequence numbers', 'Handshake state is the target of half-open floods.', 'transport layer'),
      fact('flow control window', 'the receiver-advertised amount of in-flight data allowed', 'preventing fast senders from drowning slow receivers', 'Window scaling raises the ceiling on fat links.', 'transport layer'),
      fact('congestion control', 'probing and backing off based on inferred network loss or delay', 'protecting shared infrastructure from collapse', 'AIMD growth shapes classic TCP friendliness.', 'transport layer'),
      fact('User Datagram Protocol', 'the connectionless transport with no handshake or delivery guarantee', 'low-latency gaming, voice, and DNS queries', 'UDP adds only ports and checksums over IP.', 'transport layer'),
    ],
  },
  85: {
    title: 'DNS and Name Resolution',
    facts: [
      fact('domain name system', 'the distributed hierarchy mapping names to addresses', 'making networks human-navigable', 'DNS delegates authority zone by zone.', 'application layer'),
      fact('recursive resolver', 'the server chasing referrals on behalf of a client', 'shielding clients from delegation walks', 'Resolvers cache answers until TTL expiry.', 'application layer'),
      fact('authoritative name server', 'the server holding definitive records for a zone', 'publishing changes to the world', 'Authoritative answers carry the final word per zone.', 'application layer'),
      fact('record types', 'the schema of DNS entries such as A, AAAA, CNAME, MX', 'pointing domains at hosts, aliases, and mailers', 'MX records route mail independently of web hosts.', 'application layer'),
      fact('negative caching', 'remembering failed lookups for their SOA minimum', 'throttling repeated misses for nonexistent names', 'Negative TTLs blunt NXDOMAIN flood attacks.', 'application layer'),
    ],
  },
  86: {
    title: 'Web Protocols',
    facts: [
      fact('HTTP method', 'the verb declaring intent: GET, POST, PUT, DELETE and friends', 'designing RESTful interfaces', 'Methods carry safety and idempotency contracts.', 'web protocols'),
      fact('status code classes', 'the families 2xx success, 3xx redirect, 4xx client error, 5xx server error', 'signaling outcomes machine-readably', 'Codes guide caches, retries, and monitoring.', 'web protocols'),
      fact('TLS handshake', 'the negotiation establishing keys and identity before HTTP flows', 'securing traffic end to end', 'TLS 1.3 completes in a single round trip.', 'web protocols'),
      fact('certificate chain', 'the ordered list from leaf to trusted root validating identity', 'browser trust decisions on every visit', 'Chains validate signatures and revocation upward.', 'web protocols'),
      fact('session cookie', 'the small stored token tying later requests to server-side state', 'keeping users logged in across requests', 'HttpOnly cookies resist script theft.', 'web protocols'),
    ],
  },

  // Days 87-92: Databases
  87: {
    title: 'Relational Model',
    facts: [
      fact('relation', 'the mathematical set of tuples forming one table', 'grounding SQL in set theory', 'Relations are unordered by definition.', 'relational model'),
      fact('tuple and attribute', 'one row and its named column respectively', 'speaking precisely about rows and columns', 'Attributes draw values from declared domains.', 'relational model'),
      fact('primary key', 'the chosen candidate key uniquely identifying each row', 'anchoring references and row identity', 'Primary keys should never change meaning over time.', 'relational model'),
      fact('foreign key', 'a column referencing a primary key of another table', 'enforcing referential integrity', 'Foreign keys block orphan child rows.', 'relational model'),
      fact('null semantics', 'the three-valued logic treating unknown comparisons specially', 'avoiding surprising WHERE clause filters', 'NULL never equals anything, including NULL.', 'relational model'),
    ],
  },
  88: {
    title: 'SQL Essentials',
    facts: [
      fact('DDL', 'the statement family defining schema objects: CREATE, ALTER, DROP', 'versioning table structure in migrations', 'DDL often commits implicitly.', 'sql'),
      fact('DML', 'the statement family manipulating data: SELECT, INSERT, UPDATE, DELETE', 'everyday application queries', 'DML operates within transactions.', 'sql'),
      fact('join types', 'inner, left, right, and full combinations of matched rows', 'assembling related entities in queries', 'Outer joins preserve unmatched sides with NULLs.', 'sql'),
      fact('aggregate function', 'functions collapsing groups to single values: COUNT, SUM, AVG', 'summarizing data with GROUP BY', 'Aggregates ignore NULL inputs except COUNT star.', 'sql'),
      fact('subquery', 'a query nested inside another statement', 'filtering against computed sets', 'Correlated subqueries rerun per outer row.', 'sql'),
    ],
  },
  89: {
    title: 'Normalization',
    facts: [
      fact('functional dependency', 'attribute B determined by attribute A within a relation', 'detecting redundancy and key candidates', 'FDs are written A determines B.', 'normalization'),
      fact('partial dependency', 'a non-key column depending on part of a composite key', 'violating second normal form', 'Partial dependencies vanish by splitting tables.', 'normalization'),
      fact('transitive dependency', 'a non-key column depending on another non-key column', 'violating third normal form', 'Transitive chains move to their own relations.', 'normalization'),
      fact('third normal form', 'every non-key attribute depending on the key, the whole key, nothing but the key', 'standard sanity target for OLTP schemas', '3NF removes update anomalies pragmatically.', 'normalization'),
      fact('denormalization', 'deliberately re-introducing redundancy for read speed', 'tuning reporting and dashboards', 'Denormalization shifts cost to write-time consistency.', 'normalization'),
    ],
  },
  90: {
    title: 'Indexes and Query Execution',
    facts: [
      fact('database index', 'an auxiliary structure accelerating lookups on chosen columns', 'turning scans into seeks', 'Indexes speed reads and tax writes.', 'storage engine'),
      fact('B-tree index', 'a balanced multiway tree ordered by key', 'range and equality lookups on disk', 'B-trees keep depth low with high fanout.', 'storage engine'),
      fact('clustered index', 'an index whose leaf order is the physical row order', 'primary-key access patterns', 'Tables have at most one clustered index.', 'storage engine'),
      fact('covering index', 'an index containing every column a query touches', 'answering entirely from the index', 'Covering skips heap lookups completely.', 'storage engine'),
      fact('query plan', 'the executor strategy the optimizer chose for a statement', 'debugging slow queries with EXPLAIN', 'Plans reveal scans, joins, and estimated rows.', 'storage engine'),
    ],
  },
  91: {
    title: 'Transactions and ACID',
    facts: [
      fact('transaction', 'an all-or-nothing unit of database work', 'bundling multi-step invariants safely', 'Transactions end in commit or rollback.', 'transactions'),
      fact('atomicity', 'the guarantee that partial effects never persist', 'crash-safe money transfers', 'Undo logs restore pre-transaction state.', 'transactions'),
      fact('durability', 'committed changes surviving immediate power loss', 'trusting the database after ack', 'Durability comes from WAL flushing policies.', 'transactions'),
      fact('isolation level', 'the degree of interleaving visible between concurrent transactions', 'choosing consistency versus concurrency', 'Levels span read-uncommitted to serializable.', 'transactions'),
      fact('dirty read', 'reading uncommitted changes another transaction later aborts', 'the anomaly weakest isolation allows', 'Read-committed eliminates dirty reads.', 'transactions'),
    ],
  },
  92: {
    title: 'Concurrency Control',
    facts: [
      fact('two-phase locking', 'acquiring all locks before releasing any', 'classic serializability enforcement', 'Phase two begins at first release, growing no further.', 'concurrency'),
      fact('multiversion concurrency control', 'keeping row versions so readers never block writers', 'high-throughput OLTP engines', 'MVCC snapshots give each transaction a stable view.', 'concurrency'),
      fact('optimistic concurrency', 'proceeding lockless and validating conflicts at commit', 'low-contention workloads', 'Optimistic schemes retry aborted writers.', 'concurrency'),
      fact('lost update', 'overwriting a concurrent modification unseen', 'check-then-write races in applications', 'Row locking or atomic compare-and-set prevents losses.', 'concurrency'),
      fact('phantom read', 'rows matching a repeated range query appearing anew', 'range-scan consistency problems', 'Serializable isolation or key-range locks banish phantoms.', 'concurrency'),
    ],
  },

  // Days 93-96: Tooling and Engineering Practice
  93: {
    title: 'Version Control with Git',
    facts: [
      fact('version control', 'tracking file history and enabling safe parallel edits', 'team collaboration and rollback', 'Git stores snapshots, not diffs, per commit.', 'developer tooling'),
      fact('commit object', 'the immutable snapshot record pointing to tree and parents', 'forming the history DAG', 'Commit hashes cover content and ancestry.', 'developer tooling'),
      fact('branch', 'a movable label naming one line of development', 'isolating features and experiments', 'Branches are forty-one bytes of bookkeeping in Git.', 'developer tooling'),
      fact('merge conflict', 'competing edits the VCS refuses to auto-resolve', 'forcing explicit reconciliation', 'Conflicts mark both hunks for human choice.', 'developer tooling'),
      fact('rebase', 'replaying commits onto a new base for linear history', 'cleaning feature branches before review', 'Rebasing shared history rewrites published hashes.', 'developer tooling'),
    ],
  },
  94: {
    title: 'Build Systems and CI',
    facts: [
      fact('build system', 'tooling orchestrating compilation and packaging from sources', 'reproducible one-command builds', 'Make, Ninja, Bazel, and CMake drive builds differently.', 'developer tooling'),
      fact('incremental build', 'recompiling only targets affected by changed inputs', 'keeping developer loops fast', 'Correctness depends on accurate dependency graphs.', 'developer tooling'),
      fact('toolchain', 'the coordinated compiler, linker, and library set producing binaries', 'pinning reproducible environments', 'Toolchain triples encode vendor, arch, and ABI.', 'developer tooling'),
      fact('cross-compilation', 'building targets for a platform other than the host running the build', 'firmware and mobile development', 'Cross builds need sysroots matching the target.', 'developer tooling'),
      fact('continuous integration', 'automatically building and testing every change on shared runners', 'catching regressions within minutes', 'CI gates merges on green pipelines.', 'developer tooling'),
    ],
  },
  95: {
    title: 'Debugging and Profiling',
    facts: [
      fact('breakpoint', 'a marked pause point handing control to the debugger', 'inspecting live program state', 'Hardware breakpoints avoid self-modifying pitfalls.', 'debugging'),
      fact('watchpoint', 'a break triggered when data or memory changes', 'finding who corrupts a variable', 'Watchpoints rely on debug address registers.', 'debugging'),
      fact('core dump', 'a snapshot of process memory at crash time', 'post-mortem analysis of production faults', 'Core dumps pair with stripped-symbol binaries via debuginfo files.', 'debugging'),
      fact('statistical profiler', 'a sampler inferring hot code from periodic interrupts', 'locating CPU bottlenecks with low overhead', 'Sampling profilers show where time concentrates, not why.', 'profiling'),
      fact('flame graph', 'a visualization stacking sampled call paths by width of time', 'communicating profiles at a glance', 'Wide plateaus mark dominant costs.', 'profiling'),
    ],
  },
  96: {
    title: 'Testing Discipline',
    facts: [
      fact('unit test', 'an automated check of one component in isolation', 'locking down function-level behavior', 'Unit suites run in milliseconds and pinpoint failures.', 'testing'),
      fact('integration test', 'a test exercising several components together', 'verifying interfaces and wiring', 'Integration tests catch contract mismatches units miss.', 'testing'),
      fact('test double', 'stand-in objects faking collaborators for controlled scenarios', 'isolating units from slow or flaky dependencies', 'Mocks assert interactions; stubs return canned data.', 'testing'),
      fact('regression test', 'a test added to pin a previously fixed bug', 'making fixes permanent', 'Every bugfix earns a regression case.', 'testing'),
      fact('coverage metric', 'the fraction of code executed by the test suite', 'finding untested regions honestly', 'High coverage proves execution, not assertion quality.', 'testing'),
    ],
  },

  // Days 97-100: Modern C++, Memory Model, Performance
  97: {
    title: 'Undefined Behavior and Specifications',
    facts: [
      fact('undefined behavior', 'program conduct with no semantics the standard imposes', 'enabling aggressive compiler assumptions', 'UB can travel backward in time through optimization.', 'language law'),
      fact('implementation-defined behavior', 'behavior each conforming compiler must document', 'porting code across toolchains knowingly', 'Integer width choices are implementation-defined.', 'language law'),
      fact('unspecified behavior', 'valid behavior chosen from an allowed set without documentation duty', 'tolerating evaluation-order variety', 'Argument evaluation order is unspecified in C++.', 'language law'),
      fact('strict aliasing rule', 'the promise that differently-typed accesses will not alias except char', 'unlocking type-based alias optimization', 'Violating strict aliasing yields surprise miscompiles.', 'language law'),
      fact('signed integer overflow', 'arithmetic leaving the representable range of a signed type', 'the canonical UB trap for beginners', 'Use unsigned types or checked ops to stay defined.', 'language law'),
    ],
  },
  98: {
    title: 'ABI and Interoperability',
    facts: [
      fact('application binary interface', 'the compiled-world contract of layouts, calls, and naming', 'mixing libraries built by different compilers', 'ABI breaks force ecosystem-wide rebuilds.', 'interop'),
      fact('name mangling', 'encoding signatures into linker-visible symbol names', 'supporting overloading atop flat symbol tables', 'C++ mangles; extern C does not.', 'interop'),
      fact('one definition rule', 'the requirement that each entity have at most one definition per program', 'keeping inline and template expansions consistent', 'ODR violations are silent miscompile factories.', 'interop'),
      fact('extern C linkage', 'disabling mangling for interoperability with C code', 'exporting clean APIs from C++ libraries', 'extern C affects linkage only, not calling convention alone.', 'interop'),
      fact('opaque pointer pattern', 'hiding implementation details behind a forward-declared handle', 'stable ABI surfaces like pimpl', 'Opaque pointers freeze layout behind the wall.', 'interop'),
    ],
  },
  99: {
    title: 'Memory Model and Atomics',
    facts: [
      fact('memory model', 'the formal rules defining visibility and ordering of concurrent writes', 'writing portable lock-free code', 'C++11 gave C++ a real memory model.', 'concurrency model'),
      fact('atomic operation', 'an indivisible read-modify-write on shared data', 'building counters and lock-free queues', 'Atomics prevent torn accesses by definition.', 'concurrency model'),
      fact('memory ordering', 'the constraint level an atomic carries: relaxed, acquire, release, seq_cst', 'balancing performance against guarantees', 'Release pairs with acquire to publish data safely.', 'concurrency model'),
      fact('happens-before', 'the partial order making one thread effects visible to another', 'reasoning formally about races', 'No happens-before between conflicting accesses equals a race.', 'concurrency model'),
      fact('compare-and-swap', 'an atomic primitive swapping a value only if it matches expectation', 'lock-free update loops everywhere', 'CAS failure reports the current value for retry.', 'concurrency model'),
    ],
  },
  100: {
    title: 'Performance Engineering Mindset',
    facts: [
      fact('benchmark', 'a controlled measurement of code under representative load', 'comparing designs with numbers not vibes', 'Benchmarks need warmup, repetitions, and statistics.', 'performance'),
      fact('Amdahl law', 'the speedup bound set by the non-parallelizable fraction', 'setting realistic parallelization goals', 'Five percent serial caps speedup at twenty times.', 'performance'),
      fact('SIMD', 'single instructions operating on vectors of data lanes', 'data-parallel crunching in tight kernels', 'Auto-vectorization turns scalar loops into SIMD.', 'performance'),
      fact('cache blocking', 'tiling loops to keep working subsets resident in cache', 'matrix multiply and stencil speedups', 'Blocking exploits locality explicitly.', 'performance'),
      fact('premature optimization', 'micro-tuning before measurements justify the effort', 'the cautionary tale every team retells', 'Profile first; optimize measured hotspots only.', 'performance'),
    ],
  },
};

export const EXTENDED_DAILY_QUESTION_BANK = Object.fromEntries(
  Object.entries(COMPILER_BANK).map(([day, entry]) => [Number(day), buildQuestions(entry.title, entry.facts, Number(day))]),
);
