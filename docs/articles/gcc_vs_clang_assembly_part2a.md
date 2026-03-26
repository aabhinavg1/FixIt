---
title: "GCC vs Clang, Part 2A: Assembly Deep-Dive on 3 Key Benchmark Cases"
description: "Part 2A of the CompilerSutra GCC vs Clang benchmark series: assembly-level analysis of 2D stencil, branch-heavy loop, and small sort to explain the observed runtime gaps."
keywords:
  - gcc vs clang performance
  - gcc vs clang assembly analysis
  - compiler optimization comparison
  - gcc vs clang benchmark
  - assembly level performance analysis
  - llvm vs gcc backend comparison
  - compiler generated assembly comparison
  - stencil computation optimization assembly
  - branch prediction gcc vs clang
  - small sort optimization assembly
  - instruction level optimization compiler
  - gcc vs clang vectorization analysis
  - compilersutra gcc vs clang
    - gcc vs clang stencil benchmark assembly analysis
  - branch heavy loop optimization gcc vs clang
  - why clang faster than gcc in some cases
  - gcc vs clang real world performance difference
  - compiler optimization case study c++
  - assembly comparison gcc vs clang hot loops
  - instruction count comparison gcc vs clang
  - gcc vs clang instruction scheduling differences
  - register allocation gcc vs clang comparison
  - loop unrolling gcc vs clang assembly
  - cache behavior stencil computation compiler optimization
  - memory access pattern gcc vs clang
  - branch misprediction optimization gcc vs clang
  - redundant sign extension gcc assembly issue
  - compiler backend optimization differences llvm vs gcc
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AdBanner from '@site/src/components/AdBanner';

# GCC vs Clang, Part 2A: Assembly Deep-Dive on 3 Key Benchmark Cases

Part 1 reported the runtimes:

> [**GCC vs Clang: A 10-Case Compiler Benchmark Report (2026)**](/docs/articles/gcc_vs_clang_real_benchmarks_2026_reporter)

:::caution (Compiler versions and hardware details are documented in Part 1.)
:::

