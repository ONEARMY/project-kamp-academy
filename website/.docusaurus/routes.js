import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '959'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'b1d'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '86b'),
            routes: [
              {
                path: '/basekamp/container',
                component: ComponentCreator('/basekamp/container', 'c9d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/basekamp/house',
                component: ComponentCreator('/basekamp/house', '383'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/basekamp/intro',
                component: ComponentCreator('/basekamp/intro', '631'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/explore/auroville',
                component: ComponentCreator('/explore/auroville', 'a54'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/explore/intro',
                component: ComponentCreator('/explore/intro', '684'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/explore/krishna',
                component: ComponentCreator('/explore/krishna', 'c08'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/explore/preciousplastic',
                component: ComponentCreator('/explore/preciousplastic', 'eca'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/explore/tamera',
                component: ComponentCreator('/explore/tamera', '25e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/guides/research',
                component: ComponentCreator('/guides/research', '166'),
                exact: true
              },
              {
                path: '/land/buy',
                component: ComponentCreator('/land/buy', 'b02'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/land/share',
                component: ComponentCreator('/land/share', '139'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/start/intro',
                component: ComponentCreator('/start/intro', 'edc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/support/chat',
                component: ComponentCreator('/support/chat', 'fb1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/support/download',
                component: ComponentCreator('/support/download', '9d6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/support/merch',
                component: ComponentCreator('/support/merch', 'ce6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/updates/',
                component: ComponentCreator('/updates/', 'c50'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/',
                component: ComponentCreator('/', '3a6'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
