import React, { useState } from 'react';
import styles from './NewsletterModal.module.css'; // Ensure the correct path to your CSS module

const NewsletterModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Updated URL to point to the correct Netlify function
      const response = await fetch('https://www.compilersutra.com/.netlify/functions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccess(true); // Set success to true to show verification message
        setEmail(''); // Clear the input field
      } else {
        const data = await response.json();
        setError(data.message || 'Something went wrong, please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">&times;</button>
        <h2>Subscribe to our Newsletter</h2>

        {/* Success Message */}
        {success && (
          <p className={styles.successMessage}>
            Thank you for subscribing! A verification link has been sent to your email address. 
            Please check your inbox and verify your subscription.
          </p>
        )}

        {/* Error Message */}
        {error && <p className={styles.errorMessage}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading || success} // Disable input during loading or after successful subscription
            aria-label="Email input"
          />
          <button type="submit" disabled={loading || success}>
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterModal;
