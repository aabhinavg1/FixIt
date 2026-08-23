/* Complete testcase: CSV-ish strtol parse loop
 * where Clang -O2 can be slower than -O1 due to MachineBlockPlacement.
 *
 * Build (any recent Clang):
 *   clang -O1 -o parse.O1  machine_block_placement_csv_parse.c
 *   clang -O2 -o parse.O2  machine_block_placement_csv_parse.c
 *   clang -O2 -mllvm -disable-block-placement -o parse.O2np \
 *         machine_block_placement_csv_parse.c
 *
 * Correctness (fixed seed, expected sum):
 *   ./parse.O1 1000          # expect PASS sum=15009852
 *   ./parse.O1 1048576       # expect PASS sum=15723844160
 *
 * Perf (optional):
 *   perf stat -e cycles,instructions,branches,branch-misses -- ./parse.O2 1048576
 *   perf stat -e cycles,instructions,branches,branch-misses -- ./parse.O1 1048576
 *   perf stat -e cycles,instructions,branches,branch-misses -- ./parse.O2np 1048576
 *
 * Observed shape (Clang 18 / Clang 24 stage1, AMD Ryzen 7 9700X, N=1048576):
 *   -O2: fewer instructions than -O1, but ~2.6x branch-misses and higher time
 *   -O2 -mllvm -disable-block-placement: restores -O1-like misses and time
 */
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

static uint32_t lcg(uint32_t *s) {
  *s = *s * 1664525u + 1013904223u;
  return *s;
}

/* Known sums for seed=29 and snprintf "%d,%d,%d\n" with (lcg%10000) fields. */
static long expected_sum(size_t lines) {
  switch (lines) {
  case 1: return 12313;
  case 10: return 140157;
  case 100: return 1465822;
  case 1000: return 15009852;
  case 1048576: return 15723844160L;
  default: return -1; /* unknown - skip check */
  }
}

int main(int argc, char **argv) {
  size_t lines = argc > 1 ? (size_t)atoll(argv[1]) : (size_t)(1u << 20);
  size_t cap = lines * 48 + 64;
  char *buf = (char *)malloc(cap);
  if (!buf) {
    fprintf(stderr, "oom\n");
    return 2;
  }

  size_t len = 0;
  uint32_t s = 29;
  for (size_t i = 0; i < lines; i++) {
    int a = (int)(lcg(&s) % 10000);
    int b = (int)(lcg(&s) % 10000);
    int c = (int)(lcg(&s) % 10000);
    int n = snprintf(buf + len, cap - len, "%d,%d,%d\n", a, b, c);
    if (n < 0 || (size_t)n >= cap - len) {
      fprintf(stderr, "buffer too small\n");
      free(buf);
      return 2;
    }
    len += (size_t)n;
  }

  /* Hot kernel under study. */
  long sum = 0;
  const char *p = buf;
  const char *end = buf + len;
  while (p < end) {
    char *q;
    long x = strtol(p, &q, 10);
    if (q == p)
      break;
    sum += x;
    p = q;
    if (p < end && (*p == ',' || *p == '\n'))
      p++;
  }

  long want = expected_sum(lines);
  if (want >= 0 && sum != want) {
    fprintf(stderr, "FAIL lines=%zu sum=%ld expected=%ld\n", lines, sum, want);
    free(buf);
    return 1;
  }

  printf("PASS lines=%zu sum=%ld\n", lines, sum);
  free(buf);
  return 0;
}
