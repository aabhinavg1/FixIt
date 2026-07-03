import { ALL_MCQ_QUESTIONS } from './sourcePool';

const DAY_SOURCE_PATTERNS = {
  1: ['docs/mcq/questions/basic/', 'docs/mcq/questions/intermediate/', 'docs/mcq/questions/advanced/', 'docs/mcq/questions/specialized/'],
  2: ['docs/mcq/questions/basic/array-and-strings.md', 'docs/mcq/questions/basic/loop.md', 'docs/mcq/questions/basic/functions.md', 'docs/mcq/questions/domain/competitive-programming/'],
  3: ['docs/mcq/questions/domain/compilers/', 'docs/mcq/questions/domain/compiler-dev/'],
  4: ['docs/mcq/questions/domain/system-programming/'],
  5: ['docs/mcq/questions/domain/coa/'],
  6: ['docs/mcq/questions/advanced/stl.md', 'docs/mcq/questions/advanced/vectors.md', 'docs/mcq/questions/domain/competitive-programming/stl-and-cpp-tricks.mdx', 'docs/mcq/questions/basic/array-and-strings.md'],
  7: ['docs/mcq/questions/basic/pointers', 'docs/mcq/questions/basic/pointers-and-references.md', 'docs/mcq/questions/intermediate/memory-management.md', 'docs/mcq/questions/advanced/smart-pointers.md'],
  8: ['docs/mcq/questions/domain/competitive-programming/graphs-and-dp.mdx', 'docs/mcq/questions/domain/competitive-programming/algorithms-and-complexity.mdx', 'docs/mcq/questions/specialized/algorithm.md'],
  9: ['docs/mcq/questions/domain/gpu-programming/'],
  10: ['docs/mcq/questions/domain/compilers/llvm/', 'docs/mcq/questions/domain/compiler-dev/parsing-and-ir.mdx', 'docs/mcq/questions/domain/compiler-dev/llvm-and-optimization.mdx'],
  11: ['docs/mcq/questions/advanced/move-semantics.md', 'docs/mcq/questions/advanced/lambdas.md', 'docs/mcq/questions/advanced/cpp-features.md', 'docs/mcq/questions/advanced/templates.md', 'docs/mcq/questions/specialized/design-patterns.md'],
  12: ['docs/mcq/questions/advanced/concurrency.md', 'docs/mcq/questions/advanced/multithreading.md', 'docs/mcq/questions/domain/system-programming/processes-and-threads.mdx'],
  13: ['docs/mcq/questions/domain/system-programming/memory-and-scheduling.mdx', 'docs/mcq/questions/domain/system-programming/c-memory-layout.mdx'],
  14: ['docs/mcq/questions/domain/system-programming/ipc-and-signals.mdx'],
  15: ['docs/mcq/questions/specialized/optimization.md', 'docs/mcq/questions/domain/coa/', 'docs/mcq/questions/domain/data-science-hpc/performance-and-scaling.mdx'],
  16: ['docs/mcq/questions/domain/gpu-programming/performance-and-occupancy.mdx', 'docs/mcq/questions/domain/gpu-programming/memory-and-synchronization.mdx'],
  17: ['docs/mcq/questions/domain/compilers/compiler/basics.mdx', 'docs/mcq/questions/domain/compilers/compiler/lexer.mdx', 'docs/mcq/questions/domain/compilers/compiler/commands.mdx', 'docs/mcq/questions/domain/compiler-dev/parsing-and-ir.mdx', 'docs/mcq/questions/domain/compilers/llvm/compiler-data-structures-quiz.mdx'],
  18: ['docs/mcq/questions/domain/system-programming/c-memory-layout.mdx', 'docs/mcq/questions/domain/embedded/', 'docs/mcq/questions/domain/coa/basic-terminology-quiz.mdx', 'docs/mcq/questions/domain/coa/architecture-vs-organization-quiz.mdx', 'docs/mcq/questions/domain/coa/instruction-flow-modern-cpu-quiz.mdx'],
  19: ['docs/mcq/questions/domain/competitive-programming/quiz.mdx', 'docs/mcq/questions/domain/competitive-programming/algorithms-and-complexity.mdx', 'docs/mcq/questions/domain/competitive-programming/graphs-and-dp.mdx', 'docs/mcq/questions/domain/competitive-programming/stl-and-cpp-tricks.mdx'],
  20: [],
};

const DAY_ORDER = Array.from({ length: 20 }, (_, index) => index + 1);

function hashString(value) {
  let hash = 2166136261;

  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function createSeededRandom(seed) {
  let state = hashString(String(seed)) || 1;

  return () => {
    state = (state + 0x6D2B79F5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(items, seed) {
  const random = createSeededRandom(seed);
  const result = [...items];

  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function questionKey(item) {
  return `${item.question}|||${item.answer}`;
}

function matchesPatterns(item, patterns) {
  if (!patterns.length) {
    return true;
  }

  return patterns.some((pattern) => item.sourcePath.includes(pattern));
}

function selectQuestionsForDay(day, usedKeys) {
  const patterns = DAY_SOURCE_PATTERNS[day] || [];
  const preferred = ALL_MCQ_QUESTIONS.filter((item) => !usedKeys.has(questionKey(item)) && matchesPatterns(item, patterns));
  const remainder = ALL_MCQ_QUESTIONS.filter((item) => !usedKeys.has(questionKey(item)) && !preferred.includes(item));
  const pool = preferred.length >= 20 ? preferred : preferred.concat(remainder);
  const selected = shuffle(pool, `daily-day-${day}`).slice(0, 20);

  for (const item of selected) {
    usedKeys.add(questionKey(item));
  }

  return selected;
}

function buildBank() {
  const usedKeys = new Set();
  const bank = {};

  for (const day of DAY_ORDER) {
    bank[day] = selectQuestionsForDay(day, usedKeys);
  }

  return bank;
}

export const DAILY_MCQ_QUESTION_BANK = buildBank();

export function getDailyMcqQuestions(day) {
  return DAILY_MCQ_QUESTION_BANK[day] || [];
}
