#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const defaultTblgen = '/home/aitr/riscv_implementation/llvm/llvm-project/build/bin/llvm-tblgen';

function readArg(name, fallback = null) {
  const exact = process.argv.find((arg) => arg === name);
  if (exact) {
    const index = process.argv.indexOf(exact);
    return process.argv[index + 1] ?? fallback;
  }
  const withValue = process.argv.find((arg) => arg.startsWith(`${name}=`));
  if (withValue) {
    return withValue.slice(name.length + 1);
  }
  return fallback;
}

function normalizeText(value) {
  return String(value ?? '').toLowerCase().replace(/\s+/g, ' ').trim();
}

function normalizeWhitespace(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function unique(values) {
  return [...new Set((values || []).filter(Boolean))];
}

function walkTdFiles(dir, out = []) {
  if (!fs.existsSync(dir)) {
    return out;
  }
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkTdFiles(fullPath, out);
      continue;
    }
    if (entry.isFile() && fullPath.endsWith('.td')) {
      out.push(fullPath);
    }
  }
  return out;
}

function buildSourceIndex(llvmSrc) {
  const files = [
    ...walkTdFiles(path.join(llvmSrc, 'clang', 'include')),
    ...walkTdFiles(path.join(llvmSrc, 'llvm', 'include')),
  ];
  const index = new Map();
  for (const file of files) {
    const base = path.basename(file);
    if (!index.has(base)) {
      index.set(base, []);
    }
    index.get(base).push(file);
  }
  return index;
}

function chooseCandidate(candidates) {
  const scorePath = (candidate) => {
    const normalized = candidate.split(path.sep).join('/');
    let score = 0;
    if (normalized.includes('/clang/include/clang/Driver/ClangOptionDocs.td')) score += 130;
    if (normalized.includes('/clang/include/clang/Driver/Options.td')) score += 120;
    if (normalized.includes('/llvm/include/llvm/Option/OptParser.td')) score += 110;
    if (normalized.includes('/clang/include/clang/Basic/')) score += 70;
    if (normalized.includes('/clang/include/clang/Driver/')) score += 60;
    if (normalized.includes('/llvm/include/llvm/')) score += 50;
    return score;
  };
  return [...candidates].sort((a, b) => scorePath(b) - scorePath(a))[0];
}

function resolveSourcePath(loc, llvmSrc, sourceIndex) {
  if (!loc) {
    return null;
  }
  const raw = String(loc).split(':')[0].replace(/\\/g, '/');
  const direct = path.join(llvmSrc, raw);
  if (fs.existsSync(direct)) {
    return raw;
  }
  const base = path.basename(raw);
  const candidates = sourceIndex.get(base) || [];
  if (!candidates.length) {
    return raw;
  }
  return path.relative(llvmSrc, chooseCandidate(candidates)).split(path.sep).join('/');
}

function parseLine(loc) {
  if (!loc) return null;
  const match = String(loc).match(/:(\d+)$/);
  return match ? Number(match[1]) : null;
}

function printable(value) {
  if (value == null) return null;
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.map(printable).filter(Boolean);
  if (typeof value === 'object') {
    return value.printable ?? value.def ?? value.value ?? null;
  }
  return String(value);
}

function dedupeVisibility(values) {
  return unique(values.map((value) => (value === 'DefaultVis' ? 'ClangOption' : value)));
}

function kindLabel(kind) {
  const printableKind = String(kind || 'KIND_FLAG');
  const name = printableKind.replace(/^KIND_/, '');
  const map = {
    FLAG: 'Flag',
    JOINED: 'Joined',
    SEPARATE: 'Separate',
    MULTI_ARG: 'MultiArg',
    JOINED_OR_SEPARATE: 'JoinedOrSeparate',
    JOINED_AND_SEPARATE: 'JoinedAndSeparate',
    COMMA_JOINED: 'CommaJoined',
    JOINED_OR_SEPARATE_AND_JOINED: 'JoinedOrSeparateAndJoined',
    INPUT: 'Input',
    EXPANDED: 'Expanded',
  };
  return map[name] || name.replace(/_/g, ' ');
}

function normalizeFlag(flag) {
  return String(flag || '').trim();
}

function displayFlag(record) {
  const prefixes = Array.isArray(record.Prefixes) ? record.Prefixes : ['-'];
  const name = String(record.Name || '').trim();
  const primary = prefixes.includes('-') ? '-' : prefixes[0] || '-';
  return `${primary}${name}`;
}

function spellings(record) {
  const prefixes = Array.isArray(record.Prefixes) ? record.Prefixes : ['-'];
  const name = String(record.Name || '').trim();
  return unique(prefixes.map((prefix) => `${prefix}${name}`));
}

