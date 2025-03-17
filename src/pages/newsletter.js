import React from 'react';
import NewsletterModal from './newsletter_modal_updated/NewsletterModal'; // Import your modal

const Newsletter = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Subscribe to Our Newsletter</h1>
      <NewsletterModal onClose={() => {}} />
    </div>
  );
};

export default Newsletter;
