// src/components/NewsletterModal.js
import React, { useState } from 'react';
import './NewsletterModal.css';

const NewsletterModal = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Email submitted: ${email}`);

    // Replace this with your API call to store the email in your database
    // Example:
    // await fetch('/api/subscribe', {
    //   method: 'POST',
    //   body: JSON.stringify({ email }),
    //   headers: { 'Content-Type': 'application/json' },
    // });

    setEmail(''); // Clear input after submission
    onClose(); // Close the modal after submission
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterModal;
