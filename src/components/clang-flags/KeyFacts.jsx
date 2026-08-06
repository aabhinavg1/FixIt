import React from 'react';
import clsx from 'clsx';
import { CheckCircle2, Info } from 'lucide-react';
import styles from './clangFlags.module.css';

export default function KeyFacts({ items }) {
  if (!items || !items.length) {
    return null;
  }

  return (
    <div className={styles.keyFactsGrid}>
      {items.map((item) => {
        const Icon = item.icon === 'check' ? CheckCircle2 : Info;
        return (
          <div key={item.label} className={styles.keyFactCard}>
            <div className={styles.keyFactTop}>
              <Icon size={14} strokeWidth={2.25} className={styles.keyFactIcon} />
              <div className={styles.keyFactLabel}>{item.label}</div>
            </div>
            <div className={styles.keyFactValue}>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
}
