import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const CURRICULUM_ITEMS = [
  {
    title: 'Compiler Fundamentals',
    link: '/docs/tracks/compiler-fundamentals',
    description:
      'Start with phases, CFGs, frontend and backend roles, and how source code turns into executable programs.',
  },
  {
    title: 'LLVM and IR',
    link: '/docs/tracks/llvm-and-ir',
    description:
      'Go deeper into LLVM architecture, IR design, SSA form, dominance, analysis, and passes.',
  },
  {
    title: 'GPU Compilers',
    link: '/docs/tracks/gpu-compilers',
    description:
      'Learn heterogeneous execution, OpenCL, GPU performance concepts, and compiler-side optimization constraints.',
  },
  {
    title: 'ML Compilers',
    link: '/docs/tracks/ml-compilers',
    description:
      'Step into MLIR, TVM, lowering pipelines, and modern stacks used for AI workloads.',
  },
];

const RESOURCE_ITEMS = [
  {
    title: 'Start Here',
    link: '/docs/start-here',
    description: 'Use the roadmap if you want the site to choose your sequence.',
  },
  {
    title: 'Tools',
    link: '/docs/tools',
    description: 'Inspect workflows, visualizers, and benchmarking support material.',
  },
  {
    title: 'Labs',
    link: '/docs/labs',
    description: 'Practice concepts through repeatable, hands-on compiler exercises.',
  },
  {
    title: 'Articles',
    link: '/docs/articles/compiler_directive',
    description: 'Read deeper performance and tooling writeups once you have the basics.',
  },
];

export default function Curriculum() {
  return (
    <section className={styles.sectionAlt} id="curriculum">
      <div className={styles.sectionShell}>
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.eyebrow}>Curriculum</p>
            <h2 className={styles.title}>Pick a track, then reinforce it with practice</h2>
          </div>
          <p className={styles.subtitle}>
            The homepage now separates core learning tracks from operational
            resources so readers can understand both the curriculum and the
            supporting workflow at a glance.
          </p>
        </div>

        <div className={styles.dualPanel}>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <p className={styles.panelLabel}>Core tracks</p>
              <h3 className={styles.panelTitle}>Primary learning paths</h3>
            </div>
            <div className={styles.curriculumGrid}>
              {CURRICULUM_ITEMS.map((item) => (
                <Link key={item.title} to={item.link} className={styles.curriculumCard}>
                  <h3 className={styles.curriculumTitle}>{item.title}</h3>
                  <p className={styles.curriculumText}>{item.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <p className={styles.panelLabel}>Support material</p>
              <h3 className={styles.panelTitle}>Resources that keep momentum</h3>
            </div>
            <div className={styles.resourceGrid}>
              {RESOURCE_ITEMS.map((item) => (
                <Link key={item.title} to={item.link} className={styles.resourceCard}>
                  <h3 className={styles.curriculumTitle}>{item.title}</h3>
                  <p className={styles.curriculumText}>{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.actionGrid}>
          <div className={styles.actionCard}>
            <p className={styles.panelLabel}>Support the platform</p>
            <h3 className={styles.actionTitle}>Keep the technical material free and improving</h3>
            <p className={styles.actionText}>
              Support helps expand the roadmap, deepen the compiler content, and
              keep practical material available without gating the core learning path.
            </p>
            <div className={styles.actionButtons}>
              <Link className={styles.primaryAction} to="/learnmore/">
                Explore support options
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
            <p className={styles.panelLabel}>Contribute</p>
            <h3 className={styles.actionTitle}>Improve the docs, tracks, and learning workflow</h3>
            <p className={styles.actionText}>
              Contributions can sharpen explanations, fix issues, add tutorials,
              and broaden the compiler engineering material directly in the repo.
            </p>
            <div className={styles.actionButtons}>
              <a
                className={styles.primaryAction}
                href="https://github.com/aabhinavg1/FixIt"
                target="_blank"
                rel="noopener noreferrer"
              >
                View repository
              </a>
              <Link className={styles.secondaryAction} to="/docs/tracks">
                Browse all tracks
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
