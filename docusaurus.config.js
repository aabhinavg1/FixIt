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
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'], // ✅ Enable Mermaid

  markdown: {
    mermaid: true, // ✅ Enable Mermaid in Markdown
  },

  themeConfig: {
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' }, // ✅ Set light & dark themes
      options: {
        maxTextSize: 5000000, // ✅ Optimize large diagrams
      },
    },

    metadata: [
      { name: 'google-adsense-account', content: 'ca-pub-4507855210682789' }, // ✅ Add Google Site Verification
    ],

    navbar: {
      title: 'CompilerSutra',
      logo: {
        alt: 'CompilerSutra Logo',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'llvmTutorialSidebar', position: 'left', label: 'LLVM Tutorials' },
        { type: 'docSidebar', sidebarId: 'tvmTutorialSidebar', position: 'left', label: 'TVM Tutorials' },
        { type: 'docSidebar', sidebarId: 'gpuTutorialSidebar', position: 'left', label: 'GPU Tutorials' },
        { type: 'docSidebar', sidebarId: 'compilersSidebar', position: 'left', label: 'Compilers' },
        { type: 'docSidebar', sidebarId: 'cppTutorialSidebar', position: 'left', label: 'C++ Tutorials' },
        { type: 'docSidebar', sidebarId: 'dataStructureSidebar', position: 'left', label: 'DSA' },

        {
          type: 'dropdown',
          label: 'MCQ',
          position: 'left',
          items: [
            { label: 'Practice MCQ', to: '/docs/mcq/cpp_mcqs' },
            { label: 'Practice Interview Question', to: '/docs/mcq/interview_question/cpp_interview_mcqs' },
          ],
        },
        { href: 'https://github.com/aabhinavg1/FixIt', label: 'GitHub', position: 'right' },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'LLVM Tutorials', to: '/docs/llvm/intro-to-llvm' },
            { label: 'GPU Tutorials', to: '/docs/The_Graphic_Rendering_Pipeline' },
            { label: 'Compilers', to: '/docs/compilers/compiler' },
            { label: 'C++ Tutorials', to: '/docs/c++/c++_main_file' },
            { label: 'DSA', to: '/docs/DSA/DSA' },

          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'LLVM Documentation', href: 'https://llvm.org/docs/' },
            { label: 'Twitter', href: 'https://twitter.com/CompilerSutra' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/aabhinavg1/FixIt' },
            { label: 'About us', href: 'https://www.compilersutra.com/about_us/'},
            {label: 'Sponsor Us', href:'https://github.com/sponsors/aabhinavg1'},
            {label:'ContactUs' , href:'https://www.linkedin.com/in/abhinavcompilerllvm/'}
          ],
        },
        {
          title: 'Subscribe',
          items: [
            {label:'For Weekly Update', href:'/newsletter'}
          ],
        },  
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CompilerSutra.`,
    },
  },

  // ✅ Updated Scripts for Google AdSense, Google Tag Manager, and Google Analytics
  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      async: true,
      crossorigin: 'anonymous',
      'data-ad-client': 'ca-pub-4507855210682789',
    },
    {
      src: 'https://www.googletagmanager.com/gtm.js?id=GTM-N8G7MKF9',
      async: true,
    },
    {
      src: '/js/google-tag-manager.js', // ✅ External file for GTM
      async: true,
    },
    {
      src: '/js/google-analytics.js', // ✅ External file for GA
      async: true,
    },
  ],
};

module.exports = config;
