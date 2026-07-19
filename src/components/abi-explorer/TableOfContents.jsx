import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Hash, ChevronRight } from 'lucide-react';
import styles from './abi.module.css';

export default function TableOfContents({ sections = [] }) {
  const [activeId, setActiveId] = useState('');
  const observerRef = useRef(null);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const visibleSections = new Map();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        let closestId = '';
        let closestDistance = Infinity;
        visibleSections.forEach((top, id) => {
          const distance = Math.abs(top);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestId = id;
          }
        });

        if (closestId) setActiveId(closestId);
      },
      { threshold: 0.3, rootMargin: '-100px 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [sections]);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (sections.length === 0) return null;

  return (
    <nav className={styles.tocNav}>
      <div className={styles.tocHeader}>
        <Hash size={14} />
        <span>On this page</span>
      </div>
      <ul className={styles.tocList}>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <button
              className={clsx(styles.tocItem, activeId === id && styles.tocItemActive)}
              onClick={() => handleClick(id)}
              type="button"
            >
              <ChevronRight size={12} className={styles.tocChevron} />
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
