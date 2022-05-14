// const { default: pwaPlugin } = require("@vuepress/plugin-pwa");

module.exports = {
    lang: 'zh-CN',
    title: 'Test',
    description: '114514',

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
          { text: 'External', link: 'https://google.com' },
        ]
      },

    plugins: [
        // pwaPlugin({
        //     serviceWorkerFilename: "smd-docs.sw.js"
        // })
    ]
    
}