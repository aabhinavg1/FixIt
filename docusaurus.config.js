// @ts-check
/** @type {import('@docusaurus/types').Config} */
const productionScripts = [
  {
    src: 'https://www.googletagmanager.com/gtm.js?id=GTM-N8G7MKF9',
    async: true,
    defer: true,
  },
  { src: '/js/google-tag-manager.js', async: true, defer: true },
  { src: '/js/google-analytics.js', async: true, defer: true },
];

const config = {
  title: 'CompilerSutra',
  tagline: 'Unleashing Compiler Power for Cutting-Edge Innovation!',
  favicon: 'img/favicon.ico',
  url: 'https://www.compilersutra.com',
  baseUrl: '/',
  organizationName: 'compilersutra',
  trailingSlash: true,
  projectName: 'FixIt',
  onBrokenLinks: 'ignore',

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
        sitemap: {
          ignorePatterns: [
            '/404',
            '/404/**',
            '/markdown-page',
            '/markdown-page/**',
            '/docs/tags',
            '/docs/tags/**',
          ],
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
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
      metadata: [
        { name: 'google-adsense-account', content: 'ca-pub-3213090090375658' },
        { name: 'theme-color', content: '#0a0f1e' },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'CompilerSutra' },
        { name: 'keywords', content: 'LLVM, MLIR, TVM, compiler, C++, GPU programming, DSA, tutorials, compiler optimization' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'CompilerSutra' },
        { property: 'og:url', content: 'https://www.compilersutra.com' },
        { property: 'og:image', content: 'https://www.compilersutra.com/img/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'CompilerSutra social preview' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@CompilerSutra' },
        { name: 'twitter:creator', content: '@CompilerSutra' },
        { name: 'twitter:image', content: 'https://www.compilersutra.com/img/og-image.png' },
        { name: 'twitter:image:alt', content: 'CompilerSutra social preview' },
      ],

      navbar: {
        title: 'CompilerSutra',
        logo: {
          alt: 'CompilerSutra Logo',
          src: 'img/logo.svg',
        },

        items: [
          /* ---------------- Tutorials ---------------- */
          {
            type: 'dropdown',
            label: 'Tutorials',
            position: 'left',
            items: [
              { label: 'LLVM Tutorials', to: '/docs/llvm/intro-to-llvm' },
              { label: 'TVM Tutorials', to: '/docs/tvm-for-beginners' },
              { label: 'GPU Tutorials', to: '/docs/The_Graphic_Rendering_Pipeline/' },
              { label: 'Compilers', to: '/docs/compilers/compiler' },
              { label: 'C++ Tutorials', to: '/docs/c++' },
              { label: 'DSA Tutorials', to: '/docs/DSA' },
              { label: 'Python Automation', to: '/docs/python/python_tutorial' },
              { label: 'Linux Tutorials', to: '/docs/linux/intro_to_linux' },
              { label: 'GPU Programming', to: '/docs/gpu/gpu_programming/gpu_programming_toc' },
              { label: 'OpenCL Tutorial', to: '/docs/gpu/opencl' },
              {label: 'Live', to: '/docs/linux/live'},
              {label: 'COA',  to: '/docs/coa'},
            ],
          },

          /* ---------------- YouTube (NEW) ---------------- */
          {
            type: 'dropdown',
            label: 'YouTube',
            position: 'left',
            items: [
              { label: 'Live Classes', to: '/docs/linux/live'},
              {
                label: 'Tech Talks ',
                href: 'https://www.youtube.com/@compilersutra/live',
              },
            ],
          },

          /* ---------------- Docs ---------------- */
          {
            type: 'dropdown',
            position: 'left',
            label: 'Blog',
            items: [
              { label: 'Guides', to: '/docs/how-about' },
              {label: 'Articles', to: '/docs/articles'},
            ]

          },
          {
            type: 'docSidebar',
            sidebarId: 'projectSidebar',
            position: 'left',
            label: 'Project',
          },
          {
            type: 'docSidebar',
            sidebarId: 'techblogSidebar',
            position: 'left',
            label: 'Tech Blog',
          },
          {
            type: 'docSidebar',
            sidebarId: 'LLVMPassSidebar',
            position: 'left',
            label: 'LLVM Pass Tracker',
          },

          /* ---------------- MCQ ---------------- */
          {
            type: 'dropdown',
            label: 'MCQ',
            position: 'left',
            items: [
              { label: 'Practice MCQ CPP', to: '/docs/mcq/cpp_mcqs' },
              {
                label: 'Practice Interview Question & Answers (CPP)',
                to: '/docs/mcq/interview_question/cpp_interview_mcqs',
              },
              {
                label: 'Domain Specific C++ MCQs',
                to: '/docs/mcq/cpp_mcqs#-domain-specific-c-mcqs',
              },
              { label: 'React MCQ', to: '/docs/react_mcq' },
            ],
          },

          /* ---------------- External ---------------- */
          {
            href: 'https://www.youtube.com/@compilersutra',
            label: 'YouTube Channel',
            position: 'right',
          },
          {
            href: 'https://compilersutra.quora.com',
            label: 'Q&A',
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
              { label: 'LLVM Tutorials', to: '/docs/llvm/intro-to-llvm' },
              { label: 'GPU Tutorials', to: '/docs/The_Graphic_Rendering_Pipeline' },
              { label: 'Compilers', to: '/docs/compilers/compiler' },
              { label: 'C++ Tutorials', to: '/docs/c++' },
              { label: 'DSA', to: '/docs/DSA' },
              {label: 'COA', to: '/docs/coa' },
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

  scripts: productionScripts,

  customFields: {
    adsenseClient: 'ca-pub-3213090090375658',
  },
};

module.exports = config;
