import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import { GitCompareArrows, ArrowRight, Check } from 'lucide-react';
import styles from './abiComparisonTool.module.css';

const ARCH_OPTIONS = [
  { key: 'sysv', label: 'x86_64 System V', id: 'x86_64-sysv' },
  { key: 'windows', label: 'Windows x64', id: 'windows-x64' },
  { key: 'aarch64', label: 'AArch64 AAPCS64', id: 'aarch64-aapcs64' },
  { key: 'riscv', label: 'RISC-V RV64', id: 'riscv' },
  { key: 'amdgpu', label: 'AMDGPU', id: 'amdgpu' },
  { key: 'nvidiaPtx', label: 'NVIDIA PTX', id: 'nvidia-ptx' },
];

function getFeatureValue(featureRow, archKey) {
  if (!featureRow) return '-';
  if (featureRow[archKey] !== undefined) return featureRow[archKey];
  const aliases = {
    sysv: ['x86_64', 'x86_64Sysv'],
    windows: ['win64', 'ms'],
    aarch64: ['arm64', 'aapcs64'],
    riscv: ['rv64'],
    amdgpu: ['amd', 'gfx'],
    nvidiaPtx: ['ptx', 'nvptx', 'cuda'],
  };
  for (const alt of aliases[archKey] || []) {
    if (featureRow[alt] !== undefined) return featureRow[alt];
  }
  if (archKey === 'sysv' && featureRow.other !== undefined) return featureRow.other;
  return '-';
}

function resolveComparisonData(comparisonData, arch1Key, arch2Key) {
  if (!comparisonData || typeof comparisonData !== 'object') return {};

  const cap = (k) => k.charAt(0).toUpperCase() + k.slice(1);
  const candidates = [
    `vs${cap(arch2Key)}`,
    `vs${cap(arch2Key.replace(/-/g, ''))}`,
    `vs${cap(arch2Key.replace(/-/g, '_'))}`,
  ];

  if (arch2Key === 'windows') candidates.unshift('vsWindows');
  if (arch2Key === 'aarch64') candidates.push('vsAarch64');
  if (arch2Key === 'nvidiaPtx') candidates.push('vsNvidiaPtx', 'vsPtx');
  if (arch2Key === 'amdgpu') candidates.push('vsAmdgpu', 'vsAmdGpu');

  for (const key of candidates) {
    if (comparisonData[key]?.keyDifferences?.length) {
      return comparisonData[key];
    }
  }
  return {};
}

function ComparisonRow({ row, arch1, arch2 }) {
  const val1 = getFeatureValue(row, arch1.key);
  const val2 = getFeatureValue(row, arch2.key);
  const status = val1 === val2 ? 'same' : 'different';

  return (
    <div className={clsx(styles.row, styles[`row${status}`])}>
      <div className={styles.featureCell}>{row.feature}</div>
      <div className={styles.valueCell}>{val1}</div>
      <div className={styles.valueCell}>{val2}</div>
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
        <div className={styles.valueCell}>{arch1.label}</div>
        <div className={styles.valueCell}>{arch2.label}</div>
        <div className={styles.statusCell}>Status</div>
      </div>
      <div className={styles.tableBody}>
        {features.map((f, i) => (
          <ComparisonRow
            key={i}
            row={f}
            arch1={arch1}
            arch2={arch2}
          />
        ))}
      </div>
    </div>
  );
}

export default function AbiComparisonTool({ comparisonData = {}, defaultArch1 = 'sysv', defaultArch2 = 'windows' }) {
  const [selectedArch1, setSelectedArch1] = useState(defaultArch1);
  const [selectedArch2, setSelectedArch2] = useState(defaultArch2);

  const arch1 = ARCH_OPTIONS.find((a) => a.key === selectedArch1) || ARCH_OPTIONS[0];
  const arch2 = ARCH_OPTIONS.find((a) => a.key === selectedArch2) || ARCH_OPTIONS[1];

  const vsData = useMemo(
    () => resolveComparisonData(comparisonData, arch1.key, arch2.key),
    [comparisonData, arch1.key, arch2.key]
  );

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
            {ARCH_OPTIONS.map((opt) => (
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
            {ARCH_OPTIONS.map((opt) => (
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
            Comparison data is available for x86_64 SysV vs Windows/AArch64, RISC-V cross-refs, and AMDGPU vs NVIDIA PTX.
          </p>
        </div>
      )}

      {keyDifferences.length > 0 && (
        <div className={styles.summaryBar}>
          <div className={styles.summaryItem}>
            <span className={styles.summaryNumber}>
              {keyDifferences.filter((f) =>
                getFeatureValue(f, arch1.key) === getFeatureValue(f, arch2.key)
              ).length}
            </span>
            <span className={styles.summaryLabel}>Identical</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryNumber}>
              {keyDifferences.filter((f) =>
                getFeatureValue(f, arch1.key) !== getFeatureValue(f, arch2.key)
              ).length}
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
