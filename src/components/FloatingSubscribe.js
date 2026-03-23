import React, { useState, useEffect } from "react";
import styles from "./FloatingSubscribe.module.css";

const DISMISS_KEY = "compilersutra-floating-subscribe-dismissed";
const DISMISS_TTL_MS = 1000 * 60 * 60 * 24 * 7;

export default function FloatingSubscribe() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const dismissedAt = Number(window.localStorage.getItem(DISMISS_KEY) || 0);
    if (dismissedAt && Date.now() - dismissedAt < DISMISS_TTL_MS) {
      return undefined;
    }

    let timer;
    let shown = false;

    const maybeShow = () => {
      if (shown) {
        return;
      }

      const doc = document.documentElement;
      const scrollable = Math.max(doc.scrollHeight - window.innerHeight, 1);
      const progress = window.scrollY / scrollable;

      if (progress >= 0.35) {
        shown = true;
        setVisible(true);
        window.removeEventListener("scroll", maybeShow);
      }
    };

    timer = setTimeout(() => {
      window.addEventListener("scroll", maybeShow, { passive: true });
      maybeShow();
    }, 8000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", maybeShow);
    };
  }, []);

  const handleClose = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.container}>
      <button
        className={styles.close}
        onClick={handleClose}
        aria-label="Close subscription prompt"
      >
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
