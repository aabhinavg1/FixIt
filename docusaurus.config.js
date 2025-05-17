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

  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  themeConfig: {
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
      options: {
        maxTextSize: 5000000,
      },
    },

    metadata: [
      { name: 'google-adsense-account', content: 'ca-pub-4507855210682789' },
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
        { type: 'docSidebar', sidebarId: 'projectSidebar', position: 'left', label: 'project' },

        {
          type: 'dropdown',
          label: 'MCQ',
          position: 'left',
          items: [
            { label: 'Practice MCQ', to: '/docs/mcq/cpp_mcqs' },
            { label: 'Practice Interview Question', to: '/docs/mcq/interview_question/cpp_interview_mcqs' },
          ],
        },
        {href: '/newsletter', label: 'Subscribe' , position: 'right' },
        { href: 'https://www.youtube.com/@compilersutra', label: 'youtube ', position: 'right' }, // Added Quora link
        { href: 'https://compilersutra.quora.com', label: '?', position: 'right' }, // Added Quora link

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
            { label: 'Sponsor Us', href: 'https://github.com/sponsors/aabhinavg1' },
            { label: 'Contact Us', href: 'https://www.linkedin.com/in/abhinavcompilerllvm/' },
          ],
        },
        {
          title: 'Subscribe',
          items: [
            { label: 'For Weekly Update', href: '/newsletter' },
          ],
        },
        {
          title: 'Cookies',
          items: [
            { label: 'Accept Cookies', href: '#', id: 'acceptCookies' },
            { label: 'Revoke Consent', href: '#', id: 'revokeCookies' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CompilerSutra.`,
    },
  },

  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      async: true,
      crossorigin: 'anonymous',
      'data-ad-client': 'ca-pub-4507855210682789',
    },
    {
      src: "https://cdn-cookieyes.com/client_data/d4cd2fb2a4f6dfbaadea6ad8/script.js",
      async: true,
      id: "cookieyes",
    },
    {
      src: 'https://www.googletagmanager.com/gtm.js?id=GTM-N8G7MKF9',
      async: true,
    },
    {
      src: "https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js",
      async: true,
      "custom-element": "amp-auto-ads",
    },
    { src: '/js/contest.js', async: true },
    { src: '/js/amp-auto-ads.js', async: true },
    { src: '/js/google-tag-manager.js', async: true },
    { src: '/js/google-analytics.js', async: true },
    { src: '/js/structured.js', async: true },
    { src: '/js/llvm.js', async: true },
  ],

  // Inject AdSense script separately in custom JavaScript
  customFields: {
    adsenseClient: 'ca-pub-4507855210682789',
  },
};

module.exports = config;
