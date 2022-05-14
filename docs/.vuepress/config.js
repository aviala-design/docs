// const { default: pwaPlugin } = require("@vuepress/plugin-pwa");

module.exports = {
    lang: 'zh-CN',
    title: 'Systematize Design',
    description: 'Systematize Design 文档',

    themeConfig: {
        darkMode: true,
        logo: '/images/logo.svg',
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

    plugins: [
        // pwaPlugin({
        //     serviceWorkerFilename: "smd-docs.sw.js"
        // })
    ]
    
}