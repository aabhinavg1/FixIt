/** @type {import('@docusaurus/types').Sidebar} */
const sidebars = {
  compilersSidebar: [
    {
      type: 'category',
      label: 'Compilers',
      items: [
        'compilers/compiler',                      // Document ID for intro.md
        'compilers/CPU/index',        // Document ID for Know_Your_Compilers.md
        'compilers/GPU/index',
        'compilers/back_end/index',
        'compilers/flag/index',
        'compilers/front_end/index',
        'compilers/other_arch/index',
      ],
    },
  ],
  gpuTutorialSidebar: [
    {
      type: 'category',
      label: 'GPU Tutorials',
      items: [
        'gpu/introduction',                      // Document ID for introduction.md
        'gpu/optimizations',                     // Document ID for optimizations.md
      ],
    },
  ],
  llvmTutorialSidebar: [
    {
      type: 'category',
      label: 'LLVM Tutorials',
      items: [
        'llvm/intro-to-llvm',
        'llvm/llvm_basic/Build',                      // Document ID for Build.md
        'llvm/llvm_basic/What_is_LLVM',               // Document ID for What_is_LLVM.md
        'llvm/llvm_basic/Why_LLVM',                   // Document ID for Why_LLVM.md
        'llvm/llvm_basic/congratulations',            // Document ID for congratulations.md
        'llvm/llvm_basic/deploy-your-site',           // Document ID for deploy-your-site.md
        'llvm/llvm_basic/markdown-features',          // Document ID for markdown-features.mdx
      ],
    },
    {
      type: 'category',
      label: 'LLVM Extras',
      items: [
        'llvm/llvm_extras/manage_llvm_version',       // Document ID for manage_llvm_version.md
        'llvm/llvm_extras/translate-your-site',       // Document ID for translate-your-site.md
        'llvm/llvm_extras/llvm-guide',          //Document ID for More_about_LLVM
      ],
    },
  ],
  cppTutorialSidebar: [
    {
      type: 'category',
      label: 'C++ Tutorials',
      items: [
        {
          type: 'category',
          label: 'Basic',
          items: [
            'c++/c++_main_file',                   // Document ID for basic/intro.md
          ],
        },
        {
          type: 'category',
          label: 'Intermediate',
          items: [
            'c++/intermediate/index',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'c++/advance/intro',                 // Document ID for advance/intro.md
          ],
        },
        {
          type: 'category',
          label: 'Standard',
          items: [
            'c++/standard/index',
          ],
        },
      ],
    },
  ],
  mcqSidebar: [
    {
      type: 'category',
      label: 'MCQs',
      items: [
        {
          type: 'category',
          label: 'Basic MCQs',
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
      ],
    },
  ],
};

module.exports = sidebars;
