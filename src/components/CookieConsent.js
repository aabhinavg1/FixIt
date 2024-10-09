import React, { useState, useEffect } from "react";
import styles from './CookieConsent.module.css'; // Import the CSS module for styles

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if consent has already been given
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true"); // Store consent in localStorage
    setIsVisible(false); // Hide the consent popup
  };

  return (
    isVisible && (
      <div className={styles.cookieConsent}>
        <p>
          This website uses cookies to enhance the user experience. By
          continuing to browse, you consent to our use of cookies.
        </p>
        <button onClick={handleAccept} className={styles.acceptButton}>
          Accept
        </button>
      </div>
    )
  );
};

export default CookieConsent;
