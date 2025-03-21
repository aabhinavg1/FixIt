(function(w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l !== 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'G-4PW5BRLTHD');

// Ensure dataLayer exists
window.dataLayer = window.dataLayer || [];

// Define gtag function if not already defined
function gtag() {
  window.dataLayer.push(arguments);
}

// ✅ Set default consent mode (deny analytics & ads until user accepts)
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'personalization_storage': 'denied',
  'functionality_storage': 'granted',
  'security_storage': 'granted',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'regions': ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE']
});

// ✅ Initialize Google Analytics (but prevent auto page view tracking)
gtag('js', new Date());
gtag('config', 'G-4PW5BRLTHD', { 'send_page_view': false });

// ✅ Function to update consent when user accepts
function grantConsent() {
  console.log("Granting consent...");
  gtag('consent', 'update', {
    'ad_storage': 'granted',
    'analytics_storage': 'granted',
    'personalization_storage': 'granted',
    'ad_user_data': 'granted',
    'ad_personalization': 'granted'
  });
  localStorage.setItem('user_consent', 'granted'); // Save user consent
}

// ✅ Function to check user's consent and apply changes
function checkUserConsent() {
  if (localStorage.getItem('user_consent') === 'granted') {
    console.log("User has already granted consent. Updating...");
    grantConsent();
  } else {
    console.log("User consent not granted. Default settings applied.");
  }
}

// ✅ Run the check on page load
document.addEventListener("DOMContentLoaded", checkUserConsent);

// ✅ Optional: Add a button to manually accept cookies (example for testing)
document.getElementById("acceptCookies")?.addEventListener("click", function() {
  grantConsent();
  alert("Consent granted!");
});
