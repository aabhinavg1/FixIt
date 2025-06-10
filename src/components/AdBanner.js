import React, { useEffect, useRef } from 'react';

export default function AdBanner() {
  const adRef = useRef(null);
  const hasPushed = useRef(false);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 10;

    const loadAd = () => {
      if (!adRef.current) return;

      let width = adRef.current.offsetWidth;

      if (width === 0) {
        adRef.current.style.width = '300px';
        width = adRef.current.offsetWidth;
      }

      if (width === 0 && retryCount < maxRetries) {
        retryCount++;
        setTimeout(loadAd, 300 * retryCount);
        return;
      }

      try {
        if (!hasPushed.current) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          hasPushed.current = true;
        }
      } catch (e) {
        console.error('AdSense error:', e);
      }
    };

    if (!window.adsbygoogleLoaded) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4507855210682789';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        window.adsbygoogleLoaded = true;
        loadAd();
      };

      if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
        document.head.appendChild(script);
      }
    } else {
      loadAd();
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: 'block', width: '100%', minHeight: '100px', textAlign: 'center' }}
      data-ad-client="ca-pub-4507855210682789"
      data-ad-slot="4245371887"
      data-ad-format="fluid"
      data-ad-layout="in-article"
      data-full-width-responsive="true"
    />
  );
}
