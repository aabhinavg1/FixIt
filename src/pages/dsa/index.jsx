import React from 'react';
import Link from '@docusaurus/Link';
import { FaArrowRight } from 'react-icons/fa';
import DsaShell from '@site/src/components/dsa/DsaShell';
import DsaPageFrame from '@site/src/components/dsa/DsaPageFrame';
import DsaPageSection from '@site/src/components/dsa/DsaPageSection';
import DsaSectionCard from '@site/src/components/dsa/DsaSectionCard';
import { DSA_DOMAIN_AREAS, DSA_PRIMARY_PATHS } from '@site/src/data/dsa';
import styles from './index.module.css';

const PATH_PREVIEWS = ['Input → State → Output', '10110101 → 00001111', 'A ── B ── C\n│\nD'];


export default function DsaHome() {
  return (
    <DsaShell
      title="Learn DSA From First Principles"
      description="Understand intuition, math, algorithms, and thinking."
      eyebrow="CompilerSutra DSA Academy"
      lead="A practical DSA journey designed for software engineers. Build strong foundations in data structures, algorithm design, optimization, and real-world problem solving."
      activePath="/dsa"
      metaTitle="DSA Academy"
    >
      <DsaPageFrame>
        <DsaPageSection
          className={styles.sectionTint}
          kicker="Learning journey"
          title="Pick one path and keep moving"
          text="The section is intentionally organized like a journey. Start with one lane, build confidence, and only then branch into the deeper material."
          aside="Choose one starting point. Fewer choices reduce overload and make the experience easier to follow."
        >
          <div className={styles.journeyGrid}>
            {DSA_PRIMARY_PATHS.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className={`${styles.journeyCard} ${styles.journeyCardDim}`}
              >
                <span className={styles.journeyIndex}>0{index + 1}</span>
                <p className={styles.journeyPreview}>{PATH_PREVIEWS[index]}</p>
                <p className={styles.journeyTag}>{item.tag}</p>
                <h3 className={styles.journeyTitle}>{item.title}</h3>
                <p className={styles.journeyText}>{item.description}</p>
                <span className={styles.actionLink}>
                  Open section <FaArrowRight aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </DsaPageSection>

        <DsaPageSection
          className={styles.sectionTint}
          kicker="Real-world use"
          title="DSA across the stack"
          text=""
          aside="The section stays selective here so it feels curated, not exhaustive."
        >
          <div className={styles.domainGrid}>
            {DSA_DOMAIN_AREAS.slice(0, 6).map((item) => (
              <DsaSectionCard key={item.title} tag="Domain" title={item.title} description={item.description} />
            ))}
          </div>
          <Link className={styles.domainLink} to="/dsa/domain-applications">
            Explore all domain applications <FaArrowRight aria-hidden="true" />
          </Link>
        </DsaPageSection>

      </DsaPageFrame>
    </DsaShell>
  );
}
