(function(w, d) {
  var allowedHosts = new Set(['www.compilersutra.com', 'compilersutra.com']);
  var hostname = w.location && w.location.hostname;

  if (!allowedHosts.has(hostname)) {
    return;
  }

  w.dataLayer = w.dataLayer || [];
  w.gtag = w.gtag || function() {
    w.dataLayer.push(arguments);
  };

  var analyticsScript = d.createElement('script');
  analyticsScript.async = true;
  analyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-CJDGBRKJ5W';
  d.head.appendChild(analyticsScript);

  w.gtag('js', new Date());
  w.gtag('config', 'G-CJDGBRKJ5W');
  w.gtag('config', 'G-4PW5BRLTHD');
})(window, document);
