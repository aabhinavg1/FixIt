import { useEffect } from 'react';

function setVars(node, x, y) {
  node.style.setProperty('--spot-x', `${x}px`);
  node.style.setProperty('--spot-y', `${y}px`);
  const rect = node.getBoundingClientRect();
  const rotateY = ((x / rect.width) - 0.5) * 4;
  const rotateX = (0.5 - y / rect.height) * 4;
  node.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
  node.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
}

export default function useMouseSpotlight(containerRef, selectors) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root || typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) {
      return undefined;
    }

    const hero = root.querySelector(selectors.hero);
    const cards = root.querySelectorAll(selectors.spotlightCard);

    const handleMove = (node) => (event) => {
      const rect = node.getBoundingClientRect();
      setVars(node, event.clientX - rect.left, event.clientY - rect.top);
    };

    const resetMove = (node) => () => {
      node.style.removeProperty('--tilt-x');
      node.style.removeProperty('--tilt-y');
    };

    const cleanups = [];

    if (hero) {
      const handler = handleMove(hero);
      const reset = resetMove(hero);
      hero.addEventListener('pointermove', handler);
      hero.addEventListener('pointerleave', reset);
      cleanups.push(() => {
        hero.removeEventListener('pointermove', handler);
        hero.removeEventListener('pointerleave', reset);
      });
    }

    cards.forEach((card) => {
      const handler = handleMove(card);
      const reset = resetMove(card);
      card.addEventListener('pointermove', handler);
      card.addEventListener('pointerleave', reset);
      cleanups.push(() => {
        card.removeEventListener('pointermove', handler);
        card.removeEventListener('pointerleave', reset);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [containerRef, selectors]);
}