function normalizeGroupLabel(groupRecord) {
  if (!groupRecord) return null;
  return normalizeText(groupRecord.DocName || groupRecord.Name || groupRecord['!name'] || '') || null;
}

function inferCategory(option, groupRecord) {
  const groupDef = option.groupDef || '';
  const groupName = normalizeText(groupRecord?.docName || groupRecord?.name || '');
  const flag = option.flag.toLowerCase();
  const help = normalizeText(option.help || option.documentation || '').toLowerCase();
  const hint = `${groupDef} ${groupName} ${flag} ${help}`.toLowerCase();

  if (/sanitize/.test(hint)) return 'Sanitizer';

  const overrides = {
    O_Group: 'Optimization',
    W_Group: 'Warning',
    W_value_Group: 'Warning',
    DebugInfo_Group: 'Debugging',
    g_Group: 'Debugging',
    Link_Group: 'Linker',
    Preprocessor_Group: 'Preprocessor',
    IncludePath_Group: 'Preprocessor',
    M_Group: 'Dependency Files',
    D_Group: 'Preprocessor',
    f_Group: 'Code Generation',
    f_clang_Group: 'Code Generation',
    m_Group: 'Target-Specific Code Generation',
    opencl_Group: 'OpenCL',
    cl_Group: 'CL Compatibility',
    cuda_Group: 'CUDA',
    hip_Group: 'HIP',
    sycl_Group: 'SYCL',
    StaticAnalyzer_Group: 'Static Analysis',
    Action_Group: 'Actions',
    CompileOnly_Group: 'Compilation',
  };
  if (overrides[groupDef]) {
    return overrides[groupDef];
  }
  if (/warning|diagnostic/.test(hint)) return 'Warning';
  if (/optimi[sz]ation|^-o/.test(hint)) return 'Optimization';
  if (/debug|dwarf|gmlt/.test(hint)) return 'Debugging';
  if (/linker|ld|archive|link/.test(hint)) return 'Linker';
  if (/preprocessor|macro|include/.test(hint)) return 'Preprocessor';
  if (/experimental/.test(hint)) return 'Experimental';
  if (/deprecated/.test(hint)) return 'Deprecated';
  if (/target-specific|target dependent|target-independent/.test(hint)) return 'Code Generation';
  return groupRecord?.docName ? groupRecord.docName.replace(/\boptions?\b/i, '').replace(/\blevel\b/i, '').trim() || 'Other' : 'Other';
}

function isHidden(record) {
  const flags = unique((record.Flags || []).map(printable).filter(Boolean));
  return flags.includes('HelpHidden') || flags.includes('Ignored') || flags.includes('Unsupported');
}

function isDeprecated(option) {
  const help = normalizeText(option.help || option.documentation || '');
  const doc = normalizeText(option.groupDocBrief || '');
  return /^deprecated[;:\s]/i.test(help) || /^deprecated[;:\s]/i.test(doc);
}

function isExperimental(option) {
  const hint = normalizeText(`${option.flag} ${option.help || ''} ${option.documentation || ''} ${option.category}`);
  return /experimental/.test(hint);
}

function buildSupportedCompilers(visibility) {
  const mapping = {
    ClangOption: 'Clang',
    CC1Option: 'CC1',
    CLOption: 'CL',
    FlangOption: 'Flang',
    FC1Option: 'FC1',
    DXCOption: 'DXC',
    CC1AsOption: 'CC1As',
  };
  return unique(visibility.map((item) => mapping[item]).filter(Boolean));
}

function buildExample(option) {
  const flag = option.aliasTargetFlag && option.flag === '-O' ? option.aliasTargetFlag : option.flag;
  let renderedFlag = flag;
  if (option.takesArgument) {
    if (flag.includes('=')) {
      renderedFlag = `${flag}`;
    } else if (option.kind === 'Separate' || option.kind === 'JoinedAndSeparate') {
      renderedFlag = `${flag} <arg>`;
    } else {
      renderedFlag = `${flag}=<arg>`;
    }
  }

  if (option.flag === '-O') {
    renderedFlag = '-O3';
  }

  if (option.category === 'Preprocessor') {
    return `clang++ ${renderedFlag} -E input.cpp`;
  }
  if (option.group === 'O_Group' && option.flag === '-O') {
    return `clang++ -O3 main.cpp -o app`;
  }
  if (option.category === 'Linker') {
    return `clang++ ${renderedFlag} main.o -o app`;
  }
  if (option.category === 'Debugging') {
    return `clang++ ${renderedFlag} -g -c main.cpp`;
  }
  if (option.category === 'Sanitizer') {
    return `clang++ ${renderedFlag} main.cpp -o app`;
  }
  if (option.category === 'Optimization') {
    return `clang++ ${renderedFlag} main.cpp -o app`;
  }
  if (option.category === 'Warning') {
    return `clang++ ${renderedFlag} -fsyntax-only main.cpp`;
  }
  if (option.category === 'Compilation') {
    return `clang++ ${renderedFlag} -c main.cpp`;
  }
  return `clang++ ${renderedFlag} main.cpp -o app`;
}

