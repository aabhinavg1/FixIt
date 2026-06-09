import React from 'react';
import Link from '@docusaurus/Link';
import DsaShell from '@site/src/components/dsa/DsaShell';
import DsaPageFrame from '@site/src/components/dsa/DsaPageFrame';
import DsaPageSection from '@site/src/components/dsa/DsaPageSection';
import DsaSectionCard from '@site/src/components/dsa/DsaSectionCard';

export default function DsaComingSoonLesson({
  title,
  eyebrow = 'Arrays module',
  lead,
  route,
  nextHref = '/dsa/arrays',
  nextLabel = 'Back to Arrays',
  topics = [],
}) {
  return (
    <DsaShell
      title={title}
      description={lead}
      eyebrow={eyebrow}
      lead={lead}
      activePath={route}
      metaTitle={title}
      heroPanel={(
        <div>
          <p style={{ marginTop: 0, fontWeight: 700 }}>Coming soon</p>
          <p style={{ marginBottom: 0, lineHeight: 1.7 }}>
            This article is planned, but the outline is already fixed. The sections below show what will be taught.
          </p>
        </div>
      )}
    >
      <DsaPageFrame>
        <DsaPageSection
          kicker="Status"
          title="Coming soon"
          text="The article is being prepared as part of the arrays module. The outline is here so readers can see the exact scope before the full lesson is written."
          aside="This page is a placeholder with a real structure, not a dead end."
        >
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {topics.map((item) => (
              <DsaSectionCard key={item.title} tag="Planned" title={item.title} description={item.description} />
            ))}
          </div>
        </DsaPageSection>

        <DsaPageSection
          kicker="Next"
          title="Return to the arrays master page"
          text="Use the master page to jump to another planned topic or to see the full arrays roadmap again."
          aside="Once the article is written, this route will contain the full lesson."
        >
          <Link to={nextHref} style={{ textDecoration: 'none', color: 'inherit' }}>
            <DsaSectionCard tag="Next" title={nextLabel} description="Go back to the arrays module index and pick another topic." />
          </Link>
        </DsaPageSection>
      </DsaPageFrame>
    </DsaShell>
  );
}
