import React from 'react';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/reaserchpaper.module.css';

export default function LibraryTopicPaperCard({ paper }) {
  return (
    <article className={styles.simpleTopicItem}>
      <div className={`${styles.simpleTopicThumb} ${styles[paper.coverTone]}`}>
        <span className={styles.simpleTopicThumbLabel}>{paper.thumbnailLabel || 'PDF'}</span>
      </div>

      <div className={styles.simpleTopicItemBody}>
        <p className={styles.simpleTopicItemMeta}>
          {paper.author} · {paper.year}
        </p>
        <h3 className={styles.simpleTopicItemTitle}>{paper.title}</h3>
        <p className={styles.simpleTopicItemNote}>{paper.note}</p>
      </div>

      <div className={styles.simpleTopicItemActions}>
        <Link className={styles.simpleTopicPrimaryAction} to={`/library/read?book=${paper.id}`}>
          Read
        </Link>
        <a
          className={styles.simpleTopicSecondaryAction}
          href={paper.file}
          target="_blank"
          rel="noreferrer"
        >
          Raw PDF
        </a>
      </div>
    </article>
  );
}
