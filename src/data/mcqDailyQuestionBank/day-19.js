import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'Algorithms and Interview Drill';

const FACTS = [
  fact('BFS', 'breadth-first search', 'finding shortest paths in unweighted graphs', 'BFS explores neighbors level by level.', 'graph traversal'),
  fact('DFS', 'depth-first search', 'exploring connected regions or components', 'DFS often uses recursion or an explicit stack.', 'graph traversal'),
  fact('topological sort', 'an ordering of DAG vertices by dependency', 'build systems and prerequisite scheduling', 'Topological sort only exists for directed acyclic graphs.', 'graph algorithms'),
  fact('heap', 'a tree-based priority structure', 'retrieving the minimum or maximum quickly', 'priority_queue is often built on a heap.', 'data structures'),
  fact('hash map', 'a key-value table based on hashing', 'average O(1) lookup for key access', 'unordered_map is the standard C++ hash map.', 'hash tables'),
];

export const DAY_19_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 19);
