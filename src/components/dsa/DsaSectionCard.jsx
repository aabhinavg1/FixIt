import React from 'react';
import styles from './DsaSectionCard.module.css';

export default function DsaSectionCard({ tag, title, description, footnote, children }) {
  return (
    <article className={styles.card}>
      {tag ? <p className={styles.tag}>{tag}</p> : null}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {children}
      {footnote ? <p className={styles.footnote}>{footnote}</p> : null}
    </article>
  );
}
