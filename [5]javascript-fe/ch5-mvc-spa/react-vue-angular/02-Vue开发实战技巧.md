# Vue项目结构优化

```
├─build
├─config
├─src
│  ├─assets
│  │  ├─icon-font
│  │  ├─img
│  │  └─scss 公用样式
│  │      └─theme
│  ├─components
│  │  ├─appContent
│  │  │  └─src
│  ├─directives 自定义指令(drag)
│  ├─filter 格式过滤转化(日期格式)
│  ├─nodeTalk (socket.io)
│  ├─router
│  │  ├─子系统1
│  │  └─子系统2
│  │  └─...
│  ├─store  (actions mutation...)
│  │  └─modules
│  │      ├─design
│  │      │  ├─get
│  │      │  ├─set
│  │      │  └─sub
│  │      ├─global
│  ├─tool 常用方法
│  │  └─browser (IE版本)
│  └─views
│      ├─common (由组件构成的公共页)
│      │  ├─approve
│      │  ├─borrow
│      ├─consult (不同业务来划分)
└─static 静态资源 (socket.io)
    ├─face (emoji的小图)
    └─image
```

# Vue前端开发规范

- https://juejin.im/post/5ada9b586fb9a07aaf34c746

# Vue开发指南

- 你或许不知道Vue的这些小技巧 https://juejin.im/post/5b1230c1f265da6e603933ad
- Vue.js最佳实践（五招让你成为Vue.js大师） https://segmentfault.com/a/1190000014085613
- vue技术分享-你可能不知道的7个秘密 https://juejin.im/entry/5ae02151518825671a6371fa
  - require.context
  - 精简vuex的modules引入
  - require('@views/admin').default 动态加载路由
  - router key组件刷新 -> 给router-view添加一个唯一的key
  - 组件包装、事件属性穿透问题
- https://juejin.im/post/5ae02f39518825672f198ac2  
- vue中需要注意的问题总结(上) https://juejin.im/post/5ad56d86518825556534ff4b


# 实践

- Vue+ElementUI实现表单动态渲染、可视化配置
  - 参考表单写法
  - https://juejin.im/post/5a9bc2676fb9a028d4440cfa
  - https://github.com/bowencool/super-form

# 组件开发

- 整理 -> 组件篇


# Vue项目优化

- 状态过渡
- 自动化测试
- 使用TypeScript
- MPA

  - <https://github.com/jarvan4dev/vue-multi-page>

- Vue的异构
- 服务端渲染
- Vue的pre-render

# 切换到typescript

- Vue-TS-Boilerplate https://github.com/thundernet8/Vue-TS-Boilerplate

# 原理解析

- Virtual DOM原理
- 响应式数据流 
  - 当面试官问你Vue响应式原理，你可以这么回答他 https://juejin.im/post/5adf0085518825673123da9a
- 源码解析
- Vue-router原理

# MPA多页面

- vue多页面开发和打包的正确姿势 
  - https://juejin.im/post/5a8e3f00f265da4e747fc700
  - https://github.com/Faithree/multiple-vue-amazing

# 基于Vue的多项目整合实践

- <https://juejin.im/post/59e379586fb9a0450670a902>

# Vue权限控制

- 权限控制 结合 Vue <https://juejin.im/entry/5a60611b6fb9a01cb0495fcb>
- 简单实现权限控制 <https://github.com/mgbq/vue-permission>
- 关于 Vue 的路由权限管理 https://juejin.im/entry/5a9bfa206fb9a028e52d4f3c
- https://juejin.im/post/5a97e41bf265da23a048fa20

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

```html
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


- Vue 服务端渲染 https://juejin.im/post/5a9ca40b6fb9a028b77a4aac

# 骨架屏

- https://github.com/jrainlau/vue-skeleton
- https://github.com/RThong/vue-skeleton
- 首屏加载

  - <https://juejin.im/post/5a291092518825293b50366d>

# PWA

- https://github.com/nightzing/pwa-vue-template
- https://juejin.im/post/5af264296fb9a07aa54248f9

# 容器组件

- 致敬 React: 为 Vue 引入容器组件和展示组件 https://juejin.im/post/5ae9a5545188256709610635