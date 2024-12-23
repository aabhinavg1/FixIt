// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CompilerSutra',
  tagline: 'Unleashing Compiler Power for Cutting-Edge Innovation!',
  favicon: 'img/favicon.ico',

  url: 'https://compilersutra.com/',
  baseUrl: '/',

  organizationName: 'aabhinavg1',
  projectName: 'FixIt',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
        type: 'docSidebar',
        sidebarId: 'mcqSidebar',
        position: 'left',
        label: 'MCQ',
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
              to: '/docs/llvm/intro-to-llvm',
            },
            {
              label: 'GPU Tutorials',
              to: '/docs/The_Graphic_Rendering_Pipeline',
            },
            {
              label: 'Compilers',
              to: '/docs/compilers/compiler',
            },
            {
              label: 'C++ Tutorials',
              to: '/docs/c++/c++_main_file',
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
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/path/to/critical-resource.js',
        as: 'script',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/path/to/critical-style.css',
        as: 'style',
      },
    },
  ],

};

module.exports = config;
