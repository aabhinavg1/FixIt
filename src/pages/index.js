import React, { lazy, Suspense } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { FaTwitter, FaYoutube, FaQuestionCircle, FaRocket } from 'react-icons/fa';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const HomepageFeatures = lazy(() => import('@site/src/components/HomepageFeatures'));

const STATS = [
  { value: '4', label: 'Core Tracks' },
  { value: 'LLVM', label: 'IR Depth' },
  { value: 'GPU', label: 'Compiler Path' },
  { value: 'Free', label: 'Learning Core' },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.bgOrbs} aria-hidden="true">
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>
      <div className={styles.gridLines} aria-hidden="true" />

      <div className={clsx('container', styles.headerOverlay)}>
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>

        <div className={styles.badge}>Compiler Engineering · LLVM · GPU · Systems</div>

        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          Learn compiler engineering through structured tracks, practical docs,
          LLVM and IR deep dives, GPU compiler material, and hands-on labs.
        </p>

        <p className={styles.heroLead}>
          Start with the roadmap, pick a track, then move into tools, labs, and
          benchmark-driven articles instead of browsing the docs tree blindly.
        </p>

        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.primaryButton)}
            to="/docs/start-here"
          >
            <FaRocket style={{ marginRight: '8px' }} />
            Start the roadmap
          </Link>

          <div className={styles.buttonGroup}>
            <Link
              to="/docs/tracks/llvm-and-ir"
              className={clsx(styles.iconButton, styles.docsButton)}
            >
              LLVM and IR
            </Link>
            <Link
              to="/docs/tracks/gpu-compilers"
              className={clsx(styles.iconButton, styles.docsButton)}
            >
              GPU Compilers
            </Link>
            <Link
              to="/docs/tools"
              className={clsx(styles.iconButton, styles.docsButton)}
            >
              Tools
            </Link>
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
  const pageUrl = 'https://www.compilersutra.com/';
  const socialImage = 'https://www.compilersutra.com/img/docusaurus-social-card.jpg';
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'CompilerSutra',
    url: pageUrl,
    description:
      'Master LLVM, MLIR, TVM and compiler development with structured tutorials, hands-on projects, and expert-backed lessons.',
    about: [
      'LLVM',
      'MLIR',
      'TVM',
      'Compiler Design',
      'GPU Programming',
      'Systems Programming',
    ],
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: socialImage,
    },
  };

  return (
    <Layout
      title="CompilerSutra | LLVM, MLIR, TVM & Compiler Tutorials"
      description="Learn compiler engineering through roadmaps, LLVM and IR tracks, GPU compiler tutorials, tools, labs, and benchmark-driven articles."
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
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="CompilerSutra home page preview" />
        <meta
          name="twitter:title"
          content="CompilerSutra | LLVM, MLIR, TVM & Compiler Tutorials"
        />
        <meta
          name="twitter:description"
          content="Master LLVM, MLIR, TVM and compiler development. Free tutorials, projects, and community."
        />
        <meta name="twitter:image" content={socialImage} />
        <meta name="twitter:image:alt" content="CompilerSutra home page preview" />
      </Head>
      <HomepageHeader />
      <main>
        <Suspense fallback={null}>
          <HomepageFeatures />
        </Suspense>
      </main>
    </Layout>
  );
}
