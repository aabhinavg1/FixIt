import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import NewsletterModal from '@site/src/components/NewsletterModal'; // Import the modal component
import { FaBell, FaTwitter } from 'react-icons/fa'; // Import icons

import Heading from '@theme/Heading';
import styles from './index.module.css';
import MaintenancePopup from '@site/src/components/MaintenancePopup'; // Import the maintenance popup

function HomepageHeader({ setModalOpen }) {
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
              onClick={() => setModalOpen(true)}
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
  const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility
  const [isPopupVisible, setPopupVisible] = useState(true); // State for popup visibility

  const handleModalClose = () => setModalOpen(false);
  const handlePopupClose = () => setPopupVisible(false); // Close the popup

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader setModalOpen={setModalOpen} />
      <main>
        <HomepageFeatures />
        {isModalOpen && <NewsletterModal onClose={handleModalClose} />}
        {isPopupVisible && <MaintenancePopup onClose={handlePopupClose} />} {/* Show the popup */}
      </main>
    </Layout>
  );
}
