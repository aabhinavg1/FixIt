import React from 'react';
import Link from '@docusaurus/Link';
import DsaShell from '@site/src/components/dsa/DsaShell';
import DsaPageFrame from '@site/src/components/dsa/DsaPageFrame';
import DsaPageSection from '@site/src/components/dsa/DsaPageSection';
import DsaCardGrid from '@site/src/components/dsa/DsaCardGrid';
import DsaSectionCard from '@site/src/components/dsa/DsaSectionCard';
import { DSA_CURRICULUM } from '@site/src/data/dsa';
import styles from './roadmap.module.css';

const SECTION_GROUPS = [
  {
    title: 'Foundations',
    kicker: '00-03',
    description: 'Learn how to frame problems, reason about bits, and estimate cost before choosing a structure.',
    steps: ['00', '01', '02', '03'],
  },
  {
    title: 'Core structures',
    kicker: '04-11',
    description: 'Learn arrays, strings, search, sorting, recursion, stacks, queues, and linked lists.',
    steps: ['04', '05', '06', '07', '08', '09', '10', '11'],
  },
  {
    title: 'Trees and graphs',
    kicker: '12-15',
    description: 'Move from linear thinking to hierarchy, priority, relationships, and fast lookup.',
    steps: ['12', '13', '14', '15'],
  },
  {
    title: 'Algorithms and capstone',
    kicker: '16-19',
    description: 'Finish with DP, greedy, advanced patterns, and real domain usage.',
    steps: ['16', '17', '18', '19'],
  },
];

const STEP_LINKS = {
  '00': '/dsa/foundations',
  '01': '/dsa/binary-math',
  '02': '/dsa/mathematics',
  '03': '/dsa/complexity',
  '04': '/dsa/data-structures',
  '05': '/dsa/data-structures',
  '06': '/dsa/algorithms',
  '07': '/dsa/algorithms',
  '08': '/dsa/algorithms',
  '09': '/dsa/data-structures',
  '10': '/dsa/data-structures',
  '11': '/dsa/data-structures',
  '12': '/dsa/data-structures',
  '13': '/dsa/data-structures',
  '14': '/dsa/algorithms',
  '15': '/dsa/data-structures',
  '16': '/dsa/algorithms',
  '17': '/dsa/algorithms',
  '18': '/dsa/algorithms',
  '19': '/dsa/domain-applications',
};

function getGroupSteps(group) {
  return DSA_CURRICULUM.filter((item) => group.steps.includes(item.step));
}

function StepCard({ item }) {
  const link = STEP_LINKS[item.step] || '/dsa/roadmap';

  return (
    <Link to={link} className={styles.stepLink}>
      <article className={styles.stepCard}>
        <div className={styles.stepHeader}>
          <span className={styles.stepNumber}>{item.step}</span>
          <div>
            <h3 className={styles.stepTitle}>{item.title}</h3>
            <p className={styles.stepMeta}>{item.duration} · {item.prerequisites.join(' · ')}</p>
          </div>
        </div>
        <p className={styles.stepObjective}>{item.objective}</p>
        <p className={styles.stepNote}>This card previews the lesson. The linked page may include more exercises.</p>
        <div className={styles.stepFooter}>
          <span>{item.exercises.length} preview items</span>
          <span>Open lesson</span>
        </div>
      </article>
    </Link>
  );
}

export default function DsaRoadmap() {
  return (
    <DsaShell
      title="Roadmap"
      description="A simple sequence for learning DSA in the right order."
      lead="Start with problem framing, then learn the structures that solve most questions, then move into algorithms and domain applications."
      activePath="/dsa/roadmap"
    >
      <DsaPageFrame>
        <DsaPageSection
          kicker="Roadmap"
          title="Learn in a clean order"
          text="The roadmap is organized by dependency. Earlier steps build the thinking needed for later ones."
          aside="If you already know a topic, you can skip forward, but keep the sequence in mind."
        >
          <div className={styles.quickLinks}>
            <Link to="/dsa/foundations" className={styles.quickLink}>Start with foundations</Link>
            <Link to="/dsa/binary-math" className={styles.quickLink}>Go to binary math</Link>
            <Link to="/dsa/algorithms" className={styles.quickLink}>Jump to algorithms</Link>
            <Link to="/dsa/domain-applications" className={styles.quickLink}>See real-world usage</Link>
          </div>
        </DsaPageSection>

        {SECTION_GROUPS.map((group) => {
          const items = getGroupSteps(group);
          return (
            <DsaPageSection
              key={group.title}
              kicker={group.kicker}
              title={group.title}
              text={group.description}
              aside="Read the objective first, then open the section and do the exercises."
            >
              <DsaCardGrid
                items={items}
                columns={2}
                renderItem={(item) => <StepCard key={item.step} item={item} />}
              />
            </DsaPageSection>
          );
        })}

        <DsaPageSection
          kicker="Study rule"
          title="A better way to use the roadmap"
          text="Do not read everything at once. Pick one module, solve a few problems, then return for the next module."
          aside="The roadmap works best when it is used as a loop, not a checklist to scroll through once."
        >
          <DsaCardGrid
            items={[
              { title: 'Read', description: 'Understand the objective and the prerequisite.' },
              { title: 'Practice', description: 'Solve a few problems that match the pattern.' },
              { title: 'Review', description: 'Write down the mistake you made and the fix.' },
              { title: 'Move on', description: 'Only then continue to the next step.' },
            ]}
            columns={4}
            renderItem={(item) => (
              <DsaSectionCard key={item.title} tag="Rule" title={item.title} description={item.description} />
            )}
          />
        </DsaPageSection>
      </DsaPageFrame>
    </DsaShell>
  );
}
