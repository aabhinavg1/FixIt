#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const dataPath = path.join(repoRoot, 'static', 'data', 'clang-flags.json');
const targetDir = path.join(repoRoot, 'src', 'pages', 'tools', 'clang-flags', 'flags');

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
    return summary.replace(/\s+/g, ' ').replace(/</g, '&lt;').replace(/>/g, '&gt;').slice(0, 180);
  }
  return 'Reference entry for a Clang compiler flag.';
}

function buildPage(flag) {
  const slug = toSlug(flag.flag);
  const description = buildDescription(flag);
  const quotedSlug = JSON.stringify(`/tools/clang-flags/${slug}/`);
  const quotedPath = JSON.stringify(slug);
  const quotedDescription = JSON.stringify(description);
  return `---
title: "Clang Flag Reference"
slug: ${quotedSlug}
description: ${quotedDescription}
---

import FlagArticlePage from '@site/src/components/clang-flags/FlagArticlePage';

<FlagArticlePage flagPath=${quotedPath} />
`;
}

function main() {
  const dataset = loadFlags();
  const flags = dataset.options;
  fs.rmSync(targetDir, { recursive: true, force: true });
  fs.mkdirSync(targetDir, { recursive: true });

  for (const flag of flags) {
    const fileName = `flag-${toFileStem(flag.flag)}.mdx`;
    const filePath = path.join(targetDir, fileName);
    fs.writeFileSync(filePath, buildPage(flag));
  }

  console.log(`Wrote ${flags.length} clang flag MDX pages to ${targetDir}`);
}

main();
