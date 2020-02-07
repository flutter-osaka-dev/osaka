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
      { property: 'og:url', content: 'https://nekohack.github.io/v-kansai' },
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
  base: '/',
  docsDir: 'docs',
  serviceWorker: true,
  themeConfig: {
    repo: 'flutter-osaka/docs',
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: {
      '/': [
        {
          title: 'Meetup',
          collapsable: false,
          children: [
            ''
          ]
        }
      ]
    }
  }
}
