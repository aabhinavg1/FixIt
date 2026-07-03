import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'Recursion and Dynamic Programming';

const FACTS = [
  fact('base case', 'the stopping condition for a recursive function', 'preventing infinite recursion', 'Every recursive function needs at least one base case.', 'recursion'),
  fact('memoization', 'caching previously solved subproblems', 'top-down dynamic programming', 'Memoization trades extra memory for fewer repeated calls.', 'dynamic programming'),
  fact('bottom-up DP', 'an iterative way to build answers from smaller states', 'tabulation over subproblems', 'Bottom-up DP usually starts from smaller subproblems.', 'dynamic programming'),
  fact('overlapping subproblems', 'the same subproblem appearing many times', 'spotting where DP can replace repeated recursion', 'Memoization helps when subproblems repeat.', 'DP theory'),
  fact('call stack', 'the runtime stack used to track function calls', 'keeping recursion state while functions call other functions', 'Deep recursion can overflow the call stack.', 'runtime execution'),
];

export const DAY_08_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 8);
