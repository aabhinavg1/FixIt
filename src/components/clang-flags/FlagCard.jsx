import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { buildFlagArticlePath } from './flagRoutes';
import { BookOpenText, Check, Code2, ExternalLink, FileText, Layers3, ShieldAlert, Clock3 } from 'lucide-react';
import Badge from './Badge';
import CodeBlock from './CodeBlock';
import styles from './clangFlags.module.css';
import { buildPipelineTrail, buildImplementationTrail, buildWhenToUse, buildWhenNotToUse } from './flagTrails';
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
  const articleHref = buildFlagArticlePath(flag.flag);
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
      <Link
        to={articleHref}
        className={clsx(styles.flagCard, styles.flagCardCompact, styles.flagCardButton, selected && styles.flagCardSelected)}
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
      </Link>
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
            <Link to={articleHref} className={styles.flagTitleLink}>
              {titleParts.map((part, index) =>
                part.highlighted ? (
                  <mark key={index} className={styles.searchMark}>
                    {part.text}
                  </mark>
                ) : (
                  <span key={index}>{part.text}</span>
                ),
              )}
            </Link>
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
          <ListBlock items={buildWhenToUse(flag)} />
        </Section>

        <Section icon={ShieldAlert} title="Avoid when">
          <ListBlock items={buildWhenNotToUse(flag)} />
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
