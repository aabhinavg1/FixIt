import React from 'react';
import DsaShell from '@site/src/components/dsa/DsaShell';
import DsaPageFrame from '@site/src/components/dsa/DsaPageFrame';
import DsaPageSection from '@site/src/components/dsa/DsaPageSection';
import DsaCardGrid from '@site/src/components/dsa/DsaCardGrid';
import DsaSectionCard from '@site/src/components/dsa/DsaSectionCard';

const MATH_TOPICS = [
  { title: 'Counting', description: 'How many possibilities exist and how to enumerate them carefully.' },
  { title: 'Recurrences', description: 'How repeated structure becomes a solvable relation.' },
  { title: 'Invariants', description: 'How to prove a property never breaks while a process runs.' },
  { title: 'Probability', description: 'How uncertainty and expectation shape randomized algorithms.' },
];

export default function DsaMathematics() {
  return (
    <DsaShell title="Mathematics" description="Counting, recurrence, invariants, and probability for algorithmic reasoning." lead="This page builds the mathematical habits that make DSA feel precise instead of memorized." activePath="/dsa/mathematics">
      <DsaPageFrame>
        <DsaPageSection kicker="Math foundation" title="Math that helps you reason" text="The goal is not to become a mathematician. The goal is to use the right kind of math when a problem needs proof, counting, or careful trade-off analysis." aside="Good DSA often starts with a clean counting argument.">
          <DsaCardGrid items={MATH_TOPICS} renderItem={(item) => <DsaSectionCard key={item.title} tag="Math" title={item.title} description={item.description} />} />
        </DsaPageSection>
      </DsaPageFrame>
    </DsaShell>
  );
}
