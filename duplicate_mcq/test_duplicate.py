import sys
import re
from collections import defaultdict

def clean_question(line):
    line = line.strip()[len("question="):].strip()
    line = line.strip('"').strip("'")
    line = re.sub(r'^\d+\)\.?\s*', '', line)
    normalized = line.strip().lower()
    print(f"[LOG] Normalized question: '{normalized}'")
    return normalized

def extract_questions(file_path):
    question_map = defaultdict(list)
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    print(f"[INFO] Reading from file: {file_path}")
    for i, line in enumerate(lines, 1):
        line = line.strip()
        if line.startswith("question="):
            print(f"[DEBUG] Line {i}: Extracting question -> {line}")
            cleaned = clean_question(line)
            question_block = [line]

            # Collect following lines if they are answers or related content (until next question or empty)
            j = i
            while j < len(lines) and not lines[j].strip().startswith("question="):
                if lines[j].strip() != '':
                    question_block.append(lines[j].strip())
                j += 1

            question_map[cleaned].append(question_block)
    
    print(f"[INFO] Total questions found: {len(question_map)}")
    return question_map

def report_duplicates(question_map):
    duplicates_found = False
    with open("duplicate_questions.txt", "w", encoding='utf-8') as f:
        for question, entries in question_map.items():
            if len(entries) > 1:
                duplicates_found = True
                f.write(f"--- DUPLICATE QUESTION ---\n")
                for block in entries:
                    f.write("\n".join(block) + "\n\n")
                f.write("--------------------------\n\n")

    print("[INFO] Checking for duplicate questions...")
    if duplicates_found:
        print("❌ Duplicate questions found. See 'duplicate_questions.txt' for details.")
    else:
        print("✅ No duplicate questions found.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python check_duplicates.py <file.md>")
        sys.exit(1)

    file_path = sys.argv[1]
    if not file_path.endswith(".md"):
        print("❌ Error: Please provide a .md (Markdown) file.")
        sys.exit(1)

    question_map = extract_questions(file_path)
    report_duplicates(question_map)