function buildWhenToUse(option) {
  const byCategory = {
    Optimization: ['Release builds', 'Performance-critical code', 'When profiling shows a hot path'],
    Warning: ['CI builds', 'When you want stricter diagnostics', 'When you need to catch regressions early'],
    Debugging: ['Debug sessions', 'Crash investigation', 'When you need symbols or richer debug info'],
    Sanitizer: ['Bug hunting', 'Test environments', 'When validating memory and UB safety'],
    Linker: ['Final link steps', 'When forwarding flags to the linker', 'Build systems that need linker-specific control'],
    Preprocessor: ['Controlling macro expansion', 'Dependency generation', 'Include path management'],
    'Code Generation': ['Code generation tuning', 'Frontend lowering experiments', 'Target-independent compilation control'],
    Compilation: ['Compilation-only workflows', 'Build pipelines that do not link immediately'],
  };
  return byCategory[option.category] || [];
}

function buildWhenNotToUse(option) {
  const byCategory = {
    Optimization: ['Debug builds', 'When compile time is more important than runtime speed'],
    Warning: ['If you are intentionally suppressing noisy third-party warnings', 'When you are not ready to fix all warnings'],
    Debugging: ['Release builds without a debugging need', 'When size or startup time matters more than observability'],
    Sanitizer: ['Shipping performance-critical binaries', 'When runtime overhead is unacceptable'],
    Linker: ['Pure compilation steps', 'When the linker should not see the option'],
    Preprocessor: ['Late codegen tuning', 'When you do not want preprocessing behavior changed'],
    'Code Generation': ['When you are only editing diagnostics or preprocessing', 'When the option does not affect your current build phase'],
    Compilation: ['Link-only operations', 'When the flag belongs in a later build phase'],
  };
  return byCategory[option.category] || [];
}

function buildSearchText(option) {
  return normalizeText([
    option.flag,
    option.alias,
    option.aliasTarget,
    option.aliasTargetFlag,
    ...(option.searchAliases || []),
    option.kind,
    option.category,
    option.group,
    option.groupLabel,
    option.help,
    option.documentation,
    ...(option.flags || []),
    ...(option.visibility || []),
    ...(option.supportedCompilers || []),
    ...(option.values || []),
    ...(option.enumValues || []),
    ...(option.relatedFlags || []),
    option.sourcePath,
  ].filter(Boolean).join(' '));
}

function scoreRelated(base, candidate) {
  if (base.flag === candidate.flag) return -Infinity;
  let score = 0;
  if (base.aliasTarget === candidate.flag || candidate.aliasTarget === base.flag) score += 120;
  if (base.negatedOption === candidate.flag || candidate.negatedOption === base.flag) score += 100;
  if (base.group === candidate.group) score += 60;
  if (base.category === candidate.category) score += 30;
  if (base.kind === candidate.kind) score += 8;
  const baseStem = base.flag.replace(/[-_=0-9].*$/, '').toLowerCase();
  const candStem = candidate.flag.replace(/[-_=0-9].*$/, '').toLowerCase();
  if (baseStem && candStem && baseStem === candStem) score += 20;
  if (base.flag.split('=')[0] === candidate.flag.split('=')[0]) score += 15;
  if (base.flag.startsWith('-W') && candidate.flag.startsWith('-W')) score += 8;
  if (base.flag.startsWith('-f') && candidate.flag.startsWith('-f')) score += 8;
  return score;
}

function findCounterpart(option, byFlag) {
  const flag = option.flag;
  const candidates = [];
  if (flag.startsWith('-fno-')) {
    candidates.push(flag.replace('-fno-', '-f'));
  } else if (flag.startsWith('-fno_')) {
    candidates.push(flag.replace('-fno_', '-f'));
  } else if (flag.startsWith('-f')) {
    candidates.push(flag.replace('-f', '-fno-'));
    candidates.push(flag.replace('-f', '-fno_'));
  }
  if (flag.startsWith('-Wno-')) {
    candidates.push(flag.replace('-Wno-', '-W'));
  } else if (flag.startsWith('-W')) {
    candidates.push(flag.replace('-W', '-Wno-'));
  }
  if (flag.startsWith('/fno-')) {
    candidates.push(flag.replace('/fno-', '/f'));
  }
  for (const candidate of candidates) {
    const match = byFlag.get(candidate);
    if (match) return match.flag;
  }
  return null;
}

