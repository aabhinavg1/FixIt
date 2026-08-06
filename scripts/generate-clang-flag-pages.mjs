#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const dataPath = path.join(repoRoot, 'static', 'data', 'clang-flags.json');
const targetDir = path.join(repoRoot, 'src', 'pages', 'tools', 'clang-flags', 'flags');

function readArg(name, fallback) {
  const index = process.argv.indexOf(name);
  if (index !== -1 && process.argv[index + 1]) {
    return process.argv[index + 1];
  }
  return fallback;
}

function hasFlag(name) {
  return process.argv.includes(name);
}

function loadFlags() {
  const raw = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  if (!raw || !Array.isArray(raw.options)) {
    throw new Error(`Invalid clang flag dataset at ${dataPath}`);
  }
  return raw;
}

function toSlug(flag) {
  return encodeURIComponent(String(flag ?? '').trim());
}

function toFileStem(flag) {
  return Buffer.from(String(flag ?? '').trim(), 'utf8').toString('hex');
}

function buildDescription(flag) {
  const summary = String(flag.documentation || flag.help || '').trim();
  if (summary) {
    return summary.replace(/\s+/g, ' ').slice(0, 180);
  }
  return 'Reference entry for a Clang compiler flag.';
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeProse(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');
}

function buildExample(flag) {
  const needsXclang = flag.cc1 === true && flag.driver === false;
  let renderedFlag = flag.flag;
  if (flag.takesArgument) {
    if (flag.flag.includes('=')) {
      renderedFlag = flag.flag;
    } else if (flag.kind === 'Separate' || flag.kind === 'JoinedAndSeparate') {
      renderedFlag = `${flag.flag} <arg>`;
    } else {
      renderedFlag = `${flag.flag}=<arg>`;
    }
  }
  if (flag.flag === '-O') {
    renderedFlag = '-O3';
  }

  if (needsXclang) {
    return `clang++ -Xclang ${renderedFlag} -fsyntax-only main.cpp`;
  }
  if (flag.category === 'Preprocessor') {
    return `clang++ ${renderedFlag} -E input.cpp`;
  }
  if (flag.category === 'Linker') {
    return `clang++ ${renderedFlag} main.o -o app`;
  }
  if (flag.category === 'Debugging') {
    return `clang++ ${renderedFlag} -g -c main.cpp`;
  }
  if (flag.category === 'Warning') {
    return `clang++ ${renderedFlag} -fsyntax-only main.cpp`;
  }
  if (flag.category === 'Code Generation' || flag.category === 'Target-Specific Code Generation') {
    return `clang++ ${renderedFlag} -c main.cpp`;
  }
  return `clang++ ${renderedFlag} main.cpp -o app`;
}

function buildWhatSection(flag) {
  const help = String(flag.help || '').trim();
  const documentation = String(flag.documentation || '').trim();
  const text = escapeProse(documentation || help || 'No help text is available in the imported LLVM metadata.');

  const lines = [`${text}`];

  if (flag.cc1 && !flag.driver) {
    lines.push('', 'This is a `-cc1` (internal frontend) option. The Clang driver does not accept it directly, so it must be forwarded with `-Xclang`.');
  }
  if (flag.takesArgument) {
    lines.push('', 'This option expects an argument.');
  }
  if (flag.negatedOption) {
    lines.push('', `It can be negated with ${flag.negatedOption}.`);
  }
  if (flag.aliasTargetFlag) {
    lines.push('', `It is an alias for ${flag.aliasTargetFlag}.`);
  }

  return lines.join('\n\n');
}

function buildFallbackGuidance(flag, mode) {
  const lines = [];
  const target = flag.groupLabel ? String(flag.groupLabel).replace(/^AARCH64$/, 'AArch64') : null;
  const kind = flag.kind || 'flag';

  if (mode === 'use') {
    if (target) {
      lines.push(
        `You are targeting ${target} and want this ${kind.toLowerCase()} behavior applied to the whole compilation.`,
      );
    }
    if (flag.clangOnly) {
      lines.push('You are compiling with Clang (the option is not accepted by other compilers).');
    }
    if (flag.cc1 && !flag.driver) {
      lines.push(
        'You are driving the frontend directly or forwarding the option with `-Xclang`, since the driver does not expose it.',
      );
    }
    if (!lines.length) {
      lines.push(
        `You have a concrete need for the behavior this ${flag.category || 'compiler'} option enables and have verified it applies to your build.`,
      );
    }
  } else {
    if (target) {
      lines.push(
        `Your build targets a different architecture — this ${kind.toLowerCase()} is accepted only when targeting ${target}.`,
      );
    }
    if (flag.cc1 && !flag.driver) {
      lines.push(
        'You expect the option to work as a regular driver flag — it requires `-Xclang` forwarding or a direct `clang -cc1` invocation.',
      );
    }
    if (flag.clangOnly) {
      lines.push('You need the same behavior from GCC or another compiler that does not implement this option.');
    }
    if (!lines.length) {
      lines.push(
        'The behavior enabled by this option does not apply to the code or target you are building.',
      );
    }
  }

  return lines.map((item) => `- ${escapeProse(item)}`).join('\n');
}

const PLACEHOLDER_GUIDANCE = new Set([
  'when the flag matches the behavior you need',
  'when the flag matches the behavior you need in this compilation',
  'when the flag is not relevant to this build',
]);

function hasRealGuidance(items) {
  if (!Array.isArray(items) || !items.length) {
    return false;
  }
  return items.some((item) => {
    const normalized = String(item).trim().toLowerCase();
    return normalized && !PLACEHOLDER_GUIDANCE.has(normalized);
  });
}

function buildWhenToUse(flag) {
  const items = hasRealGuidance(flag.whenToUse)
    ? flag.whenToUse.filter((item) => !PLACEHOLDER_GUIDANCE.has(String(item).trim().toLowerCase()))
    : null;
  return items ? items.map((item) => `- ${escapeProse(item)}`).join('\n') : buildFallbackGuidance(flag, 'use');
}

function buildWhenNotToUse(flag) {
  const items = hasRealGuidance(flag.whenNotToUse)
    ? flag.whenNotToUse.filter((item) => !PLACEHOLDER_GUIDANCE.has(String(item).trim().toLowerCase()))
    : null;
  return items ? items.map((item) => `- ${escapeProse(item)}`).join('\n') : buildFallbackGuidance(flag, 'avoid');
}

function buildKeyFacts(flag) {
  const rows = [];
  rows.push(`- **Argument form**: ${flag.kind || 'Flag'}${flag.takesArgument ? ' (takes an argument)' : ' (no argument)'}`);
  const visibility = (flag.visibility || []).join(', ');
  rows.push(`- **Accepted by**: ${visibility || 'Clang driver'}`);
  rows.push(`- **Stage**: ${flag.cc1 ? 'cc1 (frontend)' : 'driver'}${flag.category ? `, category \`${flag.category}\`` : ''}`);
  if (flag.aliasTargetFlag) rows.push(`- **Alias of**: \`${flag.aliasTargetFlag}\``);
  if (flag.negatedOption) rows.push(`- **Negated by**: \`${flag.negatedOption}\``);
  rows.push(`- **Defined in**: \`${flag.sourcePath || 'clang/include/clang/Driver/Options.td'}\``);
  return rows.join('\n');
}

