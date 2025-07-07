import React, { useEffect } from 'react';

export default function InfolinksScript() {
  useEffect(() => {
    const scriptVar = document.createElement('script');
    scriptVar.type = 'text/javascript';
    scriptVar.innerHTML = 'var infolinks_pid = 3438019; var infolinks_wsid = 0;';
    document.body.appendChild(scriptVar);

    const scriptSrc = document.createElement('script');
    scriptSrc.src = '//resources.infolinks.com/js/infolinks_main.js';
    scriptSrc.type = 'text/javascript';
    scriptSrc.async = true;
    document.body.appendChild(scriptSrc);

    return () => {
      // Optional cleanup
      document.body.removeChild(scriptVar);
      document.body.removeChild(scriptSrc);
    };
  }, []);

  return null;
}
