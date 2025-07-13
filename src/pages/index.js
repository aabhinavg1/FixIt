import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { FaTwitter, FaYoutube, FaQuestionCircle } from 'react-icons/fa';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import AdBanner from '../components/AdBanner';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const taglines = [
    "Master Compilers. Build the Future.",
    "From Source Code to Optimization.",
    "LLVM, MLIR, TVM – All in One Place.",
  ];
  const [currentTagline, setCurrentTagline] = useState(taglines[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline(prev => {
        const nextIndex = (taglines.indexOf(prev) + 1) % taglines.length;
        return taglines[nextIndex];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.videoBackground}>
        <iframe
          className={styles.videoIframe}
          src="https://www.youtube.com/embed/8ovo0319fwY?autoplay=1&mute=1&controls=0&loop=1&playlist=8ovo0319fwY&modestbranding=1&showinfo=0&rel=0"
          title="CompilerSutra Intro Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      <div className={clsx('container', styles.headerOverlay)}>
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          {currentTagline}
        </p>

        <div className={clsx(styles.buttons, styles.responsiveButtonContainer)}>
          <Link
            className={clsx('button button--secondary button--lg', styles.primaryButton)}
            to="/docs/llvm/intro-to-llvm"
          >
            Compiler Frameworks and Toolchains ⏱️
          </Link>

          <div className={clsx(styles.buttonContainer, styles.responsiveButtonGroup)}>
            <Link
              to="https://compilersutra.quora.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(styles.askButton, 'button button--secondary')}
            >
              <FaQuestionCircle style={{ marginRight: '6px' }} />
              Ask Q
            </Link>
            <Link
              to="https://twitter.com/CompilerSutra"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(styles.twitterButton, 'button button--secondary')}
            >
              <FaTwitter style={{ marginRight: '6px' }} />
              Follow
            </Link>
            <Link
              to="https://www.youtube.com/@compilersutra"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(styles.youtubeButton, 'button button--secondary')}
            >
              <FaYoutube style={{ marginRight: '6px' }} />
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Master LLVM, MLIR, TVM and more — CompilerSutra helps you build real-world compilers and toolchains."
    >
      <HomepageHeader />
      <main className={styles.mainContent}>
        <HomepageFeatures />
        <AdBanner />
      </main>
    </Layout>
  );
}
