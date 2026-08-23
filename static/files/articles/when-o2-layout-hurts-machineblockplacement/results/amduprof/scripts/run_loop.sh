#!/usr/bin/env bash
set -euo pipefail
BIN=$1; N=${2:-1048576}; REPS=${3:-40}
for ((i=1;i<=REPS;i++)); do "$BIN" "$N" >/dev/null; done
