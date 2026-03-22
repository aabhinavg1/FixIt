import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FEATURES = [
  {
    icon: '01',
    title: 'Structured Learning Path',
    description:
      'Move from compiler basics to LLVM, MLIR, GPU programming, and optimization with a connected roadmap instead of random tutorials.',
  },
  {
    icon: '02',
    title: 'Hands-On Engineering',
    description:
      'Learn through LLVM passes, IR inspection, toolchain workflows, and systems-level examples that map to real compiler work.',
  },
  {
    icon: '03',
    title: 'Built for Serious Learners',
    description:
      'The focus is depth, clarity, and practical reasoning, not shallow summaries or generic interview-style fluff.',
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="why-compilersutra">
      <div className={styles.sectionShell}>
        <p className={styles.eyebrow}>Why CompilerSutra</p>
        <h2 className={styles.title}>A Home Page That Points You Somewhere Real</h2>
        <p className={styles.subtitle}>
          CompilerSutra is built around one idea: help developers understand how
          systems really work, from source code to optimized execution.
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
          <Link className={styles.secondaryLink} to="/docs/llvm/intro-to-llvm">
            Explore LLVM Curriculum
          </Link>
          <Link className={styles.secondaryLink} to="/docs/compilers/compiler">
            Start with Compiler Basics
          </Link>
          <Link className={styles.secondaryLink} to="/docs/gpu/gpu_programming/gpu_programming_toc">
            Enter GPU Programming
          </Link>
        </div>
      </div>
    </section>
  );
}
