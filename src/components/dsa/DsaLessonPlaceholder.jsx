import React from 'react';
import Link from '@docusaurus/Link';
import DsaShell from '@site/src/components/dsa/DsaShell';
import DsaPageFrame from '@site/src/components/dsa/DsaPageFrame';
import DsaPageSection from '@site/src/components/dsa/DsaPageSection';

export default function DsaLessonPlaceholder({
  title,
  lead,
  route,
  moduleTitle,
  moduleRoute,
  outline = [],
}) {
  return (
    <DsaShell
      title={title}
      description={lead}
      eyebrow={`${moduleTitle} module`}
      lead={lead}
      activePath={route}
      metaTitle={title}
      heroPanel={(
        <div>
          <p style={{ marginTop: 0, fontWeight: 700 }}>Coming soon</p>
          <p style={{ marginBottom: 0, lineHeight: 1.7 }}>
            This lesson is planned, and the outline is already fixed. The table below shows the sequence from basics to advanced ideas.
          </p>
        </div>
      )}
    >
      <DsaPageFrame>
        <DsaPageSection
          kicker="Status"
          title="Coming soon"
          text="This page is a placeholder with a real structure, not a dead end. The rows below show what the lesson will teach in order."
          aside="The module index already links here."
        >
          <div style={{ overflowX: 'auto', borderRadius: '22px', border: '1px solid rgba(134, 156, 184, 0.14)', background: 'rgba(255, 255, 255, 0.86)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '720px' }}>
              <thead>
                <tr style={{ background: 'rgba(47, 128, 237, 0.06)' }}>
                  <th style={{ textAlign: 'left', padding: '0.95rem 1rem', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3f79b5' }}>Topic</th>
                  <th style={{ textAlign: 'left', padding: '0.95rem 1rem', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3f79b5' }}>What you will know</th>
                  <th style={{ textAlign: 'left', padding: '0.95rem 1rem', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3f79b5' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {outline.map((item, index) => {
                  const topic = typeof item === 'string' ? item : item.title;
                  const description = typeof item === 'string'
                    ? `You will understand how ${item.toLowerCase()} works in this part of DSA.`
                    : item.description;

                  return (
                    <tr key={topic} style={{ borderTop: '1px solid rgba(134, 156, 184, 0.12)', background: index % 2 === 0 ? 'rgba(255,255,255,0.88)' : 'rgba(248,250,253,0.88)' }}>
                      <td style={{ padding: '1rem', verticalAlign: 'top' }}>
                        <strong style={{ display: 'block', color: '#102033' }}>{topic}</strong>
                      </td>
                      <td style={{ padding: '1rem', verticalAlign: 'top', color: '#4d617b', lineHeight: 1.7 }}>
                        {description}
                      </td>
                      <td style={{ padding: '1rem', verticalAlign: 'top' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', minHeight: '2.05rem', padding: '0.42rem 0.7rem', borderRadius: '999px', background: 'rgba(246, 217, 139, 0.18)', border: '1px solid rgba(246, 217, 139, 0.45)', color: '#6c5600', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                          Coming soon
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </DsaPageSection>

        <DsaPageSection
          kicker="Next"
          title={`Return to ${moduleTitle}`}
          text="Use the module index to pick another planned lesson or revisit the full map."
          aside="When the article is written, this route will hold the full lesson."
        >
          <Link to={moduleRoute} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ padding: '1rem 1.05rem', borderRadius: '22px', border: '1px solid rgba(134, 156, 184, 0.16)', background: 'rgba(255, 255, 255, 0.84)' }}>
              <p style={{ margin: 0, fontSize: '0.74rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3f79b5' }}>Back</p>
              <h3 style={{ margin: '0.55rem 0 0.45rem', fontSize: '1.08rem', color: '#102033' }}>{`Back to ${moduleTitle}`}</h3>
              <p style={{ margin: 0, color: '#4d617b', lineHeight: 1.7 }}>Return to the module table of contents.</p>
            </div>
          </Link>
        </DsaPageSection>
      </DsaPageFrame>
    </DsaShell>
  );
}
