import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'Compiler Pipeline';

const FACTS = [
  fact('preprocessor', 'the phase that handles #include and #define directives', 'expanding macros and including headers before compilation', 'The preprocessor runs before the compiler proper.', 'build pipeline'),
  fact('lexer', 'the component that turns characters into tokens', 'identifying keywords, identifiers, and literals', 'The lexer produces tokens for the parser.', 'front end'),
  fact('parser', 'the phase that builds syntax structure from tokens', 'checking grammar and building an AST-like structure', 'The parser consumes the token stream.', 'parsing'),
  fact('object file', 'the result of compiling one translation unit', 'linking later with other compiled units', 'An object file can still contain unresolved external symbols.', 'code generation'),
  fact('linker', 'the tool that combines object files and resolves symbols', 'creating an executable or library from compiled pieces', 'The linker matches declarations to definitions across files.', 'linking'),
];

export const DAY_03_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 3);
