import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'Modern C++ Features';

const FACTS = [
  fact('auto', 'the type-deduction keyword', 'avoiding long explicit type names', 'auto deduces the type from the initializer.', 'type deduction'),
  fact('move semantics', 'a way to transfer resource ownership instead of copying', 'avoiding expensive deep copies', 'std::move does not move data by itself; it casts to an rvalue.', 'value categories'),
  fact('lambda', 'an unnamed callable object', 'writing short inline functions', 'A lambda can capture variables from the surrounding scope.', 'functional features'),
  fact('constexpr', 'a marker for compile-time evaluable expressions', 'doing computation during compilation when possible', 'A constexpr function can often be evaluated at compile time.', 'compile-time programming'),
  fact('std::optional', 'a type that can hold either a value or no value', 'expressing maybe-result semantics without sentinel values', 'std::optional helps represent an absent value explicitly.', 'modern utilities'),
];

export const DAY_11_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 11);
