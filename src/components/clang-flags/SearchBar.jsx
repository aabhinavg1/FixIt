import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { ChevronRight, Command, Hash, Keyboard, Search, X } from 'lucide-react';
import styles from './clangFlags.module.css';
import { splitHighlightedText } from './utils';

// Cycles the placeholder text through example queries so users see what they can type
function useCyclingPlaceholder(examples, base) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!examples.length) return undefined;
    const fadeOut = setTimeout(() => setVisible(false), 2800);
    const advance = setTimeout(() => {
      setIndex((i) => (i + 1) % examples.length);
      setVisible(true);
    }, 3200);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(advance);
    };
  }, [index, examples.length]);

  if (!examples.length) return base;
  return visible ? `Try "${examples[index]}"` : '';
}

// Maps category to a colour accent token used in suggestion rows
function categoryAccent(category) {
  switch (category) {
    case 'Optimization': return 'success';
    case 'Warning':      return 'warning';
    case 'Sanitizer':    return 'danger';
    case 'Debugging':    return 'info';
    case 'Linker':       return 'accent';
    default:             return 'neutral';
  }
}

export default function SearchBar({
  query,
  onQueryChange,
  suggestions,
  activeIndex,
  onActiveIndexChange,
  onSelectSuggestion,
  inputRef,
  onKeyDown,
  placeholder,
  exampleQueries = [],
}) {
  const cycledPlaceholder = useCyclingPlaceholder(exampleQueries, placeholder);
  const activeRef = useRef(null);

  // Keep the keyboard-active suggestion scrolled into view inside the dropdown
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  return (
    <section className={styles.searchShell} aria-label="Search Clang / Flang flags">
      <div className={styles.searchPanel}>

        {/* ── eyebrow ── */}
        <div className={styles.searchEyebrow}>
          <Command size={13} strokeWidth={2} aria-hidden="true" />
          <span>Command palette</span>
          <span className={styles.searchEyebrowDivider} aria-hidden="true" />
          <span className={styles.searchEyebrowHint}>
            <Keyboard size={11} strokeWidth={2} aria-hidden="true" />
            Press <kbd className={styles.kbd}>/</kbd> from anywhere
          </span>
        </div>

        {/* ── input row ── */}
        <label className={styles.searchLabel} htmlFor="clang-flags-search">
          <span className={styles.srOnly}>Search flags</span>
          <div className={clsx(styles.searchInputWrap, query && styles.searchInputWrapActive)}>
            <Search size={20} className={styles.searchIcon} strokeWidth={1.9} aria-hidden="true" />
            <input
              id="clang-flags-search"
              ref={inputRef}
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              onKeyDown={onKeyDown}
              placeholder={cycledPlaceholder}
              className={styles.searchInput}
              autoComplete="off"
              spellCheck="false"
              aria-autocomplete="list"
              aria-controls="clang-flags-suggestions"
              aria-expanded={suggestions.length > 0}
              aria-activedescendant={activeIndex >= 0 ? `suggestion-${activeIndex}` : undefined}
              role="combobox"
            />
            {query ? (
              <button
                type="button"
                className={styles.searchClearButton}
                onClick={() => onQueryChange('')}
                aria-label="Clear search"
              >
                <X size={15} strokeWidth={2.2} />
              </button>
            ) : (
              <div className={styles.searchShortcuts} aria-hidden="true">
                <kbd className={styles.searchShortcut}>↑↓ navigate</kbd>
                <kbd className={styles.searchShortcut}>↵ select</kbd>
                <kbd className={styles.searchShortcut}>Esc</kbd>
              </div>
            )}
          </div>
        </label>

        {/* ── hint + examples row ── */}
        <div className={styles.searchHintRow}>
          <span className={styles.searchHint}>
            <Hash size={11} strokeWidth={2.2} aria-hidden="true" />
            Flag name, category, compiler, or source file
          </span>
          {exampleQueries.length > 0 ? (
            <div className={styles.exampleRow} role="group" aria-label="Example searches">
              <span className={styles.exampleLabel}>Try:</span>
              <div className={styles.exampleList}>
                {exampleQueries.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={clsx(styles.exampleChip, query === item && styles.exampleChipActive)}
                    onClick={() => onQueryChange(item)}
                    aria-pressed={query === item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* ── suggestion dropdown ── */}
      {suggestions.length > 0 ? (
        <div
          className={styles.suggestionPanel}
          id="clang-flags-suggestions"
          role="listbox"
          aria-label="Flag suggestions"
        >
          <div className={styles.suggestionHeader}>
            <div className={styles.suggestionHeaderLeft}>
              <Command size={13} strokeWidth={2} aria-hidden="true" />
              <span>Suggestions</span>
            </div>
            <div className={styles.suggestionHeaderRight}>
              <span className={styles.suggestionCount}>
                {suggestions.length} match{suggestions.length !== 1 ? 'es' : ''}
              </span>
              <ChevronRight size={13} strokeWidth={2.2} aria-hidden="true" />
            </div>
          </div>

          <ul className={styles.suggestionList}>
            {suggestions.map((item, index) => {
              const compilerText = (item.supportedCompilers || []).join(' ');
              const isActive = index === activeIndex;
              const accent = categoryAccent(item.category);
              return (
                <li key={item.flag} role="presentation">
                  <button
                    id={`suggestion-${index}`}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    ref={isActive ? activeRef : null}
                    className={clsx(styles.suggestionItem, isActive && styles.suggestionItemActive)}
                    onMouseEnter={() => onActiveIndexChange(index)}
                    onClick={() => onSelectSuggestion(item)}
                  >
                    {/* left category colour strip */}
                    <span
                      className={clsx(styles.suggestionAccentStrip, styles[`suggestionStrip_${accent}`])}
                      aria-hidden="true"
                    />

                    <div className={styles.suggestionContent}>
                      <div className={styles.suggestionTopRow}>
                        <span className={styles.suggestionFlag}>
                          {splitHighlightedText(item.flag, query).map((part, partIndex) =>
                            part.highlighted ? (
                              <mark key={partIndex} className={styles.searchMark}>{part.text}</mark>
                            ) : (
                              <span key={partIndex}>{part.text}</span>
                            ),
                          )}
                        </span>
                        <span className={clsx(
                          styles.suggestionMeta,
                          styles[`suggestionMetaTone_${accent}`],
                        )}>
                          {item.category}
                        </span>
                      </div>

                      <div className={styles.suggestionHelp}>
                        {item.help || item.documentation || 'No help text available.'}
                      </div>

                      <div className={styles.suggestionBottomRow}>
                        <span className={styles.suggestionKind}>{item.kind}</span>
                        <span className={styles.suggestionGroup}>
                          {item.groupLabel || item.group || 'Ungrouped'}
                        </span>
                      </div>

                      <div className={styles.suggestionCompilerRow}>
                        {(item.supportedCompilers || []).map((compiler) => (
                          <span key={`${item.flag}-${compiler}`} className={styles.suggestionCompilerChip}>
                            {compiler}
                          </span>
                        ))}
                        {!compilerText ? (
                          <span className={styles.suggestionCompilerChip}>Clang</span>
                        ) : null}
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