function buildBody(flag) {
  return `## What this flag actually does

${buildWhatSection(flag)}

## When to use it

${buildWhenToUse(flag)}

## When not to use it

${buildWhenNotToUse(flag)}

## Usage example

\`\`\`bash
${buildExample(flag)}
\`\`\`

## Key facts

${buildKeyFacts(flag)}
`;
}

function buildPage(flag) {
  const slug = toSlug(flag.flag);
  const description = buildDescription(flag);
  const quotedTitle = JSON.stringify(String(flag.flag ?? ''));
  const quotedSlug = JSON.stringify(`/tools/clang-flags/${slug}/`);
  const quotedPath = JSON.stringify(slug);
  const quotedDescription = JSON.stringify(escapeHtml(description));
  const body = buildBody(flag);
  return `---
title: ${quotedTitle}
slug: ${quotedSlug}
description: ${quotedDescription}
---

import FlagArticleShell from '@site/src/components/clang-flags/FlagArticleShell';

{/* GENERATED_BY clang-flags */}
<FlagArticleShell flagPath=${quotedPath}>

${body}
</FlagArticleShell>
`;
}

const HAND_AUTHORED_MARKER = 'HAND_AUTHORED';

function isHandAuthored(filePath) {
  if (!fs.existsSync(filePath)) {
    return false;
  }
  const existing = fs.readFileSync(filePath, 'utf8');
  return existing.includes(HAND_AUTHORED_MARKER);
}

function main() {
  const dataset = loadFlags();
  let flags = dataset.options;

  const categoryArg = readArg('--category', '');
  if (categoryArg) {
    const before = flags.length;
    flags = flags.filter((flag) => flag.category === categoryArg);
    console.log(`Filtering to category "${categoryArg}": ${flags.length} of ${before} flags.`);
  }

  fs.mkdirSync(targetDir, { recursive: true });

  let written = 0;
  let skipped = 0;

  for (const flag of flags) {
    const fileName = `flag-${toFileStem(flag.flag)}.mdx`;
    const filePath = path.join(targetDir, fileName);

    if (isHandAuthored(filePath)) {
      skipped += 1;
      continue;
    }

    fs.writeFileSync(filePath, buildPage(flag));
    written += 1;
  }

  console.log(`Wrote ${written} clang flag MDX pages to ${targetDir}${skipped ? ` (skipped ${skipped} existing)` : ''}`);
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === __filename;
if (isMain) {
  main();
}

export { main, buildPage, buildBody, buildExample };
