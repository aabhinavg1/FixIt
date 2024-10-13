import React, { useEffect } from 'react';
import { Redirect } from '@docusaurus/router';

export default function NotFound() {
  // Redirect to localhost:3000 after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'http://localhost:3000';
    }, 3000); // Delay for 3 seconds before redirecting

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Page Not Found</h1>
      <p>We could not find what you were looking for.</p>
      <p>You will be redirected to the homepage in 3 seconds...</p>
    </div>
  );
}
