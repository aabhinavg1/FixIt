import React, { useMemo } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from '../reaserchpaper.module.css';
import {
  getLibraryPapersByTopic,
  getLibraryTopic,
  groupLibraryPapersByCategory,
  LIBRARY_TOPICS,
} from '@site/src/data/library';
import LibraryTopicHero from '@site/src/components/library/LibraryTopicHero';
import LibraryTopicShelf from '@site/src/components/library/LibraryTopicShelf';

function TopicPageContent() {
  const topicId = useMemo(() => new URLSearchParams(window.location.search).get('topic') || '', []);
  const topic = getLibraryTopic(topicId) || LIBRARY_TOPICS[0];
  const papers = getLibraryPapersByTopic(topic.id);
  const groupedPapers = groupLibraryPapersByCategory(papers);
  const groupedEntries = Object.entries(groupedPapers);

  return (
    <div className={styles.simpleLibraryShell}>
      <LibraryTopicHero topic={topic} itemCount={papers.length} shelfCount={groupedEntries.length} />

      <section className={styles.simpleTopicSection}>
        <div className={styles.simpleTopicSectionHeader}>
          <p className={styles.simpleTopicEyebrow}>Shelf</p>
          <h2 className={styles.simpleTopicSectionTitle}>Available material</h2>
        </div>

        <div className={styles.simpleTopicGroups}>
          {groupedEntries.map(([groupName, items]) => (
            <LibraryTopicShelf
              key={groupName}
              groupName={groupName}
              items={items}
              showHeader={groupedEntries.length > 1}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default function LibraryTopicPage() {
  return (
    <Layout
      title="Library Topic"
      description="Browse the papers available for a specific CompilerSutra library topic."
    >
      <Head>
        <meta property="og:title" content="CompilerSutra Library Topic" />
        <meta
          property="og:description"
          content="Browse the papers available for a specific CompilerSutra library topic."
        />
      </Head>

      <main className={styles.page}>
        <BrowserOnly
          fallback={
            <div className={styles.simpleLibraryShell}>
              <section className={styles.simpleTopicSection}>
                <div className={styles.status}>Loading topic…</div>
              </section>
            </div>
          }
        >
          {() => <TopicPageContent />}
        </BrowserOnly>
      </main>
    </Layout>
  );
}
