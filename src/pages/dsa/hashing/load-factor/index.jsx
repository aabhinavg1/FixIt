import React from 'react';
import DsaLessonPlaceholder from '@site/src/components/dsa/DsaLessonPlaceholder';
import { DSA_LESSONS } from '@site/src/data/dsaSections';

export default function DsaPlaceholderLesson() {
  const lesson = DSA_LESSONS['hashing/load-factor'];
  return (
    <DsaLessonPlaceholder
      title={lesson.title}
      lead={lesson.lead}
      route="/dsa/hashing/load-factor"
      moduleTitle={lesson.moduleTitle}
      moduleRoute={lesson.moduleRoute}
      outline={lesson.outline}
    />
  );
}
