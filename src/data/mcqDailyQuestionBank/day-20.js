import { buildQuestions, fact } from './shared';

const DAY_TITLE = 'Final Mixed Revision';

const FACTS = [
  fact('std::span', 'a non-owning view of contiguous elements', 'passing slices of arrays or vectors without copying', 'std::span does not own the elements it views.', 'modern C++ views'),
  fact('std::string_view', 'a non-owning view of character data', 'reading text without allocating a new string', 'std::string_view is useful for lightweight string handling.', 'modern C++ views'),
  fact('std::scoped_lock', 'a RAII helper that can lock multiple mutexes safely', 'avoiding deadlocks when locking several mutexes together', 'std::scoped_lock unlocks automatically at scope exit.', 'concurrency utilities'),
  fact('std::array', 'a fixed-size container with contiguous storage', 'small buffers where the size is known at compile time', 'std::array has value semantics and does not decay to a pointer.', 'STL containers'),
  fact('steady_clock', 'a monotonic clock for measuring intervals', 'timing benchmarks and elapsed durations', 'steady_clock is preferred for measuring durations.', 'chrono'),
];

export const DAY_20_QUESTIONS = buildQuestions(DAY_TITLE, FACTS, 20);
