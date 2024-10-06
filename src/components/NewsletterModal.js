import React, { useState } from 'react';
import styles from './NewsletterModal.module.css'; // Ensure the correct path to your CSS module

const NewsletterModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Update the fetch URL to use the correct Netlify function endpoint
      const response = await fetch('https://www.compilersutra.com/.netlify/functions/subscribe', { // Adjusted endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Thanks you for subscribing! A verification link has been sent to your email address. Please check your inbox and verify your subscription');
        setEmail(''); // Clear the input field
        onClose(); // Close the modal after successful submission
      } else {
        alert('Something went wrong, please try again.');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <h2>Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterModal;
