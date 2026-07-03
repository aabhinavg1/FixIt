import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'Virtual Memory and Paging';

const FACTS = [
  fact('page', 'a fixed-size chunk of virtual memory', 'the unit the operating system manages for paging', 'The OS manages memory in pages.', 'memory management'),
  fact('page fault', 'an access to a page that is not currently resident or mapped', 'demand paging and lazy loading of memory', 'A page fault can trigger the OS to load a page into RAM.', 'paging'),
  fact('TLB', 'the translation lookaside buffer', 'caching virtual-to-physical address translations', 'A TLB hit speeds up address translation.', 'address translation'),
  fact('mmap', 'a call that maps files or anonymous memory into an address space', 'memory-mapped file access', 'mmap can let a program access a file like memory.', 'virtual memory'),
  fact('copy-on-write', 'sharing pages until one side writes', 'efficient process creation and memory sharing', 'After a write, the shared page is duplicated.', 'memory optimization'),
];

export const DAY_13_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 13);
