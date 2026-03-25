import { useEffect, useState } from 'react';

export default function useRevealAnimations(containerRef, selectors, setActivePhaseId) {
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    const root = containerRef.current;
    if (!root || typeof window === 'undefined') {
      return undefined;
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealNodes = root.querySelectorAll(selectors.reveal);
    const phaseNodes = root.querySelectorAll(selectors.phase);

    if (reduced) {
      revealNodes.forEach((node) => node.classList.add('is-visible'));
      phaseNodes.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    );

    const phaseObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            setActivePhaseId(entry.target.getAttribute('data-phase-id'));
          }
        });
      },
      { threshold: 0.45, rootMargin: '-10% 0px -30% 0px' },
    );

    revealNodes.forEach((node) => revealObserver.observe(node));
    phaseNodes.forEach((node) => phaseObserver.observe(node));

    let rafId = 0;
    const updateTimeline = () => {
      rafId = 0;
      const timeline = root.querySelector(selectors.timeline);
      if (!timeline) {
        return;
      }
      const rect = timeline.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const total = rect.height + viewport * 0.55;
      const covered = viewport * 0.4 - rect.top;
      const progress = Math.max(0, Math.min(1, covered / total));
      setTimelineProgress(progress);
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateTimeline);
      }
    };

    updateTimeline();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      revealObserver.disconnect();
      phaseObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [containerRef, selectors, setActivePhaseId]);

  return timelineProgress;
}
