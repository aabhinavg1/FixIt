/** @type {import('@docusaurus/types').Sidebar} */
const sidebars = {
  // Sidebar for Compiler Tutorials
  compilersSidebar: [
    {
      type: 'category',
      label: 'Compilers',
      collapsed: true,
      items: [
        'compilers/Compiler',                 // Overview of compilers
        'compilers/CPU/cpu-compilers',                // Tutorials specific to CPU compilers
        'compilers/GPU/gpu-compilers',                // Tutorials specific to GPU compilers
        'compilers/back_end/introduction-to-backend-compilers',           // Backend concepts and tutorials
        'compilers/flag/compiler-flags',               // Compiler flags and optimizations
        'compilers/front_end/compiler-frontend',          // Frontend concepts and tutorials
        'compilers/other_arch/other-architectures',         // Tutorials for other architectures
        'compilers/gcc_vs_llvm',             // Tutorials for gcc vs llvm
        'compilers/clang-c-vs-cpp-compilation', //Tutorials for clang c vs cpp
        'compilers/Verification_Vs_Validation' // Tutorial for the verification vs validation
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
        'gpu/OptimizationOfGPU',                  // GPU-specific optimization techniques
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
      ],
    }
  ],

  //side bar for the DSA
  dataStructureSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: [
        'DSA/DSA',
        'DSA/introduction-to-dsa',
        'DSA/Mathematical_Foundation',
        'DSA/Time_and_space'
      ]
    },
    
    {
      type: 'category',
      label: 'Linear DSA',
      collapsed: true,
      items: [
        'DSA/Linear_DSA',
      ]
    }
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
        {
          type: 'category',
          label: 'Standard',
          items: [
            'c++/standard/intro',             // C++ Standard Library topics
          ],
        },
      ],
    },
  ],
 //Sibebar for TVM 
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
          'tvm/basics/autotuning',
        ],
      },
      {
        type: 'category',
        label: 'TVM Intermediate',
        collapsed: true,
        items: [
          'tvm/intermediate/graph-optimizations',
          'tvm/intermediate/schedule-tuning',
          'tvm/intermediate/relay',
        ],
      },
      {
        type: 'category',
        label: 'TVM Advanced',
        collapsed: true,
        items: [
          'tvm/advanced/custom-pass',
          'tvm/advanced/hardware-targets',
          'tvm/advanced/meta-scheduler',
        ],
      },
      {
        type: 'category',
        label: 'TVM Deployment',
        collapsed: true,
        items: [
          'tvm/deployment/runtime',
          'tvm/deployment/edge',
          'tvm/deployment/cloud',
        ],
      },
    ],
  },
],

// sidebar for the project
projectSidebar: [
  {
  type: 'category',
  label: 'project',
  collapsed: true,
  items: [
    'project/Project',
  ],
},
{
  type: 'category',
  label: 'Python Automation Project',
  collapsed: true,
  items: [
  'project/python_automation/python_automation',
  'project/python_automation/automate_boring_stuff/system-specs-collector/system_spec_collector'
  ]
},
],

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
