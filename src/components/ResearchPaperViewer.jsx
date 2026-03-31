import React, { useEffect, useMemo, useState } from 'react';
import pageStyles from '@site/src/pages/reaserchpaper.module.css';
import { getLibraryPaper, LIBRARY_PAPERS } from '@site/src/data/library';

const DEFAULT_BOOK_ID = 'llvm-paper';
const FALLBACK_BOOK = LIBRARY_PAPERS[0];

function sanitizeFile(value) {
  if (!value || typeof value !== 'string') {
    return null;
  }

  const trimmed = value.trim();
  const isRemote = /^https?:\/\//i.test(trimmed);
  const isLocal = trimmed.startsWith('/');
  const isPdf = /\.pdf($|[?#])/i.test(trimmed);

  if ((isRemote || isLocal) && isPdf) {
    return trimmed;
  }

  return null;
}

function getQueryParams() {
  if (typeof window === 'undefined') {
    return new URLSearchParams();
  }

  return new URLSearchParams(window.location.search);
}

function getBookById(bookId) {
  return getLibraryPaper(bookId);
}

function openRawPdf(file) {
  if (typeof window !== 'undefined' && file) {
    window.location.replace(file);
  }
}

function clampPage(nextPage, totalPages) {
  if (!totalPages) {
    return Math.max(1, nextPage);
  }

  return Math.min(totalPages, Math.max(1, nextPage));
}

function getInitialReaderSource() {
  const params = getQueryParams();
  const queryFile = sanitizeFile(params.get('file'));

  if (queryFile) {
    return {
      mode: 'custom',
      queryFile,
      initialBookId: DEFAULT_BOOK_ID,
      invalidQueryFile: false,
    };
  }

  const bookFromQuery = getBookById(params.get('book'));

  return {
    mode: 'library',
    queryFile: null,
    initialBookId: bookFromQuery?.id || DEFAULT_BOOK_ID,
    invalidQueryFile: Boolean(params.get('file')),
  };
}

function ReaderCard({
  file,
  loadError,
  preferBrowserMode,
  numPages,
  pageNumber,
  pageStyles,
  pageWidth,
  pdfModule,
  setLoadError,
  setNumPages,
  setPageNumber,
}) {
  const Document = pdfModule?.Document;
  const Page = pdfModule?.Page;

  return (
    <>
      <div className={pageStyles.documentWrap}>
        {preferBrowserMode || loadError ? (
          <div className={pageStyles.status}>Opening PDF…</div>
        ) : !Document || !Page ? (
          <div className={pageStyles.status}>Loading PDF reader…</div>
        ) : (
          <Document
            file={file}
            className={pageStyles.document}
            loading={<div className={pageStyles.status}>Loading PDF…</div>}
            error={
              <div className={pageStyles.errorPanel}>
                <p className={pageStyles.errorTitle}>Unable to load this PDF inside the reader.</p>
                <p className={pageStyles.errorText}>
                  Opening the raw PDF instead.
                </p>
              </div>
            }
            onLoadSuccess={({ numPages: nextNumPages }) => {
              setNumPages(nextNumPages);
              setPageNumber(1);
              setLoadError(false);
            }}
            onLoadError={() => setLoadError(true)}
          >
            <div key={`page_${pageNumber}`} className={pageStyles.pageCanvas}>
              <Page
                pageNumber={pageNumber}
                width={pageWidth}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </div>
          </Document>
        )}
      </div>

      {loadError && (
        <div className={pageStyles.fallbackBox}>
          <p className={pageStyles.fallbackTitle}>Opening raw PDF</p>
        </div>
      )}
    </>
  );
}

export default function ResearchPaperViewer() {
  const initialReaderSource = useMemo(() => getInitialReaderSource(), []);
  const [pdfModule, setPdfModule] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageWidth, setPageWidth] = useState(860);
  const [selectedBookId, setSelectedBookId] = useState(initialReaderSource.initialBookId);
  const [loadError, setLoadError] = useState(false);
  const [invalidQueryFile] = useState(initialReaderSource.invalidQueryFile);
  const [touchStartX, setTouchStartX] = useState(null);
  const queryFile = initialReaderSource.queryFile;

  const selectedBook = useMemo(() => {
    if (queryFile) {
      return {
        id: 'custom-query-file',
        title: 'Query PDF',
        author: 'Custom Source',
        year: 'External',
        coverTone: 'coverCopper',
        file: queryFile,
        renderMode: 'paged',
        note: 'Loaded from the `file` query parameter.',
      };
    }

    return getBookById(selectedBookId) || FALLBACK_BOOK;
  }, [queryFile, selectedBookId]);

  const file = selectedBook.file;
  const preferBrowserMode = selectedBook.renderMode === 'browser';

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const mod = await import('react-pdf');
        mod.pdfjs.GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.min.mjs';
        if (!cancelled) {
          setPdfModule({
            Document: mod.Document,
            Page: mod.Page,
          });
        }
      } catch (error) {
        console.error('Failed to load react-pdf', error);
        if (!cancelled) {
          setLoadError(true);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      const viewport = window.innerWidth;
      if (viewport < 640) {
        setPageWidth(Math.max(260, viewport - 32));
        return;
      }
      if (viewport < 960) {
        setPageWidth(Math.min(820, viewport - 56));
        return;
      }
      setPageWidth(Math.min(1100, viewport - 120));
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    setPageNumber(1);
    setNumPages(null);
    setLoadError(false);
  }, [file, preferBrowserMode]);

  useEffect(() => {
    if (preferBrowserMode || loadError) {
      openRawPdf(file);
    }
  }, [file, loadError, preferBrowserMode]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setPageNumber((current) => clampPage(current - 1, numPages));
      }

      if (event.key === 'ArrowRight') {
        setPageNumber((current) => clampPage(current + 1, numPages));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [numPages]);

  return (
    <>
      {invalidQueryFile && (
        <section className={pageStyles.readerNotice}>
          <h2 className={pageStyles.helpTitle}>Invalid PDF Query</h2>
          <p className={pageStyles.helpText}>
            The `file` query parameter was present but did not point to a valid `.pdf` path, so the
            reader fell back to the default title.
          </p>
        </section>
      )}

      <section
        className={pageStyles.readerShell}
        onTouchStart={(event) => {
          setTouchStartX(event.changedTouches[0]?.clientX ?? null);
        }}
        onTouchEnd={(event) => {
          const touchEndX = event.changedTouches[0]?.clientX ?? null;
          if (touchStartX !== null && touchEndX !== null) {
            const deltaX = touchEndX - touchStartX;
            if (deltaX <= -50) {
              setPageNumber((current) => clampPage(current + 1, numPages));
            }
            if (deltaX >= 50) {
              setPageNumber((current) => clampPage(current - 1, numPages));
            }
          }
          setTouchStartX(null);
        }}
      >
        <div className={pageStyles.readerFrame}>
          <button
            type="button"
            className={`${pageStyles.readerEdgeNav} ${pageStyles.readerEdgeNavLeft}`}
            aria-label="Previous page"
            onClick={(event) => {
              event.stopPropagation();
              setPageNumber((current) => clampPage(current - 1, numPages));
            }}
          />

          <button
            type="button"
            className={`${pageStyles.readerEdgeNav} ${pageStyles.readerEdgeNavRight}`}
            aria-label="Next page"
            onClick={(event) => {
              event.stopPropagation();
              setPageNumber((current) => clampPage(current + 1, numPages));
            }}
          />

          <ReaderCard
            file={file}
            loadError={loadError}
            preferBrowserMode={preferBrowserMode}
            numPages={numPages}
            pageNumber={pageNumber}
            pageStyles={pageStyles}
            pageWidth={pageWidth}
            pdfModule={pdfModule}
            setLoadError={setLoadError}
            setNumPages={setNumPages}
            setPageNumber={setPageNumber}
          />

          <div className={pageStyles.readerProgress}>
            {preferBrowserMode || loadError ? (
              <span className={pageStyles.readerProgressMuted}>Opening PDF</span>
            ) : numPages ? (
              <span>
                Page {pageNumber} / {numPages}
              </span>
            ) : (
              <span className={pageStyles.readerProgressMuted}>Loading pages</span>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
