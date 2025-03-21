window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Load Google Tag Manager with default consent settings (opt-out until user grants consent)
gtag('consent', 'default', {
  'ad_storage': 'denied', // Deny ad storage (e.g., cookies for ads)
  'analytics_storage': 'denied', // Deny analytics storage (e.g., GA cookies)
  'personalization_storage': 'denied', // Deny personalized content storage
  'functionality_storage': 'granted', // Allow necessary cookies
  'security_storage': 'granted' // Allow security-related cookies
});

// Initialize GA4
gtag('js', new Date());
gtag('config', 'G-CJDGBRKJ5W');

// When user accepts cookies, update consent
function grantConsent() {
  gtag('consent', 'update', {
    'ad_storage': 'granted',
    'analytics_storage': 'granted',
    'personalization_storage': 'granted'
  });
}
