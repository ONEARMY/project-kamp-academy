// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Project Kamp Community',
  tagline: 'Building our offline community',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://community.projectkamp.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'davehakkens', // Usually your GitHub org/user name.
  projectName: 'project-kamp-academy', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve docs at the site's root
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ONEARMY/project-kamp-academy/blob/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/undraw_online.svg',
      navbar: {
        title: 'Project Kamp Community',
        logo: {
          alt: 'Project Kamp Logo',
          src: 'img/favicon.ico',
        },
        items: [
          // Add navbar items as needed
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyrightnow © ${new Date().getFullYear()} ONE ARMY`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

module.exports = config;
