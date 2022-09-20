const path = require('path');

const BASE_URL = '/';

module.exports = {
  title: 'Sef Driving Car Documentation',
  url: 'https://docs.avyana.tech',
  baseUrl: `/`,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'], // ja
    localeConfigs: {
      en: { label: 'English' },
      ja: { label: '日本語' },
    },
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'avyana-tech',
  projectName: 'Avyana Docs',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'AVYANA',
        src: `img/meta/light_logo.png`,
        srcDark: `img/meta/dark_logo.png`,
        href: 'https://avyana.tech',
        target: '_self',
        width: 150,
        height: 150,
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          // id is the name of index file
          label: 'HOME',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'model_index',
          // id is the name of index file
          label: 'MODEL',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'studio_index',
          label: 'STUDIO',
          position: 'left'
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          label: 'Support',
          position: 'right',
          items: [
            {
              href: 'https://github.com/Avyana-Tech/docs/issues/new?assignees=REGATTE&labels=bug%2C+help+wanted%2C+question&template=raise-an-issue.md&title=Raise+an+Issue',
              label: 'Raise an Issue',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://github.com/Avyana-Tech/docs/issues/new?assignees=REGATTE&labels=documentation&template=documentation-request.md&title=REQUEST+DOCUMENTATION',
              label: 'Request Documentation',
              target: '_blank',
              rel: null,
            },
          ],
          className: 'navbar__link--support',
        },
        {
          type: 'separator',
          position: 'right',
        },

      ],
    },
    tagManager: {
      trackingID: '#',
    },
    prism: {
      theme: { plain: {}, styles: [] },
      additionalLanguages: ['shell-session', 'http'],
    },
    algolia: {
      appId: '263ZJ5ZQ84',
      apiKey: '53421c2638507f7806859b7e1b98a079', 
      indexName: 'docs',
      contextualSearch: true,
    }, 
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js'),
        exclude: ['README.md'],
        lastVersion: 'current',
      },
    ],
    '@docusaurus/plugin-content-pages',
    '@docusaurus/plugin-debug',
    '@docusaurus/plugin-sitemap',
    '@ionic-internal/docusaurus-plugin-tag-manager',
  ],
  themes: [
    [
      //overriding the standard docusaurus-theme-classic to provide custom schema
      path.resolve(__dirname, 'docusaurus-theme-classic'),
      {
        customCss: [
          require.resolve('./node_modules/modern-normalize/modern-normalize.css'),
          require.resolve('./node_modules/@ionic-internal/ionic-ds/dist/tokens/tokens.css'),
          require.resolve('./src/styles/custom.scss'),
        ],
      },
    ],
    path.resolve(__dirname, './node_modules/@docusaurus/theme-search-algolia'),
  ],
  customFields: {},
};