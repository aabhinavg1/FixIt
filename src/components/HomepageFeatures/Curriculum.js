import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const CURRICULUM_ITEMS = [
  {
    title: 'Compiler Fundamentals',
    link: '/docs/compilers/compiler',
    description: 'Start with compiler phases, IR, CFGs, and how code becomes executable.',
  },
  {
    title: 'LLVM Curriculum',
    link: '/docs/llvm/intro-to-llvm',
    description: 'Go deeper into LLVM architecture, IR, SSA, passes, and toolchain internals.',
  },
  {
    title: 'LLVM IR',
    link: '/docs/llvm/llvm_ir/intro_to_llvm_ir',
    description: 'Understand the representation modern optimizers actually reason about.',
  },
  {
    title: 'Pass Development',
    link: '/docs/llvm/Intermediate/What_Is_LLVM_Passes',
    description: 'Learn how LLVM transformations and analyses are structured in practice.',
  },
  {
    title: 'GPU Programming',
    link: '/docs/gpu/gpu_programming/gpu_programming_toc',
    description: 'Build intuition for parallel hardware, memory behavior, and GPU execution.',
  },
  {
    title: 'OpenCL',
    link: '/docs/gpu/opencl',
    description: 'Bridge systems-level thinking with real heterogeneous programming workflows.',
  },
  {
    title: 'MLIR and TVM',
    link: '/docs/MLIR/intro',
    description: 'Move toward modern compiler stacks used in AI and domain-specific systems.',
  },
  {
    title: 'Projects and Practice',
    link: '/docs/project/',
    description: 'Use projects to turn conceptual understanding into repeatable engineering skill.',
  },
];

export default function Curriculum() {
  return (
    <section className={styles.sectionAlt} id="curriculum">
      <div className={styles.sectionShell}>
        <p className={styles.eyebrow}>Curriculum</p>
        <h2 className={styles.title}>Choose a Track and Keep Going</h2>
        <p className={styles.subtitle}>
          The homepage should help a reader choose a direction quickly. These
          tracks surface the strongest parts of the site instead of burying them.
        </p>

        <div className={styles.curriculumGrid}>
          {CURRICULUM_ITEMS.map((item) => (
            <Link key={item.title} to={item.link} className={styles.curriculumCard}>
              <h3 className={styles.curriculumTitle}>{item.title}</h3>
              <p className={styles.curriculumText}>{item.description}</p>
            </Link>
          ))}
        </div>

        <div className={styles.actionGrid}>
          <div className={styles.actionCard}>
            <h3 className={styles.actionTitle}>Support CompilerSutra</h3>
            <p className={styles.actionText}>
              Keep the material free and growing while making the learning path
              better for systems and compiler engineers.
            </p>
            <div className={styles.actionButtons}>
              <Link className={styles.primaryAction} to="/learnmore/">
                Explore Support Options
              </Link>
              <a
                className={styles.secondaryAction}
                href="https://github.com/sponsors/aabhinavg1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sponsor on GitHub
              </a>
            </div>
          </div>

          <div className={styles.actionCard}>
            <h3 className={styles.actionTitle}>Contribute to the Site</h3>
            <p className={styles.actionText}>
              Improve docs, fix broken links, add tutorials, or expand the LLVM
              and compiler curriculum directly in the repository.
            </p>
            <div className={styles.actionButtons}>
              <a
                className={styles.primaryAction}
                href="https://github.com/aabhinavg1/FixIt"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </a>
              <Link className={styles.secondaryAction} to="/docs/articles">
                Browse More Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
