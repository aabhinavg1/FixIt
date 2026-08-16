---
title: "Rust Claims, a Reality Check: Safety, Tools, and Systems Programming"
description: "Rust's safety guarantees are real, but they stop at unsafe, FFI, compiler bugs, and the OS. Compiler logs and a practical checklist."
keywords:
  - Rust memory safety
  - Rust safety guarantees
  - Rust borrow checker
  - Rust ownership
  - Rust compiler
  - rustc
  - Rust compiler bugs
  - Rust soundness
  - Rust unsoundness
  - Rust unsafe code
  - Rust unsafe
  - Rust FFI
  - Rust memory bugs
  - Rust use after free
  - Rust buffer overflow
  - Rust data races
  - Rust lifetime
  - Rust lifetimes
  - Rust ownership system
  - Rust borrowing
  - Rust type system
  - Rust compiler soundness
  - rustc soundness
  - rustc bug
  - Rust compiler bug
  - Rust security
  - Rust systems programming
  - Rust systems programming language
  - Rust compile time safety
  - Rust compile time checks
  - Rust runtime safety
  - Rust memory-safe language
  - Rust safety limitations
  - Rust unsafe FFI
  - Rust lending iterator
  - Rust iterator safety
  - Rust compiler verification
  - Rust static analysis
  - Rust safety tools
  - Rust sanitizers
  - Rust Miri
  - Rust Clippy
  - Rust fuzzing
  - Rust compiler fuzzing
  - Rust bug discovery
  - Rust soundness bugs
  - ISSTA 2026
  - Rust ISSTA 2026
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Head from '@docusaurus/Head';

<Head>
  <meta name="description" content="Rust's safety guarantees are real, but they stop at unsafe, FFI, compiler bugs, and the OS. Compiler logs and a practical checklist." />
</Head>

# Rust Claims, a Reality Check: What rustc Proves, and Where the Proof Stops

:::tip In short
Safe Rust rejects use-after-free, constant out-of-bounds, and data races at compile time. Runtime out-of-bounds **panics by default** (`debug` and `--release`), unless LLVM can *prove* the index is in range — that elision does not weaken the rule. C and C++ need sanitizers or wrappers (`v.at(i)`; C++26 `span::at`; GSL) for the same class of bug; those are opt-in. `unsafe`, FFI, rustc/LLVM bugs, and logic errors sit outside that bubble.
:::

:::note
Related: [Rust vs Modern C++](/docs/articles/rust-vs-modern-cpp-memory-safety-beyond-the-hype) · [How rustc compiles vs C++](/docs/articles/rustc-pipeline-vs-cpp-compilation-pipeline)

This piece is for people who already know what a use-after-free is and care where rustc vs LLVM vs the OS sit. The table below is the whole argument. Compiler logs live in collapsible blocks.
:::

People say **Rust is memory safe**. I wanted the compiler version of that sentence, not the slide. So I compiled the same bugs with rustc 1.93.1, gcc/g++ 13.3, and clang 18, then asked where the proof stops: language, rustc, LLVM, or the OS.

