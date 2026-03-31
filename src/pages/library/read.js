import React from 'react';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from '../reaserchpaper.module.css';

export default function LibraryReaderPage() {
  return (
    <>
      <Head>
        <title>CompilerSutra Library Reader</title>
        <meta
          name="description"
          content="Read library papers and internal material directly on CompilerSutra in a dedicated reader."
        />
        <meta property="og:title" content="CompilerSutra Library Reader" />
        <meta
          property="og:description"
          content="Dedicated reader for CompilerSutra library papers and materials."
        />
      </Head>

      <main className={styles.readerPage}>
        <BrowserOnly
          fallback={
            <section className={styles.readerShell}>
              <div className={styles.status}>Loading PDF reader…</div>
            </section>
          }
        >
          {() => {
            const ResearchPaperViewer =
              require('@site/src/components/ResearchPaperViewer').default;
            return <ResearchPaperViewer />;
          }}
        </BrowserOnly>
      </main>
    </>
  );
}
