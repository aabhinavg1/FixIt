# Duplicate Question Checker

A Python script to detect and report duplicate questions in a `.md` (Markdown) file.

---

## Requirements

- Python 3.6 or higher
- No external Python packages needed

Check your Python version:

    python --version

---

## File Structure

    .
    ├── check_duplicates.py         # Main script
    ├── your_questions.md           # Input file (you create this)
    ├── duplicate_questions.txt     # Output file with duplicates (auto-generated)
    ├── README.md                   # This file
    └── requirements.txt            # Dependencies info (none needed)

---

## Input File Format

Each question must begin with `question=` followed by the text.

Example:

    question=1. What is Python?
    Answer: Python is a high-level programming language.

    question=2. What is Python?
    Answer: It's used for web, data science, etc.

---

## How to Run

From the terminal:

    python check_duplicates.py your_questions.md

The script will:
- Normalize questions (remove numbers, punctuation, casing)
- Check for duplicates
- Output the result to `duplicate_questions.txt`

---

## Output Example (`duplicate_questions.txt`)

    --- DUPLICATE QUESTION ---
    question=1. What is Python?
    Answer: Python is a programming language.

    question=2. What is Python?
    Answer: It's used for web, data science, etc.
    --------------------------

---

## Troubleshooting

| Issue                             | Solution                                      |
|----------------------------------|-----------------------------------------------|
| ❌ Please provide a .md file     | Make sure your input file ends with `.md`     |
| No `duplicate_questions.txt`     | No duplicates were found                      |
| `python: command not found`      | Install Python from https://python.org        |

---

## Author

Your Name Here  
[GitHub](#) | [LinkedIn](#)
