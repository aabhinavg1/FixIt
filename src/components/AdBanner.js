import React, { useEffect, useRef } from 'react';

export default function AdBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    const scriptId = 'adsbygoogle-js';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.setAttribute('data-ad-client', 'ca-pub-4507855210682789');
      script.id = scriptId;
      document.head.appendChild(script);
    }

    // Always attempt to push after mount
    const pushAd = () => {
      try {
        if (window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.error('adsbygoogle push error:', e);
      }
    };

    // Wait for script to be loaded before push
    const interval = setInterval(() => {
      if (window.adsbygoogle && adRef.current) {
        pushAd();
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center', minHeight: '90px' }}
      data-ad-client="ca-pub-4507855210682789"
      data-ad-slot="6970627632"
      data-ad-format="fluid"
      data-ad-layout="in-article"
    />
  );
}
