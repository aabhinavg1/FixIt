import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import { Info, Layers, Filter } from 'lucide-react';
import styles from './registerMap.module.css';

const REGISTER_CATEGORIES = {
  'argument': { label: 'Argument Registers', color: '#3b82f6' },
  'return': { label: 'Return Registers', color: '#8b5cf6' },
  'caller-saved': { label: 'Caller-Saved', color: '#f97316' },
  'callee-saved': { label: 'Callee-Saved', color: '#22c55e' },
  'reserved': { label: 'Reserved', color: '#64748b' },
  'special': { label: 'Special Purpose', color: '#fbbf24' },
};

function getRegisterCategory(reg) {
  if (reg.callerCallee === 'reserved') return 'reserved';
  if (reg.argumentPosition !== null) return 'argument';
  if (reg.returnPosition !== null) return 'return';
  if (reg.callerCallee === 'callee-saved') return 'callee-saved';
  if (reg.special) return 'special';
  return 'caller-saved';
}

function RegisterCell({ reg, category, isSelected, onSelect, isHighlighted }) {
  return (
    <button
      className={clsx(
        styles.registerCell,
        isSelected && styles.registerCellSelected,
        isHighlighted && styles.registerCellHighlighted
      )}
      style={{ '--reg-color': REGISTER_CATEGORIES[category].color }}
      onClick={() => onSelect(reg.name)}
      type="button"
      title={`${reg.name}: ${reg.purpose}`}
    >
      <div className={styles.registerName}>{reg.name}</div>
      <div className={styles.registerWidth}>{reg.width}-bit</div>
      {reg.argumentPosition !== null && (
        <div className={styles.registerBadge}>arg#{reg.argumentPosition + 1}</div>
      )}
      {reg.returnPosition !== null && (
        <div className={styles.registerBadge}>ret#{reg.returnPosition + 1}</div>
      )}
    </button>
  );
}

function RegisterDetail({ reg }) {
  if (!reg) return null;
  const category = getRegisterCategory(reg);

  return (
    <div className={styles.detailPanel}>
      <div className={styles.detailHeader}>
        <div
          className={styles.detailColorDot}
          style={{ backgroundColor: REGISTER_CATEGORIES[category].color }}
        />
        <div>
          <h3 className={styles.detailTitle}>{reg.name}</h3>
          <span className={styles.detailCategory}>
            {REGISTER_CATEGORIES[category].label}
          </span>
        </div>
      </div>

      <div className={styles.detailBody}>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Purpose</span>
          <span className={styles.detailValue}>{reg.purpose}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Width</span>
          <span className={styles.detailValue}>{reg.width} bits</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Aliases</span>
          <span className={styles.detailValue}>{reg.aliases?.join(', ') || '—'}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Encoding</span>
          <span className={styles.detailValue}>{reg.encoding}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>LLVM Class</span>
          <span className={styles.detailValue}>{reg.llvmRegisterClass}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Save Type</span>
          <span className={styles.detailValue}>{reg.callerCallee}</span>
        </div>
        {reg.argumentPosition !== null && (
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Argument Position</span>
            <span className={styles.detailValue}>#{reg.argumentPosition + 1}</span>
          </div>
        )}
        {reg.returnPosition !== null && (
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Return Position</span>
            <span className={styles.detailValue}>#{reg.returnPosition + 1}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function RegisterMap({ registers = [], callingConvention = {}, highlightFilter = null }) {
  const [selectedRegister, setSelectedRegister] = useState(null);
  const [filterType, setFilterType] = useState('all');

  const categorized = useMemo(() => {
    const groups = {};
    registers.forEach((reg) => {
      const cat = getRegisterCategory(reg);
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push({ reg, category: cat });
    });
    return groups;
  }, [registers]);

  const filteredRegisters = useMemo(() => {
    if (filterType === 'all') return categorized;
    const result = {};
    Object.entries(categorized).forEach(([cat, regs]) => {
      if (cat === filterType) result[cat] = regs;
    });
    return result;
  }, [categorized, filterType]);

  const selectedReg = useMemo(
    () => registers.find((r) => r.name === selectedRegister),
    [registers, selectedRegister]
  );

  const highlightedRegs = useMemo(() => {
    if (!highlightFilter) return new Set();
    return new Set(
      registers.filter(highlightFilter).map((r) => r.name)
    );
  }, [registers, highlightFilter]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          <Layers size={18} className={styles.titleIcon} />
          <h3 className={styles.title}>Register Map</h3>
        </div>
        <div className={styles.filterBar}>
          <Filter size={14} />
          <select
            className={styles.filterSelect}
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Registers</option>
            {Object.entries(REGISTER_CATEGORIES).map(([key, { label }]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.legend}>
        {Object.entries(REGISTER_CATEGORIES).map(([key, { label, color }]) => (
          <div key={key} className={styles.legendItem}>
            <div className={styles.legendDot} style={{ backgroundColor: color }} />
            <span className={styles.legendLabel}>{label}</span>
          </div>
        ))}
      </div>

      <div className={styles.layout}>
        <div className={styles.registerGrid}>
          {Object.entries(filteredRegisters).map(([category, regs]) => (
            <div key={category} className={styles.categoryGroup}>
              <div className={styles.categoryHeader}>
                <div
                  className={styles.categoryDot}
                  style={{ backgroundColor: REGISTER_CATEGORIES[category].color }}
                />
                <span className={styles.categoryLabel}>{REGISTER_CATEGORIES[category].label}</span>
                <span className={styles.categoryCount}>{regs.length}</span>
              </div>
              <div className={styles.registerCells}>
                {regs.map(({ reg }) => (
                  <RegisterCell
                    key={reg.name}
                    reg={reg}
                    category={category}
                    isSelected={selectedRegister === reg.name}
                    onSelect={setSelectedRegister}
                    isHighlighted={highlightedRegs.has(reg.name)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.detailSidebar}>
          <RegisterDetail reg={selectedReg} />
          {!selectedReg && (
            <div className={styles.emptyDetail}>
              <Info size={20} />
              <p>Click a register to see details</p>
            </div>
          )}
        </div>
      </div>

      {callingConvention.argumentRegisters && (
        <div className={styles.callingConventionBar}>
          <span className={styles.ccLabel}>Argument Flow:</span>
          <span className={styles.ccValue}>
            {callingConvention.argumentRegisters.map((r) => r.register).join(' → ')}
          </span>
        </div>
      )}
    </div>
  );
}
