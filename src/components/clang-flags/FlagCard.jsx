import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { BookOpenText, Check, Code2, ExternalLink, FileText, Layers3, ShieldAlert, Clock3 } from 'lucide-react';
import Badge from './Badge';
import CodeBlock from './CodeBlock';
import styles from './clangFlags.module.css';
import { joinList, splitHighlightedText } from './utils';

function statusTone(label) {
  switch (label) {
    case 'Optimization':
      return 'success';
    case 'Warning':
      return 'warning';
    case 'Sanitizer':
      return 'danger';
    case 'Debugging':
      return 'info';
    case 'Experimental':
      return 'warning';
    case 'Deprecated':
      return 'neutral';
    case 'Clang Only':
      return 'accent';
    default:
      return 'neutral';
  }
}

function yesNo(value) {
  return value ? 'Yes' : 'No';
}

function Section({ icon: Icon, title, children, subtle = false, className }) {
  return (
    <section className={clsx(styles.sectionCard, subtle && styles.sectionCardSubtle, className)}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitleWrap}>
          {Icon ? <Icon size={16} strokeWidth={2} className={styles.sectionIcon} /> : null}
          <h3 className={styles.sectionHeading}>{title}</h3>
        </div>
      </div>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

function ListBlock({ items, emptyLabel = 'No guidance available.' }) {
  if (!items || !items.length) {
    return <p className={styles.emptyInline}>{emptyLabel}</p>;
  }

  return (
    <ul className={styles.checkList}>
      {items.map((item) => (
        <li key={item} className={styles.checkItem}>
          <Check size={14} strokeWidth={2.4} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function buildPipelineTrail(flag) {
  const steps = [
    { title: 'Options.td', note: 'Driver option table entry' },
    { title: 'Driver.cpp', note: 'Parse and validate spelling' },
    { title: 'CompilerInvocation.cpp', note: 'Apply option state' },
    { title: 'Frontend', note: 'Configure compilation phases' },
    { title: 'LLVM IR', note: 'Lower the selected behavior' },
    { title: 'Optimization', note: 'Transform the IR pipeline' },
    { title: 'Backend', note: 'Select target lowering' },
    { title: 'Object File', note: 'Emit machine code or metadata' },
    { title: 'Executable', note: 'Link the final artifact' },
  ];

  if (flag.category === 'Sanitizer') {
    steps[4] = { title: 'Instrumentation', note: 'Insert sanitizer checks' };
    steps[5] = { title: 'Runtime', note: 'Bind sanitizer support' };
  } else if (flag.category === 'Warning') {
    steps[3] = { title: 'Diagnostics', note: 'Tune warning emission' };
    steps[5] = { title: 'Report', note: 'Surface the diagnostic' };
  }

  return steps;
}

function buildImplementationTrail(flag) {
  const trail = [
    {
      title: 'Options.td',
      value: flag.sourcePath || 'clang/include/clang/Driver/Options.td',
      note: 'The option is defined in the driver tables and emitted into the generated option database.',
    },
    {
      title: 'Driver parsing',
      value: 'Driver.cpp',
      note: 'The driver resolves the spelling, validates arguments, and forwards the selected semantics.',
    },
    {
      title: 'Invocation setup',
      value: 'CompilerInvocation.cpp',
      note: 'Clang turns command-line flags into structured invocation state for the frontend.',
    },
  ];

  if (flag.category === 'Sanitizer') {
    trail.push(
      {
        title: 'Sanitizer args',
        value: 'SanitizerArgs.cpp',
        note: 'Sanitizer-specific options are collected and normalized before instrumentation is enabled.',
      },
      {
        title: 'Instrumentation',
        value: 'AddressSanitizer / UBSan passes',
        note: 'The compiler injects runtime checks and LLVM IR instrumentation based on the flag.',
      },
    );
    return trail;
  }

  if (flag.category === 'Optimization') {
    trail.push(
      {
        title: 'Pass selection',
        value: 'PassBuilder.cpp',
        note: 'Optimization level controls the pass pipeline and which transformations are scheduled.',
      },
      {
        title: 'LLVM pipeline',
        value: 'LLVM Pass Pipeline',
        note: 'The selected pipeline shapes inlining, vectorization, codegen, and late simplification.',
      },
    );
    return trail;
  }

  if (flag.category === 'Warning') {
    trail.push(
      {
        title: 'Diagnostics',
        value: 'DiagnosticOptions + DiagnosticsEngine',
        note: 'Warning flags alter which diagnostics are enabled, promoted, or suppressed.',
      },
      {
        title: 'Warning groups',
        value: 'DiagnosticGroups.td',
        note: 'Grouped warnings are expanded into fine-grained diagnostics during option processing.',
      },
    );
    return trail;
  }

  if (flag.category === 'Preprocessor') {
    trail.push(
      {
        title: 'Preprocessor config',
        value: 'PreprocessorOptions',
        note: 'Macro expansion, include paths, and conditional compilation are configured early.',
      },
      {
        title: 'Frontend impact',
        value: 'PPCallbacks / lexer setup',
        note: 'Preprocessor toggles influence tokenization and how source is fed into the parser.',
      },
    );
    return trail;
  }

  trail.push(
    {
      title: 'Code generation',
      value: 'CodeGenOptions / TargetInfo',
      note: 'The frontend lowers the option into codegen knobs that shape emitted IR and object code.',
    },
    {
      title: 'Backend effect',
      value: 'LLVM IR + target backend',
      note: 'The backend consumes the invocation state when generating the final machine code.',
    },
  );
  return trail;
}

function DetailMeta({ label, value }) {
  return (
    <div className={styles.metaItem}>
      <div className={styles.metaLabel}>{label}</div>
      <div className={styles.metaValue}>{value}</div>
    </div>
  );
}

export default function FlagCard({ flag, query, mode = 'detail', onPickFlag, selected = false }) {
  if (!flag) {
    return null;
  }

  const summary = flag.help || flag.documentation || 'No help text available.';
  const titleParts = splitHighlightedText(flag.flag, query);
  const badges = [
    flag.category,
    flag.hidden ? 'Hidden' : null,
    flag.deprecated ? 'Deprecated' : null,
    flag.experimental ? 'Experimental' : null,
    flag.clangOnly ? 'Clang Only' : null,
  ].filter(Boolean);
  const sourceLabel = flag.sourcePath && flag.sourceLine ? `${flag.sourcePath}:${flag.sourceLine}` : flag.sourcePath || 'Unknown source';
  const pipelineTrail = buildPipelineTrail(flag);
  const implementationTrail = buildImplementationTrail(flag);

  if (mode === 'compact') {
    return (
      <button
        type="button"
        className={clsx(styles.flagCard, styles.flagCardCompact, styles.flagCardButton, selected && styles.flagCardSelected)}
        onClick={() => onPickFlag(flag)}
      >
        <div className={styles.flagCardTop}>
          <div className={styles.flagCardTitleBlock}>
            <div className={styles.flagCardFlag}>
              {titleParts.map((part, index) =>
                part.highlighted ? (
                  <mark key={index} className={styles.searchMark}>
                    {part.text}
                  </mark>
                ) : (
                  <span key={index}>{part.text}</span>
                ),
              )}
            </div>
            <div className={styles.flagCardSummary}>{summary}</div>
          </div>
          <div className={styles.flagCardArrow} aria-hidden="true">
            <ExternalLink size={16} strokeWidth={2} />
          </div>
        </div>

        <div className={styles.flagCardBadgeRow}>
          <Badge tone={statusTone(flag.category)}>{flag.category}</Badge>
          {flag.hidden ? <Badge tone="neutral">Hidden</Badge> : null}
          {flag.deprecated ? <Badge tone="neutral">Deprecated</Badge> : null}
          {flag.experimental ? <Badge tone="warning">Experimental</Badge> : null}
        </div>

        <div className={styles.flagCardCompilerRow}>
          {(flag.supportedCompilers || []).slice(0, 3).map((compiler) => (
            <span key={`${flag.flag}-${compiler}`} className={styles.flagCardCompilerChip}>
              {compiler}
            </span>
          ))}
          {!flag.supportedCompilers?.length ? <span className={styles.flagCardCompilerChip}>Clang</span> : null}
        </div>

        <div className={styles.flagCardFooter}>
          <span className={styles.sourceText}>{sourceLabel}</span>
          <span className={styles.flagCardLink}>View</span>
        </div>
      </button>
    );
  }

  return (
    <article className={clsx(styles.detailCard, selected && styles.detailCardSelected)}>
      <div className={styles.detailHeader}>
        <div className={styles.detailTitleBlock}>
          <div className={styles.detailBadgeRow}>
            {badges.map((badge) => (
              <Badge key={badge} tone={statusTone(badge)}>
                {badge}
              </Badge>
            ))}
          </div>
          <h2 className={styles.flagTitle}>
            {titleParts.map((part, index) =>
              part.highlighted ? (
                <mark key={index} className={styles.searchMark}>
                  {part.text}
                </mark>
              ) : (
                <span key={index}>{part.text}</span>
              ),
            )}
          </h2>
          <p className={styles.flagSummary}>{summary}</p>
        </div>
      </div>

      <div className={styles.metaStrip}>
        <DetailMeta label="Category" value={flag.category} />
        <DetailMeta label="Kind" value={flag.kind} />
        <DetailMeta label="Visibility" value={joinList(flag.visibility) || 'Public'} />
        <DetailMeta label="Alias" value={flag.aliasTargetFlag || 'None'} />
      </div>

      {flag.documentation ? (
        <Section icon={BookOpenText} title="Description">
          <p className={styles.bodyCopy}>{flag.documentation}</p>
        </Section>
      ) : null}

      <Section icon={Code2} title="Example">
        <CodeBlock title="clang++" language="shell" code={flag.exampleClang} />
        {flag.exampleGCC ? <CodeBlock title="gcc / g++" language="shell" code={flag.exampleGCC} /> : null}
      </Section>

      <Section icon={Layers3} title="Pipeline">
        <div className={styles.pipelineFlow}>
          {pipelineTrail.map((step, index) => (
            <React.Fragment key={step.title}>
              <div className={styles.pipelineStep}>
                <div className={styles.pipelineStepTitle}>{step.title}</div>
                <div className={styles.pipelineStepNote}>{step.note}</div>
              </div>
              {index < pipelineTrail.length - 1 ? <div className={styles.pipelineArrow}>→</div> : null}
            </React.Fragment>
          ))}
        </div>
      </Section>

      <div className={styles.detailSplitGrid}>
        <Section icon={Clock3} title="When to use">
          <ListBlock items={flag.whenToUse} />
        </Section>

        <Section icon={ShieldAlert} title="Avoid when">
          <ListBlock items={flag.whenNotToUse} />
        </Section>
      </div>

      <Section icon={FileText} title="Source Preview" subtle>
        <div className={styles.sourcePreview}>
          <div className={styles.sourcePreviewHeader}>
            <span>{flag.sourcePath || 'Options.td'}</span>
            {flag.sourceLine ? <span>Line {flag.sourceLine}</span> : null}
          </div>
          <div className={styles.sourcePreviewBody}>
            <code>{flag.flag}</code>
            <span>Open the GitHub source to inspect the surrounding definition and implementation context.</span>
          </div>
        </div>
      </Section>

      <div className={styles.detailSplitGrid}>
        <Section icon={FileText} title="Definition" subtle>
          <div className={styles.definitionBlock}>
            <div className={styles.definitionLabel}>Defined in</div>
            <div className={styles.definitionValue}>{sourceLabel}</div>
            {flag.sourceUrl ? (
              <Link className={styles.sourceLink} href={flag.sourceUrl} target="_blank" rel="noreferrer">
                View source on GitHub
                <ExternalLink size={14} strokeWidth={2} />
              </Link>
            ) : null}
          </div>
        </Section>

        <Section icon={Layers3} title="Implementation" subtle>
          <div className={styles.timeline}>
            {implementationTrail.map((step) => (
              <div key={step.title} className={styles.timelineItem}>
                <div className={styles.timelineLabel}>{step.title}</div>
                <div className={styles.timelineValue}>{step.value}</div>
                <div className={styles.timelineNote}>{step.note}</div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </article>
  );
}
