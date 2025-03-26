import React, { useEffect } from "react";
import { useLocation } from "@docusaurus/router";
import OriginalLayout from "@theme-original/Layout";

function addAmpAutoAds() {
  if (document.querySelector('script[src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"]')) {
    return; // Prevent duplicate script loading
  }

  const script = document.createElement("script");
  script.async = true;
  script.setAttribute("custom-element", "amp-auto-ads");
  script.src = "https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js";
  document.head.appendChild(script);

  const ampAutoAds = document.createElement("amp-auto-ads");
  ampAutoAds.setAttribute("type", "adsense");
  ampAutoAds.setAttribute("data-ad-client", "ca-pub-4507855210682789");
  document.body.appendChild(ampAutoAds);
}

export default function Layout(props) {
  const location = useLocation();

  useEffect(() => {
    addAmpAutoAds();
  }, [location.pathname]); // Re-run when the page changes

  return <OriginalLayout {...props} />;
}
