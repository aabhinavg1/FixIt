import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

const ALLOWED_HOSTS = new Set(['www.compilersutra.com', 'compilersutra.com']);
const GA_MEASUREMENT_ID = 'G-4PW5BRLTHD';
const GA_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

export default function GoogleAnalyticsScript() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return undefined;
    }

    if (!ALLOWED_HOSTS.has(window.location.hostname)) {
      return undefined;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments);
      };

    if (!document.querySelector(`script[src="${GA_SRC}"]`)) {
      const script = document.createElement('script');
      script.async = true;
      script.src = GA_SRC;
      document.head.appendChild(script);
    }

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: false,
    });

    return undefined;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    if (!ALLOWED_HOSTS.has(window.location.hostname)) {
      return undefined;
    }

    if (typeof window.gtag !== 'function') {
      return undefined;
    }

    window.gtag('event', 'page_view', {
      page_path: location.pathname,
      page_location: window.location.href,
      page_title: document.title || undefined,
    });

    return undefined;
  }, [location.pathname]);

  return null;
}
