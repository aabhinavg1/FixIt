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
  slot = "8480817097", // ✅ default slot (can override via props)
  layout = "in-article",
  format = "fluid",
  style = { display: "block", textAlign: "center", minHeight: "120px" }
}) {
  const adRef = useRef(null);

  useEffect(() => {
    const clientId = "ca-pub-3213090090375658"; // ✅ your AdSense ID
    const scriptSrc = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
    let retryCount = 0;
    const maxRetries = 5;
    let timeoutId = null;

    const loadAd = () => {
      if (!adRef.current) return;

      const width = adRef.current.offsetWidth;
      console.log(`[AdBanner] Attempt ${retryCount + 1}: width =`, width);

      if (width === 0 && retryCount < maxRetries) {
        retryCount++;
        const delay = Math.min(500 * Math.pow(2, retryCount), 5000); // capped exponential backoff
        console.log(`[AdBanner] Retrying in ${delay}ms (retry ${retryCount}/${maxRetries})...`);
        timeoutId = setTimeout(loadAd, delay);
        return;
      }

      try {
        console.log("[AdBanner] Pushing ad to adsbygoogle...");
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        console.log("[AdBanner] ✅ Ad loaded successfully!");
      } catch (e) {
        console.error("[AdBanner] ❌ AdSense error:", e);
      }
    };

    const loadScriptOnce = () => {
      if (window.adsbygoogleLoaded) {
        console.log("[AdBanner] Script already loaded, injecting ad...");
        loadAd();
        return;
      }

      const existingScript = document.querySelector(
        `script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]`
      );

      if (existingScript) {
        console.log("[AdBanner] Script found in DOM, waiting for load...");
        existingScript.addEventListener("load", loadAd);
        return;
      }

      console.log("[AdBanner] Injecting AdSense script...");
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        console.log("[AdBanner] ✅ Script loaded, now loading ad...");
        window.adsbygoogleLoaded = true;
        loadAd();
      };
      document.head.appendChild(script);
    };

    loadScriptOnce();

    // ✅ Cleanup on unmount
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        console.log("[AdBanner] Cleanup: cleared retry timeout.");
      }
    };
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-3213090090375658"
      data-ad-slot={slot}
      data-ad-layout={layout}
      data-ad-format={format}
    />
  );
}

