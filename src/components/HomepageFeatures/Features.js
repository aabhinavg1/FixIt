import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FEATURES = [
  {
    kicker: 'Structured learning',
    title: 'Roadmap before rabbit holes',
    description:
      'The site routes readers from fundamentals into specialized compiler work instead of forcing them to guess the right order.',
  },
  {
    kicker: 'Practical depth',
    title: 'Docs tied to tools and labs',
    description:
      'Theory is reinforced with workflows, benchmark artifacts, and hands-on exercises so concepts translate into engineering judgment.',
  },
  {
    kicker: 'Real technical focus',
    title: 'Built around IR, optimization, and hardware behavior',
    description:
      'The emphasis stays on compiler realities like passes, SSA, GPU execution, and low-level reasoning rather than generic bootcamp content.',
  },
];

const QUICK_LINKS = [
  { label: 'Start Here', to: '/docs/start-here' },
  { label: 'Tracks', to: '/docs/tracks' },
  { label: 'Tools', to: '/docs/tools' },
  { label: 'Labs', to: '/docs/labs' },
];

export default function Features() {
  return (
    <section className={styles.section} id="why-compilersutra">
      <div className={styles.sectionShell}>
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.eyebrow}>Why CompilerSutra</p>
            <h2 className={styles.title}>A docs platform that behaves like a guided technical product</h2>
          </div>
          <p className={styles.subtitle}>
            Good compiler material should not bury the path. The landing page
            now makes the next move obvious, then the rest of the homepage keeps
            reinforcing that structure.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {FEATURES.map((feature, index) => (
            <article key={feature.title} className={styles.card}>
              <span className={styles.cardIndex}>0{index + 1}</span>
              <p className={styles.cardKicker}>{feature.kicker}</p>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardText}>{feature.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.linkRow}>
          {QUICK_LINKS.map((link) => (
            <Link key={link.label} className={styles.secondaryLink} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
