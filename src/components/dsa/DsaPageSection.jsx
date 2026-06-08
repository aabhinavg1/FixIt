import React from 'react';
import clsx from 'clsx';
import styles from './DsaPageSection.module.css';

export default function DsaPageSection({
  kicker,
  title,
  text,
  aside,
  children,
  className = '',
}) {
  return (
    <section className={clsx(styles.section, className)}>
      <div className={styles.header}>
        <div>
          {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
          {title ? <h2 className={styles.title}>{title}</h2> : null}
          {text ? <p className={styles.text}>{text}</p> : null}
        </div>
        {aside ? <div className={styles.aside}>{aside}</div> : null}
      </div>
      {children ? <div className={styles.body}>{children}</div> : null}
    </section>
  );
}
