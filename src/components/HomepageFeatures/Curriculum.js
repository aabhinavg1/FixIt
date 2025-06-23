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

const lightSweep = keyframes`
  0% {
    left: -70%;
  }
  50% {
    left: 120%;
  }
  100% {
    left: 120%;
  }
`;

const CurriculumItem = styled.div`
  padding: 20px;
  border-radius: 12px;
  position: relative;
  text-align: center;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;

  background: linear-gradient(135deg, hsl(210, 100%, 60%), hsl(220, 100%, 70%));
  color: #ffffff;
  font-family: 'Segoe UI', sans-serif;
  box-shadow: 0 0 15px rgba(30, 144, 255, 0.3), 0 4px 12px rgba(70, 130, 180, 0.4);

  /* 🛠️ Add these lines */
  opacity: 0;
  transform: translateY(-30%);
  animation: ${slideInFromCenter} 0.7s ease-out forwards;

  p {
    cursor: default;
  }

  &:hover {
<<<<<<< HEAD
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color:rgb(234, 235, 237);
=======
    transform: scale(1.07);
    box-shadow: 0 0 25px rgba(30, 144, 255, 0.6), 0 8px 20px rgba(70, 130, 180, 0.6);
>>>>>>> dd6a9f34438dd09baaf0ebac91f71f3a52887edd
  }

  &::before {
  content: "";
  position: absolute;
  top: 0;
  left: -70%;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.5));
  transform: skewX(-25deg);
  animation: ${lightSweep} 3s infinite ease-in-out;
}

`;

// Item Title Styles
const ItemTitle = styled.h4`
  font-size: 1.1rem;
  margin: 10px 0;
  color: #ffffff;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0%;
    height: 2px;
    background: linear-gradient(to right, #ffffff, #82bfff); /* ✨ Better underline */
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.3); /* 💡 Subtle glow effect */
    border-radius: 2px;
    transition: width 0.4s ease-in-out;
  }

  ${CurriculumItem}:hover &::after {
    width: 100%;
  }
`;

