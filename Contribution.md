# Contribution to CompilerSutra

Welcome to CompilerSutra. We're glad you're interested in contributing. This document provides a step-by-step guide to help you get started, contribute effectively, and become part of our developer community.

---

## Prerequisites

Before you begin, ensure you have the following:

* A GitHub account
* Basic understanding of Git & GitHub workflow
* Familiarity with one or more of these stacks: C++, Python, JavaScript, Linux, LLVM, etc.
* Node.js version 18.x or higher installed on your system

---

## Getting Started

1. **Fork the Repository**

   * Go to [CompilerSutra on GitHub](https://github.com/aabhinavg1/FixIt)
   * Click the `Fork` button to create your copy of the repository

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/<your-username>/FixIt.git
   cd FixIt
   ```
   - Go to /src/pages/newsletter.js and delete the file
   - Open the file /src/pages/index.js and do the following:
      1. Comment the lines:
      ```cpp
      //import NewsletterModal from '../newsletter_modal/NewsletterModal';
      //import NewsletterModal from './newsletter_modal_updated/NewsletterModal'
      ```
      ```cpp
      {/*isModalOpen && <NewsletterModal onClose={() => setModalOpen(false)} />*/}
      {/* Contribution message has been removed */}
      ```

3. **Create a New Branch**

   ```bash
   git checkout -b your-feature-name
   ```

4. **Make Your Changes**

   * Tackle an open issue or suggest a new improvement
   * Follow the existing code style and structure

5. **Commit Your Work**
   ```bash
   git add path/to/your/file
   git commit -m "Brief description of your change"
   ```

6. **Push to GitHub**

   ```bash
   git push origin your-feature-name
   ```

7. **Open a Pull Request (PR)**

   * Navigate to your fork on GitHub
   * Click "Compare & pull request"
   * Describe your changes clearly and submit the PR

---

## Cleaning Up After Your PR is Merged

After your pull request has been merged, you can clean up your local and remote branches with these commands:

```bash
# Switch back to main branch (or master)
git checkout main

# Pull the latest changes from upstream main branch
git pull upstream main

# Delete your feature branch locally
git branch -d your-feature-name

# Delete your feature branch from your GitHub fork
git push origin --delete your-feature-name
```

If you haven't set upstream remote yet, add it like this:

```bash
git remote add upstream https://github.com/aabhinavg1/FixIt.git
```

---

## Types of Contributions

* Feature Enhancements
* Bug Fixes
* Documentation improvements
* Unit tests and examples
* Internationalization
* DevOps / CI integrations

---

## Testing Your Code

Please test your code locally before submitting a PR. For backend or system-related projects, include test cases and outputs wherever applicable.

---

## Reviewing & Feedback

Once your PR is submitted:

* A maintainer will review your code
* You may receive comments or change requests
* Once approved, your PR will be merged into the main branch

---

## License Agreement

By contributing, you agree that your code will be licensed under the repository’s license.

---

## Join the Discussion

Have questions or suggestions?

* Open a GitHub issue
* Join the CompilerSutra discussions on our [YouTube](https://www.youtube.com/) or [website](https://compilersutra.com)

Thank you for your interest and contributions to CompilerSutra.