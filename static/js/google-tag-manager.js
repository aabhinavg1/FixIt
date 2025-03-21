// ✅ Ensure `dataLayer` exists
window.dataLayer = window.dataLayer || [];

// ✅ Define `gtag` function if not already defined
function gtag() {
  window.dataLayer.push(arguments);
}

// ✅ Set default consent mode **only for EEA users**
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'personalization_storage': 'denied',
  'functionality_storage': 'granted',
  'security_storage': 'granted',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'regions': ['EEA'] // ✅ Restricting consent mode **only** to EEA users
});

// ✅ Function to update consent when the user accepts cookies
function grantConsent() {
  console.log("✅ Granting consent...");

  gtag('consent', 'update', {
    'ad_storage': 'granted',
    'analytics_storage': 'granted',
    'personalization_storage': 'granted',
    'ad_user_data': 'granted',
    'ad_personalization': 'granted'
  });

  localStorage.setItem('user_consent', 'granted'); // ✅ Save user consent
}

// ✅ Function to deny consent when the user rejects cookies
function denyConsent() {
  console.log("❌ User denied consent. Keeping restricted settings.");

  gtag('consent', 'update', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'personalization_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied'
  });

  localStorage.setItem('user_consent', 'denied'); // ✅ Save user choice
}

// ✅ Function to check stored user consent and apply settings
function checkUserConsent() {
  const storedConsent = localStorage.getItem('user_consent');

  if (storedConsent === 'granted') {
    console.log("✅ User previously granted consent. Updating...");
    grantConsent();
  } else {
    console.log("⚠️ User has not granted consent. Keeping default settings.");
  }
}

// ✅ Wait for DOM content to load, then apply consent settings
document.addEventListener("DOMContentLoaded", checkUserConsent);

// ✅ Handle button click for accepting cookies
document.getElementById("acceptCookies")?.addEventListener("click", function() {
  grantConsent();
  alert("✅ Consent granted!");
});

// ✅ Handle button click for rejecting cookies
document.getElementById("rejectCookies")?.addEventListener("click", function() {
  denyConsent();
  alert("❌ Consent denied.");
});

// ✅ Load GTM **after setting consent mode**
(function(w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l !== 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'G-4PW5BRLTHD'); // ✅ Replace with your GTM ID
