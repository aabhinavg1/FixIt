import React from "react";
import Link from "@docusaurus/Link";
import styles from "./DocsHub.module.css";

// ========== DATA LAYER ==========
const techCards = [
  {
    title: "Compiler Engineering",
    desc: "LLVM, IR design, optimization passes, and backend codegen",
    link: "/docs/llvm/intro-to-llvm",
    level: "Intermediate → Advanced",
  },
  {
    title: "GPU & Parallel Computing",
    desc: "OpenCL, memory hierarchy, and execution model",
    link: "/docs/gpu/opencl/",
    level: "Advanced",
  },
  {
    title: "Programming Languages",
    desc: "C++ systems programming and Python automation",
    link: "/docs/c++/cpp-learning-roadmap/",
    level: "All Levels",
  },
  {
    title: "Systems Engineering",
    desc: "Linux, computer architecture, debugging, and system-level design",
    link: "/docs/linux/intro_to_linux",
    level: "Intermediate",
  },
  {
    title: "Build Systems",
    desc: "CMake, Ninja, compilation pipelines, and toolchain integration",
    link: "/docs/cpp_tutorial_with_cmake/",
    level: "Intermediate",
  },
];

const docSections = [
  {
    title: "Docs",
    desc: "Technical documentation",
    items: [
      { name: "LLVM Tutorials", link: "/docs/llvm/intro-to-llvm" },
      { name: "GPU Tutorials", link: "/docs/gpu/opencl/" },
      { name: "Compilers", link: "/docs/compilers/compiler" },
    ],
  },

  // ✅ NEW SYSTEMS SECTION
  {
    title: "Systems & Architecture",
    desc: "Operating systems, hardware fundamentals, and live tutorials",
    items: [
      { name: "Linux Fundamentals", link: "/docs/linux/intro_to_linux" },
      { name: "Computer Architecture", link: "/docs/coa/" },
    ],
  },

  // ✅ NEW BUILD SYSTEMS SECTION
  {
    title: "Build Systems",
    desc: "Compilation pipelines, toolchains, and build automation",
    items: [
      { name: "Build System Introduction", link: "/docs/build-system/intro" },
      { name: "CMake Fundamentals", link: "/docs/build-system/cmake" },
      { name: "Ninja Build System", link: "/docs/build-system/ninja" },
    ],
  },

  {
    title: "Community",
    desc: "Connect and learn",
    items: [
      { name: "LLVM Documentation", link: "/docs/llvm/intro-to-llvm" },
      { name: "Twitter", link: "https://twitter.com" },
    ],
  },
  {
    title: "More",
    desc: "Resources and support",
    items: [
      { name: "GitHub", link: "https://github.com" },
      { name: "Discord", link: "https://discord.gg/d7jpHrhTap" },
      { name: "Sponsor Us", link: "https://github.com/sponsors/aabhinavg1" },
      {name: "Youtube" , link: "https://youtube.com/@compilersutra"},
      { name: "live video", link: "/docs/linux/live/" },

    ],
  },
];

const learningPath = [
  {
    name: "C++",
    link: "/docs/c++/cpp-learning-roadmap/",
  },
  {
    name: "Data Structures & Algorithms",
    link: "/docs/DSA/introduction-to-dsa/", // update if needed
  },
  {
    name: "Compiler Fundamentals",
    link: "/docs/compilers/compiler",
  },
  {
    name: "LLVM",
    link: "/docs/llvm/intro-to-llvm",
  },
  {
    name: "Build Systems",
    link: "/docs/cpp_tutorial_with_cmake/",
  },
  {
    name: "GPU Programming",
    link: "/docs/gpu/opencl/",
  },
];

const featuredItems = [
  {
    title: "LLVM Pass Engineering",
    desc: "Design and optimize transformation pipelines with custom IR passes",
  },
  {
    title: "GPU Kernel Optimization",
    desc: "Master memory coalescing, occupancy, and warp-level intrinsics",
  },
  {
    title: "Compile-Time Metaprogramming",
    desc: "Zero-overhead abstractions with template metaprogramming",
  },
];

// ========== COMPONENTS ==========

const Header = () => (
  <div className={styles.csHeader}>
    <h1>CompilerSutra</h1>
    <p>Compiler Engineering • GPU Computing • Systems Programming</p>
  </div>
);

const LearningPath = () => (
  <div className={styles.csPathSection}>
    <div className={styles.csPathTitle}>
      <span>Recommended Learning Path</span>
    </div>

    <div className={styles.csPathGrid}>
      {learningPath.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className={styles.csPathItem}
        >
          <span className={styles.csPathIndex}>{index + 1}</span>
          {item.name}
        </Link>
      ))}
    </div>
  </div>
);

const TechCard = ({ title, desc, link, level }) => (
  <Link to={link} className={styles.csCard}>
    <h3>{title}</h3>
    <p>{desc}</p>
    <span>{level}</span>
  </Link>
);

const TechCardsGrid = () => (
  <div className={styles.csGrid}>
    {techCards.map((item, i) => (
      <TechCard key={i} {...item} />
    ))}
  </div>
);

const DocSection = ({ title, desc, items }) => (
  <div className={styles.csSection}>
    <div className={styles.csSectionHeader}>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
    <ul>
      {items.map((item, j) => (
        <li key={j}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const DocsSections = () => (
  <div className={styles.csDocs}>
    {docSections.map((section, i) => (
      <DocSection key={i} {...section} />
    ))}
  </div>
);

const FeaturedCard = ({ title, desc }) => (
  <div className={styles.csFeatureCard}>
    <h4>{title}</h4>
    <p>{desc}</p>
  </div>
);

const FeaturedGrid = () => (
  <div className={styles.csFeatured}>
    {featuredItems.map((item, i) => (
      <FeaturedCard key={i} {...item} />
    ))}
  </div>
);

// ========== MAIN COMPONENT ==========
export default function HomepageDocs() {
  return (
    <div className={styles.csContainer}>
      <div className={styles.csWrapper}>
        <Header />
        <LearningPath />
        <TechCardsGrid />
        <DocsSections />
        <FeaturedGrid />
      </div>
    </div>
  );
}
