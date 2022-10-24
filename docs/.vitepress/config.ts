export default {
  title: `Flutter Meetup Osaka`,
  description: `ミートアップやハンズオンでご紹介のあった資料を中心に記録しています。`,
  head: [
    [
      `meta`,
      {
        hid: `description`,
        name: `description`,
        content: `Flutter Meetup Osaka でご紹介のあった資料を中心に記録しています。`
      }
    ],
    [
      `meta`,
      {
        hid: `title`,
        name: `title`,
        content: `Flutter Meetup Osaka`
      }
    ],
    [
      `meta`,
      {
        hid: `og:type`,
        name: `og:type`,
        content: `website`
      }
    ],
    [
      `meta`,
      {
        hid: `og:description`,
        name: `og:description`,
        content: `Flutter Meetup Osaka でご紹介のあった資料を中心に記録しています。`
      }
    ],
    [
      `meta`,
      {
        hid: `og:title`,
        name: `og:title`,
        content: `Flutter Meetup Osaka`
      }
    ],
    [
      `meta`,
      {
        hid: `og:url`,
        name: `og:url`,
        content: `https://flutter-osaka.netlify.app`
      }
    ],
    [
      `meta`,
      {
        hid: `og:image`,
        name: `og:image`,
        content: `https://flutter-osaka.netlify.app/top.jpg`
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:description`,
        name: `twitter:description`,
        content: `Flutter Meetup Osaka でご紹介のあった資料を中心に記録しています。`
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:title`,
        name: `twitter:title`,
        content: `Flutter Meetup Osaka`
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:card`,
        name: `twitter:card`,
        content: `summary_large_image` // ex: summary, summary_large_image
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:site`,
        name: `twitter:site`,
        content: `@jiyuujin`
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:creator`,
        name: `twitter:creator`,
        content: `@jiyuujin`
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:site`,
        name: `twitter:site`,
        content: `@jiyuujin`
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:image`,
        name: `twitter:image`,
        content: `https://flutter-osaka.netlify.app/top.jpg`
      }
    ],
    [
      `script`,
      {
        async: true,
        src: `//www.youtube.com/iframe_api`
      }
    ]
  ],
  base: `/osaka/`,
  themeConfig: {
    repo: `flutter-osaka/docs`,
    editLinks: false,
    docsDir: `docs`,
    nav: [
      {
        text: `ミートアップ`,
        items: [
          { text: 'ミートアップ (Osaka)', link: '/meetup/osaka.md' }
        ]
      },
      {
        text: `ハンズオン`,
        items: [
          { text: 'Flutter 環境構築', link: '/handson/basic.md' },
          { text: 'Flutter for Web 環境構築', link: '/handson/basic_web.md' },
          { text: '辞書アプリ', link: '/handson/dictionary.md' },
          { text: '写真編集アプリ', link: '/handson/picture_edit.md' },
          { text: '通話アプリ (WebRTC)', link: '/handson/webrtc.md' },
          { text: 'Atomic Design (Flutter for Web)', link: '/handson/flutter_for_web.md' },
          { text: '人狼ゲーム (Flutter for Web)', link: '/handson/jinro.md' },
          { text: '家計簿アプリ', link: '/handson/account.md' },
          { text: 'カレンダーアプリ', link: '/handson/calendar.md' }
        ]
      }
    ],
    sidebarDepth: 3,
    sidebar: [
      {
        text: `Flutter Osaka`,
        items: [
          { text: 'トップ', link: '/' }
        ]
      },
      {
        text: `ミートアップ`,
        items: [
          { text: 'ミートアップ (Osaka)', link: '/meetup/osaka.md' }
        ]
      },
      {
        text: `ハンズオン`,
        items: [
          { text: 'Flutter 環境構築', link: '/handson/basic.md' },
          { text: 'Flutter for Web 環境構築', link: '/handson/basic_web.md' },
          { text: '辞書アプリ', link: '/handson/dictionary.md' },
          { text: '写真編集アプリ', link: '/handson/picture_edit.md' },
          { text: '通話アプリ (WebRTC)', link: '/handson/webrtc.md' },
          { text: 'Atomic Design (Flutter for Web)', link: '/handson/flutter_for_web.md' },
          { text: '人狼ゲーム (Flutter for Web)', link: '/handson/jinro.md' },
          { text: '家計簿アプリ', link: '/handson/account.md' },
          { text: 'カレンダーアプリ', link: '/handson/calendar.md' }
        ]
      }
    ]
  },
  markdown: {
    toc: { level: [1, 2] },
    config: (md) => {
      md.use(require('@nekohack/markdown-it-link-preview'))
    }
  },
  vueOptions: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          return tag.toLowerCase().indexOf('youtubevideo') === 0;
        }
      }
    }
  }
}
