import React from 'react';
import { DAILY_MCQ_SERIES, getDailyMcqDay } from '@site/src/data/mcqDailySeries';
import DailyMcqDayFrame from './DailyMcqDayFrame';

export default function DailyMcqDayPage({ day, children }) {
  const entry = getDailyMcqDay(day);

  if (!entry) {
    return (
      <div style={{padding: '1rem 0'}}>
        <strong>Unknown daily MCQ day:</strong> {day}
      </div>
    );
  }

  const previousSlug = DAILY_MCQ_SERIES[day - 2]?.slug || null;
  const nextSlug = DAILY_MCQ_SERIES[day]?.slug || null;

  return (
    <DailyMcqDayFrame
      day={entry.day}
      title={entry.title}
      summary={entry.summary}
      releaseDate={entry.releaseDate}
      topic={entry.topic}
      focus={entry.focus}
      previousSlug={previousSlug}
      nextSlug={nextSlug}
    >
      {children}
    </DailyMcqDayFrame>
  );
}
