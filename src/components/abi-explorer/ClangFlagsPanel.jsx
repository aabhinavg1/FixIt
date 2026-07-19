import React, { useState } from 'react';
import clsx from 'clsx';
import {
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  Terminal,
  FileCode,
  Link2,
} from 'lucide-react';
import styles from './abi.module.css';

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button className={styles.clangCopyBtn} onClick={handleCopy} type="button" title="Copy to clipboard">
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

function CommandBlock({ label, command, icon: Icon }) {
  return (
    <div className={styles.clangCommand}>
      <div className={styles.clangCommandHeader}>
        <Icon size={14} className={styles.clangCommandIcon} />
        <span className={styles.clangCommandLabel}>{label}</span>
        <CopyButton text={command} />
      </div>
      <pre className={styles.clangCommandCode}>
        <code>{command}</code>
      </pre>
    </div>
  );
}

function FlagItem({ flag }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.clangFlagItem}>
      <button
        className={styles.clangFlagHeader}
        onClick={() => setExpanded(!expanded)}
        type="button"
      >
        <code className={styles.clangFlagName}>{flag.flag}</code>
        <span className={styles.clangFlagCategory}>{flag.category}</span>
        {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>
      {expanded && (
        <div className={styles.clangFlagDetail}>
          <p className={styles.clangFlagDesc}>{flag.description}</p>
          <div className={styles.clangFlagMeta}>
            <span className={styles.clangFlagKind}>{flag.kind}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ClangFlagsPanel({ clangFlags }) {
  const [showAllFlags, setShowAllFlags] = useState(false);

  if (!clangFlags) return null;

  const displayFlags = showAllFlags ? clangFlags.flags : clangFlags.flags.slice(0, 6);
  const hasMore = clangFlags.flags.length > 6;

  return (
    <div className={styles.clangPanel}>
      <div className={styles.clangTriple}>
        <span className={styles.clangTripleLabel}>Target Triple</span>
        <code className={styles.clangTripleValue}>{clangFlags.triple}</code>
      </div>

      <div className={styles.clangCommands}>
        <CommandBlock label="Clang" command={clangFlags.clangCommand} icon={Terminal} />
        <CommandBlock label="LLC" command={clangFlags.llcCommand} icon={FileCode} />
        <CommandBlock label="OPT" command={clangFlags.optCommand} icon={Terminal} />
      </div>

      <div className={styles.clangFlagsList}>
        <div className={styles.clangFlagsHeader}>
          <span className={styles.clangFlagsTitle}>Key Flags</span>
          <span className={styles.clangFlagsCount}>{clangFlags.flags.length} flags</span>
        </div>
        <div className={styles.clangFlagsGrid}>
          {displayFlags.map((flag, index) => (
            <FlagItem key={index} flag={flag} />
          ))}
        </div>
        {hasMore && (
          <button
            className={styles.clangShowMore}
            onClick={() => setShowAllFlags(!showAllFlags)}
            type="button"
          >
            {showAllFlags ? 'Show fewer' : `Show all ${clangFlags.flags.length} flags`}
          </button>
        )}
      </div>

      {clangFlags.sourceFiles && clangFlags.sourceFiles.length > 0 && (
        <div className={styles.clangSources}>
          <span className={styles.clangSourcesTitle}>
            <Link2 size={13} /> Source References
          </span>
          <div className={styles.clangSourcesList}>
            {clangFlags.sourceFiles.map((src, index) => (
              <div key={index} className={styles.clangSourceItem}>
                <code className={styles.clangSourcePath}>{src.path}</code>
                <span className={styles.clangSourceDesc}>{src.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
