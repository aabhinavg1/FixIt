/** @type {import('@docusaurus/types').SidebarsConfig} */
const sidebars = {
  // Sidebar for Compiler Tutorials
  compilersSidebar: [
    {
      type: 'category',
      label: 'Know Your Compiler',
      collapsed: false,
      items: [
        'compilers/Compiler',
        'compilers/sourcecode_to_executable',
        'compilers/front_end/compiler-frontend',
        'compilers/front_end/role_of_parser',
        'compilers/back_end/introduction-to-backend-compilers',
        'compilers/flag/compiler-flags',
        'compilers/Verification_Vs_Validation',
        'compilers/build_your_compiler',
        'compilers/other_arch/other-architectures',
        'compilers/basic_block_in_compiler',
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
        'gpu/opencl/basic/running_first_opencl_code_part2_a',
        'gpu/opencl/basic/detecting_opencl_gpu_on_android',
        'gpu/opencl/basic/Writing_your_first_kernel',
      ],
    },
  ],
  
  gpuProgrammingSidebar: [
    {
      type: 'category',
      label: 'Table of Content',
      collapsed: true,
      items: [
        'gpu/gpu_programming/gpu_programming_toc',
        'gpu/gpu_programming/how_computer_works',
        'gpu/gpu_programming/Setting_your_Gpu',
        //'gpu/gpu_programming/what_is_cpu',
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
        'gpu/introduction',
        'gpu/optimizations',
        'gpu/evolution-of-parallel-programming',
        'gpu/CPU_Vs_GPU',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: [
        'gpu/Parallel_Programming/Intro_to_Parallel_Programming',
        'gpu/what_is_gpu',
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
        'llvm/intro-to-llvm',
        
        {
          type: 'category',
          label: 'LLVM Basics',
          items: [
            'llvm/llvm_basic/Build',
            'llvm/llvm_basic/What_is_LLVM',
            'llvm/llvm_basic/Why_LLVM',
            'llvm/llvm_basic/congratulations',
            'llvm/llvm_basic/deploy-your-site',
            'llvm/fix_llvm_build_bugs',

          ],
        },
        {
          type: 'category',
          label: 'LLVM Extras',
          items: [
            'llvm/llvm_extras/manage_llvm_version',
            'llvm/llvm_extras/llvm-guide',
            'llvm/llvm_extras/llvm_pass_timing',
          ],
        },
        {
          type: 'category',
          label: 'LLVM Tools',
          items: [
            'llvm/llvm_tools/llvm_tools',
          ],
        },
        {
          type: 'category',
          label: 'LLVM IR',
          items: [
            'llvm/llvm_ir/intro_to_llvm_ir',
          ],
        },
        {
          type: 'category',
          label: 'LEVEL 0 - Compiler-Specific DSA Foundations',
          items: [
            'llvm/llvm_Curriculum/level0/Static_Single_Assignment',
            'llvm/llvm_Curriculum/level0/Static_Single_Assignment_part2'
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
        'c++/cpp-learning-roadmap',
        {
          type: 'category',
          label: 'Basic',
          collapsed: true,
          items: [
            'c++/basic/index',
            'c++/basic/intro',
            'c++/basic/cpp_tutorial_with_cmake',
            'c++/basic/opp-cpp',
            'c++/basic/books',
            'c++/basic/docs',
            'c++/basic/tools',
            'c++/basic/gdb',
            'c++/basic/valgrind',
            'c++/basic/testing',
            'c++/basic/googletest',
            'c++/basic/catch2',
            'c++/basic/open-source',
            'c++/basic/binary_hexadecimal',
            'c++/basic/c++_compilers',
          ],
        },
        {
          type: 'category',
          label: 'Intermediate',
          collapsed: true,
          items: [
            'c++/intermediate/index',
            'c++/intermediate/intro',
            'c++/intermediate/books',
            'c++/intermediate/docs',
            'c++/intermediate/tools',
            'c++/intermediate/gdb',
            'c++/intermediate/valgrind',
            'c++/intermediate/testing',
            'c++/intermediate/googletest',
            'c++/intermediate/catch2',
            'c++/intermediate/open-source',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          collapsed: true,
          items: [
            'c++/advanced/index',
            'c++/advanced/books',
            'c++/advanced/docs',
            'c++/advanced/tools',
            'c++/advanced/gdb',
            'c++/advanced/valgrind',
            'c++/advanced/testing',
            'c++/advanced/googletest',
            'c++/advanced/catch2',
            'c++/advanced/open-source',
          ],
        },
        {
          type: 'category',
          label: 'Expert',
          collapsed: true,
          items: [
            'c++/expert/index',
            'c++/expert/books',
            'c++/expert/docs',
            'c++/expert/tools',
            'c++/expert/gdb',
            'c++/expert/valgrind',
            'c++/expert/testing',
            'c++/expert/googletest',
            'c++/expert/catch2',
            'c++/expert/open-source',
          ],
        },
        {
          type: 'category',
          label: 'Projects',
          collapsed: true,
          items: [
            'c++/projects/index',
            'c++/projects/books',
            'c++/projects/docs',
            'c++/projects/tools',
            'c++/projects/gdb',
            'c++/projects/valgrind',
            'c++/projects/testing',
            'c++/projects/googletest',
            'c++/projects/catch2',
            'c++/projects/open-source',
          ],
        },
        {
          type: 'category',
          label: 'Resources',
          collapsed: true,
          items: [
            'c++/resources/index',
            'c++/resources/books',
            'c++/resources/docs',
            'c++/resources/tools',
            'c++/resources/gdb',
            'c++/resources/valgrind',
            'c++/resources/testing',
            'c++/resources/googletest',
            'c++/resources/catch2',
            'c++/resources/open-source',
          ],
        },
        {
          type: 'category',
          label: 'Standard (C++ Versions)',
          collapsed: true,
          items: [
            'c++/standard/index',
            'c++/standard/intro',
            'c++/standard/C++11',
            'c++/standard/c++14',
            'c++/standard/c++17',
            'c++/standard/c++23',




          ],
        },
        {
          type: 'category',
          label: 'Advance (Legacy)',
          collapsed: true,
          items: [
            'c++/advance/index',
            'c++/advance/intro',
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

  // Sidebar for Python Automation
  pythonAutomationSidebar: [
    {
      type: 'category',
      label: 'Python Automation',
      collapsed: true,
      items: ['python/python_tutorial'],
    },
  ],

  // Sidebar for DSA Tutorials
  dsaTutorialSidebar: [
    {
      type: 'category',
      label: 'DSA Tutorials',
      collapsed: true,
      items: [
        'DSA/introduction-to-dsa',
        'DSA/Mathematical_Foundation',
        'DSA/DSA',
        'DSA/Bit_Manipulation_Technique',
        'DSA/Time_and_space',
        'DSA/Linear_DSA',
        'DSA/non-Linear-DSA',
        'DSA/arrays-and-strings',
      ],
    },
  ],

  // Sidebar for Linux Tutorials
  linuxTutorialSidebar: [
    {
      type: 'category',
      label: 'Linux Tutorials',
      collapsed: true,
      items: [
        'linux/intro_to_linux',
        'linux/basic_of_linux',
        'linux/What_is_bashrc',
        'linux/Environment_variable_in_linux',
        'linux/Declaring_Variable_In_bash',
        'linux/if_else_in_bash',
        'linux/loop_in_bash',
        'linux/markdown_checker',
        'linux/markdown_checker_part2',
        'linux/markdown_checker_part3',
        'linux/username_in_linux',
        'linux/know_machine_ip',
        'linux/how_ssh_scp_work',
        'linux/live',
      ],
    },
  ],

  // Sidebar for Project Pages
  projectSidebar: [
    {
      type: 'category',
      label: 'Project',
      collapsed: true,
      items: ['project/Project'],
    },
  ],

  // Sidebar for C++ MCQs and Interview Questions
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
            'mcq/cpp_mcqs',
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
            'mcq/questions/basic/pointers-and-references',
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
            'mcq/interview_question/basic/data-types-variables',
            'mcq/interview_question/intermediate/classes-object',
            'mcq/interview_question/intermediate/constructors-destructors',
            'mcq/interview_question/intermediate/inheritance-polymorphism',
            'mcq/interview_question/intermediate/oop',
            'mcq/interview_question/intermediate/exception-handling',
            'mcq/interview_question/intermediate/memory-management',
            'mcq/interview_question/intermediate/operator-overloading',
            'mcq/interview_question/advanced/templates',
            'mcq/interview_question/advanced/modern-cpp-features',
            'mcq/interview_question/advanced/multi-threading',
            'mcq/interview_question/advanced/stl',
            'mcq/interview_question/advanced/lambda-expressions',
            'mcq/interview_question/advanced/optimization-debugging',
            'mcq/interview_question/advanced/algorithms-design-patterns',

            //standard
            'mcq/interview_question/standard/modern-cpp',
            'mcq/interview_question/standard/stl-algorithms',

            'mcq/interview_question/specialized/cpp-embedded',
            'mcq/interview_question/specialized/debugging-profiling',
            'mcq/interview_question/specialized/memory-management-detail',
            'mcq/interview_question/specialized/high-performance',
            'mcq/interview_question/specialized/debugging-profiling',
            'mcq/interview_question/specialized/high-performance',
            'mcq/interview_question/specialized/smart-pointers',

            //cpp standard
            'mcq/interview_question/cpp11/cpp11',
            'mcq/interview_question/cpp14/cpp14',
            'mcq/interview_question/cpp20/cpp20',
          ],
        },
                {
          type: 'category',
          label: 'Interview Questions',
          items: [
            'mcq/interview_question/advanced/stl',
          ],
        },
        {
          type: 'category',
          label: 'Standard Questions',
          items: [
            'mcq/interview_question/cpp11/cpp11',
          ],
        },
      ],
    },
  ],

  //sidebar for the howToSidebar
howToSidebar: [
  {
    type: 'category',
    label: 'How to Guides',
    collapsed: false,
    items: [
        'how_to/how_to_do',
        'how_to/run-multiple-cpp-files',
        'how_to/how_to_build_cpp_with_make',
        'how_to/how_to_use_cmake',
        'how_to/library_part1',
        'how_to/static_library',
        'how_to/dynamic_library',
    
    ],
  },
    {
    type: 'category',
    label: 'Bit Manipulation',
    collapsed: false,
    items: [
        'how_to/two_compliment',
    ],
  },
],

  //sidebar for the tech blog
  techblogSidebar: [
    {
      type: 'category',
      label: 'Tech Blog',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Tech Blog on AI',
          collapsed: true,
          items: [
            'AI/is_gpt_is_opensource',
          ],
        },
      ],
    },
  ],

  // 🔵 Sidebar for React MCQs
  reactMcqSidebar: [
    {
      type: 'category',
      label: 'React MCQs',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Basic React MCQs',
          collapsed: true,
          items: [
            'react_mcq/react_mcq',
            'react_mcq/basic/intro-to-react',
            'react_mcq/basic/jsx',
            'react_mcq/basic/components',
            'react_mcq/basic/props-state',
            'react_mcq/basic/events',
            'react_mcq/basic/conditional-rendering',
            'react_mcq/basic/lists-keys',
            'react_mcq/basic/forms',
          ],
        },
        {
          type: 'category',
          label: 'Intermediate React MCQs',
          collapsed: true,
          items: [
            'react_mcq/intermediate/lifecycle',
            'react_mcq/intermediate/hooks',
            'react_mcq/intermediate/effects',
            'react_mcq/intermediate/router',
            'react_mcq/intermediate/lifting-state',
            'react_mcq/intermediate/refs',
            'react_mcq/intermediate/controlled-uncontrolled',
          ],
        },
        {
          type: 'category',
          label: 'Advanced React MCQs',
          collapsed: true,
          items: [
            'react_mcq/advanced/custom-hooks',
            'react_mcq/advanced/context-api',
            'react_mcq/advanced/use-reducer',
            'react_mcq/advanced/memoization',
            'react_mcq/advanced/lazy-loading',
            'react_mcq/advanced/error-boundaries',
            'react_mcq/advanced/portals',
            'react_mcq/advanced/suspense',
          ],
        },
        {
          type: 'category',
          label: 'Specialized React MCQs',
          collapsed: true,
          items: [
            'react_mcq/specialized/redux',
            'react_mcq/specialized/performance',
            'react_mcq/specialized/testing',
            'react_mcq/specialized/typescript',
            'react_mcq/specialized/production',
          ],
        },
      ],
    },
  ],
  
  domainMcqSidebar: [
  {
    type: 'category',
    label: 'Domain Specific MCQs',
    collapsed: false,
    items: [
      {
        type: 'category',
        label: 'Competitive Programming MCQs',
        collapsed: true,
        items: [
          'mcq/questions/domain/competitive-programming',
        ],
      },
      {
        type: 'category',
        label: 'System Programming MCQs',
        collapsed: true,
        items: [
          'mcq/questions/domain/system-programming',
        ],
      },
      {
        type: 'category',
        label: 'Compiler Design MCQs',
        collapsed: true,
        items: [
          'mcq/questions/domain/compiler-dev',
        ],
      },
      {
        type: 'category',
        label: 'Embedded Systems MCQs',
        collapsed: true,
        items: [
          'mcq/questions/domain/embedded',
        ],
      },
      {
        type: 'category',
        label: 'HPC & Data Science MCQs',
        collapsed: true,
        items: [
          'mcq/questions/domain/data-science-hpc',
        ],
      },
    ],
  },
],


  LLVMPassSidebar: [
    {
      type: 'category',
      label: 'LLVM_Pass_Tracker',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'LLVM_Pass_Tracker',
          collapsed: true,
          items: [
            'llvm/llvm_pass_tracker/llvm_pass',
          ],
        },
      ],
    },
  ],
  InliLLVMPassSidebarnerPass: [
    {
      type: 'category',
      label: 'Inliner Pass',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Inliner Pass Verson',
          collapsed: true,
          items: [
            'llvm/llvm_pass_tracker/transformpass/inliner_llvm_v1',
          ],
        },
      ],
    },
  ],

youtubeliveSidebar: [
  {
    type: 'category',
    label: 'Live Sessions',
    collapsed: false,
    items: [
      'live/live',
    ],
  },
]


};


module.exports = sidebars;
