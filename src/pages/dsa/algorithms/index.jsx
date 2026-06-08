import React from 'react';
import DsaShell from '@site/src/components/dsa/DsaShell';
import DsaPageFrame from '@site/src/components/dsa/DsaPageFrame';
import DsaPageSection from '@site/src/components/dsa/DsaPageSection';
import DsaCardGrid from '@site/src/components/dsa/DsaCardGrid';
import DsaSectionCard from '@site/src/components/dsa/DsaSectionCard';

const ALGO_TOPICS = [
  { title: 'Searching', description: 'Reduce uncertainty by shrinking the search space.' },
  { title: 'Sorting', description: 'Order data to unlock faster follow-up operations and clearer reasoning.' },
  { title: 'Recursion', description: 'Solve a task by solving smaller versions of the same task.' },
  { title: 'Greedy', description: 'Make locally best choices when the proof supports it.' },
  { title: 'Dynamic Programming', description: 'Reuse overlapping subproblems instead of recomputing them.' },
  { title: 'Advanced patterns', description: 'Backtracking, graph algorithms, interval logic, and optimization patterns.' },
];

export default function DsaAlgorithms() {
  return (
    <DsaShell title="Algorithms" description="Search, sort, recursion, greedy, DP, and advanced pattern recognition." lead="Algorithms are not just procedures. They are ways of reducing uncertainty, cost, and search space with provable structure." activePath="/dsa/algorithms">
      <DsaPageFrame>
        <DsaPageSection kicker="Pattern recognition" title="Learn the recurring algorithm shapes" text="Most hard problems are combinations of a few familiar strategies. Once you can identify the pattern, you can choose the right tool faster." aside="This section should feel like a map of repeatable ideas.">
          <DsaCardGrid items={ALGO_TOPICS} renderItem={(item) => <DsaSectionCard key={item.title} tag="Pattern" title={item.title} description={item.description} />} />
        </DsaPageSection>
      </DsaPageFrame>
    </DsaShell>
  );
}
