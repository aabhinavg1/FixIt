export const SOCIAL_IMAGE_VERSION = '20260328-og-refresh';

const DEFAULT_SOCIAL_IMAGE = '/img/og/master.png';

const SOCIAL_IMAGE_RULES = [
  { prefix: '/docs/tracks', image: '/img/og/tracks.png', alt: 'CompilerSutra learning tracks preview' },
  { prefix: '/docs/start-here', image: '/img/og/tracks.png', alt: 'CompilerSutra start here preview' },
  { prefix: '/docs/compilers', image: '/img/og/compilers.png', alt: 'CompilerSutra compiler design preview' },
  { prefix: '/docs/llvm', image: '/img/og/llvm.png', alt: 'CompilerSutra LLVM preview' },
  { prefix: '/docs/mlir', image: '/img/og/mlir.png', alt: 'CompilerSutra MLIR preview' },
  { prefix: '/docs/MLIR', image: '/img/og/mlir.png', alt: 'CompilerSutra MLIR preview' },
  { prefix: '/docs/tvm', image: '/img/og/tvm.png', alt: 'CompilerSutra TVM preview' },
  { prefix: '/docs/gpu', image: '/img/og/gpu.png', alt: 'CompilerSutra GPU programming preview' },
  { prefix: '/docs/linux', image: '/img/og/linux.png', alt: 'CompilerSutra Linux and systems preview' },
  { prefix: '/docs/c++', image: '/img/og/cpp.png', alt: 'CompilerSutra C++ preview' },
  { prefix: '/docs/mcq', image: '/img/og/mcq.png', alt: 'CompilerSutra MCQ practice preview' },
  { prefix: '/docs/how_to', image: '/img/og/tracks.png', alt: 'CompilerSutra tutorials preview' },
  { prefix: '/docs/python', image: '/img/og/tracks.png', alt: 'CompilerSutra tutorials preview' },
  { prefix: '/docs/project', image: '/img/og/labs.png', alt: 'CompilerSutra labs preview' },
  { prefix: '/docs/live', image: '/img/og/tracks.png', alt: 'CompilerSutra tutorials preview' },
  { prefix: '/docs/articles/gcc_vs_clang_real_benchmarks_2026_reporter', image: '/img/og/benchmarks.png', alt: 'CompilerSutra benchmark preview' },
  { prefix: '/docs/articles', image: '/img/og/articles.png', alt: 'CompilerSutra articles preview' },
  { prefix: '/docs/tools', image: '/img/og/tools.png', alt: 'CompilerSutra tools preview' },
  { prefix: '/docs/labs', image: '/img/og/labs.png', alt: 'CompilerSutra labs preview' },
  { prefix: '/docs/coa', image: '/img/og/coa.png', alt: 'CompilerSutra computer organization preview' },
];

export function getSocialImageForPath(pathname = '/') {
  const matched = SOCIAL_IMAGE_RULES.find(({ prefix }) => pathname.startsWith(prefix));
  return {
    image: matched?.image || DEFAULT_SOCIAL_IMAGE,
    alt: matched?.alt || 'CompilerSutra social preview',
  };
}
