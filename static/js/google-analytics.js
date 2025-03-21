// ✅ Ensure dataLayer exists
window.dataLayer = window.dataLayer || [];

// ✅ Define gtag function
function gtag() { 
  window.dataLayer.push(arguments); 
}

// ✅ Default consent settings (opt-out until user grants consent) for EEA only
gtag('consent', 'default', {
  'ad_storage': 'denied',         
  'analytics_storage': 'denied',  
  'personalization_storage': 'denied', 
  'functionality_storage': 'granted', 
  'security_storage': 'granted',
  'regions': ['EEA'] // ✅ Applies only in the EEA region
});

// ✅ Initialize Google Analytics 4 (GA4) without auto-tracking page views
gtag('js', new Date());
gtag('config', 'G-CJDGBRKJ5W', { 'send_page_view': false }); // Replace with your GA4 ID

// ✅ Function to handle user consent updates
function grantConsent() {
  console.log("✅ Consent granted by user");

  gtag('consent', 'update', {
    'ad_storage': 'granted',
    'analytics_storage': 'granted',
    'personalization_storage': 'granted'
  });

  // ✅ Enable Google Analytics tracking after consent is granted
  gtag('config', 'G-CJDGBRKJ5W'); // Ensure tracking starts only after consent
}

// ✅ Example: Integrate with a cookie consent popup
document.addEventListener('DOMContentLoaded', function () {
  const consentButton = document.getElementById('acceptCookies'); // Replace with actual button ID
  if (consentButton) {
    consentButton.addEventListener('click', function () {
      localStorage.setItem("user_consent", "granted");
      grantConsent();
    });
  }

  // ✅ Load previous consent state
  if (localStorage.getItem("user_consent") === "granted") {
    grantConsent();
  }
});

// ✅ Load GTM only after setting consent mode
(function(w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l !== 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'G-CJDGBRKJ5W'); // Replace with your GTM/GA4 ID
