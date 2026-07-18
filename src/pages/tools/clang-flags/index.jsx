import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { BookOpenText, ChevronRight, Layers3, Search, Sparkles } from 'lucide-react';
import Badge from '@site/src/components/clang-flags/Badge';
import styles from '@site/src/components/clang-flags/clangFlags.module.css';

const LANDING_CARDS = [
  {
    title: 'Search the explorer',
    body: 'Use the existing Clang Flags Explorer for quick lookup, filtering, and command copying.',
    to: '/tools/clang-flags-explorer/',
  },
  {
    title: 'Open any flag article',
    body: 'Every flag now has a dedicated documentation page with pipeline, implementation, and usage context.',
    to: '/tools/clang-flags/-O2/',
  },
  {
    title: 'Study the pipeline',
    body: 'The documentation pages highlight the stages affected by each option so the behavior is easier to reason about.',
    to: '/tools/clang-flags/-fsanitize%3Daddress/',
  },
];

export default function ClangFlagsLandingPage() {
  return (
    <Layout
      title="Clang Flags Documentation"
      description="Documentation landing page for the Clang flags encyclopedia."
    >
      <Head>
        <meta name="description" content="Documentation landing page for the Clang flags encyclopedia." />
      </Head>

      <main className={styles.pageShell}>
        <header className={styles.topBar}>
          <div className={styles.brandRow}>
            <Link className={styles.brandLink} to="/">CompilerSutra</Link>
            <span className={styles.brandDivider} />
            <Link className={styles.brandLinkMuted} to="/tools/clang-flags-explorer/">Clang Flags Explorer</Link>
            <ChevronRight size={14} strokeWidth={2} className={styles.topBarChevron} />
            <span className={styles.brandCurrent}>Doc landing</span>
          </div>
          <div className={styles.topBarMeta}>
            <span className={styles.topBarHint}><Sparkles size={14} strokeWidth={2} /> Documentation-first</span>
            <span className={styles.topBarHint}><Layers3 size={14} strokeWidth={2} /> LLVM snapshot</span>
          </div>
        </header>

        <section className={styles.heroPanel}>
          <div className={styles.heroCopy}>
            <div className={styles.heroEyebrow}>
              <BookOpenText size={13} strokeWidth={2} />
              <span>Doc</span>
            </div>
            <h1 className={styles.heroTitle}>Clang Flags Encyclopedia</h1>
            <p className={styles.heroSubtitle}>
              A documentation landing page for the per-flag articles. The explorer stays in place, but every flag now has a route that reads like a reference entry instead of a list item.
            </p>
            <div className={styles.heroMetaRow}>
              <Badge tone="accent">Doc</Badge>
              <Badge tone="info">LLVM / Clang</Badge>
              <Badge tone="info">Searchable</Badge>
              <Badge tone="info">Article pages</Badge>
            </div>
          </div>
        </section>

        <section className={styles.landingGrid}>
          {LANDING_CARDS.map((card) => (
            <Link key={card.title} to={card.to} className={styles.landingCard}>
              <div className={styles.landingCardTitle}>{card.title}</div>
              <div className={styles.landingCardBody}>{card.body}</div>
            </Link>
          ))}
        </section>

        <section className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleWrap}>
              <Search size={16} strokeWidth={2} className={styles.sectionIcon} />
              <h2 className={styles.sectionHeading}>How to use it</h2>
            </div>
          </div>
          <div className={styles.sectionBody}>
            <p className={styles.bodyCopy}>
              Start in the explorer when you want quick filtering. Open a flag article when you want the deeper explanation, implementation files, pass pipeline, and usage context.
            </p>
            <div className={styles.sidebarActions}>
              <Link className={styles.sidebarActionButton} to="/tools/clang-flags-explorer/">Open explorer</Link>
              <Link className={styles.sidebarActionButton} to="/tools/clang-flags/-O2/">Read a sample article</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
