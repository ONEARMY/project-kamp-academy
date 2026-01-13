import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'd49'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '280'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '0c8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '791'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '324'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'c0b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '309'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '65d'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '693'),
    routes: [
      {
        path: '/basekamp/container',
        component: ComponentCreator('/basekamp/container', '845'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/basekamp/house',
        component: ComponentCreator('/basekamp/house', '9fc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/basekamp/intro',
        component: ComponentCreator('/basekamp/intro', 'd15'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/explore/auroville',
        component: ComponentCreator('/explore/auroville', '480'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/explore/intro',
        component: ComponentCreator('/explore/intro', '006'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/explore/krishna',
        component: ComponentCreator('/explore/krishna', '534'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/explore/preciousplastic',
        component: ComponentCreator('/explore/preciousplastic', '5ec'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/explore/tamera',
        component: ComponentCreator('/explore/tamera', '38a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/guides/research',
        component: ComponentCreator('/guides/research', 'a70'),
        exact: true
      },
      {
        path: '/land/buy',
        component: ComponentCreator('/land/buy', '27f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/land/share',
        component: ComponentCreator('/land/share', 'f07'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/start/intro',
        component: ComponentCreator('/start/intro', 'c7f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/support/chat',
        component: ComponentCreator('/support/chat', 'e44'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/support/download',
        component: ComponentCreator('/support/download', '9a0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/support/merch',
        component: ComponentCreator('/support/merch', '457'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/updates/',
        component: ComponentCreator('/updates/', '082'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
