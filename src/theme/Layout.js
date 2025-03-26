import React, { useEffect } from "react";
import OriginalLayout from "@theme-original/Layout";

export default function Layout(props) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if AMP script is already present
      if (!document.querySelector('script[src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"]')) {
        const script = document.createElement("script");
        script.async = true;
        script.setAttribute("custom-element", "amp-auto-ads");
        script.src = "https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js";
        document.head.appendChild(script);
      }

      // Add AMP Auto Ads only if not already present
      if (!document.querySelector("amp-auto-ads")) {
        const ampAutoAds = document.createElement("amp-auto-ads");
        ampAutoAds.setAttribute("type", "adsense");
        ampAutoAds.setAttribute("data-ad-client", "ca-pub-4507855210682789");
        document.body.appendChild(ampAutoAds);
      }
    }
  }, []);

  return <OriginalLayout {...props} />;
}