// Creative CSS Shapes using Pseudo-elements
const Shape = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 15px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: hsl(210, 100%, 60%); /* Professional blue */
  color: #fff;

  /* Rounded diamond shape for all */
  clip-path: path("M50 0 C77 0, 100 23, 100 50 C100 77, 77 100, 50 100 C23 100, 0 77, 0 50 C0 23, 23 0, 50 0 Z");
  border-radius: 8px;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  span {
    transform: none;
    display: inline-block;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.4), 0 0 18px rgba(30, 144, 255, 0.5);
  }


  &:hover span {
    transform: none scale(1.5);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Support Section Styled Components
const SupportSection = styled.div`
  margin-top: 60px;
  padding: 25px;
  background: linear-gradient(145deg, #f9fafb, #f0f3f7);
  border: 1px solid #d0d7e2;
  border-left: 5px solid #0366d6;
  border-radius: 12px;
  color: #333;
  text-align: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 0.6s ease-out;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
  }
`;

const SupportTitle = styled.h3`
  margin: 0;
  font-size: 1.75rem;
  color: #1c2b39;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const SupportDescription = styled.p`
  margin: 15px 0;
  color: #4a5568;
  font-size: 1.05rem;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const SupportButton = styled.a`
  position: relative;
  display: inline-block;
  padding: 12px 28px;
  background-color: ${({ primary }) => (primary ? '#0366d6' : '#24292F')};
  color: #ffffff;
  text-decoration: none !important;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  z-index: 0;
  transition: all 0.3s ease;

  /* Outer glow */
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 10px rgba(3, 102, 214, 0.6), 0 0 20px rgba(3, 102, 214, 0.4);
    background-color: ${({ primary }) => (primary ? '#0255c1' : '#000')};
    color: #ffffff;
  }

  /* Glowing animated border effect */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: ${({ primary }) =>
      primary
        ? 'linear-gradient(135deg, #3b82f6, #60a5fa, #3b82f6)'
        : 'linear-gradient(135deg, #555, #777, #555)'};
    border-radius: 10px;
    z-index: -2;
    filter: blur(6px);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  /* Keeps inner background below the text but above glow */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ primary }) => (primary ? '#0366d6' : '#24292F')};
    border-radius: 8px;
    z-index: -1;
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
  color: #0366d6;
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

const popFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(-20px);
  }
  60% {
    opacity: 1;
    transform: scale(1.05) translateY(5px);
  }
  100% {
    transform: scale(1) translateY(0);
  }
`;

const gradientFlow = keyframes`
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

const Heading = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: #0366d6;
  font-family: 'Segoe UI', sans-serif;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
  animation: ${popFadeIn} 1s ease-out;
  cursor: default;

  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 0%;
    height: 4px;
    background: linear-gradient(to right, #0366d6, #1e90ff);
    border-radius: 4px;
    transform: translateX(-50%);
    transition: width 0.6s ease-in-out, box-shadow 0.6s ease;
    box-shadow: none;
  }

  &:hover::before {
    width: 120%;
    box-shadow: 0 0 10px rgba(3, 102, 214, 0.4), 0 0 20px rgba(30, 144, 255, 0.3);
  }
`;

// Curriculum Component
const Curriculum = () => {
  const curriculumItems = [
    { title: "Compiler Tutorial", link: "/docs/compilers/compiler", description: "Foundations of compiler theory and design.", icon: "📚" },
    { title: "LLVM Tutorial", link: "/docs/llvm/intro-to-llvm", description: "Learn the core LLVM infrastructure and tools.", icon: "🛠️" },
    { title:  "Projects", link: "/docs/Project", description: "Hands-on projects to strengthen your C++ skills.", icon: "💻" },
    { title: "MLIR & Optimization", link: "/docs/MLIR/intro", description: "Delve into MLIR, optimization, and code generation.", icon: "⚙️" },
    { title: "AI in Computer Science", link: "/docs/Ai", description: "Foundational concepts of C++ programming.", icon: "🔍" },
    { title: "C++ Tutorial", link: "/docs/c++/c++_main_file", description: "Explore advanced C++ topics and best practices.", icon: "🔧" },
    { title: "Artificial Intelligence", link: "/docs/AI/artificial_intelligence", description: "Explore smart systems, logic, reasoning, and decision-making in computers.", icon: "🤖" },
    { title: "Machine Learning", link: "#", description: "Learn algorithms that let machines learn from data and improve automatically.", icon: "📊" },
  ];

  return (
    <CurriculumSection id="curriculum">
      <Heading>Learn Everything You Need to Know</Heading>
      <CurriculumGrid>
        {curriculumItems.map((item, index) => (
  <a href={item.link} key={item.title} style={{ textDecoration: 'none' }}>
    <CurriculumItem
      style={{ animationDelay: `${index * 0.1}s` }}
      title={item.title}
    >
      <Shape><span>{item.icon}</span></Shape>
      <ItemTitle>{item.title}</ItemTitle>
      <p>{item.description}</p>
    </CurriculumItem>
  </a>
))}

      </CurriculumGrid>

      {/* Support Us Section */}
      <SupportSection>
        <SupportTitle><HeartIcon>❤️</HeartIcon> Support Us!</SupportTitle>
        <SupportDescription>
          CompilerSutra is powered by the community. Join us in empowering developers and learners by supporting our mission!
        </SupportDescription>

        <ButtonContainer>
          <SupportButton primary href="https://www.compilersutra.com/learnmore/">
            <span>Learn More</span>
          </SupportButton>
          <SupportButton href="https://github.com/sponsors/aabhinavg1">
            <span>Become a Sponsor or Donate</span>
          </SupportButton>
        </ButtonContainer>

      </SupportSection>

      {/* Contribute Box */}
<ContributeBox>
  <ContributeMessage>
    <span>🤝 Feel free to contribute! Check out our GitHub repository:</span>
    <a href="https://github.com/aabhinavg1/FixIt" target="_blank" rel="noopener noreferrer"> GitHub</a>
    </ContributeMessage>
    </ContributeBox>
    </CurriculumSection>
  );
};

export default Curriculum;
