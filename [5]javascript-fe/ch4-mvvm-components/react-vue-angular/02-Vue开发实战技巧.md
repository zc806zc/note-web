# Vue开发规范

- Vue.js 组件编码规范 @NICE https://github.com/pablohpsilva/vuejs-component-style-guide/blob/master/README-CN.md
  - 避免使用 this.$parent
  - 避免那些“以后可能会有用”的组件污染你的项目,只在确认需要时创建组件
  - 尽可能使用 mixins

```html
<!-- 避免 -->
<btn-group></btn-group> <!-- 虽然简短但是可读性差. 使用 `button-group` 替代 -->
<ui-slider></ui-slider> <!-- ui 前缀太过于宽泛，在这里意义不明确 -->
<slider></slider> <!-- 与自定义元素规范不兼容 -->

<style scoped>
  /* 推荐 */
  .MyExample { }
  .MyExample li { }
  .MyExample__item { }
</style>
```

- 风格指南 https://cn.vuejs.org/v2/style-guide/
- Vue前端开发规范 https://juejin.im/post/5ada9b586fb9a07aaf34c746
  - 总是用 key 配合 v-for
  - 组件名应该始终是多个单词的
  - 单文件组件文件的大写
  - 少用缩写
  - 永远不要把 v-if 和 v-for 同时用在同一个元素上
  - 模板中使用简单的表达式，拨出逻辑到脚本
  - 只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性 ??
  - class+bem 的策略 > scoped
  - scoped中不要用标签，用类选择器或者父级嵌套  

```html
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

<!-- 有关联的组件 -->
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue

<!-- 多行撰写 -->
<img
  src="https://vuejs.org/images/logo.png"
  alt="Vue Logo"
>
<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>


<!--  VScode参考配置 -->
{
  "editor.tabSize": 2,
  "workbench.startupEditor": "newUntitledFile",
  "workbench.iconTheme": "vscode-icons",
  // 以下为stylus配置
  "stylusSupremacy.insertColons": false, // 是否插入冒号
  "stylusSupremacy.insertSemicolons": false, // 是否插入分好
  "stylusSupremacy.insertBraces": false, // 是否插入大括号
  "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
  "stylusSupremacy.insertNewLineAroundBlocks": false, // 两个选择器中是否换行
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    },
    "javascriptreact",
    "html",
    "vue"
  ],
  "eslint.options": { "plugins": ["html"] },
  "prettier.singleQuote": true,
  "prettier.semi": false,
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
  "vetur.format.js.InsertSpaceBeforeFunctionParenthesis": false,
  "vetur.format.defaultFormatter.js": "prettier",
  // "prettier.eslintIntegration": true
}
```

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
- Vue 项目里戳中你痛点的问题及解决办法 https://juejin.im/post/5b174de8f265da6e410e0b4e

# 实践

- Vue+ElementUI实现表单动态渲染、可视化配置
  - 参考表单写法
  - https://juejin.im/post/5a9bc2676fb9a028d4440cfa
  - https://github.com/bowencool/super-form

# 组件开发

- 整理 -> 组件篇

# Vue的异构

- https://medium.com/js-dojo/how-to-safely-use-a-jquery-plugin-with-vue-js-786acdfb743b
  - Pass config with props
  - v-once
  - Letting jQuery handle updates
  - Passing data from jQuery to Vue

# 服务端渲染

- ssr
- Vue的pre-render

# 切换到typescript

- Vue-TS-Boilerplate https://github.com/thundernet8/Vue-TS-Boilerplate
- https://alexjoverm.github.io/2017/06/28/Integrate-TypeScript-in-your-Vue-project/
  - allowSyntheticDefaultImports 

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

- MPA

  - <https://github.com/jarvan4dev/vue-multi-page>

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

- vue-content-placeholders https://github.com/michalsnik/vue-content-placeholders
- https://github.com/jrainlau/vue-skeleton
- https://github.com/RThong/vue-skeleton
- 首屏加载

  - Vue SPA 首屏加载优化实践 <https://juejin.im/post/5a291092518825293b50366d>

# PWA

- vue-storefront https://github.com/DivanteLtd/vue-storefront
- 栗子
  - https://github.com/nightzing/pwa-vue-template
  - 当vue遇到pwa--vue+pwa移动端适配解决方案模板案例 https://juejin.im/post/5af264296fb9a07aa54248f9

# 容器组件

- 致敬 React: 为 Vue 引入容器组件和展示组件 https://juejin.im/post/5ae9a5545188256709610635

# 增删改查 | CRUD

- avue https://github.com/nmxiaowei/avue
  - 一个类似 EasyUI 的 Vue 后台管理面板方案