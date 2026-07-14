import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './clangFlags.module.css';

export default function RelatedFlags({ flags, onPickFlag }) {
  if (!flags || !flags.length) {
    return <p className={styles.emptyInline}>No related flags found.</p>;
  }

  return (
    <div className={styles.relatedWrap}>
      {flags.map((flag) => (
        <button
          key={flag}
          type="button"
          className={styles.relatedChip}
          onClick={() => onPickFlag(flag, { clearFilters: true })}
        >
          <ArrowRight size={13} strokeWidth={2} />
          <span>{flag}</span>
        </button>
      ))}
    </div>
  );
}
