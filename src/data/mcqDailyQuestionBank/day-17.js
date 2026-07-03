import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'Parsing and Syntax Trees';

const FACTS = [
  fact('token', 'the smallest lexical unit produced from source code', 'feeding the parser with keywords, identifiers, and literals', 'Identifiers, keywords, and literals become tokens.', 'lexical analysis'),
  fact('AST', 'an abstract syntax tree that captures program structure', 'semantic analysis and later compiler passes', 'An AST is usually smaller than a full parse tree.', 'syntax analysis'),
  fact('parse tree', 'a full grammar derivation tree', 'representing the exact syntax of a language input', 'A parse tree tends to include more grammar detail than an AST.', 'parsing'),
  fact('recursive descent', 'a top-down parser built from functions', 'handwriting parsers for simple grammars in C++', 'Recursive descent parsers can be written directly in C++.', 'parser implementation'),
  fact('operator precedence', 'the rules that decide expression binding order', 'parsing arithmetic and other expressions correctly', 'Multiplication usually binds tighter than addition.', 'expression parsing'),
];

export const DAY_17_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 17);
