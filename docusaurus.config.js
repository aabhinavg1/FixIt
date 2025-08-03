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
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/aabhinavg1/FixIt/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
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
          {
            type: 'dropdown',
            label: 'Tutorials',
            position: 'left',
            items: [
              { label: 'LLVM Tutorials', to: '/docs/llvm/intro-to-llvm' },
              { label: 'TVM Tutorials', to: '/docs/tvm-for-beginners' },
              { label: 'GPU Tutorials', to: '/docs/the_graphic_rendering_pipeline/' },
              { label: 'Compilers', to: '/docs/compilers/compiler' },
              { label: 'C++ Tutorials', to: '/docs/c++/cpp-learning-roadmap' },
              { label: 'DSA Tutorials', to: '/docs/DSA/' },
              { label: 'Python Automation', to: '/docs/python/python_tutorial' },
              { label: 'Linux Tutorials', to: '/docs/linux/intro_to_linux' },  // Added Linux
              { label: 'GPU Programming', to: '/docs/gpu/gpu_programming/gpu_programming_toc'},  // Added Linux       
              {label: 'OpenCl Tutorial' , to: '/docs/gpu/opencl'}
            ],
          },
          { type: 'docSidebar', sidebarId: 'howToSidebar',  position: 'left', label: 'How-To Guides'},
          { type: 'docSidebar', sidebarId: 'projectSidebar', position: 'left', label: 'Project' },
          {
            type: 'dropdown',
            label: 'MCQ',
            position: 'left',
            items: [
              { label: 'Practice MCQ CPP', to: '/docs/mcq/cpp_mcqs' },
              { label: 'Practice Interview Question and Answer CPP', to: '/docs/mcq/interview_question/cpp_interview_mcqs' },
              {label: 'React MCQ', to: '/docs/react_mcq'}
            ],
          },
          { href: 'https://www.youtube.com/@compilersutra', label: 'youtube', position: 'right' },
          { href: 'https://compilersutra.quora.com', label: '?', position: 'right' },
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
              { label: 'About us', href: 'https://www.compilersutra.com/about_us/' },
              { label: 'Sponsor Us', href: 'https://github.com/sponsors/aabhinavg1' },
              { label: 'Contact Us', href: 'https://www.linkedin.com/in/abhinavcompilerllvm/' },
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
    }),

  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      async: true,
      crossorigin: 'anonymous',
      'data-ad-client': 'ca-pub-4507855210682789',
      defer: true,
    },
    {
      src: "https://cdn-cookieyes.com/client_data/d4cd2fb2a4f6dfbaadea6ad8/script.js",
      async: true,
      id: "cookieyes",
      defer: true,
    },
    {
      src: 'https://www.googletagmanager.com/gtm.js?id=GTM-N8G7MKF9',
      async: true,
      defer: true,
    },
    
    //   src: "https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js",
    //   async: true,
    //   "custom-element": "amp-auto-ads",
    //   defer: true,
    // },
    { src: '/js/ezoic.js', async: true, defer: true },

    { src: '/js/contest.js', async: true, defer: true},
    //{ src: '/js/amp-auto-ads.js', async: true, defer: true },
    { src: '/js/google-tag-manager.js', async: true, defer: true },
    { src: '/js/google-analytics.js', async: true, defer: true },
    { src: '/js/structured.js', async: true, defer: true },
    { src: '/js/llvm.js', async: true, defer: true  },
  ],

  customFields: {
    adsenseClient: 'ca-pub-4507855210682789',
  },
};

module.exports = config;
