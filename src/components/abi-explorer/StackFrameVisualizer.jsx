import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import { Layers, ArrowDown, ArrowUp, Maximize2 } from 'lucide-react';
import styles from './stackFrameVisualizer.module.css';

const REGION_COLORS = {
  'higher-addresses': '#64748b',
  'caller-frame': '#64748b',
  'outgoing-args': '#3b82f6',
  'return-address': '#ef4444',
  'saved-registers': '#f97316',
  'frame-pointer': '#8b5cf6',
  'locals': '#22c55e',
  'alignment-padding': '#94a3b8',
  'red-zone': '#fbbf24',
};

function StackRegion({ region, index, totalRegions, isSelected, onSelect, isHighlighted }) {
  const color = region.color || REGION_COLORS[region.region] || '#64748b';
  const isHigher = index < totalRegions / 2;

  return (
    <button
      className={clsx(
        styles.region,
        isSelected && styles.regionSelected,
        isHighlighted && styles.regionHighlighted
      )}
      style={{ '--region-color': color }}
      onClick={() => onSelect(index)}
      type="button"
    >
      <div className={styles.regionBar}>
        <div className={styles.regionFill} style={{ backgroundColor: color }} />
      </div>
      <div className={styles.regionContent}>
        <div className={styles.regionHeader}>
          <span className={styles.regionLabel}>{region.label}</span>
          <span className={styles.regionAddress}>
            {isHigher ? 'Higher Address' : 'Lower Address'}
          </span>
        </div>
        <p className={styles.regionDescription}>{region.description}</p>
      </div>
    </button>
  );
}

function StackRegionDetail({ region, index }) {
  if (!region) return null;
  const color = region.color || REGION_COLORS[region.region] || '#64748b';

  return (
    <div className={styles.detailPanel}>
      <div className={styles.detailHeader}>
        <div className={styles.detailColorBar} style={{ backgroundColor: color }} />
        <div>
          <h3 className={styles.detailTitle}>{region.label}</h3>
          <span className={styles.detailRegion}>{region.region}</span>
        </div>
      </div>
      <div className={styles.detailBody}>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Description</span>
          <span className={styles.detailValue}>{region.description}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Position</span>
          <span className={styles.detailValue}>Region {index + 1} of stack frame</span>
        </div>
      </div>
    </div>
  );
}

function StackGrowthIndicator({ direction }) {
  const isDown = direction === 'down';
  return (
    <div className={styles.growthIndicator}>
      <div className={styles.growthLabel}>Stack Growth Direction</div>
      <div className={styles.growthArrow}>
        {isDown ? <ArrowDown size={20} /> : <ArrowUp size={20} />}
        <span>{isDown ? '↓ Grows Down (toward lower addresses)' : '↑ Grows Up (toward higher addresses)'}</span>
      </div>
    </div>
  );
}

export default function StackFrameVisualizer({ stackData = {}, stackFrame = {} }) {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const layout = stackFrame.layout || stackData.layout || [];
  const direction = stackData.direction || 'down';
  const alignment = stackData.alignment || 16;
  const redZone = stackData.redZone || 0;

  const displayLayout = expanded ? layout : layout.slice(0, 6);

  const selectedRegionData = selectedRegion !== null ? layout[selectedRegion] : null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          <Layers size={18} className={styles.titleIcon} />
          <h3 className={styles.title}>Stack Frame Layout</h3>
        </div>
        <div className={styles.headerMeta}>
          <span className={styles.metaBadge}>{direction}</span>
          <span className={styles.metaBadge}>{alignment}-byte aligned</span>
          {redZone > 0 && <span className={styles.metaBadge}>Red Zone: {redZone}B</span>}
        </div>
      </div>

      <StackGrowthIndicator direction={direction} />

      <div className={styles.layout}>
        <div className={styles.stackVisual}>
          <div className={styles.addressLabel}>
            <Maximize2 size={14} />
            <span>Higher Addresses</span>
          </div>
          <div className={styles.stackRegions}>
            {displayLayout.map((region, index) => (
              <StackRegion
                key={region.region}
                region={region}
                index={index}
                totalRegions={layout.length}
                isSelected={selectedRegion === index}
                onSelect={setSelectedRegion}
                isHighlighted={false}
              />
            ))}
          </div>
          <div className={styles.addressLabel}>
            <Maximize2 size={14} />
            <span>Lower Addresses</span>
          </div>
        </div>

        <div className={styles.detailSidebar}>
          <StackRegionDetail region={selectedRegionData} index={selectedRegion} />
          {selectedRegionData === null && (
            <div className={styles.emptyDetail}>
              <Layers size={20} />
              <p>Click a stack region to see details</p>
            </div>
          )}
        </div>
      </div>

      {layout.length > 6 && (
        <button
          className={styles.expandButton}
          onClick={() => setExpanded(!expanded)}
          type="button"
        >
          {expanded ? 'Show Less' : `Show All ${layout.length} Regions`}
        </button>
      )}

      {stackData.notes && (
        <div className={styles.notes}>
          <span className={styles.notesLabel}>Notes:</span>
          <p className={styles.notesText}>{stackData.notes}</p>
        </div>
      )}
    </div>
  );
}
