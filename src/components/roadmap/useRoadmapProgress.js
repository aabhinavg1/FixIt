import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'cs-roadmap-progress-v1';

function buildDefaultState(phases, prerequisites) {
  return {
    phases: Object.fromEntries(phases.map((phase) => [phase.id, false])),
    prerequisites: Object.fromEntries(prerequisites.map((item) => [item.id, false])),
  };
}

export default function useRoadmapProgress(phases, prerequisites) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [state, setState] = useState(() => buildDefaultState(phases, prerequisites));

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setState({
          phases: {
            ...buildDefaultState(phases, prerequisites).phases,
            ...parsed.phases,
          },
          prerequisites: {
            ...buildDefaultState(phases, prerequisites).prerequisites,
            ...parsed.prerequisites,
          },
        });
      }
    } catch {
      setState(buildDefaultState(phases, prerequisites));
    }

    setIsHydrated(true);
  }, [phases, prerequisites]);

  useEffect(() => {
    if (!isHydrated || typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [isHydrated, state]);

  const readiness = useMemo(() => {
    const completed = Object.values(state.prerequisites).filter(Boolean).length;
    return Math.round((completed / prerequisites.length) * 100);
  }, [prerequisites.length, state.prerequisites]);

  const completion = useMemo(() => {
    const completed = Object.values(state.phases).filter(Boolean).length;
    return Math.round((completed / phases.length) * 100);
  }, [phases.length, state.phases]);

  const completedPhaseCount = useMemo(
    () => Object.values(state.phases).filter(Boolean).length,
    [state.phases],
  );

  const togglePhase = (id) => {
    let nextValue = false;
    setState((current) => {
      nextValue = !current.phases[id];
      return {
        ...current,
        phases: {
          ...current.phases,
          [id]: nextValue,
        },
      };
    });
    return nextValue;
  };

  const togglePrerequisite = (id) => {
    setState((current) => ({
      ...current,
      prerequisites: {
        ...current.prerequisites,
        [id]: !current.prerequisites[id],
      },
    }));
  };

  const reset = () => {
    const nextState = buildDefaultState(phases, prerequisites);
    setState(nextState);
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  };

  return {
    isHydrated,
    readiness,
    completion,
    completedPhaseCount,
    phaseState: state.phases,
    prerequisiteState: state.prerequisites,
    togglePhase,
    togglePrerequisite,
    reset,
  };
}
