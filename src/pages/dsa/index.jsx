import React from 'react';
import Link from '@docusaurus/Link';
import { FaArrowRight } from 'react-icons/fa';
import DsaShell from '@site/src/components/dsa/DsaShell';
import DsaPageFrame from '@site/src/components/dsa/DsaPageFrame';
import DsaPageSection from '@site/src/components/dsa/DsaPageSection';
import DsaSectionCard from '@site/src/components/dsa/DsaSectionCard';
import { DSA_DOMAIN_AREAS, DSA_NAV_ITEMS } from '@site/src/data/dsa';
import styles from './index.module.css';

const MASTER_ROUTE_GROUPS = [
  {
    kicker: 'Start here',
    title: 'The first pages to open',
    text: 'If someone lands on /dsa without context, these are the pages that explain the section before it branches into individual topics.',
    aside: 'Start with the route that matches the kind of help you need.',
    items: [
      {
        to: '/dsa/foundations',
        tag: 'Start here',
        title: 'Foundations',
        description: 'How to frame a DSA problem as data, operations, constraints, and goals.',
      },
      {
        to: '/dsa/problem-solving',
        tag: 'Workflow',
        title: 'Problem Solving',
        description: 'A repeatable method for restating the problem, matching the pattern, and choosing the structure.',
      },
      {
        to: '/dsa/roadmap',
        tag: 'Map',
        title: 'Roadmap',
        description: 'The full learning sequence in the order it should be studied.',
      },
      {
        to: '/dsa/complexity',
        tag: 'Core language',
        title: 'Complexity',
        description: 'The cost model behind time, space, amortized behavior, and scale.',
      },
    ],
  },
  {
    kicker: 'Core topics',
    title: 'The main topic pages',
    text: 'These are the pages most people will jump into after they understand the learning order.',
    aside: 'This is the part of the site that should feel like the real table of contents.',
    items: [
      {
        to: '/dsa/binary-math',
        tag: 'Math',
        title: 'Binary Math',
        description: 'Bits, masks, shifts, and the integer-level ideas behind many DSA tricks.',
      },
      {
        to: '/dsa/mathematics',
        tag: 'Math',
        title: 'Mathematics',
        description: 'Counting, invariants, recurrence reasoning, and proof-style thinking.',
      },
      {
        to: '/dsa/data-structures',
        tag: 'Structure map',
        title: 'Data Structures',
        description: 'The shape, purpose, and cost model of the core containers.',
      },
      {
        to: '/dsa/arrays',
        tag: 'Deep dive',
        title: 'Arrays',
        description: 'Contiguous storage, index math, operations, trade-offs, and array-based patterns.',
      },
      {
        to: '/dsa/binary-search',
        tag: 'Deep dive',
        title: 'Binary Search',
        description: 'The invariant, variants, and boundary logic that make ordered search reliable.',
      },
      {
        to: '/dsa/hashing',
        tag: 'Deep dive',
        title: 'Hashing',
        description: 'Fast membership, counting, collision handling, and average-case lookup.',
      },
      {
        to: '/dsa/algorithms',
        tag: 'Pattern map',
        title: 'Algorithms',
        description: 'Searching, sorting, recursion, greedy logic, dynamic programming, and more.',
      },
    ],
  },
  {
    kicker: 'Support pages',
    title: 'Pages that make the main topics easier to use',
    text: 'These pages help students see the shape of the problem, the diagram behind the code, and the way the ideas show up in practice.',
    aside: 'They are helpers, not filler.',
    items: [
      {
        to: '/dsa/practice',
        tag: 'Exercises',
        title: 'Practice',
        description: 'Reasoning drills that train tracing, complexity checks, and domain transfer.',
      },
      {
        to: '/dsa/visual-learning',
        tag: 'Visuals',
        title: 'Visual Learning',
        description: 'A visual glossary for common DSA structures and flows.',
      },
      {
        to: '/dsa/domain-applications',
        tag: 'Context',
        title: 'Domain Usage',
        description: 'How DSA shows up in AI, databases, operating systems, networking, and more.',
      },
    ],
  },
];

const INDEX_LINKS = DSA_NAV_ITEMS.filter((item) => item.to !== '/dsa');

function TopicLinkCard({ to, tag, title, description, footnote }) {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      <DsaSectionCard tag={tag} title={title} description={description} footnote={footnote} />
    </Link>
  );
}

export default function DsaHome() {
  return (
    <DsaShell
      title="DSA Master Index"
      description="The full route map for the DSA Academy, with every topic page grouped in one place."
      eyebrow="CompilerSutra DSA Academy"
      lead="Use this page as the master entry point. It links every DSA route, groups the important topics, and gives you a clean place to start without guessing where to go next."
      activePath="/dsa"
      metaTitle="DSA Academy"
      heroPanel={(
        <div>
          <p style={{ marginTop: 0, fontWeight: 700 }}>How to use this page</p>
          <ul style={{ marginBottom: 0, paddingLeft: '1.2rem', lineHeight: 1.7 }}>
            <li>Open the route you need from the index below.</li>
            <li>Start with foundations if you want the full sequence.</li>
            <li>Jump straight to arrays, hashing, or binary search if you want a focused topic.</li>
          </ul>
        </div>
      )}
    >
      <DsaPageFrame>
        <DsaPageSection
          className={styles.sectionTint}
          kicker="Master index"
          title="Every DSA page in one place"
          text="This is the directory for the whole DSA area. The route list below is the quickest way to move from the master page to a focused lesson."
          aside=""
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {INDEX_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: '2.25rem',
                  padding: '0.5rem 0.85rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(134, 156, 184, 0.18)',
                  background: 'rgba(255, 255, 255, 0.84)',
                  color: '#102033',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </DsaPageSection>

        {MASTER_ROUTE_GROUPS.map((group) => (
          <DsaPageSection
            key={group.title}
            className={styles.sectionTint}
            kicker={group.kicker}
            title={group.title}
            text={group.text}
            aside={group.aside}
          >
            <div className={styles.domainGrid}>
              {group.items.map((item) => (
                <TopicLinkCard
                  key={item.to}
                  to={item.to}
                  tag={item.tag}
                  title={item.title}
                  description={item.description}
                  footnote={item.footnote}
                />
              ))}
            </div>
          </DsaPageSection>
        ))}

        <DsaPageSection
          className={styles.sectionTint}
          kicker="Real-world use"
          title="Where the ideas show up"
          text="These domain cards are still part of the master page because they help connect the lessons to systems students already know."
          aside="Keep this section for context, not as the main entry point."
        >
          <div className={styles.domainGrid}>
            {DSA_DOMAIN_AREAS.slice(0, 6).map((item) => (
              <DsaSectionCard key={item.title} tag="Domain" title={item.title} description={item.description} />
            ))}
          </div>
          <Link className={styles.domainLink} to="/dsa/domain-applications">
            Explore all domain applications <FaArrowRight aria-hidden="true" />
          </Link>
        </DsaPageSection>
      </DsaPageFrame>
    </DsaShell>
  );
}
