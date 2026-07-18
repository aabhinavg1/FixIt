export function buildFlagArticlePath(flag) {
  const value = String(flag ?? '').trim();
  if (!value) {
    return '/tools/clang-flags/';
  }
  return `/tools/clang-flags/${encodeURIComponent(value)}/`;
}

export function resolveFlagPathValue(value) {
  const raw = String(value ?? '').replace(/^\/+|\/+$/g, '');
  if (!raw) {
    return '';
  }
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}
