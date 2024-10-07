import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import NewsletterModal from '@site/src/components/NewsletterModal';
import MaintenancePopup from '@site/src/components/MaintenancePopup';
import { FaBell, FaTwitter } from 'react-icons/fa'; 
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader({ onNotifyClick }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/compilers/intro">
            Compiler Frameworks and Toolchains ⏱️
          </Link>
          <div className={styles.buttonContainer}>
            <button
              onClick={onNotifyClick}
              className={clsx(styles.bellButton, 'button button--secondary')}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <FaBell style={{ marginRight: '5px' }} />
              Notify
            </button>
            <Link 
              to="https://twitter.com/CompilerSutra" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={clsx(styles.twitterButton, 'button button--secondary')}
              style={{ display: 'flex', alignItems: 'center' }}
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
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(true);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader onNotifyClick={() => setModalOpen(true)} />
      <main>
        <HomepageFeatures />
        {isModalOpen && <NewsletterModal onClose={() => setModalOpen(false)} />}
        {isPopupVisible && <MaintenancePopup onClose={() => setPopupVisible(false)} />}
      </main>
    </Layout>
  );
}
