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
    // Determine animation direction based on index
    if (index % 2 === 0) {
      return slideInFromRight;
    } else if (index % 3 === 0) {
      return slideInFromCenter;
    } else {
      return slideInFromLeft;
    }
  }} 0.5s ease-out forwards; /* Duration and easing for animation */

  /* Hover Effects */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transition for smooth effect */

  &:hover {
    transform: scale(1.05); /* Scale up on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Increased shadow on hover */
    background-color: #e8f0fe; /* Change background color on hover */
  }
`;

// Item Title Styles
const ItemTitle = styled.h4`
  font-size: 1rem;
  margin: 10px 0; /* Space between title and content */

  a {
    color: #007bff; /* Link color */
    text-decoration: none; /* No underline */
  }

  a:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

// Creative CSS Shapes using Pseudo-elements
const Shape = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%; /* Circular shape */
  background-color: #2a2a72; /* Color for the shape */
  color: #fff; /* Text color */
  font-size: 1.5rem; /* Size of the icon/text */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 15px auto; /* Center and add space below */
`;

// Support Section Styled Components
const SupportSection = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: #fff3e4; /* Changed to cream color */
  border-radius: 8px;
  color: #333;
  text-align: center;
  max-width: 300px; /* Make the support box smaller */
  margin: 40px auto; /* Center the support section */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow */
  transition: transform 0.3s ease; /* Add transition for hover effect */

  &:hover {
    transform: scale(1.03); /* Scale slightly on hover */
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
    transform: translateX(4px); /* Move right on hover */
  }
`;

// Arrow Icon
const ArrowIcon = styled.span`
  margin-left: 8px;
  transition: transform 0.3s ease; /* Smooth transition for the arrow */
`;

const SupportButtonWithArrow = styled(SupportButton)`
  display: flex;
  align-items: center;

  &:hover ${ArrowIcon} {
    transform: translateX(2px); /* Arrow movement on hover */
  }
`;

// Heart Icon
const HeartIcon = styled.span`
  font-size: 1.5rem;
  color: #333; /* Updated heart color */
  margin-right: 5px;
`;

// Curriculum Component
const Curriculum = () => {
  return (
    <CurriculumSection id="curriculum">
      <h2>Learn Everything You Need to Know</h2>
      <CurriculumGrid>
        {[
          { title: "Compiler Tutorial", link: "/docs/compilers/intro", description: "Foundations of compiler theory and design.", icon: "📚" },
          { title: "LLVM Tutorial", link: "/docs/llvm_basic/intro-to-llvm", description: "Learn the core LLVM infrastructure and tools.", icon: "🛠️" },
          { title: "C++ Projects", link: "/docs/cpp-tutorial", description: "Hands-on projects to strengthen your C++ skills.", icon: "💻" },
          { title: "MLIR & Optimization", link: "/docs/MLIR/intro", description: "Delve into MLIR, optimization, and code generation.", icon: "⚙️" },
          { title: "C++ Basics", link: "/docs/cpp-tutorial", description: "Learn the foundational concepts of C++ programming.", icon: "🔍" },
          { title: "C++ Advanced", link: "/docs/c++/advance/intro", description: "Explore advanced C++ topics and best practices.", icon: "🔧" },
        ].map((item, index) => (
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
          <SupportButton href="LearnMore" target="_blank">
            Learn More
          </SupportButton>
          <SupportButtonWithArrow
            href="https://github.com/sponsors/aabhinavg1"
            target="_blank"
            primary
          >
            Donate Now
            <ArrowIcon>➡️</ArrowIcon> {/* Arrow icon for "Donate Now" */}
          </SupportButtonWithArrow>
        </ButtonContainer>
      </SupportSection>
    </CurriculumSection>
  );
};

export default Curriculum;
