export const DSA_MODULES = {
  "foundations": {
    "title": "Foundations",
    "route": "/dsa/foundations",
    "description": "A beginner-first route map for the core DSA ideas with separate deep-dive pages for each lesson.",
    "lead": "This module starts with the plain-language mental model and then sends readers into focused pages for data, algorithms, arrays, strings, searching, sorting, stack and queue, connected data, and hash maps with complexity.",
    "heroBullets": [
      "Start with the plain meaning",
      "Separate data from action",
      "Use real-life examples first",
      "Move through the lessons in order"
    ],
    "overviewCards": [
      {
        "title": "Why it exists",
        "description": "To turn DSA from a scary label into a set of small ideas beginners can learn one by one."
      },
      {
        "title": "What it teaches",
        "description": "How to recognize data, algorithms, order, lookup, and growth in everyday tasks and coding problems."
      }
    ],
    "topics": [
      {
        "title": "What is DSA?",
        "description": "The plain-language meaning of the subject and why the two words belong together.",
        "route": "/dsa/foundations/what-is-dsa/"
      },
      {
        "title": "Data",
        "description": "What information a program stores and why the storage shape matters.",
        "route": "/docs/dsa/foundations/data/"
      },
      {
        "title": "Algorithm",
        "description": "A sequence of steps for solving a problem.",
        "route": "/docs/dsa/foundations/algorithm/"
      },
      {
        "title": "Arrays",
        "description": "A row of items kept in order.",
        "route": "/docs/dsa/foundations/arrays/"
      },
      {
        "title": "Strings",
        "description": "Text stored as a sequence of characters.",
        "route": "/docs/dsa/foundations/strings/"
      },
      {
        "title": "Searching",
        "description": "Finding a target inside a collection.",
        "route": "/docs/dsa/foundations/searching/"
      },
      {
        "title": "Sorting",
        "description": "Arranging items by a rule so later work gets easier.",
        "route": "/docs/dsa/foundations/sorting/"
      },
      {
        "title": "Stack and Queue",
        "description": "Two beginner-friendly ways of controlling order.",
        "route": "/docs/dsa/foundations/stack-and-queue/"
      },
      {
        "title": "Connected Data",
        "description": "Linked lists, trees, and graphs when items point to one another.",
        "route": "/docs/dsa/foundations/connected-data/"
      },
      {
        "title": "Hash Maps and Complexity",
        "description": "Fast lookup by key and the cost of growing data.",
        "route": "/docs/dsa/foundations/hash-map-and-complexity/"
      }
    ],
    "related": [
      {
        "title": "Problem Solving",
        "description": "Use the workflow once the mental model is in place.",
        "route": "/dsa/problem-solving"
      },
      {
        "title": "Complexity",
        "description": "See how the cost model fits into the foundations.",
        "route": "/dsa/complexity"
      }
    ]
  },
  "binary-math": {
    "title": "Binary Math",
    "route": "/dsa/binary-math",
    "description": "Bits, powers of two, masks, shifts, complements, and the math behind low-level data reasoning.",
    "lead": "Binary math is the bridge between abstract ideas and the machine model. It explains how data is packed, moved, and transformed at the bit level.",
    "heroBullets": [
      "Think in bits and bytes",
      "Use masks to isolate state",
      "Understand signed and unsigned values",
      "Connect binary to indexing and memory"
    ],
    "overviewCards": [
      {
        "title": "Why it matters",
        "description": "Many indexing, memory, and optimization ideas depend on binary representation."
      },
      {
        "title": "What it unlocks",
        "description": "Shifts, masks, flags, alignment, and compact state reasoning."
      }
    ],
    "topics": [
      {
        "title": "Bits and bytes",
        "description": "How data is represented and how bit-level state is stored.",
        "route": "/dsa/binary-math/bits-and-bytes"
      },
      {
        "title": "Shifts and masks",
        "description": "How to move bits and isolate useful groups of flags.",
        "route": "/dsa/binary-math/shifts-and-masks"
      },
      {
        "title": "Complements",
        "description": "Why signed integers use two's complement encoding.",
        "route": "/dsa/binary-math/complements"
      },
      {
        "title": "Powers of two",
        "description": "Why sizes, capacities, and boundaries often grow in powers of two.",
        "route": "/dsa/binary-math/powers-of-two"
      },
      {
        "title": "Binary operations",
        "description": "AND, OR, XOR, and how they model simple logic.",
        "route": "/dsa/binary-math/binary-operations"
      },
      {
        "title": "Bit tricks",
        "description": "Common compact patterns used in real DSA and systems code.",
        "route": "/dsa/binary-math/bit-tricks"
      }
    ],
    "related": [
      {
        "title": "Arrays",
        "description": "Binary math supports index and memory reasoning.",
        "route": "/dsa/arrays"
      },
      {
        "title": "Complexity",
        "description": "Powers of two connect directly to cost growth.",
        "route": "/dsa/complexity"
      }
    ]
  },
  "mathematics": {
    "title": "Mathematics",
    "route": "/dsa/mathematics",
    "description": "Counting, recurrences, invariants, probability, and proof-style reasoning.",
    "lead": "This module is the math toolkit for DSA. It keeps the reasoning precise when intuition alone is not enough.",
    "heroBullets": [
      "Count carefully",
      "Recognize recurrence",
      "State invariants clearly",
      "Use probability when uncertainty matters"
    ],
    "overviewCards": [
      {
        "title": "What it teaches",
        "description": "The math habits that support proofs, counting, and algorithm design."
      },
      {
        "title": "Why it matters",
        "description": "It makes DSA rigorous instead of hand-wavy."
      }
    ],
    "topics": [
      {
        "title": "Counting",
        "description": "How many possibilities exist and how to enumerate them carefully.",
        "route": "/dsa/mathematics/counting"
      },
      {
        "title": "Recurrences",
        "description": "How repeated structure becomes a solvable relation.",
        "route": "/dsa/mathematics/recurrences"
      },
      {
        "title": "Invariants",
        "description": "How to prove a property stays true while a process runs.",
        "route": "/dsa/mathematics/invariants"
      },
      {
        "title": "Induction",
        "description": "A proof pattern for recursive and repeated structure.",
        "route": "/dsa/mathematics/induction"
      },
      {
        "title": "Probability",
        "description": "How randomness and expectation shape algorithm choice.",
        "route": "/dsa/mathematics/probability"
      },
      {
        "title": "Proof patterns",
        "description": "A practical toolbox for clean reasoning about correctness.",
        "route": "/dsa/mathematics/proof-patterns"
      }
    ],
    "related": [
      {
        "title": "Complexity",
        "description": "Mathematical reasoning supports growth analysis.",
        "route": "/dsa/complexity"
      },
      {
        "title": "Problem Solving",
        "description": "Use math when the solution needs proof and structure.",
        "route": "/dsa/problem-solving"
      }
    ]
  },
  "complexity": {
    "title": "Complexity",
    "route": "/dsa/complexity",
    "description": "Growth rates, trade-offs, recurrence intuition, and the language of scale.",
    "lead": "Complexity explains why one approach survives large input and another does not. It is the cost language of the whole DSA section.",
    "heroBullets": [
      "Measure growth",
      "Compare trade-offs",
      "Understand amortized behavior",
      "Check space and time together"
    ],
    "overviewCards": [
      {
        "title": "What it answers",
        "description": "How time and space grow as input gets larger."
      },
      {
        "title": "Why it matters",
        "description": "It tells you which solutions scale and which ones do not."
      }
    ],
    "topics": [
      {
        "title": "Big-O",
        "description": "Upper-bound growth and why it matters at scale.",
        "route": "/dsa/complexity/big-o"
      },
      {
        "title": "Omega and Theta",
        "description": "Lower bounds and tight bounds for sharper reasoning.",
        "route": "/dsa/complexity/omega-and-theta"
      },
      {
        "title": "Amortized cost",
        "description": "Why occasional expensive operations can still be efficient overall.",
        "route": "/dsa/complexity/amortized-cost"
      },
      {
        "title": "Space vs time",
        "description": "How memory budget changes algorithm choice.",
        "route": "/dsa/complexity/space-vs-time"
      },
      {
        "title": "Recurrence analysis",
        "description": "How recursive structure becomes a cost equation.",
        "route": "/dsa/complexity/recurrence-analysis"
      },
      {
        "title": "Empirical checks",
        "description": "How to sanity-check asymptotic reasoning with small experiments.",
        "route": "/dsa/complexity/empirical-checks"
      }
    ],
    "related": [
      {
        "title": "Mathematics",
        "description": "Use counting and proof patterns when the cost needs justification.",
        "route": "/dsa/mathematics"
      },
      {
        "title": "Algorithms",
        "description": "Apply complexity thinking to actual algorithm patterns.",
        "route": "/dsa/algorithms"
      }
    ]
  },
  "data-structures": {
    "title": "Data Structures",
    "route": "/dsa/data-structures",
    "description": "The core containers and shapes that make fast lookup, ordering, hierarchy, and relationship reasoning possible.",
    "lead": "This module organizes the core structures into one map. Each row is a container, the trade-off it makes, and the lesson that will eventually explain it in depth.",
    "heroBullets": [
      "Start from shape",
      "Compare the cost model",
      "Use the right container",
      "See the structure family"
    ],
    "overviewCards": [
      {
        "title": "What it is",
        "description": "A structure map for arrays, strings, stacks, queues, trees, heaps, graphs, and hash tables."
      },
      {
        "title": "Why it matters",
        "description": "It gives students a stable place to compare the core containers."
      }
    ],
    "topics": [
      {
        "title": "Arrays",
        "description": "Contiguous storage, direct indexing, and strong locality.",
        "route": "/dsa/data-structures/arrays"
      },
      {
        "title": "Strings",
        "description": "Sequence handling, encoding, and text-oriented processing.",
        "route": "/dsa/data-structures/strings"
      },
      {
        "title": "Stacks",
        "description": "Last-in-first-out ordering for nested or reversible work.",
        "route": "/dsa/data-structures/stacks"
      },
      {
        "title": "Queues",
        "description": "First-in-first-out scheduling and buffering.",
        "route": "/dsa/data-structures/queues"
      },
      {
        "title": "Linked lists",
        "description": "Pointer-based navigation with flexible insertion and deletion.",
        "route": "/dsa/data-structures/linked-lists"
      },
      {
        "title": "Trees",
        "description": "Hierarchies, branching, and traversal-based reasoning.",
        "route": "/dsa/data-structures/trees"
      },
      {
        "title": "Heaps",
        "description": "Priority retrieval with partial ordering.",
        "route": "/dsa/data-structures/heaps"
      },
      {
        "title": "Graphs",
        "description": "Relationships, connectivity, and path exploration.",
        "route": "/dsa/data-structures/graphs"
      },
      {
        "title": "Hash tables",
        "description": "Average-case fast lookup through key distribution.",
        "route": "/dsa/data-structures/hash-tables"
      }
    ],
    "related": [
      {
        "title": "Arrays",
        "description": "The first container in the family.",
        "route": "/dsa/arrays"
      },
      {
        "title": "Hashing",
        "description": "A deep dive into hash table behavior.",
        "route": "/dsa/hashing"
      }
    ]
  },
  "algorithms": {
    "title": "Algorithms",
    "route": "/dsa/algorithms",
    "description": "Search, sort, recursion, greedy, DP, and advanced pattern recognition.",
    "lead": "This module is the pattern map. It shows the algorithm families and then sends readers to focused lesson pages for the details.",
    "heroBullets": [
      "Recognize pattern families",
      "Reuse proven shapes",
      "Connect to structure choices",
      "Keep proof and cost in view"
    ],
    "overviewCards": [
      {
        "title": "What it teaches",
        "description": "The recurring problem shapes that show up again and again."
      },
      {
        "title": "How to use it",
        "description": "Choose the right algorithm family after you understand the problem shape."
      }
    ],
    "topics": [
      {
        "title": "Searching",
        "description": "Reduce uncertainty by shrinking the search space.",
        "route": "/dsa/algorithms/searching"
      },
      {
        "title": "Sorting",
        "description": "Order data to unlock faster follow-up operations and clearer reasoning.",
        "route": "/dsa/algorithms/sorting"
      },
      {
        "title": "Recursion",
        "description": "Solve a task by solving smaller versions of the same task.",
        "route": "/dsa/algorithms/recursion"
      },
      {
        "title": "Greedy",
        "description": "Make locally best choices when the proof supports it.",
        "route": "/dsa/algorithms/greedy"
      },
      {
        "title": "Dynamic programming",
        "description": "Reuse overlapping subproblems instead of recomputing them.",
        "route": "/dsa/algorithms/dynamic-programming"
      },
      {
        "title": "Backtracking",
        "description": "Explore possibilities systematically and prune early when needed.",
        "route": "/dsa/algorithms/backtracking"
      },
      {
        "title": "Graph algorithms",
        "description": "Traversal, shortest paths, connectivity, and dependency reasoning.",
        "route": "/dsa/algorithms/graph-algorithms"
      },
      {
        "title": "Interval patterns",
        "description": "Work with ranges, overlaps, scheduling, and merge logic.",
        "route": "/dsa/algorithms/interval-patterns"
      }
    ],
    "related": [
      {
        "title": "Binary Search",
        "description": "A focused pattern with its own invariant.",
        "route": "/dsa/binary-search"
      },
      {
        "title": "Problem Solving",
        "description": "Use the workflow before choosing an algorithm.",
        "route": "/dsa/problem-solving"
      }
    ]
  },
  "problem-solving": {
    "title": "Problem Solving",
    "route": "/dsa/problem-solving",
    "description": "A repeatable workflow for turning DSA questions into patterns, structures, and correct implementations.",
    "lead": "This module is the bridge between the problem statement and the actual solution. It trains the habits that come before code.",
    "heroBullets": [
      "Restate the prompt",
      "Match the pattern",
      "Choose the structure",
      "Check the invariant"
    ],
    "overviewCards": [
      {
        "title": "Why it exists",
        "description": "To turn guesswork into a repeatable method."
      },
      {
        "title": "What it teaches",
        "description": "How to think before coding and how to verify the answer after."
      }
    ],
    "topics": [
      {
        "title": "Restate the problem",
        "description": "Translate the prompt into plain language.",
        "route": "/dsa/problem-solving/restate-the-problem"
      },
      {
        "title": "Identify the pattern",
        "description": "Decide whether the problem is about lookup, ordering, traversal, or optimization.",
        "route": "/dsa/problem-solving/identify-the-pattern"
      },
      {
        "title": "Choose the structure",
        "description": "Pick the container that makes the dominant operation cheap.",
        "route": "/dsa/problem-solving/choose-the-structure"
      },
      {
        "title": "Prove the invariant",
        "description": "State what must remain true and check that each step preserves it.",
        "route": "/dsa/problem-solving/prove-the-invariant"
      },
      {
        "title": "Check complexity",
        "description": "Verify both time and space before you finalize the solution.",
        "route": "/dsa/problem-solving/check-complexity"
      },
      {
        "title": "Handle edge cases",
        "description": "Check empty input, duplicates, sorted input, and extremes.",
        "route": "/dsa/problem-solving/handle-edge-cases"
      },
      {
        "title": "Write the final solution",
        "description": "Turn the reasoning into clean code and test it against examples.",
        "route": "/dsa/problem-solving/write-the-final-solution"
      }
    ],
    "related": [
      {
        "title": "Foundations",
        "description": "Build the mental model first.",
        "route": "/dsa/foundations"
      },
      {
        "title": "Complexity",
        "description": "Check the cost model before locking in the answer.",
        "route": "/dsa/complexity"
      }
    ]
  },
  "binary-search": {
    "title": "Binary Search",
    "route": "/dsa/binary-search",
    "description": "The invariant, the variants, and the mental model that makes binary search work everywhere.",
    "lead": "Binary search is a pattern for ordered spaces. The core skill is not memorizing code, but understanding what stays true while the interval shrinks.",
    "heroBullets": [
      "Think in intervals",
      "Keep the invariant alive",
      "Use monotonic structure",
      "Choose the right variant"
    ],
    "overviewCards": [
      {
        "title": "What it does",
        "description": "Cuts an ordered search space in half until the answer is isolated."
      },
      {
        "title": "Why it matters",
        "description": "It appears in sorted arrays, monotonic predicates, and parameter search."
      }
    ],
    "topics": [
      {
        "title": "Exact match",
        "description": "Find an element if it exists in sorted data.",
        "route": "/dsa/binary-search/exact-match"
      },
      {
        "title": "Lower bound",
        "description": "Find the first position where the condition becomes true.",
        "route": "/dsa/binary-search/lower-bound"
      },
      {
        "title": "Upper bound",
        "description": "Find the last position that still satisfies the condition.",
        "route": "/dsa/binary-search/upper-bound"
      },
      {
        "title": "Search on answer",
        "description": "Search the smallest or largest value that passes a monotonic check.",
        "route": "/dsa/binary-search/search-on-answer"
      },
      {
        "title": "Invariant",
        "description": "State what remains true after every step.",
        "route": "/dsa/binary-search/invariant"
      },
      {
        "title": "Common mistakes",
        "description": "Learn the boundary errors that break the loop.",
        "route": "/dsa/binary-search/common-mistakes"
      },
      {
        "title": "Practice",
        "description": "Apply the same pattern to real problems.",
        "route": "/dsa/binary-search/practice"
      }
    ],
    "related": [
      {
        "title": "Algorithms",
        "description": "See how binary search fits in the broader pattern map.",
        "route": "/dsa/algorithms"
      },
      {
        "title": "Arrays",
        "description": "Binary search usually starts with ordered arrays.",
        "route": "/dsa/arrays"
      }
    ]
  },
  "hashing": {
    "title": "Hashing",
    "route": "/dsa/hashing",
    "description": "Fast lookup, counting, and deduplication when the problem does not need order.",
    "lead": "Hashing trades order for speed. It is the right first choice when membership, counting, or retrieval by key matters more than sorted traversal.",
    "heroBullets": [
      "Look up by key",
      "Handle collisions",
      "Watch load factor",
      "Prefer average-case speed"
    ],
    "overviewCards": [
      {
        "title": "What it teaches",
        "description": "How hash maps and hash sets work at a practical level."
      },
      {
        "title": "Why it matters",
        "description": "It powers lookup, frequency counting, deduplication, and many classic DSA problems."
      }
    ],
    "topics": [
      {
        "title": "Core idea",
        "description": "How hashing maps keys to buckets.",
        "route": "/dsa/hashing/core-idea"
      },
      {
        "title": "Collision handling",
        "description": "What happens when two keys map to the same bucket.",
        "route": "/dsa/hashing/collision-handling"
      },
      {
        "title": "Load factor",
        "description": "Why resizing matters when the table fills up.",
        "route": "/dsa/hashing/load-factor"
      },
      {
        "title": "Maps and sets",
        "description": "The two most common hash-based containers.",
        "route": "/dsa/hashing/maps-and-sets"
      },
      {
        "title": "Frequency counting",
        "description": "How to count repeated values quickly.",
        "route": "/dsa/hashing/frequency-counting"
      },
      {
        "title": "Pitfalls",
        "description": "Ordered queries, poor distribution, and resize mistakes.",
        "route": "/dsa/hashing/pitfalls"
      },
      {
        "title": "Practice",
        "description": "Standard tasks such as two-sum, counting, and grouping.",
        "route": "/dsa/hashing/practice"
      }
    ],
    "related": [
      {
        "title": "Arrays",
        "description": "Many hash-table solutions scan arrays.",
        "route": "/dsa/arrays"
      },
      {
        "title": "Problem Solving",
        "description": "Choose hashing after you understand the problem shape.",
        "route": "/dsa/problem-solving"
      }
    ]
  },
  "practice": {
    "title": "Practice",
    "route": "/dsa/practice",
    "description": "Exercises that focus on reasoning, tracing, and applying ideas under pressure.",
    "lead": "Practice is the bridge between understanding a topic and using it reliably. The drills here train explanation, not just implementation.",
    "heroBullets": [
      "Trace the flow",
      "Derive the cost",
      "Draw the model",
      "Transfer the idea"
    ],
    "overviewCards": [
      {
        "title": "Why it exists",
        "description": "To make reasoning habits automatic under time pressure."
      },
      {
        "title": "How to use it",
        "description": "After each lesson, practice one tracing drill and one cost drill."
      }
    ],
    "topics": [
      {
        "title": "Trace flow",
        "description": "Follow input through a structure or algorithm and explain each step.",
        "route": "/dsa/practice/trace-flow"
      },
      {
        "title": "Derive cost",
        "description": "Write the time or space cost with a short justification.",
        "route": "/dsa/practice/derive-cost"
      },
      {
        "title": "Draw the model",
        "description": "Build the visual map before writing code.",
        "route": "/dsa/practice/draw-the-model"
      },
      {
        "title": "Domain transfer",
        "description": "Explain the same idea in AI, OS, DB, or networking.",
        "route": "/dsa/practice/domain-transfer"
      },
      {
        "title": "Timed drills",
        "description": "Practice under a small time limit to build fluency.",
        "route": "/dsa/practice/timed-drills"
      },
      {
        "title": "Review loop",
        "description": "Check where the reasoning broke and fix the pattern.",
        "route": "/dsa/practice/review-loop"
      }
    ],
    "related": [
      {
        "title": "Problem Solving",
        "description": "Use the workflow before you attempt a drill.",
        "route": "/dsa/problem-solving"
      },
      {
        "title": "Visual Learning",
        "description": "Use diagrams to make the drills easier to follow.",
        "route": "/dsa/visual-learning"
      }
    ]
  },
  "visual-learning": {
    "title": "Visual Learning",
    "route": "/dsa/visual-learning",
    "description": "A visual-first explanation layer for the most common DSA patterns.",
    "lead": "This module makes the hidden shape visible. It is designed to help readers sketch the structure before they code it.",
    "heroBullets": [
      "See the shape first",
      "Use diagrams as a thinking tool",
      "Make patterns easy to recognize",
      "Keep the visual map simple"
    ],
    "overviewCards": [
      {
        "title": "What it teaches",
        "description": "How to sketch and read the common data-structure and algorithm shapes."
      },
      {
        "title": "Why it matters",
        "description": "A clear visual model makes reasoning faster and easier to remember."
      }
    ],
    "topics": [
      {
        "title": "Memory strip",
        "description": "Show contiguous layout, offsets, and element access.",
        "route": "/dsa/visual-learning/memory-strip"
      },
      {
        "title": "Recurrence tree",
        "description": "Turn divide-and-conquer cost into a visible structure.",
        "route": "/dsa/visual-learning/recurrence-tree"
      },
      {
        "title": "Traversal frontier",
        "description": "Track what gets visited next in BFS or DFS.",
        "route": "/dsa/visual-learning/traversal-frontier"
      },
      {
        "title": "Bucket map",
        "description": "Explain hashing, collisions, and load factor visually.",
        "route": "/dsa/visual-learning/bucket-map"
      },
      {
        "title": "State machine",
        "description": "Draw states and transitions for problem framing.",
        "route": "/dsa/visual-learning/state-machine"
      },
      {
        "title": "Graph sketch",
        "description": "Turn connectivity and paths into a simple picture.",
        "route": "/dsa/visual-learning/graph-sketch"
      }
    ],
    "related": [
      {
        "title": "Practice",
        "description": "Use diagrams during the drills.",
        "route": "/dsa/practice"
      },
      {
        "title": "Domain Usage",
        "description": "See where visuals map to real systems.",
        "route": "/dsa/domain-applications"
      }
    ]
  },
  "domain-applications": {
  "title": "Domain Usage",
  "route": "/dsa/domain-applications",
  "description": "A master page for applying DSA across AI, compilers, databases, OS, networking, robotics, graphics, finance, search, recommendation, and security.",
  "lead": "This module is the domain map for DSA. It shows what each real-world field needs, why the structure matters, and what a learner should be able to explain after each lesson.",
  "heroBullets": [
    "Map DSA to real systems",
    "See what each domain needs",
    "Read the table as a syllabus",
    "Open placeholder lessons for each domain"
  ],
  "overviewCards": [
    {
      "title": "What it is",
      "description": "A master index for the domain-specific applications of DSA."
    },
    {
      "title": "Why it matters",
      "description": "It connects the core structures and algorithms to real engineering work."
    }
  ],
  "learningGoals": [
    {
      "title": "Identify the data shape",
      "description": "See the objects, graphs, queues, indexes, and pipelines hidden in a domain."
    },
    {
      "title": "Choose the right structure",
      "description": "Explain which DSA tool fits the domain's dominant operation."
    },
    {
      "title": "Explain the trade-off",
      "description": "Describe why the chosen structure is worth its cost in that domain."
    },
    {
      "title": "Transfer the pattern",
      "description": "Recognize how the same DSA idea appears in a different system."
    }
  ],
  "topics": [
    {
      "title": "AI / ML",
      "description": "Vectors, nearest-neighbor search, sparse data, and optimization loops.",
      "route": "/dsa/domain-applications/ai-ml"
    },
    {
      "title": "Compilers",
      "description": "ASTs, symbol tables, CFGs, SSA, dominance, and worklists.",
      "route": "/dsa/domain-applications/compilers"
    },
    {
      "title": "Databases",
      "description": "Indexes, B-trees, hashing, caching, join planning, and range queries.",
      "route": "/dsa/domain-applications/databases"
    },
    {
      "title": "Operating systems",
      "description": "Scheduling queues, memory maps, page tables, and locking discipline.",
      "route": "/dsa/domain-applications/operating-systems"
    },
    {
      "title": "Networking",
      "description": "Routing graphs, packet queues, shortest paths, and flow control.",
      "route": "/dsa/domain-applications/networking"
    },
    {
      "title": "Robotics",
      "description": "Planning graphs, state search, path cost, and control loops.",
      "route": "/dsa/domain-applications/robotics"
    },
    {
      "title": "Graphics",
      "description": "Scene graphs, spatial partitioning, indexing, and geometry lookup.",
      "route": "/dsa/domain-applications/graphics"
    },
    {
      "title": "Finance / HFT",
      "description": "Priority queues, order books, low-latency lookup, and streaming windows.",
      "route": "/dsa/domain-applications/finance"
    },
    {
      "title": "Gaming",
      "description": "Spatial data structures, pathfinding, event queues, and render-state optimization.",
      "route": "/dsa/domain-applications/gaming"
    },
    {
      "title": "Search engines",
      "description": "Inverted indexes, heaps, ranking pipelines, and retrieval graphs.",
      "route": "/dsa/domain-applications/search"
    },
    {
      "title": "Recommendation systems",
      "description": "Sparse matrices, graph traversal, candidate generation, and similarity search.",
      "route": "/dsa/domain-applications/recommendation"
    },
    {
      "title": "Cybersecurity",
      "description": "Pattern matching, trees, hash tables, and anomaly detection flows.",
      "route": "/dsa/domain-applications/security"
    }
  ],
  "related": [
    {
      "title": "Data Structures",
      "description": "See the core shapes used in each domain.",
      "route": "/dsa/data-structures"
    },
    {
      "title": "Algorithms",
      "description": "See the algorithm families that power these systems.",
      "route": "/dsa/algorithms"
    }
  ]
},

  "arrays": {
    "title": "Arrays",
    "route": "/dsa/arrays",
    "description": "The master page for the arrays module. It shows the full lesson map and the article routes that will be written next.",
    "lead": "Use this page as the table of contents for everything arrays can teach: what the structure is, how it works in memory, what it costs, and which patterns it powers.",
    "heroBullets": [
      "Start with the definition",
      "Move through memory and cost",
      "Finish with 2D and 3D arrays",
      "Keep the module map simple"
    ],
    "overviewCards": [
      {
        "title": "What it teaches",
        "description": "The full arrays story, from definition to patterns and multi-dimensional data."
      },
      {
        "title": "Why it matters",
        "description": "It is the base container behind many DSA techniques."
      }
    ],
    "topics": [
      {
        "title": "What is an array?",
        "description": "The definition, the shape of the data, and why arrays are a flat ordered container.",
        "route": "/dsa/arrays/what-is-an-array"
      },
      {
        "title": "Memory layout",
        "description": "Contiguous storage, base address, offsets, and index-to-address math.",
        "route": "/dsa/arrays/memory-layout"
      },
      {
        "title": "Array operations",
        "description": "Access, update, search, insert, delete, and resize cost.",
        "route": "/dsa/arrays/operations"
      },
      {
        "title": "Dynamic arrays",
        "description": "Capacity, growth, amortized resizing, and why append is usually fast on average.",
        "route": "/dsa/arrays/dynamic-arrays"
      },
      {
        "title": "Traversal and loops",
        "description": "How to walk through an array safely and reason about boundaries.",
        "route": "/dsa/arrays/traversal-and-loops"
      },
      {
        "title": "Searching in arrays",
        "description": "Linear search, binary search, and the difference between ordered and unordered data.",
        "route": "/dsa/arrays/searching-in-arrays"
      },
      {
        "title": "Two pointers",
        "description": "The fast-and-slow or left-and-right pattern on one array.",
        "route": "/dsa/arrays/two-pointers"
      },
      {
        "title": "Sliding window",
        "description": "A moving interval, window state, and constant-time updates inside the loop.",
        "route": "/dsa/arrays/sliding-window"
      },
      {
        "title": "Prefix sums",
        "description": "Precomputed partial totals for fast range queries and repeated accumulation.",
        "route": "/dsa/arrays/prefix-sums"
      },
      {
        "title": "2D arrays",
        "description": "Rows, columns, matrix-style indexing, and nested traversal.",
        "route": "/dsa/arrays/2d-arrays"
      },
      {
        "title": "3D arrays",
        "description": "Layered data, coordinate access, and the extension from matrices to volumes.",
        "route": "/dsa/arrays/3d-arrays"
      },
      {
        "title": "Array problem patterns",
        "description": "The common interview shapes that combine arrays with other ideas.",
        "route": "/dsa/arrays/problem-patterns"
      }
    ],
    "related": [
      {
        "title": "Problem Solving",
        "description": "Use a repeatable workflow before choosing an array solution.",
        "route": "/dsa/problem-solving"
      },
      {
        "title": "Binary Search",
        "description": "Ordered arrays support invariant-based search.",
        "route": "/dsa/binary-search"
      }
    ]
  }
};

