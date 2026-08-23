#!/usr/bin/env bash
# Build + correctness + optional perf for machine_block_placement_csv_parse.c
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
SRC="$DIR/machine_block_placement_csv_parse.c"
OUT="${OUT_DIR:-$DIR/build}"
CLANG="${CLANG:-clang}"
N="${1:-1048576}"
REPS="${REPS:-1}"
export LD_LIBRARY_PATH="${LD_LIBRARY_PATH:-/usr/lib/x86_64-linux-gnu:/lib/x86_64-linux-gnu}"

mkdir -p "$OUT"
$CLANG -std=c11 -O1 -o "$OUT/parse.O1" "$SRC"
$CLANG -std=c11 -O2 -o "$OUT/parse.O2" "$SRC"
$CLANG -std=c11 -O2 -mllvm -disable-block-placement -o "$OUT/parse.O2np" "$SRC"

echo "== correctness =="
for bin in parse.O1 parse.O2 parse.O2np; do
  "$OUT/$bin" 1000
  "$OUT/$bin" "$N"
done

PERF="$(command -v perf || true)"
if [[ -x /usr/lib/linux-tools/$(uname -r)/perf ]]; then
  PERF=/usr/lib/linux-tools/$(uname -r)/perf
fi
if [[ -z "${PERF:-}" || ! -x "$PERF" ]]; then
  echo "perf not found; skipping counters"
  exit 0
fi

echo "== perf (reps=$REPS, N=$N) =="
EVENTS=cycles,instructions,branches,branch-misses
for bin in parse.O1 parse.O2 parse.O2np; do
  echo "--- $bin ---"
  for ((r = 1; r <= REPS; r++)); do
    "$PERF" stat -e "$EVENTS" -- "$OUT/$bin" "$N" >/dev/null
  done
done
