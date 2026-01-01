#!/usr/bin/env python3
import os
import subprocess
import sys
import re

def log(msg: str):
    print(f"[CI][COMMIT_POLICY] {msg}")

def run(cmd: str) -> str:
    log(f"Running command: {cmd}")
    return subprocess.check_output(cmd, shell=True, text=True).strip()

def get_base_commit() -> str:
    """
    Determine a safe base commit:
    - If this is the first commit, return the root commit
    - Otherwise, return HEAD~1
    """
    try:
        base = run("git rev-parse HEAD~1")
        log(f"Using base commit HEAD~1: {base}")
        return base
    except subprocess.CalledProcessError:
        base = run("git rev-list --max-parents=0 HEAD")
        log(f"Using root commit as base: {base}")
        return base

def get_commit_log(docs_changed: bool) -> str:
    if docs_changed:
        base = get_base_commit()
        log("Docs changed: reading commits from base to HEAD")
        return run(f"git log {base}..HEAD --no-merges --pretty=format:'---%n%B'")
    else:
        log("No docs changed: reading latest commit only")
        return run("git log -1 --no-merges --pretty=format:'---%n%B'")

def parse_commit_log(log_text: str):
    link = None
    nodoc = False

    log("Parsing commit messages")

    for line in log_text.splitlines():
        line = line.strip()

        if not link:
            m = re.match(r'(?i)^link:\s*(.+)$', line)
            if m:
                link = m.group(1).strip()
                log(f"Found link: {link}")

        if re.match(r'(?i)^nodoc\b', line):
            nodoc = True
            log("Found nodoc marker")

    return link, nodoc

def write_output(name: str, value: str):
    output_file = os.environ.get("GITHUB_OUTPUT")
    if not output_file:
        log("GITHUB_OUTPUT not set, skipping output export")
        return
    with open(output_file, "a") as f:
        f.write(f"{name}={value}\n")

def main():
    docs_changed = os.environ.get("DOCS_CHANGED") == "true"
    log(f"DOCS_CHANGED={docs_changed}")

    commit_log = get_commit_log(docs_changed)

    print("\n===== COMMIT LOG READ BY CI =====")
    print(commit_log)
    print("================================\n")

    link, nodoc = parse_commit_log(commit_log)

    write_output("link", link or "")
    write_output("nodoc", "true" if nodoc else "")

    if docs_changed and not link:
        log("Policy violation: docs changed but missing 'link:'")
        sys.exit(1)

    if not docs_changed and not nodoc:
        log("Policy violation: no docs changed but missing 'nodoc'")
        sys.exit(1)

    log("Commit message policy passed")

if __name__ == "__main__":
    main()
