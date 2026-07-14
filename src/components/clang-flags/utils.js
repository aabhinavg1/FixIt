export function normalizeText(value) {
  return String(value ?? '').toLowerCase().replace(/\s+/g, ' ').trim();
}

export function uniqueValues(values) {
  return [...new Set((values || []).filter(Boolean))];
}

export function splitHighlightedText(text, query) {
  const value = String(text ?? '');
  const needle = String(query ?? '').trim();

  if (!needle) {
    return [{ text: value, highlighted: false }];
  }

  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const matcher = new RegExp(escaped, 'ig');
  const parts = [];
  let lastIndex = 0;

  for (const match of value.matchAll(matcher)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      parts.push({ text: value.slice(lastIndex, index), highlighted: false });
    }
    parts.push({
      text: value.slice(index, index + match[0].length),
      highlighted: true,
    });
    lastIndex = index + match[0].length;
  }

  if (!parts.length) {
    return [{ text: value, highlighted: false }];
  }

  if (lastIndex < value.length) {
    parts.push({ text: value.slice(lastIndex), highlighted: false });
  }

  return parts;
}

export function joinList(values) {
  return uniqueValues(values).join(', ');
}
