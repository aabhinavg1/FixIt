import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import { AlertCircle, ArrowRight, GitCompareArrows } from 'lucide-react';
import styles from './clangFlags.module.css';

function parseSeverityLine(line) {
  const match = line.match(/:\s*(warning|error):\s*(.+)$/i);
  if (!match) return null;

  const kind = match[1].toLowerCase();
  let message = match[2].trim();
  const prefix = line.slice(0, line.indexOf(`: ${match[1]}:`));
  const locMatch = prefix.match(/^(.*):(\d+):(\d+)$/);
  if (!locMatch) return null;

  let warningGroup = '';
  const groupMatch = message.match(/\s\[(-W[^\]]+)\]\s*$/);
  if (groupMatch) {
    warningGroup = groupMatch[1];
    message = message.replace(/\s\[-W[^\]]+\]\s*$/, '').trim();
  }

  return {
    file: locMatch[1],
    line: locMatch[2],
    column: locMatch[3],
    kind,
    message,
    warningGroup,
  };
}

function parseSourceLine(line) {
  const match = line.match(/^\s*(\d+)\s*\|\s?(.*)$/);
  if (!match) return null;
  return { lineNo: match[1], code: match[2] };
}

function parseCaretLine(line) {
  const match = line.match(/^\s*\|\s*(\^+(?:~*)?)/);
  return match ? match[1] : line.trim();
}

function parseClangDiagnostic(output) {
  const lines = String(output ?? '').replace(/\n$/, '').split('\n');
  const parsed = {
    file: '',
    line: '',
    column: '',
    kind: 'plain',
    message: '',
    warningGroup: '',
    sourceLineNo: '',
    sourceCode: '',
    caretMarkers: '',
    summary: '',
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const severity = parseSeverityLine(line);
    if (severity) {
      parsed.file = severity.file;
      parsed.line = severity.line;
      parsed.column = severity.column;
      parsed.kind = severity.kind;
      parsed.message = severity.message;
      parsed.warningGroup = severity.warningGroup;
      continue;
    }

    const source = parseSourceLine(line);
    if (source) {
      parsed.sourceLineNo = source.lineNo;
      parsed.sourceCode = source.code;
      continue;
    }

    if (/^\s*\|\s*\^/.test(line)) {
      parsed.caretMarkers = parseCaretLine(line);
      continue;
    }

    if (/generated\.$/i.test(trimmed)) {
      parsed.summary = trimmed;
    }
  }

  return parsed;
}

