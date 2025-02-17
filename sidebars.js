/** @type {import('@docusaurus/types').Sidebar} */
const sidebars = {
  // Sidebar for Compiler Tutorials
  compilersSidebar: [
    {
      type: 'category',
      label: 'Compilers',
      collapsed: false,
      items: [
        'compilers/compiler',                 // Overview of compilers
        'compilers/CPU/index',                // Tutorials specific to CPU compilers
        'compilers/GPU/index',                // Tutorials specific to GPU compilers
        'compilers/back_end/index',           // Backend concepts and tutorials
        'compilers/flag/index',               // Compiler flags and optimizations
        'compilers/front_end/index',          // Frontend concepts and tutorials
        'compilers/other_arch/index',         // Tutorials for other architectures
      ],
    },
  ],
  
  // Sidebar for GPU Tutorials
  gpuTutorialSidebar: [
    {
      type: 'category',
      label: 'GPU Tutorials',
      collapsed: false,
      items: [
        'gpu/introduction',                   // Introduction to GPU concepts
        'gpu/optimizations',                  // GPU-specific optimization techniques
      ],
    },
  ],

  // Sidebar for LLVM Tutorials
  llvmTutorialSidebar: [
    {
      type: 'category',
      label: 'LLVM Tutorials',
      collapsed: false,
      items: [
        'llvm/intro-to-llvm',                 // Overview of LLVM
        {
          type: 'category',
          label: 'LLVM Basics',
          items: [
            'llvm/llvm_basic/Build',          // How to build LLVM
            'llvm/llvm_basic/What_is_LLVM',   // Introduction to LLVM
            'llvm/llvm_basic/Why_LLVM',       // Why use LLVM
            'llvm/llvm_basic/congratulations',// Completing the basics
            'llvm/llvm_basic/deploy-your-site', // Deployment guide
            'llvm/llvm_basic/markdown-features', // Markdown usage in LLVM docs
            'llvm/llvm_basic/Why_What_Is_LLVM', // Markdown usage in LLVM docs

          ],
        },
        {
          type: 'category',
          label: 'LLVM Extras',
          items: [
            'llvm/llvm_extras/manage_llvm_version', // Managing LLVM versions
            'llvm/llvm_extras/translate-your-site', // Translation guide
            'llvm/llvm_extras/llvm-guide',         // Additional LLVM guides
            'llvm/llvm_extras/disable_pass',         // Additional LLVM guides

          ],
        },
      ],
    },
  ],

  // Sidebar for C++ Tutorials
  cppTutorialSidebar: [
    {
      type: 'category',
      label: 'C++ Tutorials',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Basic',
          items: [
            'c++/c++_main_file',               // Basic C++ introduction
          ],
        },
        {
          type: 'category',
          label: 'Intermediate',
          items: [
            'c++/intermediate/index',          // Intermediate C++ concepts
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'c++/advance/intro',              // Advanced C++ topics
          ],
        },
        {
          type: 'category',
          label: 'Standard',
          items: [
            'c++/standard/index',             // C++ Standard Library topics
          ],
        },
      ],
    },
  ],

  // Sidebar for MCQs and Interview Questions
  mcqSidebar: [
    {
      type: 'category',
      label: 'MCQs',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Basic MCQs',
          items: [
            'mcq/cpp_mcqs',                  // C++ MCQs
            'mcq/questions/basic/array-and-strings',
            'mcq/questions/basic/basic',
            'mcq/questions/basic/control-flow',
            'mcq/questions/basic/data-types',
            'mcq/questions/basic/functions',
            'mcq/questions/basic/intro-to-cpp',
            'mcq/questions/basic/io',
            'mcq/questions/basic/loop',
            'mcq/questions/basic/pointers-strings',
            'mcq/questions/basic/variables-and-constants',
          ],
        },
        {
          type: 'category',
          label: 'Intermediate MCQs',
          items: [
            'mcq/questions/intermediate/abstraction',
            'mcq/questions/intermediate/classes-objects',
            'mcq/questions/intermediate/constructors-destructors',
            'mcq/questions/intermediate/encapsulation',
            'mcq/questions/intermediate/file-handling',
            'mcq/questions/intermediate/friend-functions',
            'mcq/questions/intermediate/inheritance',
            'mcq/questions/intermediate/intermediate',
            'mcq/questions/intermediate/memory-management',
            'mcq/questions/intermediate/oop',
            'mcq/questions/intermediate/operator-overloading',
            'mcq/questions/intermediate/polymorphism',
          ],
        },
        {
          type: 'category',
          label: 'Advanced MCQs',
          items: [
            'mcq/questions/advanced/concurrency',
            'mcq/questions/advanced/cpp-features',
            'mcq/questions/advanced/exception-handling',
            'mcq/questions/advanced/lambdas',
            'mcq/questions/advanced/move-semantics',
            'mcq/questions/advanced/multithreading',
            'mcq/questions/advanced/stl',
            'mcq/questions/advanced/templates',
            'mcq/questions/advanced/vectors',
          ],
        },
        {
          type: 'category',
          label: 'Specialized MCQs',
          items: [
            'mcq/questions/specialized/algorithm',
            'mcq/questions/specialized/cpp-embedded',
            'mcq/questions/specialized/design-patterns',
            'mcq/questions/specialized/optimization',
            'mcq/questions/specialized/smart-pointers',
            'mcq/questions/specialized/specialized',
          ],
        },
        // Adding Interview Questions under Basic category
        {
          type: 'category',
          label: 'Basic Interview Questions',
          items: [
            'mcq/interview_question/cpp_interview_mcqs',
            'mcq/interview_question/basic/intro-to-cpp',
            'mcq/interview_question/basic/control-flow',
            'mcq/interview_question/basic/functions-recursion',
            'mcq/interview_question/basic/arrays-strings',
            'mcq/interview_question/basic/io-operations',
            'mcq/interview_question/basic/pointers-references'



          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
