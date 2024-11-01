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

  plugins: [
    [
      '@docusaurus/theme-mermaid',
      {
        markdown: {
          mermaid: true,
        },
      },
    ],
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-CJDGBRKJ5W',
        anonymizeIP: true, // Optional
      },
    ],
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
    [
      'vercel-analytics',
      {
        debug: true,
        mode: 'auto',
      },
    ],
  ],

  themeConfig: {
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
          sidebarId: 'llvmTutorialSidebar',
          position: 'left',
          label: 'LLVM Tutorials',
        },
        {
          type: 'docSidebar',
          sidebarId: 'gpuTutorialSidebar',
          position: 'left',
          label: 'GPU Tutorials',
        },
        {
          type: 'docSidebar',
          sidebarId: 'compilersSidebar',
          position: 'left',
          label: 'Compilers',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cppTutorialSidebar',
          position: 'left',
          label: 'C++ Tutorials',
        },
        {
          href: 'https://github.com/aabhinavg1/FixIt',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://topmate.io/compilersutra/',
          label: 'Mentor',
          position: 'right',
        },
        {
          href: 'https://www.youtube.com/@codeforpython',
          label: 'YouTube',
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
              label: 'LLVM Tutorials',
              to: '/docs/llvm/llvm_basic/Build',
            },
            {
              label: 'GPU Tutorials',
              to: '/docs/The_Graphic_Rendering_Pipeline',
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
              label: 'LLVM Documentation',
              href: 'https://llvm.org/docs/',
            },
            {
              label: 'Discord Community',
              href: 'https://discordapp.com/invite/gandiv',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/CompilerSutra',
            },
            {
              label: 'Mentorship',
              href: 'https://topmate.io/compilersutra/',
            },
            {
              label: 'YouTube Channel',
              href: 'https://www.youtube.com/@codeforpython',
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
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        href: 'https://www.compilersutra.com/',
        hreflang: 'en-US',
      },
    },
  ],
};

module.exports = config;
