import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccess(true);
        setEmail('');
        setTimeout(() => setSuccess(false), 5000); // Auto-clear success message after 5 seconds
      } else {
        const data = await response.json();
        setError(data.message || 'Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Subscribe to our Newsletter</h2>

      {success && (
        <div style={{ 
          backgroundColor: '#e0f7fa', 
          color: '#00796b', 
          padding: '10px', 
          borderRadius: '5px', 
          border: '1px solid #00796b', 
          marginTop: '15px' 
        }}>
          <strong>Subscription Successful!</strong>
          <p>
            Thank you for subscribing! A verification link has been sent to your email address. 
            Please check your inbox and verify your subscription to stay updated.
          </p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={loading} // Disable input while loading
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default NewsletterSubscription;
