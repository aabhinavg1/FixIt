import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FEATURES = [
  {
    icon: '01',
    title: 'Roadmap First',
    description:
      'Move from compiler basics to LLVM, MLIR, GPU compiler work, and optimization through a clear start-here flow instead of random browsing.',
  },
  {
    icon: '02',
    title: 'Tools and Labs',
    description:
      'Use tools, benchmark artifacts, LLVM workflows, and guided labs to turn the material into practical engineering skill.',
  },
  {
    icon: '03',
    title: 'Built for Real Compiler Work',
    description:
      'The emphasis is on IR, passes, optimization behavior, GPU systems, and low-level reasoning instead of generic course-site filler.',
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="why-compilersutra">
      <div className={styles.sectionShell}>
        <p className={styles.eyebrow}>Why CompilerSutra</p>
        <h2 className={styles.title}>A Technical Platform With an Actual Path</h2>
        <p className={styles.subtitle}>
          CompilerSutra should make the next step obvious: start with the
          roadmap, go deeper through a track, and then reinforce the concepts
          through tools, labs, and projects.
        </p>

        <div className={styles.cardGrid}>
          {FEATURES.map((feature) => (
            <article key={feature.title} className={styles.card}>
              <span className={styles.cardIndex}>{feature.icon}</span>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardText}>{feature.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.linkRow}>
          <Link className={styles.secondaryLink} to="/docs/start-here">
            Open Start Here
          </Link>
          <Link className={styles.secondaryLink} to="/docs/tools">
            Explore Tools
          </Link>
          <Link className={styles.secondaryLink} to="/docs/labs">
            Browse Labs
          </Link>
        </div>
      </div>
    </section>
  );
}
