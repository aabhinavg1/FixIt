---
title: "The arrayref Attack Explained Simply: One Dependency, One Build, Your Machine"
description: "A full walkthrough of the 2026-08-20 arrayref crates.io compromise: Cargo.toml diff, yank-to-upgrade lure, build.rs kill chain, dropper anatomy, second-stage stealer, blast radius, cargo-audit blind spots, and a practical audit + hardening checklist — with commands run on rustc 1.93.1."
keywords:
  - arrayref supply chain attack explained
  - Rust build.rs malware
  - proc-macro1 typosquat
  - crates.io compromised account
  - arrayref 0.3.10
  - Cargo yank upgrade lure
  - Rust supply chain 2026
  - how Rust build scripts run code
  - cargo audit deleted crate
  - RUSTSEC-2026-0260
  - Rust Security Response Team
  - Cargo.lock explained
  - what does cargo yank do
  - build.rs vs build-dependencies
  - Rust infostealer 2026
  - botking RAT Rust
  - cargo deny tutorial
  - cargo vet
  - crates.io trusted publishing
  - xz-utils style attack Rust
  - npm postinstall equivalent Rust
  - PyPI typosquatting
  - dtolney droundy compromised
  - rust-analyzer build.rs execution
---

import AdBanner from '@site/src/components/AdBanner';
import Head from '@docusaurus/Head';

<Head>
  <meta name="description" content="Explanatory walkthrough of the 2026-08-20 arrayref attack: diffs, timeline, build.rs mechanics, dropper anatomy, second-stage payload, blast radius, cargo-audit limits, incident response playbook, and hardening checklist — verified with live crates.io and cargo 1.93.1." />
</Head>

# The `arrayref` Attack Explained Simply

:::tip The whole story in four lines
1. Someone used a popular crate author’s crates.io publish access (likely stolen credentials).
2. They published a fake crate, `proc-macro1`, that looks like the real `proc-macro2`, with a `build.rs` that downloads malware.
3. They made `arrayref` depend on that fake crate, then yanked the good versions so `cargo update` would install the bad one.
4. If you **built** during roughly 86 minutes on 2026-08-20, that was enough. You did not have to call any `arrayref` API.
:::

:::note Who this is for, and how to read it
This piece is written for three audiences at once. **Rust developers** get the mechanics: exactly what ran, when, and why `cargo build` was enough. **Security/IR teams** get IOCs, hunt queries, and a response playbook (§14). **Anyone designing package registries or CI** gets a control-by-control mapping of defenses to kill-chain steps (§15).

Sections 1–2 are background you can skip if you live in Cargo every day. Sections 3–13 explain the incident. Sections 14–15 are the actionable part.
:::

This is not a story about Rust’s borrow checker failing. The language did its job. The **package download and build path** got poisoned. It is also not a story about a clever 0-day against Cargo. Every primitive the attacker used — publish rights, yank warnings, build scripts — is a documented feature working exactly as designed. The exploit was **social**: a lookalike name, a spoofed identity, and a safety warning turned into a lure.

