(function(w, d, s, l, i) {
  var allowedHosts = new Set(['www.compilersutra.com', 'compilersutra.com']);
  var hostname = w.location && w.location.hostname;

  if (!allowedHosts.has(hostname)) {
    return;
  }

  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  var firstScript = d.getElementsByTagName(s)[0];
  var script = d.createElement(s);
  var dataLayerParam = l !== 'dataLayer' ? '&l=' + l : '';

  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dataLayerParam;
  firstScript.parentNode.insertBefore(script, firstScript);
})(window, document, 'script', 'dataLayer', 'GTM-N8G7MKF9');
