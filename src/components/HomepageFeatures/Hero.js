// src/homepagefeature/Hero.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  padding: 80px 20px;
  background-color: #e4f0f5;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroTitle = styled.h1`
  font-size: 2.8rem;
  color: #2a2a72;
  animation: ${fadeIn} 1s ease-in-out forwards;
  opacity: 0; /* Initial opacity for fade-in effect */
  transform: translateY(20px); /* Initial position for animation */
  margin-bottom: 10px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #555;
  animation: ${fadeIn} 1.2s ease-in-out forwards;
  opacity: 0;
  transform: translateY(20px);

  /* Add this to fix the alignment issue */
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
`;

const HeroButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #2a2a72; /* Button color */
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  animation: ${fadeIn} 1.5s ease-in-out forwards;
  opacity: 0; /* Initial opacity for fade-in effect */
  transform: translateY(20px); /* Initial position for animation */
  
  &:hover {
    background-color: #1d1d52; /* Darker shade on hover */
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroTitle>Build Your Future with Compiler Development</HeroTitle>
      <HeroSubtitle>A free, comprehensive curriculum supported by industry experts.</HeroSubtitle>
      <HeroButton href="/get-started">Get Started</HeroButton>
    </HeroSection>
  );
};

export default Hero;
