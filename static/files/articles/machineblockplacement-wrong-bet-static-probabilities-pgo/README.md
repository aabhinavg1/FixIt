# MachineBlockPlacement “wrong bet” follow-up (artifacts)

Companion bundle for **Why MachineBlockPlacement Made the Wrong Bet: Static Probabilities, Fall-Through, and PGO**.

## Quick links

| File | What |
|------|------|
| [source/machine_block_placement_csv_parse.c](source/machine_block_placement_csv_parse.c) | Same testcase as [part 1](../when-o2-layout-hurts-machineblockplacement/source/machine_block_placement_csv_parse.c) |
| [highlights.json](highlights.json) | PGO matrix medians + switch weight counts |
| [ir/parse.O2.ll](ir/parse.O2.ll) | Clang 18 `-O2` IR — switch **without** `branch_weights` |
| [ir/parse.O2_pgo.ll](ir/parse.O2_pgo.ll) | Clang 18 `-O2 -fprofile-use` — switch **with** `!prof !59` |
| [asm/parse.O2_c18.asm](asm/parse.O2_c18.asm) | Bad layout: backward `je` to shared increment |
| [asm/parse.O2_pgo.asm](asm/parse.O2_pgo.asm) | PGO layout: forward `je` + fall-through increment |
| [results/perf/revalidate_summary.json](results/perf/revalidate_summary.json) | Fresh perf n=100 (2026-08-28) |
| [scripts/run_pgo_matrix.sh](scripts/run_pgo_matrix.sh) | Build + profile + n=100 perf |
| [scripts/revalidate.sh](scripts/revalidate.sh) | Re-run all checks from part 1 source |

## Headline (Clang 18.1.3, Zen 5, N=1048576, n=100, revalidated 2026-08-28)

| Build | Time | Branch misses | vs `-O1` misses |
|-------|-----:|--------------:|----------------:|
| `-O1` | 64.0 ms | 0.654M | 1.00× |
| `-O2` | 69.3 ms | 1.724M | **2.64×** |
| `-O2` + no MBP | 63.7 ms | 0.654M | 1.00× |
| `-O2` + PGO | 63.3 ms | 0.653M | 1.00× |
| `-O2` + PGO + no MBP | 63.7 ms | 0.654M | 1.00× |

PGO restores **miss counts and time**. Current stage1 tip (`b7dc8e35…`) does **not** reproduce the bad `-O2` layout on this machine; part 1 bundled numbers used stage1 **`196786fa…`**.

## Revalidate

```bash
chmod +x scripts/revalidate.sh scripts/run_pgo_matrix.sh
./scripts/revalidate.sh /tmp/mbb_revalidate
```

## PGO switch weights (from `ir/parse.O2_pgo.ll`)

On the separator `switch i8`, LLVM records:

```text
branch_weights: default=0, comma=2097152, newline=1048576
```

That is **66.7% comma / 33.3% newline** — exactly the `a,b,c\n` line shape (two commas and one newline per line, three fields).

## Reproduce

```bash
chmod +x scripts/run_pgo_matrix.sh
./scripts/run_pgo_matrix.sh clang-18 1048576 100
```

Part 1 regression data (Clang 24 stage1, same testcase): [when-o2-layout-hurts-machineblockplacement](../when-o2-layout-hurts-machineblockplacement/).
