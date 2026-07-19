const ABI_BASE = '/abi';
const ABI_DATA_BASE = '/data/abi';

export function buildArchPath(archId) {
  return `${ABI_BASE}/${archId}`;
}

export function buildArchDataPath(dataFile) {
  return `${ABI_DATA_BASE}/${dataFile}`;
}

export function buildComparePath(archIds) {
  const query = archIds.length ? `?compare=${archIds.join(',')}` : '';
  return `${ABI_BASE}/compare${query}`;
}

export function buildRegisterPath(archId, registerName) {
  return `${ABI_BASE}/${archId}?register=${encodeURIComponent(registerName)}`;
}

export function resolveArchIdFromPath(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === 'abi' && segments[1]) {
    return decodeURIComponent(segments[1]);
  }
  return null;
}

export function resolveRegisterFromQuery(search) {
  const params = new URLSearchParams(search);
  return params.get('register') || null;
}

export function resolveCompareFromQuery(search) {
  const params = new URLSearchParams(search);
  const compare = params.get('compare');
  return compare ? compare.split(',').filter(Boolean) : [];
}

export { ABI_BASE, ABI_DATA_BASE };
