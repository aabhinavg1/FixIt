import React, { useEffect, useRef } from 'react';

export default function AdBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    // Load the AdSense script if not already loaded
    if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4507855210682789';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }

    const loadAd = () => {
      try {
        // Only push if the element has non-zero width and is visible
        if (
          adRef.current &&
          adRef.current.offsetWidth > 0 &&
          adRef.current.offsetHeight > 0 &&
          window.getComputedStyle(adRef.current).display !== 'none'
        ) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } else {
          // Retry after 500ms until the element becomes visible
          setTimeout(loadAd, 500);
        }
      } catch (e) {
        console.error('AdSense error:', e);
      }
    };

    loadAd();
  }, []);

  return (
    <ins
      className="adsbygoogle"
      ref={adRef}
      style={{ display: 'block', textAlign: 'center', width: '100%' }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-4507855210682789"
      data-ad-slot="4245371887"
    />
  );
}
