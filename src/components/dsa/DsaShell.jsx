import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { FaArrowRight } from 'react-icons/fa';
import styles from './DsaShell.module.css';

const GOOGLE_DOC_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSebP1JfLFDp0ckTxOhODKPNVeI1e21rUqMJ0fbBwJoaa-i4Yw/viewform';

export default function DsaShell({
  title,
  description,
  eyebrow = 'DSA Academy',
  lead,
  activePath = '/dsa',
  children,
  metaTitle,
  heroPanel,
  heroActions,
  noNavbar = false,
  noFooter = false,
  useLayout = true,
}) {
  const content = (
    <>
      <Head>
        <meta name="theme-color" content="#f6f9fd" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <div className={styles.heroGrid} style={heroPanel ? undefined : { gridTemplateColumns: '1fr' }}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>{eyebrow}</p>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.lead}>{lead || description}</p>

                <div className={styles.heroActions}>
                  {heroActions || (
                    <>
                      <Link className={styles.primaryAction} to="/dsa/roadmap">
                        Open roadmap
                        <FaArrowRight aria-hidden="true" />
                      </Link>
                      <Link className={styles.secondaryAction} to="/dsa/foundations">
                        Start with foundations
                      </Link>
                      <Link className={styles.supportAction} to="/support">
                        Support Us
                      </Link>
                      <a className={styles.docAction} href={GOOGLE_DOC_URL} target="_blank" rel="noopener noreferrer">
                        Get regular updates
                      </a>
                    </>
                  )}
                </div>

              </div>

              {heroPanel ? (
                <aside className={styles.heroPanel} aria-label="DSA overview">
                  {heroPanel}
                </aside>
              ) : null}
            </div>

          </div>
        </section>

        {children}
      </main>
    </>
  );

  if (!useLayout) {
    return content;
  }

  return (
    <Layout title={metaTitle || title} description={description} noNavbar={noNavbar} noFooter={noFooter}>
      {content}
    </Layout>
  );
}
