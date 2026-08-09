import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowRight } from 'lucide-react';
import { buildFlagArticlePath } from './flagRoutes';
import { getPublicFlag } from './utils';
import styles from './clangFlags.module.css';

export default function RelatedFlags({ flags, onPickFlag }) {
  if (!flags || !flags.length) {
    return <p className={styles.emptyInline}>No related flags found.</p>;
  }

  return (
    <div className={styles.relatedWrap}>
      {flags.map((flag) => {
        const displayFlag = typeof flag === 'string' ? flag : getPublicFlag(flag);
        return (
        <Link key={displayFlag} to={buildFlagArticlePath(displayFlag)} className={styles.relatedChip}>
          <ArrowRight size={13} strokeWidth={2} />
          <span>{displayFlag}</span>
        </Link>
        );
      })}
    </div>
  );
}
