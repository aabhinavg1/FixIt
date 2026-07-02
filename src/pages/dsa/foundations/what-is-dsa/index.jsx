import React, { useEffect } from 'react';
import Link from '@docusaurus/Link';

const TARGET = '/docs/dsa/foundations/what-is-dsa/';

export default function WhatIsDsaRedirectPage() {
  useEffect(() => {
    window.location.replace(TARGET);
  }, []);

  return (
    <main style={{ maxWidth: '48rem', margin: '4rem auto', padding: '0 1.5rem', lineHeight: 1.7 }}>
      <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.78rem', color: '#3f79b5', fontWeight: 800 }}>
        CompilerSutra DSA
      </p>
      <h1 style={{ margin: '0.75rem 0 1rem', fontSize: '2rem', color: '#102033' }}>
        What Is DSA?
      </h1>
      <p style={{ marginTop: 0, color: '#4d617b' }}>
        Redirecting to the published article.
      </p>
      <p style={{ marginBottom: 0 }}>
        If the redirect does not happen, open{' '}
        <Link to={TARGET}>
          the article here
        </Link>
        .
      </p>
    </main>
  );
}
