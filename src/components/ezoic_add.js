import React, { useEffect } from 'react';

export default function EzoicAd({ id = 101 }) {
  useEffect(() => {
    if (typeof ezstandalone !== 'undefined') {
      ezstandalone.cmd = ezstandalone.cmd || [];
      ezstandalone.cmd.push(() => {
        ezstandalone.showAds(id);
      });
    }
  }, [id]);

  return <div id={`ezoic-pub-ad-placeholder-${id}`} />;
}