import React from 'react';
import styles from './DsaPageFrame.module.css';

export default function DsaPageFrame({ children }) {
  return <div className={styles.frame}>{children}</div>;
}
