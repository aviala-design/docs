// const { default: pwaPlugin } = require("@vuepress/plugin-pwa");

module.exports = {
  lang: 'zh-CN',
  title: 'Systematize Design',
  description: 'Systematize Design 文档',

  themeConfig: {
      darkMode: true,
      logo: '/images/smblogo.svg',
  },
  configureWebpack: {
      resolve: {
          alias: {
              '@images': '/images'
          }
      }
  },
  themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
      ]
    },
      head: [['link', { rel: 'icon', href: '/images/logo.svg' }]],
      navbar: [
          // NavbarItem
          {
            text: 'Foo',
            link: '/foo/',
          },
          // NavbarGroup
          {
            text: 'Group',
            children: ['/group/foo.md', '/group/bar.md'],
          },
          // 字符串 - 页面文件路径
          '/bar/README.md',
        ],
        
  plugins: [
      // pwaPlugin({
      //     serviceWorkerFilename: "smd-docs.sw.js"
      // })
  ]
  
}