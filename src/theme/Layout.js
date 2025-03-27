import React, { useEffect } from "react";
import OriginalLayout from "@theme-original/Layout";
import { useLocation } from "@docusaurus/router"; // Import for route changes

export default function Layout(props) {
  const location = useLocation(); // Detect page changes

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

      // Remove existing AMP ads before adding new ones to prevent duplicates
      document.querySelectorAll("amp-auto-ads").forEach((ad) => ad.remove());

      // Add AMP Auto Ads
      const ampAutoAds = document.createElement("amp-auto-ads");
      ampAutoAds.setAttribute("type", "adsense");
      ampAutoAds.setAttribute("data-ad-client", "ca-pub-4507855210682789");
      document.body.appendChild(ampAutoAds);
    }
  }, [location.pathname]); // Runs effect on every page change

  return <OriginalLayout {...props} />;
}
