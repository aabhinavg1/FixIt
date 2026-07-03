import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import React from 'react';
import { formatDailyMcqDate, isDailyMcqUnlocked } from '@site/src/data/mcqDailySeries';

function DailyMcqDayContent({
  day,
  title,
  summary,
  releaseDate,
  topic,
  focus,
  previousSlug,
  nextSlug,
  children,
}) {
  const unlocked = isDailyMcqUnlocked(releaseDate, new Date());

  return (
    <div style={{display: 'grid', gap: '1.25rem'}}>
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '28px',
          padding: '2rem',
          border: '1px solid var(--ifm-color-emphasis-200)',
          background:
            'linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(234, 179, 8, 0.10)), var(--ifm-background-surface-color)',
          boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 'auto -6% -38% auto',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.11)',
            filter: 'blur(10px)',
          }}
        />
        <p style={{margin: 0, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.78rem', color: 'var(--ifm-color-primary)'}}>
          Daily MCQ Day {String(day).padStart(2, '0')}
        </p>
        <h1 style={{marginTop: '0.45rem', marginBottom: '0.85rem', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.05}}>
          {title}
        </h1>
        <p style={{maxWidth: '820px', fontSize: '1.02rem', color: 'var(--ifm-color-emphasis-800)'}}>
          {summary}
        </p>

        <div style={{display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', marginTop: '1.25rem'}}>
          <div style={{padding: '0.9rem 1rem', borderRadius: '18px', border: '1px solid var(--ifm-color-emphasis-200)', background: 'rgba(255,255,255,0.45)'}}>
            <div style={{fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ifm-color-emphasis-700)'}}>Release date</div>
            <strong style={{fontSize: '1.05rem'}}>{formatDailyMcqDate(releaseDate)} UTC</strong>
          </div>
          <div style={{padding: '0.9rem 1rem', borderRadius: '18px', border: '1px solid var(--ifm-color-emphasis-200)', background: 'rgba(255,255,255,0.45)'}}>
            <div style={{fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ifm-color-emphasis-700)'}}>Focus mix</div>
            <strong style={{fontSize: '1.05rem'}}>{topic}</strong>
          </div>
          <div style={{padding: '0.9rem 1rem', borderRadius: '18px', border: '1px solid var(--ifm-color-emphasis-200)', background: 'rgba(255,255,255,0.45)'}}>
            <div style={{fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ifm-color-emphasis-700)'}}>Access</div>
            <strong style={{fontSize: '1.05rem'}}>{unlocked ? 'Live now' : 'Locked until release'}</strong>
          </div>
        </div>

        <div style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.25rem'}}>
          <Link className="button button--secondary button--lg" to="/docs/mcq/daily">
            Back to daily hub
          </Link>
          {previousSlug ? (
            <Link className="button button--secondary button--lg" to={previousSlug}>
              Previous day
            </Link>
          ) : null}
          {nextSlug ? (
            <Link className="button button--secondary button--lg" to={nextSlug}>
              Next day
            </Link>
          ) : null}
        </div>
      </section>

      {unlocked ? (
        <section
          style={{
            display: 'grid',
            gap: '1rem',
            padding: '1.1rem',
            borderRadius: '22px',
            border: '1px solid var(--ifm-color-emphasis-200)',
            background: 'var(--ifm-background-surface-color)',
          }}
        >
          <div>
            <p style={{margin: 0, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.78rem', color: 'var(--ifm-color-emphasis-700)'}}>
              Question slot
            </p>
            <h2 style={{marginTop: '0.35rem'}}>Add the 20 mixed MCQs for this day here</h2>
          </div>

          <div
            style={{
              padding: '1rem',
              borderRadius: '18px',
              border: '1px dashed var(--ifm-color-emphasis-300)',
              background: 'rgba(148, 163, 184, 0.06)',
            }}
          >
            <p style={{marginTop: 0}}>
              Replace this placeholder with your `Question` components. A practical mix for each day is:
            </p>
            <ul style={{marginBottom: 0}}>
              {focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
              <li>20 total questions per day</li>
            </ul>
          </div>

          {children}
        </section>
      ) : (
        <section
          style={{
            padding: '1.2rem 1.25rem',
            borderRadius: '22px',
            border: '1px solid var(--ifm-color-emphasis-200)',
            background: 'var(--ifm-background-surface-color)',
          }}
        >
          <h2 style={{marginTop: 0}}>This day is not live yet</h2>
          <p style={{marginBottom: 0}}>
            The page unlocks on {formatDailyMcqDate(releaseDate)} UTC. The day card in the hub will switch to live automatically.
          </p>
        </section>
      )}
    </div>
  );
}

export default function DailyMcqDayFrame(props) {
  return (
    <BrowserOnly fallback={<div style={{padding: '1rem 0'}}>Loading daily MCQ page...</div>}>
      {() => <DailyMcqDayContent {...props} />}
    </BrowserOnly>
  );
}
