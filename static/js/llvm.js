const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is LLVM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LLVM is a collection of modular and reusable compiler and toolchain technologies used for building compilers and code optimization."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between LLVM and GCC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LLVM is a modular, flexible compiler infrastructure that focuses on optimization and multi-target support. GCC is a traditional monolithic compiler focused on stability and broad language support. LLVM provides faster compilation times, better modularity, and more modern debugging tools compared to GCC."
        }
      },
      {
        "@type": "Question",
        "name": "Is LLVM faster than GCC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LLVM generally produces faster code due to aggressive optimizations, but GCC is sometimes faster at compiling large projects. The performance varies based on the use case."
        }
      },
      {
        "@type": "Question",
        "name": "Why use LLVM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LLVM provides a modular and reusable compiler architecture that supports multiple programming languages and platforms. It allows developers to build custom compiler tools and optimize code efficiently."
        }
      },
      {
        "@type": "Question",
        "name": "Can LLVM compile C and C++?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, LLVM can compile C and C++ using Clang, which is an LLVM-based compiler that provides better error diagnostics and faster compilation times than traditional compilers."
        }
      },
      {
        "@type": "Question",
        "name": "What is LLVM IR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LLVM IR (Intermediate Representation) is a low-level programming language used within LLVM to optimize and transform code before generating machine code for different architectures."
        }
      },
      {
        "@type": "Question",
        "name": "Is LLVM open source?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, LLVM is an open-source project released under the University of Illinois/NCSA Open Source License, which is similar to the MIT license."
        }
      },
      {
        "@type": "Question",
        "name": "What are some projects that use LLVM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LLVM is used in several major projects, including Clang (C/C++ compiler), Swift compiler (Apple), Rust compiler, and graphics drivers like Vulkan and Metal."
        }
      }
    ]
  };
  
  // Append script dynamically
  const faqScript = document.createElement("script");
  faqScript.type = "application/ld+json";
  faqScript.textContent = JSON.stringify(faqData);
  document.head.appendChild(faqScript);
  