function DiagnosticPanel({ title, badge, badgeTone, command, driverHint, output }) {
  const parsed = useMemo(() => parseClangDiagnostic(output), [output]);
  const isError = parsed.kind === 'error' || badgeTone === 'error';

  return (
    <div
      className={clsx(
        styles.diagnosticPanel,
        isError ? styles.diagnosticPanelError : styles.diagnosticPanelWarning,
      )}
    >
      <div className={styles.diagnosticPanelHeader}>
        <div className={styles.diagnosticPanelHeaderMain}>
          <span className={styles.diagnosticPanelTitle}>{title}</span>
          <span
            className={clsx(
              styles.diagnosticPanelBadge,
              isError ? styles.diagnosticPanelBadgeError : styles.diagnosticPanelBadgeWarning,
            )}
          >
            {badge}
          </span>
        </div>
      </div>

      {command ? (
        <div className={styles.diagnosticCommandWrap}>
          <div className={styles.diagnosticCommandLabel}>cc1</div>
          <div className={styles.diagnosticCommand}>{command}</div>
          {driverHint ? (
            <>
              <div className={styles.diagnosticCommandLabel}>driver</div>
              <div className={styles.diagnosticCommandHint}>{driverHint}</div>
            </>
          ) : null}
        </div>
      ) : null}

      <div className={styles.diagnosticBody}>
        {parsed.file ? (
          <div className={styles.diagnosticMeta}>
            <span className={clsx(styles.diagnosticSeverityChip, isError ? styles.diagnosticSeverityError : styles.diagnosticSeverityWarning)}>
              {isError ? 'error' : 'warning'}
            </span>
            <span className={styles.diagnosticLocation}>
              {parsed.file}
              <span className={styles.diagnosticLocationSep}>:</span>
              {parsed.line}
              <span className={styles.diagnosticLocationSep}>:</span>
              {parsed.column}
            </span>
            {parsed.warningGroup ? (
              <span className={styles.diagnosticGroup}>{parsed.warningGroup}</span>
            ) : null}
          </div>
        ) : null}

        {parsed.message ? (
          <p
            className={clsx(
              styles.diagnosticMessage,
              isError ? styles.diagnosticMessageError : styles.diagnosticMessageWarning,
            )}
          >
            {parsed.message}
          </p>
        ) : null}

        {parsed.sourceCode || parsed.caretMarkers ? (
          <div className={styles.diagnosticSnippet}>
            {parsed.sourceCode ? (
              <div className={styles.diagnosticSnippetRow}>
                <span className={styles.diagnosticLineNo}>{parsed.sourceLineNo || ' '}</span>
                <span className={styles.diagnosticLineBar}>|</span>
                <code className={styles.diagnosticLineCode}>{parsed.sourceCode}</code>
              </div>
            ) : null}
            {parsed.caretMarkers ? (
              <div className={clsx(styles.diagnosticSnippetRow, styles.diagnosticSnippetRowCaret)}>
                <span className={styles.diagnosticLineNo} aria-hidden="true">&nbsp;</span>
                <span className={styles.diagnosticLineBar}>|</span>
                <code className={styles.diagnosticLineCode}>
                  {'   '}
                  <span className={styles.diagnosticCaretMarker}>{parsed.caretMarkers}</span>
                </code>
              </div>
            ) : null}
          </div>
        ) : null}

        {parsed.summary ? (
          <div
            className={clsx(
              styles.diagnosticSummary,
              isError ? styles.diagnosticSummaryError : styles.diagnosticSummaryWarning,
            )}
          >
            {parsed.summary}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function DiagnosticCompare({
  before,
  after,
  beforeTitle = 'Without flag',
  afterTitle = 'With flag',
  beforeCommand,
  afterCommand,
  driverHint,
  note,
  takeaway = 'Same source line and caret — only the diagnostic severity changes.',
}) {
  const [view, setView] = useState('both');

  const showBefore = view === 'before' || view === 'both';
  const showAfter = view === 'after' || view === 'both';
  const compareMode = view === 'both';

  return (
    <div className={clsx(styles.asmDiff, styles.diagnosticCompare)}>
      <div className={styles.asmDiffTop}>
        <div className={styles.asmDiffTopCopy}>
          <GitCompareArrows size={16} strokeWidth={2.2} className={styles.asmDiffTopIcon} aria-hidden="true" />
          <div>
            <div className={styles.asmDiffTopTitle}>Diagnostic comparison</div>
            <div className={styles.asmDiffTopMeta}>
              <span className={styles.diagnosticStatWarning}>
                <AlertCircle size={12} strokeWidth={2.5} /> warning → error
              </span>
            </div>
          </div>
        </div>

        <div className={styles.asmDiffToolbar} role="tablist" aria-label="Diagnostic comparison views">
          {[
            { key: 'before', label: 'Default' },
            { key: 'after', label: 'Enabled' },
            { key: 'both', label: 'Compare' },
          ].map((item) => (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={view === item.key}
              className={clsx(styles.asmDiffTab, view === item.key && styles.asmDiffTabActive)}
              onClick={() => setView(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {takeaway ? <p className={styles.diagnosticTakeaway}>{takeaway}</p> : null}

      <div
        className={clsx(
          styles.diagnosticGrid,
          !compareMode && styles.diagnosticGridSingle,
          compareMode && styles.diagnosticGridCompare,
        )}
      >
        {showBefore ? (
          <DiagnosticPanel
            title={beforeTitle}
            badge="warning"
            badgeTone="warning"
            command={beforeCommand}
            driverHint={driverHint}
            output={before}
          />
        ) : null}
        {compareMode ? (
          <div className={styles.diagnosticBridge} aria-hidden="true">
            <ArrowRight size={18} strokeWidth={2.25} />
            <span>promoted</span>
          </div>
        ) : null}
        {showAfter ? (
          <DiagnosticPanel
            title={afterTitle}
            badge="error"
            badgeTone="error"
            command={afterCommand}
            driverHint={driverHint}
            output={after}
          />
        ) : null}
      </div>

      {note ? <p className={styles.asmDiffNote}>{note}</p> : null}
    </div>
  );
}
