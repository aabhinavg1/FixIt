import React from 'react';
import DsaShell from '@site/src/components/dsa/DsaShell';
import DsaPageFrame from '@site/src/components/dsa/DsaPageFrame';
import DsaPageSection from '@site/src/components/dsa/DsaPageSection';
import DsaCardGrid from '@site/src/components/dsa/DsaCardGrid';
import DsaSectionCard from '@site/src/components/dsa/DsaSectionCard';
import { DSA_FORMULAE } from '@site/src/data/dsa';

const BINARY_TOPICS = [
  { title: 'Bits and bytes', description: 'How data is represented, packed, and moved through memory.' },
  { title: 'Shifts and masks', description: 'How binary arithmetic powers indexing, flags, alignment, and compact state.' },
  { title: 'Complements', description: 'Why two’s complement exists and how signed integers are encoded.' },
  { title: 'Logarithms', description: 'Why halving behavior and powers of two show up in performance analysis.' },
];

export default function DsaBinaryMath() {
  return (
    <DsaShell title="Binary Math" description="Bits, powers of two, masks, shifts, complements, and the math behind low-level data reasoning." lead="Binary math is the bridge between abstract data structures and the machine model that stores them." activePath="/dsa/binary-math">
      <DsaPageFrame>
        <DsaPageSection kicker="Core concepts" title="The machine-friendly layer" text="Binary is the language underneath indexing, memory layout, masks, flags, and many performance tricks. Understand this layer once, and a lot of DSA gets simpler." aside="Focus on meaning first, not just conversion drills.">
          <DsaCardGrid items={BINARY_TOPICS} renderItem={(item) => <DsaSectionCard key={item.title} tag="Binary" title={item.title} description={item.description} />} />
        </DsaPageSection>

        <DsaPageSection kicker="Formula layer" title="Useful formulae" text="These are the formulas students should be able to recall and explain from memory.">
          <DsaCardGrid items={DSA_FORMULAE} renderItem={(item) => <DsaSectionCard key={item.label} tag="Formula" title={item.label} description={item.value} />} />
        </DsaPageSection>
      </DsaPageFrame>
    </DsaShell>
  );
}
