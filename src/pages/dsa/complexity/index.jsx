import React from 'react';
import DsaShell from '@site/src/components/dsa/DsaShell';
import DsaPageFrame from '@site/src/components/dsa/DsaPageFrame';
import DsaPageSection from '@site/src/components/dsa/DsaPageSection';
import DsaCardGrid from '@site/src/components/dsa/DsaCardGrid';
import DsaSectionCard from '@site/src/components/dsa/DsaSectionCard';
import { DSA_FORMULAE } from '@site/src/data/dsa';

const COMPLEXITY_BLOCKS = [
  { title: 'Big-O', description: 'Upper-bound growth and why it matters at scale.' },
  { title: 'Omega and Theta', description: 'Lower bounds and tight bounds for sharper reasoning.' },
  { title: 'Amortized cost', description: 'Why occasional expensive operations can still be efficient overall.' },
  { title: 'Space vs time', description: 'How memory budget changes algorithm choice.' },
];

export default function DsaComplexity() {
  return (
    <DsaShell title="Complexity" description="Growth rates, trade-offs, recurrence intuition, and the language of scale." lead="Complexity is how you explain why one solution survives large input and another does not." activePath="/dsa/complexity">
      <DsaPageFrame>
        <DsaPageSection kicker="Scaling" title="How fast does it grow?" text="This page is the language of cost. It explains why some techniques are fine for 100 items but not for 100 million." aside="The formulas below are the minimum set worth memorizing.">
          <DsaCardGrid items={COMPLEXITY_BLOCKS} renderItem={(item) => <DsaSectionCard key={item.title} tag="Complexity" title={item.title} description={item.description} />} />
        </DsaPageSection>

        <DsaPageSection kicker="Formula layer" title="Core complexity formulas" text="These relations help you reason about growth and trade-offs before you implement.">
          <DsaCardGrid items={DSA_FORMULAE.slice(1)} renderItem={(item) => <DsaSectionCard key={item.label} tag="Formula" title={item.label} description={item.value} />} />
        </DsaPageSection>
      </DsaPageFrame>
    </DsaShell>
  );
}
