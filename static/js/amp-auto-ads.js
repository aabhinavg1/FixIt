export function addAmpAutoAds() {
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
  
  if (typeof window !== "undefined") {
    addAmpAutoAds();
  }
  