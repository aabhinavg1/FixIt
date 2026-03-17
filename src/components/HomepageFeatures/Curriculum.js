// src/homepagefeature/Curriculum.js
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// ---- Styled Components ----
const CurriculumSection = styled.section`
  padding: 4rem 1.5rem 5rem;
  background-color: #f1f5f9;
  text-align: center;
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
`;

const SectionEyebrow = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #3b82f6;
  margin-bottom: 0.5rem;
`;

const Heading = styled.h2`
  font-size: clamp(1.8rem, 4.5vw, 2.75rem);
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.75rem;
  line-height: 1.2;
`;

const HeadingSubtitle = styled.p`
  font-size: 1.05rem;
  color: #64748b;
  max-width: 520px;
  margin: 0 auto 2.75rem;
  line-height: 1.7;
`;

const CurriculumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
  max-width: 1080px;
  margin: 0 auto;
`;

const CurriculumItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.4rem 1.3rem;
  border-radius: 14px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  text-decoration: none !important;
  color: inherit;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: transform 0.26s ease, box-shadow 0.26s ease, border-color 0.26s ease;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(24px)')};
  transition-delay: ${({ $delay }) => $delay || '0s'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 28px rgba(59, 130, 246, 0.12);
    border-color: #bfdbfe;
    text-decoration: none !important;
  }
`;

const ItemIcon = styled.div`
  font-size: 1.6rem;
  margin-bottom: 0.75rem;
  line-height: 1;
`;

const ItemTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.35rem;
`;

const ItemDescription = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
`;

const BottomRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  max-width: 720px;
  margin: 3rem auto 0;
`;

const ActionCard = styled.div`
  flex: 1;
  min-width: 260px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 1.5rem 1.5rem;
  text-align: left;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
`;

const ActionTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.4rem;
`;

const ActionDesc = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ActionButton = styled.a`
  display: inline-block;
  padding: 0.55rem 1.2rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.22s ease;
  background: ${({ $primary }) => ($primary ? '#2563eb' : '#0f172a')};
  color: #ffffff;
  margin-right: 0.5rem;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
    text-decoration: none !important;
  }
`;

// ---- Data ----
const CURRICULUM_ITEMS = [
  { title: 'Compiler Tutorial', link: '/docs/compilers/compiler', description: 'Foundations of compiler theory and design.', icon: '📚' },
  { title: 'LLVM Tutorial', link: '/docs/llvm/intro-to-llvm', description: 'Core LLVM infrastructure, passes, and tools.', icon: '🛠️' },
  { title: 'Projects', link: '/docs/Project', description: 'Hands-on projects to strengthen your C++ skills.', icon: '💻' },
  { title: 'MLIR & Optimization', link: '/docs/MLIR/intro', description: 'MLIR, optimization, and code generation.', icon: '⚙️' },
  { title: 'AI in CS', link: '/docs/Ai', description: 'AI applications in compiler and computer science.', icon: '🔍' },
  { title: 'C++ Tutorial', link: '/docs/c++/cpp-learning-roadmap', description: 'Modern C++ topics and best practices.', icon: '🔧' },
  { title: 'Artificial Intelligence', link: '/docs/AI/artificial_intelligence', description: 'Smart systems, logic, reasoning, and decision-making.', icon: '🤖' },
  { title: 'Machine Learning', link: '#', description: 'Algorithms that let machines learn from data.', icon: '📊' },
];

// ---- Component ----
const Curriculum = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <CurriculumSection id="curriculum" ref={sectionRef}>
      <SectionEyebrow>Curriculum</SectionEyebrow>
      <Heading>Learn Everything You Need to Know</Heading>
      <HeadingSubtitle>
        A structured path from compiler fundamentals to advanced toolchains, GPU programming, and AI.
      </HeadingSubtitle>

      <CurriculumGrid>
        {CURRICULUM_ITEMS.map((item, index) => (
          <CurriculumItem
            href={item.link}
            key={item.title}
            $visible={visible}
            $delay={`${index * 0.07}s`}
          >
            <ItemIcon>{item.icon}</ItemIcon>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
          </CurriculumItem>
        ))}
      </CurriculumGrid>

      <BottomRow>
        <ActionCard>
          <ActionTitle>❤️ Support Us</ActionTitle>
          <ActionDesc>
            CompilerSutra is community-powered. Help us keep the content free and growing.
          </ActionDesc>
          <ActionButton $primary href="https://www.compilersutra.com/learnmore/">Learn More</ActionButton>
          <ActionButton href="https://github.com/sponsors/aabhinavg1">Sponsor</ActionButton>
        </ActionCard>

        <ActionCard>
          <ActionTitle>🤝 Contribute</ActionTitle>
          <ActionDesc>
            Found a bug, want to add content, or improve docs? All contributions are welcome!
          </ActionDesc>
          <ActionButton $primary href="https://github.com/aabhinavg1/FixIt" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </ActionButton>
        </ActionCard>
      </BottomRow>
    </CurriculumSection>
  );
};

export default Curriculum;
