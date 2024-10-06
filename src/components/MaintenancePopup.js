// src/components/MaintenancePopup.js
import React, { useState } from 'react';
import styles from './MaintenancePopup.module.css'; // Import your CSS module

const MaintenancePopup = () => {
  const [isVisible, setIsVisible] = useState(true); // State to control popup visibility

  const handleClose = () => {
    setIsVisible(false); // Close the popup
  };

  if (!isVisible) return null; // Do not render the popup if not visible

  return (
    <div className={styles.popup}>
      <span className={styles.notice}>
        🚧 Maintenance Notice: This website is currently under maintenance. Feel free to contribute and share your opinions!
      </span>
      <button onClick={handleClose} className={styles.closeButton}>Close</button>
    </div>
  );
};

export default MaintenancePopup;
