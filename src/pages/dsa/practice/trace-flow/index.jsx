import React from 'react';
import DsaLessonPlaceholder from '@site/src/components/dsa/DsaLessonPlaceholder';
import { DSA_LESSONS } from '@site/src/data/dsaSections';

export default function DsaPlaceholderLesson() {
  const lesson = DSA_LESSONS['practice/trace-flow'];
  return (
    <DsaLessonPlaceholder
      title={lesson.title}
      lead={lesson.lead}
      route="/dsa/practice/trace-flow"
      moduleTitle={lesson.moduleTitle}
      moduleRoute={lesson.moduleRoute}
      outline={lesson.outline}
    />
  );
}
