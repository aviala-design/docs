import { defineConfigWithTheme, DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "design设计组件库",
    collapsible: true,
    items: [
      { text: "快速了解", link: "/design/" },
      { text: "设计标准", link: "/design/standards" },
      { text: "组件", link: "/design/components" },
      { text: "V2 迁移指南", link: "/design/updatetov2" },
    ],
  },
]

export default defineConfigWithTheme<DefaultTheme.Config>({
  lang: "zh-CN",
  title: "Systematize Design",
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
      { text: "design 设计组件库", link: "/design/" },
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