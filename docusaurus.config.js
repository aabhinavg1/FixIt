// @ts-check
// @type JSDoc annotations allow editor autocompletion and type checking
// (when paired with @ts-check).
// See: https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CompilerSutra',
  tagline: 'Unleashing Compiler Power for Cutting-Edge Innovation!',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://compilersutra.com/',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'aabhinavg1', // Your GitHub org/user name.
  projectName: 'FixIt', // Your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // Reference the sidebars.js file
          editUrl: 'https://github.com/aabhinavg1/FixIt/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Add the Google Analytics plugin here
  plugins: [
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-CJDGBRKJ5W',
        anonymizeIP: true, // Optional
      },
    ],
    // Adding PWA support
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString', 'standalone'],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/CompilerSutra.png' },
          { tagName: 'meta', name: 'theme-color', content: '#ffffff' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // SEO Metadata
      metadata: [
        { name: 'description', content: 'CompilerSutra: Dive into the world of LLVM, MLIR, TVM, GPU optimizations, and compiler architecture.' },
        { name: 'keywords', content: 'LLVM, MLIR, TVM, GPU, Compiler, Optimization' },
        { property: 'og:title', content: 'CompilerSutra | LLVM, MLIR, TVM, and GPU Compiler Architecture' },
        { property: 'og:description', content: 'Comprehensive guides and tutorials on LLVM, MLIR, TVM, and GPU compiler architecture.' },
        { property: 'og:image', content: 'https://compilersutra.com/img/CompilerSutra.png' },
        { property: 'og:url', content: 'https://compilersutra.com/' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'CompilerSutra | Comprehensive Guides on LLVM, MLIR, TVM, and GPU' },
        { name: 'twitter:description', content: 'Explore in-depth tutorials and articles on LLVM, MLIR, TVM, and GPU compiler optimization.' },
        { name: 'twitter:image', content: 'https://compilersutra.com/img/twitter-card.png' },
      ],

      image: 'img/llvm-compiler-social-card.jpg', // Default Open Graph image

      navbar: {
        title: 'CompilerSutra',
        logo: {
          alt: 'CompilerSutra Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'llvmTutorialSidebar', // Updated sidebar ID for LLVM tutorials
            position: 'left',
            label: 'LLVM_Tutorial', // Updated label
          },
          {
            type: 'docSidebar',
            sidebarId: 'gpuTutorialSidebar', // Added sidebar ID for GPU tutorials
            position: 'left',
            label: 'GPU_Tutorial', // Added label for GPU tutorials
          },
          {
            type: 'docSidebar',
            sidebarId: 'compilersSidebar', // Added sidebar ID for compilers tutorials
            position: 'left',
            label: 'Compilers', // Added label for compilers
          },
          {
            type: 'docSidebar',
            sidebarId: 'cppTutorialSidebar', // Added sidebar ID for C++ tutorials
            position: 'left',
            label: 'C++ Tutorials', // Added label for C++ tutorials
          },
          {
            href: 'https://github.com/aabhinavg1/FixIt',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'LLVM_Tutorial',
                to: '/docs/llvm_basic/Build',
              },
              {
                label: 'GPU_Tutorial',
                to: '/docs/gpu/introduction',
              },
              {
                label: 'Compilers',
                to: '/docs/compilers/intro',
              },
              {
                label: 'C++ Tutorials',
                to: '/docs/cpp-tutorial',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LLVM',
                href: 'https://llvm.org/docs/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/gandiv',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/CompilerSutra',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/abhinavcompilerllvm/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/aabhinavg1/FixIt',
              },
            ],
          },
        ],
        copyright: `Copyright \u00A9 ${new Date().getFullYear()} CompilerSutra, Inc.`,
      },
    }),

  // Add self-referencing hreflang tags
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/c++/advance/intro/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/c++/intermediate/intro/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/c++/standard/intro/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/compilers/intro/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/compilers/know_your_compilers/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/cpp-tutorial/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/gpu/introduction/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/gpu/optimizations/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/llvm_basic/build/',
        hreflang: 'en-US',
      },
    },
    // New hreflang entries for the additional URLs
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/llvm_basic/congratulations/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/llvm_basic/deploy-your-site/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/llvm_basic/intro-to-llvm/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/llvm_basic/markdown-features/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/llvm_basic/why_llvm/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/llvm_extras/llvm-guide/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/llvm_extras/manage_llvm_version/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/llvm_extras/translate-your-site/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/tags/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/tags/compilers/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/tags/introduction/',
        hreflang: 'en-US',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/docs/tags/llvm/',
        hreflang: 'en-US',
      },
    },
  ],
};

module.exports = config;
