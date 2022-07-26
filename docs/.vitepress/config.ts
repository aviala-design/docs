import { defineConfigWithTheme, DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "设计组件库",
    collapsible: true,
    items: [
      { text: "快速了解", link: "/design/" },
      // { text: "设计标准", link: "/design/standards" },
      // { text: "组件", link: "/design/components" },
      { text: "V2 迁移指南", link: "/design/updatetov2" },
    ],
  },
  {
    text: "设计标准",
    collapsible: true,
    items: [
      { text: "解释", link: "/design/standards" },
      { text: "间距与边距解释", link: "/design/stamdards-docs/and-margin-explanation" },
      { text: "配色标准", link: "/design/stamdards-docs/color-matching-standard" },
      { text: "设计理念", link: "/design/stamdards-docs/design-concept" },
      { text: "字号与字体标准", link: "/design/stamdards-docs/font-size-and-font-standard" },
      { text: "层次标准", link: "/design/stamdards-docs/level-standard" },
      { text: "悬浮、点击、选中效果处理", link: "/design/stamdards-docs/suspend-click-and-select-effect-processing" },
    ]
  },
  {
    text: "组件",
    collapsible: true,
    items: [
      {text: "解释", link: "/design/components"},
      {text: "Button 按钮", link: "/design/components/button"},
    ]
  },
]

export default defineConfigWithTheme<DefaultTheme.Config>({
  lang: "zh-CN",
  title: "Systematize Design",
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/logo.svg"}]
  ],
  description: "系统化，风格统一的设计系统。",
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: false,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2020-present Cladonia ❤️ Community",
    },
    sidebar: {
      "/design/": sidebar,
    },
    nav: [
      { text: "入门", link: "/guide/" },
      { text: "Sysd 设计组件库", link: "/design/" },
      { text: "Amethyst 图标库", link: "/amethyst/" },
      {
        text: "开发者",
        items: [
          {
            text: "Spiral 组件库",
            items: [
              { text: "Vue组件", link: "/spiral-vue/" },
              { text: "WPF组件", link: "/spiral-wpf/" },
            ],
          },
        ],
      },
    ],
  },
})