import React, { useState } from 'react';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import styles from './clangFlags.module.css';

const GROUPS = [
  { id: 'args', label: 'Arguments', regs: ['x0', 'x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7'], role: 'caller' },
  { id: 'indirect', label: 'Indirect result', regs: ['x8'], role: 'caller' },
  { id: 'scratch', label: 'Scratch', regs: ['x9', 'x10', 'x11', 'x12', 'x13', 'x14', 'x15'], role: 'caller' },
  { id: 'ip', label: 'IP0 / IP1', regs: ['x16', 'x17'], role: 'caller' },
  { id: 'platform', label: 'Platform', regs: ['x18'], role: 'special' },
  { id: 'saved', label: 'Callee-saved', regs: ['x19', 'x20', 'x21', 'x22', 'x23', 'x24', 'x25', 'x26', 'x27', 'x28'], role: 'callee' },
  { id: 'fp-lr', label: 'FP / LR', regs: ['x29', 'x30'], role: 'callee' },
];

function Bank({ title, highlight, mode, active }) {
  return (
    <div className={clsx(styles.regBank, active && styles.regBankActive)}>
      <div className={styles.regBankHeader}>
        <span className={styles.regBankTitle}>{title}</span>
        <span className={clsx(styles.regBankBadge, mode === 'after' ? styles.regBankBadgeAfter : styles.regBankBadgeBefore)}>
          {mode === 'after' ? 'flag on' : 'default ABI'}
        </span>
      </div>
      <div className={styles.regBankGroups}>
        {GROUPS.map((group) => {
          const isMoved = mode === 'after' && group.id === 'scratch';
          const isTarget = mode === 'after' && group.id === 'saved';
          return (
            <div key={group.id} className={styles.regGroup}>
              <div className={styles.regGroupLabel}>
                <span>{group.label}</span>
                <span className={clsx(
                  styles.regRole,
                  group.role === 'callee' || isTarget ? styles.regRoleCallee : group.role === 'special' ? styles.regRoleSpecial : styles.regRoleCaller,
                )}>
                  {isTarget ? 'callee + x10' : group.role === 'caller' ? 'caller-saved' : group.role === 'callee' ? 'callee-saved' : 'special'}
                </span>
              </div>
              <div className={styles.regChipRow}>
                {group.regs.map((reg) => {
                  const isHighlight = reg === highlight;
                  const afterScratch = mode === 'after' && group.id === 'scratch' && reg === highlight;
                  if (afterScratch) {
                    return (
                      <span key={reg} className={clsx(styles.regChip, styles.regChipGhost)} aria-hidden="true">
                        {reg}
                      </span>
                    );
                  }
                  const afterSaved = mode === 'after' && group.id === 'saved' && isHighlight;
                  return (
                    <span
                      key={reg}
                      className={clsx(
                        styles.regChip,
                        group.role === 'callee' && styles.regChipCallee,
                        group.role === 'caller' && styles.regChipCaller,
                        group.role === 'special' && styles.regChipSpecial,
                        isHighlight && mode === 'before' && styles.regChipHighlightBefore,
                        afterSaved && styles.regChipHighlightAfter,
                      )}
                    >
                      {reg}
                    </span>
                  );
                })}
                {isTarget ? (
                  <span className={clsx(styles.regChip, styles.regChipHighlightAfter, styles.regChipMoved)}>
                    {highlight}
                    <span className={styles.regChipTag}>moved</span>
                  </span>
                ) : null}
              </div>
              {isMoved ? (
                <p className={styles.regGroupHint}>{highlight} leaves this block</p>
              ) : null}
              {isTarget ? (
                <p className={styles.regGroupHint}>{highlight} joins callee-saved set</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function RegisterLayout({ register = 'x10', beforeTitle = 'Before (default AAPCS64)', afterTitle = 'After flag' }) {
  const [view, setView] = useState('compare');

  return (
    <div className={styles.regLayout}>
      <div className={styles.regLayoutToolbar} role="tablist" aria-label="Register layout views">
        {[
          { key: 'compare', label: 'Compare' },
          { key: 'before', label: 'Before' },
          { key: 'after', label: 'After' },
        ].map((item) => (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={view === item.key}
            className={clsx(styles.regLayoutTab, view === item.key && styles.regLayoutTabActive)}
            onClick={() => setView(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className={clsx(styles.regLayoutGrid, view !== 'compare' && styles.regLayoutGridSingle)}>
        {(view === 'compare' || view === 'before') ? (
          <Bank title={beforeTitle} highlight={register} mode="before" active={view === 'before' || view === 'compare'} />
        ) : null}
        {view === 'compare' ? (
          <div className={styles.regLayoutArrow} aria-hidden="true">
            <ArrowRight size={18} strokeWidth={2.25} />
          </div>
        ) : null}
        {(view === 'compare' || view === 'after') ? (
          <Bank title={afterTitle} highlight={register} mode="after" active={view === 'after' || view === 'compare'} />
        ) : null}
      </div>

      <div className={styles.regLayoutLegend}>
        <span className={styles.regLegendItem}><span className={clsx(styles.regChip, styles.regChipCaller)} /> caller-saved</span>
        <span className={styles.regLegendItem}><span className={clsx(styles.regChip, styles.regChipCallee)} /> callee-saved</span>
        <span className={styles.regLegendItem}><span className={clsx(styles.regChip, styles.regChipHighlightAfter)} /> moved by flag</span>
      </div>
    </div>
  );
}
