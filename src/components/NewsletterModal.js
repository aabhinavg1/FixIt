// src/components/NewsletterModal.js
import React, { useState } from 'react';
import './NewsletterModal.css';

const NewsletterModal = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Email submitted: ${email}`);

    try {
      const response = await fetch('/.netlify/functions/send-email', { // Update to point to the serverless function
        method: 'POST',
        body: JSON.stringify({ email }), // Send email in request body
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      console.log(result.message); // Log success message from server
      setEmail(''); // Clear input after submission
      onClose(); // Close the modal after submission
    } catch (error) {
      console.error('Error sending email:', error);
    }
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
