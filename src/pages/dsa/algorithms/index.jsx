import React from 'react';
import DsaModuleIndexPage from '@site/src/components/dsa/DsaModuleIndexPage';
import { DSA_MODULES } from '@site/src/data/dsaSections';

export default function AlgorithmsPage() {
  return <DsaModuleIndexPage module={DSA_MODULES['algorithms']} />;
}
