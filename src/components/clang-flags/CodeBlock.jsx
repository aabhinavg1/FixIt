import React, { useState } from 'react';
import clsx from 'clsx';
import { Copy, Check } from 'lucide-react';
import styles from './clangFlags.module.css';

export default function CodeBlock({ title, language = 'text', code, className }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className={clsx(styles.codeBlock, className)}>
      <div className={styles.codeHeader}>
        <div>
          <div className={styles.codeTitle}>{title}</div>
          <div className={styles.codeLanguage}>{language}</div>
        </div>
        <button type="button" className={styles.copyButton} onClick={handleCopy} aria-live="polite">
          {copied ? <Check size={14} strokeWidth={2.25} /> : <Copy size={14} strokeWidth={2.25} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className={styles.codePre}>
        <code>{code}</code>
      </pre>
    </section>
  );
}
