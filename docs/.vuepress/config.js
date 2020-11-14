module.exports = {
  title: `Flutter Osaka | ドキュメント一覧`,
  description: `ミートアップやハンズオンでご紹介のあった資料を中心に記録しています。`,
  head: [
    [
      `meta`,
      { hid: `description`, name: `description`, content: `ミートアップやハンズオンでご紹介のあった資料を中心に記録しています。` },
    ],
    [
      `meta`,
      { property: `og:site_name`, content: `Flutter Osaka | ドキュメント一覧` },
    ],
    [
      `meta`,
      { property: `og:url`, content: `https://flutter-osaka.netlify.app/` },
    ],
    [
      `meta`,
      { property: `og:type`, content: `website` },
    ],
    [
      `meta`,
      { property: `og:title`, content: `Flutter Osaka | ドキュメント一覧` },
    ],
    [
      `meta`,
      { property: `og:description`, content: `ミートアップやハンズオンでご紹介のあった資料を中心に記録しています。` },
    ],
  ],
  script: [
    {
      async: true,
      src: `//www.youtube.com/iframe_api`
    },
  ],
  base: `/`,
  docsDir: `docs`,
  serviceWorker: true,
  themeConfig: {
    repo: `flutter-osaka/docs`,
    editLinks: false,
    docsDir: `docs`,
    nav: [
      {
        text: `ミートアップ`,
        link: `/meetup/osaka`,
      }
    ],
    sidebarDepth: 3,
    sidebar: {
      '/': [
        {
          title: `Flutter Osaka`,
          collapsable: false,
          children: [
            `/`,
            `/meetup/osaka`,
            `/handson/basic`,
            `/handson/dictionary`,
            `/handson/picture_edit`,
            `/handson/webrtc`
          ]
        }
      ],
      '/meetup/': [
        {
          title: `ミートアップ`,
          collapsable: false,
          children: [
            `/osaka`
          ]
        }
      ],
      '/handson/': [
        {
          title: `ハンズオン`,
          collapsable: false,
          children: [
            `/basic`,
            `/dictionary`,
            `/picture_edit`,
            `/webrtc`
          ]
        }
      ]
    }
  }
}
