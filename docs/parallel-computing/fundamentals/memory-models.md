---
title: Memory Models in Parallel Computing
description: Learn about shared memory (UMA, NUMA), distributed memory, cache coherence (MESI protocol), false sharing, and why memory architecture decides how fast your parallel code runs.
keywords:
  - memory models
  - shared memory
  - distributed memory
  - UMA NUMA
  - cache coherence
  - MESI protocol
  - false sharing
  - memory consistency
  - cache line
  - parallel memory
  - memory hierarchy
  - non uniform memory access
---

# Memory Models in Parallel Computing

The word "memory" means different things depending on how parallel processors are connected. The memory model determines **how data flows between workers**, which is the single biggest factor in parallel performance. Two programs with identical logic can differ 10× in speed purely because of how their memory behaves.

There are two fundamental models:

- **Shared memory** — all workers see the same memory (threads, multicore, multi-socket).
- **Distributed memory** — each worker has private memory; data must be sent explicitly (clusters, MPI).

Real systems are almost always a **hybrid** of both.

## Shared Memory

In the shared-memory model, all processing units access a common address space. A thread writing to a variable is immediately (eventually) visible to other threads. This is the model used by OpenMP, C++ threads, and TBB on a single machine.

The main problems of shared memory:

1. **Race conditions** — two threads write the same location without coordination.
2. **Cache coherence** — making sure every core sees the same value of a variable.
3. **Non-uniform access (NUMA)** — not all memory is equally far away.
4. **False sharing** — threads accidentally competing on the same cache line.

### Uniform Memory Access (UMA)

In **UMA**, every processor has equal access time to every memory location. Historically, one memory controller served all cores through a shared bus. It is *uniform* in time but **does not scale**: the bus or controller becomes a bottleneck as cores multiply.

```
      ┌──────── Memory ────────┐
      ▲   ▲   ▲   ▲   ▲   ▲
      P0  P1  P2  P3  P4  P5    ← all cores, equal distance
          (UMA: bus/controller shared)
```

### Non-Uniform Memory Access (NUMA)

Modern multi-socket servers use **NUMA**: memory is physically attached to each socket (a "NUMA node"), and a core accessing its *own* socket's memory is faster than accessing a *remote* socket's memory. Access time is therefore *non-uniform*.

```
Socket 0                    Socket 1
┌─────────────┐             ┌─────────────┐
│ cores 0-7   │◄───────┐    │ cores 8-15  │
│ mem local   │        │    │ mem local   │
└─────────────┘        │    └─────────────┘
      ▲ fast           │          ▲ fast
      └──── slow link (QPI/UPI) ──┘
```

**Practical NUMA advice:**

- **First-touch policy** — pages are placed on the NUMA node of whichever thread first touches them. The thread that initializes data should be the one that uses it.
- **Pin threads to sockets** with affinity so they stay near their data.
- **Remote access is 1.5–3× slower** than local access on typical servers.

```bash
# Check NUMA topology
numactl --hardware

# Run a program pinned to node 0
numactl --cpunodebind=0 --membind=0 ./myapp
```

## Cache Coherence (MESI)

Each core has its own private L1/L2 caches. If core 0 reads `x = 5` into its cache and core 1 reads it too, both have copies. Now core 0 writes `x = 6` — core 1's copy is **stale**. **Cache coherence** protocols guarantee that all cores eventually observe a consistent value.

The classic protocol is **MESI**, named after its four cache-line states:

| State | Meaning | Notes |
|-------|---------|-------|
| **M** (Modified) | This cache holds the only valid copy, and it differs from memory | Must be written back before others read it |
| **E** (Exclusive) | This cache holds the only copy; memory is up to date | Shared copy exists nowhere else |
| **S** (Shared) | This cache holds a copy; other caches may too; memory is up to date | Read-only |
| **I** (Invalid) | This copy is out of date / not present | Must re-fetch on access |

When a core writes to a shared cache line, the protocol **invalidates** all other copies (an "invalidating write"). Those cores will re-fetch the line from the owner next time they read it — paying a latency penalty.

```
Core 0:  M(x=6)          ← Core 0 wrote x; owns the line
Core 1:  I(x=?)          ← Core 0 invalidated Core 1's copy
         ▼ (Core 1 reads x)
Core 1:  S(x=6)  ← gets up-to-date value from Core 0 (memory)
```

Coherence works at the granularity of a **cache line** (typically 64 bytes on x86, 128 on some ARM). This fact causes the next problem.

## False Sharing

**False sharing** happens when two threads *frequently write* different variables that happen to live on the **same cache line**. The cache protocol cannot distinguish them — it treats the whole 64-byte line as one unit. So every write by thread A invalidates the line that thread B is also writing, forcing constant bouncing of the cache line between cores. Performance collapses.

