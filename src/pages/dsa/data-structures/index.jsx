import React from 'react';
import DsaShell from '@site/src/components/dsa/DsaShell';
import DsaPageFrame from '@site/src/components/dsa/DsaPageFrame';
import DsaPageSection from '@site/src/components/dsa/DsaPageSection';
import DsaCardGrid from '@site/src/components/dsa/DsaCardGrid';
import DsaSectionCard from '@site/src/components/dsa/DsaSectionCard';

const STRUCTURES = [
  { title: 'Array', description: 'Contiguous storage, direct indexing, and strong locality.' },
  { title: 'String', description: 'Sequence handling, encoding, and text-oriented processing.' },
  { title: 'Stack', description: 'Last-in-first-out ordering for nested or reversible work.' },
  { title: 'Queue', description: 'First-in-first-out scheduling and buffering.' },
  { title: 'Linked list', description: 'Pointer-based navigation with flexible insertion and deletion.' },
  { title: 'Tree', description: 'Hierarchies, branching, and traversal-based reasoning.' },
  { title: 'Heap', description: 'Priority retrieval with partial ordering.' },
  { title: 'Graph', description: 'Relationships, connectivity, and path exploration.' },
  { title: 'Hash table', description: 'Average-case fast lookup through key distribution.' },
];

export default function DsaDataStructures() {
  return (
    <DsaShell title="Data Structures" description="The core containers and shapes that make fast lookup, ordering, hierarchy, and relationship reasoning possible." lead="This page teaches each structure as a shape with a cost model, not just as code." activePath="/dsa/data-structures">
      <DsaPageFrame>
        <DsaPageSection kicker="Core structures" title="Shape, cost, and use case" text="The best way to understand a data structure is to ask what shape it represents and what trade-off it makes possible." aside="The list is ordered from simple to more relational structures.">
          <DsaCardGrid items={STRUCTURES} renderItem={(item) => <DsaSectionCard key={item.title} tag="Structure" title={item.title} description={item.description} />} />
        </DsaPageSection>
      </DsaPageFrame>
    </DsaShell>
  );
}
