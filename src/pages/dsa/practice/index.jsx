import React from 'react';
import DsaShell from '@site/src/components/dsa/DsaShell';
import DsaPageFrame from '@site/src/components/dsa/DsaPageFrame';
import DsaPageSection from '@site/src/components/dsa/DsaPageSection';
import DsaCardGrid from '@site/src/components/dsa/DsaCardGrid';
import DsaSectionCard from '@site/src/components/dsa/DsaSectionCard';

const PRACTICE = [
  { title: 'Trace the flow', description: 'Follow an input through a structure or algorithm and explain each step.' },
  { title: 'Derive the cost', description: 'Write the time or space cost with a short justification.' },
  { title: 'Draw the model', description: 'Build the visual map before coding anything.' },
  { title: 'Domain transfer', description: 'Explain the same concept in AI, OS, DB, or networking.' },
];

export default function DsaPractice() {
  return (
    <DsaShell title="Practice" description="Exercises that focus on reasoning, not just writing code." lead="Practice is designed to build confidence in tracing, proving, and applying ideas under pressure." activePath="/dsa/practice">
      <DsaPageFrame>
        <DsaPageSection kicker="Practice loop" title="Exercises that train thinking" text="The best exercises force you to explain why the answer works, not only what the answer is." aside="Use these drills after each lesson.">
          <DsaCardGrid items={PRACTICE} renderItem={(item) => <DsaSectionCard key={item.title} tag="Exercise" title={item.title} description={item.description} />} />
        </DsaPageSection>
      </DsaPageFrame>
    </DsaShell>
  );
}
