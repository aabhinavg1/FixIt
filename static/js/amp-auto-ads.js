function addAmpAutoAds() {
    console.log("Adding AMP Auto Ads..."); // Debugging line

    // Check if parent element has a valid width before proceeding
    const parentElement = document.body;  // You can specify a different container here
    const parentWidth = parentElement.offsetWidth;

    if (parentWidth <= 0) {
        console.error("Parent element has no valid width. AMP Auto Ads will not be injected.");
        return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("custom-element", "amp-auto-ads");
    script.src = "https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js";
    document.head.appendChild(script);

    script.onload = () => {
        console.log("AMP Auto Ads script loaded successfully.");
        
        // Creating the AMP Auto Ads element
        const ampAutoAds = document.createElement("amp-auto-ads");
        ampAutoAds.setAttribute("type", "adsense");
        //ampAutoAds.setAttribute("data-ad-client", "ca-pub-4507855210682789");
        ampAutoAds.setAttribute("data-ad-client", "ca-pub-3213090090375658")
        // Append to the body or any other container
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
