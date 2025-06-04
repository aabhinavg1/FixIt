import React, { useEffect, useRef } from 'react';

export default function AdBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    // Ensure the script is only added once
    if (typeof window === 'undefined') return;  // Check if we're in the browser

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

    // Add the ad slot once the script is loaded
    if (adRef.current && !adRef.current.hasAttribute('data-adsbygoogle-status')) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      adRef.current.setAttribute('data-adsbygoogle-status', 'rendered');
    }

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