Primary sources: [Rust Blog](https://blog.rust-lang.org/2026/08/20/supply-chain-attack-on-arrayref/), [RustSec #3161](https://github.com/rustsec/advisory-db/issues/3161), [RUSTSEC-2026-0260](https://rustsec.org/advisories/RUSTSEC-2026-0260), [StepSecurity](https://www.stepsecurity.io/blog/arrayref-rust-crate-supply-chain-attack), [JFrog Security Research](https://research.jfrog.com/post/arrayref-proc-macro1-crates-io/). Commands below were run on **rustc/cargo 1.93.1** (2026-08-21). We did **not** download or execute the malware — crates.io already deleted those versions.

<div>
  <AdBanner />
</div>

## 1) What `arrayref` is, and why attackers cared

`arrayref` is a tiny crate: a few macros so you can take a fixed-size array view of a slice:

```rust
use arrayref::array_ref;

let buf = [1u8, 2, 3, 4, 5, 6];
let two: &[u8; 2] = array_ref![buf, 0, 2];
```

No network. No plugins. For years it barely had dependencies. That boredom is why it was valuable: quiet crates sit under **hundreds of other crates**, so one poisoned publish reaches GUI apps, crypto libraries, and chain tooling without anyone typing `arrayref` in their own `Cargo.toml`.

Security people call these crates *load-bearing dependencies*: individually uninteresting, collectively everywhere. An attacker does not need to compromise something famous like `serde`. Compromising something **boring but universal** works just as well — often better, because nobody reviews it.

| Fact (live crates.io API, 2026-08-21) | Value |
| --- | --- |
| Latest version | **0.3.9** (malicious `0.3.10` → HTTP 404) |
| All-time downloads | **245,597,678** |
| Direct reverse dependents | **403** |
| `proc-macro1` on crates.io | **does not exist** (deleted) |

The same maintainer account owned two more mid-size utilities that were poisoned in the same burst: `internment` (string interning, ~14.4M all-time downloads) and `append-only-vec` (~4.5M). Same shape, same day, 19 and 23 minutes apart.

```text
You / your CI
    │
    ▼
egui / iced / winit-style GUI   or   crypto / Solana / Ethereum crates
    │
    ▼
tiny-skia / secp / token crates   (examples of real reverse deps)
    │
    ▼
arrayref   ← one poisoned publish here reaches many trees
```

Live reverse-dependency samples from crates.io include `tiny-skia`, `tiny-skia-path`, `libsecp256k1`, `schnorrkel`, `spl-token`, `revm`-adjacent crates — not toy packages.

## 2) Primer: the trust model you accept every time you run `cargo build`

Everything in this incident follows from five ordinary Cargo behaviors. Worth stating plainly, because “how did malware run?!” stops being mysterious once these are explicit.

### a) Publish rights are the whole gate

Whoever holds a crate owner’s credentials can publish a new version of that crate. There is no mandatory human review, no quarantine period, no signature check against the previous release. Automated checks (spam, size, docs) exist, but a manifest-only change like this one sails through. So the attacker’s problem reduces to: *get the owner’s publish token*. Which is why the working theory is credential/machine compromise, not malice by the author.

### b) Version resolution picks the newest allowed version — unless a lockfile pins older

Your `Cargo.toml` says `arrayref = "0.3"` (a range). Cargo normally resolves that to the highest non-yanked version and records the result in `Cargo.lock`. Two consequences:

- With a committed `Cargo.lock`, plain `cargo build` keeps building exactly what is pinned — even if that version later gets yanked or deleted from the registry.
- Without a lockfile pin — fresh resolution, `cargo update`, or a brand-new project — Cargo reaches for the **newest allowed** version. If the only modern non-yanked version is the malicious one, that is what you get.

Note the asymmetry: **application repos usually commit `Cargo.lock`; library repos usually do not.** A contributor cloning a library and running `cargo build` performs a fresh resolve at that moment. During the attack window, that fresh resolve landed on `0.3.10`.

### c) Yank is a nudge, not a kill switch

`cargo yank` marks a version as “do not hand out to new resolutions.” It does **not** remove the version from the registry, and it does **not** stop anyone whose `Cargo.lock` already names it. Its entire user-visible effect is:

- new/fresh resolutions skip it, and
- existing lockfiles get a warning on every build:

```text
warning: package `arrayref v0.3.9` in Cargo.lock is yanked ...
consider updating to a version that is not yanked
```

Remember those two bullets. In this attack, the warning was the weapon (see §7, Act C).

### d) Building a crate means running its build script — with your privileges

If a crate ships a `build.rs`, Cargo compiles and executes it **on your machine, as your user**, before compiling anything else about that crate. This happens even if your code never calls into the crate (details in §5). Build scripts can read files, touch the network, and spawn processes. Nothing about them is sandboxed by default.

### e) Downloads leave durable local residue

Cargo keeps what it fetched:

- `~/.cargo/registry/cache/<index>/name-version.crate` — the downloaded tarball,
- `~/.cargo/registry/src/<index>/name-version/` — the unpacked sources,
- optionally a `vendor/` directory if the project vendors dependencies,
- CI systems frequently cache all of the above keyed on `Cargo.lock`.

Registry-side deletion does **not** reach any of these. This matters twice in this story: once for forensics (residue proves exposure) and once for persistence (a cached bad tarball keeps rebuilding offline).

One more piece of infrastructure worth knowing: the **crates.io index** is an append-only log of metadata (and the old git index remains as history). Even though crates.io purged the malicious `.crate` tarballs — from the registry, docs.rs, and public mirrors within hours — the *metadata* of what was published, when, by whom, with which dependencies, survives in the index. Much of the public forensics cited here comes from that record rather than from the deleted tarballs.

## 3) What a clean machine looks like *today* (we ran this)

We resolved `arrayref = "0.3"`, built a tiny demo, and inspected the unpacked crate. This is the baseline you compare against.

### Resolve and run

```text
$ cargo tree -i arrayref
arrayref v0.3.9
└── arrayref_demo v0.1.0

$ ./target/debug/arrayref_demo
first two bytes: [1, 2]
```

```text
# Cargo.lock
name = "arrayref"
version = "0.3.9"
checksum = "76a2e8124351fda1ef8aaaa3bbd7ebbcb486bbcd4225aca0aa0d84bb2db8fecb"
```

Exact pin also works:

```toml
arrayref = "=0.3.9"
```

### Clean package has no build script

```text
$ ls ~/.cargo/registry/src/.../arrayref-0.3.9
Cargo.toml  LICENSE  README.md  examples  src
# no build.rs

$ test -f .../arrayref-0.3.9/build.rs && echo YES || echo NO
NO
```

`Cargo.toml.orig` for `0.3.9` only lists a **dev** dependency (`quickcheck`). No runtime `proc-macro*` dependency. Public forensics of the malicious tarball confirm `arrayref`’s own manifest even sets `build = false` — the crate went out of its way to declare it has **no** build script of its own. The malware never lived in `arrayref`. It lived one hop downstream.

### Registry confirms the bad objects are gone

```text
GET /api/v1/crates/arrayref/0.3.10
→ 404  crate `arrayref` does not have a version `0.3.10`

GET /api/v1/crates/proc-macro1
→ 404  crate `proc-macro1` does not exist
```

### This host never cached the malware

```bash
find ~/.cargo/registry/cache -type f \( \
  -name 'arrayref-0.3.10.crate' -o \
  -name 'internment-0.8.7.crate' -o \
  -name 'append-only-vec-0.1.9.crate' -o \
  -name 'proc-macro1-*.crate' -o \
  -name 'proc-macro-en-*.crate' \
\) -print
# empty = this machine never downloaded those tarballs
```

Empty here is good. A hit means that host downloaded a bad `.crate` at least once — treat the environment as suspect even if crates.io is clean now (full response playbook in §14).

## 4) The one-line change that mattered

Attackers did **not** rewrite `arrayref`’s macros. They changed the manifest. Public forensics (JFrog, StepSecurity, RustSec) agree: the library source of `arrayref@0.3.10` was byte-for-byte the legitimate code. The entire weapon was one added stanza.

**Clean `0.3.9` (simplified):**

```toml
[package]
name = "arrayref"
version = "0.3.9"

[dev-dependencies]
quickcheck = "1.0"
# no [dependencies] at all
```

**Poisoned `0.3.10` (shape from public forensics):**

```toml
[package]
name = "arrayref"
version = "0.3.10"

[dependencies]
proc-macro1 = "^1.0.107"   # ← the entire weapon
```

Why this shape is diabolical:

- **No code diff to review.** Anyone diffing the published source against the previous tag sees only a version bump and a manifest line. Human reviewers scan `.rs` files; the manifest is furniture.
- **The dependency is mandatory.** Not an optional feature flag — every consumer of `arrayref@0.3.10` pulls `proc-macro1`.
- **The name is engineered.** `proc-macro1` sits one character away from `proc-macro2`, one of the most-published-on crates in the ecosystem. In a dependency list, eyes slide right past it.
- **The pin is precise.** `"^1.0.107"` — the exact version published **four minutes earlier** containing the payload. Not a range that might resolve elsewhere.

| Artifact | SHA-256 (public IOCs / our lockfile) |
| --- | --- |
| Clean `arrayref 0.3.9` | `76a2e8124351fda1ef8aaaa3bbd7ebbcb486bbcd4225aca0aa0d84bb2db8fecb` |
| Malicious `arrayref 0.3.10` | `25ad700976873c76af785cb99b33c48db7df8b81f21d1e9e06b3676b9a9373ae` |
| Malicious `proc-macro1 1.0.107` | `61198155da51b838772eecf5bfaac6cbc4dcc388dccc56658fc28a8e831b34d4` |
| Decoy `proc-macro1 1.0.106` | `b5c1b5b0763a8809a644a8f92224653f0aca623a98eecc714d27f74b80fbe436` (per StepSecurity; tarball deleted, not independently verified here) |

A leaf utility adding its **first** real dependency in about a decade — pointing at a **same-day** typosquat of `proc-macro2` — is already a high-confidence red flag, before you open `build.rs`.

## 5) The hole: `build.rs` runs on *your* computer

This is the section to internalize, because it generalizes far past this incident.

### What a build script is

`build.rs` is an ordinary Rust program that lives at a crate’s root. When Cargo prepares to build the crate, it first compiles `build.rs` and **executes it**, with your user’s full privileges. The script receives environment variables (`OUT_DIR`, `TARGET`, `CARGO_MANIFEST_DIR`, …) and communicates back via `cargo:` directives (“link this library”, “set this cfg”, “rerun if this file changes”). Legitimate uses: FFI probing, generated code, feature detection.

Legitimate capabilities and malicious capabilities are the **same capabilities**: filesystem access, environment access, process spawning, unrestricted networking. A build script is arbitrary code execution at build time *by design*. There is no prompt, no confirmation, no sandbox.

### When exactly does it run?

More often than people expect:

- `cargo build`, `cargo check`, `cargo test`, `cargo run`, `cargo install`
- IDE integration — **rust-analyzer triggers builds/checks**, so opening a project can execute newly resolved build scripts with zero terminal interaction
- `cargo publish` verification builds, docs.rs documentation builds
- Any CI step that compiles the tree

So “nobody ran anything suspicious” is not exoneration. Opening your editor was enough.

### Safe demo (print only — no network):

```text
$ cargo build
   Compiling buildrs_demo v0.1.0
warning: buildrs_demo@0.1.0: build.rs ran on this machine BEFORE your code compiled
warning: buildrs_demo@0.1.0: host=x86_64-unknown-linux-gnu
    Finished `dev` profile ...

$ ./target/debug/buildrs_demo
main ran AFTER build.rs
```

```text
cargo build
   │
   ├─ compile + RUN dependency build.rs   ← malware lived here
   │
   └─ compile + link your code            ← still exits 0 / looks fine
```

### Important subtlety: `[dependencies]` vs `[build-dependencies]` did not matter

`arrayref` listed `proc-macro1` as a normal **`[dependencies]`** entry, not `[build-dependencies]`. People sometimes assume that means the code only runs at *runtime*, so merely building is harmless. Exactly backwards for this attack class. The distinction governs something narrower:

- `[build-dependencies]` = crates available **to your own `build.rs`** while it runs.
- `[dependencies]` = crates available to your **library/binary code** at compile and run time.

But **either way**, Cargo has to *build* the dependency crate itself. And if *that* crate has its own `build.rs`, Cargo compiles and runs it — because that is part of building it. The dropper lived in `proc-macro1`’s own `build.rs`:

```text
your crate
 ├─ depends on: arrayref            (runtime dep — irrelevant to execution timing)
 │    └─ depends on: proc-macro1    (has build.rs)
 │                        │
 │                        └─ Cargo compiles + RUNS proc-macro1/build.rs
 │                             during `cargo build` — BEFORE anything of yours
 └─ your code                  (never executed yet; build already detonated)
```

You never `use proc_macro1`. You never call it. **Resolving and building the tree is enough.**

That is why “I only use `arrayref` macros” does not protect you.

## 6) Attack timeline (UTC, 2026-08-20)

Times from the official Rust postmortem, the crates.io audit trail reproduced by StepSecurity, and the RustSec thread.

| Time (UTC) | What happened |
| --- | --- |
| Aug 18 | Attacker-owned crates (`arone`, `aronenao`) already publishing malicious/trial build scripts — 7 and 11 versions respectively. The staging predates the main event by two days. |
| 01:17 | GitHub account impersonating David Tolnay created |
| 01:25:58 | crates.io account **`dtolney`** created (display name set to “David Tolnay”) |
| 01:55 | `proc-macro1@1.0.106` — **clean decoy**, byte-renamed copy of real `proc-macro2`. Builds a download history and a veneer of legitimacy for ~5 hours. |
| **07:11:15** | `proc-macro1@1.0.107` — adds malicious `build.rs` + downloader build-deps (`base64`, `rustls`, `ureq`) |
| **07:15:00** | Compromised **`droundy`** publishes `arrayref@0.3.10` depending on `proc-macro1 ^1.0.107` — 3 min 45 s after the weaponized typosquat appeared |
| 07:15:24–40 | Scripted yank of `arrayref` 0.3.9 … 0.3.5 (**upgrade lure**; see cadence below) |
| 07:34:07 | Same account poisons `internment@0.8.7`, yanks 0.8.3–0.8.6 |
| 07:37:49 | Same account poisons `append-only-vec@0.1.9`, yanks 0.1.7–0.1.8 |
| 07:15 | First private report reaches the Rust teams — credited to the research team at Nextron Systems — flagging `proc-macro1` as malicious |
| 07:54 | Public RustSec issue [#3161](https://github.com/rustsec/advisory-db/issues/3161) filed with full technical detail and IOCs |
| 08:03 | crates.io deletes `proc-macro1` |
| **08:41:40** | `arrayref@0.3.10` removed — **86 minutes** online, **2,285 downloads** |
| 09:04:11 | `internment@0.8.7` removed (90 min online) |
| 09:25:24 | `append-only-vec@0.1.9` removed (107 min online) |
| ~09:21–09:30 | Maliciously-yanked good versions **unyanked**; remaining attacker crates (`proc-macro-en`, `aovine`, `arone`, `aronenao`, `tinymember`) deleted; `droundy` account locked as a precaution |

The yank cadence deserves its own view, because it is a fingerprint of automation — a human does not yank five versions with metronome spacing:

| Audit-log entry | Delta |
| --- | --- |
| 07:15:00.82 — publish `arrayref 0.3.10` | — |
| 07:15:24.21 — yank `0.3.9` | +24 s |
| 07:15:26.80 — yank `0.3.8` | +2.6 s |
| 07:15:30.70 — yank `0.3.7` | +3.9 s |
| 07:15:36.29 — yank `0.3.6` | +5.6 s |
| 07:15:40.18 — yank `0.3.5` | +3.9 s |

Two deliberate omissions in that sequence: versions **0.3.4 and earlier were left untouched** (targeting modern consumers, avoiding an obviously destructive wipe of history), and the yanks stopped at exactly the versions a current lockfile would plausibly hold.

Summary of the poisoned releases:

| Crate | Bad version | Time online |
| --- | ---: | ---: |
| `arrayref` | `0.3.10` | **86 min** |
| `internment` | `0.8.7` | **90 min** |
| `append-only-vec` | `0.1.9` | **107 min** |

The Rust Security Response Team does **not** believe the real `arrayref` author acted maliciously — credentials or machine compromise is the working theory. The account was locked and contact attempted. Treat the *account* as hostile during the window regardless of intent.

## 7) The kill chain, act by act (plain English)

### Act A — Forge a famous identity

The attacker needed a crate name that would look native in thousands of dependency lists, attached to an author nobody would question.

| Real | Fake (one character off) |
| --- | --- |
| crate `proc-macro2` | crate `proc-macro1` |
| account `dtolnay` | account `dtolney` |

The impersonation was layered: display name set to “David Tolnay”, repository field pointing at `github.com/dtolnay/proc-macro1` (which does not exist), author field spoofed as David Tolnay with a throwaway email. The library source of `proc-macro1` was a renamed copy of the genuine `proc-macro2` — everything worked, so nobody inspecting behavior had a reason to doubt it.

Then the classic two-step: publish a **clean decoy** (`1.0.106`, 01:55), let it sit for five hours accumulating downloads, and only then push the **weaponized** `1.0.107` (07:11). Anyone who vetted the decoy — or glanced at its download history — saw a healthy crate. The malicious block was inserted surgically inside the genuine `proc-macro2` build script (between its existing cfg-probe sections), so even a skim of `build.rs` looked familiar.

As a hedge, the campaign carried **spare parts**: `proc-macro-en` shipped the identical dropper build script, ready to swap in if `proc-macro1` got burned. Four more attacker crates (`aovine` ≈ append-only-vec, `arone` ≈ arrayref, `aronenao` ≈ arrayref, `tinymember` ≈ tiny-skia) served as staging/trial ground — several had been publishing test build scripts since Aug 18. All six were deleted; treat **every version** of all six names as untrusted, not just the ones referenced by the poisoned releases.

### Act B — Steal the publish button

Publish `arrayref@0.3.10` from the legitimate `droundy` owner account: keep the real source, add **one** dependency (§4). No exploit against crates.io itself was involved — just valid credentials doing what valid credentials can do. The same session poisoned `internment` and `append-only-vec` minutes later, which is what tells responders “account compromise”, not “one bad release”.

### Act C — Weaponize yank warnings

Yanking does **not** break an existing lockfile that already pins `0.3.9`. What it does is make Cargo nag, on every single build:

```text
warning: package `arrayref v0.3.9` in Cargo.lock is yanked ...
consider updating to a version that is not yanked
```

The “responsible” reaction many people and CI bots take:

```bash
cargo update -p arrayref
```

…then resolves to the **only** non-yanked modern release left: **`0.3.10`**.

The original RustSec reporter stated that is exactly how they got hit. Attackers turned Cargo’s safety warning into the delivery channel: the registry nagged you toward the poison, quoting Cargo’s own advice. crates.io later unyanked the good versions, so today the warning is gone — which is precisely why it pays to remember this trick exists. Next time a yank warning appears out of nowhere on a stable dependency, treat “run update” as a *decision requiring investigation*, not hygiene.

### Act D — Silent dropper

Public forensics (RustSec #3161, StepSecurity, JFrog):

1. Reassemble URL from base64 fragments (avoids trivial string scans for `http` or an IP literal).
2. Download over TLS with **certificate validation disabled** — an `AcceptAll` verifier whose methods return success unconditionally. Necessary, since the endpoint is a bare IP with no valid certificate.
3. Select one of four payloads by target platform (`rust-crate_0.1.0` Linux x86-64, `_0.2.0` Windows x86-64, `_0.3.0` macOS x86-64, `_0.4.0` macOS arm64).
4. Write `/tmp/rust-setup` (or Windows temp equivalents), `chmod +x`, spawn **detached** with stdio nulled, `mem::forget(child)` so Cargo does not wait.
5. Build exits **success**. Green CI.

We decoded the public fragments locally (base64 only — no download):

```text
SRC_URL_PARTS → https://23.254.165.112:9089/     # payload host
END_URL_PARTS → 23.254.165.112:443               # argv[1] / C2
```

The Windows branch is worth a sentence of respect: children of a Cargo build script otherwise stay inside Cargo’s job object and stall the build until they exit. The script wrote `%TEMP%\rust-setup.ps1` plus a one-line VBS launcher executed via `wscript //B //Nologo` with `CREATE_NO_WINDOW`, and called `std::mem::forget(child)` — commented in-source as the trick to escape Cargo’s job object. The attacker understood Cargo’s process management well enough to defeat it.

Full sequence:

```text
You:     cargo build / cargo update
Cargo:   resolve arrayref 0.3.10 → fetch proc-macro1 1.0.107
Cargo:   run proc-macro1's build.rs
build.rs: decode fragments → HTTPS fetch (cert check off)
        → drop /tmp/rust-setup → exec (detached, stdio null)
Cargo:   "Finished" (looks healthy)
Malware: connects to C2 at 23.254.165.112:443, independent of the build
```

## 8) Inside the dropper: six techniques and the reason for each

None of this is exotic. That is the point — every piece is commodity tradecraft, assembled cleanly. Understanding *why* each piece exists makes you better at spotting the next campaign.

| Technique in `build.rs` | Purpose |
| --- | --- |
| Base64 URL fragments reassembled at runtime | Defeat `grep http` / IP-literal scans of published sources; keep the C2 out of plaintext until execution |
| `AcceptAll` TLS cert verifier | Fetch from a bare IP with no valid cert; trades authentication for availability — attacker needs the fetch to work, not to be secret from the *host* |
| Platform-selected payload (`_0.1.0` … `_0.4.0`) | One build script serves Linux, Windows, Intel macs, ARM macs; matches how Cargo itself thinks about targets |
| Write to temp + `chmod +x` + execute | Standard staging; temp paths are noisy places where new executables draw less attention |
| Detached spawn, stdio to null | Payload outlives the build; no output leaks into compiler logs; orphaned process has no parent link to the build |
| `mem::forget(child)` (+ Windows VBS launcher) | Escape Cargo’s job object so the build finishes instantly instead of waiting on the malware; the in-source comment shows intent |

The design goal throughout: **zero observable symptoms inside the build**. Exit code 0, normal-looking warnings, no lingering child processes on Unix. Everything hostile happens off-Cargo’s-books.

## 9) The second stage: what may have landed afterward

The first stage (the dropper) is fully reconstructed from the build script. The second stage is less certain, because the payload host stopped serving before researchers pulled copies — JFrog explicitly notes the URLs went dark, so analyses differ in depth. What public reporting (RustSec thread, Wiz via press coverage) attributes to the dropped binary:

- A Rust remote-access trojan / stealer (referred to as **“botking”** in the RustSec thread analysis).
- **Credential collection** targeting browser login databases — Chrome, Brave, Edge — plus crypto wallet extensions. On a developer laptop that is browser-stored secrets, session cookies, wallet keys.
- **Host inventory + command channel** to `23.254.165.112:443`, with a command set covering shell execution, script execution, persistence installation, reconfiguration, self-termination. Once a shell is open, assume anything was possible on that host.
- **Persistence**: systemd units on Linux, LaunchAgents on macOS, Registry Run keys on Windows. One infected developer later reported Linux artifacts under `~/.config/AzureKits` / `ServiceKit`, binaries named `MonoService` / `MonoXpc`, and a systemd unit — useful hunt strings (see §14), though artifact names can vary per deployment.
- **Attribution signals**: Wiz researchers noted infrastructure overlap with recent DPRK-linked supply-chain campaigns (e.g., the NPM `Mastra` and `axios` compromises). Overlap is a signal, not proof — no definitive attribution was made at reporting time.

Treat all second-stage detail as *indicative, host-dependent*: what actually executed on any given machine depends on what the server returned during the window. The honest posture for anyone who built during those 86 minutes is “assume compromise of the build host and everything it could reach,” not “I checked /tmp and it’s clean.”

## 10) Locked build vs update (the confusion that matters)

| Situation during the attack window | What Cargo does | Risk |
| --- | --- | --- |
| `Cargo.lock` already pins `arrayref 0.3.9` and you only `cargo build` | Keeps using 0.3.9 (even if yanked) | Low *from this lure* |
| You `cargo update`, or create a fresh lockfile, after good versions were yanked | Resolves to `0.3.10` | **High** |
| You vendor / cache `0.3.10` once | Offline rebuilds can keep using it after crates.io deletion | **High until cache cleaned** |

Decision picture for “should I worry about this window?”:

```text
Did any Cargo invocation RESOLVE dependencies between 07:15–08:41 UTC?
(libraries: that includes fresh clones — most libs don't commit lockfiles)
    │
    ├── NO  → your lockfiles never named the bad versions → low risk
    │         (still run the §14 cache greps to confirm)
    │
    └── YES → did resolution land on arrayref 0.3.10 /
              internment 0.8.7 / append-only-vec 0.1.9 / any proc-macro1?
              │
              ├── NO  → low risk; document and move on
              │
              └── YES → a build ran on some machine?
                    ├── NO build anywhere → exposure only; clean locks/caches
                    └── BUILD RAN → treat that machine as COMPROMISED (§14)
```

So “I never ran update” and “I ran update because of a yank warning” are completely different stories — and the difference is exactly the lure’s design.

## 11) Blast radius: who actually got hit

Numbers first, then the shape of the victim population.

- `arrayref@0.3.10` was downloaded **2,285 times** in 86 minutes — under 10% of `arrayref` traffic across all versions in that period (per the RustSec advisory). Most consumers were protected by **stale lockfiles**, the same inertia the attacker was fighting.
- The other two poisoned releases drew smaller numbers; combined with six attacker-owned crates, total direct exposure was thousands of downloads spread across individual laptops, CI runners, and mirror caches.
- But counts understate risk: **one infected developer laptop with SSH keys, cloud CLI credentials, and signing material is worth more than ten thousand anonymous downloads.** Supply-chain attacks optimize for quality of access, not volume.

Who was structurally exposed:

1. **People who answered the yank warning** with `cargo update` — the intended prey, explicitly including the original reporter.
2. **Fresh resolutions**: new projects, new CI jobs, and contributors cloning **library repos** (which typically don’t commit `Cargo.lock`) during the window.
3. **Cache-and-vendor carriers**: machines/mirrors that pulled the tarballs keep them after registry deletion; every later offline build replays the exposure.
4. **IDE-driven builds**: rust-analyzer resolving and checking a freshly edited manifest could execute the dropper with no shell command ever typed.

Who was largely spared, and why: locked application builds (`--locked`, committed lockfiles) that didn’t re-resolve. Boring discipline beat cleverness here.

## 12) Why `cargo audit` alone is not enough

On our clean demo (lockfile pinned to `0.3.9`):

```text
$ cargo audit
Fetching advisory database ...
Loaded 1225 security advisories
Scanning Cargo.lock for vulnerabilities (2 crate dependencies)
# no findings — expected for a clean tree
```

There is an advisory: [RUSTSEC-2026-0260](https://rustsec.org/advisories/RUSTSEC-2026-0260) (`arrayref` 0.3.10 removed; unaffected `<=0.3.9`). Run it — it catches this incident **today**. But reason about its blind spots, because the next incident will move faster than the database:

1. **Deleted versions** — the bad release was **removed** from crates.io. A machine that already cached `arrayref-0.3.10.crate` (or a `vendor/` copy) can keep building without talking to the registry; audit reads lockfiles, not caches.
2. **Timing** — tooling only helps after advisories and databases update; the dangerous minutes were *before*. Advisory lag is measured in tens of minutes at best, hours usually. Attack windows are measured in minutes.
3. **Green build ≠ clean host** — the dropper was designed to leave Cargo looking successful. No scanner that trusts build output would notice.
4. **Scope** — audit checks *known-bad* packages in *current* lockfiles. It does not judge *behavioral* red flags: a leaf crate growing its first dependency, a lookalike name appearing in the tree, a build script gaining network dependencies. Those are `cargo-deny`/review territory (§15).

So: run `cargo audit`, **and** run the cache/`Cargo.lock` greps in §14. Do not treat audit alone as “we were unaffected.”

## 13) Why “Rust is memory safe” did not stop this

Memory safety is a guarantee about **programs you chose to run**, delivered through the type system. A supply-chain attack corrupts the **choice** itself — it makes you compile and execute code you never audited. Different layer entirely.

| Protection | Covers | Does **not** cover |
| --- | --- | --- |
| Borrow checker | Memory / data-race classes in *your* safe Rust | Malware you asked Cargo to compile |
| Safe macros in `arrayref` | The library API | A dependency’s `build.rs` |
| Yank warnings | Nudging off yanked crates | Attackers yanking **good** crates on purpose |
| Maintainer reputation | Some trust | Stolen publish token |
| Short online window | Limits blast radius | CI that updates every morning |
| `cargo audit` | Known advisories in lockfiles | Warm caches of deleted malware versions |

Put differently: Rust moved the trust boundary from “every C library you link” to “every crate in your dependency graph.” That is a huge win. But the boundary is still a boundary, and this attack landed entirely on the wrong side of it.

Same class of bug as npm `postinstall` / PyPI install hooks — different hook name (`build.rs`), same idea: **install/build-time code execution with your privileges**. And it rhymes with the 2024 `xz-utils` backdoor: patient identity-building, a legitimate channel abused rather than broken, and a payload hidden in the build pipeline rather than the product. The language underneath was irrelevant in all three cases.

## 14) Incident response playbook (if you *might* be hit)

:::warning Read this first
If any check below hits — cached bad tarball, bad version in a lockfile, or worse a build that ran during the window — treat the machine (and any CI runner that shares its trust domain) as **compromised until proven otherwise**. The dropper opened a remote shell; absence of the specific dropped files proves little. Rotate credentials first, hunt second.
:::

### Step 1 — Triage exposure (fast, safe, no execution of anything found)

Check lockfiles and caches for the poisoned versions and all six attacker crate names:

```bash
# 1) Cached malicious tarballs?
find ~/.cargo/registry/cache -type f \( \
  -name 'arrayref-0.3.10.crate' -o \
  -name 'internment-0.8.7.crate' -o \
  -name 'append-only-vec-0.1.9.crate' -o \
  -name 'proc-macro1-*.crate' -o \
  -name 'proc-macro-en-*.crate' -o \
  -name 'aovine-*.crate' -o \
  -name 'arone-*.crate' -o \
  -name 'aronenao-*.crate' -o \
  -name 'tinymember-*.crate' \
\) -print

# 2) Lockfiles that pinned bad versions?
rg -n 'name = "arrayref"|name = "internment"|name = "append-only-vec"|name = "proc-macro1"' \
  -A2 Cargo.lock **/Cargo.lock 2>/dev/null

# 3) Vendored trees?
rg -l 'proc-macro1|name = "arrayref"' vendor/ 2>/dev/null

# 4) Advisories on current locks (after updating advisory-db)
cargo audit
```

Windows equivalents:

```powershell
Get-ChildItem "$env:USERPROFILE\.cargo\registry\cache" -Recurse |
  Where-Object Name -match 'arrayref-0\.3\.10|proc-macro1|proc-macro-en|aovine|arone|aronenao|tinymember'

Get-ChildItem -Recurse -Filter Cargo.lock | Select-String -Pattern 'proc-macro1'
Get-ChildItem "$env:TEMP" -Filter 'rust-setup*' -Force
```

Interpretation, escalating severity:

| Finding | Meaning | Posture |
| --- | --- | --- |
| Nothing anywhere | Never resolved/downloaded the bad versions | Low risk; keep evidence anyway |
| Bad version **in a lockfile only** | Resolved but (maybe) never built | Exposure; fix locks, purge caches, review who built |
| Bad tarball **in cache/src** | Downloaded onto this host | Exposure at minimum; assume build happened |
| Dropped artifacts present (`/tmp/rust-setup`, VBS/ps1 trio, persistence dirs) | **Compromise** | Full IR, immediately |

### Step 2 — If a build ran during the window, rotate before you investigate

Order matters — the implant had an interactive channel:

1. **Cloud credentials** available to the user/runner (AWS/GCP/Azure keys, OIDC tokens).
2. **Source-control + registry tokens**: GitHub/GitLab PATs, crates.io/npm tokens, especially anything with publish rights.
3. **SSH keys and GPG/signing keys** on the host; treat agent-forwarded keys as exposed.
4. **Browser-stored secrets** on interactive machines (passwords, cookies, wallets) — the stealer targeted them directly.
5. CI secrets cached on runners that built during the window (environment variables, OIDC, deploy keys).

Then hunt for the persistence layer and C2 traffic:

```bash
# Linux
ls -la /tmp/rust-setup 2>/dev/null
systemctl list-unit-files | grep -viE '^systemd|^getty'   # odd custom units
ls -la ~/.config/AzureKits ~/.config/ServiceKit 2>/dev/null
find / -name 'MonoService*' -o -name 'MonoXpc*' 2>/dev/null
ss -tnp | grep '23.254.165.112'
journalctl --since '2026-08-20 07:00' --until '2026-08-20 12:00'
```

```powershell
# Windows
Get-ItemProperty 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Run'
Get-Process | Where-Object Path -like "$env:TEMP*"
Get-NetTCPConnection -RemoteAddress '23.254.165.112' -ErrorAction SilentlyContinue
```

```bash
# macOS
ls -la ~/Library/LaunchAgents/ | grep -viE 'com\.(apple|google)'
lsof -i @23.254.165.112
```

Network perimeter: block/monitor `23[.]254[.]165[.]112` on ports **9089** and **443** across egress logs and firewalls; correlate with the 07:11–09:25 UTC window on 2026-08-20.

### Step 3 — Recover cleanly

- Delete poisoned entries from every cache layer: `~/.cargo/registry/{cache,src}`, `vendor/` copies, CI cache stores (GitHub Actions caches keyed on lockfiles are easy to forget).
- Regenerate lockfiles **after** the malicious versions were deleted from the registry, then diff: any surprise appearance/disappearance of a crate is a finding.
- Rebuild artifacts (binaries, container images) on clean machines from clean locks; anything built during the window inherits suspicion.
- For CI platforms: rotate runner-scoped credentials, review workflow permissions, and consider ephemeral runners for anything touching release signing.

## 15) Hardening: map every control to a kill-chain step

Controls are cheapest to justify when you can name the step they stop. This table maps the whole incident to practical defenses:

| Attack step | Practical control |
| --- | --- |
| Stolen publish token | Short-lived tokens; 2FA; no long-lived API tokens on daily laptops; hardware keys where supported |
| Typosquat dependency | Review diffs that add new crates; flag lookalike names (`proc-macro1` vs `2`); automated similarity checks |
| Leaf crate gains first dep | Treat as a security review event; `cargo tree` diffs in CI on dependency changes |
| Yank → blind `cargo update` | Prefer locked CI (`--locked`); investigate yanks before upgrading; never automate yank-warning cleanup |
| `build.rs` network/exec | Network egress allowlists in CI; sandbox builds where possible; alert on build steps opening sockets |
| Cache survives deletion | Periodic cache purge after incidents; never assume registry delete = local delete |
| “Looks trusted” publish | `cargo-vet` / dependency review bots for high-assurance trees |

Concrete configurations worth adopting:

**Lock CI down** — refuse implicit re-resolution:

```bash
cargo build --locked          # fails if Cargo.lock would change
cargo test --locked
# and for maximum strictness in ephemeral environments:
CARGO_NET_OFFLINE=true cargo build --locked
```

**Gate dependencies with cargo-deny** — bans, advisory checks, and yank policy in one pass:

```toml
# deny.toml
[advisories]
version = 2
yanked = "deny"

[bans]
multiple-versions = "warn"
deny = [
  { name = "proc-macro1" },
  { name = "proc-macro-en" },
  { name = "aovine" },
  { name = "arone" },
  { name = "aronenao" },
  { name = "tinymember" },
]
```

```bash
cargo deny check advisories,bans
```

**Review dependencies like code** — [`cargo-vet`](https://mozilla.github.io/cargo-vet/) records audited revisions per crate so “someone looked at this” becomes a verifiable fact rather than folklore; `cargo-crev` offers crowd-sourced equivalents. For high-assurance trees, either beats eyeballing lockfile diffs.

**Sandbox the build** where your platform allows: containerized CI with no outbound network except an internal registry proxy/mirror; namespace-based sandboxes locally; egress logging on builder networks. The dropper needed the network at build time — deny that, and this entire campaign class degrades to noise.

On the registry side, the incident accelerated already-planned work: **trusted publishing** (OIDC-bound publishes instead of long-lived tokens), tighter account recovery, and long-standing discussions about constraining build-script capabilities. None of it changes your immediate posture; all of it shrinks the next window.

Pin when you need a belt:

```toml
arrayref = "=0.3.9"
```

(With the standard caveat: pins rot. Prefer vetted upgrades over frozen ones wherever you can afford the review cost.)

## 16) What failed, and what worked

**Failed for victims**

1. Long-lived crates.io publish credentials on a high-download crate  
2. No review when a leaf crate suddenly gained a dependency  
3. Blind trust in “consider updating — package is yanked”  
4. Unsandboxed build scripts allowed to use the network  
5. Local/CI caches outliving registry deletion  

**Worked for the ecosystem**

Fast report (private report within minutes of the weaponized publish, credited to Nextron Systems’ research team; full public writeup 39 minutes after the `arrayref` publish), coordinated deletions across registry/docs.rs/mirrors, unyank of good versions, account locks, and unusually complete public forensics — RustSec thread, StepSecurity, JFrog, and others reconstructing a kill chain almost entirely from an append-only metadata log, because the tarballs themselves were gone within hours.

That last point is worth dwelling on: the response was fast *and* transparent, and transparency is what lets an article like this exist three days later with verifiable numbers.

## 17) FAQ (wrong intuitions)

**“I never call `arrayref`.”**  
Doesn’t matter. Transitive dependency + `cargo build` is enough.

**“But it was in `[dependencies]`, not `[build-dependencies]` — so it shouldn’t run at build time.”**  
The distinction controls what code can *import* the crate, not whether the crate’s own `build.rs` executes. Cargo runs any dependency’s build script while building that dependency. See §5.

**“CI was green.”**  
By design. The dropper exited cleanly and detached the payload.

**“Nothing ran — I just opened my editor.”**  
rust-analyzer and similar tooling run check/build passes, which execute build scripts. Editor sessions count as builds.

**“The crate is deleted, so I’m fine.”**  
Only if your lockfiles and `~/.cargo` / `vendor/` never held the bad versions. Deletion does not scrub every laptop, mirror, or CI cache.

**“`cargo audit` is clean, so I’m fine.”**  
Necessary, not sufficient — see §12.

**“Yank means the bad code can’t run.”**  
Yank was used against *good* versions to push upgrades. Existing locks on good versions were not the bait; **updates** were.

**“The author went rogue.”**  
Public assessment: likely compromised credentials/machine, not a malicious maintainer. Still lock and rotate as if the *account* was hostile during the window.

**“I’m on macOS / Windows, so the Linux paths don’t apply.”**  
The dropper selected per-platform payloads — Windows got the PowerShell/VBS pair, macOS got its own binary. Only the *example paths* differ per OS; the exposure is cross-platform.

**“Vendoring protects me.”**  
Only from future registry changes. If you vendored during the window, your `vendor/` directory carries the malware indefinitely.

**“Wouldn’t docs.rs building it have raised alarms?”**  
docs.rs builds run in constrained environments and the whole lifecycle lasted ~86 minutes overnight UTC. Several poisoned versions likely built docs without visible incident — another reminder that “it built fine somewhere” is not evidence of safety.

**“Can’t the compiler detect malware?”**  
rustc compiles what Cargo hands it; build scripts are a documented feature granting intentional build-time execution. This is a trust-layer problem, and it needs trust-layer tools: locking, vetting, egress control, review culture.

## Bottom line

`arrayref` is a small, useful crate. On one morning in August 2026 it became a delivery truck for a build-time dropper — not because macros are unsafe, but because **Cargo runs dependency build scripts on your machine**, and because **yank + update** can be turned into social engineering.

Every defensive failure here was ordinary: an un-reviewed manifest line, a reflexive `cargo update`, a cache nobody purged, a token that lived too long. Every heroic save was also ordinary: one researcher who read a diff closely enough to distrust the word “macro” in a crate name, and responders who deleted, unyanked, and published IOCs within hours.

We checked today: clean `0.3.9` resolves and runs, has no `build.rs`, bad versions are gone from the registry, and `cargo audit` is quiet on a clean lockfile. The remaining work is boring and important: **audit caches and lockfiles for the short window when the registry was not clean**, and harden the publish/update path so the next 86 minutes hurt less.

## References

- [Supply chain attack on arrayref](https://blog.rust-lang.org/2026/08/20/supply-chain-attack-on-arrayref/) — Rust Blog (official postmortem, deletion timings)  
- [RUSTSEC-2026-0260](https://rustsec.org/advisories/RUSTSEC-2026-0260) — advisory for `arrayref` (download counts, affected ranges)  
- [RustSec advisory-db#3161](https://github.com/rustsec/advisory-db/issues/3161) — first technical report / IOCs, payload walk-through, detection script  
- [StepSecurity analysis](https://www.stepsecurity.io/blog/arrayref-rust-crate-supply-chain-attack) — yank audit-log cadence, dropper mechanics, runtime network capture  
- [JFrog Security Research](https://research.jfrog.com/post/arrayref-proc-macro1-crates-io/) — manifest-level diff analysis, spare-dropper crates, remediation guidance  
- Related: [Rust Claims, a Reality Check](/docs/articles/rust-claims-a-reality-check) · [How rustc compiles vs C++](/docs/articles/rustc-pipeline-vs-cpp-compilation-pipeline)
