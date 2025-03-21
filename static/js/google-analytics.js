// Ensure dataLayer exists
window.dataLayer = window.dataLayer || [];

// Define gtag function
function gtag() { 
  window.dataLayer.push(arguments); 
}

// Load Google Tag Manager with default consent settings (opt-out until user grants consent)
gtag('consent', 'default', {
  'ad_storage': 'denied',         // Deny ad-related cookies
  'analytics_storage': 'denied',  // Deny analytics cookies
  'personalization_storage': 'denied', // Deny personalized content
  'functionality_storage': 'granted', // Allow essential functionality cookies
  'security_storage': 'granted'   // Allow security-related cookies
});

// Initialize Google Analytics 4 (GA4) without auto-tracking page views
gtag('js', new Date());
gtag('config', 'G-CJDGBRKJ5W', { 'send_page_view': false });

// Function to handle user consent updates
function grantConsent() {
  gtag('consent', 'update', {
    'ad_storage': 'granted',
    'analytics_storage': 'granted',
    'personalization_storage': 'granted'
  });
}

// Example: Integrate with a cookie consent popup
document.addEventListener('DOMContentLoaded', function () {
  const consentButton = document.getElementById('acceptCookies'); // Replace with actual button ID
  if (consentButton) {
    consentButton.addEventListener('click', grantConsent);
  }
});
