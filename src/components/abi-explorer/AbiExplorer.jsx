import React, { useEffect, useMemo, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import {
  BookOpenText,
  ChevronDown,
  ChevronRight,
  Code2,
  Cpu,
  ExternalLink,
  FileCode,
  Filter,
  GitBranch,
  Layers,
  Monitor,
  Rocket,
  Search,
  Terminal,
  X,
} from 'lucide-react';
import {
  buildArchPath,
  buildArchDataPath,
  buildComparePath,
} from './abiRoutes';
import {
  normalizeText,
  uniqueValues,
  scoreArchitecture,
  matchesFilters,
  groupByCategory,
  splitHighlightedText,
} from './abiUtils';
import RegisterMap from './RegisterMap';
import StackFrameVisualizer from './StackFrameVisualizer';
import AbiComparisonTool from './AbiComparisonTool';
import ClangFlagsPanel from './ClangFlagsPanel';
import TableOfContents from './TableOfContents';
import AssemblyViewer from './AssemblyViewer';
import styles from './abi.module.css';

const CATEGORY_ICONS = {
  CPU: Cpu,
  GPU: Monitor,
  Future: Rocket,
};

const EXAMPLE_QUERIES = [
  'x86_64 SysV',
  'AAPCS64',
  'AMDGPU',
  'NVIDIA PTX',
  'Kernarg',
  'Shadow Space',
  'Red Zone',
  'Warp',
  'Wave64',
];

const LLVM_FILE_ICONS = {
  CallingConv: GitBranch,
  Lowering: Code2,
  Frame: Monitor,
  Register: Cpu,
};

function getLLVMFileIcon(key) {
  const k = key.toLowerCase();
  if (k.includes('callingconv')) return LLVM_FILE_ICONS.CallingConv;
  if (k.includes('lowering')) return LLVM_FILE_ICONS.Lowering;
  if (k.includes('frame')) return LLVM_FILE_ICONS.Frame;
  if (k.includes('register')) return LLVM_FILE_ICONS.Register;
  return FileCode;
}

function WhySection({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!items || items.length === 0) return null;

  return (
    <div className={styles.whyList}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={clsx(styles.whyItem, isOpen && styles.whyItemOpen)}>
            <button
              className={styles.whyQuestion}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span className={styles.whyQuestionIcon}>
                {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </span>
              <span className={styles.whyQuestionText}>{item.question}</span>
            </button>
            {isOpen && (
              <div className={styles.whyAnswer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function LLVMImplCard({ name, impl }) {
  if (!impl || typeof impl !== 'object' || !impl.path) return null;

  const Icon = getLLVMFileIcon(name);
  const basename = impl.path.split('/').pop();

  return (
    <div className={styles.llvmCard}>
      <div className={styles.llvmCardHeader}>
        <Icon size={16} className={styles.llvmCardIcon} />
        <div className={styles.llvmCardTitleBlock}>
          <span className={styles.llvmCardFilename}>{basename}</span>
          <span className={styles.llvmCardPath}>{impl.path}</span>
        </div>
      </div>
      <p className={styles.llvmCardDescription}>{impl.description}</p>
      {impl.url && (
        <a href={impl.url} target="_blank" rel="noopener noreferrer" className={styles.llvmCardLink}>
          View source <ExternalLink size={12} />
        </a>
      )}
    </div>
  );
}

function ExampleSection({ example, index }) {
  const [activeTab, setActiveTab] = useState('c');

  return (
    <div className={styles.exampleBlock}>
      <div className={styles.exampleTabs}>
        <button
          className={clsx(styles.exampleTab, activeTab === 'c' && styles.exampleTabActive)}
          onClick={() => setActiveTab('c')}
          type="button"
        >
          C Source
        </button>
        {example.assembly && (
          <button
            className={clsx(styles.exampleTab, activeTab === 'asm' && styles.exampleTabActive)}
            onClick={() => setActiveTab('asm')}
            type="button"
          >
            Assembly
          </button>
        )}
        {example.llvmIR && (
          <button
            className={clsx(styles.exampleTab, activeTab === 'ir' && styles.exampleTabActive)}
            onClick={() => setActiveTab('ir')}
            type="button"
          >
            LLVM IR
          </button>
        )}
      </div>
      {activeTab === 'c' && (
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <span className={styles.codeTitle}>C Source</span>
            <span className={styles.codeLanguage}>C</span>
          </div>
          <pre className={styles.codePre}><code>{example.c}</code></pre>
        </div>
      )}
      {activeTab === 'asm' && example.assembly && (
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <span className={styles.codeTitle}>Assembly</span>
            <span className={styles.codeLanguage}>ASM</span>
          </div>
          <pre className={styles.codePre}><code>{example.assembly}</code></pre>
        </div>
      )}
      {activeTab === 'ir' && example.llvmIR && (
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <span className={styles.codeTitle}>LLVM IR</span>
            <span className={styles.codeLanguage}>LLVM-IR</span>
          </div>
          <pre className={styles.codePre}><code>{example.llvmIR}</code></pre>
        </div>
      )}
      {example.notes && (
        <p className={styles.exampleNotes}>{example.notes}</p>
      )}
    </div>
  );
}

function TargetVariantsSection({ variants }) {
  if (!variants) return null;

  return (
    <div className={styles.variantSection}>
      {variants.intro && <p className={styles.bodyCopy}>{variants.intro}</p>}

      {variants.families?.length > 0 && (
        <div className={styles.variantGrid}>
          {variants.families.map((family) => (
            <div key={family.id} className={styles.variantCard}>
              <div className={styles.variantCardHeader}>
                <h3 className={styles.variantCardTitle}>{family.name}</h3>
                <span className={styles.variantBadge}>{family.wavefrontSize}</span>
              </div>
              <div className={styles.variantMetaList}>
                <div className={styles.variantMetaRow}>
                  <span className={styles.variantMetaLabel}>LLVM -mcpu</span>
                  <span className={styles.variantMetaValue}>{family.llvmCpus}</span>
                </div>
                <div className={styles.variantMetaRow}>
                  <span className={styles.variantMetaLabel}>Products</span>
                  <span className={styles.variantMetaValue}>{family.products}</span>
                </div>
                <div className={styles.variantMetaRow}>
                  <span className={styles.variantMetaLabel}>Focus</span>
                  <span className={styles.variantMetaValue}>{family.focus}</span>
                </div>
              </div>
              <p className={styles.variantNotes}>{family.abiNotes}</p>
            </div>
          ))}
        </div>
      )}

      <div className={styles.variantSplitGrid}>
        {variants.sharedAcrossAll?.length > 0 && (
          <div className={styles.variantListBlock}>
            <span className={styles.variantListTitle}>Shared across all GFX targets</span>
            <ul className={styles.variantList}>
              {variants.sharedAcrossAll.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {variants.variesByMcpu?.length > 0 && (
          <div className={styles.variantListBlock}>
            <span className={styles.variantListTitle}>Varies by -mcpu (specific chip)</span>
            <ul className={styles.variantList}>
              {variants.variesByMcpu.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

const ABI_SECTIONS = [
  { id: 'abi-target-variants', label: 'GFX Variants' },
  { id: 'abi-calling-convention', label: 'Calling Convention' },
  { id: 'abi-stack-frame', label: 'Stack Frame' },
  { id: 'abi-register-map', label: 'Register Map' },
  { id: 'abi-comparison', label: 'ABI Comparison' },
  { id: 'abi-why', label: 'Why?' },
  { id: 'abi-llvm', label: 'LLVM Implementation' },
  { id: 'abi-clang-flags', label: 'Clang Flags' },
  { id: 'abi-assembly', label: 'Assembly Viewer' },
  { id: 'abi-example', label: 'Example' },
];

function normalizeArchData(data) {
  if (!data || !Array.isArray(data.architectures)) {
    return { architectures: [], categories: {} };
  }
  return {
    ...data,
    architectures: data.architectures.map((arch) => ({
      ...arch,
      searchText: normalizeText(`${arch.searchText || ''} ${arch.id} ${arch.name} ${arch.architecture} ${arch.convention} ${arch.target} ${arch.description || ''}`),
    })),
  };
}

function scoreFieldMatch(field, token, weight) {
  if (!field || !token) return 0;
  const t = normalizeText(token);
  const words = normalizeText(field).split(/[\s,/_-]+/).filter(Boolean);
  let best = 0;
  for (const word of words) {
    if (word === t) best = Math.max(best, weight);
    else if (word.startsWith(t)) {
      const rest = word.slice(t.length);
      best = Math.max(best, /^\d+$/.test(rest) ? weight * 0.15 : weight * 0.95);
    } else if (t.length >= 4 && word.includes(t)) {
      best = Math.max(best, weight * 0.45);
    }
  }
  return best;
}

function scoreOption(arch, query) {
  if (!query) return 0;
  const normalized = normalizeText(query);
  const tokens = normalized.split(' ').filter(Boolean);
  let score = 0;

  if (arch.id === normalized || arch.id.replace(/-/g, '') === normalized.replace(/\s/g, '')) score += 200;
  score += scoreFieldMatch(arch.id, normalized, 110);
  score += scoreFieldMatch(arch.name, normalized, 100);
  score += scoreFieldMatch(arch.architecture, normalized, 80);
  score += scoreFieldMatch(arch.convention, normalized, 70);
  score += scoreFieldMatch(arch.target, normalized, 50);
  if ((arch.searchText || '').includes(normalized)) score += 40;
  if (tokens.length && tokens.every((t) => (arch.searchText || '').includes(t))) score += 30;

  return score;
}

function selectArchitectures(architectures, query, filters) {
  const normalized = normalizeText(query);
  return architectures
    .filter((arch) => matchesFilters(arch, filters))
    .map((arch) => ({ arch, score: scoreOption(arch, normalized) }))
    .filter(({ score }) => score > 0 || !normalized)
    .sort((a, b) => b.score - a.score || a.arch.name.localeCompare(b.arch.name))
    .map(({ arch }) => arch);
}

function formatRegisterList(regs, fallback = 'Stack-based') {
  if (!regs?.length) return fallback;
  return regs.map((r) => (typeof r === 'string' ? r : r.register)).join(', ');
}

function ArchitectureCard({ arch, isSelected, onSelect }) {
  const CategoryIcon = CATEGORY_ICONS[arch.category] || Cpu;
  const statusTone = arch.status === 'complete' ? 'success' : arch.status === 'planned' ? 'neutral' : 'warning';

  return (
    <button
      className={clsx(styles.archCard, isSelected && styles.archCardSelected)}
      onClick={() => onSelect(arch.id)}
      type="button"
    >
      <div className={styles.archCardTop}>
        <div className={styles.archCardTitleBlock}>
          <span className={styles.archCardName}>{arch.name}</span>
          <span className={styles.archCardConvention}>{arch.convention}</span>
        </div>
        <CategoryIcon size={18} className={styles.archCardIcon} />
      </div>
      <p className={styles.archCardDescription}>{arch.description}</p>
      <div className={styles.archCardFooter}>
        <div className={styles.archCardMeta}>
          <span className={clsx(styles.badge, styles[`badge${statusTone}`])}>
            {arch.status}
          </span>
          <span className={styles.archCardTarget}>{arch.target}</span>
        </div>
        <div className={styles.archCardRegisters}>
          {arch.category === 'GPU' && arch.gpuFeatures?.length > 0 ? (
            arch.gpuFeatures.slice(0, 3).map((feat) => (
              <span key={feat} className={styles.archCardFeature}>{feat}</span>
            ))
          ) : (
            arch.argumentRegisters > 0 && (
              <span className={styles.archCardRegCount}>{arch.argumentRegisters} arg regs</span>
            )
          )}
          {arch.hasRedZone && <span className={styles.archCardFeature}>Red Zone</span>}
          {arch.hasShadowSpace && <span className={styles.archCardFeature}>Shadow</span>}
        </div>
      </div>
    </button>
  );
}

function SidebarNav({ architectures, selectedArch, onSelectArch, groups }) {
  return (
    <div className={styles.leftSidebar}>
      <div className={styles.sidebarPanel}>
        <div className={styles.sidebarHeader}>
          <span className={styles.sidebarKicker}>Architectures</span>
          <span className={styles.sidebarCount}>{architectures.length}</span>
        </div>
        <div className={styles.sidebarGroups}>
          {Object.entries(groups).map(([category, archs]) => {
            const Icon = CATEGORY_ICONS[category] || Cpu;
            return (
              <div key={category} className={styles.sidebarGroup}>
                <div className={styles.sidebarGroupTitle}>
                  <Icon size={12} />
                  {category}
                </div>
                {archs.map((arch) => (
                  <button
                    key={arch.id}
                    className={clsx(
                      styles.sidebarNavButton,
                      selectedArch === arch.id && styles.sidebarNavButtonActive
                    )}
                    onClick={() => onSelectArch(arch.id)}
                    type="button"
                  >
                    <span className={styles.sidebarNavLabel}>{arch.name}</span>
                    <span className={clsx(styles.badge, styles[`badge${arch.status === 'complete' ? 'success' : 'neutral'}`])}>
                      {arch.status}
                    </span>
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DetailPanel({ arch, allArchs, onNavigate, loading, selectedArchId }) {
  if (loading) {
    return (
      <div className={styles.emptyState}>
        <h3>Loading architecture data...</h3>
        <p>Please wait while we fetch the details.</p>
      </div>
    );
  }

  if (!arch && selectedArchId) {
    return (
      <div className={styles.emptyState}>
        <h3>Data not available</h3>
        <p>The detailed data for this architecture has not been added yet.</p>
      </div>
    );
  }

  if (!arch) {
    return (
      <div className={styles.emptyState}>
        <h3>Select an Architecture</h3>
        <p>Choose an architecture from the list to explore its ABI details.</p>
      </div>
    );
  }

  const CategoryIcon = CATEGORY_ICONS[arch.category] || Cpu;

  const activeTocSections = ABI_SECTIONS.filter((s) => {
    if (s.id === 'abi-target-variants' && !arch.targetVariants) return false;
    if (s.id === 'abi-calling-convention' && !arch.callingConvention) return false;
    if (s.id === 'abi-stack-frame' && !arch.stack) return false;
    if (s.id === 'abi-register-map' && (!arch.registers || arch.registers.length === 0)) return false;
    if (s.id === 'abi-comparison' && !arch.comparison) return false;
    if (s.id === 'abi-why' && (!arch.why || arch.why.length === 0)) return false;
    if (s.id === 'abi-llvm' && !arch.llvmImplementation) return false;
    if (s.id === 'abi-clang-flags' && !arch.clangFlags) return false;
    if (s.id === 'abi-assembly') return true;
    if (s.id === 'abi-example' && (!arch.examples || !arch.examples.simple)) return false;
    return true;
  });

  return (
    <div className={styles.detailWithToc}>
      <div className={styles.detailCard}>
      <div className={styles.detailHeader}>
        <div className={styles.detailTitleBlock}>
          <span className={clsx(styles.badge, styles[`badge${arch.status === 'complete' ? 'success' : 'neutral'}`])}>
            {arch.status}
          </span>
          <h1 className={styles.flagTitle}>{arch.name}</h1>
          <p className={styles.flagSummary}>{arch.description}</p>
        </div>
      </div>

      <div className={styles.metaStrip}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Architecture</span>
          <span className={styles.metaValue}>{arch.architecture}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Convention</span>
          <span className={styles.metaValue}>{arch.convention}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Target</span>
          <span className={styles.metaValue}>{arch.target}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Category</span>
          <span className={styles.metaValue}>{arch.category}</span>
        </div>
        {arch.dataModel?.executionModel && (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Execution</span>
            <span className={styles.metaValue}>{arch.dataModel.executionModel}</span>
          </div>
        )}
      </div>

      {arch.targetVariants && (
        <div id="abi-target-variants" className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleWrap}>
              <Layers size={16} className={styles.sectionIcon} />
              <h2 className={styles.sectionHeading}>GFX Target Variants</h2>
            </div>
          </div>
          <div className={styles.sectionBody}>
            <TargetVariantsSection variants={arch.targetVariants} />
          </div>
        </div>
      )}

      {arch.callingConvention && (
        <div id="abi-calling-convention" className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleWrap}>
              <CategoryIcon size={16} className={styles.sectionIcon} />
              <h2 className={styles.sectionHeading}>Calling Convention</h2>
            </div>
          </div>
          <div className={styles.sectionBody}>
            {arch.callingConvention.executionModel && (
              <p className={styles.bodyCopy}>{arch.callingConvention.executionModel}</p>
            )}
            <div className={styles.detailSplitGrid}>
              <div className={styles.definitionBlock}>
                <span className={styles.definitionLabel}>
                  {arch.category === 'GPU' ? 'Kernel Arguments' : 'Argument Registers'}
                </span>
                <span className={styles.definitionValue}>
                  {formatRegisterList(
                    arch.callingConvention.argumentRegisters,
                    arch.category === 'GPU' ? 'Kernarg / .param space' : 'Stack-based'
                  )}
                </span>
              </div>
              <div className={styles.definitionBlock}>
                <span className={styles.definitionLabel}>Return Registers</span>
                <span className={styles.definitionValue}>
                  {formatRegisterList(
                    arch.callingConvention.returnRegisters,
                    arch.category === 'GPU' ? 'N/A (void kernels)' : 'RAX'
                  )}
                </span>
              </div>
              <div className={styles.definitionBlock}>
                <span className={styles.definitionLabel}>Caller Saved</span>
                <span className={styles.definitionValue}>
                  {arch.callingConvention.callerSaved?.join(', ') || 'N/A'}
                </span>
              </div>
              <div className={styles.definitionBlock}>
                <span className={styles.definitionLabel}>Callee Saved</span>
                <span className={styles.definitionValue}>
                  {arch.callingConvention.calleeSaved?.join(', ') || 'N/A'}
                </span>
              </div>
            </div>
            <div className={styles.detailSplitGrid}>
              <div className={styles.definitionBlock}>
                <span className={styles.definitionLabel}>Shadow Space</span>
                <span className={styles.definitionValue}>{arch.callingConvention.shadowSpace || 0} bytes</span>
              </div>
              <div className={styles.definitionBlock}>
                <span className={styles.definitionLabel}>Tail Call Support</span>
                <span className={styles.definitionValue}>{arch.callingConvention.tailCallSupport ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {arch.stack && (
        <div id="abi-stack-frame" className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleWrap}>
              <Monitor size={16} className={styles.sectionIcon} />
              <h2 className={styles.sectionHeading}>
                {arch.category === 'GPU' ? 'Memory Hierarchy' : 'Stack Frame'}
              </h2>
            </div>
          </div>
          <div className={styles.sectionBody}>
            <div className={styles.detailSplitGrid}>
              <div className={styles.definitionBlock}>
                <span className={styles.definitionLabel}>Stack Direction</span>
                <span className={styles.definitionValue}>{arch.stack.direction}</span>
              </div>
              <div className={styles.definitionBlock}>
                <span className={styles.definitionLabel}>Alignment</span>
                <span className={styles.definitionValue}>{arch.stack.alignment} bytes</span>
              </div>
              <div className={styles.definitionBlock}>
                <span className={styles.definitionLabel}>Red Zone</span>
                <span className={styles.definitionValue}>{arch.stack.redZone || 0} bytes</span>
              </div>
            </div>
            {arch.stack.notes && (
              <p className={styles.bodyCopy}>{arch.stack.notes}</p>
            )}
            {arch.stackFrame && (
              <StackFrameVisualizer
                stackData={arch.stack}
                stackFrame={arch.stackFrame}
                title={arch.category === 'GPU' ? 'Memory Hierarchy Layout' : 'Stack Frame Layout'}
              />
            )}
          </div>
        </div>
      )}

      {arch.registers && arch.registers.length > 0 && (
        <div id="abi-register-map" className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleWrap}>
              <Cpu size={16} className={styles.sectionIcon} />
              <h2 className={styles.sectionHeading}>Register Map</h2>
            </div>
          </div>
          <div className={styles.sectionBody}>
            <RegisterMap
              registers={arch.registers}
              callingConvention={arch.callingConvention}
            />
          </div>
        </div>
      )}

      {arch.comparison && (
        <div id="abi-comparison" className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleWrap}>
              <Monitor size={16} className={styles.sectionIcon} />
              <h2 className={styles.sectionHeading}>ABI Comparison</h2>
            </div>
          </div>
          <div className={styles.sectionBody}>
            <AbiComparisonTool
              comparisonData={arch.comparison}
              defaultArch1={arch.id === 'nvidia-ptx' ? 'nvidiaPtx' : arch.id === 'amdgpu' ? 'amdgpu' : 'sysv'}
              defaultArch2={arch.category === 'GPU' ? (arch.id === 'amdgpu' ? 'nvidiaPtx' : 'amdgpu') : 'windows'}
            />
          </div>
        </div>
      )}

      {arch.why && arch.why.length > 0 && (
        <div id="abi-why" className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleWrap}>
              <BookOpenText size={16} className={styles.sectionIcon} />
              <h2 className={styles.sectionHeading}>Why?</h2>
            </div>
          </div>
          <div className={styles.sectionBody}>
            <WhySection items={arch.why} />
          </div>
        </div>
      )}

      {arch.llvmImplementation && (
        <div id="abi-llvm" className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleWrap}>
              <ExternalLink size={16} className={styles.sectionIcon} />
              <h2 className={styles.sectionHeading}>LLVM Implementation</h2>
            </div>
          </div>
          <div className={styles.sectionBody}>
            {typeof arch.llvmImplementation.notes === 'string' && (
              <p className={styles.bodyCopy}>{arch.llvmImplementation.notes}</p>
            )}
            <div className={styles.llvmGrid}>
              {Object.entries(arch.llvmImplementation)
                .filter(([, impl]) => impl && typeof impl === 'object' && impl.path)
                .map(([key, impl]) => (
                  <LLVMImplCard key={key} name={key} impl={impl} />
                ))}
            </div>
          </div>
        </div>
      )}

      {arch.clangFlags && (
        <div id="abi-clang-flags" className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleWrap}>
              <Code2 size={16} className={styles.sectionIcon} />
              <h2 className={styles.sectionHeading}>Clang Flags & Commands</h2>
            </div>
          </div>
          <div className={styles.sectionBody}>
            <ClangFlagsPanel clangFlags={arch.clangFlags} />
          </div>
        </div>
      )}

      {arch.examples && arch.examples.simple && (
        <div id="abi-example" className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleWrap}>
              <BookOpenText size={16} className={styles.sectionIcon} />
              <h2 className={styles.sectionHeading}>Example: {arch.examples.simple.title}</h2>
            </div>
          </div>
          <div className={styles.sectionBody}>
            <ExampleSection example={arch.examples.simple} index={0} />
          </div>
        </div>
      )}

      <div id="abi-assembly" className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitleWrap}>
            <Terminal size={16} className={styles.sectionIcon} />
            <h2 className={styles.sectionHeading}>Assembly Viewer</h2>
          </div>
        </div>
        <div className={styles.sectionBody}>
          <AssemblyViewer arch={arch} />
        </div>
      </div>
    </div>

    <TableOfContents sections={activeTocSections} />
    </div>
  );
}

export default function AbiExplorer() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ category: 'all', status: 'all' });
  const [selectedArch, setSelectedArch] = useState('');
  const [selectedArchData, setSelectedArchData] = useState(null);
  const [loadingArch, setLoadingArch] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const searchInputRef = useRef(null);
  const dataUrl = useBaseUrl('/data/abi/index.json');
  const abiDataBaseUrl = useBaseUrl('/data/abi');

  useEffect(() => {
    let alive = true;
    async function loadData() {
      try {
        const response = await fetch(dataUrl);
        if (!response.ok) throw new Error(`Failed to load ${dataUrl} (${response.status})`);
        const payload = await response.json();
        if (alive) setData(normalizeArchData(payload));
      } catch (err) {
        if (alive) setError(err instanceof Error ? err.message : 'Failed to load ABI data.');
      }
    }
    loadData();
    return () => { alive = false; };
  }, [dataUrl]);

  useEffect(() => {
    if (!selectedArch) {
      setSelectedArchData(null);
      return;
    }
    let alive = true;
    async function loadArchData() {
      setLoadingArch(true);
      try {
        const archEntry = (data?.architectures || []).find((a) => a.id === selectedArch);
        const dataFile = archEntry?.dataFile || `${selectedArch}.json`;
        const url = `${abiDataBaseUrl}/${dataFile}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to load ${dataFile}`);
        const payload = await response.json();
        if (alive) setSelectedArchData(payload);
      } catch (err) {
        console.error('Failed to load architecture data:', err);
        if (alive) setSelectedArchData(null);
      } finally {
        if (alive) setLoadingArch(false);
      }
    }
    loadArchData();
    return () => { alive = false; };
  }, [selectedArch, data, abiDataBaseUrl]);

  useEffect(() => {
    const handleSlash = (e) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleSlash);
    return () => document.removeEventListener('keydown', handleSlash);
  }, []);

  const architectures = data?.architectures || [];
  const categories = data?.categories || {};
  const filteredArchs = useMemo(() => selectArchitectures(architectures, query, filters), [architectures, query, filters]);
  const groups = useMemo(() => groupByCategory(filteredArchs), [filteredArchs]);
  const showResultsGrid = !selectedArch && filteredArchs.length > 0;
  const prevQueryRef = useRef('');

  useEffect(() => {
    const q = query.trim();
    if (!filteredArchs.length) {
      if (q) setSelectedArch('');
      return;
    }

    if (q && q !== prevQueryRef.current) {
      setSelectedArch(filteredArchs[0].id);
      prevQueryRef.current = q;
      return;
    }

    if (!q) {
      prevQueryRef.current = '';
      if (selectedArch && !filteredArchs.some((a) => a.id === selectedArch)) {
        setSelectedArch('');
      }
    }
  }, [query, filteredArchs, selectedArch]);

  const mergedArchData = useMemo(() => {
    if (!selectedArchData) return null;
    const indexEntry = architectures.find((a) => a.id === selectedArchData.id);
    if (!indexEntry) return selectedArchData;
    return {
      ...indexEntry,
      ...selectedArchData,
      description: selectedArchData.description || indexEntry.description,
      gpuFeatures: selectedArchData.gpuFeatures || indexEntry.gpuFeatures,
    };
  }, [selectedArchData, architectures]);

  const handleSelectArch = (archId) => {
    setSelectedArch(archId);
    setNavOpen(false);
  };

  if (error) {
    return (
      <Layout title="ABI Explorer" description="Explore Application Binary Interfaces across CPU and GPU architectures">
        <main className={styles.pageShell}><div className={styles.errorBanner}>{error}</div></main>
      </Layout>
    );
  }

  return (
    <Layout
      title="ABI Explorer"
      description="Explore Application Binary Interfaces, Calling Conventions, Register Usage, and Stack Frames across CPU and GPU architectures."
    >
      <Head>
        <meta property="og:title" content="CompilerSutra ABI Explorer" />
        <meta property="og:description" content="The most comprehensive platform for understanding ABIs, Calling Conventions, and Compiler Implementations." />
      </Head>
      <main className={styles.pageShell}>
        <div className={styles.heroPanel}>
          <div className={styles.heroCopy}>
            <span className={styles.heroEyebrow}>CompilerSutra Tools</span>
            <h1 className={styles.heroTitle}>ABI Explorer</h1>
            <p className={styles.heroSubtitle}>
              Understand Application Binary Interfaces, Calling Conventions, Register Usage, and Stack Frames across CPU and GPU architectures.
            </p>
          </div>

          <div className={styles.searchShell}>
            <div className={styles.searchPanel}>
              <div className={styles.searchEyebrow}>
                <Search size={14} strokeWidth={1.95} />
                <span>Search architectures, registers, concepts</span>
              </div>
              <label className={styles.searchLabel} htmlFor="abi-search">
                <span className={styles.srOnly}>Search architectures</span>
                <div className={styles.searchInputWrap}>
                  <Search size={20} className={styles.searchIcon} strokeWidth={1.9} />
                  <input
                    id="abi-search"
                    ref={searchInputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search architectures, registers, calling conventions..."
                    className={styles.searchInput}
                    autoComplete="off"
                    spellCheck="false"
                  />
                  {query && (
                    <button className={styles.clearButton} onClick={() => setQuery('')} type="button">
                      <X size={16} />
                    </button>
                  )}
                </div>
              </label>
              <div className={styles.exampleRow}>
                <span className={styles.exampleLabel}>Try:</span>
                <div className={styles.exampleList}>
                  {EXAMPLE_QUERIES.map((q) => (
                    <button
                      key={q}
                      className={styles.exampleChip}
                      onClick={() => setQuery(q)}
                      type="button"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.workspace}>
          <SidebarNav
            architectures={filteredArchs}
            selectedArch={selectedArch}
            onSelectArch={handleSelectArch}
            groups={groups}
          />
          <div className={styles.mainColumn}>
            {filteredArchs.length === 0 && !error && (
              <div className={styles.resultsEmpty}>
                <p>No architectures match your search or filters.</p>
              </div>
            )}
            {showResultsGrid && (
              <div className={styles.resultsGrid}>
                {filteredArchs.map((arch) => (
                  <ArchitectureCard
                    key={arch.id}
                    arch={arch}
                    isSelected={selectedArch === arch.id}
                    onSelect={handleSelectArch}
                  />
                ))}
              </div>
            )}
            {selectedArch && mergedArchData && (
              <div className={styles.selectedArchBar}>
                <div className={styles.selectedArchBarCopy}>
                  <span className={styles.selectedArchBarLabel}>Viewing</span>
                  <span className={styles.selectedArchBarName}>{mergedArchData.name}</span>
                </div>
                <button
                  className={styles.selectedArchBarButton}
                  onClick={() => setSelectedArch('')}
                  type="button"
                >
                  Browse all
                </button>
              </div>
            )}
            <DetailPanel
              arch={mergedArchData}
              allArchs={architectures}
              onNavigate={handleSelectArch}
              loading={loadingArch}
              selectedArchId={selectedArch}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
