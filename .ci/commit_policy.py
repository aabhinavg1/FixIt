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

def get_commit_log(base: str, head: str, docs_changed: bool) -> str:
    if docs_changed:
        log("Docs changed: reading commit messages between base and head")
        cmd = f"git log {base}..{head} --no-merges --pretty=format:'---%n%B'"
    else:
        log("No docs changed: reading latest commit message only")
        cmd = "git log -1 --no-merges --pretty=format:'---%n%B'"

    return run(cmd)

def parse_commit_log(log_text: str):
    link = None
    nodoc = False

    log("Parsing commit messages")

    for line in log_text.splitlines():
        line = line.strip()

        if not link:
            match = re.match(r'(?i)^link:\s*(.+)$', line)
            if match:
                link = match.group(1).strip()
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
    base = os.environ.get("GITHUB_EVENT_BEFORE")
    head = os.environ.get("GITHUB_SHA")

    log(f"DOCS_CHANGED={docs_changed}")
    log(f"BASE={base}")
    log(f"HEAD={head}")

    if not base or not head:
        log("Missing BASE or HEAD commit information")
        sys.exit(1)

    commit_log = get_commit_log(base, head, docs_changed)

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
