// src/homepagefeature/Features.js
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'; // Import createGlobalStyle


const FeaturesSection = styled.section`
  padding: 60px 20px;
  background-color: #f2f4f8; /* Light background */
  text-align: center;
`;

const FeaturesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333; /* Dark text for contrast */
  animation: fadeIn 1s ease-in; /* Fade-in animation */
`;

const FeatureCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack cards on small screens */
    align-items: center;
  }
`;

const FeatureCard = styled.div`
  width: 260px; /* Card width */
  padding: 25px;
  background-color: #ffffff; /* White background for cards */
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover */
  opacity: 0; /* Start invisible for animation */
  transform: translateY(20px); /* Start position for animation */
  animation: slideIn 0.5s forwards; /* Slide-in animation */
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  &:nth-child(1) { animation-delay: 0.2s; }
  &:nth-child(2) { animation-delay: 0.4s; }
  &:nth-child(3) { animation-delay: 0.6s; }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #007acc; /* Primary color */
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #555; /* Darker text for description */
`;

const fadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const slideIn = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  ${fadeIn}
  ${slideIn}
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
              Access a comprehensive curriculum with practical projects and real-world examples.
            </CardDescription>
          </FeatureCard>
          <FeatureCard>
            <CardTitle>Build</CardTitle>
            <CardDescription>
              Develop projects to demonstrate your skills and knowledge in C++ programming.
            </CardDescription>
          </FeatureCard>
          <FeatureCard>
            <CardTitle>Connect</CardTitle>
            <CardDescription>
              Join a community of developers and experts for collaboration and networking.
            </CardDescription>
          </FeatureCard>
        </FeatureCards>
      </FeaturesSection>
    </>
  );
};

export default Features;
