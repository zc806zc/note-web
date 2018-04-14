# UI框架

- 后台管理系统

  - element UI
  - iview
  - vue-element-admin <https://github.com/PanJiaChen/vue-element-admin>

- 移动端

  - vux
  - mintUI
  - vant <https://github.com/youzan/vant>

- quasar <https://github.com/quasarframework/quasar>

  - 利用 Vue，通过一套代码搞定响应式网站、PWA、hybrid 移动应用以及 Electron app

- Vuetify <https://github.com/vuetifyjs/vuetify>

# 第三方组件方案

- awesome-vue <https://github.com/vuejs/awesome-vue>
- 组件方案 <https://github.com/opendigg/awesome-github-vue>
- 行政规划数据 <https://github.com/modood/Administrative-divisions-of-China>
- 可拖拽树 <https://github.com/ltaoo/vue-draggable-tree>
- vue-3d-model <https://github.com/hujiulong/vue-3d-model>

# Vue组件封装学习

- 侧滑菜单 <https://github.com/hjl19911127/vue-drawer-layout/>
- 如何用vue制作一个探探滑动组件

  - <https://juejin.im/post/5a9cf13851882555845377f6>
  - <https://github.com/warpcgd/vue-tantan-stack>

# 实战学习项目

- vue.js + bulma <https://github.com/vue-bulma/vue-admin>
- vue-cnode <https://github.com/xjh22222228/vue-cnode>
- 使用vue2.0实现购物车和地址选配功能 <https://www.imooc.com/video/14039>
- 今日头条 <https://github.com/cd-dongzi/vue-project>
- 基于vue的简单流程图开发

  - <https://juejin.im/post/59e719746fb9a044fa18f2f2>
  - <https://github.com/leer0911/vue-FlowChart>

- 分享手淘过年项目中采用到的前端技术 <https://juejin.im/entry/5a9d07b76fb9a028cb2d2032>

- 使用react、vue和koa开发的前后端分离的个人博客系统 <https://github.com/mvpzx/elapse>

# 基于Vue的多项目整合实践

- <https://juejin.im/post/59e379586fb9a0450670a902>

# Vue权限控制

- 权限控制 结合 Vue <https://juejin.im/entry/5a60611b6fb9a01cb0495fcb>
- 简单实现权限控制 <https://github.com/mgbq/vue-permission>

# Axios封装

- 见Ajax

# 服务端渲染

- <https://ssr.vuejs.org/zh/>
- <https://juejin.im/post/59fa9257f265da43062a1b0e>

  - vuex的用户信息为什么还要存一遍在浏览器里?
  - 首屏加载比较慢
  - SSR(服务端渲染就能满足你的需求),因为请求回来就是一个处理完毕的 html
  - 写小程序 wepy
  - mock
  - 页面拦截 <https://router.vuejs.org/zh-cn/advanced/navigation-guards.html>

- 处理 Vue 单页面 SEO 的另一种思路

  - preRender + metaInfo <https://github.com/declandewet/vue-meta>

```javascript
<template>
  ...
</template>

<script>
  export default {
    metaInfo: {
      title: 'My Example App', // set a title
      meta: [{                 // set meta
        name: 'keyWords',
        content: 'My Example App'
      }]
      link: [{                 // set link
        rel: 'asstes',
        href: 'https://static-cdn.github.com/'
      }]
    }
  }
</script>
```

- 首屏加载

  - <https://juejin.im/post/5a291092518825293b50366d>
