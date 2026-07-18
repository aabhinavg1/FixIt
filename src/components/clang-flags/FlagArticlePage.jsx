import React, { useEffect, useMemo, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import FlagArticle from '@site/src/components/clang-flags/FlagArticle';
import { resolveFlagPathValue } from '@site/src/components/clang-flags/flagRoutes';

function normalizeIncomingData(data) {
  if (!data || !Array.isArray(data.options)) {
    return { options: [], groups: [] };
  }
  return data;
}

export default function FlagArticlePage({ flagPath }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const dataUrl = useBaseUrl('/data/clang-flags.json');
  const requestedFlag = resolveFlagPathValue(flagPath);

  useEffect(() => {
    let alive = true;

    async function loadData() {
      try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
          throw new Error(`Failed to load ${dataUrl} (${response.status})`);
        }
        const payload = await response.json();
        if (alive) {
          setData(normalizeIncomingData(payload));
        }
      } catch (err) {
        if (alive) {
          setError(err instanceof Error ? err.message : 'Failed to load compiler flag data.');
        }
      }
    }

    loadData();
    return () => {
      alive = false;
    };
  }, [dataUrl]);

  const options = data?.options ?? [];
  const selectedFlag = useMemo(
    () => options.find((option) => option.flag === requestedFlag) || null,
    [options, requestedFlag],
  );

  if (error) {
    return <main style={{ padding: '2rem', color: 'var(--cf-text)' }}>{error}</main>;
  }

  if (!data || !requestedFlag) {
    return null;
  }

  if (!selectedFlag) {
    return (
      <main style={{ padding: '2rem', color: 'var(--cf-text)' }}>
        <p>Flag not found: {requestedFlag}</p>
      </main>
    );
  }

  return (
    <FlagArticle
      flag={selectedFlag}
      meta={data}
      allFlags={options}
      onCopyFlag={() => {
        try {
          navigator.clipboard.writeText(selectedFlag.flag);
        } catch {
          // Ignore clipboard failures.
        }
      }}
    />
  );
}
