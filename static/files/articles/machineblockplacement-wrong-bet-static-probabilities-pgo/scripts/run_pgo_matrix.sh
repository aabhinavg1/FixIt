#!/usr/bin/env bash
# Build + quick perf for the MBP "wrong bet" follow-up (PGO × block placement matrix).
#
# Usage:
#   ./run_pgo_matrix.sh [clang-18] [N] [reps]
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SRC="$ROOT/source/machine_block_placement_csv_parse.c"
OUT="$ROOT/results/perf"
CLANG="${1:-clang-18}"
N="${2:-1048576}"
REPS="${3:-100}"
PROFDATA="${PROFDATA:-llvm-profdata-18}"

export LD_LIBRARY_PATH="${LD_LIBRARY_PATH:-/usr/lib/x86_64-linux-gnu:/lib/x86_64-linux-gnu}"

mkdir -p "$OUT" "$ROOT/results/pgo" "$ROOT/ir" "$ROOT/asm"

echo "Clang: $($CLANG --version | head -1)"
echo "N=$N reps=$REPS"

$CLANG -std=c11 -O1 -o "$OUT/parse.O1_c18" "$SRC"
$CLANG -std=c11 -O2 -o "$OUT/parse.O2_c18" "$SRC"
$CLANG -std=c11 -O2 -mllvm -disable-block-placement -o "$OUT/parse.O2np_c18" "$SRC"

rm -f "$ROOT/results/pgo/default.profraw" "$ROOT/results/pgo/default.profdata"
$CLANG -std=c11 -O2 -fprofile-generate="$ROOT/results/pgo" -o "$OUT/parse.gen" "$SRC"
LLVM_PROFILE_FILE="$ROOT/results/pgo/default.profraw" "$OUT/parse.gen" "$N" >/dev/null
$PROFDATA merge -output="$ROOT/results/pgo/default.profdata" "$ROOT/results/pgo/default.profraw"

$CLANG -std=c11 -O2 -fprofile-use="$ROOT/results/pgo/default.profdata" \
  -o "$OUT/parse.O2_pgo" "$SRC"
$CLANG -std=c11 -O2 -fprofile-use="$ROOT/results/pgo/default.profdata" \
  -mllvm -disable-block-placement -o "$OUT/parse.O2_pgo_np" "$SRC"

for b in parse.O1_c18 parse.O2_c18 parse.O2np_c18 parse.O2_pgo parse.O2_pgo_np; do
  "$OUT/$b" 1000
  "$OUT/$b" "$N"
  objdump -d "$OUT/$b" > "$ROOT/asm/${b%.c}.asm"
done

{
  echo "Compiler: $($CLANG --version | head -1)"
  echo "CPU: $(lscpu | awk -F: '/Model name/{print $2}' | xargs)"
  echo "N=$N reps=$REPS"
  echo
  for b in parse.O1_c18 parse.O2_c18 parse.O2np_c18 parse.O2_pgo parse.O2_pgo_np; do
    echo "=== $b ==="
    perf stat -r "$REPS" -e cycles,instructions,branch-misses -- "$OUT/$b" "$N"
    echo
  done
} > "$OUT/perf_matrix.txt" 2>&1

echo "Wrote $OUT/perf_matrix.txt"
