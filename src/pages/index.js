import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import NewsletterModal from '@site/src/components/NewsletterModal'; // Import the modal component

import Heading from '@theme/Heading';
import styles from './index.module.css';

// Updated HomepageHeader to accept setModalOpen as a prop
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
          <Link className="button button--secondary button--lg" to="https://github.com/aabhinavg1/FixIt">
            GitHub
          </Link>
          {/* Subscribe button with emoji */}
          <button
            onClick={() => setModalOpen(true)} // This will now set the modal open
            className={clsx(styles.subscribeButton, 'button button--primary')}
          >
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility

  const handleModalClose = () => setModalOpen(false);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader setModalOpen={setModalOpen} /> {/* Pass setModalOpen here */}
      <main>
        <HomepageFeatures />
        {isModalOpen && <NewsletterModal onClose={handleModalClose} />} {/* Show the modal */}
      </main>
    </Layout>
  );
}
