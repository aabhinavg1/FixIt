// Load Google AdSense script dynamically
//New In-feed Ad

(function() {
    var adScript = document.createElement("script");
    adScript.async = true;
    adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4507855210682789";
    adScript.crossOrigin = "anonymous";
    document.head.appendChild(adScript);
})();

// Function to display Google AdSense ad
function loadAdSense() {
    var adContainer = document.createElement("ins");
    adContainer.className = "adsbygoogle";
    adContainer.style.display = "block";
    adContainer.setAttribute("data-ad-format", "fluid");
    adContainer.setAttribute("data-ad-layout-key", "-fb+5w+4e-db+86");
    adContainer.setAttribute("data-ad-client", "ca-pub-4507855210682789");
    adContainer.setAttribute("data-ad-slot", "4332122514");

    // Append ad to the body (or any specific container)
    document.body.appendChild(adContainer);

    // Load ads
    (adsbygoogle = window.adsbygoogle || []).push({});
}

// Run ad loading after the page loads
window.onload = function() {
    loadAdSense();
};