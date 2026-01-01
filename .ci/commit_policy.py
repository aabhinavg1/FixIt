#!/usr/bin/env python3
import os
import subprocess
import sys
import re

def run(cmd):
    return subprocess.check_output(cmd, shell=True, text=True).strip()

def get_commit_log(docs_changed: bool) -> str:
    if docs_changed:
        return run("git log --no-merges -10 --pretty=format:'---%n%B'")
    else:
        return run("git log -1 --no-merges --pretty=format:'---%n%B'")

def parse_commit_log(log: str):
    link = None
    nodoc_found = False

    for line in log.splitlines():
        line = line.strip()

        if not link:
            m = re.match(r'(?i)^link:\s*(.+)$', line)
            if m:
                link = m.group(1).strip()

        if re.match(r'(?i)^nodoc\b', line):
            nodoc_found = True

    return link, nodoc_found

def write_output(name, value):
    output_file = os.environ["GITHUB_OUTPUT"]
    with open(output_file, "a") as f:
        f.write(f"{name}={value}\n")

def main():
    docs_changed = os.environ.get("DOCS_CHANGED") == "true"

    log = get_commit_log(docs_changed)
    print("\n===== COMMIT LOG READ BY CI =====")
    print(log)
    print("================================\n")

    link, nodoc = parse_commit_log(log)

    write_output("link", link or "")
    write_output("nodoc", "true" if nodoc else "")

    # Enforce policy
    if docs_changed and not link:
        print("❌ Docs changed but missing 'link:' in commit message")
        sys.exit(1)

    if not docs_changed and not nodoc:
        print("❌ No docs changed but missing 'nodoc' marker")
        sys.exit(1)

    print("✅ Commit message policy passed")

if __name__ == "__main__":
    main()
