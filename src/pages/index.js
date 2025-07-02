import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import NewsletterModal from '../newsletter_modal/NewsletterModal'; // Already removed
import { FaBell, FaTwitter } from 'react-icons/fa';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader({ onNotifyClick }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx("container", styles.headerContainer)}>
        <Heading as="h1" className={clsx("hero__title", styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={clsx(styles.buttons, styles.responsiveButtonContainer)}>
          <Link className={clsx("button button--secondary button--lg", styles.primaryButton)} to="/docs/llvm/intro-to-llvm">
            Compiler Frameworks and Toolchains ⏱️
          </Link>
          <div className={clsx(styles.buttonContainer, styles.responsiveButtonGroup)}>
            <button
              onClick={onNotifyClick}
              className={clsx(styles.bellButton, 'button button--secondary')}
            >
              <FaBell style={{ marginRight: '5px' }} />
              Notify
            </button>
            <Link 
              to="https://twitter.com/CompilerSutra" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={clsx(styles.twitterButton, 'button button--secondary')}
            >
              <FaTwitter style={{ marginRight: '5px' }} />
              Follow
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [isModalOpen, setModalOpen] = useState(false); // No modal now

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader onNotifyClick={() => setModalOpen(true)} />
      <main className={styles.mainContent}>
        <HomepageFeatures />
        {/* NewsletterModal removed */}
      </main>
    </Layout>
  );
}
