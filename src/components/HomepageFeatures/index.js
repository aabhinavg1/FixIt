import React, { useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CookieConsent from 'react-cookie-consent'; // Ensure you have this package installed

// Define the features for the Did You Know section
const didYouKnowFeatures = [
  {
    title: "GCC: The Classic Compiler",
    description: (
      <>
        <strong>GCC</strong> (GNU Compiler Collection) is a well-established compiler that supports multiple programming 
        languages and is essential for many projects in the open-source community.
      </>
    ),
  },
  {
    title: "LLVM: A Powerful Infrastructure",
    description: (
      <> 
        <strong>LLVM</strong> is an open-source compiler framework that provides a modern approach to program compilation 
        and optimization, enabling developers to target various architectures effortlessly.
      </>
    ),
  },
  {
    title: "MLIR: The Future of Compiler Infrastructure",
    description: (
      <>
        <strong>MLIR</strong> (Multi-Level Intermediate Representation) improves compiler design flexibility and allows 
        for better optimization strategies.
      </>
    ),
  },
  {
    title: "Clang: The C Language Family Frontend",
    description: (
      <>
        <strong>Clang</strong> is a compiler for C, C++, and Objective-C, focusing on performance, modularity, and 
        providing user-friendly error messages.
      </>
    ),
  },
  {
    title: "DPC++: OneAPI Programming Model",
    description: (
      <>
        <strong>DPC++</strong> extends C++ to support heterogeneous computing, making it easier to target both CPUs 
        and GPUs in a single codebase.
      </>
    ),
  },
];

// Define the features for the Brush Up Concepts section
const brushUpFeatures = [
  {
    title: "Static vs Dynamic Typing",
    description: (
      <>
        <strong>Static Typing</strong> catches type errors at compile time, while <strong>Dynamic Typing</strong> allows 
        type checks at runtime, leading to more flexibility but potential runtime errors.
      </>
    ),
  },
  {
    title: "Object-Oriented Programming",
    description: (
      <>
        <strong>OOP</strong> is a programming paradigm that uses objects and classes to structure code, promoting 
        reuse and encapsulation of data.
      </>
    ),
  },
  {
    title: "Functional Programming",
    description: (
      <>
        <strong>Functional Programming</strong> treats computation as the evaluation of mathematical functions and avoids 
        changing state or mutable data, leading to more predictable code.
      </>
    ),
  },
  {
    title: "Memory Management",
    description: (
      <>
        Understanding <strong>Memory Management</strong> in programming helps prevent memory leaks and optimizes 
        resource usage, ensuring efficient performance.
      </>
    ),
  },
  {
    title: "Concurrency vs Parallelism",
    description: (
      <>
        <strong>Concurrency</strong> involves managing multiple tasks at once, while <strong>Parallelism</strong> 
        is about executing multiple tasks simultaneously, crucial for improving application performance.
      </>
    ),
  },
];

// Social links data
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/aabhinavg1",
    logo: "img/github-logo.svg"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abhinavcompilerllvm",
    logo: "img/linkedin-logo.svg"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/compilerSutra",
    logo: "img/twitter-logo.svg"
  },
];

// SocialLinks component to render the social links
const SocialLinks = () => (
  <div className={styles.socialLinks}>
    {socialLinks.map(link => (
      <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${link.name}`}>
        <img src={useBaseUrl(link.logo)} alt={link.name} className={styles.socialIcon} />
      </a>
    ))}
  </div>
);

// Main HomepageFeatures component
export default function HomepageFeatures() {
  const [didYouKnowIndex, setDidYouKnowIndex] = useState(0);
  const [brushUpIndex, setBrushUpIndex] = useState(0);
  const [cookieAccepted, setCookieAccepted] = useState(false); // State for cookie consent

  // Handlers for Did You Know section
  const handleNextDidYouKnow = () => {
    setDidYouKnowIndex((prevIndex) => (prevIndex + 1) % didYouKnowFeatures.length);
  };

  const handlePrevDidYouKnow = () => {
    setDidYouKnowIndex((prevIndex) => (prevIndex - 1 + didYouKnowFeatures.length) % didYouKnowFeatures.length);
  };

  // Handlers for Brush Up Concepts section
  const handleNextBrushUp = () => {
    setBrushUpIndex((prevIndex) => (prevIndex + 1) % brushUpFeatures.length);
  };

  const handlePrevBrushUp = () => {
    setBrushUpIndex((prevIndex) => (prevIndex - 1 + brushUpFeatures.length) % brushUpFeatures.length);
  };

  // Handler for cookie consent
  const handleCookieAccept = () => {
    setCookieAccepted(true); // Set cookie accepted to true
  };

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {/* Did You Know Section */}
          <div className="col col--6">
            <Heading as="h2" className="text--center">Did You Know? 🧐</Heading>
            <p className={styles.note}>🗓️ Content changes weekly! Stay tuned for new facts!</p>
            <div className={styles.titleBox}>{didYouKnowFeatures[didYouKnowIndex].title}</div>
            <div className={styles.circleContainer}>
              <div className={styles.circleContent}>
                <p>{didYouKnowFeatures[didYouKnowIndex].description}</p>
              </div>
              <div className={styles.circleButtons}>
                <button onClick={handlePrevDidYouKnow} className={styles.arrowButton} aria-label="Previous Fact">&lt;</button>
                <button onClick={handleNextDidYouKnow} className={styles.arrowButton} aria-label="Next Fact">&gt;</button>
              </div>
            </div>
          </div>
          {/* Brush Up Concepts Section */}
          <div className="col col--6">
            <Heading as="h2" className="text--center">Brush Up Concepts 📚</Heading>
            <p className={styles.note}>📅 New concepts every week! Keep learning!</p>
            <div className={styles.titleBox}>{brushUpFeatures[brushUpIndex].title}</div>
            <div className={styles.circleContainer}>
              <div className={styles.circleContent}>
                <p>{brushUpFeatures[brushUpIndex].description}</p>
              </div>
              <div className={styles.circleButtons}>
                <button onClick={handlePrevBrushUp} className={styles.arrowButton} aria-label="Previous Concept">&lt;</button>
                <button onClick={handleNextBrushUp} className={styles.arrowButton} aria-label="Next Concept">&gt;</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Social Links Centered Below Both Sections */}
          <div className="col col--12 text--center">
            <SocialLinks />
          </div>
        </div>
        {!cookieAccepted && ( // Render CookieConsent only if not accepted
          <CookieConsent 
            location="bottom"
            buttonText="I understand"
            cookieName="myAwesomeCookieName"
            style={{ background: "#2B373B", color: "#ffffff" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
            onAccept={handleCookieAccept} // Call handler on accept
          >
            This website uses cookies to enhance the user experience.{" "}
            <span style={{ fontSize: "10px" }}>This message will disappear in 150 days.</span>
          </CookieConsent>
        )}
      </div>
    </section>
  );
}