function main() {
  const llvmSrcArg = readArg('--llvm-src', process.env.LLVM_SRC || '');
  const tblgenArg = readArg('--llvm-tblgen', process.env.LLVM_TBLGEN || defaultTblgen);
  const outputArg = readArg('--output', path.join(repoRoot, 'static', 'data', 'clang-flags.json'));
  if (!llvmSrcArg) {
    console.error('LLVM source tree not found. Set --llvm-src or LLVM_SRC.');
    process.exit(1);
  }
  const llvmSrc = path.resolve(llvmSrcArg);
  const tblgen = path.resolve(tblgenArg);
  const output = path.resolve(outputArg);

  if (!fs.existsSync(llvmSrc)) {
    console.error('LLVM source tree not found. Set --llvm-src or LLVM_SRC.');
    process.exit(1);
  }
  if (!fs.existsSync(tblgen)) {
    console.error(`llvm-tblgen not found at ${tblgen}`);
    process.exit(1);
  }

  const sourceIndex = buildSourceIndex(llvmSrc);
  const optionsTd = path.join(llvmSrc, 'clang', 'include', 'clang', 'Driver', 'Options.td');
  const includeArgs = ['-I', path.join(llvmSrc, 'clang', 'include'), '-I', path.join(llvmSrc, 'llvm', 'include')];
  const tblgenResult = spawnSync(tblgen, ['--dump-json', ...includeArgs, optionsTd], {
    encoding: 'utf8',
    maxBuffer: 80 * 1024 * 1024,
  });
  if (tblgenResult.status !== 0) {
    console.error(tblgenResult.stderr || tblgenResult.stdout || 'llvm-tblgen failed');
    process.exit(tblgenResult.status || 1);
  }

  const db = JSON.parse(tblgenResult.stdout);
  const commitResult = spawnSync('git', ['-C', llvmSrc, 'rev-parse', 'HEAD'], { encoding: 'utf8' });
  const llvmCommit = commitResult.status === 0 ? commitResult.stdout.trim() : 'main';
  const sourceBaseUrl = `https://github.com/llvm/llvm-project/blob/${llvmCommit}`;

  const groupRecords = [];
  const groups = new Map();
  for (const [key, record] of Object.entries(db)) {
    if (key.startsWith('!')) continue;
    if (!Array.isArray(record?.['!superclasses']) || !record['!superclasses'].includes('OptionGroup')) continue;
    const loc = Array.isArray(record['!locs']) ? record['!locs'][0] : null;
    const group = {
      id: key,
      name: record.Name || key,
      docName: record.DocName ? normalizeWhitespace(record.DocName) : null,
      docBrief: record.DocBrief ? normalizeWhitespace(record.DocBrief) : null,
      superclasses: [...(record['!superclasses'] || [])],
      source: resolveSourcePath(loc, llvmSrc, sourceIndex),
      sourceLine: parseLine(loc),
    };
    groupRecords.push(group);
    groups.set(key, group);
  }

  const rawOptions = [];
  for (const [key, record] of Object.entries(db)) {
    if (key.startsWith('!')) continue;
    if (!Array.isArray(record?.['!superclasses']) || !record['!superclasses'].includes('Option')) continue;
    if (!record.Kind) continue;

    const loc = Array.isArray(record['!locs']) ? record['!locs'][0] : null;
    const sourcePath = resolveSourcePath(loc, llvmSrc, sourceIndex);
    const sourceLine = parseLine(loc);
    const groupDef = record.Group?.def || null;
    const groupRecord = groupDef ? groups.get(groupDef) : null;
    const visibility = dedupeVisibility((record.Visibility || []).map((value) => printable(value)).filter(Boolean));
    const aliasArgs = Array.isArray(record.AliasArgs) ? record.AliasArgs.map((value) => printable(value)).filter(Boolean) : [];
    const flags = unique((record.Flags || []).map((value) => printable(value)).filter(Boolean));
    const values = typeof record.Values === 'string' ? record.Values.split(',').map((item) => item.trim()).filter(Boolean) : [];
    const enumValues = Array.isArray(record.NormalizedValues) ? record.NormalizedValues.map((item) => String(item).trim()).filter(Boolean) : [];
    const kind = kindLabel(record.Kind?.printable || record.Kind?.def || 'KIND_FLAG');
    const flag = displayFlag(record);
    const option = {
      id: key,
      flag,
      spellings: spellings(record),
      name: record.Name || key,
      help: normalizeWhitespace(record.HelpText || ''),
      kind,
      group: groupDef,
      groupLabel: groupRecord?.docName || groupRecord?.name || null,
      category: inferCategory({ flag, groupDef, kind, help: record.HelpText, documentation: record.DocBrief }, groupRecord),
      alias: record.Alias?.def || null,
      aliasTarget: null,
      aliasTargetFlag: null,
      metaVarName: record.MetaVarName || null,
      visibility,
      supportedCompilers: buildSupportedCompilers(visibility),
      flags,
      values,
      enumValues,
      aliasArgs,
      searchAliases: [],
      takesArgument: false,
      cc1: visibility.includes('CC1Option'),
      driver: visibility.includes('ClangOption') || visibility.includes('CLOption') || visibility.includes('DXCOption') || visibility.includes('FlangOption'),
      driverOnly: false,
      clangOnly: false,
      hidden: isHidden(record),
      deprecated: false,
      experimental: false,
      negatedOption: null,
      documentation: normalizeWhitespace(record.DocBrief || groupRecord?.docBrief || ''),
      source: sourcePath,
      sourcePath,
      sourceLine,
      sourceUrl: sourcePath && sourceLine ? `${sourceBaseUrl}/${sourcePath}#L${sourceLine}` : null,
      exampleClang: '',
      exampleGCC: null,
      whenToUse: [],
      whenNotToUse: [],
      relatedFlags: [],
    };
    rawOptions.push(option);
  }

  const optionsByFlag = new Map();
  const optionsById = new Map();
  for (const option of rawOptions) {
    optionsByFlag.set(option.flag, option);
    optionsById.set(option.id, option);
    for (const spelling of option.spellings) {
      optionsByFlag.set(spelling, option);
    }
  }

  for (const option of rawOptions) {
    if (option.alias) {
      const target = optionsById.get(option.alias);
      if (target) {
        option.aliasTarget = target.name;
        option.aliasTargetFlag = target.flag;
      }
    }
    const joinedKinds = new Set(['Separate', 'MultiArg', 'JoinedOrSeparate', 'JoinedAndSeparate', 'CommaJoined']);
    option.takesArgument = joinedKinds.has(option.kind) || (option.kind === 'Joined' && (option.name === 'O' || option.name.endsWith('=') || option.metaVarName || option.values.length || option.enumValues.length));
    option.searchAliases = [];
    if (option.group === 'O_Group' && option.flag === '-O') {
      option.searchAliases = ['-O0', '-O1', '-O2', '-O3', '-O4', '-Ofast', '-Og', '-Os', '-Oz', '-Ot', '-Ox'];
    }
    if (option.flag === '-W') {
      option.searchAliases = ['-Werror', '-Wall', '-Wextra'];
    }
    option.negatedOption = findCounterpart(option, optionsByFlag);
    option.deprecated = isDeprecated(option);
    option.experimental = isExperimental(option);
    option.clangOnly = option.supportedCompilers.length > 0 && option.supportedCompilers.every((item) => item.startsWith('Clang'));
    option.driverOnly = option.driver && !option.cc1;
    option.exampleClang = buildExample(option);
    option.whenToUse = buildWhenToUse(option);
    option.whenNotToUse = buildWhenNotToUse(option);
  }

  for (const option of rawOptions) {
    const scored = rawOptions
      .map((candidate) => ({ candidate, score: scoreRelated(option, candidate) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.candidate.flag.localeCompare(b.candidate.flag))
      .slice(0, 8)
      .map(({ candidate }) => candidate.flag);
    option.relatedFlags = unique(scored.filter((flag) => flag !== option.flag));
    option.searchText = buildSearchText(option);
  }

  const options = rawOptions.sort((a, b) => {
    const categoryOrder = a.category.localeCompare(b.category);
    if (categoryOrder !== 0) return categoryOrder;
    return a.flag.localeCompare(b.flag);
  });

  const outputData = {
    generatedAt: new Date().toISOString(),
    llvmSource: llvmSrc,
    llvmCommit,
    sourceRepository: 'https://github.com/llvm/llvm-project',
    sourceBaseUrl,
    options,
    groups: groupRecords.sort((a, b) => a.id.localeCompare(b.id)),
  };

  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, `${JSON.stringify(outputData, null, 2)}\n`, 'utf8');
  console.log(`Wrote ${options.length} options to ${output}`);
}

main();
