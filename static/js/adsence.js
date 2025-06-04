import React, { useEffect, useRef, useState } from 'react';

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
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    if (!adRef.current) return;  // Ensure that the element is available
    let retryCount = 0;
    const maxRetries = 10;

    const loadAd = () => {
      const width = adRef.current.offsetWidth;

      if (width === 0) {
        adRef.current.style.width = '300px'; // Assigning a default width
      }

      if (width === 0 && retryCount < maxRetries) {
        retryCount++;
        setTimeout(loadAd, 300 * retryCount); // Exponential backoff
        return;
      }

      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setAdLoaded(true);  // Mark ad as loaded
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
    <div>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', textAlign: 'center' }}
        data-ad-layout={layout}
        data-ad-format={adFormat}
        data-ad-client="ca-pub-4507855210682789"
        data-ad-slot={adSlot}
      />
      {!adLoaded && <p>Loading ad...</p>}
    </div>
  );
}
