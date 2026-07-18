import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowRight } from 'lucide-react';
import { buildFlagArticlePath } from './flagRoutes';
import styles from './clangFlags.module.css';

export default function RelatedFlags({ flags, onPickFlag }) {
  if (!flags || !flags.length) {
    return <p className={styles.emptyInline}>No related flags found.</p>;
  }

  return (
    <div className={styles.relatedWrap}>
      {flags.map((flag) => (
        <Link key={flag} to={buildFlagArticlePath(flag)} className={styles.relatedChip}>
          <ArrowRight size={13} strokeWidth={2} />
          <span>{flag}</span>
        </Link>
      ))}
    </div>
  );
}
