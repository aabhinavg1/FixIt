import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import { GitCompareArrows, ArrowRight, Check, X, Minus } from 'lucide-react';
import styles from './abiComparisonTool.module.css';

function ComparisonRow({ feature, arch1, arch2 }) {
  const getStatus = (a, b) => {
    if (a === b) return 'same';
    return 'different';
  };

  const status = getStatus(arch1, arch2);

  return (
    <div className={clsx(styles.row, styles[`row${status}`])}>
      <div className={styles.featureCell}>{feature}</div>
      <div className={styles.valueCell}>{arch1}</div>
      <div className={styles.valueCell}>{arch2}</div>
      <div className={styles.statusCell}>
        {status === 'same' ? (
          <Check size={16} className={styles.statusSame} />
        ) : (
          <ArrowRight size={16} className={styles.statusDifferent} />
        )}
      </div>
    </div>
  );
}

function ComparisonTable({ title, features, arch1, arch2 }) {
  if (!features || features.length === 0) return null;

  return (
    <div className={styles.tableSection}>
      <h4 className={styles.tableTitle}>{title}</h4>
      <div className={styles.tableHeader}>
        <div className={styles.featureCell}>Feature</div>
        <div className={styles.valueCell}>{arch1.name}</div>
        <div className={styles.valueCell}>{arch2.name}</div>
        <div className={styles.statusCell}>Status</div>
      </div>
      <div className={styles.tableBody}>
        {features.map((f, i) => (
          <ComparisonRow
            key={i}
            feature={f.feature}
            arch1={f[arch1.key] || f.sysv || '-'}
            arch2={f[arch2.key] || f.windows || f.aarch64 || '-'}
          />
        ))}
      </div>
    </div>
  );
}

export default function AbiComparisonTool({ comparisonData = {}, architectures = [] }) {
  const [selectedArch1, setSelectedArch1] = useState('x86_64');
  const [selectedArch2, setSelectedArch2] = useState('windows');

  const archOptions = useMemo(() => {
    return [
      { key: 'sysv', label: 'x86_64 System V', id: 'x86_64-sysv' },
      { key: 'windows', label: 'Windows x64', id: 'windows-x64' },
      { key: 'aarch64', label: 'AArch64 AAPCS64', id: 'aarch64-aapcs64' },
      { key: 'riscv', label: 'RISC-V RV64', id: 'riscv' },
    ];
  }, []);

  const arch1 = archOptions.find((a) => a.key === selectedArch1) || archOptions[0];
  const arch2 = archOptions.find((a) => a.key === selectedArch2) || archOptions[1];

  const vsData = comparisonData[`vs${arch2.key.charAt(0).toUpperCase() + arch2.key.slice(1)}`] ||
    comparisonData.vsWindows ||
    {};

  const keyDifferences = vsData.keyDifferences || [];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          <GitCompareArrows size={18} className={styles.titleIcon} />
          <h3 className={styles.title}>ABI Comparison Tool</h3>
        </div>
      </div>

      <div className={styles.selectorBar}>
        <div className={styles.selector}>
          <label className={styles.selectorLabel} htmlFor="arch1-select">
            Architecture 1
          </label>
          <select
            id="arch1-select"
            className={styles.select}
            value={selectedArch1}
            onChange={(e) => setSelectedArch1(e.target.value)}
          >
            {archOptions.map((opt) => (
              <option key={opt.key} value={opt.key}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className={styles.vsDivider}>
          <span>VS</span>
        </div>

        <div className={styles.selector}>
          <label className={styles.selectorLabel} htmlFor="arch2-select">
            Architecture 2
          </label>
          <select
            id="arch2-select"
            className={styles.select}
            value={selectedArch2}
            onChange={(e) => setSelectedArch2(e.target.value)}
          >
            {archOptions.map((opt) => (
              <option key={opt.key} value={opt.key}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {keyDifferences.length > 0 ? (
        <ComparisonTable
          title="Key Differences"
          features={keyDifferences}
          arch1={arch1}
          arch2={arch2}
        />
      ) : (
        <div className={styles.emptyState}>
          <GitCompareArrows size={24} />
          <p>Select two architectures to compare their ABIs</p>
          <p className={styles.emptyHint}>
            Comparison data is currently available for x86_64 SysV vs Windows and vs AArch64.
          </p>
        </div>
      )}

      {keyDifferences.length > 0 && (
        <div className={styles.summaryBar}>
          <div className={styles.summaryItem}>
            <span className={styles.summaryNumber}>
              {keyDifferences.filter((f) => {
                const a = f[arch1.key] || f.sysv;
                const b = f[arch2.key] || f.windows || f.aarch64;
                return a === b;
              }).length}
            </span>
            <span className={styles.summaryLabel}>Identical</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryNumber}>
              {keyDifferences.filter((f) => {
                const a = f[arch1.key] || f.sysv;
                const b = f[arch2.key] || f.windows || f.aarch64;
                return a !== b;
              }).length}
            </span>
            <span className={styles.summaryLabel}>Different</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryNumber}>{keyDifferences.length}</span>
            <span className={styles.summaryLabel}>Total Features</span>
          </div>
        </div>
      )}
    </div>
  );
}
