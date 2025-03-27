function addAmpAutoAds() {
    console.log("Adding AMP Auto Ads..."); // Debugging line
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("custom-element", "amp-auto-ads");
    script.src = "https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js";
    document.head.appendChild(script);

    script.onload = () => {
        console.log("AMP Auto Ads script loaded successfully.");
        const ampAutoAds = document.createElement("amp-auto-ads");
        ampAutoAds.setAttribute("type", "adsense");
        ampAutoAds.setAttribute("data-ad-client", "ca-pub-4507855210682789");
        document.body.appendChild(ampAutoAds);
        console.log("AMP Auto Ads injected.");
    };

    script.onerror = () => {
        console.error("Failed to load AMP Auto Ads script.");
    };
}

// Run the function when window loads
if (typeof window !== "undefined") {
    addAmpAutoAds();
}
