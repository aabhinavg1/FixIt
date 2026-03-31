import React from 'react';
import styles from '@site/src/pages/reaserchpaper.module.css';
import LibraryTopicPaperCard from './LibraryTopicPaperCard';

export default function LibraryTopicShelf({ groupName, items, showHeader }) {
  return (
    <section className={styles.simpleTopicGroup}>
      {showHeader ? (
        <div className={styles.simpleTopicGroupHeader}>
          <p className={styles.simpleTopicGroupEyebrow}>Shelf</p>
          <h3 className={styles.simpleTopicGroupTitle}>{groupName}</h3>
        </div>
      ) : null}

      <div className={styles.simpleTopicList}>
        {items.map((paper) => (
          <LibraryTopicPaperCard key={paper.id} paper={paper} />
        ))}
      </div>
    </section>
  );
}
