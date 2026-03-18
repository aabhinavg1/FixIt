import React, { useState, useEffect } from "react";
import styles from "./FloatingSubscribe.module.css";

export default function FloatingSubscribe() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={() => setVisible(false)}>
        ✕
      </button>

      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>🚀 Learn Compilers & GPU</h4>
          <p className={styles.desc}>Join CompilerSutra on YouTube</p>
        </div>

        <a
          href="https://youtube.com/@compilersutra"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          ▶ Subscribe
        </a>
      </div>
    </div>
  );
}