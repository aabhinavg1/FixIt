import React from 'react';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/reaserchpaper.module.css';

export default function TopicShelfCard({ topic, itemCount }) {
  return (
    <article className={styles.libraryTopicRow}>
      <Link
        className={`${styles.libraryTopicCover} ${styles[topic.coverTone]}`}
        to={`/library/topic?topic=${topic.id}`}
        aria-label={`Open ${topic.title}`}
      >
        <img className={styles.libraryTopicImage} src={topic.coverImage} alt={topic.title} />
        <span className={styles.libraryTopicBadge}>Library</span>
      </Link>

      <div className={`${styles.catalogueCard} ${styles.libraryTopicCard}`}>
        <div className={styles.libraryTopicHead}>
          <span className={styles.libraryTopicLabel}>{topic.articleCategory || 'Category'}</span>
          <span className={styles.libraryTopicCount}>
            {itemCount} item{itemCount === 1 ? '' : 's'}
          </span>
        </div>
        <div className={styles.catalogueBody}>
          <h2 className={styles.catalogueBookTitle}>{topic.title}</h2>
          <p className={styles.catalogueNote}>{topic.description}</p>
        </div>

        <div className={styles.catalogueActions}>
          <Link
            className={`${styles.button} ${styles.catalogueButton}`}
            to={`/library/topic?topic=${topic.id}`}
          >
            Browse Shelf
          </Link>
        </div>
      </div>
    </article>
  );
}
