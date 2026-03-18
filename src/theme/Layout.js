import React, { useEffect } from "react";
import OriginalLayout from "@theme-original/Layout";
import { useLocation } from "@docusaurus/router";
import FloatingSubscribe from "@site/src/components/FloatingSubscribe"; // ✅ ADD THIS

export default function Layout(props) {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // ✅ Load AMP script once
      if (
        !document.querySelector(
          'script[src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"]'
        )
      ) {
        const script = document.createElement("script");
        script.async = true;
        script.setAttribute("custom-element", "amp-auto-ads");
        script.src =
          "https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js";
        document.head.appendChild(script);
      }

      // ✅ Remove old ads (avoid duplicates)
      document.querySelectorAll("amp-auto-ads").forEach((ad) => ad.remove());

      // ✅ Add AMP Auto Ads
      const ampAutoAds = document.createElement("amp-auto-ads");
      ampAutoAds.setAttribute("type", "adsense");
      ampAutoAds.setAttribute("data-ad-client", "ca-pub-4507855210682789");
      document.body.appendChild(ampAutoAds);
    }
  }, [location.pathname]);

  return (
    <>
      <OriginalLayout {...props} />
      
      {/* 🔥 GLOBAL FLOATING COMPONENT */}
      <FloatingSubscribe />
    </>
  );
}