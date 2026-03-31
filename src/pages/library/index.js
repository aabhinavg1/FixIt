import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from '../reaserchpaper.module.css';
import { getLibraryOverviewStats, getLibraryPapersByTopic, LIBRARY_TOPICS } from '@site/src/data/library';
import TopicShelfCard from '@site/src/components/library/TopicShelfCard';

export default function LibraryPage() {
  const { topicCount, totalPaperCount } = getLibraryOverviewStats();

  return (
    <Layout
      title="Library"
      description="Browse the CompilerSutra library by topic and jump into papers, slides, and internal learning material."
    >
      <Head>
        <meta property="og:title" content="CompilerSutra Library" />
        <meta
          property="og:description"
          content="Browse the CompilerSutra library by topic and enter a premium reading flow."
        />
      </Head>

      <main className={styles.page}>
        <div className={styles.shell}>
          <section className={`${styles.hero} ${styles.masterHero} ${styles.libraryLanding}`}>
            <p className={styles.eyebrow}>Library</p>
            <h1 className={styles.title}>CompilerSutra Library</h1>
            <p className={styles.lead}>
              Browse by topic. Each shelf groups the papers and internal material for one area of
              the site.
            </p>
            <div className={styles.meta}>
              <span className={styles.pill}>{topicCount} categories</span>
              <span className={styles.pill}>{totalPaperCount} items</span>
            </div>
          </section>

          <section className={`${styles.catalogueSection} ${styles.libraryShelfSection}`}>
            <div className={styles.catalogueHeader}>
              <p className={styles.libraryEyebrow}>Categories</p>
              <h2 className={styles.catalogueTitle}>Choose a shelf</h2>
              <p className={styles.catalogueText}>
                Each category groups together the papers and materials for one area of the site.
              </p>
            </div>

            <div className={styles.catalogueGrid}>
              {LIBRARY_TOPICS.map((topic) => {
                const paperCount = getLibraryPapersByTopic(topic.id).length;
                return <TopicShelfCard key={topic.id} topic={topic} itemCount={paperCount} />;
              })}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
