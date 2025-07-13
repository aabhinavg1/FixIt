// src/homepagefeature/Features.js
import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const GlobalStyle = createGlobalStyle`
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
`;

// Layout
const FeaturesSection = styled.section`
  padding: 80px 20px;
  background: linear-gradient(180deg, #f1f5f9 0%, #ffffff 100%);
  text-align: center;
  font-family: 'Inter', sans-serif;
`;

const FeaturesTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 50px;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

// Cards container
const FeatureCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

// Individual Card
const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  width: 280px;
  padding: 30px 25px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  animation: ${slideIn} 0.8s ease forwards;
  opacity: 0;
  transform: translateY(30px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  &:nth-child(1) { animation-delay: 0.2s; }
  &:nth-child(2) { animation-delay: 0.4s; }
  &:nth-child(3) { animation-delay: 0.6s; }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #2563eb;
  margin-bottom: 15px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #475569;
  line-height: 1.6;
`;

const Features = () => {
  return (
    <>
      <GlobalStyle />
      <FeaturesSection id="features">
        <FeaturesTitle>Build Your Future</FeaturesTitle>
        <FeatureCards>
          <FeatureCard>
            <CardTitle>Learn</CardTitle>
            <CardDescription>
              Access a structured curriculum with real-world compiler projects and expert-backed lessons.
            </CardDescription>
          </FeatureCard>
          <FeatureCard>
            <CardTitle>Build</CardTitle>
            <CardDescription>
              Apply your knowledge through hands-on projects in C++, LLVM, and system-level tooling.
            </CardDescription>
          </FeatureCard>
          <FeatureCard>
            <CardTitle>Connect</CardTitle>
            <CardDescription>
              Join our developer community and connect with compiler engineers, mentors, and peers.
            </CardDescription>
          </FeatureCard>
        </FeatureCards>
      </FeaturesSection>
    </>
  );
};

export default Features;
