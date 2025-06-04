import React, { useEffect, useRef } from 'react';

export default function AdBanner() {
  const adRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Ensure we're in the browser
    if (typeof window === 'undefined') return;

    // Inject AdSense script only once
    if (!window.adsbygoogleLoaded) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4507855210682789';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        window.adsbygoogleLoaded = true;
        console.info('AdSense script loaded.');
      };
      script.onerror = () => {
        console.error('Failed to load AdSense script');
      };
      document.head.appendChild(script);
    }

    // Load ad when visible using IntersectionObserver
    const loadAdWhenVisible = (entries) => {
      const entry = entries[0];
      const adContainer = adRef.current;

      if (!adContainer) return;

      if (entry.isIntersecting) {
        try {
          const alreadyRendered = adContainer.getAttribute('data-adsbygoogle-status');
          if (!alreadyRendered) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            console.info('Ad pushed into view.');
          } else {
            console.warn('Ad already rendered. Skipping push.');
          }
        } catch (error) {
          console.error('AdSense error:', error);
        }
      }
    };

    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(loadAdWhenVisible, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      });

      if (adRef.current) {
        observerRef.current.observe(adRef.current);
      }
    } else {
      // Fallback for old browsers
      console.warn('IntersectionObserver not supported, loading ad immediately.');
      try {
        if (adRef.current && !adRef.current.getAttribute('data-adsbygoogle-status')) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }

    // Cleanup observer
    return () => {
      if (observerRef.current && adRef.current) {
        observerRef.current.unobserve(adRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 728,
        margin: '0 auto',
        minHeight: 90,
        overflow: 'hidden',
        textAlign: 'center'
      }}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          minHeight: 90,
        }}
        data-ad-client="ca-pub-4507855210682789"
        data-ad-slot="4245371887"
        data-ad-format="fluid"
        data-ad-layout="in-article"
      />
    </div>
  );
}
