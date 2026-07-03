import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'C++ Foundations';

const FACTS = [
  fact('std::cout', 'the standard output stream', 'printing formatted text to the console', 'It comes from the <iostream> header.', 'C++ I/O'),
  fact('const', 'a qualifier that makes an object read-only after initialization', 'preventing accidental modification', 'A const variable cannot be reassigned after it is initialized.', 'C++ type qualifiers'),
  fact('reference', 'an alias for an existing object', 'passing or returning objects without copying them', 'A reference must bind to a valid object.', 'C++ references'),
  fact('scope resolution operator', 'the :: operator used to qualify a name', 'accessing namespace or class members', 'It helps name things such as std::vector and class methods.', 'C++ namespaces'),
  fact('vector', 'a resizable contiguous sequence container', 'storing elements with random access', 'Its elements are stored contiguously in memory.', 'STL containers'),
];

export const DAY_01_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 1);
