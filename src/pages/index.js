import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { FaTwitter, FaYoutube, FaQuestionCircle, FaRocket } from 'react-icons/fa';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// 🔥 Pipeline Animation Sequence
const PIPELINE = [
  'Preprocessor (-E)',
  'Frontend (Parsing → AST)',
  'IR Generation (LLVM IR)',
  'Optimization (Passes)',
  'Codegen (IR → ASM)',
  'Assembler (-c)',
  'Linker (ld)',
  'Loader',
  'CPU / GPU Execution',
  'CompilerSutra',
];

const STATS = [
  { value: 'Deep', label: 'Concepts' },
  { value: 'Real', label: 'Engineering' },
  { value: 'Zero', label: 'Fluff' },
  { value: 'Free', label: 'Forever' },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔥 Progressive animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev === PIPELINE.length - 1) return prev; // stop at end
        return prev + 1;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* Background */}
      <div className={styles.bgOrbs} aria-hidden="true">
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>
      <div className={styles.gridLines} aria-hidden="true" />

      <div className={clsx('container', styles.headerOverlay)}>
        <div className={styles.badge}>🚀 Open Source · Free to Learn</div>

        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>

        {/* 🔥 Animated Pipeline */}
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          {PIPELINE.slice(0, currentIndex + 1).join(' → ')}
        </p>

        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.primaryButton)}
            to="/docs/llvm/intro-to-llvm"
          >
            <FaRocket style={{ marginRight: '8px' }} />
            Start Learning — It&apos;s Free
          </Link>

          <div className={styles.buttonGroup}>
            <Link
              to="https://compilersutra.quora.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(styles.iconButton, styles.quoraButton)}
            >
              <FaQuestionCircle />&nbsp;Ask Q
            </Link>
            <Link
              to="https://twitter.com/CompilerSutra"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(styles.iconButton, styles.twitterButton)}
            >
              <FaTwitter />&nbsp;Follow
            </Link>
            <Link
              to="https://www.youtube.com/@compilersutra"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(styles.iconButton, styles.youtubeButton)}
            >
              <FaYoutube />&nbsp;Subscribe
            </Link>
          </div>
        </div>

        <div className={styles.stats}>
          {STATS.map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CompilerSutra',
    url: 'https://www.compilersutra.com',
    description:
      'Master LLVM, MLIR, TVM and compiler development with structured tutorials, hands-on projects, and expert-backed lessons.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.compilersutra.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Layout
      title="CompilerSutra | LLVM, MLIR, TVM & Compiler Tutorials"
      description="Master LLVM, MLIR, TVM and compiler development with structured tutorials, hands-on projects, and expert-backed lessons. Free and open source."
    >
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <meta
          property="og:title"
          content="CompilerSutra | LLVM, MLIR, TVM & Compiler Tutorials"
        />
        <meta
          property="og:description"
          content="Master LLVM, MLIR, TVM and compiler development with structured tutorials and hands-on projects."
        />
        <meta
          name="twitter:title"
          content="CompilerSutra | LLVM, MLIR, TVM & Compiler Tutorials"
        />
        <meta
          name="twitter:description"
          content="Master LLVM, MLIR, TVM and compiler development. Free tutorials, projects, and community."
        />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}