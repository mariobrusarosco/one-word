import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '4be'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '329'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '97d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b8f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '020'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '04d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '151'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '393'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '777'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '9bc'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'f63'),
        routes: [
          {
            path: '/tags',
            component: ComponentCreator('/tags', 'd7a'),
            exact: true
          },
          {
            path: '/tags/api',
            component: ComponentCreator('/tags/api', '29e'),
            exact: true
          },
          {
            path: '/tags/current-decision',
            component: ComponentCreator('/tags/current-decision', 'cef'),
            exact: true
          },
          {
            path: '/',
            component: ComponentCreator('/', 'e33'),
            routes: [
              {
                path: '/API/current-decision',
                component: ComponentCreator('/API/current-decision', '31c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/API/setup-an-api',
                component: ComponentCreator('/API/setup-an-api', '0e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/tutorial---basics',
                component: ComponentCreator('/category/tutorial---basics', '72e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/tutorial---extras',
                component: ComponentCreator('/category/tutorial---extras', '3d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/congratulations',
                component: ComponentCreator('/tutorial-basics/congratulations', '4b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/tutorial-basics/create-a-blog-post', '93c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/create-a-document',
                component: ComponentCreator('/tutorial-basics/create-a-document', '58e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/create-a-page',
                component: ComponentCreator('/tutorial-basics/create-a-page', 'e6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/tutorial-basics/deploy-your-site', '317'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/markdown-features',
                component: ComponentCreator('/tutorial-basics/markdown-features', '04e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/tutorial-extras/manage-docs-versions', '975'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-extras/translate-your-site',
                component: ComponentCreator('/tutorial-extras/translate-your-site', 'ac7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '96c'),
                exact: true,
                sidebar: "tutorialSidebar"
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
