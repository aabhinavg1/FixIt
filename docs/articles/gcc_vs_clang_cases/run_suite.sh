#!/usr/bin/env bash
set -euo pipefail

ROOT="/home/aitr/compilersutra/FixIt_Compilersutra/docs/articles/gcc_vs_clang_cases"
TOOL="/home/aitr/projects/CompilerSutraPerfTool"
OUT_DIR="$ROOT/results"
BUILD_DIR="/tmp/csperf-gcc-vs-clang-cases"

mkdir -p "$OUT_DIR"

cases=(
  branch_threshold
  stride_access
  rolling_hash
  row_sum
  column_sum
  small_sort
  prefix_sum
  bit_mix
  indirect_index
  stencil_2d
)

for compiler in clang++ g++; do
  if [[ "$compiler" == "clang++" ]]; then
    prefix="clang"
  else
    prefix="gcc"
  fi

  for name in "${cases[@]}"; do
    echo "running $prefix $name"
    (
      cd "$TOOL"
      CXX_COMPILER="$compiler" PYTHONPATH=src python3 -m csperf.cli run \
        --input "$ROOT/$name.cpp" \
        --backend cpu \
        --cpu-affinity 0 \
        --warmup-runs 1 \
        --repeat-runs 5 \
        --build-dir "$BUILD_DIR" \
        --output "$OUT_DIR/$prefix-$name.json"
    )
  done
done
