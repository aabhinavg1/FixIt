// import React, { useEffect, useRef } from 'react';

// export default function AdBanner() {
//   const adRef = useRef(null);

//   useEffect(() => {
//     let retryCount = 0;
//     const maxRetries = 10;

//     const loadAd = () => {
//       if (!adRef.current) return;

//       const width = adRef.current.offsetWidth;

//       // If the width is zero, set a default width (e.g., 300px)
//       if (width === 0) {
//         adRef.current.style.width = '300px'; // Assigning a default width
//       }

//       // Retry loading the ad until a valid width is detected or retry count is reached
//       if (width === 0 && retryCount < maxRetries) {
//         retryCount++;
//         setTimeout(loadAd, 300 * retryCount); // exponential backoff
//         return;
//       }

//       try {
//         (window.adsbygoogle = window.adsbygoogle || []).push({});
//       } catch (e) {
//         console.error('AdSense error:', e);
//       }
//     };

//     if (!window.adsbygoogleLoaded) {
//       const script = document.createElement('script');
//       script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4507855210682789';
//       script.async = true;
//       script.crossOrigin = 'anonymous';
//       script.onload = () => {
//         window.adsbygoogleLoaded = true;
//         loadAd();
//       };
//       document.head.appendChild(script);
//     } else {
//       loadAd();
//     }
//   }, []);

//   return (
//     <ins
//       ref={adRef}
//       className="adsbygoogle"
//       style={{ display: 'block', width: '100%', minHeight: '100px', textAlign: 'center' }}
//       data-ad-layout="in-article"
//       data-ad-format="fluid"
//       //data-ad-client="ca-pub-4507855210682789"
//       data-ad-client="ca-pub-3213090090375658"
//       data-ad-slot="3248053163"
//     />
//   );
// }

import React, { useEffect, useRef } from "react";

export default function AdBanner({
  slot = "8480817097",
  layout = "in-article",
  format = "fluid",
  style = {}
}) {
  const adRef = useRef(null);

  useEffect(() => {
    const clientId = "ca-pub-3213090090375658";
    const scriptSrc = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;

    // Insert script immediately if not loaded
    if (!window.adsbygoogleLoaded) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        window.adsbygoogleLoaded = true;
        pushAd();
      };
      document.head.appendChild(script);
    } else {
      pushAd();
    }

    function pushAd() {
      if (!adRef.current) return;

      // Set minimum width immediately if zero
      if (adRef.current.offsetWidth === 0) {
        adRef.current.style.width = "300px";
      }

      try {
        if (Array.isArray(window.adsbygoogle)) {
          window.adsbygoogle.push({});
        }
      } catch (e) {
        console.error("[AdBanner] AdSense error:", e);
      }
    }
  }, [slot, layout, format, style]);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center", minHeight: "120px", ...style }}
      data-ad-client="ca-pub-3213090090375658"
      data-ad-slot={slot}
      data-ad-layout={layout}
      data-ad-format={format}
    />
  );
}
