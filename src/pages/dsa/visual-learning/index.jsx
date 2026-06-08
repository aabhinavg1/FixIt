import React from 'react';
import DsaShell from '@site/src/components/dsa/DsaShell';
import DsaPageFrame from '@site/src/components/dsa/DsaPageFrame';
import DsaPageSection from '@site/src/components/dsa/DsaPageSection';
import DsaCardGrid from '@site/src/components/dsa/DsaCardGrid';
import DsaSectionCard from '@site/src/components/dsa/DsaSectionCard';

const VISUALS = [
  { title: 'Memory strip', description: 'Show contiguous layout, offsets, and element access.' },
  { title: 'Recurrence tree', description: 'Turn divide-and-conquer cost into a visible structure.' },
  { title: 'Traversal frontier', description: 'Track what gets visited next in BFS or DFS.' },
  { title: 'Bucket map', description: 'Explain hashing, collisions, and load factor visually.' },
];

export default function DsaVisualLearning() {
  return (
    <DsaShell title="Visual Learning" description="A visual-first explanation layer for the most common DSA patterns." lead="Use diagrams, not long walls of text, to internalize how each structure or algorithm behaves." activePath="/dsa/visual-learning">
      <DsaPageFrame>
        <DsaPageSection kicker="Visual model" title="See the algorithm before you code it" text="This page is a visual glossary. The goal is to make each pattern recognizable at a glance." aside="The best DSA learners can sketch the shape of a solution quickly.">
          <DsaCardGrid items={VISUALS} renderItem={(item) => <DsaSectionCard key={item.title} tag="Visual" title={item.title} description={item.description} />} />
        </DsaPageSection>
      </DsaPageFrame>
    </DsaShell>
  );
}
