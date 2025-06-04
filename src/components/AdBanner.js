import React, { useEffect } from 'react';

export default function AdBanner() {
  useEffect(() => {
    // Load AdSense script only once
    if (!window.adsbygoogle) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4507855210682789';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);

      script.onload = () => {
        // Push the ad after the script has loaded
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error('AdSense error:', e);
        }
      };
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ 
        display: 'block', 
        width: '100%', 
        minHeight: '90px', 
        textAlign: 'center' 
      }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-4507855210682789"
      data-ad-slot="4245371887"
    />
  );
}
