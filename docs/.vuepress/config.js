module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Pug Extended',
      description: 'The Docs for Pug Extended'
    }
  },
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'PugExtended/pug-extended.github.io',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Features',
            link: '/features/'
          },
          {
            text: 'About',
            link: '/about/'
          },
          {
            text: 'ChangeLog',
            link: 'https://github.com/PugExtended/core/blob/master/CHANGELOG.md'
          }
        ],
        sidebar: {
          '/features/': genSidebarConfig('Features'),
          '/about/': genSidebarConfig('About')
        }
      }
    }
  },
  markdown: {
    lineNumbers: true
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: true,
      children: [
        ''
      ]
    }
  ]
}