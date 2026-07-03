import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'STL and Containers';

const FACTS = [
  fact('map', 'an ordered associative container', 'key lookup when you want sorted keys', 'A map keeps its keys in order.', 'associative containers'),
  fact('unordered_map', 'a hash-table-based key-value container', 'average constant-time key lookup', 'Its key order is unspecified.', 'hashing'),
  fact('set', 'an ordered container that stores unique keys', 'membership tests without duplicates', 'A set does not store duplicate keys.', 'associative containers'),
  fact('list', 'a doubly linked list container', 'frequent insert and erase in the middle', 'A list does not provide random access.', 'sequence containers'),
  fact('iterator invalidation', 'the loss of validity of iterators after a container changes', 'updating containers carefully after reallocation or erase', 'Vector growth can invalidate existing iterators.', 'iterator rules'),
];

export const DAY_06_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 6);
