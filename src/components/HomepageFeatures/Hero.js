// src/homepagefeature/Hero.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bgShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #dbeafe, #f0f9ff, #e0f2fe, #fefce8);
  background-size: 400% 400%;
  animation: ${bgShift} 15s ease infinite;
  font-family: 'Inter', sans-serif;
`;

const ContentWrapper = styled.div`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(18px);
  border-radius: 24px;
  padding: 50px 40px;
  max-width: 860px;
  text-align: center;
  animation: ${fadeInUp} 1.2s ease forwards;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 24px;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  color: #334155;
  line-height: 1.7;
  margin: 0 auto 40px;
  max-width: 720px;
`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 16px 36px;
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 6px 24px rgba(59, 130, 246, 0.4);

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.45);
    background: linear-gradient(135deg, #2563eb, #1e40af);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <ContentWrapper>
        <HeroTitle>Build Your Future with Compiler Development</HeroTitle>
        <HeroSubtitle>
          Learn compilers from scratch to advanced with a hands-on, industry-backed curriculum designed to make you job-ready.
        </HeroSubtitle>
        <HeroButton href="/get-started">🚀 Get Started</HeroButton>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;