**The default index is the comparison.** In safe Rust, `v[i]` is checked and **panics** on a miss. In C++, `v[i]` / `span[i]` is unchecked. `v.at(i)` **throws** (C++98 onward for `vector`). [`span::at`](https://en.cppreference.com/w/cpp/container/span/at) is **C++26**, not C++23. Until then, checked span access is GSL or a project wrapper. `#![no_std]` still checks in `core` unless you wrote `get_unchecked`.

C++ already has `unique_ptr`, `span`, sanitizers. The interesting difference is **what happens when the programmer forgets to use them.**

The claim is real. It is also smaller than “Rust is memory safe.”

```text
                    RUST SAFETY
                         |
        +----------------+----------------+
        |                |                |
   LANGUAGE          TOOLCHAIN        REAL WORLD
 ownership            rustc              FFI
 borrowing            LLVM               TOCTOU
 bounds               optimizer          logic / .ok()
 data races                              OS APIs
```

**Results of the programs I compiled** (default flags unless noted: `-Wall -Wextra`, no sanitizer):

<table>
<thead>
<tr>
<th>Bug</th>
<th>C/C++ default</th>
<th>C/C++ + ASan/UBSan</th>
<th>Safe Rust</th>
</tr>
</thead>
<tbody>
<tr>
<td>Use-after-free</td>
<td>Compiles (gcc may warn; clang often silent)</td>
<td>Runtime abort</td>
<td>Rejected (<code>E0515</code> / <code>E0382</code>)</td>
</tr>
<tr>
<td>Constant OOB (<code>a[10]</code> on size 4)</td>
<td>Compiles (clang warns, still links)</td>
<td>Runtime report</td>
<td>Rejected (compile error)</td>
</tr>
<tr>
<td>Runtime OOB (<code>a[i]</code>)</td>
<td>UB; my run smashed a neighbor <code>flag</code></td>
<td>Often a message; default UBSan still continues</td>
<td>Panic, exit 101</td>
</tr>
<tr>
<td>Data race (<code>n += 1</code> from two threads)</td>
<td>Compiles</td>
<td>Tool-dependent</td>
<td>Rejected (<code>E0499</code>)</td>
</tr>
<tr>
<td>TOCTOU (check path, swap, open)</td>
<td>Compiles; reads the swapped file</td>
<td>ASan silent</td>
<td>Compiles; same wrong file</td>
</tr>
<tr>
<td>Bad FFI length / <code>unsafe</code> lie</td>
<td>Possible</td>
<td>Not solved</td>
<td>Possible (Level 2–3)</td>
</tr>
<tr>
<td>Logic / ignored <code>Result</code></td>
<td>Possible</td>
<td>Not solved</td>
<td>Possible</td>
</tr>
</tbody>
</table>

Evidence is below. Three different index stories, say them once:

1. **Constant index rustc can see** → compile-time rejection. No binary.
2. **Runtime index** → rustc emits a bounds check → **panic** (defined). Not C undefined behavior. `--release` does **not** strip that check. LLVM may drop it only when it can **statically prove** `i` is in range. That is proving the access safe, not relaxing the language.
3. **`unsafe { *v.get_unchecked(i) }`** → you hold the proof. Broken invariant is UB. Use this in a hot loop only after you have a local proof (length already tested, iterator already in range).

## Table of Contents

- [The short answer](#the-short-answer)
- [Where the language guarantee ends](#where-the-language-guarantee-ends)
- [Ownership: static proof vs leftover pointer](#ownership-static-proof-vs-leftover-pointer)
- [Data races](#data-races)
- [What I compiled](#what-i-compiled)
- [C++23 and sanitizers](#c23-and-sanitizers)
- [`unsafe` is a proof boundary](#unsafe-is-a-proof-boundary)
- [Checklist](#checklist)
- [From borrow checking to LLVM](#from-borrow-checking-to-llvm)
- [Limits of rustc](#limits-of-rustc)
- [What you pay for the checks](#what-you-pay-for-the-checks)
- [The claim I would actually make](#the-claim-i-would-actually-make)
- [References](#references)

## The short answer

The table above is the claim. These three programs are the evidence. Toolchains: rustc 1.93.1, gcc/g++ 13.3, clang/clang++ 18.1.3. Full logs: [What I compiled](#what-i-compiled).

**Example 1.** This function makes a `String` on the stack, then tries to hand a pointer to it back to the caller:

```rust
fn dangling() -> &'static str {
    let s = String::from("secret");
    &s
}
```

What it is doing: `s` lives only while `dangling` is running. When the function returns, `s` is destroyed. `&s` is a pointer into that dead memory. If rustc allowed this, the caller would read bytes that no longer belong to the program.

What rustc did (default, no extra flag):

```text
error[E0515]: cannot return reference to local variable `s`
 --> uaf.rs:3:5
  |
3 |     &s
  |     ^^ returns a reference to data owned by the current function
```

No binary. That reject is the good outcome.

In C you can `free(p)` then `printf("%s", p)`: gcc emits `-Wuse-after-free` and still produces a binary. **clang 18.1.3** with `-Wall -Wextra` produced a binary with no warning. In C++ you can keep a `string_view` after `delete`: g++ 13.3 and clang++ 18 both produced a binary with no warning. Those programs can crash, print garbage, or read data an attacker put in the reused heap.

<details>
<summary>ASan on the same C/C++ sources (opt-in rebuild + run)</summary>

```text
$ gcc -O0 -Wall -Wextra -fsanitize=address uaf.c -o uaf_c_asan
$ ./uaf_c_asan
ERROR: AddressSanitizer: heap-use-after-free
SUMMARY: AddressSanitizer: heap-use-after-free ... in printf_common
# abort, exit 1
```

clang 18 with the same flag: same abort. C++ `string_view` after `delete` + ASan: `heap-use-after-free` in `fwrite`, abort. A sanitizer can report the same class of bug rustc refused. You had to rebuild with `-fsanitize=address` [[14]](#references) and actually run `main`. rustc never emitted a binary.

</details>

**Example 2.** This program makes an array of four zeros, then writes index 10:

```rust
fn main() {
    let mut a = [0; 4];
    a[10] = 42;
}
```

What it is doing: valid indexes are 0, 1, 2, 3. Index 10 is six slots past the end. In C and C++ that write is undefined behavior: smash the stack, overwrite a return address, or look fine until it does not. gcc and g++ 13.3 with `-Wall -Wextra` built it with **no diagnostic**. clang and clang++ 18 warned `-Warray-bounds` and still produced a binary.

What rustc did (default): compile error, `deny(unconditional_panic)`, no binary.

<details>
<summary>UBSan on the same C source</summary>

```text
$ gcc -O0 -Wall -Wextra -fsanitize=undefined oob.c -o oob_ubsan
$ ./oob_ubsan
oob.c:3:6: runtime error: index 10 out of bounds for type 'int [4]'
```

ASan alone did not print a clean report on this tiny stack `int a[4]` in my run; UBSan did. Default gcc still shipped a binary. Default rustc did not.

</details>

**Example 3.** Constant `a[10]` is the easy case. rustc can see the number. Now `i` comes from the command line, so the compiler cannot reject it up front.

```rust
fn main() {
    let mut a = [0i32; 4];
    let i: usize = std::env::args()
        .nth(1)
        .and_then(|s| s.parse().ok())
        .unwrap_or(10);
    a[i] = 42;
    println!("still running, a[0]={}", a[0]);
}
```

What it is doing: same four-slot array. The index is not in the source as `10`. rustc **accepts** this. You get a binary. The language still gives you a check: at run time.

```text
$ rustc slice_i.rs -o slice_i_rs    # exit 0
$ ./slice_i_rs 4
thread 'main' panicked at slice_i.rs:7:5:
index out of bounds: the len is 4 but the index is 4
# exit 101: never prints "still running"
```

Same with `rustc -O` / `--release`. The panic stayed. LLVM did not remove the check: it could not prove `i` in range. Valid index `0` prints `still running, a[0]=42`.

C: `i` from argv, array of 4, neighbor `flag`. `./slice_i_c 4` printed `still running` and `flag` went from 7 to 42 (gcc and clang, `-O0 -Wall -Wextra`). Default UBSan printed the OOB message and **continued**; ASan often misses this intra-object overflow. `-fno-sanitize-recover=undefined` aborts — extra flag. Rust panic needed none.

<details>
<summary>C smash + default UBSan recover</summary>

```text
$ gcc -O0 -Wall -Wextra slice_i.c -o slice_i_c
$ ./slice_i_c 4
still running  a[0]=0  flag=42

$ gcc -O0 -Wall -Wextra -fsanitize=address,undefined slice_i.c -o slice_i_san
$ ./slice_i_san 4
slice_i.c:12:8: runtime error: index 4 out of bounds for type 'int [4]'
still running  a[0]=0  flag=42
# exit 0
```

</details>

Sanitizers can name the same bugs. They are a flag you pass and a path you must run. Safe Rust’s reject/panic is the default. C does not mark `a[i] = 42` as `unsafe`. rustc bugs and FFI still sit outside that default; those sections come later.

## Where the language guarantee ends

The slide says “Rust.” That is several products glued together. **Memory-safety as a language model** is not the same as **an implementation bug in rustc.**

**Level 1: safe Rust.** No `unsafe` in *your* function. Ownership, borrows, bounds, data-race rules — if rustc is sound.

**Level 2: `unsafe`.** You assume the invariant. Callers still see a safe type.

**Level 3: FFI + the toolchain.** C lengths, ABI, `mmap`, libraries, rustc, LLVM, OS. Language rules stop at `extern "C"`. They also stop if rustc is wrong.

The numbered list is the same picture, one step finer:

1. **Safe Rust**
2. **`unsafe`**
3. **FFI**
4. **Library implementation** (`std` / crates; `Cargo.lock` is in the TCB)
5. **rustc** — [Limits of rustc](#limits-of-rustc): ISSTA 2026 [[5]](#references), [#25860](https://github.com/rust-lang/rust/issues/25860) [[2]](#references)
6. **LLVM** (`noalias` on a lie is still “correct” LLVM)
7. **OS / hardware** — TOCTOU, permissions

The rest of the article fills that list with programs.

## Ownership: static proof vs leftover pointer

Two different questions, one hole.

**Borrow checker = static proof before a binary exists.** It does not watch machine code. It checks ownership, lifetimes, and aliases **before** LLVM. Rule: the owner lives at least as long as the borrow.

```text
s owns memory
   |
   +---- r borrows it
          |
          +---- s is destroyed
                    |
                    X  r is still alive  →  rustc reject (Example 1, E0515)
```

ASan asks: “did this **run** access dead memory?” The borrow checker asks: “can this program even **name** that relationship?”

**Same hole if the compiler emits a binary.** C `free(p)` only marks the heap free; the **variable** `p` is still a number you can store through. rustc’s `Box` **owns** the `i32`. `drop(p)` **moves** that owner. After the move there is no pointer left (`E0382`).

<Tabs groupId="same-uaf">
  <TabItem value="c" label="C: still a binary">

```c
int *p = malloc(sizeof(int));
free(p);
*p = 42;   /* gcc: -Wuse-after-free, then a binary */
```

  </TabItem>
  <TabItem value="cxx" label="C++: still a binary">

```cpp
int *p = new int;
delete p;
*p = 42;   /* g++ / clang++: still a program */
```

  </TabItem>
  <TabItem value="rs" label="Rust: E0382">

```rust
fn main() {
    let mut p = Box::new(10);
    drop(p);
    *p = 42;
}
```

```text
error[E0382]: use of moved value: `p`
```

  </TabItem>
</Tabs>

That is the language rule, not a smarter programmer. Full `String` / `string_view` logs: [What I compiled](#what-i-compiled).

Bounds are a different check: safe `v[100]` on a length-3 `Vec` is a **panic**, not C UB. `--release` does not turn it into UB. LLVM may omit the instruction only after a static proof that the index fits.

## Data races

Memory safety is also threads. I compiled this:

```rust
fn main() {
    let mut n = 0i32;
    std::thread::scope(|s| {
        s.spawn(|| { n += 1; });
        s.spawn(|| { n += 1; });
    });
}
```

```text
error[E0499]: cannot borrow `n` as mutable more than once at a time
```

No binary. Two closures both want `&mut n`. rustc refuses.

The C++ cousin `int counter = 0; void worker() { counter++; }` compiled with g++ and clang++ 18, `-Wall -Wextra`, exit 0. Two threads on that `worker` is a data race. `counter++` is not one machine step: load, add, store. Both threads can store the same old value.

Safe Rust wants `Arc<Mutex<i32>>` or an `AtomicUsize`. Deadlock, starvation, and **file** races are still possible. The type system only blocks **unsynchronized conflicting memory access** in safe code.

## What I compiled

Same computer. **rustc 1.93.1** (`01f6ddf75`, 2026-02-11). **gcc/g++ 13.3.0**. **clang/clang++ 18.1.3**. Flags: `-Wall -Wextra` for C and C++. C++23 tests: `-std=c++23`. ASan: `-fsanitize=address`. ISSTA counts are from the public abstract and artifact. uutils notes are Canonical / Zellic / oss-security, not “every Rust CLI is clean.”

```bash
gcc    -Wall -Wextra uaf.c  -o uaf_c       # exit 0, warns -Wuse-after-free
clang  -Wall -Wextra uaf.c  -o uaf_clang   # exit 0, no warning
g++    -std=c++20 -Wall -Wextra uaf.cpp -o uaf_cpp      # exit 0, silent
clang++ -std=c++20 -Wall -Wextra uaf.cpp -o uaf_clangpp # exit 0, silent
rustc uaf.rs -o uaf_rs                     # error, no binary

gcc    -Wall -Wextra oob.c  -o oob_c       # exit 0, no diagnostic
clang  -Wall -Wextra oob.c  -o oob_clang   # exit 0, -Warray-bounds, still a binary
rustc oob.rs -o oob_rs                     # error, no binary

clang -O0 -Wall -Wextra slice_i.c -o slice_i_clang
./slice_i_clang 4                          # still running, flag smashed
```

The UAF / constant-OOB / runtime-index sources match [the short answer](#the-short-answer). [Full sources and compiler logs for tests 1–3](#full-compiler-logs):

<details id="full-compiler-logs">
<summary>Full sources and compiler logs for tests 1–3</summary>

### 1. Use memory after free

<Tabs groupId="exp-uaf">
  <TabItem value="c" label="C: still builds">

```c
#include <stdio.h>
#include <stdlib.h>
int main(void) {
    char *p = malloc(32);
    if (!p) return 1;
    free(p);
    printf("%s", p);
    return 0;
}
```

```text
$ gcc -Wall -Wextra uaf.c -o uaf_c
uaf.c: In function ‘main’:
uaf.c:7:5: warning: pointer ‘p’ used after ‘free’ [-Wuse-after-free]
    7 |     printf("%s", p);
      |     ^~~~~~~~~~~~~~~
uaf.c:6:5: note: call to ‘free’ here
    6 |     free(p);
      |     ^~~~~~~
# exit code 0: gcc still produces a binary
```

```text
$ clang -Wall -Wextra uaf.c -o uaf_clang
# no diagnostic
# exit code 0
```

**Why that is bad.** `free` returned the heap block. `printf` still reads it. The bytes may be garbage, may crash, or may be data an attacker put there after reuse. gcc diagnosed it (`-Wuse-after-free`) and still produced a binary. clang 18 with `-Wall -Wextra` did not warn. A warning is not a reject.

  </TabItem>
  <TabItem value="cxx" label="C++: no warning">

```cpp
#include <iostream>
#include <string>
int main() {
    auto* s = new std::string("secret");
    std::string_view v = *s;
    delete s;
    std::cout << v << "\n";
}
```

```text
$ g++ -std=c++20 -Wall -Wextra uaf.cpp -o uaf_cpp
$ clang++ -std=c++20 -Wall -Wextra uaf.cpp -o uaf_clangpp
# both: no output, exit 0, binary produced
```

**Why that is bad.** `string_view` is only a pointer plus length. After `delete s`, those bytes are dead. Printing `v` is use-after-free. g++ 13.3 and clang++ 18 did not even warn. You can ship this.

  </TabItem>
  <TabItem value="rs" label="Rust: no binary">

```rust
fn dangling() -> &'static str {
    let s = String::from("secret");
    &s
}
fn main() { println!("{}", dangling()); }
```

```text
$ rustc uaf.rs -o uaf_rs
error[E0515]: cannot return reference to local variable `s`
 --> uaf.rs:3:5
  |
3 |     &s
  |     ^^ returns a reference to data owned by the current function

error: aborting due to 1 previous error
```

**What rustc did.** `s` dies at the end of `dangling`. The `&s` would point at dead memory. rustc refused. **No object file, no binary.**

**Why that reject is good.** You cannot run this program. You cannot put it in a release. The same class of bug that gcc warned-and-linked, clang silently linked, and g++/clang++ silently linked, never leaves rustc. That is the memory-safety claim in one command.

  </TabItem>
</Tabs>

What surprised me was C++, not Rust. g++ and clang++ produced a binary with no diagnostic. gcc warned, then still produced a binary. clang 18 did not warn on `free` then `printf`. AddressSanitizer can catch these **if you turn it on**. The slogan is about the default build.

### 2. Write past the array

<Tabs groupId="exp-oob">
  <TabItem value="c" label="C: still builds">

```c
int main(void) {
    int a[4] = {0};
    a[10] = 42;
    return a[10];
}
```

```text
$ gcc -Wall -Wextra oob.c -o oob_c
# no diagnostic
# exit code 0

$ clang -Wall -Wextra oob.c -o oob_clang
oob.c:3:5: warning: array index 10 is past the end of the array (that has type 'int[4]') [-Warray-bounds]
    3 |     a[10] = 42;
      |     ^ ~~
# exit code 0: gcc still produces a binary
```

**Why that is bad.** The array has four `int`s. Index 10 is six slots past the end. In C that is undefined behavior: smash the stack, overwrite a return address, or “work” until it does not. gcc 13.3 with `-Wall -Wextra` still built it with no warning. clang 18 warned, then still produced a binary. rustc refused.

  </TabItem>
  <TabItem value="cxx" label="C++: still builds">

```cpp
int main() {
    int a[4] = {0};
    a[10] = 42;
    return a[10];
}
```

```text
$ g++ -std=c++20 -Wall -Wextra oob.cpp -o oob_cpp
# no diagnostic, exit 0

$ clang++ -std=c++20 -Wall -Wextra oob.cpp -o oob_clangpp
# -Warray-bounds, exit 0, binary produced
```

**Why that is bad.** Same write. Same undefined behavior. gcc silent. clang warns. Both ship a binary.

  </TabItem>
  <TabItem value="rs" label="Rust: no binary">

```rust
fn main() {
    let mut a = [0; 4];
    a[10] = 42;
}
```

```text
$ rustc oob.rs -o oob_rs
warning: value assigned to `a` is never read
 --> oob.rs:3:5
  |
3 |     a[10] = 42;
  |     ^^^^^^^^^^

error: this operation will panic at runtime
 --> oob.rs:3:5
  |
3 |     a[10] = 42;
  |     ^^^^^ index out of bounds: the length is 4 but the index is 10
  |
  = note: `#[deny(unconditional_panic)]` on by default

error: aborting due to 1 previous error; 1 warning emitted
```

**What rustc did.** It saw length 4 and index 10 in the source. That write would always panic. The default `deny(unconditional_panic)` turns that into a **hard error**. Again: no binary.

**Why that reject is good.** You never get a program that writes off the end of the array. In C that write can corrupt memory and keep running. rustc stops the constant case at compile time.

  </TabItem>
</Tabs>

### 3. Variable index (`slice[i]`)

rustc cannot reject this at compile time: `i` comes from `argv`. Full programs:

<Tabs groupId="exp-slice-i">
  <TabItem value="c" label="C: builds, keeps running">

```c
#include <stdio.h>
#include <stdlib.h>
struct Box {
    int a[4];
    int flag;
};
int main(int argc, char **argv) {
    struct Box b;
    b.a[0] = b.a[1] = b.a[2] = b.a[3] = 0;
    b.flag = 7;
    int i = argc > 1 ? atoi(argv[1]) : 4;
    b.a[i] = 42;
    printf("still running  a[0]=%d  flag=%d\n", b.a[0], b.flag);
    return 0;
}
```

```text
$ gcc -O0 -Wall -Wextra slice_i.c -o slice_i_c
# no diagnostic, exit 0
$ ./slice_i_c 4
still running  a[0]=0  flag=42
# exit 0
```

**Why that is bad.** Valid indexes of `a` are 0..3. Index 4 is the next `int`, which is `flag`. gcc wrote 42 into `flag` and continued. A bigger `i` (I tried 10) hit a segfault (exit 139). Either way: undefined behavior. The “lucky” case is the scary one: the program looks alive while it has already corrupted memory.

  </TabItem>
  <TabItem value="rs" label="Rust: builds, then panics">

```rust
fn main() {
    let mut a = [0i32; 4];
    let i: usize = std::env::args()
        .nth(1)
        .and_then(|s| s.parse().ok())
        .unwrap_or(10);
    a[i] = 42;
    println!("still running, a[0]={}", a[0]);
}
```

```text
$ rustc slice_i.rs -o slice_i_rs
# exit 0: unlike a[10] in the source, this is allowed
$ ./slice_i_rs 4
thread 'main' panicked at slice_i.rs:7:5:
index out of bounds: the len is 4 but the index is 4
# exit 101
```

`rustc -O` panicked the same way. `./slice_i_rs 0` prints `still running, a[0]=42`.

**What rustc did.** It could not prove `i` was in range, so it compiled a bounds check. At run time the check failed. The process stopped. It never printed `still running`.

**Why that panic is good.** Some people call it a crash. It is the *safe* failure: no write past the array, no smashed `flag`. I would rather have a panic than silent corruption.

  </TabItem>
</Tabs>

</details>

### 4. File race (TOCTOU)

You check a file path. Then someone swaps the file. Then you open the path. The compiler does not see that. That bug has a name: [TOCTOU](https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use) (time-of-check to time-of-use). Rust [`std::fs`](https://doc.rust-lang.org/std/fs/) takes paths, like many C programs. Two syscalls on the same path string are two lookups. The file can change in between.

Let’s look at a small program I compiled. It is the same shape as the CVEs, squeezed into one process so the window is visible. **Check** the path. **Swap** the file behind that name. **Use** the same path. rustc and gcc both accept it. ASan does not save you: this is not a memory smash.

**What it is doing.** Write `target` with `hello`. Write `other` with `secret`. Call `metadata` / `stat` on `target` (the check). Replace `target` with `other`. Open `target` and read (the use). The check saw `hello`. The read got `secret`.

<Tabs groupId="exp-toctou">
  <TabItem value="rs" label="Rust: builds, reads secret">

```rust
use std::fs::{self, File};
use std::io::Read;

fn main() {
    let dir = std::env::temp_dir().join("cs_toctou_rs");
    let _ = fs::remove_dir_all(&dir);
    fs::create_dir_all(&dir).unwrap();
    let path = dir.join("target");
    let other = dir.join("other");
    fs::write(&path, b"hello\n").unwrap();
    fs::write(&other, b"secret\n").unwrap();

    let meta = fs::metadata(&path).unwrap();
    println!("check: is_file={} size={}", meta.is_file(), meta.len());

    fs::remove_file(&path).unwrap();
    fs::rename(&other, &path).unwrap();

    let mut s = String::new();
    File::open(&path).unwrap().read_to_string(&mut s).unwrap();
    println!("use: read {:?}", s.trim());
}
```

```text
$ rustc toctou.rs -o toctou_rs
# exit 0: no error. The borrow checker does not see files.
$ ./toctou_rs
check: is_file=true size=6
use: read "secret"
# exit 0
```

**Why rustc is silent.** `path` is a string. Both calls are legal. Nothing was freed. No index was out of range. The bug is two lookups of one name.

  </TabItem>
  <TabItem value="c" label="C: same bug, same output">

```c
struct stat st;
stat(path, &st);                 /* check */
printf("check: is_reg=%d size=%ld\n", S_ISREG(st.st_mode), (long)st.st_size);

unlink(path);
rename(other, path);             /* swap */

f = fopen(path, "r");            /* use */
fgets(buf, sizeof buf, f);
printf("use: read \"%s\"\n", buf);
```

```text
$ gcc -Wall -Wextra toctou.c -o toctou_c
# exit 0
$ ./toctou_c
check: is_reg=1 size=6
use: read "secret"
# exit 0

$ gcc -O0 -Wall -Wextra -fsanitize=address toctou.c -o toctou_c_asan
$ ASAN_OPTIONS=detect_leaks=0 ./toctou_c_asan
check: is_reg=1 size=6
use: read "secret"
# exit 0: ASan has nothing to say

$ clang -Wall -Wextra toctou.c -o toctou_clang
$ ./toctou_clang
check: is_reg=1 size=6
use: read "secret"
$ clang -O0 -Wall -Wextra -fsanitize=address toctou.c -o toctou_clang_asan
$ ASAN_OPTIONS=detect_leaks=0 ./toctou_clang_asan
check: is_reg=1 size=6
use: read "secret"
# exit 0
```

  </TabItem>
</Tabs>

Rust can compile the program, ASan can stay silent, and the program can still use the wrong file. Memory safety is not general security.

The production cousin is [CVE-2026-35359](https://www.openwall.com/lists/oss-security/2026/05/02/2) [[11]](#references) in Ubuntu’s Rust [uutils](https://github.com/uutils/coreutils) `cp`. Canonical / [Zellic](https://github.com/Zellic/publications/blob/master/uutils%20coreutils%20-%20Zellic%20Audit%20Report.pdf) found mostly file races and ignored errors, not a pile of UAF. GNU still shipped a heap overflow: [CVE-2026-56392](https://osv.dev/vulnerability/CVE-2026-56392) [[12]](#references). uutils `dd` [CVE-2026-35344](https://github.com/advisories/GHSA-wh8p-h9hw-x2mc) hid a truncate failure with `.ok()`.

Fix for the experiment: open **once**, then `fstat` / operate on the **file descriptor**, or `O_NOFOLLOW`.

### 5. Talking to C

When Rust calls C (`extern "C"`), rustc trusts the C side ([FFI](https://doc.rust-lang.org/nomicon/ffi.html)). Wrong length, a “success” null, `from_raw_parts(ptr, len)`: rustc never measured `len`. Tests 1–2 are compile-time reject. Test 3 is runtime panic. Tests 4–5 are where the proof stops.

Panic / OOM are still bugs. They are not [`strcpy`](https://en.cppreference.com/w/c/string/byte/strcpy) UB. Safe indexing is not on the [UB list](https://doc.rust-lang.org/reference/behavior-considered-undefined.html); it panics.

## C++23 and sanitizers

Default C++ still lets you `new`/`delete` and `v[i]`. C++ also has tools. I re-ran the bugs with **C++23**, `std::span`, `std::vector`, and [ASan](https://github.com/google/sanitizers/wiki/AddressSanitizer) (`g++` 13.3 / `clang++` 18.1.3, `-std=c++23`).

`operator[]` on `std::span` does **not** check `i`. A bounds-checked [`span::at`](https://en.cppreference.com/w/cpp/container/span/at) is **C++26** (P2821). My tests used `-std=c++23`, so that member was not in the language I compiled. In C++23, safety-critical code uses [`vector::at`](https://en.cppreference.com/w/cpp/container/vector/at), [GSL `span`](https://github.com/microsoft/GSL), or a project wrapper. Default `s[i]` on a length-4 vector still wrote past the end in my C++23 build:

```text
$ g++ -std=c++23 -O0 -Wall -Wextra cxx23_span.cpp -o cxx23_span
$ ./cxx23_span 4
still running  s[0]=0
# clang++ 18: same, exit 0
$ g++ -std=c++23 -O0 -Wall -Wextra -fsanitize=address cxx23_span.cpp -o cxx23_span_asan
$ ./cxx23_span_asan 4
ERROR: AddressSanitizer: heap-buffer-overflow
# abort
```

C++23 `string_view` after `delete` printed `secret` (exit 0). With ASan: `heap-use-after-free`, abort.

C++23 + ASan caught both **at run time**, if you pass the flag and **run the path**. rustc’s check on `&s` / `a[10]` is compile time with no extra flag. The variable-index panic is in every binary I built, including `-O`. `--release` is not an “unchecked indexing” mode.

[`vector::at`](https://en.cppreference.com/w/cpp/container/vector/at) throws `std::out_of_range`. Rust `v[i]` **panics**. Both are defined stops. Rust’s stop is the default index; C++’s throw is opt-in. C++26 `span::at` matches `vector::at`. LLVM may omit a Rust check only after it proves the index fits.

Many Boost features moved into `std`. The rest of that kitchen sink is crates.io on the Rust side. Trusting a crate is the same problem as trusting a Boost module. Neither makes C++23 `span[i]` check bounds by default.

## `unsafe` is a proof boundary

`unsafe` means: “compiler, trust me here.” The hole is **named**, so you can keep it small. Callers stay in safe Rust; inside, you own the invariant.

```rust
pub fn first_byte(data: &[u8]) -> u8 {
    unsafe { *data.as_ptr() }
}
```

Ten lines of `unsafe` under a thousand lines of safe code is the design. Five thousand lines of `transmute` and FFI is C with extra steps. Count invariants, not blocks.

```rust
pub fn as_static(s: &str) -> &'static str {
    unsafe { std::mem::transmute(s) }
}
```

`main` has no `unsafe`. The program can still use-after-free. rustc checks the **function type**, not the proof inside `unsafe`. `std` hides dangerous bits on purpose. A lie in that hiding is still a lie.

“Our crate has no `unsafe`” is incomplete: `Cargo.lock` may pull crates that do. `cargo audit` finds **known** advisories; it does not prove libraries correct.

## Checklist

:::tip Use this when you write `unsafe` or FFI
Four questions on the block, then `get_unchecked` only with a local proof. Full list below.
:::

**`unsafe` block (write this in a comment above the block):**

1. What invariant am I asserting? (non-null, aligned, `len` is the allocation, no alias with `&mut`, lifetime not `'static` unless it really is)
2. Who established it — this function, the caller, or C?
3. What would make it false on the next line?
4. Can Miri run this path in CI?

**`get_unchecked`:** only after a local proof (`i < v.len()`, or an iterator that already walked the slice). If the proof is “I think the loop is fine,” keep `v[i]`.

**FFI / C++ interop:**

- Treat every `extern "C"` length and pointer as untrusted until you copy into a `Vec` / checked slice.
- Do not `from_raw_parts` on a C “success” that can be null + len 0 unless the C API documents that as empty.
- Prefer owning the allocation on one side. If C frees, Rust must not `Drop` the same bytes.
- On the C++ side: `unique_ptr` / `vector::at` (C++26: `span::at`) at the boundary; sanitizers on the C++ test binary, not only on the Rust crate.

**Filesystem:** open once; `fstat` / operate on the fd; `O_NOFOLLOW` if the path must not be a symlink.

## From borrow checking to LLVM

Safe Rust is only as strong as rustc. If rustc **accepts an invalid program**, the language said no and the implementation said yes. LLVM then optimizes as if the type were true. That is a miscompile of the *language*, not a random backend crash.

```text
source → AST → HIR → type check → borrow check → MIR → LLVM IR → machine code
```

Ownership is checked **before** LLVM. `&mut` is not “any C pointer”; rustc can lower it as `noalias`. If rustc **wrongly** emits `&'static`, LLVM may treat that pointer as forever. A hole in lifetime rules is permission for the optimizer.

Bounds checks in MIR are the same story: `--release` is not a switch that deletes them. LLVM may omit a check only when it can prove the index is in range. That is a proof of safety, not a weaker language.

The guarantee is not “the borrow checker is perfect.” It is: **the whole pipeline preserves the language’s safety rules.** rustc and LLVM are two later steps on that list.

The [pipeline article](/docs/articles/rustc-pipeline-vs-cpp-compilation-pipeline) draws the C++ side.

The sections above assume rustc is correct. rustc is software too. Here is a real case where it is not.

## Limits of rustc

This is step 5 in [where the language guarantee ends](#where-the-language-guarantee-ends). The language model can be sound while **this rustc** accepts a program it should reject. LLVM then treats the lie as IR truth.

Yusung Sim, Sukyoung Ryu (KAIST), Jaemin Hong (UNIST), [Rust's Type Checker Implementation is Unsound](https://conf.researchr.org/details/issta-2026/issta-2026-research-papers/129/Rust-s-Type-Checker-Implementation-is-Unsound-An-Empirical-Study-on-Soundness-Bugs-i) (ISSTA 2026) [[5]](#references), artifact [[6]](#references). Not “Rust apps have bugs.” It is “rustc sometimes accepts programs it should reject.”

Three compiler-bug kinds: crash; reject good code; **accept bad code** (soundness). The last can hide UAF behind `cargo build` with no `unsafe`. Liu et al. (OOPSLA 2025) [[7]](#references) counted rustc bugs more broadly; ISSTA looks at type (3). Study set: abstract **23**, artifact **30** (plus 7 from Liu).

Hard cases: implied bounds, trait objects, associated types — not `Vec` indexing. The previous demos (`Vec`, `Box`, `a[i]`) assume rustc implements those rules. Below is a program with **no** `unsafe` that rustc 1.93.1 still accepted.

### The file I compiled (#25860)

[#25860](https://github.com/rust-lang/rust/issues/25860) is still open. [PR #156077](https://github.com/rust-lang/rust/pull/156077) [[3]](#references) (May 2026) closed without landing. [cve-rs](https://github.com/Speykious/cve-rs) [[4]](#references) uses **zero** `unsafe`:

```rust
fn lifetime_translator<'a, 'b, T: ?Sized>(
    _val_a: &'a &'b (),
    val_b: &'b T,
) -> &'a T {
    val_b
}
```

gets copied as a function pointer in a way that drops a lifetime rule. Then a dummy `&&()` is used to pretend a short-lived value lives forever:

```rust
const STATIC_UNIT: &&() = &&();

pub fn as_static<T: ?Sized>(x: &T) -> &'static T {
    let f: for<'x> fn(_, &'x T) -> &'static T = lifetime_translator;
    f(STATIC_UNIT, x)
}
```

I compiled this with **rustc 1.93.1**. It accepted it. I dropped a `String`, allocated something the same size, then read the “forever” string. Debug hit a **compiler-internal assertion** (not a check in my source). Release built and ran, printing zeros. Allocator reuse is not specified; another machine or glibc may print garbage, crash, or look fine. Normal `Vec` code is not this file. This is a rustc limit, not a `Vec` gotcha. [Miri](https://github.com/rust-lang/miri) [[9]](#references) can catch some of these if they blow up at run time. The [compiler guide](https://rustc-dev-guide.rust-lang.org/traits/implied-bounds.html) lists #25860, [#84591](https://github.com/rust-lang/rust/issues/84591), [#100051](https://github.com/rust-lang/rust/issues/100051).

## What you pay for the checks

The guarantee is not free. This is the bill I actually hit.

- **Learning:** ownership and lifetimes. The first month is slower than C++ if you already know C++.
- **Compile time.** rustc is still slow. A parallel frontend is a 2026 goal (about 20–30% faster in tests, not the default yet). Waiting is a real cost on large crates.
- **Docs.** I typed `replace` in rustdoc on the `String` page. Methods from `str` are listed if you scroll. Search still does not find them through `Deref`. rust-analyzer does. Weak for “I don’t know the name yet.”
- **Runtime index checks** on `a[i]` when rustc cannot prove `i`. Usually cheap. Hot loops sometimes use `get_unchecked` (`unsafe`, Level 2).
- **`unsafe` boundaries and FFI.** You still write C ABI glue. That glue is where Level 1 ends.
- **Layout control.** Packed structs, custom allocators, MMIO: you will touch `unsafe` or stay in C.
- **No std lending iterator.** A standard `Iterator` cannot yield a borrow from inside itself. Other crates exist ([rust-streaming](https://github.com/emk/rust-streaming)).

A May 2023 [forum thread](https://users.rust-lang.org/t/why-are-some-people-against-the-rust-lang/93906) [[1]](#references): special CPU ops stay in C; mixed trees are normal; nobody rewrites a billion lines. Docs search and compile wait are one argument. #25860 is another.

## The claim I would actually make

Yes, for new code where ownership is hard: a parser, a cache with threads, a small C API you can wrap.

No, as a “moral upgrade” of a huge old C/C++ SDK wrapper, or a math kernel that is already correct and fast in C++. Waiting on rustc is a real cost on those teams.

These stars are **taste, not a score**. I would not defend them in a standards meeting. They are how I explain the trade to a teammate in five minutes.

| Situation | C | C++ | Rust |
|---|---:|---:|---:|
| Existing legacy code | ★★★★★ | ★★★★★ | ★★ |
| New systems component | ★★★★ | ★★★★ | ★★★★★ |
| Memory safety as the main risk | ★★ | ★★★ | ★★★★★ |
| Maximum ecosystem / ABI compatibility | ★★★★★ | ★★★★★ | ★★★ |
| Kernel / embedded | ★★★★★ | ★★★★ | ★★★★ |
| Rewrite a large C/C++ tree | ★★★★ | ★★★★★ | ★★ |
| New security-sensitive component | ★★★ | ★★★ | ★★★★★ |

“Rewrite it in Rust” is usually a bad plan. New drivers or a new sealed component can be a plan. For one new cache, see the [Rust vs C++ comparison](/docs/articles/rust-vs-modern-cpp-memory-safety-beyond-the-hype).

I would not write: “Rust makes programs memory safe.” Too broad. I would write:

**Safe Rust moves a large class of memory-safety errors from runtime into compile-time rules. `unsafe`, FFI, compiler bugs, OS interfaces, and logic errors stay outside that guarantee.**

:::tip What exactly does Rust guarantee?
**In safe code (if rustc is sound), Rust is built to stop:** no use-after-free, no dangling references, no double-free, no data races, bounds-checked indexing, ownership/lifetime consistency.

**It does not guarantee:** correct business logic, race-free filesystem operations, correct FFI contracts, absence of `unsafe` bugs, absence of library / rustc / LLVM bugs, absence of DoS / panic / OOM.
:::

The interesting difference between Rust and C++ is not whether safety tools exist. It is **what happens when the programmer forgets to use them.**

Rust did not delete the need for correctness. It moved a big piece of it into the type system. Memory safety is a floor, not the whole building. C and Rust can live together. Checking more at compile time is a bet that computers got cheaper faster than human attention.

All runs used the versions and flags in [What I compiled](#what-i-compiled). #25860 is still open.

## References

Claims in the article point here: rustc soundness and #25860 (2–9); uutils / GNU CVEs and TOCTOU (10–13); ASan, `span`, `at` (14).

1. [Why are some people against the Rust-Lang?](https://users.rust-lang.org/t/why-are-some-people-against-the-rust-lang/93906), May 2023.
2. [rust-lang/rust#25860](https://github.com/rust-lang/rust/issues/25860).
3. [PR #156077](https://github.com/rust-lang/rust/pull/156077) (closed, did not land).
4. [cve-rs](https://github.com/Speykious/cve-rs).
5. Sim, Ryu, Hong, [Rust's Type Checker Implementation is Unsound](https://conf.researchr.org/details/issta-2026/issta-2026-research-papers/129/Rust-s-Type-Checker-Implementation-is-Unsound-An-Empirical-Study-on-Soundness-Bugs-i), ISSTA 2026.
6. Artifact [10.5281/zenodo.20698055](https://doi.org/10.5281/zenodo.20698055).
7. Liu et al., [Bugs in the rustc Compiler](https://doi.org/10.1145/3763800), OOPSLA 2025.
8. rustc-dev-guide, [Implied bounds](https://rustc-dev-guide.rust-lang.org/traits/implied-bounds.html).
9. [Miri](https://github.com/rust-lang/miri), [Chalk](https://github.com/rust-lang/chalk), [a-mir-formality](https://github.com/rust-lang/a-mir-formality), [FLS](https://spec.ferrocene.dev/).
10. [Bugs Rust Won’t Catch](https://corrode.dev/blog/bugs-rust-wont-catch/).
11. Canonical, [An update on rust-coreutils](https://discourse.ubuntu.com/t/an-update-on-rust-coreutils/80773); [Zellic audit PDF](https://github.com/Zellic/publications/blob/master/uutils%20coreutils%20-%20Zellic%20Audit%20Report.pdf); [oss-security CVE list](https://www.openwall.com/lists/oss-security/2026/05/02/2).
12. [CVE-2026-35344](https://github.com/advisories/GHSA-wh8p-h9hw-x2mc). [CVE-2026-56392](https://osv.dev/vulnerability/CVE-2026-56392); [CERT Polska on GNU coreutils](https://cert.pl/en/posts/2026/07/CVE-2026-56391/).
13. [TOCTOU](https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use); Rust [`std::fs`](https://doc.rust-lang.org/std/fs/); [FFI](https://doc.rust-lang.org/nomicon/ffi.html); [panic](https://doc.rust-lang.org/book/ch09-01-unrecoverable-errors-with-panic.html); [`strcpy`](https://en.cppreference.com/w/c/string/byte/strcpy); [undefined behavior (C)](https://en.cppreference.com/w/c/language/behavior).
14. [AddressSanitizer](https://github.com/google/sanitizers/wiki/AddressSanitizer); [UBSan](https://clang.llvm.org/docs/UndefinedBehaviorSanitizer.html); [`std::span`](https://en.cppreference.com/w/cpp/container/span); [`span::at` (C++26)](https://en.cppreference.com/w/cpp/container/span/at); [`vector::at`](https://en.cppreference.com/w/cpp/container/vector/at); [Boost](https://www.boost.org/); [crates.io](https://crates.io/).
15. rustdoc [Search](https://doc.rust-lang.org/nightly/rustdoc/read-documentation/search.html); [#19190](https://github.com/rust-lang/rust/issues/19190).
16. [Parallel Front End (2026)](https://rust-lang.github.io/rust-project-goals/2026/parallel-front-end.html); Nethercote, [July 2026](https://nnethercote.github.io/2026/07/31/how-to-speed-up-the-rust-compiler-in-july-2026.html).
17. [cargo-dist](https://github.com/axodotdev/cargo-dist), [cargo-binstall](https://github.com/cargo-bins/cargo-binstall), [rust-streaming](https://github.com/emk/rust-streaming).
18. Walleij, [*Rust in Perspective*](https://people.kernel.org/linusw/rust-in-perspective).
19. [Rust vs Modern C++](/docs/articles/rust-vs-modern-cpp-memory-safety-beyond-the-hype); [Rustc pipeline](/docs/articles/rustc-pipeline-vs-cpp-compilation-pipeline).
