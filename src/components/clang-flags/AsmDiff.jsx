import React, { useMemo } from 'react';
import clsx from 'clsx';
import styles from './clangFlags.module.css';

function escapeHtml(value) {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function diffLines(before, after) {
  const a = String(before ?? '').split('\n');
  const b = String(after ?? '').split('\n');
  const aCount = a.length;
  const bCount = b.length;

  const lcs = Array.from({ length: aCount + 1 }, () => new Array(bCount + 1).fill(0));
  for (let i = aCount - 1; i >= 0; i--) {
    for (let j = bCount - 1; j >= 0; j--) {
      if (a[i] === b[j]) {
        lcs[i][j] = lcs[i + 1][j + 1] + 1;
      } else {
        lcs[i][j] = Math.max(lcs[i + 1][j], lcs[i][j + 1]);
      }
    }
  }

  const aStatus = new Array(aCount).fill('same');
  const bStatus = new Array(bCount).fill('same');
  let i = 0;
  let j = 0;
  while (i < aCount && j < bCount) {
    if (a[i] === b[j]) {
      i += 1;
      j += 1;
    } else if (lcs[i + 1][j] >= lcs[i][j + 1]) {
      aStatus[i] = 'removed';
      i += 1;
    } else {
      bStatus[j] = 'added';
      j += 1;
    }
  }
  while (i < aCount) {
    aStatus[i] = 'removed';
    i += 1;
  }
  while (j < bCount) {
    bStatus[j] = 'added';
    j += 1;
  }

  return { a, b, aStatus, bStatus };
}

function DiffPanel({ title, badge, lines, statuses, side }) {
  return (
    <div className={styles.asmDiffPanel}>
      <div className={styles.asmDiffHeader}>
        <span className={styles.asmDiffTitle}>{title}</span>
        <span className={clsx(styles.asmDiffBadge, side === 'after' ? styles.asmDiffBadgeAdd : styles.asmDiffBadgeRemove)}>{badge}</span>
      </div>
      <pre className={styles.asmDiffPre}>
        <code>
          {lines.map((line, index) => {
            const status = statuses[index];
            const prefix = status === 'added' ? '+' : status === 'removed' ? '-' : ' ';
            return (
              <div
                key={`${index}-${line}`}
                className={clsx(
                  styles.asmDiffLine,
                  status === 'added' && styles.asmDiffLineAdd,
                  status === 'removed' && styles.asmDiffLineRemove,
                )}
                dangerouslySetInnerHTML={{
                  __html: `${escapeHtml(prefix + ' ' + line)}\n`,
                }}
              />
            );
          })}
        </code>
      </pre>
    </div>
  );
}

export default function AsmDiff({ before, after, beforeTitle = 'Without flag', afterTitle = 'With flag', note }) {
  const { a, b, aStatus, bStatus } = useMemo(() => diffLines(before, after), [before, after]);

  return (
    <div className={styles.asmDiff}>
      <div className={styles.asmDiffGrid}>
        <DiffPanel title={beforeTitle} badge="default ABI" lines={a} statuses={aStatus} side="before" />
        <DiffPanel title={afterTitle} badge={`${afterTitle.replace(/^With\s+/, '')} applied`} lines={b} statuses={bStatus} side="after" />
      </div>
      <div className={styles.asmDiffLegend}>
        <span className={styles.asmDiffLegendItem}>
          <span className={styles.asmDiffSwatchRemove} />
          removed
        </span>
        <span className={styles.asmDiffLegendItem}>
          <span className={styles.asmDiffSwatchAdd} />
          added
        </span>
        {note ? <span className={styles.asmDiffNote}>{note}</span> : null}
      </div>
    </div>
  );
}
