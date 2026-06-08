import React from 'react';
import DsaShell from '@site/src/components/dsa/DsaShell';
import DsaPageFrame from '@site/src/components/dsa/DsaPageFrame';
import DsaPageSection from '@site/src/components/dsa/DsaPageSection';
import DsaCardGrid from '@site/src/components/dsa/DsaCardGrid';
import DsaSectionCard from '@site/src/components/dsa/DsaSectionCard';

const FOUNDATION_BLOCKS = [
  { title: 'Why DSA exists', description: 'To organize information and reduce the cost of finding, storing, updating, and reasoning about data.' },
  { title: 'Mental model', description: 'A problem becomes a state, a rule, a transition, and an objective function.' },
  { title: 'Intuition', description: 'The better the structure matches the task, the less work the machine must do.' },
  { title: 'Exercise', description: 'Take one app you use daily and name the data structure hidden inside it.' },
];

export default function DsaFoundations() {
  return (
    <DsaShell title="Foundations" description="Computational thinking, state modeling, reasoning habits, and the base layer that makes DSA easier to learn." lead="This page sets the mental model. The goal is to think in states, transitions, constraints, and goals before touching any implementation." activePath="/dsa/foundations">
      <DsaPageFrame>
        <DsaPageSection
          kicker="Core mindset"
          title="Think before you implement"
          text="Start by separating the problem into data, operations, and cost."
          aside="The page is intentionally short and structured so students can absorb the model quickly."
        >
          <DsaCardGrid
            items={FOUNDATION_BLOCKS}
            renderItem={(item) => <DsaSectionCard key={item.title} tag="Foundation" title={item.title} description={item.description} />}
          />
        </DsaPageSection>
      </DsaPageFrame>
    </DsaShell>
  );
}
