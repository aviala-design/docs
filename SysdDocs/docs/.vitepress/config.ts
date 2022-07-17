export default {
    lang: 'zh-CN',
    title: 'Systematize Design',
    description: '系统化，风格统一的设计系统。',
    themeConfig:{
        logo: '/logo.svg',
        siteTitle: false,
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2020-present OUR Studio ❤️ Community'
        },
        sidebar: {
          '/Sysd/': sidebar()
        },
        nav:[
            {text:'入门',link:'/guide/'},
            {text:'Sysd 设计组件库',link:'/Sysd/'},
            {text:'Amethyst 图标库',link:'/Amst/'},
            {
                text: '开发者',
                items: [
                  {
                    text: 'Spiral 组件库',
                    items: [
                        {text:'Vue组件',link:'/vue-guide/'},
                        {text:'WPF组件',link:'/wpf-guide/'}
                    ]
                  }
                ]
              },
            ]
    }
}

function sidebar(){
  return [
    {
      text: 'Sysd 设计组件库',
      collapsible: true,
      items: [
        { text: '快速了解', link: '/Sysd/' }, 
        { text: '设计标准', link: '/Sysd/designDtandards' },
        { text: '组件', link: '/Sysd/components' },
        { text: 'V2 迁移指南', link: '/Sysd/updatetov2' }
      ]
    }
  ]
}