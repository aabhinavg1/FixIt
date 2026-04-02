import React from 'react';
import styles from '@site/src/pages/reaserchpaper.module.css';

export default function BookItemCard({ item }) {
  return (
    <article className={styles.simpleTopicItem}>
      <div className={`${styles.simpleTopicThumb} ${styles[item.coverTone]}`}>
        <span className={styles.simpleTopicThumbLabel}>{item.thumbnailLabel || 'PDF'}</span>
      </div>

      <div className={styles.simpleTopicItemBody}>
        <p className={styles.simpleTopicItemMeta}>
          {item.author} · {item.year}
        </p>
        <h3 className={styles.simpleTopicItemTitle}>{item.title}</h3>
        <p className={styles.simpleTopicItemNote}>{item.note}</p>
      </div>

      <div className={styles.simpleTopicItemActions}>
        <a
          className={styles.simpleTopicPrimaryAction}
          href={item.file}
          target="_blank"
          rel="noreferrer"
        >
          Open PDF
        </a>
      </div>
    </article>
  );
}
