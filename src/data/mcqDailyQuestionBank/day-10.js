import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'LLVM IR and SSA';

const FACTS = [
  fact('SSA', 'static single assignment form', 'simplifying optimization by giving each value one definition', 'A phi node helps merge values from different predecessors in SSA.', 'IR design'),
  fact('phi node', 'an SSA instruction that selects a value based on control-flow predecessor', 'merging values at control-flow joins', 'A phi node appears at the top of a block with multiple incoming edges.', 'SSA'),
  fact('basic block', 'a straight-line sequence with one entry and one exit', 'building a control-flow graph', 'A branch instruction usually ends a basic block.', 'control flow'),
  fact('IR', 'intermediate representation', 'target-independent optimization and analysis', 'LLVM IR sits between source code and machine code.', 'compiler pipeline'),
  fact('mem2reg', 'an optimization that promotes stack variables into SSA registers', 'removing unnecessary loads and stores', 'mem2reg often makes later optimizations easier.', 'optimization'),
];

export const DAY_10_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 10);
