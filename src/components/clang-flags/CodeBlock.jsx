import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Copy, Check } from 'lucide-react';
import styles from './clangFlags.module.css';

export default function CodeBlock({ title, language = 'text', code, className }) {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef(null);

  useEffect(() => () => {
    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
    }
  }, []);

  const copyText = async () => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(code);
      return true;
    }

    if (typeof document === 'undefined') {
      throw new Error('Clipboard is unavailable');
    }

    const textarea = document.createElement('textarea');
    textarea.value = code;
    textarea.setAttribute('readonly', 'true');
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    const success = document.execCommand?.('copy');
    document.body.removeChild(textarea);

    if (!success) {
      throw new Error('Copy command failed');
    }

    return true;
  };

  const handleCopy = async () => {
    try {
      await copyText();
      setCopied(true);
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
      resetTimerRef.current = window.setTimeout(() => setCopied(false), 1200);
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
        <button type="button" className={styles.copyButton} onClick={handleCopy} aria-label={`Copy ${title} to clipboard`} aria-live="polite">
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
