const community = 'Flutter Osaka'

module.exports = {
  title: community,
  description: `【非公式】${community} ドキュメント一覧`,
  head: [
    [
      'meta',
      { hid: 'description', name: 'description', content: `${community}でご紹介のあった資料を中心に記録しています。` },
    ],
    [
      'meta',
      { property: 'og:site_name', content: community },
    ],
    [
      'meta',
      { property: 'og:url', content: 'https://flutter-osaka.netlify.app/' },
    ],
    [
      'meta',
      { property: 'og:type', content: 'website' },
    ],
    [
      'meta',
      { property: 'og:title', content: `【非公式】${community} ドキュメント一覧` },
    ],
    [
      'meta',
      { property: 'og:description', content: `${community}でご紹介のあった資料を中心に記録しています。` },
    ],
  ],
  script: [
    {
      async: true,
      src: '//www.youtube.com/iframe_api'
    },
  ],
  base: '/',
  docsDir: 'docs',
  serviceWorker: true,
  themeConfig: {
    repo: 'flutter-osaka/docs',
    editLinks: false,
    docsDir: 'docs',
    nav: [
      {
        text: 'ミートアップ',
        link: '/meetup/osaka',
      },
      {
        text: 'ハンズオン',
        link: '/handson/dictionary',
      }
    ],
    sidebarDepth: 3,
    sidebar: {
      '/': [
        {
          title: 'Flutter Osaka',
          collapsable: false,
          children: [
            '/',
            '/meetup/osaka',
            '/handson/basic',
            '/handson/dictionary',
            '/handson/picture_edit'
          ]
        }
      ],
      '/meetup/': [
        {
          title: 'ミートアップ',
          collapsable: false,
          children: [
            '/osaka'
          ]
        }
      ],
      '/handson/': [
        {
          title: 'ハンズオン',
          collapsable: false,
          children: [
            '/basic',
            '/dictionary',
            '/picture_edit'
          ]
        }
      ]
    }
  }
}
