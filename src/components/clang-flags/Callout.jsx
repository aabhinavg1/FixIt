import React from 'react';
import clsx from 'clsx';
import { AlertTriangle, Info, OctagonAlert } from 'lucide-react';
import styles from './clangFlags.module.css';

const ICONS = {
  info: Info,
  warning: AlertTriangle,
  danger: OctagonAlert,
};

export default function Callout({ tone = 'info', title, children }) {
  const Icon = ICONS[tone] || Info;
  return (
    <aside className={clsx(styles.callout, styles[`callout${tone.charAt(0).toUpperCase()}${tone.slice(1)}`])}>
      <div className={styles.calloutHeading}>
        <Icon size={16} strokeWidth={2.25} className={styles.calloutIcon} />
        {title ? <div className={styles.calloutTitle}>{title}</div> : null}
      </div>
      {children ? <div className={styles.calloutBody}>{children}</div> : null}
    </aside>
  );
}
