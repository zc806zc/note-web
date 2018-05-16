# Vue项目优化

- 状态过渡
- 自动化测试
- 使用TypeScript
- MPA

  - <https://github.com/jarvan4dev/vue-multi-page>

- Vue的异构
- 服务端渲染
- Vue的pre-render

# 原理解析

- Virtual DOM原理
- 响应式数据流
- 源码解析
- Vue-router原理

# 基于Vue的多项目整合实践

- <https://juejin.im/post/59e379586fb9a0450670a902>

# Vue权限控制

- 权限控制 结合 Vue <https://juejin.im/entry/5a60611b6fb9a01cb0495fcb>
- 简单实现权限控制 <https://github.com/mgbq/vue-permission>

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

- 首屏加载

  - <https://juejin.im/post/5a291092518825293b50366d>

# Vue源码分析

- https://juejin.im/post/5ab07a63f265da2389258b12
