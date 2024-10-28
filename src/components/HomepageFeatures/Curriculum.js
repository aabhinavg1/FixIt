// src/homepagefeature/Curriculum.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation Keyframes
const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromCenter = keyframes`
  0% {
    transform: translateY(-30%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled Components
const CurriculumSection = styled.section`
  padding: 40px 20px; /* Added padding for mobile view */
  background-color: #f1f1f4;
  text-align: center;
`;

const CurriculumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const CurriculumItem = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative; /* For possible future use */
  overflow: hidden; /* Clip any overflow */
  
  /* Animation */
  animation: ${({ index }) => {
    if (index % 2 === 0) {
      return slideInFromRight;
    } else if (index % 3 === 0) {
      return slideInFromCenter;
    } else {
      return slideInFromLeft;
    }
  }} 0.5s ease-out forwards;

  /* Hover Effects */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #e8f0fe;
  }
`;

// Item Title Styles
const ItemTitle = styled.h4`
  font-size: 1rem;
  margin: 10px 0;

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

// Creative CSS Shapes using Pseudo-elements
const Shape = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #2a2a72;
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 15px auto;
`;

// Support Section Styled Components
const SupportSection = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: #fff3e4;
  border-radius: 8px;
  color: #333;
  text-align: center;
  max-width: 300px;
  margin: 40px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const SupportTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const SupportDescription = styled.p`
  margin: 10px 0;
  color: #555;
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
`;

const SupportButton = styled.a`
  padding: 10px 20px;
  background-color: ${({ primary }) => (primary ? '#0366d6' : '#24292F')};
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#005bb5' : '#000')};
    transform: translateX(4px);
  }
`;

// Arrow Icon
const ArrowIcon = styled.span`
  margin-left: 8px;
  transition: transform 0.3s ease;
`;

const SupportButtonWithArrow = styled(SupportButton)`
  display: flex;
  align-items: center;

  &:hover ${ArrowIcon} {
    transform: translateX(2px);
  }
`;

// Heart Icon
const HeartIcon = styled.span`
  font-size: 1.5rem;
  color: #333;
  margin-right: 5px;
`;

// Contribute Box Styled Components
const ContributeBox = styled.div`
  margin-top: 40px;
  padding: 20px;
  background: linear-gradient(135deg, #e8f0fe 0%, #ffffff 100%);
  border: 2px solid #007bff;
  border-radius: 10px;
  color: #333;
  text-align: center;
  max-width: 400px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;

  &:before {
    content: '🤝';
    font-size: 2rem;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ContributeMessage = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

// Curriculum Component
const Curriculum = () => {
  const curriculumItems = [
    { title: "Compiler Tutorial", link: "/docs/compilers/intro", description: "Foundations of compiler theory and design.", icon: "📚" },
    { title: "LLVM Tutorial", link: "/docs/llvm_basic/intro-to-llvm", description: "Learn the core LLVM infrastructure and tools.", icon: "🛠️" },
    { title: "C++ Projects", link: "/docs/cpp-tutorial", description: "Hands-on projects to strengthen your C++ skills.", icon: "💻" },
    { title: "MLIR & Optimization", link: "/docs/MLIR/intro", description: "Delve into MLIR, optimization, and code generation.", icon: "⚙️" },
    { title: "C++ Basics", link: "/docs/cpp-tutorial", description: "Learn the foundational concepts of C++ programming.", icon: "🔍" },
    { title: "C++ Advanced", link: "/docs/c++/advance/intro", description: "Explore advanced C++ topics and best practices.", icon: "🔧" },
  ];

  return (
    <CurriculumSection id="curriculum">
      <h2>Learn Everything You Need to Know</h2>
      <CurriculumGrid>
        {curriculumItems.map((item, index) => (
          <CurriculumItem key={item.title} index={index}>
            <Shape>{item.icon}</Shape>
            <ItemTitle><a href={item.link}>{item.title}</a></ItemTitle>
            <p>{item.description}</p>
          </CurriculumItem>
        ))}
      </CurriculumGrid>

      {/* Support Us Section */}
      <SupportSection>
        <SupportTitle><HeartIcon>❤️</HeartIcon> Support Us!</SupportTitle>
        <SupportDescription>
          CompilerSutra is powered by the community. Join us in empowering developers and learners by supporting our mission!
        </SupportDescription>

        <ButtonContainer>
          <SupportButton primary href="https://www.compilersutra.com/learnmore/">Learn More</SupportButton>
          <SupportButton href="https://github.com/sponsors/aabhinavg1">Become a Sponsor or Donate</SupportButton>
        </ButtonContainer>
      </SupportSection>

      {/* Contribute Box */}
      <ContributeBox>
        <ContributeMessage>
          🤝 Feel free to contribute! Check out our GitHub repository: 
          <a href="https://github.com/aabhinavg1/FixIt" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </ContributeMessage>
      </ContributeBox>
    </CurriculumSection>
  );
};

export default Curriculum;
