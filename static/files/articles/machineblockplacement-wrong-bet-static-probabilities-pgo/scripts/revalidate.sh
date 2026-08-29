#!/usr/bin/env bash
# Revalidate part-2 claims from the part-1 testcase source.
# Usage: ./revalidate.sh [workdir]
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/../when-o2-layout-hurts-machineblockplacement/source/machine_block_placement_csv_parse.c"
WORKDIR="${1:-/tmp/mbb_revalidate}"
STAGE1="${STAGE1:-/home/aitr/osc/llvm-project/build-stage1/bin/clang}"
N=1048576
REPS=100
export LD_LIBRARY_PATH=/usr/lib/x86_64-linux-gnu:/lib/x86_64-linux-gnu

mkdir -p "$WORKDIR"/{stage1,c18,pgo,ir,asm}

build_triple() {
  local cc=$1 dir=$2
  "$cc" -std=c11 -O1 "$SRC" -o "$dir/parse.O1"
  "$cc" -std=c11 -O2 "$SRC" -o "$dir/parse.O2"
  "$cc" -std=c11 -O2 -mllvm -disable-block-placement "$SRC" -o "$dir/parse.O2np"
}

echo "Source: $SRC"
echo "Stage1: $($STAGE1 --version | head -1)"
echo "Clang18: $(clang-18 --version | head -1)"

build_triple "$STAGE1" "$WORKDIR/stage1"
build_triple clang-18 "$WORKDIR/c18"

for d in stage1 c18; do
  for b in parse.O1 parse.O2 parse.O2np; do
    "$WORKDIR/$d/$b" "$N" | grep -q PASS
  done
done

clang-18 -std=c11 -O2 -fprofile-generate="$WORKDIR/pgo" -o "$WORKDIR/pgo/parse.gen" "$SRC"
LLVM_PROFILE_FILE="$WORKDIR/pgo/default.profraw" "$WORKDIR/pgo/parse.gen" "$N" >/dev/null
llvm-profdata-18 merge -output="$WORKDIR/pgo/default.profdata" "$WORKDIR/pgo/default.profraw"
clang-18 -std=c11 -O2 -fprofile-use="$WORKDIR/pgo/default.profdata" -o "$WORKDIR/c18/parse.O2_pgo" "$SRC"
clang-18 -std=c11 -O2 -fprofile-use="$WORKDIR/pgo/default.profdata" -mllvm -disable-block-placement \
  -o "$WORKDIR/c18/parse.O2_pgo_np" "$SRC"

python3 - "$WORKDIR" "$N" "$REPS" <<'PY'
import json, re, subprocess, sys, os
WORKDIR, N, REPS = sys.argv[1], sys.argv[2], int(sys.argv[3])
env = {**os.environ, 'LD_LIBRARY_PATH': '/usr/lib/x86_64-linux-gnu:/lib/x86_64-linux-gnu'}

def perf_run(path):
    p = subprocess.run(['perf','stat','-r',str(REPS),'-e','cycles,instructions,branch-misses','--',path,N],
                       capture_output=True, text=True, env=env, check=True)
    txt = p.stdout + p.stderr
    time_s = float(re.search(r'([\d.]+)\s+\+-.*seconds time elapsed', txt).group(1))
    instructions = int(re.search(r'([\d,]+)\s+instructions', txt).group(1).replace(',',''))
    branch_misses = int(re.search(r'([\d,]+)\s+branch-misses', txt).group(1).replace(',',''))
    cycles = int(re.search(r'([\d,]+)\s+cycles', txt).group(1).replace(',',''))
    return {'time_ms': round(time_s*1000,3), 'branch_misses': branch_misses,
            'instructions': instructions, 'ipc': round(instructions/cycles,4)}

groups = {
  'stage1_b7dc8e35': ['stage1/parse.O1','stage1/parse.O2','stage1/parse.O2np'],
  'clang18_18.1.3': ['c18/parse.O1','c18/parse.O2','c18/parse.O2np','c18/parse.O2_pgo','c18/parse.O2_pgo_np'],
}
out = {'N': int(N), 'reps': REPS, 'results': {}}
for g, paths in groups.items():
    out['results'][g] = {}
    for path in paths:
        name = os.path.basename(path).replace('parse.','')
        out['results'][g][name] = perf_run(os.path.join(WORKDIR, path))
    o1 = out['results'][g]['O1']
    for k,v in list(out['results'][g].items()):
        if k == 'O1': continue
        v['br_miss_ratio_vs_O1'] = round(v['branch_misses']/o1['branch_misses'], 3)
        v['time_pct_vs_O1'] = round((v['time_ms']/o1['time_ms']-1)*100, 3)
print(json.dumps(out, indent=2))
open(os.path.join(WORKDIR,'revalidate_summary.json'),'w').write(json.dumps(out, indent=2))
PY

echo "Wrote $WORKDIR/revalidate_summary.json"
