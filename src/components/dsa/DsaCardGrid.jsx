import React from 'react';
import styles from './DsaCardGrid.module.css';

export default function DsaCardGrid({ items, renderItem, columns = 3 }) {
  return (
    <div className={styles.grid} style={{ '--columns': columns }}>
      {items.map((item) => renderItem(item))}
    </div>
  );
}
