import React, { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import {
  Blocks,
  BookOpenText,
  Boxes,
  Bug,
  ChevronRight,
  Cpu,
  Gauge,
  OctagonAlert,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';
import Badge from '@site/src/components/clang-flags/Badge';
import SearchBar from '@site/src/components/clang-flags/SearchBar';
import { buildFlagArticlePath } from '@site/src/components/clang-flags/flagRoutes';
import { normalizeText } from '@site/src/components/clang-flags/utils';
import styles from '@site/src/components/clang-flags/clangFlags.module.css';

const POPULAR_FLAGS = ['-O3', '-flto', '-fPIC', '-Weverything', '-fsanitize=address'];

const NAV_AREAS = [
  { label: 'Optimization', to: '/tools/clang-flags-explorer/?category=Optimization', icon: Gauge, note: 'Passes, -O levels, and IR tuning' },
  { label: 'Warnings', to: '/tools/clang-flags-explorer/?category=Warning', icon: OctagonAlert, note: 'Diagnostics and -W groups' },
  { label: 'Debugging', to: '/tools/clang-flags-explorer/?category=Debugging', icon: Bug, note: '-g flags and DWARF control' },
  { label: 'Sanitizers', to: '/tools/clang-flags-explorer/?category=Sanitizer', icon: ShieldCheck, note: 'ASan, UBSan, TSan, and more' },
  { label: 'Architecture', to: '/tools/clang-flags-explorer/?category=Target-Specific%20Code%20Generation', icon: Cpu, note: 'Target-specific code generation' },
  { label: 'Target', to: '/tools/clang-flags-explorer/?category=Code%20Generation', icon: Target, note: 'General backend and target flags' },
  { label: 'OpenMP', to: '/tools/clang-flags-explorer/?q=openmp', icon: Blocks, note: 'Parallel regions and runtime' },
  { label: 'Modules', to: '/tools/clang-flags-explorer/?q=module', icon: Boxes, note: 'C++20 and Clang modules' },
];

const MAX_SUGGESTIONS = 8;

function scoreOption(option, query) {
  if (!query) {
    return 0;
  }
  const haystack = option.searchText || '';
  const flag = String(option.flag || '').toLowerCase();
  let score = 0;
  if (flag === query) score += 190;
  if (flag.startsWith(query)) score += 110;
  if (haystack.includes(query)) score += 75;
  if (String(option.category || '').toLowerCase().includes(query)) score += 18;
  if (String(option.kind || '').toLowerCase().includes(query)) score += 12;
  if (option.help && option.help.toLowerCase().includes(query)) score += 8;
  return score;
}

function normalizeIncomingData(data) {
  if (!data || !Array.isArray(data.options)) {
    return { options: [], groups: [] };
  }
  return data;
}

export default function ClangFlagsLandingPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const searchInputRef = useRef(null);
  const dataUrl = useBaseUrl('/data/clang-flags.json');

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

  useEffect(() => {
    const handleSlash = (event) => {
      const target = event.target;
      const tagName = target && target.tagName ? target.tagName.toLowerCase() : '';
      const editable = tagName === 'input' || tagName === 'textarea' || target?.isContentEditable;
      if (event.key === '/' && !editable) {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleSlash);
    return () => window.removeEventListener('keydown', handleSlash);
  }, []);

  const options = data?.options ?? [];
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = normalizeText(deferredQuery);

  const suggestions = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }
    return options
      .map((option) => ({ option, score: scoreOption(option, normalizedQuery) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.option.flag.localeCompare(b.option.flag))
      .slice(0, MAX_SUGGESTIONS)
      .map(({ option }) => option);
  }, [options, normalizedQuery]);

  useEffect(() => {
    setActiveSuggestionIndex(0);
  }, [query]);

  const handleSelectFlag = (option) => {
    const flag = option?.flag || (typeof option === 'string' ? option : '');
    if (!flag) {
      return;
    }
    window.location.assign(buildFlagArticlePath(flag));
  };

  const handleKeyDown = (event) => {
    if (!suggestions.length) {
      if (event.key === 'Escape') {
        setQuery('');
      }
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveSuggestionIndex((current) => (current + 1) % suggestions.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveSuggestionIndex((current) => (current - 1 + suggestions.length) % suggestions.length);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const option = suggestions[activeSuggestionIndex] || suggestions[0];
      if (option) {
        handleSelectFlag(option);
      }
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setQuery('');
    }
  };

  const totalFlags = options.length;

  return (
    <Layout
      title="Clang Flags"
      description="Search, browse, and read in-depth documentation for Clang compiler flags generated from LLVM TableGen."
    >
      <Head>
        <meta
          name="description"
          content="Search, browse, and read in-depth documentation for Clang compiler flags generated from LLVM TableGen."
        />
      </Head>

      <main className={styles.pageShell}>
        <header className={styles.topBar}>
          <div className={styles.brandRow}>
            <Link className={styles.brandLink} to="/">CompilerSutra</Link>
            <span className={styles.brandDivider}>/</span>
            <span className={styles.brandCurrent}>Clang Flags</span>
          </div>
          <div className={styles.topBarMeta}>
            <span className={styles.topBarHint}><Sparkles size={14} strokeWidth={2} /> LLVM snapshot</span>
            <span className={styles.topBarHint}><Search size={14} strokeWidth={2} /> Search-first</span>
          </div>
        </header>

        <section className={styles.heroPanel}>
          <div className={styles.heroCopy}>
            <div className={styles.heroEyebrow}>
              <BookOpenText size={13} strokeWidth={2} />
              <span>Compiler reference</span>
            </div>
            <h1 className={styles.heroTitle}>Clang Flags</h1>
            <p className={styles.heroSubtitle}>
              Every Clang compiler flag, documented. Search a flag, open its in-depth article, or jump straight into a
              compiler area.
            </p>
            <div className={styles.heroMetaRow}>
              {totalFlags > 0 ? <Badge tone="accent">{totalFlags.toLocaleString()} flags</Badge> : null}
              <Badge tone="info">Generated from LLVM TableGen</Badge>
              <Badge tone="info">Searchable</Badge>
              <Badge tone="info">Article pages</Badge>
            </div>
          </div>
        </section>

        {error ? <div className={styles.errorBanner}>{error}</div> : null}

        <SearchBar
          query={query}
          onQueryChange={setQuery}
          suggestions={suggestions}
          activeIndex={activeSuggestionIndex}
          onActiveIndexChange={setActiveSuggestionIndex}
          onSelectSuggestion={handleSelectFlag}
          inputRef={searchInputRef}
          onKeyDown={handleKeyDown}
          placeholder="Search compiler flags..."
          exampleQueries={POPULAR_FLAGS}
        />

        <section className={styles.quickChipRow} aria-label="Popular flags">
          {POPULAR_FLAGS.map((flag) => (
            <Link key={flag} className={styles.quickChip} to={buildFlagArticlePath(flag)}>
              <ChevronRight size={13} strokeWidth={2} />
              <span>{flag}</span>
            </Link>
          ))}
          <Link className={styles.quickChip} to="/tools/clang-flags-explorer/">
            <BookOpenText size={13} strokeWidth={2} />
            <span>Docs</span>
          </Link>
        </section>

        <section className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleWrap}>
              <Cpu size={16} strokeWidth={2} className={styles.sectionIcon} />
              <div>
                <h2 className={styles.sectionHeading}>Compiler Navigation</h2>
                <p className={styles.articleSectionNote}>Jump into a compiler area.</p>
              </div>
            </div>
          </div>
          <div className={styles.homeNavGrid}>
            {NAV_AREAS.map((area) => {
              const Icon = area.icon;
              return (
                <Link key={area.label} to={area.to} className={styles.homeNavCard}>
                  <div className={styles.homeNavCardTop}>
                    <div className={styles.homeNavIconWrap}>
                      <Icon size={16} strokeWidth={2} className={styles.homeNavIcon} />
                    </div>
                    <ChevronRight size={15} strokeWidth={2} className={styles.homeNavArrow} />
                  </div>
                  <div className={styles.homeNavTitle}>{area.label}</div>
                  <div className={styles.homeNavNote}>{area.note}</div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
}
