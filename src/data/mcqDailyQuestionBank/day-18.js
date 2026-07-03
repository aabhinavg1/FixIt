import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'Low-Level Systems Basics';

const FACTS = [
  fact('ABI', 'the application binary interface', 'making compiled code interoperable across translation units and libraries', 'An ABI defines calling convention and binary layout rules.', 'binary compatibility'),
  fact('calling convention', 'the rule set for passing arguments and returning values', 'function calls across compiled code', 'A calling convention specifies which registers or stack slots carry parameters.', 'function calls'),
  fact('ELF', 'the executable and linkable format', 'Linux binaries and shared libraries', 'ELF is a common executable format on Unix-like systems.', 'binary format'),
  fact('stack frame', 'the activation record for one function call', 'storing locals, saved registers, and return data', 'Recursive calls create multiple stack frames.', 'runtime stack'),
  fact('name mangling', 'the encoding of names for overloading and namespaces', 'linking C++ functions with unique signatures', 'extern "C" reduces or disables C++ name mangling.', 'ABI and linking'),
];

export const DAY_18_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 18);
