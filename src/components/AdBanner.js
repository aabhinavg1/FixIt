import React, { useEffect, useRef } from 'react';

const ADSENSE_SRC =
  'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3213090090375658';
const ADSENSE_SRC_PREFIX =
  'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

function ensureAdsenseScript() {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  if (window.adsbygoogleLoaded) {
    return Promise.resolve();
  }

  const existing = document.querySelector(
    `script[src="${ADSENSE_SRC}"], script[src^="${ADSENSE_SRC_PREFIX}"]`
  );
  if (existing) {
    return new Promise((resolve) => {
      if (window.adsbygoogleLoaded) {
        resolve();
        return;
      }
      existing.addEventListener('load', () => {
        window.adsbygoogleLoaded = true;
        resolve();
      }, { once: true });
      existing.addEventListener('error', resolve, { once: true });
    });
  }

  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = ADSENSE_SRC;
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      window.adsbygoogleLoaded = true;
      resolve();
    };
    script.onerror = resolve;
    document.head.appendChild(script);
  });
}

export default function AdBanner({
  slot = '5928991162',
  format = 'fluid',
  layout = 'in-article',
  className = '',
  minHeight = 220,
}) {
  const adRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const node = adRef.current;
    if (!node) {
      return undefined;
    }

    let cancelled = false;
    let observer;
    let retryTimer;
    let visibilityHandler;

    const runWhenVisible = (callback) => {
      if (document.visibilityState === 'visible') {
        callback();
        return;
      }

      visibilityHandler = () => {
        if (document.visibilityState === 'visible') {
          document.removeEventListener('visibilitychange', visibilityHandler);
          visibilityHandler = undefined;
          callback();
        }
      };

      document.addEventListener('visibilitychange', visibilityHandler, {
        once: true,
      });
    };

    const initializeAd = async () => {
      if (!node || cancelled || node.dataset.adInitialized === 'true') {
        return;
      }

      await ensureAdsenseScript();

      const pushAd = () => {
        if (!node || cancelled || node.dataset.adInitialized === 'true') {
          return;
        }

        if (node.offsetWidth === 0) {
          retryTimer = window.setTimeout(pushAd, 250);
          return;
        }

        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          node.dataset.adInitialized = 'true';
          node.parentElement?.setAttribute('data-ad-status', 'ready');
        } catch (error) {
          const message = String(error?.message || error);
          if (message.toLowerCase().includes('already have ads')) {
            node.dataset.adInitialized = 'true';
            node.parentElement?.setAttribute('data-ad-status', 'ready');
            return;
          }
          retryTimer = window.setTimeout(pushAd, 500);
        }
      };

      const idleRunner =
        typeof window.requestIdleCallback === 'function'
          ? window.requestIdleCallback
          : (cb) => window.setTimeout(cb, 1);

      idleRunner(() => runWhenVisible(pushAd));
    };

    if ('IntersectionObserver' in window) {
      observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              observer.disconnect();
              initializeAd();
            }
          });
        },
        { rootMargin: '300px 0px' }
      );

      observer.observe(node);
    } else {
      initializeAd();
    }

    return () => {
      cancelled = true;
      if (observer) {
        observer.disconnect();
      }
      if (visibilityHandler) {
        document.removeEventListener('visibilitychange', visibilityHandler);
      }
      if (retryTimer) {
        window.clearTimeout(retryTimer);
      }
    };
  }, []);

  return (
    <div
      className={`cs-ad-slot ${className}`.trim()}
      aria-label="Advertisement"
      data-ad-status="loading"
      style={{ '--cs-ad-min-height': `${minHeight}px` }}
    >
      <span className="cs-ad-slot__label">Advertisement</span>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-layout={layout}
        data-ad-format={format}
        data-ad-client="ca-pub-3213090090375658"
        data-ad-slot={slot}
        data-full-width-responsive="true"
      />
    </div>
  );
}
