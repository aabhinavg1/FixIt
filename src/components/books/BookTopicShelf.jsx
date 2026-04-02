import React from 'react';
import styles from '@site/src/pages/reaserchpaper.module.css';
import BookItemCard from './BookItemCard';

export default function BookTopicShelf({ groupName, items, showHeader }) {
  return (
    <section className={styles.simpleTopicGroup}>
      {showHeader ? (
        <div className={styles.simpleTopicGroupHeader}>
          <p className={styles.simpleTopicGroupEyebrow}>Shelf</p>
          <h3 className={styles.simpleTopicGroupTitle}>{groupName}</h3>
        </div>
      ) : null}

      <div className={styles.simpleTopicList}>
        {items.map((item) => (
          <BookItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
