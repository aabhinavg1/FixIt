import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'Pointers and Memory';

const FACTS = [
  fact('pointer', 'a variable that stores an address', 'indirectly accessing an object through its address', 'A pointer can be null.', 'pointers'),
  fact('reference', 'an alias that cannot be reseated', 'passing objects without copying them', 'A reference must be initialized when it is created.', 'references'),
  fact('new/delete', 'the pair used for dynamic allocation and deallocation', 'managing heap memory in raw C++', 'delete must match the allocation form used by new.', 'dynamic memory'),
  fact('unique_ptr', 'a smart pointer with exclusive ownership', 'managing a resource that has a single owner', 'A unique_ptr cannot be copied.', 'smart pointers'),
  fact('shared_ptr', 'a reference-counted smart pointer with shared ownership', 'allowing multiple owners of one resource', 'Copying a shared_ptr increases its control-block count.', 'smart pointers'),
];

export const DAY_07_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 7);
