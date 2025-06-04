import React, { useEffect, useRef, useState } from 'react';

export default function AdBanner() {
  const adRef = useRef(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 5;

  useEffect(() => {
    const loadAd = () => {
      try {
        // Check if container is visible and has width
        if (!adRef.current || adRef.current.offsetWidth === 0) {
          if (retryCount < maxRetries) {
            setTimeout(() => {
              setRetryCount(prev => prev + 1);
              loadAd();
            }, 500);
          } else {
            console.warn('Ad container not visible after maximum retries');
          }
          return;
        }

        // Only push if adsbygoogle is loaded and container is ready
        if (window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.error('AdSense error:', e);
      }
    };

    // Only inject script if not already loaded
    if (!window.adsbygoogleLoaded) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4507855210682789';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        window.adsbygoogleLoaded = true;
        loadAd();
      };
      script.onerror = () => {
        console.error('Failed to load AdSense script');
      };
      document.head.appendChild(script);
    } else {
      loadAd();
    }

    // Cleanup function
    return () => {
      if (adRef.current) {
        // Remove any existing ad content
        adRef.current.innerHTML = '';
      }
    };
  }, [retryCount]);

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: 728, 
      margin: '0 auto',
      minHeight: 90, // Minimum height for ad container
      overflow: 'hidden' // Prevent layout shifts
    }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ 
          display: 'block',
          width: '100%',
          height: 'auto',
          minHeight: 90,
          textAlign: 'center'
        }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-4507855210682789"
        data-ad-slot="4245371887"
      />
    </div>
  );
}