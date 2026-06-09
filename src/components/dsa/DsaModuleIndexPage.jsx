import React from 'react';
import Link from '@docusaurus/Link';
import DsaShell from '@site/src/components/dsa/DsaShell';
import DsaPageFrame from '@site/src/components/dsa/DsaPageFrame';
import DsaPageSection from '@site/src/components/dsa/DsaPageSection';
import DsaSectionCard from '@site/src/components/dsa/DsaSectionCard';

function TopicRow({ item }) {
  return (
    <>
      <td style={{ padding: '1rem', verticalAlign: 'top' }}>
        <strong style={{ display: 'block', color: '#102033' }}>{item.title}</strong>
      </td>
      <td style={{ padding: '1rem', verticalAlign: 'top', color: '#4d617b', lineHeight: 1.7 }}>
        {item.description}
      </td>
      <td style={{ padding: '1rem', verticalAlign: 'top' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0.42rem 0.7rem', borderRadius: '999px', background: 'rgba(246, 217, 139, 0.18)', border: '1px solid rgba(246, 217, 139, 0.45)', color: '#6c5600', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          Coming soon
        </span>
      </td>
      <td style={{ padding: '1rem', verticalAlign: 'top' }}>
        <Link to={item.route} style={{ textDecoration: 'none', color: '#1f6fe0', fontWeight: 700 }}>
          Open placeholder
        </Link>
      </td>
    </>
  );
}

export default function DsaModuleIndexPage({ module }) {
  return (
    <DsaShell
      title={module.title}
      description={module.description}
      lead={module.lead}
      activePath={module.route}
      metaTitle={module.title}
      heroPanel={(
        <div>
          <p style={{ marginTop: 0, fontWeight: 700 }}>Module map</p>
          <ul style={{ marginBottom: 0, paddingLeft: '1.2rem', lineHeight: 1.7 }}>
            {module.heroBullets.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      )}
    >
      <DsaPageFrame>
        <DsaPageSection
          kicker="Overview"
          title={`What this module covers`}
          text="The table below is the clean module boundary. Each row is a planned lesson, not a dead-end page."
          aside="Use this page as the module index."
        >
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {module.overviewCards.map((item) => (
              <DsaSectionCard key={item.title} tag="Scope" title={item.title} description={item.description} />
            ))}
          </div>
        </DsaPageSection>

        {module.learningGoals ? (
          <DsaPageSection
            kicker="What you will know"
            title="The learning outcome for this module"
            text="These are the ideas a learner should be able to explain after completing the module."
            aside="This section is especially useful for domain pages."
          >
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {module.learningGoals.map((item) => (
                <DsaSectionCard key={item.title} tag="Outcome" title={item.title} description={item.description} />
              ))}
            </div>
          </DsaPageSection>
        ) : null}

        <DsaPageSection
          kicker="Topic table"
          title="Planned lessons"
          text="Each link opens a placeholder lesson page so the module already behaves like a structured syllabus."
          aside="Every lesson is marked coming soon until the article is written."
        >
          <div style={{ overflowX: 'auto', borderRadius: '22px', border: '1px solid rgba(134, 156, 184, 0.14)', background: 'rgba(255, 255, 255, 0.86)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '760px' }}>
              <thead>
                <tr style={{ background: 'rgba(47, 128, 237, 0.06)' }}>
                  <th style={{ textAlign: 'left', padding: '0.95rem 1rem', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3f79b5' }}>Topic</th>
                  <th style={{ textAlign: 'left', padding: '0.95rem 1rem', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3f79b5' }}>What it covers</th>
                  <th style={{ textAlign: 'left', padding: '0.95rem 1rem', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3f79b5' }}>Status</th>
                  <th style={{ textAlign: 'left', padding: '0.95rem 1rem', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3f79b5' }}>Article</th>
                </tr>
              </thead>
              <tbody>
                {module.topics.map((item, index) => (
                  <tr key={item.route} style={{ background: index % 2 === 0 ? 'rgba(255,255,255,0.88)' : 'rgba(248,250,253,0.88)' }}>
                    <TopicRow item={item} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DsaPageSection>

        <DsaPageSection
          kicker="Related"
          title="Move to the next module when you are ready"
          text="The related pages below stay inside the DSA Academy and keep the reading path obvious."
          aside="This is the handoff section."
        >
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {module.related.map((item) => (
              <Link key={item.route} to={item.route} style={{ textDecoration: 'none', color: 'inherit' }}>
                <DsaSectionCard tag="Next" title={item.title} description={item.description} />
              </Link>
            ))}
          </div>
        </DsaPageSection>
      </DsaPageFrame>
    </DsaShell>
  );
}
