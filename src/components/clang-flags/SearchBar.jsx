import React from 'react';
import clsx from 'clsx';
import { ChevronRight, Command, Keyboard, Search } from 'lucide-react';
import styles from './clangFlags.module.css';
import { splitHighlightedText } from './utils';

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
  return (
    <section className={styles.searchShell} aria-label="Search Clang flags">
      <div className={styles.searchPanel}>
        <div className={styles.searchEyebrow}>
          <Command size={14} strokeWidth={1.95} />
          <span>Command palette</span>
        </div>

        <label className={styles.searchLabel} htmlFor="clang-flags-search">
          <span className={styles.srOnly}>Search flags</span>
          <div className={styles.searchInputWrap}>
            <Search size={20} className={styles.searchIcon} strokeWidth={1.9} />
            <input
              id="clang-flags-search"
              ref={inputRef}
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              onKeyDown={onKeyDown}
              placeholder={placeholder}
              className={styles.searchInput}
              autoComplete="off"
              spellCheck="false"
              aria-autocomplete="list"
              aria-controls="clang-flags-suggestions"
              aria-expanded={suggestions.length > 0}
              role="combobox"
            />
            <div className={styles.searchShortcuts} aria-hidden="true">
              <span className={styles.searchShortcut}>
                <Keyboard size={12} strokeWidth={2} />
                /
              </span>
              <span className={styles.searchShortcut}>Esc</span>
            </div>
          </div>
        </label>

        <div className={styles.searchHintRow}>
          <span className={styles.searchHint}>Use arrow keys and Enter</span>
          <span className={styles.searchHint}>Search by flag, category, compiler, or source file</span>
        </div>

        {exampleQueries.length > 0 ? (
          <div className={styles.exampleRow}>
            <span className={styles.exampleLabel}>Examples</span>
            <div className={styles.exampleList}>
              {exampleQueries.map((item) => (
                <button key={item} type="button" className={styles.exampleChip} onClick={() => onQueryChange(item)}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {suggestions.length > 0 ? (
        <div className={styles.suggestionPanel} id="clang-flags-suggestions">
          <div className={styles.suggestionHeader}>
            <div className={styles.suggestionHeaderLeft}>
              <Command size={14} strokeWidth={1.95} />
              <span>Autocomplete</span>
            </div>
            <div className={styles.suggestionHeaderRight}>
              <span>{suggestions.length} results</span>
              <ChevronRight size={14} strokeWidth={2} />
            </div>
          </div>

          <ul role="listbox" className={styles.suggestionList}>
            {suggestions.map((item, index) => {
              const compilerText = (item.supportedCompilers || []).join(' ');
              return (
                <li key={item.flag}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={index === activeIndex}
                    className={clsx(styles.suggestionItem, index === activeIndex && styles.suggestionItemActive)}
                    onMouseEnter={() => onActiveIndexChange(index)}
                    onClick={() => onSelectSuggestion(item)}
                  >
                    <div className={styles.suggestionTopRow}>
                      <span className={styles.suggestionFlag}>
                        {splitHighlightedText(item.flag, query).map((part, partIndex) =>
                          part.highlighted ? (
                            <mark key={partIndex} className={styles.searchMark}>
                              {part.text}
                            </mark>
                          ) : (
                            <span key={partIndex}>{part.text}</span>
                          ),
                        )}
                      </span>
                      <span className={styles.suggestionMeta}>{item.category}</span>
                    </div>

                    <div className={styles.suggestionHelp}>{item.help || item.documentation || 'No help text available.'}</div>

                    <div className={styles.suggestionBottomRow}>
                      <span>{item.kind}</span>
                      <span>{item.groupLabel || item.group || 'Ungrouped'}</span>
                    </div>

                    <div className={styles.suggestionCompilerRow}>
                      {(item.supportedCompilers || []).map((compiler) => (
                        <span key={`${item.flag}-${compiler}`} className={styles.suggestionCompilerChip}>
                          {compiler}
                        </span>
                      ))}
                      {compilerText ? null : <span className={styles.suggestionCompilerChip}>Clang</span>}
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
