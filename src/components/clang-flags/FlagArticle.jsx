import React, { useEffect, useMemo, useRef, useState } from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import {
  ArrowLeft, BookOpenText, Check, ChevronDown, Clock3, Code2,
  Copy, ExternalLink, FileText, Layers3, LayoutList, Sparkles, ShieldAlert,
} from 'lucide-react';
import Badge from './Badge';
import CodeBlock from './CodeBlock';
import { buildFlagArticlePath } from './flagRoutes';
import { joinList, uniqueValues } from './utils';
import styles from './clangFlags.module.css';
const OPTIMIZATION_PASSES = ['PassBuilder', 'InstCombine', 'GVN', 'LICM', 'LoopRotate', 'LoopVectorize', 'SLPVectorizer', 'SimplifyCFG'];

// ── Sticky mini-header that appears after scrolling past the hero ────────────
function StickyHeader({ flagName, sourceUrl, reportUrl }) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard?.writeText(flagName).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className={clsx(styles.stickyHeader, visible && styles.stickyHeaderVisible)} aria-hidden={!visible}>
      <div className={styles.stickyHeaderInner}>
        <Link to="/tools/clang-flags-explorer/" className={styles.stickyBack} aria-label="Back to explorer">
          <ArrowLeft size={14} strokeWidth={2.2} />
        </Link>
        <code className={styles.stickyFlagName}>{flagName}</code>
        <div className={styles.stickyActions}>
          <button type="button" className={styles.stickyBtn} onClick={handleCopy} aria-label="Copy flag">
            {copied ? <Check size={13} strokeWidth={2.4} /> : <Copy size={13} strokeWidth={2} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
          {sourceUrl && (
            <a href={sourceUrl} target="_blank" rel="noreferrer" className={styles.stickyBtn}>
              <ExternalLink size={13} strokeWidth={2} />
              <span className={styles.stickyBtnLabel}>Source</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Mobile TOC drawer ────────────────────────────────────────────────────────
const TOC_SECTIONS = [
  { id: 'quick-usage', label: 'Quick Usage' },
  { id: 'what-this-flag-actually-does', label: 'What it does' },
  { id: 'internal-llvm-implementation', label: 'Implementation' },
  { id: 'before-/-after-example', label: 'Before / After' },
  { id: 'performance-impact', label: 'Performance' },
  { id: 'advantages', label: 'Advantages' },
  { id: 'limitations', label: 'Limitations' },
  { id: 'best-use-cases', label: 'Use Cases' },
  { id: 'compiler-equivalents', label: 'Equivalents' },
  { id: 'common-mistakes', label: 'Mistakes' },
  { id: 'related-flags', label: 'Related Flags' },
  { id: 'faq', label: 'FAQ' },
  { id: 'version-history', label: 'Version History' },
];

function TocDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.tocDrawerWrap}>
      <button
        type="button"
        className={styles.tocDrawerToggle}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Table of contents"
      >
        <LayoutList size={14} strokeWidth={2} aria-hidden="true" />
        <span>On this page</span>
        <ChevronDown size={13} strokeWidth={2.2} className={clsx(styles.tocChevron, open && styles.tocChevronOpen)} aria-hidden="true" />
      </button>
      {open && (
        <nav className={styles.tocDrawerList} aria-label="Page sections">
          {TOC_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={styles.tocDrawerItem}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}



function Section({ icon: Icon, title, children, subtle = false, note, id }) {
  const sectionId = id || title.replace(/\s+/g, '-').toLowerCase();
  return (
    <section id={sectionId} className={clsx(styles.articleSection, subtle && styles.articleSectionSubtle)}>
      <div className={styles.articleSectionHeader}>
        <div className={styles.articleSectionTitleWrap}>
          {Icon ? <Icon size={16} strokeWidth={2} className={styles.sectionIcon} aria-hidden="true" /> : null}
          <div>
            <h2 className={styles.articleSectionTitle}>
              <a href={`#${sectionId}`} className={styles.articleSectionAnchor} aria-label={`Link to ${title}`}>#</a>
              {title}
            </h2>
            {note ? <p className={styles.articleSectionNote}>{note}</p> : null}
          </div>
        </div>
      </div>
      <div className={styles.articleSectionBody}>{children}</div>
    </section>
  );
}

        function buildToolLabels(flag) {
          const labels = [];
          const visibility = flag.visibility || [];

          if (visibility.includes('CLOption')) labels.push('clang-cl');
          if (visibility.includes('DXCOption')) labels.push('dxc');
          if (visibility.includes('FlangOption')) labels.push('flang');
          if (visibility.includes('FC1Option')) labels.push('flang -fc1');
          if (visibility.includes('CC1AsOption')) labels.push('clang -cc1as');
          if (visibility.includes('CC1Option')) labels.push('clang -cc1');
          if (visibility.includes('ClangOption')) labels.push(flag.category === 'Linker' ? 'clang++' : 'clang');

          if (!labels.length) {
            labels.push('clang');
          }

          return uniqueValues(labels);
        }

        function buildSinceVersion(meta) {
          if (meta?.llvmCommit) {
            return `Current LLVM snapshot (${meta.llvmCommit.slice(0, 8)})`;
          }
          return 'Current LLVM snapshot';
        }

        function buildStatus(flag) {
          if (flag.deprecated) return 'Deprecated';
          if (flag.experimental) return 'Experimental';
          return 'Stable';
        }

        function buildArchitecture(flag) {
          const haystack = [flag.flag, flag.help, flag.groupLabel, flag.category].filter(Boolean).join(' ').toUpperCase();
          if (haystack.includes('AARCH64')) {
            return 'AArch64';
          }
          if (flag.groupLabel) {
            return String(flag.groupLabel).replace(/^AARCH64$/, 'AArch64');
          }
          return 'Clang';
        }

        function buildPipelineLabel(flag) {
          const haystack = [flag.flag, flag.help, flag.groupLabel].filter(Boolean).join(' ').toLowerCase();
          if (flag.category === 'Warning') return 'Frontend';
          if (flag.category === 'Preprocessor') return 'Frontend';
          if (flag.category === 'Optimization' || /^-o/.test(String(flag.flag || '').toLowerCase())) return 'Optimization';
          if (flag.category === 'Sanitizer') return 'Backend';
          if (flag.category === 'Linker') return 'Linker';
          if (haystack.includes('aarch64') || haystack.includes('call-saved') || haystack.includes('call-preserved')) {
            return 'Backend';
          }
          return 'Backend';
        }

        function buildCategoryLabel(flag) {
          const haystack = [flag.flag, flag.help, flag.groupLabel, flag.category].filter(Boolean).join(' ').toLowerCase();
          if (haystack.includes('aarch64') || haystack.includes('abi')) {
            return 'ABI';
          }
          if (flag.category) {
            return flag.category;
          }
          return 'General';
        }

        function buildHeroSummary(flag, what) {
          if (flag.flag === '-fcall-saved-x10') {
            return 'Make register x10 callee-saved during code generation (AArch64 only).';
          }
          if (flag.help) {
            return flag.help;
          }
          return what.summary || what.body || 'No help text available.';
        }

        function buildHeroBadges(flag, status) {
          return [
            buildArchitecture(flag),
            status,
            buildPipelineLabel(flag),
            buildCategoryLabel(flag),
            'LLVM Snapshot',
          ];
        }

        function buildHeroMetaCards(flag, meta, status) {
          return [
            { label: 'Architecture', value: buildArchitecture(flag) },
            { label: 'Pipeline', value: buildPipelineLabel(flag) },
            { label: 'Category', value: buildCategoryLabel(flag) },
            { label: 'Driver', value: flag.cc1 ? 'clang -cc1' : 'clang' },
            { label: 'CC1', value: flag.cc1 ? 'Yes' : 'No' },
            { label: 'LLVM Version', value: 'Current Snapshot' },
            { label: 'Introduced', value: flag.introduced || 'Not available' },
            { label: 'Status', value: status },
          ];
        }

        function buildHeroSummaryItems(flag, what, useCases, limitations) {
          if (flag.flag === '-fcall-saved-x10') {
            return [
              {
                label: 'What it does',
                icon: Check,
                text: 'Makes x10 callee-saved so the backend preserves it across calls on AArch64.',
              },
              {
                label: 'Use when',
                icon: Clock3,
                text: 'You need x10 preserved across calls for ABI-sensitive AArch64 work or compiler experiments.',
              },
              {
                label: 'Avoid when',
                icon: ShieldAlert,
                text: 'You are not targeting AArch64 or you do not want to change register-save behavior.',
              },
              {
                label: 'Important',
                icon: Sparkles,
                text: 'This is a backend ABI knob, so it changes generated code rather than source semantics.',
              },
            ];
          }

          return [
            {
              label: 'What it does',
              icon: Check,
              text: buildHeroSummary(flag, what),
            },
            {
              label: 'Use when',
              icon: Clock3,
              text: useCases[0] ? 'Use it for ' + useCases[0].toLowerCase() + '.' : 'Use it when the selected compilation stage matches your intent.',
            },
            {
              label: 'Avoid when',
              icon: ShieldAlert,
              text: limitations[0] ? 'Avoid it when ' + limitations[0].toLowerCase() + '.' : 'Avoid it when the target or compilation stage does not need it.',
            },
            {
              label: 'Important',
              icon: Sparkles,
              text: what.callouts[0] || 'It changes compiler behavior in a way that can matter outside source code.',
            },
          ];
        }

        function buildReportIssueUrl(flag) {
          const title = encodeURIComponent('Clang flag article: ' + flag.flag);
          const body = encodeURIComponent([
            'Flag: ' + flag.flag,
            'Source: ' + (flag.sourceUrl || 'Not available'),
            'Article: ' + buildFlagArticlePath(flag.flag),
            '',
            'Describe the issue here.',
          ].join('\n'));

          return 'https://github.com/aabhinavg1/FixIt/issues/new?title=' + title + '&body=' + body;
        }

        function buildStageHighlights(flag) {
          if (flag.category === 'Optimization' || /^-O/.test(flag.flag)) {
            return ['LLVM IR', 'Optimization', 'Code Generation'];
          }
          if (flag.category === 'Sanitizer') {
            return ['LLVM IR', 'Code Generation'];
          }
          if (flag.category === 'Warning') {
            return ['Frontend', 'AST'];
          }
          if (flag.category === 'Preprocessor') {
            return ['Source', 'Frontend'];
          }
          if (flag.category === 'Linker') {
            return ['Linking'];
          }
          if (flag.category === 'Target-Specific Code Generation' || flag.category === 'Code Generation') {
            return ['Code Generation', 'Assembly'];
          }
          if (flag.category === 'Debugging') {
            return ['Frontend', 'LLVM IR'];
          }
          return ['Frontend', 'LLVM IR'];
        }
        function buildImplementationRows(flag, meta) {
          const base = meta?.sourceBaseUrl || 'https://github.com/llvm/llvm-project/blob/main';
          const rows = [
            {
              component: 'TableGen option record',
              files: [{ label: flag.sourcePath || 'clang/include/clang/Driver/Options.td', path: flag.sourcePath || 'clang/include/clang/Driver/Options.td' }],
              note: 'Defines the spelling, arguments, and metadata that Clang imports into the generated option database.',
            },
            {
              component: 'Driver parsing',
              files: [
                { label: 'clang/lib/Driver/Driver.cpp', path: 'clang/lib/Driver/Driver.cpp' },
                { label: 'clang/lib/Driver/ToolChains/Clang.cpp', path: 'clang/lib/Driver/ToolChains/Clang.cpp' },
              ],
              note: 'Resolves the command-line spelling and decides whether the driver or cc1 layer consumes it.',
            },
            {
              component: 'Invocation setup',
              files: [{ label: 'clang/lib/Frontend/CompilerInvocation.cpp', path: 'clang/lib/Frontend/CompilerInvocation.cpp' }],
              note: 'Converts the flag into structured frontend state before code generation starts.',
            },
          ];

          if (flag.category === 'Optimization' || /^-O/.test(flag.flag)) {
            rows.push(
              {
                component: 'Pass pipeline',
                files: [{ label: 'llvm/lib/Transforms/IPO/PassBuilder.cpp', path: 'llvm/lib/Transforms/IPO/PassBuilder.cpp' }],
                note: 'PassBuilder assembles the canonical optimization pipeline for the selected level.',
              },
              {
                component: 'Core transforms',
                files: [
                  { label: 'llvm/lib/Transforms/Scalar/', path: 'llvm/lib/Transforms/Scalar/' },
                  { label: 'llvm/lib/Transforms/Scalar/GVN.cpp', path: 'llvm/lib/Transforms/Scalar/GVN.cpp' },
                  { label: 'llvm/lib/Transforms/Vectorize/LoopVectorize.cpp', path: 'llvm/lib/Transforms/Vectorize/LoopVectorize.cpp' },
                ],
                note: 'Mid-end passes simplify, inline, combine, and vectorize based on the optimization level.',
              },
            );
          } else if (flag.category === 'Sanitizer') {
            rows.push(
              {
                component: 'Sanitizer arguments',
                files: [{ label: 'clang/lib/Basic/SanitizerArgs.cpp', path: 'clang/lib/Basic/SanitizerArgs.cpp' }],
                note: 'Normalizes sanitizer options and prepares runtime instrumentation settings.',
              },
              {
                component: 'Instrumentation passes',
                files: [
                  { label: 'llvm/lib/Transforms/Instrumentation/', path: 'llvm/lib/Transforms/Instrumentation/' },
                ],
                note: 'Instrumentation inserts checks that report invalid memory, UB, or control-flow behavior.',
              },
            );
          } else if (flag.category === 'Warning') {
            rows.push(
              {
                component: 'Diagnostics engine',
                files: [
                  { label: 'clang/include/clang/Basic/', path: 'clang/include/clang/Basic/' },
                  { label: 'clang/lib/Basic/DiagnosticIDs.cpp', path: 'clang/lib/Basic/DiagnosticIDs.cpp' },
                ],
                note: 'Controls which diagnostics are emitted, promoted, or suppressed before code generation.',
              },
            );
          } else if (flag.category === 'Preprocessor') {
            rows.push(
              {
                component: 'Preprocessor state',
                files: [{ label: 'clang/lib/Lex/Preprocessor.cpp', path: 'clang/lib/Lex/Preprocessor.cpp' }],
                note: 'Preprocessor flags alter macro expansion, include handling, and tokenization early in compilation.',
              },
            );
          } else {
            rows.push(
              {
                component: 'Code generation',
                files: [
                  { label: 'clang/lib/CodeGen/', path: 'clang/lib/CodeGen/' },
                  { label: 'clang/lib/Basic/TargetInfo.cpp', path: 'clang/lib/Basic/TargetInfo.cpp' },
                ],
                note: 'Target selection and lowering decisions shape the emitted machine code or linker invocation.',
              },
            );
          }

          return rows.map((row) => ({
            ...row,
            files: row.files.map((file) => ({
              ...file,
              url: `${base}/${file.path}`,
            })),
          }));
        }

        function buildQuickExamples(flag) {
          const renderedFlag = flag.takesArgument
            ? (flag.kind === 'Separate' || flag.kind === 'JoinedAndSeparate'
              ? `${flag.flag} <arg>`
              : `${flag.flag}=<arg>`)
            : flag.flag;

          const baseCommand = `clang++ ${renderedFlag} main.cpp -o app`;
          const altCommand = flag.category === 'Preprocessor'
            ? `clang++ ${renderedFlag} -E input.cpp`
            : flag.category === 'Warning'
              ? `clang++ ${renderedFlag} -fsyntax-only main.cpp`
              : flag.category === 'Linker'
                ? `clang++ ${renderedFlag} main.o -o app`
                : `clang++ ${renderedFlag} main.cpp -o app`;

          const buildSystem = flag.category === 'Optimization'
            ? `CXXFLAGS="${flag.flag} -DNDEBUG" make -j"$(nproc)"`
            : `cmake -DCMAKE_CXX_FLAGS="${renderedFlag}" ..`;

          return [
            { title: 'Single-file usage', language: 'shell', code: baseCommand },
            { title: 'Build-system usage', language: 'shell', code: buildSystem },
            { title: 'Alternative invocation', language: 'shell', code: altCommand },
          ];
        }

        function buildWhatItDoes(flag) {
          const summary = flag.documentation || flag.help || 'No help text is available in the imported LLVM metadata.';
          const stage = buildStageHighlights(flag)[0];

          const extras = {
            Optimization: 'It changes the optimization pipeline, which can alter inlining, loop transforms, vectorization, and code layout.',
            Warning: 'It changes diagnostic behavior rather than the generated machine code.',
            Preprocessor: 'It changes the preprocessing phase, so it affects token expansion and what the parser sees.',
            Sanitizer: 'It inserts runtime instrumentation and usually changes both IR and emitted machine code.',
            Linker: 'It changes how the final link step is driven, often by forwarding arguments to the linker.',
            'Code Generation': 'It shapes how IR is lowered into target-specific machine code.',
            'Target-Specific Code Generation': 'It configures target-specific lowering, scheduling, and instruction selection decisions.',
            Debugging: 'It improves observability, debug info, or crash triage, often at some runtime or size cost.',
          };

          return {
            summary,
            body: extras[flag.category] || `This flag primarily affects the ${stage.toLowerCase()} stage of compilation.`,
            callouts: [
              `Primary stage: ${stage}`,
              flag.takesArgument ? 'This option expects an argument or value.' : 'This option is a standalone toggle.',
              flag.aliasTargetFlag ? `It aliases ${flag.aliasTargetFlag}.` : 'No alias target was recorded in the current data dump.',
            ],
          };
        }

        function buildPerformance(flag) {
          if (flag.category === 'Optimization' || /^-O/.test(flag.flag)) {
            return [
              { metric: 'Compile time', value: 'Higher', tone: 'warning', note: 'More passes and deeper analysis usually cost extra front-end and mid-end time.' },
              { metric: 'Runtime', value: 'Lower', tone: 'success', note: 'More aggressive optimization usually reduces runtime for hot code.' },
              { metric: 'Binary size', value: 'Mixed', tone: 'accent', note: 'Inlining and unrolling may grow the binary even when runtime improves.' },
              { metric: 'Memory', value: 'Mixed', tone: 'neutral', note: 'Memory use depends on the workload and the target pipeline.' },
              { metric: 'Debuggability', value: 'Lower', tone: 'danger', note: 'Heavier optimization makes stepping and variable inspection harder.' },
            ];
          }

          if (flag.category === 'Warning') {
            return [
              { metric: 'Compile time', value: 'Neutral', tone: 'neutral', note: 'Warning configuration usually does not change the optimizer pipeline.' },
              { metric: 'Runtime', value: 'Neutral', tone: 'neutral', note: 'Diagnostics-only flags do not affect emitted machine code.' },
              { metric: 'Binary size', value: 'Neutral', tone: 'neutral', note: 'Warnings generally do not change object size.' },
              { metric: 'Memory', value: 'Neutral', tone: 'neutral', note: 'The main cost is diagnostic bookkeeping.' },
              { metric: 'Debuggability', value: 'Higher', tone: 'success', note: 'Stricter warnings usually improve code health and maintainability.' },
            ];
          }

          if (flag.category === 'Sanitizer') {
            return [
              { metric: 'Compile time', value: 'Higher', tone: 'warning', note: 'Instrumentation adds extra compile work and runtime hooks.' },
              { metric: 'Runtime', value: 'Slower', tone: 'danger', note: 'Sanitizer checks trade performance for bug detection.' },
              { metric: 'Binary size', value: 'Higher', tone: 'warning', note: 'Instrumentation and runtime support increase code size.' },
              { metric: 'Memory', value: 'Higher', tone: 'warning', note: 'Red zones, metadata, and checks can increase memory usage.' },
              { metric: 'Debuggability', value: 'Higher', tone: 'success', note: 'Sanitizers often make undefined behavior easier to catch and reproduce.' },
            ];
          }

          return [
            { metric: 'Compile time', value: 'Neutral', tone: 'neutral', note: 'Target and frontend options usually affect specific stages rather than the entire pipeline.' },
            { metric: 'Runtime', value: 'Varies', tone: 'accent', note: 'The effect depends on whether the option changes code generation, linking, or preprocessing.' },
            { metric: 'Binary size', value: 'Varies', tone: 'accent', note: 'Some options change the size of the emitted object or final executable.' },
            { metric: 'Memory', value: 'Varies', tone: 'accent', note: 'Memory impact depends on the selected compilation stage.' },
            { metric: 'Debuggability', value: 'Varies', tone: 'accent', note: 'Some options help diagnostics while others reduce visibility.' },
          ];
        }

        function buildAdvantages(flag) {
          if (flag.category === 'Optimization' || /^-O/.test(flag.flag)) {
            return ['Better runtime behavior on hot paths', 'Enables the full mid-end optimization pipeline', 'Often improves inlining and vectorization quality'];
          }
          if (flag.category === 'Warning') {
            return ['Catches regressions earlier', 'Improves code quality in CI', 'Encodes project policy in the compiler'];
          }
          if (flag.category === 'Sanitizer') {
            return ['Finds memory and UB issues quickly', 'Works well in test and CI pipelines', 'Surfaces bugs that are otherwise silent'];
          }
          return ['Makes a specific compiler stage explicit', 'Helps tune build behavior without source changes', 'Improves repeatability in build systems'];
        }

        function buildLimitations(flag) {
          if (flag.category === 'Optimization' || /^-O/.test(flag.flag)) {
            return ['Can increase compile time', 'May make debugging harder', 'May grow binary size through inlining and unrolling'];
          }
          if (flag.category === 'Warning') {
            return ['Does not fix the underlying code issue by itself', 'Can be noisy in third-party code', 'Requires team agreement on warning policy'];
          }
          if (flag.category === 'Sanitizer') {
            return ['Adds runtime overhead', 'Usually unsuitable for production performance runs', 'Some checks are platform or runtime specific'];
          }
          return ['May be platform dependent', 'Can have different behavior across frontends or targets', 'Some options only apply in one compilation mode'];
        }

        function buildUseCases(flag) {
          if (flag.category === 'Optimization' || /^-O/.test(flag.flag)) {
            return ['Production builds', 'HPC kernels', 'Libraries distributed in release mode', 'Performance-sensitive game engines'];
          }
          if (flag.category === 'Warning') {
            return ['CI policy checks', 'Large team codebases', 'Code review enforcement', 'Regression detection'];
          }
          if (flag.category === 'Sanitizer') {
            return ['Test suites', 'Fuzzing rigs', 'Pre-release validation', 'Bug-hunting sessions'];
          }
          return ['Toolchain tuning', 'Cross-compilation workflows', 'Target bring-up', 'Build-system policy control'];
        }

        function buildEquivalents(flag) {
          if (flag.category === 'Optimization' || /^-O/.test(flag.flag)) {
            return [
              { compiler: 'Clang', flag: flag.flag, note: 'Clang driver optimization level.' },
              { compiler: 'GCC', flag: flag.flag, note: 'Usually similar in spirit, but the exact pass pipeline differs.' },
              { compiler: 'MSVC', flag: '/O2', note: 'Closest general release optimization mode, but not identical.' },
              { compiler: 'ICC / ICX', flag: '-O3', note: 'Optimization semantics differ by backend and target.' },
            ];
          }

          if (flag.category === 'Warning') {
            return [
              { compiler: 'Clang', flag: flag.flag, note: 'Primary spelling in this repository.' },
              { compiler: 'GCC', flag: flag.flag, note: 'Many warning families map closely but not exactly.' },
              { compiler: 'MSVC', flag: '/W4 or /WX', note: 'Microsoft warning levels differ from Clang groups.' },
              { compiler: 'ICC / ICX', flag: 'varies', note: 'Warning coverage depends on the front-end and compatibility mode.' },
            ];
          }

          return [
            { compiler: 'Clang', flag: flag.flag, note: 'Native Clang spelling.' },
            { compiler: 'GCC', flag: 'varies', note: 'Some flags match directly, but many are frontend-specific.' },
            { compiler: 'MSVC', flag: 'varies', note: 'MSVC uses different option families and compatibility modes.' },
            { compiler: 'ICC / ICX', flag: 'varies', note: 'Equivalent behavior depends on the target and mode.' },
          ];
        }

        function buildCommonMistakes(flag) {
          if (flag.category === 'Optimization' || /^-O/.test(flag.flag)) {
            return ['Using high optimization while debugging a failing test', 'Expecting `-O3` to always improve runtime', 'Ignoring the interaction with LTO, PGO, and target tuning'];
          }
          if (flag.category === 'Warning') {
            return ['Promoting warnings to errors before the team is ready', 'Treating warning cleanup as a one-time task', 'Assuming warning groups behave identically on every compiler'];
          }
          if (flag.category === 'Sanitizer') {
            return ['Running sanitizer builds as if they were release builds', 'Mixing sanitizer binaries with unsupported runtimes', 'Skipping the required runtime libraries and environment setup'];
          }
          return ['Assuming the flag is portable across all targets', 'Using the flag without checking the compilation stage it affects', 'Treating a driver option and a cc1 option as interchangeable'];
        }

        function buildFaq(flag) {
          return [
            { q: 'Does this affect LLVM IR?', a: flag.category === 'Warning' ? 'Not usually. Diagnostic-only flags typically stop at the frontend.' : 'Yes, this flag can influence the IR that the frontend produces or the way LLVM transforms it.' },
            { q: 'Does it affect backend code generation?', a: flag.category === 'Optimization' || flag.category === 'Sanitizer' || flag.category === 'Code Generation' || flag.category === 'Target-Specific Code Generation' ? 'Yes. It can change the backend pipeline, emitted instructions, or inserted checks.' : 'Usually not directly, unless the flag eventually reaches the codegen stage through the driver.' },
            { q: 'Can it change ABI?', a: 'Usually no, but target, vectorization, sanitizers, and some codegen flags can change calling convention behavior or runtime expectations in practice.' },
            { q: 'Can it be combined with LTO?', a: flag.category === 'Optimization' ? 'Usually yes. LTO is often combined with optimization flags, but the exact pipeline changes.' : 'It depends on the flag. Driver-level and codegen-level options may still combine with LTO, but some do not matter once LTO takes over.' },
            { q: 'Does it increase binary size?', a: flag.category === 'Optimization' ? 'It can. Higher optimization can both shrink and grow size depending on inlining and unrolling.' : flag.category === 'Sanitizer' ? 'Usually yes, because instrumentation and runtime support add code.' : 'Usually not, unless the flag changes codegen decisions or inserts extra diagnostics/instrumentation.' },
          ];
        }

        function buildVersionHistory(flag, meta) {
          const dateText = meta?.generatedAt ? new Date(meta.generatedAt).toLocaleDateString() : 'Unknown date';
          const currentCommit = meta?.llvmCommit ? meta.llvmCommit.slice(0, 12) : 'unknown';
          return [
            { label: 'Current snapshot', value: currentCommit, note: `Imported from the LLVM tree used to generate this dataset on ${dateText}.` },
            { label: 'Introduced', value: 'Not mapped yet', note: 'Historical release mapping is not embedded in the current data source.' },
            { label: 'Changed', value: 'See LLVM git history', note: 'Use the source file links and LLVM commit history for release-by-release changes.' },
            { label: 'Deprecated / removed', value: flag.deprecated ? 'Deprecated' : 'Not deprecated in this snapshot', note: flag.deprecated ? 'The current metadata marks this flag as deprecated.' : 'No deprecation marker was found in the current metadata.' },
          ];
        }

        function buildPasses(flag) {
          if (flag.category === 'Optimization' || /^-O/.test(flag.flag)) {
            return OPTIMIZATION_PASSES;
          }
          return [];
        }

        function buildRepresentativeExample(flag) {
          const header = flag.category === 'Optimization'
            ? '// Representative optimization example'
            : flag.category === 'Warning'
              ? '// Representative warning example'
              : flag.category === 'Sanitizer'
                ? '// Representative sanitizer example'
                : '// Representative compiler example';

          const source = flag.category === 'Optimization'
            ? `${header}
int sum(const int* values, int n) {
  int total = 0;
  for (int i = 0; i < n; ++i) {
    total += values[i];
  }
  return total;
}`
            : flag.category === 'Warning'
              ? `${header}
int main() {
  int unused = 0;
  (void)unused;
  return 0;
}`
              : flag.category === 'Sanitizer'
                ? `${header}
int main() {
  int arr[2] = {1, 2};
  return arr[3];
}`
                : `${header}
#define SCALE 4
int main() {
  return SCALE;
}`;

          const ir = flag.category === 'Optimization'
            ? `; Representative LLVM IR
define i32 @sum(ptr nocapture readonly %values, i32 %n) {
entry:
  ; The optimizer can inline, simplify, and vectorize this loop.
  ret i32 %optimized_result
}`
            : flag.category === 'Warning'
              ? `; Warning flags usually do not change LLVM IR.
; The notable difference is diagnostic output during compilation.`
              : flag.category === 'Sanitizer'
                ? `; Representative LLVM IR with instrumentation
call void @__asan_report_load4()
; Sanitizer passes inject checks before the final backend run.`
                : `; Representative LLVM IR
; This flag affects lower-level compiler state rather than source semantics.`;

          const asm = flag.category === 'Optimization'
            ? `; Representative assembly
mov eax, DWORD PTR [rdi]
; Loop body is streamlined by optimization passes
ret`
            : flag.category === 'Warning'
              ? '; Assembly is typically unchanged because warnings are a frontend-only concern.'
              : flag.category === 'Sanitizer'
                ? `; Representative assembly
call __asan_report_load4
ret`
                : `; Representative assembly
; Target-specific lowering depends on the selected option and architecture.`;

          const diff = flag.category === 'Optimization'
            ? ['Before: scalar loop with conservative code motion.', 'After: more aggressive inlining, loop optimization, and vectorization opportunities.', 'The exact output depends on the target and the surrounding code.']
            : flag.category === 'Warning'
              ? ['Before: the compiler accepts the translation unit with diagnostics available.', 'After: the same code may emit warnings, or warnings can be promoted to errors.', 'IR and assembly usually stay the same.']
              : flag.category === 'Sanitizer'
                ? ['Before: no runtime checks around the invalid access.', 'After: extra instrumentation is inserted before the backend lowers the code.', 'The runtime dependency changes the final program behavior.']
                : ['Before: baseline compiler behavior.', 'After: the selected stage or target setting changes driver or codegen state.', 'The exact lowering depends on the current flag.'];

          return { source, ir, asm, diff };
        }

        function buildRelatedArticleFlags(flag, allFlags) {
          if (flag.relatedFlags?.length) {
            return flag.relatedFlags
              .map((item) => allFlags.find((candidate) => candidate.flag === item))
              .filter(Boolean)
              .slice(0, 6);
          }

          return allFlags
            .filter((candidate) => candidate.flag !== flag.flag && candidate.category === flag.category)
            .slice(0, 6);
        }

function PerformanceRow({ metric, value, tone, note }) {
  const [activePreview, setActivePreview] = useState('source');
  const toolLabels = useMemo(() => buildToolLabels(flag), [flag]);
  const sinceVersion = useMemo(() => buildSinceVersion(meta), [meta]);
  const status = useMemo(() => buildStatus(flag), [flag]);
  const implementationRows = useMemo(() => buildImplementationRows(flag, meta), [flag, meta]);
  const quickExamples = useMemo(() => buildQuickExamples(flag), [flag]);
  const what = useMemo(() => buildWhatItDoes(flag), [flag]);
  const performance = useMemo(() => buildPerformance(flag), [flag]);
  const advantages = useMemo(() => buildAdvantages(flag), [flag]);
  const limitations = useMemo(() => buildLimitations(flag), [flag]);
  const useCases = useMemo(() => buildUseCases(flag), [flag]);
  const heroSummaryItems = useMemo(() => buildHeroSummaryItems(flag, what, useCases, limitations), [flag, what, useCases, limitations]);
  const equivalents = useMemo(() => buildEquivalents(flag), [flag]);
  const mistakes = useMemo(() => buildCommonMistakes(flag), [flag]);
  const faq = useMemo(() => buildFaq(flag), [flag]);
  const versionHistory = useMemo(() => buildVersionHistory(flag, meta), [flag, meta]);
  const passes = useMemo(() => buildPasses(flag), [flag]);
  const related = useMemo(() => buildRelatedArticleFlags(flag, allFlags), [flag, allFlags]);
  const example = useMemo(() => buildRepresentativeExample(flag), [flag]);
  const heroSummary = useMemo(() => buildHeroSummary(flag, buildWhatItDoes(flag)), [flag]);
  const heroBadges = useMemo(() => buildHeroBadges(flag, status), [flag, status]);
  const heroMetaCards = useMemo(() => buildHeroMetaCards(flag, meta, status), [flag, meta, status]);
  const reportIssueUrl = useMemo(() => buildReportIssueUrl(flag), [flag]);

  const description = heroSummary;

  return (
    <>
      <Head>
        <meta name="description" content={description} />
      </Head>

      {/* ── sticky mini-header (appears on scroll) ── */}
      <StickyHeader flagName={flag.flag} sourceUrl={flag.sourceUrl} reportUrl={reportIssueUrl} />

      <main className={styles.articlePageShell}>

        {/* ── breadcrumb ── */}
        <nav className={styles.articleBreadcrumb} aria-label="Breadcrumb">
          <Link to="/" className={styles.breadcrumbLink}>CompilerSutra</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <Link to="/tools/clang-flags/" className={styles.breadcrumbLink}>Clang Flags</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <Link to="/tools/clang-flags-explorer/" className={styles.breadcrumbLink}>Explorer</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <span className={styles.breadcrumbCurrent} aria-current="page">{flag.flag}</span>
        </nav>

        {/* ── hero ── */}
        <section className={styles.articleHero}>
          <div className={styles.articleHeroCopy}>
            <h1 className={styles.articleHeroTitle}>{flag.flag}</h1>
            <p className={styles.articleHeroSummary}>{description}</p>

            <div className={styles.heroBadgeRow}>
              {heroBadges.map((badge) => (
                <Badge
                  key={badge}
                  tone={badge === 'LLVM Snapshot' ? 'accent' : badge === 'Stable' ? 'success' : badge === 'Backend' || badge === 'ABI' ? 'info' : 'neutral'}
                >
                  {badge}
                </Badge>
              ))}
            </div>

            {/* meta grid — 4 cols on desktop, 2 on tablet, 1 on mobile */}
            <div className={styles.articleHeroMetaGrid}>
              {heroMetaCards.map((item) => (
                <div key={item.label} className={styles.articleHeroMetaCard}>
                  <div className={styles.articleHeroMetaLabel}>{item.label}</div>
                  <div className={styles.articleHeroMetaValue}>{item.value}</div>
                </div>
              ))}
            </div>

            {/* action buttons */}
            <div className={styles.articleHeroActions}>
              {/* copy flag — primary CTA on mobile */}
              <button
                type="button"
                className={clsx(styles.heroActionButton, styles.heroActionButtonPrimary)}
                onClick={() => {
                  navigator.clipboard?.writeText(flag.flag).catch(() => {});
                  onCopyFlag?.();
                }}
              >
                <Copy size={14} strokeWidth={2} aria-hidden="true" />
                <span>Copy flag</span>
              </button>

              {flag.sourceUrl ? (
                <Link
                  className={clsx(styles.heroActionButton, styles.heroActionButtonSecondary)}
                  href={flag.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={14} strokeWidth={2} aria-hidden="true" />
                  <span>View Source</span>
                </Link>
              ) : (
                <button
                  type="button"
                  className={clsx(styles.heroActionButton, styles.heroActionButtonSecondary)}
                  disabled
                >
                  <ExternalLink size={14} strokeWidth={2} aria-hidden="true" />
                  <span>View Source</span>
                </button>
              )}

              <Link
                className={clsx(styles.heroActionButton, styles.heroActionButtonDanger)}
                href={reportIssueUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={14} strokeWidth={2} aria-hidden="true" />
                <span>Report Issue</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── hero summary cards ── */}
        <section className={styles.heroSummaryCard}>
          <div className={styles.heroSummaryGrid}>
            {heroSummaryItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className={styles.heroSummaryItem}>
                  <div className={styles.heroSummaryHeading}>
                    <Icon size={14} strokeWidth={2.4} className={styles.heroSummaryIcon} aria-hidden="true" />
                    <span>{item.label}</span>
                  </div>
                  <p className={styles.heroSummaryText}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── mobile TOC ── */}
        <TocDrawer />

        {/* ── article body ── */}
        <div className={styles.articleLayout}>
          <article className={styles.articleMain}>

            <Section icon={Code2} title="Quick Usage" note="The exact command lines engineers actually run.">
              <div className={styles.quickUsageGrid}>
                {quickExamples.map((sample) => (
                  <CodeBlock key={sample.title} title={sample.title} language={sample.language} code={sample.code} />
                ))}
              </div>
            </Section>

            <Section icon={BookOpenText} title="What this flag actually does" note="Effect first — not just the help text.">
              <p className={styles.bodyCopy}>{what.summary}</p>
              <p className={styles.bodyCopy}>{what.body}</p>
              <div className={styles.calloutRow}>
                {what.callouts.map((item) => (
                  <div key={item} className={styles.calloutCard}>{item}</div>
                ))}
              </div>
            </Section>

            <Section icon={FileText} title="Internal LLVM Implementation" note="Files most closely tied to how this flag is parsed and consumed.">
              <div className={styles.dataTableWrap}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>LLVM component</th>
                      <th>Relevant source files</th>
                      <th>Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {implementationRows.map((row) => (
                      <tr key={row.component}>
                        <td>{row.component}</td>
                        <td>
                          <div className={styles.inlineLinkList}>
                            {row.files.map((file) => (
                              <a key={file.url} href={file.url} target="_blank" rel="noreferrer">{file.label}</a>
                            ))}
                          </div>
                        </td>
                        <td>{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section icon={Code2} title="Before / After Example" note="Representative outputs — exact results vary by source and target.">
              {/* improved tab bar */}
              <div className={styles.tabsRow} role="tablist" aria-label="Code views">
                {[
                  { key: 'source', label: 'Source', icon: Code2 },
                  { key: 'ir', label: 'LLVM IR', icon: Layers3 },
                  { key: 'asm', label: 'Assembly', icon: FileText },
                  { key: 'diff', label: 'Diff', icon: BookOpenText },
                ].map(({ key, label, icon: TabIcon }) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={activePreview === key}
                    className={clsx(styles.tabButton, activePreview === key && styles.tabButtonActive)}
                    onClick={() => setActivePreview(key)}
                  >
                    <TabIcon size={13} strokeWidth={2} aria-hidden="true" />
                    {label}
                  </button>
                ))}
              </div>

              <div className={styles.previewPane} role="tabpanel">
                {activePreview === 'source' && <CodeBlock title="Input code" language="cpp" code={example.source} />}
                {activePreview === 'ir' && <CodeBlock title="Generated LLVM IR" language="llvm" code={example.ir} />}
                {activePreview === 'asm' && <CodeBlock title="Generated Assembly" language="asm" code={example.asm} />}
                {activePreview === 'diff' && (
                  <div className={styles.diffCard}>
                    {example.diff.map((line, i) => (
                      <div key={i} className={clsx(styles.diffLine, line.startsWith('Before') && styles.diffLineBefore, line.startsWith('After') && styles.diffLineAfter)}>
                        {line}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Section>

            <div className={styles.twoColumnSection}>
              <Section icon={Layers3} title="Optimization Passes" note="Only populated for flags that drive the optimization pipeline.">
                {passes.length > 0 ? (
                  <div className={styles.passChipGrid}>
                    {passes.map((pass) => <Badge key={pass} tone="success">{pass}</Badge>)}
                  </div>
                ) : (
                  <p className={styles.bodyCopy}>This flag does not directly enumerate an optimization pass list in the current metadata.</p>
                )}
              </Section>

              <Section icon={Layers3} title="Visual Pass Pipeline" note="Canonical optimization sequence for optimization-level flags.">
                {passes.length > 0 ? (
                  <div className={styles.passPipeline}>
                    {['PassBuilder', ...passes.slice(1)].map((item, index) => (
                      <React.Fragment key={item}>
                        <div className={styles.passNode}>{item}</div>
                        {index < passes.length - 1 ? <div className={styles.passArrow} aria-hidden="true">↓</div> : null}
                      </React.Fragment>
                    ))}
                  </div>
                ) : (
                  <p className={styles.bodyCopy}>No canonical pass pipeline is associated with this flag.</p>
                )}
              </Section>
            </div>

            <Section icon={Sparkles} title="Performance Impact" note="Qualitative summary — no numbers, just direction.">
              <div className={styles.performanceList}>
                {performance.map((row) => <PerformanceRow key={row.metric} {...row} />)}
              </div>
            </Section>

            <div className={styles.twoColumnSection}>
              <Section icon={Check} title="Advantages">
                <ul className={styles.bulletList}>
                  {advantages.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Section>

              <Section icon={ShieldAlert} title="Limitations">
                <ul className={styles.bulletList}>
                  {limitations.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Section>
            </div>

            <Section icon={Clock3} title="Best Use Cases" note="Environments where this flag earns its place.">
              <div className={styles.chipGrid}>
                {useCases.map((item) => <Badge key={item} tone="info">{item}</Badge>)}
              </div>
            </Section>

            <Section icon={Layers3} title="Compiler Equivalents" note="Similar switches in other toolchains — behavior is rarely identical.">
              <div className={styles.dataTableWrap}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>Compiler</th>
                      <th>Equivalent</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equivalents.map((row) => (
                      <tr key={row.compiler}>
                        <td>{row.compiler}</td>
                        <td><code>{row.flag}</code></td>
                        <td>{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section icon={ShieldAlert} title="Common Mistakes" note="Patterns that cause confusion in reviews and build systems.">
              <ul className={styles.bulletList}>
                {mistakes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Section>

            <Section icon={FileText} title="Related Flags" note="Adjacent flags in the same category.">
              {related.length > 0 ? (
                <div className={styles.relatedGrid}>
                  {related.map((item) => <RelatedFlagCard key={item.flag} flag={item} />)}
                </div>
              ) : (
                <p className={styles.bodyCopy}>No adjacent flags were identified in the current dataset.</p>
              )}
            </Section>

            <Section icon={Sparkles} title="Benchmarks" note="Scaffold ready for real benchmark data ingestion.">
              <div className={styles.benchmarkGrid}>
                {[
                  { label: 'Execution time', baseline: '62%', alt: flag.category === 'Optimization' ? '84%' : '60%' },
                  { label: 'Compile time', baseline: '58%', alt: flag.category === 'Optimization' ? '76%' : '52%' },
                ].map(({ label, baseline, alt }) => (
                  <div key={label} className={styles.benchmarkCard}>
                    <div className={styles.benchmarkLabel}>{label}</div>
                    <div className={styles.benchmarkBars}>
                      <div className={styles.benchmarkBar}>
                        <span className={styles.benchmarkBarLabel}>Baseline</span>
                        <div className={styles.benchmarkTrack}>
                          <div className={styles.benchmarkFill} style={{ width: baseline }} />
                        </div>
                        <span className={styles.benchmarkBarValue}>{baseline}</span>
                      </div>
                      <div className={styles.benchmarkBar}>
                        <span className={styles.benchmarkBarLabel}>{flag.flag}</span>
                        <div className={styles.benchmarkTrack}>
                          <div className={styles.benchmarkFillAlt} style={{ width: alt }} />
                        </div>
                        <span className={styles.benchmarkBarValue}>{alt}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className={styles.articleSectionNote}>Chart scaffold — ready for real benchmark data ingestion.</p>
            </Section>

            <Section icon={BookOpenText} title="Source References" note="Provenance links for this article.">
              <div className={styles.referenceList}>
                {flag.sourceUrl ? <a href={flag.sourceUrl} target="_blank" rel="noreferrer">LLVM source for this option</a> : null}
                {meta?.sourceBaseUrl ? <a href={meta.sourceBaseUrl} target="_blank" rel="noreferrer">LLVM source snapshot</a> : null}
                <a href="https://llvm.org/docs/" target="_blank" rel="noreferrer">LLVM documentation</a>
                <a href="/tools/clang-flags-explorer/">CompilerSutra flags explorer</a>
              </div>
            </Section>

            <Section icon={BookOpenText} title="FAQ">
              <div className={styles.faqList}>
                {faq.map((item) => (
                  <details key={item.q} className={styles.faqItem}>
                    <summary className={styles.faqSummary}>
                      <span>{item.q}</span>
                      <ChevronDown size={14} strokeWidth={2.2} className={styles.faqChevron} aria-hidden="true" />
                    </summary>
                    <p className={styles.faqAnswer}>{item.a}</p>
                  </details>
                ))}
              </div>
            </Section>

            <Section icon={Code2} title="Interactive Playground" note="Future-ready scaffold for live code, IR, and assembly comparison.">
              <div className={styles.playgroundPane}>
                <div className={styles.playgroundEditor}>
                  <div className={styles.playgroundEditorHeader}>
                    <span>input.cpp</span>
                    <span className={styles.playgroundEditorBadge}>Read-only preview</span>
                  </div>
                  <pre className={styles.playgroundCode}><code>{example.source}</code></pre>
                </div>
                <div className={styles.playgroundActions}>
                  <button type="button" className={clsx(styles.playgroundBtn, styles.playgroundBtnDisabled)} disabled>Run IR</button>
                  <button type="button" className={clsx(styles.playgroundBtn, styles.playgroundBtnDisabled)} disabled>Show assembly</button>
                  <button type="button" className={clsx(styles.playgroundBtn, styles.playgroundBtnDisabled)} disabled>Compare outputs</button>
                </div>
                <p className={styles.articleSectionNote}>Interaction stubbed — the article can evolve into a live playground later.</p>
              </div>
            </Section>

            <Section icon={Clock3} title="Version History" note="Timeline — can be backed by release metadata later.">
              <div className={styles.timelineList}>
                {versionHistory.map((item) => (
                  <div key={item.label} className={styles.timelineItemAlt}>
                    <div className={styles.timelineItemLabel}>{item.label}</div>
                    <div className={styles.timelineItemValue}>{item.value}</div>
                    <div className={styles.timelineItemNote}>{item.note}</div>
                  </div>
                ))}
              </div>
            </Section>

          </article>
        </div>
      </main>
    </>
  );
}
          const [activePreview, setActivePreview] = useState('source');
          const toolLabels = useMemo(() => buildToolLabels(flag), [flag]);
          const sinceVersion = useMemo(() => buildSinceVersion(meta), [meta]);
          const status = useMemo(() => buildStatus(flag), [flag]);
          const implementationRows = useMemo(() => buildImplementationRows(flag, meta), [flag, meta]);
          const quickExamples = useMemo(() => buildQuickExamples(flag), [flag]);
          const what = useMemo(() => buildWhatItDoes(flag), [flag]);
          const performance = useMemo(() => buildPerformance(flag), [flag]);
          const advantages = useMemo(() => buildAdvantages(flag), [flag]);
          const limitations = useMemo(() => buildLimitations(flag), [flag]);
          const useCases = useMemo(() => buildUseCases(flag), [flag]);
          const heroSummaryItems = useMemo(() => buildHeroSummaryItems(flag, what, useCases, limitations), [flag, what, useCases, limitations]);
          const equivalents = useMemo(() => buildEquivalents(flag), [flag]);
          const mistakes = useMemo(() => buildCommonMistakes(flag), [flag]);
          const faq = useMemo(() => buildFaq(flag), [flag]);
          const versionHistory = useMemo(() => buildVersionHistory(flag, meta), [flag, meta]);
          const passes = useMemo(() => buildPasses(flag), [flag]);
          const related = useMemo(() => buildRelatedArticleFlags(flag, allFlags), [flag, allFlags]);
          const example = useMemo(() => buildRepresentativeExample(flag), [flag]);
          const heroSummary = useMemo(() => buildHeroSummary(flag, buildWhatItDoes(flag)), [flag]);
          const heroBadges = useMemo(() => buildHeroBadges(flag, status), [flag, status]);
          const heroMetaCards = useMemo(() => buildHeroMetaCards(flag, meta, status), [flag, meta, status]);
          const reportIssueUrl = useMemo(() => buildReportIssueUrl(flag), [flag]);

          const description = heroSummary;

          return (
            <>
              <Head>
                <meta name="description" content={description} />
              </Head>

              <main className={styles.articlePageShell}>

                <section className={styles.articleHero}>
                  <div className={styles.articleHeroCopy}>
                    <h1 className={styles.articleHeroTitle}>{flag.flag}</h1>
                    <p className={styles.articleHeroSummary}>{description}</p>
                    <div className={styles.heroBadgeRow}>
                      {heroBadges.map((badge) => (
                        <Badge
                          key={badge}
                          tone={badge === 'LLVM Snapshot' ? 'accent' : badge === 'Stable' ? 'success' : badge === 'Backend' || badge === 'ABI' ? 'info' : 'neutral'}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className={styles.articleHeroMetaGrid}>
                      {heroMetaCards.map((item) => (
                        <div key={item.label} className={styles.articleHeroMetaCard}>
                          <div className={styles.articleHeroMetaLabel}>{item.label}</div>
                          <div className={styles.articleHeroMetaValue}>{item.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className={styles.articleHeroActions}>
                      {flag.sourceUrl ? (
                        <Link className={styles.heroActionButton + ' ' + styles.heroActionButtonSecondary} href={flag.sourceUrl} target="_blank" rel="noreferrer">
                          <ExternalLink size={14} strokeWidth={2} />
                          <span>View Source</span>
                        </Link>
                      ) : (
                        <button type="button" className={styles.heroActionButton + ' ' + styles.heroActionButtonSecondary} disabled>
                          <ExternalLink size={14} strokeWidth={2} />
                          <span>View Source</span>
                        </button>
                      )}
                      <Link className={styles.heroActionButton + ' ' + styles.heroActionButtonDanger} href={reportIssueUrl} target="_blank" rel="noreferrer">
                        <FileText size={14} strokeWidth={2} />
                        <span>Report Issue</span>
                      </Link>
                    </div>
                  </div>
                </section>

                <section className={styles.heroSummaryCard}>
                  <div className={styles.heroSummaryGrid}>
                    {heroSummaryItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.label} className={styles.heroSummaryItem}>
                          <div className={styles.heroSummaryHeading}>
                            <Icon size={14} strokeWidth={2.4} className={styles.heroSummaryIcon} />
                            <span>{item.label}</span>
                          </div>
                          <p className={styles.heroSummaryText}>{item.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <div className={styles.articleLayout}>
                  <article className={styles.articleMain}>
                    <Section icon={Code2} title="Quick Usage" note="Syntax and examples the same way engineers actually invoke the option.">
                      <div className={styles.quickUsageGrid}>
                        {quickExamples.map((sample) => (
                          <CodeBlock key={sample.title} title={sample.title} language={sample.language} code={sample.code} />
                        ))}
                      </div>
                    </Section>

                    <Section icon={BookOpenText} title="What this flag actually does" note="Explain the effect, not just the help text.">
                      <p className={styles.bodyCopy}>{what.summary}</p>
                      <p className={styles.bodyCopy}>{what.body}</p>
                      <div className={styles.calloutRow}>
                        {what.callouts.map((item) => (
                          <div key={item} className={styles.calloutCard}>{item}</div>
                        ))}
                      </div>
                    </Section>

                    <Section icon={FileText} title="Internal LLVM Implementation" note="The files most closely related to how the flag is parsed and consumed.">
                      <div className={styles.dataTableWrap}>
                        <table className={styles.dataTable}>
                          <thead>
                            <tr>
                              <th>LLVM component</th>
                              <th>Relevant source files</th>
                              <th>Why it matters</th>
                            </tr>
                          </thead>
                          <tbody>
                            {implementationRows.map((row) => (
                              <tr key={row.component}>
                                <td>{row.component}</td>
                                <td>
                                  <div className={styles.inlineLinkList}>
                                    {row.files.map((file) => (
                                      <a key={file.url} href={file.url} target="_blank" rel="noreferrer">{file.label}</a>
                                    ))}
                                  </div>
                                </td>
                                <td>{row.note}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Section>

                    <Section icon={Code2} title="Before / After Example" note="Representative outputs for the selected flag. Exact output varies by source and target.">
                      <div className={styles.tabsRow}>
                        {['source', 'ir', 'asm', 'diff'].map((tab) => (
                          <button
                            key={tab}
                            type="button"
                            className={activePreview === tab ? styles.tabButtonActive : styles.tabButton}
                            onClick={() => setActivePreview(tab)}
                          >
                            {tab === 'source' ? 'Source' : tab === 'ir' ? 'LLVM IR' : tab === 'asm' ? 'Assembly' : 'Diff View'}
                          </button>
                        ))}
                      </div>

                      <div className={styles.previewPane}>
                        {activePreview === 'source' ? <CodeBlock title="Input code" language="cpp" code={example.source} /> : null}
                        {activePreview === 'ir' ? <CodeBlock title="Generated LLVM IR" language="llvm" code={example.ir} /> : null}
                        {activePreview === 'asm' ? <CodeBlock title="Generated Assembly" language="asm" code={example.asm} /> : null}
                        {activePreview === 'diff' ? (
                          <div className={styles.diffCard}>
                            {example.diff.map((line) => <div key={line} className={styles.diffLine}>{line}</div>)}
                          </div>
                        ) : null}
                      </div>
                    </Section>

                    <div className={styles.twoColumnSection}>
                      <Section icon={Layers3} title="Optimization Passes" note="Only populated when the flag influences the optimization pipeline.">
                        {passes.length > 0 ? (
                          <div className={styles.passChipGrid}>
                            {passes.map((pass) => <Badge key={pass} tone="success">{pass}</Badge>)}
                          </div>
                        ) : (
                          <p className={styles.bodyCopy}>This flag does not directly enumerate an optimization pass list in the current metadata. If it is a driver or diagnostics flag, the pass pipeline is unaffected or only indirectly affected.</p>
                        )}
                      </Section>

                      <Section icon={Layers3} title="Visual Pass Pipeline" note="The order shown here is the canonical optimization sequence for optimization-level flags.">
                        {passes.length > 0 ? (
                          <div className={styles.passPipeline}>
                            {['PassBuilder', ...passes.slice(1)].map((item, index) => (
                              <React.Fragment key={item}>
                                <div className={styles.passNode}>{item}</div>
                                {index < passes.length - 1 ? <div className={styles.passArrow}>↓</div> : null}
                              </React.Fragment>
                            ))}
                          </div>
                        ) : (
                          <p className={styles.bodyCopy}>No canonical pass pipeline is associated with this flag. Use the compilation pipeline view above to see the affected stage instead.</p>
                        )}
                      </Section>
                    </div>

                    <Section icon={Sparkles} title="Performance Impact" note="A quick qualitative summary engineers can scan without guessing.">
                      <div className={styles.performanceList}>
                        {performance.map((row) => <PerformanceRow key={row.metric} {...row} />)}
                      </div>
                    </Section>

                    <div className={styles.twoColumnSection}>
                      <Section icon={Check} title="Advantages">
                        <ul className={styles.bulletList}>
                          {advantages.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      </Section>

                      <Section icon={ShieldAlert} title="Limitations">
                        <ul className={styles.bulletList}>
                          {limitations.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      </Section>
                    </div>

                    <Section icon={Clock3} title="Best Use Cases" note="The right environments for the flag.">
                      <div className={styles.chipGrid}>
                        {useCases.map((item) => <Badge key={item} tone="info">{item}</Badge>)}
                      </div>
                    </Section>

                    <Section icon={Layers3} title="Compiler Equivalents" note="Similar switches exist in other toolchains, but the behavior is rarely identical.">
                      <div className={styles.dataTableWrap}>
                        <table className={styles.dataTable}>
                          <thead>
                            <tr>
                              <th>Compiler</th>
                              <th>Equivalent</th>
                              <th>Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            {equivalents.map((row) => (
                              <tr key={row.compiler}>
                                <td>{row.compiler}</td>
                                <td><code>{row.flag}</code></td>
                                <td>{row.note}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Section>

                    <Section icon={ShieldAlert} title="Common Mistakes" note="Patterns that cause confusion in reviews and build systems.">
                      <ul className={styles.bulletList}>
                        {mistakes.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </Section>

                    <Section icon={FileText} title="Related Flags" note="Move through adjacent flags without losing the article context.">
                      {related.length > 0 ? (
                        <div className={styles.relatedGrid}>
                          {related.map((item) => <RelatedFlagCard key={item.flag} flag={item} />)}
                        </div>
                      ) : (
                        <p className={styles.bodyCopy}>No adjacent flags were identified in the current dataset.</p>
                      )}
                    </Section>

                    <Section icon={Sparkles} title="Benchmarks" note="Optional scaffold for execution, binary-size, and compile-time charts.">
                      <div className={styles.benchmarkGrid}>
                        <div className={styles.benchmarkCard}>
                          <div className={styles.benchmarkLabel}>Execution time</div>
                          <div className={styles.benchmarkBars}>
                            <div className={styles.benchmarkBar}><span>Baseline</span><div className={styles.benchmarkFill} style={{ width: '62%' }} /></div>
                            <div className={styles.benchmarkBar}><span>{flag.flag}</span><div className={styles.benchmarkFillAlt} style={{ width: flag.category === 'Optimization' ? '84%' : '60%' }} /></div>
                          </div>
                        </div>
                        <div className={styles.benchmarkCard}>
                          <div className={styles.benchmarkLabel}>Compile time</div>
                          <div className={styles.benchmarkBars}>
                            <div className={styles.benchmarkBar}><span>Baseline</span><div className={styles.benchmarkFill} style={{ width: '58%' }} /></div>
                            <div className={styles.benchmarkBar}><span>{flag.flag}</span><div className={styles.benchmarkFillAlt} style={{ width: flag.category === 'Optimization' ? '76%' : '52%' }} /></div>
                          </div>
                        </div>
                      </div>
                      <p className={styles.articleSectionNote}>The chart scaffold is intentionally lightweight. It is ready for real benchmark ingestion later.</p>
                    </Section>

                    <Section icon={BookOpenText} title="Source References" note="The most important provenance links for the article.">
                      <div className={styles.referenceList}>
                        {flag.sourceUrl ? <a href={flag.sourceUrl} target="_blank" rel="noreferrer">LLVM source for this option</a> : null}
                        {meta?.sourceBaseUrl ? <a href={meta.sourceBaseUrl} target="_blank" rel="noreferrer">LLVM source snapshot</a> : null}
                        <a href="https://llvm.org/docs/" target="_blank" rel="noreferrer">LLVM documentation</a>
                        <a href="/tools/clang-flags-explorer/">CompilerSutra flags explorer</a>
                      </div>
                    </Section>

                    <Section icon={BookOpenText} title="FAQ">
                      <div className={styles.faqList}>
                        {faq.map((item) => (
                          <details key={item.q} className={styles.faqItem}>
                            <summary>{item.q}</summary>
                            <p>{item.a}</p>
                          </details>
                        ))}
                      </div>
                    </Section>

                    <Section icon={Code2} title="Interactive Playground" note="Future-ready scaffold for code, IR, and assembly comparison.">
                      <div className={styles.playgroundPane}>
                        <textarea className={styles.playgroundTextarea} defaultValue={example.source} readOnly />
                        <div className={styles.playgroundActions}>
                          <button type="button" className={styles.sidebarActionButton} disabled>Run IR</button>
                          <button type="button" className={styles.sidebarActionButton} disabled>Show assembly</button>
                          <button type="button" className={styles.sidebarActionButton} disabled>Compare outputs</button>
                        </div>
                        <p className={styles.articleSectionNote}>The interaction model is stubbed in place so the article can evolve into a live playground later.</p>
                      </div>
                    </Section>

                    <Section icon={Clock3} title="Version History" note="A timeline that can later be backed by release-specific metadata.">
                      <div className={styles.timelineList}>
                        {versionHistory.map((item) => (
                          <div key={item.label} className={styles.timelineItemAlt}>
                            <div className={styles.timelineItemLabel}>{item.label}</div>
                            <div className={styles.timelineItemValue}>{item.value}</div>
                            <div className={styles.timelineItemNote}>{item.note}</div>
                          </div>
                        ))}
                      </div>
                    </Section>
                  </article>
                </div>
              </main>
            </>
          );
        }
