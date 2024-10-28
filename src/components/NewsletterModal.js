import React, { useState } from 'react';
import styles from './NewsletterModal.module.css'; // Ensure correct path to CSS

const NewsletterModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(''); // Feedback messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(''); // Reset message

    try {
      // Check if email is already subscribed
      const checkResponse = await fetch('https://compilersutraserver.glitch.me/subscribers');
      if (!checkResponse.ok) throw new Error('Failed to check subscription status.');

      const data = await checkResponse.json();
      if (data.subscribers.includes(email)) {
        setMessage('You are already subscribed.');
        setLoading(false);
        return;
      }

      // Subscribe if not already subscribed
      const response = await fetch('https://www.compilersutra.com/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Thank you! Please check your email to verify your subscription.');
        setEmail('');
        onClose(); // Close modal after success
      } else {
        alert('Something went wrong, please try again.');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <h2>Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
            disabled={loading}
          />
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

export default NewsletterModal;
