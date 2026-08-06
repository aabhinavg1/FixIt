import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Timer, Gauge, ArrowDownRight } from 'lucide-react';
import styles from './clangFlags.module.css';

function summarize(values) {
  const nums = values.map(Number).filter((v) => Number.isFinite(v));
  const count = nums.length;
  if (!count) return null;
  const sorted = [...nums].sort((a, b) => a - b);
  const mean = nums.reduce((a, b) => a + b, 0) / count;
  const median = sorted[Math.floor(count / 2)];
  const min = sorted[0];
  const max = sorted[count - 1];
  const variance = nums.reduce((acc, v) => acc + (v - mean) ** 2, 0) / count;
  const stdev = Math.sqrt(variance);
  return { count, mean, median, min, max, stdev };
}

function formatMs(value, digits = 2) {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return '—';
  }
  return `${value.toFixed(digits)} ms`;
}

function StatRow({ label, without, withValue }) {
  return (
    <div className={styles.perfStatRow}>
      <span className={styles.perfStatLabel}>{label}</span>
      <span className={styles.perfStatValue}>{formatMs(without)}</span>
      <span className={styles.perfStatValue}>{formatMs(withValue)}</span>
    </div>
  );
}

function PerfPanel({ title, badge, tone, summary }) {
  return (
    <div className={styles.perfPanel}>
      <div className={styles.perfHeader}>
        <span className={styles.perfTitle}>{title}</span>
        <span className={clsx(styles.perfBadge, tone === 'add' ? styles.perfBadgeAdd : styles.perfBadgeRemove)}>{badge}</span>
      </div>
      <div className={styles.perfStats}>
        <StatRow label="Mean" without={summary?.mean} withValue={summary?.mean} />
        <StatRow label="Median" without={summary?.median} withValue={summary?.median} />
        <StatRow label="Min" without={summary?.min} withValue={summary?.min} />
        <StatRow label="Max" without={summary?.max} withValue={summary?.max} />
        <StatRow label="Std dev" without={summary?.stdev} withValue={summary?.stdev} />
        <div className={styles.perfStatRow}>
          <span className={styles.perfStatLabel}>Trials</span>
          <span className={styles.perfStatValue}>{summary?.count ?? '—'}</span>
          <span className={styles.perfStatValue}>{summary?.count ?? '—'}</span>
        </div>
      </div>
    </div>
  );
}

export default function PerfReport({ beforeTitle = 'Without flag', afterTitle = 'With flag', without, with: withData, note }) {
  const beforeSummary = useMemo(() => summarize(without), [without]);
  const afterSummary = useMemo(() => summarize(withData), [withData]);

  const delta = useMemo(() => {
    if (!beforeSummary || !afterSummary) return null;
    return ((afterSummary.mean - beforeSummary.mean) / beforeSummary.mean) * 100;
  }, [beforeSummary, afterSummary]);

  const slower = delta === null ? null : delta > 0;

  return (
    <section className={styles.perfReport}>
      <div className={styles.perfGrid}>
        <PerfPanel title={beforeTitle} badge="baseline" tone="remove" summary={beforeSummary} />
        <PerfPanel title={afterTitle} badge={slower === null ? 'n/a' : slower ? `+${delta.toFixed(2)}% slower` : `${delta.toFixed(2)}% faster`} tone="add" summary={afterSummary} />
      </div>

      <div className={clsx(styles.perfDelta, slower === null ? styles.perfDeltaNeutral : slower ? styles.perfDeltaSlow : styles.perfDeltaFast)}>
        {slower === null ? (
          <>
            <Gauge size={16} strokeWidth={2.25} />
            <span>Timing data unavailable.</span>
          </>
        ) : slower ? (
          <>
            <ArrowDownRight size={16} strokeWidth={2.25} />
            <span>
              <strong>{delta.toFixed(2)}% slower</strong> with {afterTitle.replace(/^With\s+/, '')} ({formatMs(beforeSummary.mean)} → {formatMs(afterSummary.mean)} mean wall time)
            </span>
          </>
        ) : (
          <>
            <ArrowDownRight size={16} strokeWidth={2.25} className={styles.perfDeltaFlip} />
            <span>
              <strong>{Math.abs(delta).toFixed(2)}% faster</strong> with {afterTitle.replace(/^With\s+/, '')} ({formatMs(beforeSummary.mean)} → {formatMs(afterSummary.mean)} mean wall time)
            </span>
          </>
        )}
      </div>

      <div className={styles.perfFooter}>
        <div className={styles.perfFooterMeta}>
          <Timer size={15} strokeWidth={2} className={styles.perfFooterIcon} />
          <span className={styles.perfFooterTitle}>Wall-clock time, generated with compilersutra-perf</span>
        </div>
        {note ? <p className={styles.perfNote}>{note}</p> : null}
      </div>
    </section>
  );
}
