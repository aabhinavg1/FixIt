/** @type {import('@docusaurus/types').Sidebar} */
const sidebars = {
  compilersSidebar: [
    {
      type: 'category',
      label: 'Compilers',
      items: [
        'compilers/intro',                      // Document ID for intro.md
        'compilers/Know_Your_Compilers',        // Document ID for Know_Your_Compilers.md
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
        'llvm_basic/Build',                      // Document ID for Build.md
        'llvm_basic/What_is_LLVM',               // Document ID for What_is_LLVM.md
        'llvm_basic/Why_LLVM',                   // Document ID for Why_LLVM.md
        'llvm_basic/congratulations',            // Document ID for congratulations.md
        'llvm_basic/deploy-your-site',           // Document ID for deploy-your-site.md
        'llvm_basic/markdown-features',          // Document ID for markdown-features.mdx
      ],
    },
    {
      type: 'category',
      label: 'LLVM Extras',
      items: [
        'llvm_extras/manage_llvm_version',       // Document ID for manage_llvm_version.md
        'llvm_extras/translate-your-site',       // Document ID for translate-your-site.md
        'llvm_extras/llvm-guide',          //Document ID for More_about_LLVM
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
            'c++/basic/comprehensive-cpp-tutorial',                   // Document ID for basic/intro.md
            'c++/basic/cpp_tutorial_with_cmake',
            'c++/basic/oop-in-cpp'
          ],
        },
        {
          type: 'category',
          label: 'Intermediate',
          items: [
            'c++/intermediate/intro',            // Document ID for intermediate/intro.md
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
            'c++/standard/intro',                // Document ID for standard/intro.md
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
