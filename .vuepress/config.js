/*
 * @Author: LiBaoDeng libdqd_happy2020@163.com
 * @Date: 2024-08-27 17:19:02
 * @LastEditors: LiBaoDeng libdqd_happy2020@163.com
 * @LastEditTime: 2024-10-08 10:42:52
 * @FilePath: \BaoYee\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = { 
  title: "代码康德",
  description: 'BaoYee专属个人博客',
  base:'/BaoYee/',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: 'Java书籍知识', 
        icon: 'reco-message',
        items: [
          { text: 'Head First Java', link: '/Head First Java/' },
          { text: '算法图解', link: '/Algorithm Diagram/' },
        ]
      },
      { text: 'Spring', 
        icon: 'reco-message',
        items: [
          { text: 'SpringBase', link: '/spring/base/' },
          { text: 'SpringBoot', link: '/spring/SpringBoot/' },
        ]
      },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '联系关注', 
        icon: 'reco-message',
        items: [
          { text: '公众号：代码康德',link:'https://gitee.com/lbdis100good' },
          { text: '企鹅号：紫来峰', link: 'https://media.om.qq.com/author?id=MK3Sds3kXmobSVfU85zsWA3g0' },
          { text: 'WaterDrops', link: 'https://gitee.com/lbdis100good', icon: 'reco-gitee' },
          { text: 'Alex-Orchid-Hill', link: 'https://github.com/Alex-Orchid-Hill', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
      '/Head First Java/':[
        ['The Statck and the Heap','The Statck and the Heap'],
      ],
      '/Algorithm Diagram/':[
        ['排序算法','排序算法'],
      ],
      '/spring/base/':[
        ['AOP','AOP'],
        ['DI-Basics','DI-Basics'],
        ['DI-Container','DI-Container'],
        ['Spring-Resources','Spring-Resources'],
      ],
      '/spring/SpringBoot/':[
        ['1','1'],
        ['2','2'],
      ],
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '知识库' // 默认 “分类”
      },
    },
    friendLink: [
      {
        title: '紫来峰',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '767645258@qq.com',
        link: 'https://gitee.com/iamsupercool'
      },
      {
        title: '代码康德',
        desc: '博学笃志，守正出奇',
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/head.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'BaoYee',
    // 作者头像
    authorAvatar: '/author.jpg',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2017'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  