```cpp
struct Shared {
  int a;   // written by thread 1
  int b;   // written by thread 2  ← same 64-byte cache line!
};

// Result: a and b ping-pong between cores → false sharing
```

The fix is to **pad** the struct so each hot variable occupies its own cache line (or use compiler attributes like `alignas(64)`), or better, keep per-thread data in per-thread memory.

```cpp
// Fix: align each field to its own cache line
struct alignas(64) Shared {
  int a;         // cache line 0
  int b;         // cache line 1  ← no longer shared
};
```

:::tip
False sharing is invisible in logic — the code is perfectly correct — but it can destroy scalability. The symptom is a parallel loop that does not speed up (or slows down) as cores are added. Detect it with profilers (perf, VTune, `perf stat -e cache-misses`) that flag cache-line contention.
:::

## Distributed Memory

In the **distributed-memory** model, each processor (or node) has its **own private memory**. No processor can touch another's memory directly. Data must be moved with explicit messages: **MPI** (`MPI_Send`/`MPI_Recv`), network protocols, or files.

```
Node 0            Node 1            Node 2
┌─────────┐  msg  ┌─────────┐  msg  ┌─────────┐
│ CPU+mem │◄─────►│ CPU+mem │◄─────►│ CPU+mem │
└─────────┘       └─────────┘       └─────────┘
```

Advantages:

- **Scales to thousands of nodes** — no shared bus or coherence traffic.
- **Fault isolation** — a node's memory is independent.

Costs:

- **Explicit communication** — every data exchange is a programmer-visible message.
- **Latency** — network round trips (microseconds) are far slower than cache-to-cache transfers (nanoseconds).
- **No natural shared structures** — global variables, locks, and shared pointers do not exist across nodes without special machinery.

This is why the biggest HPC machines are programmed with a **hybrid** approach: MPI between nodes (distributed memory) and OpenMP/threads within a node (shared memory). This pattern is covered in the [Hybrid MPI+OpenMP](/docs/parallel-computing/cpu-distributed-memory/hybrid-mpi-openmp) article.

## Memory Consistency vs Coherence

Two related but distinct concepts:

- **Cache coherence** — ensures writes to the *same location* are eventually seen in a consistent order.
- **Memory consistency** (the *memory model* in the programming-language sense) — defines how reads and writes to *different* locations appear to be ordered across threads.

Even with perfect cache coherence, a compiler or CPU may **reorder** independent operations. This is why C++ and OpenMP provide atomic operations and memory fences. Without them, a thread may observe writes in a different order than the source code suggests.

```cpp
// Without proper synchronization, thread 2 might see x==1 but y==0,
// or even x==0, because of reordering — this is the consistency model.
// The C++ memory model (std::atomic, acquire/release) controls this.
std::atomic<bool> x{false}, y{false};
```

The **C++ memory model** (from C++11 onward) gives you ordering guarantees via `std::atomic` with `memory_order` values: `relaxed`, `acquire`, `release`, `acq_rel`, and `seq_cst`. Choosing the right order is a trade-off between correctness and performance (see the C++ concurrency articles in this site's C++ section).

## How Memory Latencies Compare

A rough feel for the cost of each layer (numbers vary by hardware):

| Access | Approx. latency | Relative |
|--------|-----------------|----------|
| Register | ~0.3 ns | 1× |
| L1 cache | ~1 ns | 3× |
| L2 cache | ~4 ns | 12× |
| L3 cache | ~15–40 ns | 50–100× |
| Main memory (local NUMA) | ~100 ns | 300× |
| Remote NUMA | ~200–300 ns | 700–1000× |
| Network (MPI on a cluster) | ~1–10 µs | 3000–30000× |

These numbers explain the two golden rules of parallel programming:

1. **Keep data close to the worker that uses it** (locality beats speed).
2. **Communicate in bulk, not in trickles** (amortize latency over large messages or large cache-friendly blocks).

## Summary

- **Shared memory** (UMA/NUMA) is fast and easy to program but suffers coherence traffic, NUMA effects, and false sharing.
- **Distributed memory** scales to huge machines but requires explicit messages (MPI).
- **MESI** keeps per-core caches coherent at the granularity of 64-byte cache lines.
- **False sharing** silently ruins scalability when threads write different variables on the same line.
- Real HPC uses **hybrid** models: MPI across nodes + shared-memory threading inside each node.

### What's Next

- [Parallel Hardware Overview](/docs/parallel-computing/fundamentals/parallel-hardware-overview) — the concrete hierarchy of cores, caches, and vector units.
- [Amdahl's Law and Gustafson's Law](/docs/parallel-computing/fundamentals/amdahls-and-gustafsons-law) — the theoretical limits of what this hardware can deliver.
