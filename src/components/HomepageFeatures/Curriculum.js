import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const CURRICULUM_ITEMS = [
  {
    title: 'Compiler Fundamentals',
    link: '/docs/tracks/compiler-fundamentals',
    description: 'Start with compiler phases, IR, CFGs, frontend and backend responsibilities, and how code becomes executable.',
  },
  {
    title: 'LLVM and IR',
    link: '/docs/tracks/llvm-and-ir',
    description: 'Go deeper into LLVM architecture, IR, SSA, dominance, passes, and toolchain internals.',
  },
  {
    title: 'GPU Compilers',
    link: '/docs/tracks/gpu-compilers',
    description: 'Learn GPU execution, OpenCL, heterogeneous programming, and compiler-side performance reasoning.',
  },
  {
    title: 'ML Compilers',
    link: '/docs/tracks/ml-compilers',
    description: 'Move into MLIR, TVM, staged lowering, and modern compiler stacks used for AI workloads.',
  },
  {
    title: 'Start Here',
    link: '/docs/start-here',
    description: 'Use the roadmap to choose the right entry path and move through the platform in a deliberate sequence.',
  },
  {
    title: 'Tools',
    link: '/docs/tools',
    description: 'Inspect IR, compare optimizations, visualize graphs, and browse benchmark artifacts with purpose-built tooling.',
  },
  {
    title: 'Labs',
    link: '/docs/labs',
    description: 'Turn core concepts into repeatable engineering skill through practical compiler and optimization exercises.',
  },
];

export default function Curriculum() {
  return (
    <section className={styles.sectionAlt} id="curriculum">
      <div className={styles.sectionShell}>
        <p className={styles.eyebrow}>Curriculum</p>
        <h2 className={styles.title}>Choose a Track and Keep Moving</h2>
        <p className={styles.subtitle}>
          The core job of the homepage is to route readers into a product
          structure: roadmap, tracks, tools, labs, and then deeper articles.
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
