import React from 'react';
import { DAILY_MCQ_SERIES, getDailyMcqDay } from '@site/src/data/mcqDailySeries';
import { getDailyMcqQuestions } from '@site/src/data/mcqDailyQuestionBank';
import DailyMcqDayFrameV2 from './DailyMcqDayFrameV2';

export default function DailyMcqDayPageV2({ day }) {
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
    <DailyMcqDayFrameV2
      day={entry.day}
      title={entry.title}
      summary={entry.summary}
      releaseDate={entry.releaseDate}
      topic={entry.topic}
      focus={entry.focus}
      questions={getDailyMcqQuestions(day)}
      previousSlug={previousSlug}
      nextSlug={nextSlug}
    />
  );
}