export const DSA_LESSONS = {
  "foundations/what-is-dsa": {
    "title": "What Is DSA?",
    "lead": "A placeholder lesson that explains the role of data structures and algorithms in problem solving.",
    "moduleTitle": "Foundations",
    "moduleRoute": "/dsa/foundations",
    "outline": [
      "Why DSA exists",
      "The problem model",
      "The cost model"
    ]
  },
  "foundations/state-modeling": {
    "title": "State Modeling",
    "lead": "A placeholder lesson on turning a problem into state, transitions, and outputs.",
    "moduleTitle": "Foundations",
    "moduleRoute": "/dsa/foundations",
    "outline": [
      "State",
      "Transition",
      "Output"
    ]
  },
  "foundations/constraints-and-goals": {
    "title": "Constraints and Goals",
    "lead": "A placeholder lesson on what limits matter and what the solution must optimize.",
    "moduleTitle": "Foundations",
    "moduleRoute": "/dsa/foundations",
    "outline": [
      "Limits",
      "Objective",
      "Trade-off"
    ]
  },
  "foundations/input-output-thinking": {
    "title": "Input and Output Thinking",
    "lead": "A placeholder lesson on restating the prompt before writing code.",
    "moduleTitle": "Foundations",
    "moduleRoute": "/dsa/foundations",
    "outline": [
      "Input",
      "Output",
      "Reframe"
    ]
  },
  "foundations/choosing-a-structure": {
    "title": "Choosing a Structure",
    "lead": "A placeholder lesson on matching the problem to the right container.",
    "moduleTitle": "Foundations",
    "moduleRoute": "/dsa/foundations",
    "outline": [
      "Access pattern",
      "Update pattern",
      "Choose the container"
    ]
  },
  "foundations/practice-patterns": {
    "title": "Practice Patterns",
    "lead": "A placeholder lesson on keeping the foundations usable across many problems.",
    "moduleTitle": "Foundations",
    "moduleRoute": "/dsa/foundations",
    "outline": [
      "Checklist",
      "Repetition",
      "Reflection"
    ]
  },
  "binary-math/bits-and-bytes": {
    "title": "Bits and Bytes",
    "lead": "A placeholder lesson on the basic unit of binary representation.",
    "moduleTitle": "Binary Math",
    "moduleRoute": "/dsa/binary-math",
    "outline": [
      "Bits",
      "Bytes",
      "Storage"
    ]
  },
  "binary-math/shifts-and-masks": {
    "title": "Shifts and Masks",
    "lead": "A placeholder lesson on moving bits and filtering out the ones you need.",
    "moduleTitle": "Binary Math",
    "moduleRoute": "/dsa/binary-math",
    "outline": [
      "Left shift",
      "Right shift",
      "Masking"
    ]
  },
  "binary-math/complements": {
    "title": "Complements",
    "lead": "A placeholder lesson on signed integers and two's complement encoding.",
    "moduleTitle": "Binary Math",
    "moduleRoute": "/dsa/binary-math",
    "outline": [
      "Sign bit",
      "Two's complement",
      "Negation"
    ]
  },
  "binary-math/powers-of-two": {
    "title": "Powers of Two",
    "lead": "A placeholder lesson on capacities, alignment, and binary growth.",
    "moduleTitle": "Binary Math",
    "moduleRoute": "/dsa/binary-math",
    "outline": [
      "2^k",
      "Capacity growth",
      "Boundaries"
    ]
  },
  "binary-math/binary-operations": {
    "title": "Binary Operations",
    "lead": "A placeholder lesson on AND, OR, XOR, and their DSA uses.",
    "moduleTitle": "Binary Math",
    "moduleRoute": "/dsa/binary-math",
    "outline": [
      "AND",
      "OR",
      "XOR"
    ]
  },
  "binary-math/bit-tricks": {
    "title": "Bit Tricks",
    "lead": "A placeholder lesson on compact state reasoning and low-level patterns.",
    "moduleTitle": "Binary Math",
    "moduleRoute": "/dsa/binary-math",
    "outline": [
      "Flags",
      "Parity",
      "Compact state"
    ]
  },
  "mathematics/counting": {
    "title": "Counting",
    "lead": "A placeholder lesson on enumerating possibilities carefully.",
    "moduleTitle": "Mathematics",
    "moduleRoute": "/dsa/mathematics",
    "outline": [
      "Cases",
      "Permutations",
      "Combinations"
    ]
  },
  "mathematics/recurrences": {
    "title": "Recurrences",
    "lead": "A placeholder lesson on recurrence relations and repeated structure.",
    "moduleTitle": "Mathematics",
    "moduleRoute": "/dsa/mathematics",
    "outline": [
      "Relation",
      "Base case",
      "Growth"
    ]
  },
  "mathematics/invariants": {
    "title": "Invariants",
    "lead": "A placeholder lesson on keeping a property true while a process runs.",
    "moduleTitle": "Mathematics",
    "moduleRoute": "/dsa/mathematics",
    "outline": [
      "Property",
      "Preservation",
      "Proof"
    ]
  },
  "mathematics/induction": {
    "title": "Induction",
    "lead": "A placeholder lesson on proof by induction for recursive structure.",
    "moduleTitle": "Mathematics",
    "moduleRoute": "/dsa/mathematics",
    "outline": [
      "Base case",
      "Inductive step",
      "Conclusion"
    ]
  },
  "mathematics/probability": {
    "title": "Probability",
    "lead": "A placeholder lesson on uncertainty, expectation, and randomized choices.",
    "moduleTitle": "Mathematics",
    "moduleRoute": "/dsa/mathematics",
    "outline": [
      "Chance",
      "Expectation",
      "Randomization"
    ]
  },
  "mathematics/proof-patterns": {
    "title": "Proof Patterns",
    "lead": "A placeholder lesson on the practical proof styles used in DSA.",
    "moduleTitle": "Mathematics",
    "moduleRoute": "/dsa/mathematics",
    "outline": [
      "Direct proof",
      "Contradiction",
      "Induction"
    ]
  },
  "complexity/big-o": {
    "title": "Big-O",
    "lead": "A placeholder lesson on upper-bound growth and scale.",
    "moduleTitle": "Complexity",
    "moduleRoute": "/dsa/complexity",
    "outline": [
      "Growth rate",
      "Upper bound",
      "Scale"
    ]
  },
  "complexity/omega-and-theta": {
    "title": "Omega and Theta",
    "lead": "A placeholder lesson on lower bounds and tight bounds.",
    "moduleTitle": "Complexity",
    "moduleRoute": "/dsa/complexity",
    "outline": [
      "Omega",
      "Theta",
      "Tight bound"
    ]
  },
  "complexity/amortized-cost": {
    "title": "Amortized Cost",
    "lead": "A placeholder lesson on average cost over a sequence of operations.",
    "moduleTitle": "Complexity",
    "moduleRoute": "/dsa/complexity",
    "outline": [
      "Sequence cost",
      "Occasional spikes",
      "Average"
    ]
  },
  "complexity/space-vs-time": {
    "title": "Space vs Time",
    "lead": "A placeholder lesson on memory budget versus runtime.",
    "moduleTitle": "Complexity",
    "moduleRoute": "/dsa/complexity",
    "outline": [
      "Memory",
      "Speed",
      "Trade-off"
    ]
  },
  "complexity/recurrence-analysis": {
    "title": "Recurrence Analysis",
    "lead": "A placeholder lesson on turning recursion into a cost equation.",
    "moduleTitle": "Complexity",
    "moduleRoute": "/dsa/complexity",
    "outline": [
      "Split",
      "Combine",
      "Solve"
    ]
  },
  "complexity/empirical-checks": {
    "title": "Empirical Checks",
    "lead": "A placeholder lesson on validating complexity with small tests.",
    "moduleTitle": "Complexity",
    "moduleRoute": "/dsa/complexity",
    "outline": [
      "Measure",
      "Compare",
      "Sanity check"
    ]
  },
  "data-structures/arrays": {
    "title": "Arrays",
    "lead": "A placeholder lesson for the array structure and its cost model.",
    "moduleTitle": "Data Structures",
    "moduleRoute": "/dsa/data-structures",
    "outline": [
      "Contiguous storage",
      "Indexing",
      "Cost"
    ]
  },
  "data-structures/strings": {
    "title": "Strings",
    "lead": "A placeholder lesson for text sequences and encoding.",
    "moduleTitle": "Data Structures",
    "moduleRoute": "/dsa/data-structures",
    "outline": [
      "Encoding",
      "Parsing",
      "Search"
    ]
  },
  "data-structures/stacks": {
    "title": "Stacks",
    "lead": "A placeholder lesson for last-in-first-out behavior.",
    "moduleTitle": "Data Structures",
    "moduleRoute": "/dsa/data-structures",
    "outline": [
      "Push",
      "Pop",
      "Undo"
    ]
  },
  "data-structures/queues": {
    "title": "Queues",
    "lead": "A placeholder lesson for first-in-first-out behavior.",
    "moduleTitle": "Data Structures",
    "moduleRoute": "/dsa/data-structures",
    "outline": [
      "Enqueue",
      "Dequeue",
      "Scheduling"
    ]
  },
  "data-structures/linked-lists": {
    "title": "Linked Lists",
    "lead": "A placeholder lesson for pointer-based navigation and flexible insertion.",
    "moduleTitle": "Data Structures",
    "moduleRoute": "/dsa/data-structures",
    "outline": [
      "Nodes",
      "Links",
      "Traversal"
    ]
  },
  "data-structures/trees": {
    "title": "Trees",
    "lead": "A placeholder lesson for hierarchy and branching.",
    "moduleTitle": "Data Structures",
    "moduleRoute": "/dsa/data-structures",
    "outline": [
      "Parent-child",
      "Traversal",
      "Hierarchy"
    ]
  },
  "data-structures/heaps": {
    "title": "Heaps",
    "lead": "A placeholder lesson for priority retrieval with partial ordering.",
    "moduleTitle": "Data Structures",
    "moduleRoute": "/dsa/data-structures",
    "outline": [
      "Heap order",
      "Priority queue",
      "Index math"
    ]
  },
  "data-structures/graphs": {
    "title": "Graphs",
    "lead": "A placeholder lesson for connectivity, paths, and relationships.",
    "moduleTitle": "Data Structures",
    "moduleRoute": "/dsa/data-structures",
    "outline": [
      "Nodes",
      "Edges",
      "Traversal"
    ]
  },
  "data-structures/hash-tables": {
    "title": "Hash Tables",
    "lead": "A placeholder lesson for average-case fast lookup by key.",
    "moduleTitle": "Data Structures",
    "moduleRoute": "/dsa/data-structures",
    "outline": [
      "Buckets",
      "Collisions",
      "Lookup"
    ]
  },
  "algorithms/searching": {
    "title": "Searching",
    "lead": "A placeholder lesson for search-space reduction.",
    "moduleTitle": "Algorithms",
    "moduleRoute": "/dsa/algorithms",
    "outline": [
      "Linear search",
      "Binary search",
      "Search space"
    ]
  },
  "algorithms/sorting": {
    "title": "Sorting",
    "lead": "A placeholder lesson for ordering strategies and their trade-offs.",
    "moduleTitle": "Algorithms",
    "moduleRoute": "/dsa/algorithms",
    "outline": [
      "Comparisons",
      "Stability",
      "Cost"
    ]
  },
  "algorithms/recursion": {
    "title": "Recursion",
    "lead": "A placeholder lesson for self-similar subproblems and stack reasoning.",
    "moduleTitle": "Algorithms",
    "moduleRoute": "/dsa/algorithms",
    "outline": [
      "Base case",
      "Recursive case",
      "Call stack"
    ]
  },
  "algorithms/greedy": {
    "title": "Greedy",
    "lead": "A placeholder lesson for local choice with proof support.",
    "moduleTitle": "Algorithms",
    "moduleRoute": "/dsa/algorithms",
    "outline": [
      "Local choice",
      "Proof",
      "Examples"
    ]
  },
  "algorithms/dynamic-programming": {
    "title": "Dynamic Programming",
    "lead": "A placeholder lesson for subproblem reuse and memoization.",
    "moduleTitle": "Algorithms",
    "moduleRoute": "/dsa/algorithms",
    "outline": [
      "States",
      "Memoization",
      "Recurrence"
    ]
  },
  "algorithms/backtracking": {
    "title": "Backtracking",
    "lead": "A placeholder lesson for search with pruning.",
    "moduleTitle": "Algorithms",
    "moduleRoute": "/dsa/algorithms",
    "outline": [
      "Choose",
      "Explore",
      "Prune"
    ]
  },
  "algorithms/graph-algorithms": {
    "title": "Graph Algorithms",
    "lead": "A placeholder lesson for traversal, paths, and dependencies.",
    "moduleTitle": "Algorithms",
    "moduleRoute": "/dsa/algorithms",
    "outline": [
      "DFS",
      "BFS",
      "Paths"
    ]
  },
  "algorithms/interval-patterns": {
    "title": "Interval Patterns",
    "lead": "A placeholder lesson for ranges, overlaps, and schedule logic.",
    "moduleTitle": "Algorithms",
    "moduleRoute": "/dsa/algorithms",
    "outline": [
      "Merge",
      "Overlap",
      "Schedule"
    ]
  },
  "problem-solving/restate-the-problem": {
    "title": "Restate the Problem",
    "lead": "A placeholder lesson on translating the prompt into plain language.",
    "moduleTitle": "Problem Solving",
    "moduleRoute": "/dsa/problem-solving",
    "outline": [
      "Input",
      "Output",
      "Constraints"
    ]
  },
  "problem-solving/identify-the-pattern": {
    "title": "Identify the Pattern",
    "lead": "A placeholder lesson on recognizing lookup, traversal, optimization, or ordering.",
    "moduleTitle": "Problem Solving",
    "moduleRoute": "/dsa/problem-solving",
    "outline": [
      "Pattern",
      "Shape",
      "Match"
    ]
  },
  "problem-solving/choose-the-structure": {
    "title": "Choose the Structure",
    "lead": "A placeholder lesson on picking the container that keeps the dominant operation cheap.",
    "moduleTitle": "Problem Solving",
    "moduleRoute": "/dsa/problem-solving",
    "outline": [
      "Array",
      "Map",
      "Tree"
    ]
  },
  "problem-solving/prove-the-invariant": {
    "title": "Prove the Invariant",
    "lead": "A placeholder lesson on what must remain true after every step.",
    "moduleTitle": "Problem Solving",
    "moduleRoute": "/dsa/problem-solving",
    "outline": [
      "Invariant",
      "Preservation",
      "Proof"
    ]
  },
  "problem-solving/check-complexity": {
    "title": "Check Complexity",
    "lead": "A placeholder lesson on verifying the time and space cost.",
    "moduleTitle": "Problem Solving",
    "moduleRoute": "/dsa/problem-solving",
    "outline": [
      "Time",
      "Space",
      "Scale"
    ]
  },
  "problem-solving/handle-edge-cases": {
    "title": "Handle Edge Cases",
    "lead": "A placeholder lesson on empty input, duplicates, and extreme values.",
    "moduleTitle": "Problem Solving",
    "moduleRoute": "/dsa/problem-solving",
    "outline": [
      "Empty",
      "Duplicate",
      "Extreme"
    ]
  },
  "problem-solving/write-the-final-solution": {
    "title": "Write the Final Solution",
    "lead": "A placeholder lesson on turning reasoning into code and testing it.",
    "moduleTitle": "Problem Solving",
    "moduleRoute": "/dsa/problem-solving",
    "outline": [
      "Implementation",
      "Test",
      "Refine"
    ]
  },
  "binary-search/exact-match": {
    "title": "Exact Match",
    "lead": "A placeholder lesson for finding one item in sorted data.",
    "moduleTitle": "Binary Search",
    "moduleRoute": "/dsa/binary-search",
    "outline": [
      "Sorted data",
      "Midpoint",
      "Termination"
    ]
  },
  "binary-search/lower-bound": {
    "title": "Lower Bound",
    "lead": "A placeholder lesson for finding the first true position.",
    "moduleTitle": "Binary Search",
    "moduleRoute": "/dsa/binary-search",
    "outline": [
      "First true",
      "Boundary",
      "Invariant"
    ]
  },
  "binary-search/upper-bound": {
    "title": "Upper Bound",
    "lead": "A placeholder lesson for finding the last true position.",
    "moduleTitle": "Binary Search",
    "moduleRoute": "/dsa/binary-search",
    "outline": [
      "Last true",
      "Boundary",
      "Invariant"
    ]
  },
  "binary-search/search-on-answer": {
    "title": "Search on Answer",
    "lead": "A placeholder lesson for monotonic parameter search.",
    "moduleTitle": "Binary Search",
    "moduleRoute": "/dsa/binary-search",
    "outline": [
      "Monotonicity",
      "Threshold",
      "Search space"
    ]
  },
  "binary-search/invariant": {
    "title": "Invariant",
    "lead": "A placeholder lesson on what stays true while the interval shrinks.",
    "moduleTitle": "Binary Search",
    "moduleRoute": "/dsa/binary-search",
    "outline": [
      "Range",
      "Truth",
      "Shrink"
    ]
  },
  "binary-search/common-mistakes": {
    "title": "Common Mistakes",
    "lead": "A placeholder lesson on boundary errors and midpoint traps.",
    "moduleTitle": "Binary Search",
    "moduleRoute": "/dsa/binary-search",
    "outline": [
      "Wrong bounds",
      "Infinite loop",
      "Missing invariant"
    ]
  },
  "binary-search/practice": {
    "title": "Practice",
    "lead": "A placeholder lesson for applying binary search to real tasks.",
    "moduleTitle": "Binary Search",
    "moduleRoute": "/dsa/binary-search",
    "outline": [
      "Sorted array",
      "First true",
      "Parameter search"
    ]
  },
  "hashing/core-idea": {
    "title": "Core Idea",
    "lead": "A placeholder lesson on how keys map to buckets.",
    "moduleTitle": "Hashing",
    "moduleRoute": "/dsa/hashing",
    "outline": [
      "Hash",
      "Bucket",
      "Key"
    ]
  },
  "hashing/collision-handling": {
    "title": "Collision Handling",
    "lead": "A placeholder lesson on separate chaining and open addressing.",
    "moduleTitle": "Hashing",
    "moduleRoute": "/dsa/hashing",
    "outline": [
      "Collision",
      "Strategy",
      "Trade-off"
    ]
  },
  "hashing/load-factor": {
    "title": "Load Factor",
    "lead": "A placeholder lesson on resizing and table fullness.",
    "moduleTitle": "Hashing",
    "moduleRoute": "/dsa/hashing",
    "outline": [
      "Capacity",
      "Resize",
      "Average cost"
    ]
  },
  "hashing/maps-and-sets": {
    "title": "Maps and Sets",
    "lead": "A placeholder lesson on the two most common hash containers.",
    "moduleTitle": "Hashing",
    "moduleRoute": "/dsa/hashing",
    "outline": [
      "Map",
      "Set",
      "Use cases"
    ]
  },
  "hashing/frequency-counting": {
    "title": "Frequency Counting",
    "lead": "A placeholder lesson on counting repeated values quickly.",
    "moduleTitle": "Hashing",
    "moduleRoute": "/dsa/hashing",
    "outline": [
      "Count",
      "Update",
      "Lookup"
    ]
  },
  "hashing/pitfalls": {
    "title": "Pitfalls",
    "lead": "A placeholder lesson on the common design mistakes in hashing.",
    "moduleTitle": "Hashing",
    "moduleRoute": "/dsa/hashing",
    "outline": [
      "Order",
      "Distribution",
      "Resizing"
    ]
  },
  "hashing/practice": {
    "title": "Practice",
    "lead": "A placeholder lesson for two-sum, duplicates, and grouping.",
    "moduleTitle": "Hashing",
    "moduleRoute": "/dsa/hashing",
    "outline": [
      "Two-sum",
      "Duplicates",
      "Grouping"
    ]
  },
  "practice/trace-flow": {
    "title": "Trace Flow",
    "lead": "A placeholder lesson on following the steps of an algorithm or structure.",
    "moduleTitle": "Practice",
    "moduleRoute": "/dsa/practice",
    "outline": [
      "Input",
      "Step",
      "Output"
    ]
  },
  "practice/derive-cost": {
    "title": "Derive Cost",
    "lead": "A placeholder lesson on writing the time and space cost.",
    "moduleTitle": "Practice",
    "moduleRoute": "/dsa/practice",
    "outline": [
      "Time",
      "Space",
      "Justification"
    ]
  },
  "practice/draw-the-model": {
    "title": "Draw the Model",
    "lead": "A placeholder lesson on sketching the structure before coding.",
    "moduleTitle": "Practice",
    "moduleRoute": "/dsa/practice",
    "outline": [
      "Diagram",
      "State",
      "Flow"
    ]
  },
  "practice/domain-transfer": {
    "title": "Domain Transfer",
    "lead": "A placeholder lesson on explaining the same idea in a different domain.",
    "moduleTitle": "Practice",
    "moduleRoute": "/dsa/practice",
    "outline": [
      "AI",
      "OS",
      "Database"
    ]
  },
  "practice/timed-drills": {
    "title": "Timed Drills",
    "lead": "A placeholder lesson for short practice under time pressure.",
    "moduleTitle": "Practice",
    "moduleRoute": "/dsa/practice",
    "outline": [
      "Time box",
      "Speed",
      "Clarity"
    ]
  },
  "practice/review-loop": {
    "title": "Review Loop",
    "lead": "A placeholder lesson on checking where reasoning broke and fixing it.",
    "moduleTitle": "Practice",
    "moduleRoute": "/dsa/practice",
    "outline": [
      "Mistake",
      "Fix",
      "Repeat"
    ]
  },
  "visual-learning/memory-strip": {
    "title": "Memory Strip",
    "lead": "A placeholder lesson on showing contiguous layout and offsets visually.",
    "moduleTitle": "Visual Learning",
    "moduleRoute": "/dsa/visual-learning",
    "outline": [
      "Layout",
      "Offset",
      "Access"
    ]
  },
  "visual-learning/recurrence-tree": {
    "title": "Recurrence Tree",
    "lead": "A placeholder lesson on turning divide-and-conquer cost into a tree.",
    "moduleTitle": "Visual Learning",
    "moduleRoute": "/dsa/visual-learning",
    "outline": [
      "Split",
      "Levels",
      "Cost"
    ]
  },
  "visual-learning/traversal-frontier": {
    "title": "Traversal Frontier",
    "lead": "A placeholder lesson on BFS and DFS frontier states.",
    "moduleTitle": "Visual Learning",
    "moduleRoute": "/dsa/visual-learning",
    "outline": [
      "Queue",
      "Stack",
      "Visit order"
    ]
  },
  "visual-learning/bucket-map": {
    "title": "Bucket Map",
    "lead": "A placeholder lesson on hashing and collisions as a visual model.",
    "moduleTitle": "Visual Learning",
    "moduleRoute": "/dsa/visual-learning",
    "outline": [
      "Bucket",
      "Collision",
      "Load factor"
    ]
  },
  "visual-learning/state-machine": {
    "title": "State Machine",
    "lead": "A placeholder lesson on states and transitions for problem framing.",
    "moduleTitle": "Visual Learning",
    "moduleRoute": "/dsa/visual-learning",
    "outline": [
      "State",
      "Transition",
      "Goal"
    ]
  },
  "visual-learning/graph-sketch": {
    "title": "Graph Sketch",
    "lead": "A placeholder lesson on drawing nodes, edges, and paths.",
    "moduleTitle": "Visual Learning",
    "moduleRoute": "/dsa/visual-learning",
    "outline": [
      "Node",
      "Edge",
      "Path"
    ]
  },
  "domain-applications/ai-ml": {
    "title": "AI / ML",
    "lead": "A placeholder lesson on how AI and ML use vectors, similarity, search, sparse data, and optimization.",
    "moduleTitle": "Domain Usage",
    "moduleRoute": "/dsa/domain-applications",
    "outline": [
      {
        "title": "Data shape",
        "description": "Learn how features, labels, and predictions are represented before any algorithm runs."
      },
      {
        "title": "Vectors and tensors",
        "description": "Understand the basic numeric containers used to hold embeddings, features, and model state."
      },
      {
        "title": "Feature engineering",
        "description": "See how raw inputs are turned into useful structures that models can use."
      },
      {
        "title": "Similarity search",
        "description": "See how distance and nearest-neighbor search are used to compare data points."
      },
      {
        "title": "Embeddings",
        "description": "Understand how dense vector representations help with retrieval, clustering, and ranking."
      },
      {
        "title": "Sparse representations",
        "description": "Learn why sparse vectors and matrices matter when most values are zero."
      },
      {
        "title": "Indexing for scale",
        "description": "See how trees, heaps, hashing, and partitions help large AI systems stay fast."
      },
      {
        "title": "Candidate generation",
        "description": "Learn how AI systems shrink huge search spaces before scoring the best options."
      },
      {
        "title": "Batching and caching",
        "description": "Understand how grouped work and reuse reduce repeated computation in ML pipelines."
      },
      {
        "title": "Optimization loops",
        "description": "Follow the repeated update cycle used in training and tuning models."
      },
      {
        "title": "Retrieval and ranking",
        "description": "Connect candidate generation, ranking, and ranking-time trade-offs to DSA."
      },
      {
        "title": "Production trade-offs",
        "description": "See how latency, memory, throughput, and accuracy shape the final design."
      }
    ]
  },
  "domain-applications/compilers": {
    "title": "Compilers",
    "lead": "A placeholder lesson on how compilers use ASTs, symbol tables, control flow graphs, and worklists.",
    "moduleTitle": "Domain Usage",
    "moduleRoute": "/dsa/domain-applications",
    "outline": [
      {
        "title": "Source to tokens",
        "description": "See how raw code becomes structured tokens before parsing starts."
      },
      {
        "title": "Abstract syntax tree",
        "description": "Understand the AST as the tree shape that drives the rest of the compiler."
      },
      {
        "title": "Symbol table",
        "description": "Learn how names, scopes, and metadata are stored for fast lookup."
      },
      {
        "title": "Control flow graph",
        "description": "See how program flow becomes a graph of basic blocks and edges."
      },
      {
        "title": "SSA and dominance",
        "description": "Understand the data structure behind static single assignment and dominance relations."
      },
      {
        "title": "Worklists and dataflow",
        "description": "Follow how repeated passes propagate facts across the graph."
      },
      {
        "title": "Optimization passes",
        "description": "See how the compiler uses analysis to improve performance or size."
      },
      {
        "title": "Code generation",
        "description": "Understand how the compiler maps high-level structure to machine-level output."
      }
    ]
  },
  "domain-applications/databases": {
    "title": "Databases",
    "lead": "A placeholder lesson on how databases use indexes, trees, hashing, joins, and buffering.",
    "moduleTitle": "Domain Usage",
    "moduleRoute": "/dsa/domain-applications",
    "outline": [
      {
        "title": "Data model",
        "description": "Learn how rows, keys, and records are represented in storage."
      },
      {
        "title": "Indexing",
        "description": "See why indexes make lookups faster and what they cost to maintain."
      },
      {
        "title": "B-trees",
        "description": "Understand the tree structure that supports ordered access and range queries."
      },
      {
        "title": "Hash indexes",
        "description": "See how hashing helps exact-match queries and key-based access."
      },
      {
        "title": "Joins",
        "description": "Learn how tables are matched, grouped, and combined efficiently."
      },
      {
        "title": "Range queries",
        "description": "Understand how sorted structures support intervals and scans."
      },
      {
        "title": "Caching and buffers",
        "description": "See how memory layers reduce repeated work and disk access."
      },
      {
        "title": "Transactions",
        "description": "Learn the idea of consistent updates across multiple operations."
      }
    ]
  },
  "domain-applications/operating-systems": {
    "title": "Operating Systems",
    "lead": "A placeholder lesson on how operating systems use scheduling, paging, queues, trees, and locks.",
    "moduleTitle": "Domain Usage",
    "moduleRoute": "/dsa/domain-applications",
    "outline": [
      {
        "title": "Process model",
        "description": "Understand how tasks, threads, and resources are represented." 
      },
      {
        "title": "Scheduling queues",
        "description": "See how the OS orders work and decides what runs next."
      },
      {
        "title": "Paging and memory",
        "description": "Learn how virtual memory maps to physical storage."
      },
      {
        "title": "Page tables",
        "description": "Understand the lookup structure behind address translation."
      },
      {
        "title": "Locks and critical sections",
        "description": "See how shared data is protected during concurrent access."
      },
      {
        "title": "File systems",
        "description": "Learn how directories, metadata, and blocks are organized."
      },
      {
        "title": "Buffers and caches",
        "description": "See how the OS keeps hot data close to where it is needed."
      },
      {
        "title": "Deadlock handling",
        "description": "Understand the dependency graph behind resource waits."
      }
    ]
  },
  "domain-applications/networking": {
    "title": "Networking",
    "lead": "A placeholder lesson on how networking uses routing graphs, queues, flow control, and protocol state.",
    "moduleTitle": "Domain Usage",
    "moduleRoute": "/dsa/domain-applications",
    "outline": [
      {
        "title": "Packet model",
        "description": "Learn how messages are broken into units that travel across the network."
      },
      {
        "title": "Routing graphs",
        "description": "See how nodes and edges model paths through the network."
      },
      {
        "title": "Packet queues",
        "description": "Understand buffering when traffic arrives faster than it can be sent."
      },
      {
        "title": "Flow control",
        "description": "See how senders and receivers coordinate to avoid overload."
      },
      {
        "title": "Shortest paths",
        "description": "Learn how graph algorithms help choose efficient routes."
      },
      {
        "title": "Congestion handling",
        "description": "Understand how the network reacts when too much traffic competes for the same path."
      },
      {
        "title": "Protocol state machines",
        "description": "See how connections move through predictable states."
      },
      {
        "title": "Load balancing",
        "description": "Learn how hashing and partitioning spread traffic across services."
      }
    ]
  },
  "domain-applications/robotics": {
    "title": "Robotics",
    "lead": "A placeholder lesson on how robotics uses planning graphs, search, maps, heuristics, and control loops.",
    "moduleTitle": "Domain Usage",
    "moduleRoute": "/dsa/domain-applications",
    "outline": [
      {
        "title": "State space",
        "description": "Learn how robot position, sensor data, and goals become searchable states."
      },
      {
        "title": "Planning graph",
        "description": "See how actions and transitions form a search structure."
      },
      {
        "title": "Path search",
        "description": "Understand how graph search is used to find a route to a goal."
      },
      {
        "title": "Heuristics",
        "description": "Learn how smart estimates reduce the search space."
      },
      {
        "title": "Occupancy maps",
        "description": "See how space is divided into cells for navigation and obstacle handling."
      },
      {
        "title": "Sensor fusion",
        "description": "Understand how multiple inputs are combined into one usable state."
      },
      {
        "title": "Control loops",
        "description": "Follow the repeated cycle of sensing, deciding, and acting."
      },
      {
        "title": "Safety checks",
        "description": "Learn how the robot avoids invalid or unsafe moves."
      }
    ]
  },
  "domain-applications/graphics": {
    "title": "Graphics",
    "lead": "A placeholder lesson on how graphics uses scene graphs, spatial partitioning, lookup, and batching.",
    "moduleTitle": "Domain Usage",
    "moduleRoute": "/dsa/domain-applications",
    "outline": [
      {
        "title": "Scene graph",
        "description": "Learn how objects are organized into a tree of visual relationships."
      },
      {
        "title": "Spatial partitioning",
        "description": "See how space is divided to make geometric lookup faster."
      },
      {
        "title": "Bounding volumes",
        "description": "Understand how boxes and spheres help narrow down what matters."
      },
      {
        "title": "Culling",
        "description": "See how hidden or irrelevant objects are skipped early."
      },
      {
        "title": "Render batching",
        "description": "Learn how similar work is grouped to reduce overhead."
      },
      {
        "title": "Texture and buffer lookup",
        "description": "Understand how graphics data is stored and reused efficiently."
      },
      {
        "title": "Real-time trade-offs",
        "description": "See how frame time, memory, and visual quality interact."
      },
      {
        "title": "Level-of-detail",
        "description": "Learn how detail changes with distance to keep rendering fast."
      }
    ]
  },
  "domain-applications/finance": {
    "title": "Finance / HFT",
    "lead": "A placeholder lesson on how finance uses order books, priority queues, lookup, and low-latency streams.",
    "moduleTitle": "Domain Usage",
    "moduleRoute": "/dsa/domain-applications",
    "outline": [
      {
        "title": "Order book",
        "description": "Learn how buy and sell interest is organized for matching."
      },
      {
        "title": "Priority queues",
        "description": "See how the best price or earliest event is selected quickly."
      },
      {
        "title": "Streaming windows",
        "description": "Understand how time-based slices are processed continuously."
      },
      {
        "title": "Fast lookup",
        "description": "Learn why hash maps and index structures matter for quote retrieval."
      },
      {
        "title": "Matching engines",
        "description": "See how bids, asks, and trades are paired under strict rules."
      },
      {
        "title": "Latency control",
        "description": "Understand why every extra lookup or copy matters at high speed."
      },
      {
        "title": "Risk checks",
        "description": "See how validation and limits are applied before orders go live."
      },
      {
        "title": "Throughput trade-offs",
        "description": "Learn the balance between speed, fairness, and system load."
      }
    ]
  },
  "domain-applications/gaming": {
    "title": "Gaming",
    "lead": "A placeholder lesson on how games use pathfinding, event queues, spatial indexing, and frame-time trade-offs.",
    "moduleTitle": "Domain Usage",
    "moduleRoute": "/dsa/domain-applications",
    "outline": [
      {
        "title": "World state",
        "description": "Learn how game objects, positions, and actions are stored together."
      },
      {
        "title": "Pathfinding",
        "description": "See how grids and graphs help characters move through a map."
      },
      {
        "title": "Event queues",
        "description": "Understand how actions are scheduled and processed in order."
      },
      {
        "title": "Spatial indexing",
        "description": "Learn how nearby objects are found quickly in large worlds."
      },
      {
        "title": "Collision checks",
        "description": "See how broad-phase and narrow-phase lookup reduce work."
      },
      {
        "title": "Entity batching",
        "description": "Understand how repeated work is grouped for better frame performance."
      },
      {
        "title": "State machines",
        "description": "See how game entities move through predictable behavior states."
      },
      {
        "title": "Frame budget",
        "description": "Learn the time limits that shape the final design."
      }
    ]
  },
  "domain-applications/search": {
    "title": "Search Engines",
    "lead": "A placeholder lesson on how search engines use indexes, heaps, retrieval, ranking, and sharding.",
    "moduleTitle": "Domain Usage",
    "moduleRoute": "/dsa/domain-applications",
    "outline": [
      {
        "title": "Tokenization",
        "description": "Learn how text is broken into searchable units."
      },
      {
        "title": "Inverted index",
        "description": "See how words map back to the documents that contain them."
      },
      {
        "title": "Query lookup",
        "description": "Understand how a user query is matched against stored data."
      },
      {
        "title": "Candidate retrieval",
        "description": "Learn how the search engine narrows a large corpus to a smaller set."
      },
      {
        "title": "Ranking",
        "description": "See how candidates are scored and ordered by relevance."
      },
      {
        "title": "Heaps and priority queues",
        "description": "Understand how the best results are kept near the top quickly."
      },
      {
        "title": "Sharding",
        "description": "See how the index is split so it can scale across machines."
      },
      {
        "title": "Caching",
        "description": "Learn how hot queries and results are reused to save time."
      }
    ]
  },
  "domain-applications/recommendation": {
    "title": "Recommendation Systems",
    "lead": "A placeholder lesson on how recommendation systems use sparse data, similarity search, graphs, and ranking.",
    "moduleTitle": "Domain Usage",
    "moduleRoute": "/dsa/domain-applications",
    "outline": [
      {
        "title": "User and item data",
        "description": "Learn how behavior and content are represented in structured form."
      },
      {
        "title": "Sparse matrices",
        "description": "See why recommendation data is often sparse and large."
      },
      {
        "title": "Similarity search",
        "description": "Understand how similar items or users are found quickly."
      },
      {
        "title": "Candidate generation",
        "description": "Learn how the system narrows huge choices into a manageable list."
      },
      {
        "title": "Ranking",
        "description": "See how the candidate list is ordered by predicted relevance."
      },
      {
        "title": "Graph traversal",
        "description": "Understand how relationships between users and items can be explored."
      },
      {
        "title": "Embedding lookup",
        "description": "See how dense vectors are used to compare preferences and content."
      },
      {
        "title": "Feedback loops",
        "description": "Learn how user actions change future recommendations over time."
      }
    ]
  },
  "domain-applications/security": {
    "title": "Cybersecurity",
    "lead": "A placeholder lesson on how cybersecurity uses pattern matching, hashing, trees, graphs, and event streams.",
    "moduleTitle": "Domain Usage",
    "moduleRoute": "/dsa/domain-applications",
    "outline": [
      {
        "title": "Event streams",
        "description": "Learn how security logs and alerts are processed continuously."
      },
      {
        "title": "Pattern matching",
        "description": "See how known signatures are searched for in large data sets."
      },
      {
        "title": "Hashing",
        "description": "Understand why hashes are used for verification and lookup."
      },
      {
        "title": "Access control",
        "description": "Learn how permissions and roles are checked quickly."
      },
      {
        "title": "Anomaly detection",
        "description": "See how unusual behavior is identified in logs and traffic."
      },
      {
        "title": "Graph analysis",
        "description": "Understand how relationships between hosts or users reveal risk."
      },
      {
        "title": "Threat indexing",
        "description": "See how indicators and signatures are organized for fast retrieval."
      },
      {
        "title": "Rate limiting",
        "description": "Learn how repeated requests are controlled to reduce abuse."
      }
    ]
  },
  "arrays/what-is-an-array": {
    "title": "What Is an Array?",
    "lead": "A placeholder article for the definition, structure, and role of arrays in the DSA module.",
    "moduleTitle": "Arrays",
    "moduleRoute": "/dsa/arrays",
    "outline": [
      "Definition",
      "Shape",
      "Why it matters"
    ]
  },
  "arrays/memory-layout": {
    "title": "Array Memory Layout",
    "lead": "A placeholder article for contiguous storage, index math, and locality.",
    "moduleTitle": "Arrays",
    "moduleRoute": "/dsa/arrays",
    "outline": [
      "Contiguous block",
      "Offset math",
      "Locality"
    ]
  },
  "arrays/operations": {
    "title": "Array Operations",
    "lead": "A placeholder article for access, update, search, insert, delete, and resize costs.",
    "moduleTitle": "Arrays",
    "moduleRoute": "/dsa/arrays",
    "outline": [
      "Access",
      "Insert and delete",
      "Resize"
    ]
  },
  "arrays/dynamic-arrays": {
    "title": "Dynamic Arrays",
    "lead": "A placeholder article for growth, capacity, and amortized behavior.",
    "moduleTitle": "Arrays",
    "moduleRoute": "/dsa/arrays",
    "outline": [
      "Capacity",
      "Growth strategy",
      "Amortized cost"
    ]
  },
  "arrays/traversal-and-loops": {
    "title": "Traversal and Loops",
    "lead": "A placeholder article for walking through arrays safely and cleanly.",
    "moduleTitle": "Arrays",
    "moduleRoute": "/dsa/arrays",
    "outline": [
      "Forward traversal",
      "Reverse traversal",
      "Boundary checks"
    ]
  },
  "arrays/searching-in-arrays": {
    "title": "Searching in Arrays",
    "lead": "A placeholder article for linear search, binary search, and search-space thinking.",
    "moduleTitle": "Arrays",
    "moduleRoute": "/dsa/arrays",
    "outline": [
      "Linear search",
      "Binary search",
      "Ordered vs unordered"
    ]
  },
  "arrays/two-pointers": {
    "title": "Two Pointers",
    "lead": "A placeholder article for the left-right and fast-slow array pattern.",
    "moduleTitle": "Arrays",
    "moduleRoute": "/dsa/arrays",
    "outline": [
      "Left and right",
      "Fast and slow",
      "Use cases"
    ]
  },
  "arrays/sliding-window": {
    "title": "Sliding Window",
    "lead": "A placeholder article for a moving interval over an array.",
    "moduleTitle": "Arrays",
    "moduleRoute": "/dsa/arrays",
    "outline": [
      "Window state",
      "Expand and shrink",
      "Use cases"
    ]
  },
  "arrays/prefix-sums": {
    "title": "Prefix Sums",
    "lead": "A placeholder article for precomputed totals and fast range queries.",
    "moduleTitle": "Arrays",
    "moduleRoute": "/dsa/arrays",
    "outline": [
      "Prefix table",
      "Range query",
      "Difference idea"
    ]
  },
  "arrays/2d-arrays": {
    "title": "2D Arrays",
    "lead": "A placeholder article for matrices, rows, columns, and grid traversal.",
    "moduleTitle": "Arrays",
    "moduleRoute": "/dsa/arrays",
    "outline": [
      "Rows and columns",
      "Nested loops",
      "Use cases"
    ]
  },
  "arrays/3d-arrays": {
    "title": "3D Arrays",
    "lead": "A placeholder article for layered data and multi-axis indexing.",
    "moduleTitle": "Arrays",
    "moduleRoute": "/dsa/arrays",
    "outline": [
      "Layers",
      "Coordinates",
      "Use cases"
    ]
  },
  "arrays/problem-patterns": {
    "title": "Array Problem Patterns",
    "lead": "A placeholder article for the common interview shapes that build on arrays.",
    "moduleTitle": "Arrays",
    "moduleRoute": "/dsa/arrays",
    "outline": [
      "Two pointers",
      "Sliding window",
      "Prefix sums"
    ]
  }
};
