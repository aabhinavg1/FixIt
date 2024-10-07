import React, { useState } from 'react';
import styles from './NewsletterModal.module.css'; // Ensure the correct path to your CSS module

const NewsletterModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(''); // New state for feedback messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(''); // Reset message on new submission

    try {
      // First, check if the email is already subscribed
      const checkResponse = await fetch('https://www.compilersutra.com/.netlify/functions/subscribers');
      
      if (!checkResponse.ok) {
        throw new Error('Failed to check subscription status.');
      }

      const data = await checkResponse.json();
      if (data.subscribers.includes(email)) {
        setMessage('You are already subscribed.'); // Set message for already subscribed
        setLoading(false); // Reset loading state
        return; // Exit early
      }

      // Proceed to save the email if not already subscribed
      const response = await fetch('https://www.compilersutra.com/.netlify/functions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Thank you for subscribing! A verification link has been sent to your email address. Please check your inbox and verify your subscription.');
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
        {message && <p className={styles.message}>{message}</p>} {/* Display message */}
      </div>
    </div>
  );
};

export default NewsletterModal;
