import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'Arrays, Strings, and Complexity';

const FACTS = [
  fact('array', 'a fixed-size contiguous block of elements', 'storing a small group of items with direct indexing', 'A built-in array has its size fixed when the array is created.', 'arrays'),
  fact('std::string', 'a C++ class for text with helper functions', 'working with text and character data', 'std::string manages its own storage and size information.', 'strings'),
  fact('prefix sum', 'a running-total technique for preprocessing values', 'answering many range-sum queries quickly', 'Prefix sums let you answer interval sums after one preprocessing pass.', 'prefix sums'),
  fact('binary search', 'a search method that repeatedly halves a sorted range', 'finding values in sorted data in logarithmic time', 'Binary search requires the data to be sorted.', 'searching'),
  fact('deque', 'a double-ended queue container', 'pushing and popping efficiently at both ends', 'A deque supports fast insertion at the front and back.', 'STL containers'),
];

export const DAY_02_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 2);
