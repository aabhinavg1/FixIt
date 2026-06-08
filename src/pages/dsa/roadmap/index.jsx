import React from 'react';
import Link from '@docusaurus/Link';
import { FaArrowRight } from 'react-icons/fa';
import DsaShell from '@site/src/components/dsa/DsaShell';
import DsaPageFrame from '@site/src/components/dsa/DsaPageFrame';
import DsaPageSection from '@site/src/components/dsa/DsaPageSection';
import styles from './roadmap.module.css';
import { DSA_CURRICULUM } from '@site/src/data/dsa';

const TOTAL_MODULES = DSA_CURRICULUM.length;

function getDifficulty(index) {
  if (index <= 3) return 'Beginner';
  if (index <= 12) return 'Intermediate';
  return 'Advanced';
}

function getState(index) {
  if (index === 0) return 'Start here';
  if (index < 4) return 'Build foundation';
  if (index < 12) return 'Core lane';
  if (index < 18) return 'Advanced practice';
  return 'Capstone';
}

function getLinkForStep(step) {
  const map = {
    '00': '/dsa/foundations',
    '01': '/dsa/binary-math',
    '02': '/dsa/mathematics',
    '03': '/dsa/complexity',
    '04': '/dsa/data-structures',
    '05': '/dsa/data-structures',
    '06': '/dsa/algorithms',
    '07': '/dsa/algorithms',
    '08': '/dsa/algorithms',
    '09': '/dsa/data-structures',
    '10': '/dsa/data-structures',
    '11': '/dsa/data-structures',
    '12': '/dsa/data-structures',
    '13': '/dsa/data-structures',
    '14': '/dsa/algorithms',
    '15': '/dsa/data-structures',
    '16': '/dsa/algorithms',
    '17': '/dsa/algorithms',
    '18': '/dsa/algorithms',
    '19': '/dsa/domain-applications',
  };

  return map[step] || '/dsa/roadmap';
}

function getPreviewText(item) {
  return item.visuals?.[0] || item.objective;
}

function CurriculumCard({ item, index }) {
  const difficulty = getDifficulty(index);
  const state = getState(index);
  const link = getLinkForStep(item.step);
  const progress = Math.round(((index + 1) / TOTAL_MODULES) * 100);
  const exerciseCount = item.exercises.length;
  const featured = index === 0;

  return (
    <article className={`${styles.card} ${featured ? styles.cardFeatured : ''}`}>
      <div className={styles.cardTop}>
        <div className={styles.cardKicker}>
          <span className={styles.moduleNumber}>{item.step}</span>
          <span className={styles.difficulty}>{difficulty}</span>
        </div>
        <span className={styles.statePill}>{state}</span>
      </div>

      <div className={styles.cardHeader}>
        <div className={styles.cardCopy}>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.cardMeta}>
            {item.duration} learning sprint · {item.prerequisites.join(' · ')}
          </p>
        </div>

        <div className={styles.visualPanel} aria-hidden="true">
          <pre className={styles.visualPreview}>{getPreviewText(item)}</pre>
          <div className={styles.progressWrap}>
            <div className={styles.progressMeta}>
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className={styles.progressBar}>
              <span className={styles.progressFill} style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>

      <p className={styles.cardDescription}>{item.objective}</p>

      <div className={styles.infoGrid}>
        <div className={styles.infoBlock}>
          <p className={styles.infoLabel}>Exercises</p>
          <p className={styles.infoValue}>{exerciseCount} guided prompts</p>
          <ul className={styles.previewList}>
            {item.exercises.slice(0, 2).map((exercise) => (
              <li key={exercise}>{exercise}</li>
            ))}
          </ul>
        </div>
        <div className={styles.infoBlock}>
          <p className={styles.infoLabel}>Visual cue</p>
          <p className={styles.infoValue}>Diagram-first, text-second</p>
          <ul className={styles.previewList}>
            {item.visuals.slice(0, 2).map((visual) => (
              <li key={visual}>{visual}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.chipRow}>
        {item.prerequisites.map((prerequisite) => (
          <span key={prerequisite} className={styles.chip}>
            {prerequisite}
          </span>
        ))}
        <span className={styles.chipMuted}>{state}</span>
      </div>

      <Link className={styles.cta} to={link}>
        {featured ? 'Start learning' : 'Open section'}
        <FaArrowRight aria-hidden="true" />
      </Link>
    </article>
  );
}

export default function DsaRoadmap() {
  return (
    <DsaShell
      title="Roadmap"
      description="A beginner-to-advanced progression from computational thinking to domain-specific DSA usage."
      lead="This roadmap keeps the sequence tight: learn the thinking first, then the structures, then the algorithms, then the domain applications."
      activePath="/dsa/roadmap"
      heroPanel={
        <div className={styles.heroPanelStack}>
          <div className={styles.heroPanelCard}>
            <p className={styles.panelLabel}>Curriculum board</p>
            <p className={styles.panelTitle}>A clearer path from first principles to advanced problem solving.</p>
            <p className={styles.panelText}>
              Each module is chunked, visual, and progress-aware so students can see what to learn next without scanning a dense document.
            </p>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatLabel}>Modules</span>
              <strong className={styles.heroStatValue}>{TOTAL_MODULES}</strong>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatLabel}>Flow</span>
              <strong className={styles.heroStatValue}>Beginner to advanced</strong>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatLabel}>Mode</span>
              <strong className={styles.heroStatValue}>Visual + practice-led</strong>
            </div>
          </div>

          <div className={styles.heroTrack}>
            <div className={styles.trackHeader}>
              <p className={styles.panelLabel}>Recommended path</p>
              <span className={styles.trackBadge}>Start with 00</span>
            </div>
            <div className={styles.trackSteps}>
              <div className={styles.trackStep}>
                <span className={styles.trackIndex}>00</span>
                <span>Thinking and framing</span>
              </div>
              <div className={styles.trackStep}>
                <span className={styles.trackIndex}>01</span>
                <span>Binary math and cost</span>
              </div>
              <div className={styles.trackStep}>
                <span className={styles.trackIndex}>02</span>
                <span>Structures and algorithms</span>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <DsaPageFrame>
        <DsaPageSection
          kicker="Curriculum"
          title="A calm learning path with clear visual hierarchy"
          text="The roadmap is designed as a premium learning board: students can scan difficulty, time, progress, visual cues, and the next action in seconds."
          aside="The first card is the recommended starting point. Everything else builds from there."
        >
          <div className={styles.sectionLead}>
            <div className={styles.sectionLeadCard}>
              <p className={styles.sectionLeadLabel}>Learning progression</p>
              <h3 className={styles.sectionLeadTitle}>What is this, how long, and what should I do next?</h3>
              <p className={styles.sectionLeadText}>
                The curriculum cards answer those questions up front so the page feels like a product flow, not a document index.
              </p>
            </div>
            <div className={styles.sectionLeadCardAlt}>
              <p className={styles.sectionLeadLabel}>Scan order</p>
              <ul className={styles.scanList}>
                <li>Module number and difficulty</li>
                <li>Mini visual and progress state</li>
                <li>Exercises, prerequisites, and CTA</li>
              </ul>
            </div>
          </div>

          <div className={styles.timeline}>
            {DSA_CURRICULUM.map((item, index) => (
              <CurriculumCard key={item.step} item={item} index={index} />
            ))}
          </div>
        </DsaPageSection>
      </DsaPageFrame>
    </DsaShell>
  );
}
