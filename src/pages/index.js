import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
//import NewsletterModal from '../newsletter_modal/NewsletterModal';
import NewsletterModal from './newsletter_modal_updated/NewsletterModal'
import { FaBell, FaTwitter } from 'react-icons/fa';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import AdBanner from '../components/AdBanner';

function HomepageHeader({ onNotifyClick }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.customHero)}>
      <div className={styles.heroSlides}></div>
      <div className={styles.overlayBox}></div>

      <div className={clsx('container', styles.headerContainer)}>
        <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>

        <div className={clsx(styles.buttons, styles.responsiveButtonContainer)}>
          
          <div className={clsx(styles.buttonContainer, styles.responsiveButtonGroup)}>
            <button
              onClick={onNotifyClick}
              className={clsx(styles.bellButton, 'button button--secondary')}
            >
              <FaBell className={styles.bellIcon} style={{ marginRight: '5px' }} />
              Notify
            </button>
            <Link
            style={{ color: '#fff' }}
              to="https://twitter.com/CompilerSutra"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(styles.twitterButton, 'button button--secondary')}
            >
              <FaTwitter className={styles.twitterIcon} style={{ marginRight: '5px', color:'#fff' }} />
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
  const [isModalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    if (!isModalOpen) {
      setModalOpen(true);
    }
  }, []);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader onNotifyClick={() => setModalOpen(true)} />
      <main className={styles.mainContent}>
        <HomepageFeatures />
        {isModalOpen && <NewsletterModal onClose={() => setModalOpen(false)} />}
        {/* Contribution message has been removed */}
        <AdBanner />
      </main>
    </Layout>
  );
}
