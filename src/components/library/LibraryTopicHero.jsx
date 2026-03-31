import React from 'react';
import styles from '@site/src/pages/reaserchpaper.module.css';

export default function LibraryTopicHero({ topic, itemCount, shelfCount }) {
  return (
    <section className={styles.simpleTopicHero}>
      <div className={styles.simpleTopicHeroVisual}>
        <img className={styles.simpleTopicHeroImage} src={topic.coverImage} alt={topic.title} />
      </div>
      <div className={styles.simpleTopicHeroBody}>
        <p className={styles.simpleTopicEyebrow}>{topic.articleCategory || 'Library'}</p>
        <h1 className={styles.simpleTopicTitle}>{topic.title}</h1>
        <p className={styles.simpleTopicLead}>{topic.description}</p>
        <div className={styles.simpleTopicMeta}>
          <span className={styles.simpleTopicMetaPill}>{itemCount} items</span>
          <span className={styles.simpleTopicMetaPill}>{shelfCount} shelves</span>
        </div>
      </div>
    </section>
  );
}
