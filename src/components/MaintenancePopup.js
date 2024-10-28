// src/components/MaintenanceNote.js
import React from 'react';
import styles from './MaintenancePopup.module.css'; // Import your CSS module

const MaintenanceNote = () => {
  return (
    <div className={styles.note}>
      <span className={styles.notice}>
        🚧 Maintenance Notice: This website is currently under maintenance. Feel free to contribute and share your opinions!
      </span>
    </div>
  );
};

export default MaintenanceNote;
