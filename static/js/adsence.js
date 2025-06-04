import React, { useEffect, useRef } from 'react';

const adConfig = {
  'in-article': {
    adSlot: '4245371887',
    adFormat: 'fluid',
    layout: 'in-article',
  },
  'in-feed': {
    adSlot: '4332122514',
    adFormat: 'auto',
    layout: 'in-feed',
  },
  'multiplex': {
    adSlot: '3516910857',
    adFormat: 'auto',
    layout: 'multiplex',
  }
};

export default function AdBanner({ adType = 'in-article' }) {
  const adRef = useRef(null);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 10;

    const loadAd = () => {
      if (!adRef.current) return;

      const width = adRef.current.offsetWidth;

      // If the width is zero, set a default width (e.g., 300px)
      if (width === 0) {
        adRef.current.style.width = '300px'; // Assigning a default width
      }

      // Retry loading the ad until a valid width is detected or retry count is reached
      if (width === 0 && retryCount < maxRetries) {
        retryCount++;
        setTimeout(loadAd, 300 * retryCount); // exponential backoff
        return;
      }

      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
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
      document.head.appendChild(script);
    } else {
      loadAd();
    }
  }, []);

  const { adSlot, adFormat, layout } = adConfig[adType] || adConfig['in-article'];

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: 'block', width: '100%', textAlign: 'center' }}
      data-ad-layout={layout}
      data-ad-format={adFormat}
      data-ad-client="ca-pub-4507855210682789"
      data-ad-slot={adSlot}
    />
  );
}
