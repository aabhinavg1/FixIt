import React, { useEffect, useRef } from 'react';

export default function AdBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    const loadAd = () => {
      try {
        if (window.adsbygoogle && adRef.current) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.error('AdSense error:', e);
      }
    };

    // Inject AdSense script only once
    if (!window.adsbygoogleLoaded) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4507855210682789';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        window.adsbygoogleLoaded = true;
        loadAd(); // Push after script loads
      };
      document.head.appendChild(script);
    } else {
      loadAd(); // Script already loaded, push immediately
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: 'block', width: '100%', textAlign: 'center' }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-4507855210682789"
      data-ad-slot="4245371887"
    />
  );
}