>>> New here? Start with the fundamentals:  
[How to Understand LLVM](https://compilersutra.com/docs/llvm/)

This section covers the emitted machine-code shape for the three largest deltas:

- GCC wins `2d_stencil` by `24.25%`
- Clang wins `branch_heavy_loop` by `21.34%`
- Clang wins `small_sort` by `9.61%`

The assembly was generated with:

```bash
g++ -O3 -S -masm=intel source.cpp -o out_gcc.s
clang++ -O3 -S -masm=intel source.cpp -o out_clang.s
```

Two incorrect explanations can be removed up front:

- The stencil hot loop is not vectorized at plain `-O3`.
- The branch-heavy loop is not converted to branchless code.

## Table of Contents

- [Assembly Files](#assembly-files)
- [Why Assembly Analysis Matters](#why-assembly-analysis-matters)
- [How to Read This Analysis](#how-to-read-this-analysis)
- [1. 2D Stencil Analysis](#1-2d-stencil-analysis)
- [2. Branch-Heavy Loop Analysis](#2-branch-heavy-loop-analysis)
- [3. Small Sort Analysis](#3-small-sort-analysis)
- [4. Summary Table](#4-summary-table)
- [5. What This Means for Real Systems](#5-what-this-means-for-real-systems)
- [6. Key Lines](#6-key-lines)
- [7. Conclusion](#7-conclusion)

## Assembly Files

| Case | GCC | Clang | Diff |
| --- | --- | --- | --- |
| 2D Stencil | <a href="/files/articles/gcc_vs_clang_cases/asm/stencil_2d_gcc.s" target="_blank">stencil_2d_gcc.s</a> | <a href="/files/articles/gcc_vs_clang_cases/asm/stencil_2d_clang.s" target="_blank">stencil_2d_clang.s</a> | <a href="https://www.diffchecker.com/yiQKWbV1/" target="_blank">left: GCC, right: Clang</a> |
| Branch-Heavy Loop | <a href="/files/articles/gcc_vs_clang_cases/asm/branch_threshold_gcc.s" target="_blank">branch_threshold_gcc.s</a> | <a href="/files/articles/gcc_vs_clang_cases/asm/branch_threshold_clang.s" target="_blank">branch_threshold_clang.s</a> | <a href="https://www.diffchecker.com/HQGBNmya/" target="_blank">left: GCC, right: Clang</a> |
| Small Sort | <a href="/files/articles/gcc_vs_clang_cases/asm/small_sort_gcc.s" target="_blank">small_sort_gcc.s</a> | <a href="/files/articles/gcc_vs_clang_cases/asm/small_sort_clang.s" target="_blank">small_sort_clang.s</a> | <a href="https://www.diffchecker.com/2LGk6tAf/" target="_blank">left: GCC, right: Clang</a> |

## Why Assembly Analysis Matters

The runtime table shows which binary ran faster. It does not show why.

Assembly is the last stage where compiler choices remain readable:

- instruction selection
- loop form
- branch layout
- address generation
- register width management

Assembly is the right level for comparison. IR is upstream of final backend decisions, while the linked binary is downstream and obscures them.

:::tip At this level, the relevant questions become concrete:
:::
- Did the hot loop vectorize?
- Did the backend remove branches or only rearrange them?
- Is the steady-state loop limited by arithmetic, addressing, or control flow?
- Did the compiler change the caller around the kernel rather than the kernel itself?

## How to Read This Analysis

Three checks are enough:

- [`movss/addss/mulss`](https://www.felixcloutier.com/x86/movss) means scalar `float` work in `xmm`.
- [`addps/mulps`](https://www.felixcloutier.com/x86/addps) or [`vaddps/vmulps`](https://www.uops.info/html-instr/VADDPS_YMM_YMM_YMM.html) would indicate packed SIMD.
- `cmp` plus `jcc` is still a real branch.

:::note Technical Note: AGU Pressure
On x86, memory instructions also consume address-generation resources. In a tight scalar loop, `base + index*scale + offset` patterns can create more AGU pressure than simple pointer increments. For background, see [Agner Fog, p.11](https://www.agner.org/optimize/microarchitecture.pdf).
:::

:::note Technical Note: CFG Shape
A branchy loop can outperform if-converted code when branch prediction is strong, especially if it avoids unnecessary width extensions and maintains a simpler CFG with fewer reconverging blocks. While LLVM documents the behavior of passes like SimplifyCFG and IfConversion, this performance trade-off emerges from their combined effects rather than a single explicitly stated rule. [LLVM Passes](https://llvm.org/docs/Passes.html).
:::

<div>
  <AdBanner />
</div>

---

## 1. 2D Stencil Analysis

Observed result: GCC faster by `24.25%`.

### Stencil Shape

```text
        up
         |
left -- center -- right
         |
        down
```

This is a 5-point stencil: one center value plus four neighbors.

### What the Assembly Shows

| Characteristic | GCC | Clang | Implication |
| --- | --- | --- | --- |
| Data path | Scalar SSE | Scalar SSE | No packed SIMD in the hot loop |
| Packed `addps` / `mulps` | No | No | No lane-level throughput advantage |
| Loop backedge | 1 branch | 1 branch | Control-flow count is not the difference |
| Addressing | Pointer walk | Scaled index | Address formation is the main structural delta |

### Hot Loop

<Tabs>
  <TabItem value="stencil-gcc" label="GCC">

```asm
.L7:
    movss   xmm0, DWORD PTR [rax]      ; load
    addss   xmm0, DWORD PTR 8[rax]     ; add right
    add     rax, 4                     ; next src
    add     rdx, 4                     ; next dst
    addss   xmm0, DWORD PTR -4096[rax] ; add up
    addss   xmm0, DWORD PTR 4096[rax]  ; add down
    movss   xmm2, DWORD PTR [rax]      ; load center
    mulss   xmm0, xmm4                 ; scale sum
    mulss   xmm2, xmm3                 ; scale center
    addss   xmm0, xmm2                 ; combine
    movss   DWORD PTR -4[rdx], xmm0    ; store
    cvtss2sd xmm0, xmm0                ; widen
    addsd   xmm1, xmm0                 ; accumulate
    cmp     rax, rcx                   ; check end
    jne     .L7                        ; loop
```

  </TabItem>
  <TabItem value="stencil-clang" label="Clang">

```asm
.LBB0_8:
    movss   xmm3, dword ptr [rax + 4*rsi - 8]  ; load via rsi
    addss   xmm3, dword ptr [rax + 4*rsi]      ; add right
    addss   xmm3, dword ptr [rax + 4*rsi - 4100] ; add up
    addss   xmm3, dword ptr [rax + 4*rsi + 4092] ; add down
    mulss   xmm3, xmm1                          ; scale sum
    movss   xmm4, dword ptr [rax + 4*rsi - 4]  ; load center
    mulss   xmm4, xmm2                          ; scale center
    addss   xmm4, xmm3                          ; combine
    movss   dword ptr [rdx + 4*rsi], xmm4      ; store via rsi
    xorps   xmm3, xmm3                          ; clear
    cvtss2sd xmm3, xmm4                         ; widen
    addsd   xmm0, xmm3                          ; accumulate
    inc     rsi                                 ; next i
    cmp     rsi, 2047                           ; check end
    jne     .LBB0_8                             ; loop
```

  </TabItem>
</Tabs>

The ±4096 offsets represent row strides (1024 floats × 4 bytes).

[stencils_complete_Diff](https://www.diffchecker.com/yiQKWbV1/)

### What This Rules Out

The loop is not vectorized in either compiler. `xmm` register use alone proves nothing; the `ss` suffix does. A packed loop would show `addps`, `mulps`, `vmovups`, or wider `ymm`/`zmm` traffic. None appear. For the compiler-side background, LLVM documents its loop vectorizer in [Auto-Vectorization in LLVM](https://llvm.org/docs/Vectorizers.html), and GCC documents its tree-SSA vectorizer in [Auto-vectorization in GCC](https://gcc.gnu.org/projects/tree-ssa/vectorization.html).

### Actual Difference

GCC uses pointer motion:

```asm
movss   xmm0, DWORD PTR [rax]          ; load
addss   xmm0, DWORD PTR 8[rax]         ; add right
add     rax, 4                         ; next src
add     rdx, 4                         ; next dst
addss   xmm0, DWORD PTR -4096[rax]     ; add up
addss   xmm0, DWORD PTR 4096[rax]      ; add down
movss   xmm2, DWORD PTR [rax]          ; load center
cmp     rax, rcx                       ; check end
jne     .L7                            ; loop
```

Clang keeps a canonical induction variable (`rsi`) and derives all addresses from it, instead of collapsing everything into a single pointer:

```asm
movss   xmm3, dword ptr [rax + 4*rsi - 8]      ; load via rsi
addss   xmm3, dword ptr [rax + 4*rsi]          ; add right
addss   xmm3, dword ptr [rax + 4*rsi - 4100]   ; add up
addss   xmm3, dword ptr [rax + 4*rsi + 4092]   ; add down
movss   xmm4, dword ptr [rax + 4*rsi - 4]      ; load center
movss   dword ptr [rdx + 4*rsi], xmm4          ; store via rsi
inc     rsi                                    ; next i
cmp     rsi, 2047                              ; check end
jne     .LBB0_8                                ; loop
```

The arithmetic is nearly identical. The steady-state loop body is not.

On recent x86 cores, this kind of stencil often shifts pressure onto the address-generation units when vectorization does not fire ([Agner Fog, p.11](https://www.agner.org/optimize/microarchitecture.pdf)). GCC leaves less address work in the loop. Clang preserves the scaled-index induction-variable form across every access, so AGU pressure is a plausible contributor here, not a proven sole bottleneck from assembly alone.

This also matches the measured behavior reported in [Part 1](/docs/articles/gcc_vs_clang_real_benchmarks_2026_reporter): GCC's stencil showed fewer uops and lower cycles per iteration, while Clang's stencil showed higher address-generation pressure. That aligns with what we see here in assembly: GCC reduces indexed addressing, while Clang keeps the scaled-index form alive.

The lack of vectorization suggests the cost model rejected it rather than a frontend limitation. LLVM documents that decision point in its [Loop Vectorizer](https://llvm.org/docs/Vectorizers.html), which uses a cost model to choose whether and how to vectorize. That decision is not directly observable from final assembly; the next article moves earlier in the pipeline to examine it from IR and loop transforms.

These differences originate in backend instruction selection and address-mode formation, after the higher-level loop and vectorization decisions described in [Part 1](/docs/articles/gcc_vs_clang_real_benchmarks_2026_reporter) and the compiler optimization docs above.

### Why This Difference Exists
GCC performs more aggressive induction-variable simplification, collapsing indexed addressing into a pointer recurrence through loop passes such as [`-fivopts`](https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html) and [`-ftree-loop-ivcanon`](https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html).

LLVM prefers to preserve canonical loop structure for downstream optimizations. This keeps induction variables in canonical form, simplifying analyses such as vectorization, alias analysis, and loop transformations, even when those optimizations do not ultimately apply. LLVM documents this design in its [Loop Terminology and Canonical Forms](https://llvm.org/docs/LoopTerminology.html) guide.

:::caution The tradeoff is clear: 
 preserve more structure for later optimization, or collapse more aggressively for immediate code shape.
:::
### Implication

GCC wins here without wider SIMD, extra unrolling, or explicit prefetch. The result comes from loop shape:

- less repeated address reconstruction
- pointer-based backedge
- comparable arithmetic with lower steady-state overhead

This is a backend code-shape win, not an ISA-width or vectorization win.

:::tip Key Takeaway
GCC wins the stencil because its scalar loop reduces address-generation work with pointer recurrence, while Clang keeps a more canonical indexed form alive.
:::

---

The next case keeps real branches in both compilers, so the main question shifts from addressing to reconvergence.

## 2. Branch-Heavy Loop Analysis

Observed result: Clang faster by `21.34%`.

[branch_heavy_loop](https://www.diffchecker.com/HQGBNmya/)

### What the Assembly Shows

| Metric | GCC | Clang | Implication |
| --- | --- | --- | --- |
| `cmov` in hot path | 0 | 0 | No branchless conversion |
| Conditional branches in decision path | 3 | 3 | Branch count alone does not explain the gap |
| Value widening | `movsx` then `cdqe` | `movsxd` once | Clang carries width more cleanly |
| CFG shape | More stitched blocks | Shared update block | Lower reconvergence overhead |

### CFG Sketch

```text
GCC:
  load -> test 19 -> test 69 -> transform -> stitched tail -> next iter

Clang:
  load -> test 19 / test 69 -> transform -> shared update block -> next iter
```

### Hot Decision Region

<Tabs>
  <TabItem value="branch-gcc" label="GCC">

```asm
.L9:
    movsx   rax, DWORD PTR [rdx]        ; load
    cmp     eax, 19                     ; x > 19?
    jg      .L23                        ; high path
    lea     eax, [rax+rax*2]            ; 3*x
    add     rdx, 4                      ; next
    cdqe                                ; widen 32->64
    add     rsi, rax                    ; sum +=
    cmp     rdx, rbx                    ; check end
    jne     .L9                         ; loop

.L23:
    cmp     eax, 69                     ; x <= 69?
    jle     .L7                         ; mid path
    sub     rsi, rax                    ; sum -= x

.L8:
    add     rdx, 4                      ; next
    cmp     rdx, rbx                    ; check end
    je      .L22                        ; exit

.L7:
    lea     eax, -7[rax+rax]            ; 2*x-7
    cdqe                                ; widen 32->64
    add     rsi, rax                    ; sum +=
    jmp     .L8                         ; rejoin
```

  </TabItem>
  <TabItem value="branch-clang" label="Clang">

```asm
.LBB0_8:
    movsxd  rdx, dword ptr [rbx + rcx]  ; load
    cmp     rdx, 19                     ; x <= 19?
    jle     .LBB0_5                     ; low path

    mov     edi, edx                    ; keep x
    cmp     edi, 69                     ; x > 69?
    ja      .LBB0_11                    ; high path

    lea     edx, [2*rdx - 7]            ; 2*x-7
    jmp     .LBB0_6                     ; rejoin

.LBB0_5:
    lea     rdx, [rdx + 2*rdx]          ; 3*x

.LBB0_6:
    add     rsi, rdx                    ; sum +=
    add     rcx, 4                      ; next
    cmp     rcx, 4194304                ; check end
    je      .LBB0_3                     ; exit

.LBB0_11:
    sub     rsi, rdi                    ; sum -= x
    add     rcx, 4                      ; next
    cmp     rcx, 4194304                ; check end
    jne     .LBB0_8                     ; loop
```

  </TabItem>
</Tabs>

### What This Rules Out

This is not a `cmov` story. It is not branch elimination. Both loops stay branchy.

### Actual Difference

Clang computes the transformed value and rejoins through a single update block:

```asm
.LBB0_6:
    add     rsi, rdx                    ; sum +=
    add     rcx, 4                      ; next
    cmp     rcx, 4194304                ; check end
    je      .LBB0_3                     ; exit
```

GCC introduces additional path stitching and a width transition:

```asm
movsx   rax, DWORD PTR [rdx]            ; load
cmp     eax, 19                         ; x > 19?
jg      .L23                            ; high path
lea     eax, [rax+rax*2]                ; 3*x
add     rdx, 4                          ; next
cdqe                                    ; widen 32->64
add     rsi, rax                        ; sum +=
jmp     .L8                             ; rejoin
```

The per-iteration difference is small but accumulates at benchmark scale.

Under the [System V AMD64 ABI](https://refspecs.linuxbase.org/elf/x86_64-abi-0.99.pdf), integer return values are classified in the INTEGER class and returned in `%rax`. 

GCC’s use of `rax` is expected; the additional `cdqe` reflects backend width normalization rather than any ABI requirement. GCC’s extra `cdqe` is redundant fixup work in this path: the value was already sign-extended by `movsx`, but the later 32-bit arithmetic forces another widen before the 64-bit accumulate. A common backend pattern here is incomplete if-conversion followed by suboptimal reconvergence. Clang also does not if-convert, but produces a cleaner CFG.

### Implication

Clang wins by producing a cleaner execution path:

- one widened live value carried through more of the path
- fewer path-specific fixups
- cleaner reconvergence before the next iteration

Branch prediction still matters, but it is not sufficient to hide control-flow and width-handling differences.

:::tip Key Takeaway
Clang wins the branch-heavy loop because the transformed values rejoin through a cleaner shared update block, with less width-fixup work on the hot path.
:::


---

The final case is different again: the interesting gap is not in the inner primitive, but in the caller around already-optimized helpers.

## 3. Small Sort Analysis

Observed result: Clang faster by `9.61%`.

[small sort complete diff](https://www.diffchecker.com/2LGk6tAf/)

### What the Assembly Shows

| Metric | GCC | Clang | Implication |
| --- | --- | --- | --- |
| Comparator calls in hot region | None visible | None visible | Not an inlining failure |
| Large-range strategy | Introsort-style | Introsort-style | Same algorithm family |
| Small-range cleanup | Insertion-style cleanup visible | Final insertion helper visible | Same broad cutoff strategy |
| Most obvious top-level delta | Explicit repeat loop in `main` | Repeated helper-call layout | Caller orchestration differs |

### Caller Orchestration

### Structure Sketch

```text
GCC:
  repeat loop in main
    -> introsort helper
    -> insertion-style local work
    -> repeat again

Clang:
  helper sequence laid out directly
    -> introsort
    -> final insertion sort
    -> rotate
    -> next repeated sequence
```

<Tabs>
  <TabItem value="sort-gcc" label="GCC">

```asm
.L72:
    mov     edx, 36                     ; depth
    mov     rsi, r13                    ; end
    mov     rdi, r15                    ; begin
    call    _ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_.isra.0 ; introsort
    mov     rbx, QWORD PTR 16[rsp]      ; reload ptr
    jmp     .L67                        ; next phase

.L67:
    mov     r12d, DWORD PTR [rbx]       ; load x
    mov     eax, DWORD PTR [r15]        ; load first
    mov     rsi, rbx                    ; pos
    cmp     r12d, eax                   ; x < first?
    jb      .L89                        ; insert front
    mov     edx, DWORD PTR -4[rbx]      ; load prev
    lea     rax, -4[rbx]                ; prev ptr
    cmp     r12d, edx                   ; x < prev?
    jnb     .L65                        ; no shift
```

  </TabItem>
  <TabItem value="sort-clang" label="Clang">

```asm
    lea     r15, [r12 + 1048576]        ; end
    mov     edx, 36                     ; depth
    mov     rdi, rbx                    ; begin
    mov     rsi, r15                    ; end
    call    _ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEElNS0_5__ops15_Iter_less_iterEEvT_S9_T0_T1_ ; introsort
    mov     rdi, rbx                    ; begin
    mov     rsi, r15                    ; end
    call    _ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEENS0_5__ops15_Iter_less_iterEEvT_S9_T0_ ; cleanup
    mov     rdi, rbx                    ; begin
    mov     rsi, r12                    ; middle
    mov     rdx, r15                    ; end
    call    _ZNSt3_V28__rotateIN9__gnu_cxx17__normal_iteratorIPjSt6vectorIjSaIjEEEEEET_S8_S8_S8_St26random_access_iterator_tag ; rotate
```

  </TabItem>
</Tabs>

### What This Rules Out

The comparator is already inlined into helper logic in both outputs. The benchmark is not exposing call overhead from a missing comparator inline.

The call setup also matches the [System V AMD64 ABI](https://refspecs.linuxbase.org/elf/x86_64-abi-0.99.pdf): the first integer arguments are passed in `rdi`, `rsi`, and `rdx`. 
This explains why the caller difference appears as register moves and call sequencing, not stack-based argument traffic.

### Actual Difference

Both compilers are in the same library-algorithm family:

- introsort-style partitioning for larger ranges
- insertion-style cleanup at small sizes

Clang makes the cutoff explicit in element count:

```asm
cmp     rbp, 17                         ; elems < 17?
jl      .LBB1_38                        ; small case
```

GCC expresses a similar threshold in bytes:

```asm
sub     rax, rdi                        ; bytes
cmp     rax, 64                         ; bytes <= 64?
jle     .L52                            ; small case
```

For `uint32_t`, `64` bytes is `16` elements. 
This is the same threshold expressed in different units, not a different algorithm.

The visible difference is in the surrounding caller orchestration, not in the comparison or partition logic:
- `GCC` retains an explicit outer repeat loop in main
- `Clang` lays out the repeated helper sequence more directly

This changes branch structure and call sequencing at the caller level. For a benchmark that repeats the same sort/rotate sequence eight times, that outer structure matters.

Library sort helpers are often already near a local optimum. When differences remain, they often come from caller orchestration rather than the partition primitive.

### Implication

Clang wins this case through cheaper caller orchestration:
- same broad sort strategy
- no comparator-call penalty difference
- different orchestration around repeated helper invocations

This is a structural effect in `main`, not evidence of a different sorting algorithm.

:::tip Key Takeaway
Clang wins small sort because the caller lays out the repeated helper sequence more efficiently, not because it chose a different sort algorithm.
:::

---

## 4. Summary Table

| Metric | 2D Stencil | Branch-Heavy | Small Sort |
| --- | --- | --- | --- |
| Primary rejected explanation | Wider SIMD | Branchless conversion | Missing comparator inline |
| GCC hot-path shape | Scalar pointer-walk loop | Branchy path with extra width fixup | Explicit repeat caller |
| Clang hot-path shape | Scalar indexed loop | Branchy path with shared update block | Laid-out helper sequence |
| Main deciding factor | Address generation | CFG reconvergence and width handling | Caller orchestration |

---

## 5. What This Means for Real Systems

- A large runtime delta does not imply a vectorization delta.
- A branch-heavy win does not imply if-conversion or `cmov`.
- In scalar kernels, address generation can dominate the visible compiler difference ([Agner Fog, p.11](https://www.agner.org/optimize/microarchitecture.pdf)). ([Agner Fog, p.45](https://www.agner.org/optimize/microarchitecture.pdf))
- CFG shape matters after branch count has been accounted for.
- Repeated-library benchmarks can be decided by caller structure rather than the library helper itself.

Inspection order for a surprising result:

1. Confirm whether the hot loop actually vectorized.
2. Check whether the hot path stayed branchy.
3. Compare address formation, not only arithmetic instructions.
4. Inspect reconvergence blocks and width-fixup instructions.
5. Inspect the caller and outer driver, not only the deepest helper.

## 6. Key Lines

- The stencil result is a scalar-loop result, not a SIMD result.
- The branch-heavy result is a CFG-layout result, not a branchless-code result.
- The sort result is a caller-orchestration result, not a comparator-inline result.

## 7. Practical Fix

The most actionable result in this article is the stencil case: Clang keeps indexed induction-variable form alive longer, while GCC collapses the inner loop into a cheaper pointer recurrence.

If you want to nudge Clang toward the cheaper shape, the practical source-level fix is to materialize row pointers once and compute the stencil from them:

```cpp
const float* row = in + y * stride, *row_above = row - stride, *row_below = row + stride; float* out_row = out + y * stride;
```

That is not a guaranteed one-line magic fix for every Clang version or target, but it gives the optimizer a representation closer to GCC’s pointer-walk loop:

- one base pointer per row
- fewer repeated scaled-index expressions in the hot loop
- a better chance of lowering toward simple pointer increments

The next step is empirical: compile this version, inspect the inner loop again, and check whether Clang now reduces the indexed addressing work.

## 8. Conclusion

The three benchmark deltas come from three different backend effects.

GCC wins the stencil because the scalar loop is cheaper to sustain. Clang wins the branch-heavy loop because the branchy CFG reconverges more cleanly. Clang wins the small-sort case because the caller around the sort helpers is laid out more efficiently.

The common failure mode in compiler write-ups is overfitting to one explanation: `SIMD width`, `branchlessness`, or `inlining`.

None of those explain these results. The assembly points to narrower causes:

- address generation in a scalar memory kernel
- width handling and reconvergence in a branchy loop
- caller orchestration around already-optimized helpers

The stencil case also gives the clearest source-level experiment: rewrite the kernel around row pointers and see whether Clang collapses toward the pointer-recurrence shape that GCC already found.

In the next article, we will start with the stencil case, move one stage earlier in the pipeline, and trace which compiler decisions produced this loop shape.

## 9. FAQ

### Is the stencil result a SIMD story?

No. Both compilers stay in scalar SSE in the hot loop. The visible gap comes from loop shape and address formation, not wider vector instructions.

### Is AGU pressure proven here?

No. Assembly alone shows that Clang keeps more indexed address expressions alive. That makes AGU pressure a plausible source of slowdown, but proving it would require supporting hardware-counter evidence.

### Why is GCC's `cdqe` interesting in the branch-heavy loop?

Because it is extra width-fixup work on the hot path. GCC loads with `movsx`, then later widens again with `cdqe` before the 64-bit accumulate, while Clang keeps the widened value cleaner.

### Is the small-sort gap about a different sorting algorithm?

No. Both sides stay in the same broad algorithm family. The visible difference is in caller orchestration around repeated helper calls.

### Can source code help Clang in the stencil case?

Sometimes, yes. Materializing row pointers once per loop nest gives Clang a representation closer to GCC's pointer-walk loop and may reduce repeated indexed addressing in the hot path.
