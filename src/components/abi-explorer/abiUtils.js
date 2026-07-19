export function normalizeText(value) {
  return String(value || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

export function unique(values) {
  return [...new Set((values || []).filter(Boolean))];
}

export function uniqueValues(values) {
  return [...new Set((values || []).filter(Boolean))];
}

export function splitHighlightedText(text, query) {
  if (!query || !text) return [{ text, highlight: false }];
  const normalizedQuery = normalizeText(query);
  const tokens = normalizedQuery.split(' ').filter(Boolean);
  if (!tokens.length) return [{ text, highlight: false }];

  const lowerText = text.toLowerCase();
  const segments = [];
  let lastIndex = 0;

  for (const token of tokens) {
    let searchStart = lastIndex;
    while (searchStart < lowerText.length) {
      const index = lowerText.indexOf(token, searchStart);
      if (index === -1) break;

      if (index > lastIndex) {
        segments.push({ text: text.slice(lastIndex, index), highlight: false });
      }
      segments.push({ text: text.slice(index, index + token.length), highlight: true });
      lastIndex = index + token.length;
      break;
    }
  }

  if (lastIndex < text.length) {
    segments.push({ text: text.slice(lastIndex), highlight: false });
  }

  return segments.length ? segments : [{ text, highlight: false }];
}

export function scoreArchitecture(arch, query) {
  if (!query) return 0;
  const haystack = arch.searchText || '';
  const normalizedQuery = normalizeText(query);
  let score = 0;

  if (arch.name.toLowerCase().includes(normalizedQuery)) score += 100;
  if (arch.id.toLowerCase().includes(normalizedQuery)) score += 90;
  if (arch.architecture.toLowerCase().includes(normalizedQuery)) score += 80;
  if (arch.convention.toLowerCase().includes(normalizedQuery)) score += 70;
  if (arch.target.toLowerCase().includes(normalizedQuery)) score += 60;
  if (haystack.includes(normalizedQuery)) score += 40;

  const tokens = normalizedQuery.split(' ').filter(Boolean);
  if (tokens.length && tokens.every(t => haystack.includes(t))) score += 30;

  return score;
}

export function matchesFilters(arch, filters) {
  if (filters.category && filters.category !== 'all' && arch.category !== filters.category) return false;
  if (filters.status && filters.status !== 'all' && arch.status !== filters.status) return false;
  if (filters.hasRedZone !== undefined && arch.hasRedZone !== filters.hasRedZone) return false;
  if (filters.hasShadowSpace !== undefined && arch.hasShadowSpace !== filters.hasShadowSpace) return false;
  return true;
}

export function groupByCategory(architectures) {
  const groups = {};
  for (const arch of architectures) {
    const cat = arch.category || 'Other';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(arch);
  }
  return groups;
}

export function getRegisterColor(register) {
  if (register.callerCallee === 'caller-saved') return '#f97316';
  if (register.callerCallee === 'callee-saved') return '#8b5cf6';
  if (register.callerCallee === 'reserved') return '#64748b';
  if (register.returnPosition !== null) return '#22c55e';
  if (register.argumentPosition !== null) return '#3b82f6';
  return '#94a3b8';
}

export function getRegisterColorClass(register) {
  if (register.callerCallee === 'reserved') return 'reserved';
  if (register.returnPosition !== null && register.argumentPosition !== null) return 'argReturn';
  if (register.returnPosition !== null) return 'return';
  if (register.argumentPosition !== null) return 'argument';
  if (register.callerCallee === 'caller-saved') return 'callerSaved';
  if (register.callerCallee === 'callee-saved') return 'calleeSaved';
  return 'neutral';
}

export function formatRegisterWidth(width) {
  if (width >= 128) return `${width / 128}x128-bit`;
  if (width >= 64) return `${width}-bit`;
  return `${width}-bit`;
}

export function buildSearchText(arch) {
  const parts = [
    arch.id,
    arch.name,
    arch.architecture,
    arch.convention,
    arch.target,
    arch.description,
    ...(arch.registers || []).map(r => `${r.name} ${r.purpose}`),
  ];
  return normalizeText(parts.filter(Boolean).join(' '));
}
