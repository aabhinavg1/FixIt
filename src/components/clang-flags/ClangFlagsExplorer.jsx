import React, { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import {
  BookOpenText,
  Code2,
  Copy,
  ExternalLink,
  Flame,
  History,
  ListFilter,
  Menu,
  Monitor,
  Search,
  Sparkles,
  Target,
  X,
} from 'lucide-react';
import SearchBar from './SearchBar';
import FlagCard from './FlagCard';
import Badge from './Badge';
import RelatedFlags from './RelatedFlags';
import { buildFlagArticlePath } from './flagRoutes';
import { normalizeText, uniqueValues } from './utils';
import styles from './clangFlags.module.css';

const DEFAULT_PLACEHOLDER = 'Search compiler flags...';
const MAX_SUGGESTIONS = 8;
const RESULT_ROW_HEIGHT = 164;
const RESULT_OVERSCAN = 5;

const EXAMPLE_QUERIES = ['-O3', '-flto', '-fPIC', '-Weverything', '-fsanitize=address'];

const QUICK_CHIPS = [
  { label: 'Docs', type: 'landing', value: '/tools/clang-flags/' },
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
  const optimizedPassText = ' passbuilder instcombine gvn licm looprotate loopvectorize slpvectorizer simplifycfg';
  const stageTextByCategory = {
    Optimization: ' optimization llvm ir code generation',
    Warning: ' diagnostics frontend ast',
    Sanitizer: ' sanitizer llvm ir code generation',
    Preprocessor: ' frontend source',
    Linker: ' linking',
    Debugging: ' frontend llvm ir',
    'Code Generation': ' code generation backend assembly',
    'Target-Specific Code Generation': ' target backend assembly',
  };

  return {
    ...data,
    options: data.options.map((option) => ({
      ...option,
      searchText: normalizeText(`${option.searchText || ''}${option.category === 'Optimization' || /^-O/.test(option.flag) ? optimizedPassText : ''}${stageTextByCategory[option.category] || ''}`),
    })),
  };
}

const COMPILER_ICONS = {
  Clang: Target,
  GCC: Code2,
  MSVC: Monitor,
  Flang: Sparkles,
  CC1: Copy,
  Generic: Target,
};

function compilerTone(name) {
  const normalized = String(name || '').toLowerCase();
  if (normalized.includes('clang')) return 'compatibilityBadgeClang';
  if (normalized.includes('gcc')) return 'compatibilityBadgeGcc';
  if (normalized.includes('msvc') || normalized.includes('visual')) return 'compatibilityBadgeMsvc';
  if (normalized.includes('flang')) return 'compatibilityBadgeFlang';
  if (normalized.includes('cc1')) return 'compatibilityBadgeCc1';
  return 'compatibilityBadgeGeneric';
}

function compilerNote(name) {
  const normalized = String(name || 'Generic');
  if (normalized === 'Clang') return 'This flag is recognized and documented for Clang.';
  if (normalized === 'GCC') return 'Closest GCC-compatible behavior, where available.';
  if (normalized === 'MSVC') return 'Closest MSVC-compatible behavior, where available.';
  if (normalized === 'Flang') return 'Recognized by Flang compatibility surfaces when relevant.';
  if (normalized === 'CC1') return 'This option reaches the cc1 layer directly.';
  return `Compiler support note for ${normalized}.`;
}
function compilerBadgeTone(name) {
  const normalized = String(name || '').toLowerCase();
  if (normalized.includes('clang')) return 'info';
  if (normalized.includes('gcc')) return 'success';
  if (normalized.includes('msvc') || normalized.includes('visual')) return 'danger';
  if (normalized.includes('flang')) return 'accent';
  return 'neutral';
}


function buildSupportedTargets(flag) {
  const names = uniqueValues((flag?.supportedCompilers?.length ? flag.supportedCompilers : ['Clang']).map((item) => String(item)));
  return names.map((name) => ({
    name,
    Icon: COMPILER_ICONS[name] || COMPILER_ICONS.Generic,
    toneClass: compilerTone(name),
    badgeTone: compilerBadgeTone(name),
    note: compilerNote(name),
  }));
}

function buildRelatedFlags(flag, options) {
  if (!flag || !options?.length) {
    return [];
  }

  const groupLabel = flag.groupLabel || flag.group;
  const visibility = new Set(flag.visibility || []);

  return uniqueValues(
    options
      .filter((candidate) => candidate.flag !== flag.flag)
      .map((candidate) => {
        let score = 0;
        if (candidate.category === flag.category) score += 4;
        if (groupLabel && (candidate.groupLabel || candidate.group) === groupLabel) score += 3;
        if (candidate.kind === flag.kind) score += 2;
        if ((candidate.visibility || []).some((item) => visibility.has(item))) score += 1;
        return { candidate, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.candidate.flag.localeCompare(b.candidate.flag))
      .slice(0, 6)
      .map(({ candidate }) => candidate.flag),
  );
}

function buildEquivalentRows(flag) {
  if (!flag) {
    return [];
  }

  if (flag.category === 'Optimization' || /^-O/.test(flag.flag)) {
    return [
      { compiler: 'Clang', flag: flag.flag, note: 'Primary Clang spelling.' },
      { compiler: 'GCC', flag: flag.flag, note: 'Comparable GNU optimization mode.' },
      { compiler: 'MSVC', flag: '/O2', note: 'Closest general release optimization mode.' },
    ];
  }

  if (flag.category === 'Warning') {
    return [
      { compiler: 'Clang', flag: flag.flag, note: 'Primary Clang warning spelling.' },
      { compiler: 'GCC', flag: flag.flag, note: 'Many warnings map closely, but not always exactly.' },
      { compiler: 'MSVC', flag: '/W4 or /WX', note: 'Microsoft warning levels differ from Clang groups.' },
    ];
  }

  if (flag.category === 'Sanitizer') {
    return [
      { compiler: 'Clang', flag: flag.flag, note: 'Primary Clang sanitizer spelling.' },
      { compiler: 'GCC', flag: 'varies', note: 'Compatibility depends on the sanitizer and target.' },
      { compiler: 'MSVC', flag: 'varies', note: 'Support depends on the frontend and runtime model.' },
    ];
  }

  return [
    { compiler: 'Clang', flag: flag.flag, note: 'Native Clang spelling.' },
    { compiler: 'GCC', flag: 'varies', note: 'Equivalent behavior depends on the target and driver.' },
    { compiler: 'MSVC', flag: 'varies', note: 'Microsoft compilers use different switch families.' },
  ];
}

function buildDocLinks(flag) {
  if (!flag) {
    return [];
  }

  return [
    { label: 'Open article', href: buildFlagArticlePath(flag.flag), icon: BookOpenText },
    flag.sourceUrl ? { label: 'View source', href: flag.sourceUrl, icon: ExternalLink, external: true } : null,
  ].filter(Boolean);
}

function buildPopularFlags() {
  return ['-O2', '-O3', '-fPIC', '-flto', '-fsanitize=address', '-Weverything'];
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
  const [navOpen, setNavOpen] = useState(false);
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
    if (typeof window === 'undefined' || typeof URLSearchParams === 'undefined') {
      return;
    }
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const query = params.get('q');
    const visibility = params.get('visibility');
    if (category || query || visibility) {
      setFilters((current) => ({
        category: category || current.category,
        kind: 'all',
        visibility: visibility || 'all',
      }));
      if (query) {
        setQuery(query);
      }
    }
  }, []);

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

  useEffect(() => {
    const sync = () => setNavOpen(window.innerWidth >= 1024);
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
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
    return filteredOptions.find((option) => option.flag === selectedFlag) || null;
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

    if (item.action === 'landing') {
      window.location.assign(item.value);
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
    if (chip.type === 'landing') {
      window.location.assign(chip.value);
      return;
    }

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

  const hasActiveScope =
    normalizedQuery.length > 0 ||
    filters.category !== 'all' ||
    filters.kind !== 'all' ||
    filters.visibility !== 'all';

  const visibleStart = resultsViewportHeight > 0 ? Math.max(0, Math.floor(resultsScrollTop / RESULT_ROW_HEIGHT) - RESULT_OVERSCAN) : 0;
  const visibleCount = resultsViewportHeight > 0 ? Math.ceil(resultsViewportHeight / RESULT_ROW_HEIGHT) + RESULT_OVERSCAN * 2 : 8;
  const visibleEnd = Math.min(filteredOptions.length, visibleStart + visibleCount);
  const visibleResults = filteredOptions.slice(visibleStart, visibleEnd);
  const topSpacer = visibleStart * RESULT_ROW_HEIGHT;
  const bottomSpacer = Math.max(0, filteredOptions.length - visibleEnd) * RESULT_ROW_HEIGHT;

  const selectedSupport = useMemo(() => buildSupportedTargets(selectedOption), [selectedOption]);
  const relatedFlags = useMemo(() => buildRelatedFlags(selectedOption, options), [selectedOption, options]);
  const equivalentRows = useMemo(() => buildEquivalentRows(selectedOption), [selectedOption]);
  const docLinks = useMemo(() => buildDocLinks(selectedOption), [selectedOption]);
  const popularFlags = useMemo(() => buildPopularFlags(), []);

  const introBadges = [
    `${stats.total.toLocaleString()} flags`,
    `${stats.categoryCount} categories`,
    'Generated from LLVM TableGen',
  ];

  const navigationItems = [
    { label: 'Search', action: 'focus', icon: Search, count: 0 },
    { label: 'Doc Landing', action: 'landing', value: '/tools/clang-flags/', count: 0 },
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
            <Link className={styles.brandLink} to="/">CompilerSutra</Link>
            <span className={styles.brandDivider}>/</span>
            <Link className={styles.brandLinkMuted} to="/tools/clang-flags/">Clang Flags</Link>
            <span className={styles.brandDivider}>/</span>
            <span className={styles.brandCurrent}>Explorer</span>
          </div>
          <div className={styles.topBarMeta}>
            <span className={styles.topBarHint}><Sparkles size={14} strokeWidth={2} /> LLVM snapshot</span>
            <span className={styles.topBarHint}><Search size={14} strokeWidth={2} /> Search-first layout</span>
          </div>
        </header>

        <section className={styles.articleHero}>
          <div className={styles.articleHeroCopy}>
            <h1 className={styles.articleHeroTitle}>Clang Flags Explorer</h1>
            <p className={styles.articleHeroSummary}>
              Search compiler flags extracted from LLVM TableGen, inspect the flag immediately, and trace how it
              moves from option definition to compiler pipeline.
            </p>
            <div className={styles.heroBadgeRow}>
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
            <button
              type="button"
              className={styles.sidebarToggle}
              onClick={() => setNavOpen((current) => !current)}
              aria-expanded={navOpen}
              aria-controls="clang-flags-navigation"
            >
              {navOpen ? <X size={14} strokeWidth={2} /> : <Menu size={14} strokeWidth={2} />}
              <span>Navigation</span>
              <span className={styles.sidebarToggleState}>{navOpen ? 'Hide' : 'Show'}</span>
            </button>

            <div
              id="clang-flags-navigation"
              className={clsx(styles.sidebarDrawer, navOpen ? styles.sidebarDrawerOpen : styles.sidebarDrawerClosed)}
            >
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
            </div>
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
                  {hasActiveScope ? (
                    query ? <Badge tone="accent">Search: {query}</Badge> : <Badge tone="neutral">Showing filtered flags</Badge>
                  ) : (
                    <Badge tone="neutral">Waiting for search</Badge>
                  )}
                </div>
              </div>

              {hasActiveScope ? (
                filteredOptions.length > 0 ? (
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
                )
              ) : (
                <div className={styles.resultsEmpty}>
                  <p>Search for a flag or pick a category to see matching flags.</p>
                </div>
              )}
            </section>
          </main>

          <aside className={styles.rightSidebar}>
            {selectedOption ? (
              <>
                <section className={clsx(styles.sidebarPanel, styles.supportedTargetsPanel)}>
                  <div className={styles.sidebarHeader}>
                    <div>
                      <div className={styles.sidebarKicker}>Compiler Support</div>
                      <h2 className={styles.supportedTargetsTitle}>Supported targets</h2>
                    </div>
                  </div>
                  <p className={styles.supportedTargetsHint}>
                    Recognized compiler families for this flag.
                  </p>
                  <div className={styles.compatibilityBadges}>
                    {selectedSupport.map(({ name, Icon, badgeTone, toneClass, note }) => (
                      <Badge
                        key={name}
                        tone={badgeTone}
                        className={clsx(styles.compatibilityBadge, styles[toneClass])}
                        title={note}
                      >
                        <Icon size={13} strokeWidth={2} className={styles.compatibilityBadgeIcon} />
                        <span>{name}</span>
                      </Badge>
                    ))}
                  </div>
                </section>

                <section className={styles.sidebarPanel}>
                  <div className={styles.sidebarHeader}>
                    <div>
                      <div className={styles.sidebarKicker}>Related Flags</div>
                      <h2 className={styles.sidebarTitle}>Close matches</h2>
                    </div>
                  </div>
                  <RelatedFlags flags={relatedFlags} />
                </section>

                <section className={styles.sidebarPanel}>
                  <div className={styles.sidebarHeader}>
                    <div>
                      <div className={styles.sidebarKicker}>Compiler Equivalents</div>
                      <h2 className={styles.sidebarTitle}>GCC / MSVC</h2>
                    </div>
                  </div>
                  <div className={styles.sidebarGroups}>
                    {equivalentRows.map((row) => (
                      <div key={`${row.compiler}-${row.flag}`} className={styles.sidebarGroup}>
                        <div className={styles.sidebarGroupTitle}>{row.compiler}</div>
                        <div className={styles.sidebarMetaValue}>{row.flag}</div>
                        <p className={styles.supportedTargetsHint}>{row.note}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className={styles.sidebarPanel}>
                  <div className={styles.sidebarHeader}>
                    <div>
                      <div className={styles.sidebarKicker}>Documentation Links</div>
                      <h2 className={styles.sidebarTitle}>Quick actions</h2>
                    </div>
                  </div>
                  <div className={styles.sidebarActions}>
                    {docLinks.map((link) => {
                      const Icon = link.icon;
                      return link.external ? (
                        <a key={link.label} className={styles.sidebarActionButton} href={link.href} target="_blank" rel="noreferrer">
                          <Icon size={14} strokeWidth={2} />
                          <span>{link.label}</span>
                        </a>
                      ) : (
                        <Link key={link.label} className={styles.sidebarActionButton} to={link.href}>
                          <Icon size={14} strokeWidth={2} />
                          <span>{link.label}</span>
                        </Link>
                      );
                    })}
                    <button
                      type="button"
                      className={styles.sidebarActionButton}
                      onClick={() => {
                        if (selectedOption?.flag && navigator?.clipboard?.writeText) {
                          navigator.clipboard.writeText(selectedOption.flag).catch(() => {});
                        }
                      }}
                    >
                      <Copy size={14} strokeWidth={2} />
                      <span>Copy flag</span>
                    </button>
                  </div>
                </section>

                <section className={styles.sidebarPanel}>
                  <div className={styles.sidebarHeader}>
                    <div>
                      <div className={styles.sidebarKicker}>Recently Viewed</div>
                      <h2 className={styles.sidebarTitle}>Flags you opened</h2>
                    </div>
                  </div>
                  {recentSearches.length ? (
                    <div className={styles.sidebarRecentList}>
                      {recentSearches.map((flag) => (
                        <button key={flag} type="button" className={styles.sidebarRecentItem} onClick={() => handleSelectFlag(flag)}>
                          {flag}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className={styles.supportedTargetsHint}>Recently viewed flags will appear here once you open them.</p>
                  )}
                </section>
              </>
            ) : (
              <section className={styles.sidebarPanel}>
                <div className={styles.sidebarHeader}>
                  <div>
                    <div className={styles.sidebarKicker}>Quick panel</div>
                    <h2 className={styles.sidebarTitle}>Pick a flag</h2>
                  </div>
                </div>
                <p className={styles.supportedTargetsHint}>Select a flag from the results to populate compiler support, equivalents, and quick actions.</p>
              </section>
            )}

            <section className={styles.sidebarPanel}>
              <div className={styles.sidebarHeader}>
                <div>
                  <div className={styles.sidebarKicker}>Popular Flags</div>
                  <h2 className={styles.sidebarTitle}>Quick picks</h2>
                </div>
              </div>
              <div className={styles.sidebarRecentList}>
                {popularFlags.map((flag) => (
                  <button key={flag} type="button" className={styles.sidebarRecentItem} onClick={() => handleQuickChip({ type: 'query', value: flag })}>
                    {flag}
                  </button>
                ))}
              </div>
            </section>
          </aside>

        </section>
      </main>
    </Layout>
  );
}
