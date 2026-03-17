// src/homepagefeature/Features.js
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  padding: 5rem 1.5rem 4rem;
  background: linear-gradient(180deg, #0a0f1e 0%, #f8faff 60px, #f1f5f9 100%);
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

const FeaturesTitle = styled.h2`
  font-size: clamp(1.8rem, 4.5vw, 2.75rem);
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.75rem;
  line-height: 1.2;
`;

const FeaturesSubtitle = styled.p`
  font-size: 1.05rem;
  color: #64748b;
  max-width: 540px;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

const FeatureCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1080px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 2rem 1.75rem;
  text-align: left;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.04);
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(32px)')};
  transition-delay: ${({ $delay }) => $delay || '0s'};

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 36px rgba(59, 130, 246, 0.13);
    border-color: #bfdbfe;
  }
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.1rem;
  background: ${({ $bg }) => $bg || '#eff6ff'};
`;

const CardTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.65;
  margin: 0;
`;

const FEATURES = [
  {
    icon: '📚',
    iconBg: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
    title: 'Structured Learning',
    description:
      'Step-by-step curriculum covering LLVM, MLIR, TVM, C++, and GPU programming — from beginner to production-grade.',
  },
  {
    icon: '🛠️',
    iconBg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    title: 'Hands-On Projects',
    description:
      'Apply knowledge through real compiler projects, LLVM passes, optimization pipelines, and system-level tooling.',
  },
  {
    icon: '🌐',
    iconBg: 'linear-gradient(135deg, #fdf4ff, #f3e8ff)',
    title: 'Active Community',
    description:
      'Connect with compiler engineers and learners on YouTube, Quora, GitHub, and Twitter. Ask, share, and grow.',
  },
];

const Features = () => {
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
      { threshold: 0.12 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <FeaturesSection id="features" ref={sectionRef}>
      <SectionEyebrow>Why CompilerSutra?</SectionEyebrow>
      <FeaturesTitle>Everything You Need to Master Compilers</FeaturesTitle>
      <FeaturesSubtitle>
        From zero to production-grade compiler knowledge — structured, practical, and community-driven.
      </FeaturesSubtitle>
      <FeatureCards>
        {FEATURES.map((f, i) => (
          <FeatureCard
            key={f.title}
            $visible={visible}
            $delay={`${i * 0.12}s`}
          >
            <IconBox $bg={f.iconBg}>{f.icon}</IconBox>
            <CardTitle>{f.title}</CardTitle>
            <CardDescription>{f.description}</CardDescription>
          </FeatureCard>
        ))}
      </FeatureCards>
    </FeaturesSection>
  );
};

export default Features;
