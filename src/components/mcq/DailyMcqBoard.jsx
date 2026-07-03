import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import React from 'react';
import {
  DAILY_MCQ_SERIES,
  formatDailyMcqDate,
  getLatestUnlockedDailyMcq,
  isDailyMcqUnlocked,
} from '@site/src/data/mcqDailySeries';

function DailyMcqBoardContent() {
  const today = new Date();
  const latestUnlocked = getLatestUnlockedDailyMcq(today);
  const nextUnlock = DAILY_MCQ_SERIES.find((entry) => !isDailyMcqUnlocked(entry.releaseDate, today));
  const unlockedCount = DAILY_MCQ_SERIES.filter((entry) => isDailyMcqUnlocked(entry.releaseDate, today)).length;

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
            'linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(234, 179, 8, 0.10)), var(--ifm-background-surface-color)',
          boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 'auto -6% -36% auto',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            background: 'rgba(56, 189, 248, 0.10)',
            filter: 'blur(10px)',
          }}
        />
        <p style={{margin: 0, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.78rem', color: 'var(--ifm-color-primary)'}}>
          Daily MCQ series
        </p>
        <h1 style={{marginTop: '0.45rem', marginBottom: '0.85rem', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.05}}>
          20 days of mixed C++, DSA, compiler, OS, CPU, and GPU MCQs
        </h1>
        <p style={{maxWidth: '800px', fontSize: '1.02rem', color: 'var(--ifm-color-emphasis-800)', marginBottom: '1rem'}}>
          Each day unlocks at midnight UTC. New pages can be added ahead of time, but the site only surfaces the day that is currently live.
        </p>

        <div style={{display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))'}}>
          <div style={{padding: '0.9rem 1rem', borderRadius: '18px', border: '1px solid var(--ifm-color-emphasis-200)', background: 'rgba(255,255,255,0.45)'}}>
            <div style={{fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ifm-color-emphasis-700)'}}>Total days</div>
            <strong style={{fontSize: '1.35rem'}}>{DAILY_MCQ_SERIES.length}</strong>
          </div>
          <div style={{padding: '0.9rem 1rem', borderRadius: '18px', border: '1px solid var(--ifm-color-emphasis-200)', background: 'rgba(255,255,255,0.45)'}}>
            <div style={{fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ifm-color-emphasis-700)'}}>Unlocked today</div>
            <strong style={{fontSize: '1.35rem'}}>{unlockedCount}</strong>
          </div>
          <div style={{padding: '0.9rem 1rem', borderRadius: '18px', border: '1px solid var(--ifm-color-emphasis-200)', background: 'rgba(255,255,255,0.45)'}}>
            <div style={{fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ifm-color-emphasis-700)'}}>Latest live day</div>
            <strong style={{fontSize: '1.05rem'}}>{latestUnlocked ? latestUnlocked.title : 'None yet'}</strong>
          </div>
        </div>

        <div style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.25rem'}}>
          <Link className="button button--lg button--primary" to={latestUnlocked ? latestUnlocked.slug : '/docs/mcq/daily/day-01'}>
            {latestUnlocked ? 'Open today\'s MCQ' : 'Open day 01'}
          </Link>
          <Link className="button button--lg button--secondary" to="/docs/mcq/daily">
            View the daily track
          </Link>
        </div>
      </section>

      {nextUnlock ? (
        <div
          style={{
            padding: '1rem 1.1rem',
            borderRadius: '20px',
            border: '1px solid var(--ifm-color-emphasis-200)',
            background: 'var(--ifm-background-surface-color)',
          }}
        >
          <strong>Next unlock:</strong> Day {String(nextUnlock.day).padStart(2, '0')} on {formatDailyMcqDate(nextUnlock.releaseDate)} UTC
        </div>
      ) : null}

      <section style={{display: 'grid', gap: '1rem'}}>
        <div>
          <p style={{margin: 0, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.78rem', color: 'var(--ifm-color-emphasis-700)'}}>
            Day-by-day release board
          </p>
          <h2 style={{marginTop: '0.35rem'}}>Track progress and open the current day</h2>
        </div>

        <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'}}>
          {DAILY_MCQ_SERIES.map((entry) => {
            const unlocked = isDailyMcqUnlocked(entry.releaseDate, today);

            return (
              <article
                key={entry.day}
                style={{
                  padding: '1rem',
                  borderRadius: '20px',
                  border: '1px solid var(--ifm-color-emphasis-200)',
                  background: unlocked
                    ? 'linear-gradient(180deg, rgba(34, 197, 94, 0.08), rgba(15, 23, 42, 0.02))'
                    : 'var(--ifm-background-surface-color)',
                  boxShadow: unlocked ? '0 12px 26px rgba(15, 23, 42, 0.06)' : 'none',
                }}
              >
                <div style={{display: 'flex', justifyContent: 'space-between', gap: '0.75rem', alignItems: 'start'}}>
                  <div>
                    <div style={{fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ifm-color-emphasis-700)'}}>
                      Day {String(entry.day).padStart(2, '0')}
                    </div>
                    <h3 style={{marginTop: '0.35rem', marginBottom: '0.35rem'}}>{entry.title}</h3>
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '0.35rem 0.55rem',
                      borderRadius: '999px',
                      background: unlocked ? 'rgba(34, 197, 94, 0.14)' : 'rgba(148, 163, 184, 0.18)',
                      color: unlocked ? 'var(--ifm-color-success-darkest)' : 'var(--ifm-color-emphasis-700)',
                    }}
                  >
                    {unlocked ? 'Live' : 'Locked'}
                  </span>
                </div>

                <p style={{marginTop: 0, marginBottom: '0.75rem', color: 'var(--ifm-color-emphasis-700)'}}>
                  {entry.summary}
                </p>

                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '0.85rem'}}>
                  {entry.focus.map((item) => (
                    <span
                      key={item}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.3rem 0.55rem',
                        borderRadius: '999px',
                        background: 'rgba(59, 130, 246, 0.10)',
                        color: 'var(--ifm-color-emphasis-800)',
                        fontSize: '0.78rem',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', gap: '0.75rem', alignItems: 'center'}}>
                  <div style={{fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)'}}>
                    Releases on {formatDailyMcqDate(entry.releaseDate)} UTC
                  </div>
                  {unlocked ? (
                    <Link to={entry.slug} style={{fontWeight: 600}}>
                      Open day
                    </Link>
                  ) : (
                    <span style={{fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-600)'}}>Unlocks later</span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default function DailyMcqBoard() {
  return (
    <BrowserOnly fallback={<div style={{padding: '1rem 0'}}>Loading daily MCQ schedule...</div>}>
      {() => <DailyMcqBoardContent />}
    </BrowserOnly>
  );
}
