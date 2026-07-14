import React, { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { ChevronRight, Copy, ExternalLink, Layers3, ListFilter, Search, Sparkles } from 'lucide-react';
import SearchBar from './SearchBar';
import FlagCard from './FlagCard';
import Badge from './Badge';
import RelatedFlags from './RelatedFlags';
import { normalizeText, uniqueValues } from './utils';
import styles from './clangFlags.module.css';

const DEFAULT_PLACEHOLDER = 'Search compiler flags...';
const MAX_SUGGESTIONS = 8;
const RESULT_ROW_HEIGHT = 164;
const RESULT_OVERSCAN = 5;

const EXAMPLE_QUERIES = ['-O3', '-flto', '-fPIC', '-Weverything', '-fsanitize=address'];

const QUICK_CHIPS = [
  { label: 'Optimization', type: 'category', value: 'Optimization' },
  { label: 'Warnings', type: 'category', value: 'Warning' },
  { label: 'Debugging', type: 'category', value: 'Debugging' },
  { label: 'Sanitizers', type: 'category', value: 'Sanitizer' },
  { label: 'Architecture', type: 'category', value: 'Target-Specific Code Generation' },
  { label: 'Target', type: 'category', value: 'Code Generation' },
  { label: 'OpenMP', type: 'query', value: 'openmp' },
  { label: 'Modules', type: 'query', value: 'module' },
];

function scoreOption(option, query, tokens) {
  if (!query) {
    return 0;
  }

  const haystack = option.searchText;
  let score = 0;
  const flag = option.flag.toLowerCase();
  const names = [option.flag, ...(option.spellings || []), option.aliasTargetFlag, option.alias]
    .filter(Boolean)
    .map((item) => String(item).toLowerCase());

  if (names.includes(query)) score += 200;
  if (flag === query) score += 190;
  if (flag.startsWith(query)) score += 110;
  if (haystack.includes(query)) score += 75;
  if (tokens.length && tokens.every((token) => haystack.includes(token))) score += 50;
  if (option.category.toLowerCase().includes(query)) score += 18;
  if (option.kind.toLowerCase().includes(query)) score += 12;
  if (option.groupLabel && option.groupLabel.toLowerCase().includes(query)) score += 10;
  if (option.help && option.help.toLowerCase().includes(query)) score += 8;
  if (!score) score = haystack.includes(query) ? 4 : 0;
  return score;
}

function matchesFilters(option, filters) {
  const { category, kind, visibility } = filters;
  if (category !== 'all' && option.category !== category) return false;
  if (kind !== 'all' && option.kind !== kind) return false;
  if (visibility !== 'all' && !option.visibility.includes(visibility)) return false;
  return true;
}

function selectBestOption(options, query, filters) {
  const normalizedQuery = normalizeText(query);
  const tokens = normalizedQuery.split(' ').filter(Boolean);
  const scored = options
    .filter((option) => matchesFilters(option, filters))
    .map((option) => ({ option, score: scoreOption(option, normalizedQuery, tokens) }))
    .filter(({ score }) => score > 0 || !normalizedQuery)
    .sort((a, b) => b.score - a.score || a.option.category.localeCompare(b.option.category) || a.option.flag.localeCompare(b.option.flag));
  return scored.map(({ option }) => option);
}

function filterCategories(options) {
  return uniqueValues(options.map((option) => option.category)).sort((a, b) => a.localeCompare(b));
}

function filterKinds(options) {
  return uniqueValues(options.map((option) => option.kind)).sort((a, b) => a.localeCompare(b));
}

function filterVisibilities(options) {
  return uniqueValues(options.flatMap((option) => option.visibility)).sort((a, b) => a.localeCompare(b));
}

function normalizeIncomingData(data) {
  if (!data || !Array.isArray(data.options)) {
    return { options: [], groups: [] };
  }
  return data;
}

export default function ClangFlagsExplorer() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ category: 'all', kind: 'all', visibility: 'all' });
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [selectedFlag, setSelectedFlag] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [resultsScrollTop, setResultsScrollTop] = useState(0);
  const [resultsViewportHeight, setResultsViewportHeight] = useState(0);
  const resultsViewportRef = useRef(null);
  const searchInputRef = useRef(null);
  const detailRef = useRef(null);
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

  useEffect(() => {
    const node = resultsViewportRef.current;
    if (!node) {
      return undefined;
    }

    const measure = () => setResultsViewportHeight(node.clientHeight || 0);
    measure();

    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(measure);
      observer.observe(node);
      return () => observer.disconnect();
    }

    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const options = data?.options ?? [];
  const optionByFlag = useMemo(() => new Map(options.map((option) => [option.flag, option])), [options]);
  const categories = useMemo(() => filterCategories(options), [options]);
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = normalizeText(deferredQuery);
  const filteredOptions = useMemo(
    () => selectBestOption(options, deferredQuery, filters),
    [options, deferredQuery, filters],
  );
  const suggestionOptions = normalizedQuery ? filteredOptions.slice(0, MAX_SUGGESTIONS) : [];
  const selectedOption = useMemo(() => {
    if (!filteredOptions.length) {
      return null;
    }
    const exact = filteredOptions.find((option) => normalizeText(option.flag) === normalizedQuery);
    if (exact) {
      return exact;
    }
    return filteredOptions.find((option) => option.flag === selectedFlag) || filteredOptions[0];
  }, [filteredOptions, normalizedQuery, selectedFlag]);

  useEffect(() => {
    if (!selectedOption) {
      setSelectedFlag('');
      return;
    }
    if (!selectedFlag || !filteredOptions.some((option) => option.flag === selectedFlag)) {
      setSelectedFlag(selectedOption.flag);
    }
  }, [filteredOptions, selectedOption, selectedFlag]);

  useEffect(() => {
    setActiveSuggestionIndex(0);
  }, [query, filters.category, filters.kind, filters.visibility]);

  const handleSelectFlag = (selected, options = {}) => {
    const option = typeof selected === 'string' ? optionByFlag.get(selected) : selected;
    const flag = option?.flag || (typeof selected === 'string' ? selected : '');
    if (!flag) {
      return;
    }

    if (options.clearFilters) {
      setFilters({ category: 'all', kind: 'all', visibility: 'all' });
    }

    setQuery(flag);
    setSelectedFlag(flag);
    setRecentSearches((current) => [flag, ...current.filter((item) => item !== flag)].slice(0, 6));
    setActiveSuggestionIndex(0);
    window.requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const handleSidebarSelect = (item) => {
    if (item.action === 'focus') {
      searchInputRef.current?.focus();
      return;
    }

    if (item.action === 'category') {
      setFilters({ category: item.value, kind: 'all', visibility: 'all' });
      setQuery('');
    } else if (item.action === 'visibility') {
      setFilters({ category: 'all', kind: 'all', visibility: item.value });
      setQuery('');
    } else if (item.action === 'query') {
      setFilters({ category: 'all', kind: 'all', visibility: 'all' });
      setQuery(item.value);
    }

    setActiveSuggestionIndex(0);
    searchInputRef.current?.focus();
  };

  const handleQuickChip = (chip) => {
    if (chip.type === 'category') {
      setFilters({ category: chip.value, kind: 'all', visibility: 'all' });
      setQuery('');
    } else {
      setFilters({ category: 'all', kind: 'all', visibility: 'all' });
      setQuery(chip.value);
    }
    setActiveSuggestionIndex(0);
    searchInputRef.current?.focus();
  };

  const handleKeyDown = (event) => {
    if (!suggestionOptions.length) {
      if (event.key === 'Escape') {
        setQuery('');
      }
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveSuggestionIndex((current) => (current + 1) % suggestionOptions.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveSuggestionIndex((current) => (current - 1 + suggestionOptions.length) % suggestionOptions.length);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const option = suggestionOptions[activeSuggestionIndex] || suggestionOptions[0];
      if (option) {
        handleSelectFlag(option);
      }
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setQuery('');
    }
  };

  const stats = useMemo(() => {
    const total = options.length;
    const visible = filteredOptions.length;
    const categoryCount = categories.length;
    return { total, visible, categoryCount };
  }, [options.length, filteredOptions.length, categories.length]);

  const visibleStart = resultsViewportHeight > 0 ? Math.max(0, Math.floor(resultsScrollTop / RESULT_ROW_HEIGHT) - RESULT_OVERSCAN) : 0;
  const visibleCount = resultsViewportHeight > 0 ? Math.ceil(resultsViewportHeight / RESULT_ROW_HEIGHT) + RESULT_OVERSCAN * 2 : 8;
  const visibleEnd = Math.min(filteredOptions.length, visibleStart + visibleCount);
  const visibleResults = filteredOptions.slice(visibleStart, visibleEnd);
  const topSpacer = visibleStart * RESULT_ROW_HEIGHT;
  const bottomSpacer = Math.max(0, filteredOptions.length - visibleEnd) * RESULT_ROW_HEIGHT;

  const introBadges = [
    `${stats.total.toLocaleString()} flags`,
    `${stats.categoryCount} categories`,
    'Generated from LLVM TableGen',
  ];

  const navigationItems = [
    { label: 'Search', action: 'focus', icon: Search, count: 0 },
    { label: 'Optimization', action: 'category', value: 'Optimization', count: options.filter((option) => option.category === 'Optimization').length },
    { label: 'Warnings', action: 'category', value: 'Warning', count: options.filter((option) => option.category === 'Warning').length },
    { label: 'Sanitizers', action: 'category', value: 'Sanitizer', count: options.filter((option) => option.category === 'Sanitizer').length },
    { label: 'Architecture', action: 'category', value: 'Target-Specific Code Generation', count: options.filter((option) => option.category === 'Target-Specific Code Generation').length },
    { label: 'Linker', action: 'category', value: 'Linker', count: options.filter((option) => option.category === 'Linker').length },
    { label: 'OpenMP', action: 'query', value: 'openmp', count: options.filter((option) => normalizeText(option.searchText).includes('openmp')).length },
    { label: 'Modules', action: 'query', value: 'module', count: options.filter((option) => normalizeText(option.searchText).includes('module')).length },
    { label: 'Driver Options', action: 'visibility', value: 'ClangOption', count: options.filter((option) => option.visibility.includes('ClangOption')).length },
    { label: 'CC1 Options', action: 'visibility', value: 'CC1Option', count: options.filter((option) => option.visibility.includes('CC1Option')).length },
    { label: 'Experimental', action: 'category', value: 'Experimental', count: options.filter((option) => option.category === 'Experimental').length },
    { label: 'Deprecated', action: 'category', value: 'Deprecated', count: options.filter((option) => option.category === 'Deprecated').length },
  ];

  const compatibilityBadges = selectedOption?.supportedCompilers?.length ? selectedOption.supportedCompilers : ['Clang'];
  const sidebarGroups = selectedOption
    ? [
        { title: 'Aliases', flags: uniqueValues([selectedOption.aliasTargetFlag, selectedOption.alias].filter(Boolean)) },
        { title: 'Opposite', flags: uniqueValues([selectedOption.negatedOption].filter(Boolean)) },
        { title: 'Frequently Used Together', flags: (selectedOption.relatedFlags || []).slice(0, 4) },
        { title: 'Alternative', flags: (selectedOption.relatedFlags || []).slice(4, 8) },
      ].filter((group) => group.flags.length)
    : [];


  const handleCopyCommand = async () => {
    if (!selectedOption?.exampleClang) {
      return;
    }

    try {
      await navigator.clipboard.writeText(selectedOption.exampleClang);
    } catch {
      // No-op: the UI remains unchanged if clipboard access is denied.
    }
  };

  return (
    <Layout
      title="Clang Flags Explorer"
      description="Search and explore Clang compiler flags generated directly from LLVM TableGen data."
    >
      <Head>
        <meta
          name="description"
          content="Search and explore Clang compiler flags generated directly from LLVM TableGen data."
        />
      </Head>

      <main className={styles.pageShell}>
        <header className={styles.topBar}>
          <div className={styles.brandRow}>
            <Link className={styles.brandLink} to="/">
              CompilerSutra
            </Link>
            <span className={styles.brandDivider} />
            <Link className={styles.brandLinkMuted} to="/docs/llvm/">
              LLVM
            </Link>
            <ChevronRight size={14} strokeWidth={2} className={styles.topBarChevron} />
            <span className={styles.brandCurrent}>Flags Explorer</span>
          </div>

          <div className={styles.topBarMeta}>
            <span className={styles.topBarHint}>
              <Search size={14} strokeWidth={2} />
              Press / to focus search
            </span>
            <span className={styles.topBarHint}>
              <Layers3 size={14} strokeWidth={2} />
              TableGen-derived data
            </span>
          </div>
        </header>

        <section className={styles.heroPanel}>
          <div className={styles.heroCopy}>
            <div className={styles.heroEyebrow}>
              <Sparkles size={13} strokeWidth={2} />
              <span>Developer-first compiler reference</span>
            </div>
            <h1 className={styles.heroTitle}>Clang Flags Explorer</h1>
            <p className={styles.heroSubtitle}>
              Search compiler flags extracted from LLVM TableGen, inspect the flag immediately, and trace how it
              moves from option definition to compiler pipeline.
            </p>
            <div className={styles.heroMetaRow}>
              {introBadges.map((label) => (
                <Badge key={label} tone="info" className={styles.heroPill}>
                  {label}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {error ? <div className={styles.errorBanner}>{error}</div> : null}

        <SearchBar
          query={query}
          onQueryChange={setQuery}
          suggestions={suggestionOptions}
          activeIndex={activeSuggestionIndex}
          onActiveIndexChange={setActiveSuggestionIndex}
          onSelectSuggestion={handleSelectFlag}
          inputRef={searchInputRef}
          onKeyDown={handleKeyDown}
          placeholder={DEFAULT_PLACEHOLDER}
          exampleQueries={EXAMPLE_QUERIES}
        />

        <section className={styles.quickChipRow} aria-label="Quick filters">
          {QUICK_CHIPS.map((chip) => {
            const active = chip.type === 'category' ? filters.category === chip.value : normalizeText(query) === normalizeText(chip.value);
            return (
              <button
                key={chip.label}
                type="button"
                className={active ? styles.quickChipActive : styles.quickChip}
                onClick={() => handleQuickChip(chip)}
              >
                <ListFilter size={13} strokeWidth={2} />
                <span>{chip.label}</span>
              </button>
            );
          })}
        </section>

        <section className={styles.workspace}>
          <aside className={styles.leftSidebar}>
            <section className={styles.sidebarPanel}>
              <div className={styles.sidebarHeader}>
                <div>
                  <div className={styles.sidebarKicker}>Compiler Navigation</div>
                  <h2 className={styles.sidebarTitle}>Jump into a compiler area</h2>
                </div>
              </div>
              <div className={styles.sidebarNav}>
                {navigationItems.map((item) => {
                  const active =
                    item.action === 'focus'
                      ? false
                      : item.action === 'category'
                        ? filters.category === item.value
                        : item.action === 'visibility'
                          ? filters.visibility === item.value
                          : normalizeText(query) === normalizeText(item.value);
                  return (
                    <button
                      key={item.label}
                      type="button"
                      className={active ? styles.sidebarNavButtonActive : styles.sidebarNavButton}
                      onClick={() => handleSidebarSelect(item)}
                    >
                      <span className={styles.sidebarNavLabel}>{item.label}</span>
                      <span className={styles.sidebarNavCount}>{item.count.toLocaleString()}</span>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className={styles.sidebarPanel}>
              <div className={styles.sidebarHeader}>
                <div>
                  <div className={styles.sidebarKicker}>Current Scope</div>
                  <h2 className={styles.sidebarTitle}>Filter summary</h2>
                </div>
              </div>
              <div className={styles.sidebarMetaList}>
                <div>
                  <div className={styles.metaLabel}>Matches</div>
                  <div className={styles.sidebarMetaValue}>{stats.visible.toLocaleString()}</div>
                </div>
                <div>
                  <div className={styles.metaLabel}>Category</div>
                  <div className={styles.sidebarMetaValue}>{filters.category === 'all' ? 'All' : filters.category}</div>
                </div>
                <div>
                  <div className={styles.metaLabel}>Kind</div>
                  <div className={styles.sidebarMetaValue}>{filters.kind === 'all' ? 'All' : filters.kind}</div>
                </div>
                <div>
                  <div className={styles.metaLabel}>Visibility</div>
                  <div className={styles.sidebarMetaValue}>{filters.visibility === 'all' ? 'All' : filters.visibility}</div>
                </div>
              </div>
            </section>
          </aside>

          <main className={styles.mainColumn}>
            <div className={styles.detailPanel} ref={detailRef}>
              {selectedOption ? (
                <FlagCard flag={selectedOption} query={query} onPickFlag={handleSelectFlag} selected />
              ) : (
                <div className={styles.emptyState}>
                  <h2>No matching flags</h2>
                  <p>Try clearing filters or searching for a partial flag name, category, or keyword.</p>
                </div>
              )}
            </div>

            <section className={styles.resultsPanel}>
              <div className={styles.panelHeader}>
                <div>
                  <div className={styles.panelKicker}>Matching flags</div>
                  <h2 className={styles.panelTitle}>{stats.visible.toLocaleString()}</h2>
                </div>
                <div className={styles.panelMeta}>
                  {query ? <Badge tone="accent">Search: {query}</Badge> : <Badge tone="neutral">Showing all flags</Badge>}
                </div>
              </div>

              {filteredOptions.length > 0 ? (
                <div
                  className={styles.resultsViewport}
                  ref={resultsViewportRef}
                  onScroll={(event) => setResultsScrollTop(event.currentTarget.scrollTop)}
                >
                  <div style={{ paddingTop: topSpacer, paddingBottom: bottomSpacer }}>
                    {visibleResults.map((option) => (
                      <FlagCard
                        key={option.flag}
                        flag={option}
                        query={query}
                        mode="compact"
                        onPickFlag={handleSelectFlag}
                        selected={option.flag === selectedOption?.flag}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className={styles.resultsEmpty}>
                  <p>No flags matched your current search.</p>
                </div>
              )}
            </section>
          </main>

          <aside className={styles.rightSidebar}>
            <section className={styles.sidebarPanel}>
              <div className={styles.sidebarHeader}>
                <div>
                  <div className={styles.sidebarKicker}>Compiler Compatibility</div>
                  <h2 className={styles.sidebarTitle}>Supported targets</h2>
                </div>
              </div>
              <div className={styles.compatibilityBadges}>
                {compatibilityBadges.map((compiler) => (
                  <Badge key={compiler} tone="info">
                    {compiler}
                  </Badge>
                ))}
              </div>
              <div className={styles.sidebarMetaList}>
                <div>
                  <div className={styles.metaLabel}>Kind</div>
                  <div className={styles.sidebarMetaValue}>{selectedOption?.kind || 'None'}</div>
                </div>
                <div>
                  <div className={styles.metaLabel}>Argument</div>
                  <div className={styles.sidebarMetaValue}>{selectedOption?.takesArgument ? 'Yes' : 'No'}</div>
                </div>
                <div>
                  <div className={styles.metaLabel}>Driver</div>
                  <div className={styles.sidebarMetaValue}>{selectedOption?.driver ? 'Yes' : 'No'}</div>
                </div>
                <div>
                  <div className={styles.metaLabel}>CC1</div>
                  <div className={styles.sidebarMetaValue}>{selectedOption?.cc1 ? 'Yes' : 'No'}</div>
                </div>
              </div>
            </section>

            {sidebarGroups.length > 0 ? (
              <section className={styles.sidebarPanel}>
                <div className={styles.sidebarHeader}>
                  <div>
                    <div className={styles.sidebarKicker}>Related Flags</div>
                    <h2 className={styles.sidebarTitle}>Context</h2>
                  </div>
                </div>
                <div className={styles.sidebarGroups}>
                  {sidebarGroups.map((group) => (
                    <div key={group.title} className={styles.sidebarGroup}>
                      <div className={styles.sidebarGroupTitle}>{group.title}</div>
                      <RelatedFlags flags={group.flags} onPickFlag={handleSelectFlag} />
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <section className={styles.sidebarPanel}>
              <div className={styles.sidebarHeader}>
                <div>
                  <div className={styles.sidebarKicker}>Recent Searches</div>
                  <h2 className={styles.sidebarTitle}>Visited flags</h2>
                </div>
              </div>
              {recentSearches.length > 0 ? (
                <div className={styles.sidebarRecentList}>
                  {recentSearches.map((item) => (
                    <button key={item} type="button" className={styles.sidebarRecentItem} onClick={() => handleSelectFlag(item)}>
                      {item}
                    </button>
                  ))}
                </div>
              ) : (
                <p className={styles.emptyInline}>Flags you open will appear here.</p>
              )}
            </section>

            <section className={styles.sidebarPanel}>
              <div className={styles.sidebarHeader}>
                <div>
                  <div className={styles.sidebarKicker}>Quick Actions</div>
                  <h2 className={styles.sidebarTitle}>Command surface</h2>
                </div>
              </div>
              <div className={styles.sidebarActions}>
                <button type="button" className={styles.sidebarActionButton} onClick={handleCopyCommand} disabled={!selectedOption}>
                  <Copy size={14} strokeWidth={2} />
                  <span>Copy command</span>
                </button>
                {selectedOption?.sourceUrl ? (
                  <Link className={styles.sidebarActionButton} href={selectedOption.sourceUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={14} strokeWidth={2} />
                    <span>Open source</span>
                  </Link>
                ) : null}
                {selectedOption?.sourceUrl ? (
                  <Link className={styles.sidebarActionButton} href={selectedOption.sourceUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={14} strokeWidth={2} />
                    <span>GitHub</span>
                  </Link>
                ) : null}
              </div>
            </section>
          </aside>
        </section>
      </main>
    </Layout>
  );
}
