/* Global-heavy loop for -fpic vs -fno-pic codegen comparison.
 * Default N=50M iterations; override: ./pic_bench 50000000
 */
#include <stdint.h>
#include <stdlib.h>

volatile int counter = 0;

__attribute__((noinline)) int bump(void) {
  return ++counter;
}

int main(int argc, char **argv) {
  size_t n = argc > 1 ? (size_t)strtoull(argv[1], 0, 10) : 50000000UL;
  long sum = 0;
  for (size_t i = 0; i < n; i++)
    sum += bump();
  /* Keep exit status 0 so csperf treats the run as success. */
  if (sum == 0)
    return 1;
  return 0;
}
