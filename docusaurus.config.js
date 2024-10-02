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
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/aabhinavg1/FixIt/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // SEO Metadata
      metadata: [
        { name: 'description', content: 'CompilerSutra: Dive into the world of LLVM, MLIR, TVM, GPU optimizations, and compiler architecture. Tutorials, guides, and insights for modern compilers.' },
        { name: 'keywords', content: 'LLVM, MLIR, TVM, GPU, Compiler, Compiler Optimization, Compiler Design, LLVM Backend, LLVM IR, GPU Compiler, MLIR Tutorial, TVM Compiler' },
        { property: 'og:title', content: 'CompilerSutra | LLVM, MLIR, TVM, and GPU Compiler Architecture' },
        { property: 'og:description', content: 'Comprehensive guides and tutorials on LLVM, MLIR, TVM, and GPU compiler architecture. Learn how these technologies power modern compilers and optimizations.' },
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
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
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
                label: 'Tutorial',
                to: '/docs/intro',
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
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/aabhinavg1/FixIt',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CompilerSutra, Inc.`,
      },
    }),
};

export default config;
