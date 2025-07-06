/** @type {import('@docusaurus/types').Sidebar} */
const sidebars = {
  // Sidebar for Compiler Tutorials
  compilersSidebar: [
    {
      type: 'category',
      label: 'Know Your Compiler',
      collapsed: false,
      items: [
        'compilers/Compiler', // Overview
        'compilers/front_end/compiler-frontend',
        'compilers/front_end/role_of_parser',
        'compilers/back_end/introduction-to-backend-compilers',
        'compilers/flag/compiler-flags',
        'compilers/Verification_Vs_Validation',
        'compilers/build_your_compiler',
        'compilers/other_arch/other-architectures',
      ],
    },
    {
      type: 'category',
      label: 'GCC vs LLVM',
      collapsed: true,
      items: [
        'compilers/gcc_vs_llvm',
        'compilers/gcc_vs_llvm_2',
      ],
    },
    {
      type: 'category',
      label: 'C vs C++ Compilation',
      collapsed: true,
      items: [
        'compilers/clang-c-vs-cpp-compilation',
      ],
    },
    {
      type: 'category',
      label: 'CPU Compilers',
      collapsed: true,
      items: [
        'compilers/CPU/cpu-compilers',
      ],
    },
    {
      type: 'category',
      label: 'GPU Compilers',
      collapsed: true,
      items: [
        'compilers/GPU/gpu-compilers',
      ],
    },
  ],

  // Sidebar for OpenCL Tutorials
  openclTutorialSidebar: [
    {
      type: 'category',
      label: 'OpenCL Tutorials',
      collapsed: true,
      items: [
        'gpu/opencl/opencl',
        'gpu/opencl/basic/what_is_opencl',
        'gpu/opencl/basic/setting_up_opencl',
        'gpu/opencl/basic/running_first_opencl_code',
      ],
    },
  ],

  // Sidebar for GPU Tutorials
  gpuTutorialSidebar: [
    {
      type: 'category',
      label: 'GPU Tutorials',
      collapsed: true,
      items: [
        'gpu/introduction',                   // Introduction to GPU concepts
        'gpu/optimizations',                  // GPU-specific optimization techniques
        'gpu/evolution-of-parallel-programming',
        'gpu/CPU_Vs_GPU'
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: [
        'gpu/Parallel_Programming/Intro_to_Parallel_Programming',
        'gpu/what_is_gpu'
      ],
    },
  ],

  // Sidebar for LLVM Tutorials
  llvmTutorialSidebar: [
    {
      type: 'category',
      label: 'LLVM Tutorials',
      collapsed: true,
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
          ],
        },
        {
          type: 'category',
          label: 'LLVM Extras',
          items: [
            'llvm/llvm_extras/manage_llvm_version', // Managing LLVM versions
            'llvm/llvm_extras/llvm-guide',         // Additional LLVM guides
            'llvm/llvm_extras/llvm_pass_timing',
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
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Basic',
          items: [
            'c++/CppTutorial',               // Basic C++ introduction
          ],
        },
        {
          type: 'category',
          label: 'Intermediate',
          items: [
            'c++/intermediate/IntermediateCpp',          // Intermediate C++ concepts
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'c++/advance/intro',              // Advanced C++ topics
          ],
        },
      ],
    },
  ],

  // Sidebar for TVM Tutorials
  tvmTutorialSidebar: [
    {
      type: 'category',
      label: 'TVM Tutorials',
      collapsed: true,
      items: [
        'tvm/tvm-for-beginners',
        {
          type: 'category',
          label: 'TVM Basics',
          collapsed: true,
          items: [
            'tvm/basics/installation',
            'tvm/basics/first-model',
          ],
        },
      ],
    },
  ],
  
   // Sidebar for Python Automation and Linux Tutorials
   pythonAutomationSidebar: [
    {
      type: 'category',
      label: 'Python Automation',
      collapsed: true,
      items: [
        'python/python_tutorial',        // Introduction to Python
        //'python/automation-basics',      // Basics of automation with Python
        //'python/advanced-automation',    // Advanced automation techniques
      ],
    },
  ],

  dsaTutorialSidebar: [
    {
      type: 'category',
      label: 'DSA Tutorials',
      collapsed: true, // You can set it to false if you want it expanded by default
      items: [
        'DSA/introduction-to-dsa',         // Introduction to DSA
        'DSA/Mathematical_Foundation',     // Mathematical Foundation
        'DSA/DSA',                         // DSA Overview (or DSA.mdx, based on your file name)
        'DSA/Bit_Manipulation_Technique',  // Bit Manipulation Technique
        'DSA/Time_and_space',              // Time and Space Complexity
        'DSA/Linear_DSA',                  // Linear Data Structures
      ],
    },
  ],
  
  linuxTutorialSidebar: [
    {
      type: 'category',
      label: 'Linux Tutorials',
      collapsed: true,
      items: [
        'linux/intro_to_linux',         // Introduction to Linux
        'linux/basic_of_linux',
        'linux/What_is_bashrc',
        'linux/Environment_variable_in_linux',
        //'linux/linux-commands',         // Common Linux commands
        //'linux/advanced-linux',         // Advanced Linux topics
      ],
    },
  ],

  // Sidebar for Projects and Others
  projectSidebar: [
    {
      type: 'category',
      label: 'Project',
      collapsed: true,
      items: [
        'project/Project',
      ],
    },
  ],

  // Sidebar for MCQs and Interview Questions
  // Sidebar for MCQs and Interview Questions
  mcqSidebar: [
    {
      type: 'category',
      label: 'MCQs',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Basic MCQs',
          collapsed: true,
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
            'mcq/questions/basic/pointers-and-references'
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
            'mcq/questions/intermediate/getting-started-with-oops-concept',
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
            'mcq/questions/advanced/concurrency-and-synchronization',
            'mcq/questions/advanced/cpp-features-11-14-17-20',
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
          label: 'Interview Questions',
          items: [
            'mcq/interview_question/cpp_interview_mcqs',
            'mcq/interview_question/basic/intro-to-cpp',
            'mcq/interview_question/basic/control-flow',
            'mcq/interview_question/basic/functions-recursion',
            'mcq/interview_question/basic/arrays-strings',
            'mcq/interview_question/basic/io-operations',
            'mcq/interview_question/basic/pointers-references',
            'mcq/interview_question/intermediate/ClassesObjects',
            'mcq/interview_question/intermediate/CppInterviewQuestionsConstructorsDestructors',
            'mcq/interview_question/intermediate/EssentialCppInterviewQuestionsInheritancePolymorphism',
            'mcq/interview_question/intermediate/oop',
            'mcq/interview_question/intermediate/CppInterviewQuestionsExceptionHandling',
            'mcq/interview_question/intermediate/memory-management',
            'mcq/interview_question/intermediate/operator-overloading',

          ],
        },

        //Adding mcq with the standard

        {
          type: 'category',
          label: 'Standatd Questions',
          items: [
            'mcq/interview_question/cpp11/cpp11',
          ],
        },
      ],
    },
  ],
};



module.exports = sidebars;
