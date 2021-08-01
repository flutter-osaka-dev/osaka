import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import path from 'path'

export default defineUserConfig<DefaultThemeOptions>({
  title: `Flutter Osaka | ドキュメント一覧`,
  description: `ミートアップやハンズオンでご紹介のあった資料を中心に記録しています。`,
  head: [
    [
      `meta`,
      {
        hid: `description`,
        name: `description`,
        content: `ミートアップやハンズオンでご紹介のあった資料を中心に記録しています。`
      }
    ],
    [
      `meta`,
      {
        hid: `title`,
        name: `title`,
        content: `Flutter Japan User Group (Osaka) | ドキュメント一覧`
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
        content: `ミートアップやハンズオンでご紹介のあった資料を中心に記録しています。`
      }
    ],
    [
      `meta`,
      {
        hid: `og:title`,
        name: `og:title`,
        content: `Flutter Japan User Group (Osaka) | ドキュメント一覧`
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
        content: ``
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:description`,
        name: `twitter:description`,
        content: `ミートアップやハンズオンでご紹介のあった資料を中心に記録しています。`
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:title`,
        name: `twitter:title`,
        content: `Flutter Japan User Group (Osaka) | ドキュメント一覧`
      }
    ],
    [
      `meta`,
      {
        hid: `twitter:card`,
        name: `twitter:card`,
        content: `summary` // ex: summary, summary_large_image
      }
    ],
    // [
    //   `meta`,
    //   {
    //     hid: `twitter:site`,
    //     name: `twitter:site`,
    //     content: ``
    //   }
    // ],
    // [
    //   `meta`,
    //   {
    //     hid: `twitter:creator`,
    //     name: `twitter:creator`,
    //     content: ``
    //   }
    // ],
    // [
    //   `meta`,
    //   {
    //     hid: `twitter:site`,
    //     name: `twitter:site`,
    //     content: ``
    //   }
    // ],
    // [
    //   `meta`,
    //   {
    //     hid: `twitter:image`,
    //     name: `twitter:image`,
    //     content: ``
    //   }
    // ],
    [
      `script`,
      {
        async: true,
        src: `//www.youtube.com/iframe_api`
      }
    ]
  ],
  base: `/`,
  clientAppEnhanceFiles: path.resolve(__dirname, `clientEnhanceApp.ts`),
  themeConfig: {
    repo: `flutter-osaka/docs`,
    editLinks: false,
    docsDir: `docs`,
    nav: [
      {
        text: `ミートアップ`,
        link: `/meetup/osaka.md`,
      }
    ],
    sidebarDepth: 3,
    sidebar: {
      '/': [
        {
          text: `Flutter Osaka`,
          children: [
            `/`,
            `/meetup/osaka.md`,
            `/handson/basic.md`,
            `/handson/basic_web.md`,
            `/handson/dictionary.md`,
            `/handson/picture_edit.md`,
            `/handson/webrtc.md`,
            `/handson/flutter_for_web.md`,
            `/handson/riverpod.md`
          ]
        }
      ],
      '/meetup/': [
        {
          text: `ミートアップ`,
          children: [
            `/meetup/osaka.md`
          ]
        }
      ],
      '/handson/': [
        {
          text: `ハンズオン`,
          children: [
            `/handson/basic.md`,
            `/handson/basic_web.md`,
            `/handson/dictionary.md`,
            `/handson/picture_edit.md`,
            `/handson/webrtc.md`,
            `/handson/flutter_for_web.md`,
            `/handson/riverpod.md`
          ]
        }
      ]
    }
  }
})
