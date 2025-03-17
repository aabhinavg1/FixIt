import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import Features from './Features';
import Curriculum from './Curriculum';
import Footer from './Footer';

// Main Container
const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f9f9fb;
  color: #333;
`;

// Main App Component
const HomepageFeatures = () => {
  return (
    <Container>
      <Hero />
      <Features />
      <Curriculum />
    </Container>
  );
};

// Export the component
export default HomepageFeatures;
