# 教程

- 手摸手，带你用vue撸后台 @NICE https://juejin.im/post/59097cd7a22b9d0065fb61d2
    - 手摸手 https://juejin.im/post/593121aa0ce4630057f70d35
    - 权限登录 https://juejin.im/post/591aa14f570c35006961acac

- 老板让我十分钟上手nx-admin https://juejin.im/post/5b43226c51882519ad616c2a        
    - nx-admin https://github.com/mgbq/nx-admin

# 展望

- Vue 2017 现状与展望 https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng==&mid=2247485584&amp;idx=1&amp;sn=fee6a5d251e8a582bf72a4313e99176e&source=41#wechat_redirect
  - 函数式组件改进  不再需要显示式 props
  - vue-cli 3.0 -> PWA by default
  - 异步组件改进 -> Loading / Error / Timeout Fallback

![异步组件](http://mmbiz.qpic.cn/mmbiz_jpg/uMh5nccSicmILu2WJsqjtN2Na5pGqlOGBlnb7MyCdyT5tNXf5bFlLqWNibtAxdI6J0a4sEpQDIJ0nUWCkZ3BJGibg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)  

# 结构

- 参考自 vue-element-admin <https://github.com/PanJiaChen/vue-element-admin>

```
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filters                // 全局 filter
│   ├── icons                  // 项目所有 svg icons
│   ├── lang                   // 国际化 language
│   ├── mock                   // 项目mock 模拟数据
│   ├── router                 // 路由
│   ├── store                  // 全局 store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── vendor                 // 公用vendor
│   ├── views                   // view
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   └── permission.js          // 权限管理
├── static                     // 第三方不打包资源
│   └── Tinymce                // 富文本
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json
```


# 权限登录

- vue权限路由实现方式总结 https://juejin.im/post/5b5bfd5b6fb9a04fdd7d687a
- vuejs2-authentication-tutorial https://auth0.com/blog/vuejs2-authentication-tutorial/
  - https://github.com/manojkumar3692/Vuejs-Authentication
- Vue-Access-Control https://github.com/tower1229/Vue-Access-Control
- token存到cookie -> 用token拉取user_info与role -> 路由(router.addRoutes) -> vuex渲染侧边
- 页面刷新， vuex的数据也会丢失，要重复上述操作
- token有效期： session与后台刷新
- 前后端权限控制 当然都要做 但不提倡后台吐出这个菜单(维护)
- 按钮级别权限控制
    - 颗粒度
    - 先考虑页面设计是否合理

```js
this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
  this.$router.push({ path: '/' }); //登录成功之后重定向到首页
}).catch(err => {
  this.$message.error(err); //登录失败提示错误
});

LoginByUsername({ commit }, userInfo) {
  const username = userInfo.username.trim()
  return new Promise((resolve, reject) => {
    loginByUsername(username, userInfo.password).then(response => {
      const data = response.data
      Cookies.set('Token', response.data.token) //登录成功后将token存储在cookie之中
      commit('SET_TOKEN', data.token)
      resolve()
    }).catch(error => {
      reject(error)
    });
  });
}
```

# 框架使用

- element UI 相较 antd还存在差距
- 大部分诡异的问题都可以通过加一个key或者 Vue.nextTick来解决
- 样式

```
.aritle-page{ //你的命名空间
    .el-tag { //element-ui 元素
      margin-right: 0px;
    }
}
```

# 换肤

# 侧边栏

- 用户习惯点击侧边栏刷新页面 -> 监听侧边栏每个link 的 click事件，每次点击都给router push 一个不一样的query 来确保会重新刷新view
  - activated

```js
// 对应路由高亮
:default-active="$route.path"
```

# 表格

- 拖拽排序
    - Sortable (基于DOM) https://github.com/RubaXa/Sortable
    - Vue.Draggable https://github.com/SortableJS/Vue.Draggable 

```js
this.sortable = Sortable.create(el, {
  onEnd: evt => { //监听end事件 手动维护列表
    const tempIndex = this.newList.splice(evt.oldIndex, 1)[0];
    this.newList.splice(evt.newIndex, 0, tempIndex);
  }
});
```

- 内联编辑

# JSX

```shell
npm install\
  babel-plugin-syntax-jsx\
  babel-plugin-transform-vue-jsx\
  babel-helper-vue-jsx-merge-props\
  babel-preset-es2015\
  --save-dev

{
  "presets": ["es2015"],
  "plugins": ["transform-vue-jsx"]
}
```

# 使用Echarts

```js
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

//第一种 watch options变化 利用vue的深度 watcher，options一有变化就重新setOption
watch: {
  options: {
    handler(options) {
      this.chart.setOption(this.options)
    },
    deep: true
  },
}
//第二种 只watch 数据的变化 只有数据变化时触发ECharts
watch: {
  seriesData(val) {
    this.setOptions({series:val})
  }
}
```

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

# Vue的异构

- https://medium.com/js-dojo/how-to-safely-use-a-jquery-plugin-with-vue-js-786acdfb743b
  - Pass config with props
  - v-once
  - Letting jQuery handle updates
  - Passing data from jQuery to Vue

# 切换到Typescript

- TypeScript + 大型项目实战 https://juejin.im/post/5b54886ce51d45198f5c75d7
- 旧项目 TypeScript 改造问题与解决方案记 https://juejin.im/post/5b56c77e51882519d34671e3
  - tsconfig.json配置alias
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
  - multiple-vue-amazing https://github.com/Faithree/multiple-vue-amazing

- vue-multi-page <https://github.com/jarvan4dev/vue-multi-page>

# 基于Vue的多项目整合实践

- <https://juejin.im/post/59e379586fb9a0450670a902>

# Vue权限控制

- 权限控制 结合 Vue <https://juejin.im/entry/5a60611b6fb9a01cb0495fcb>
- 简单实现权限控制 <https://github.com/mgbq/vue-permission>
- 关于 Vue 的路由权限管理 https://juejin.im/entry/5a9bfa206fb9a028e52d4f3c
- https://juejin.im/post/5a97e41bf265da23a048fa20

# 服务端渲染

- ssr <https://ssr.vuejs.org/zh/>
- nuxt <https://nuxtjs.org/>
- Vue的pre-render
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

# 骨架屏注入

- vue-content-placeholders https://github.com/michalsnik/vue-content-placeholders
- https://github.com/jrainlau/vue-skeleton
- https://github.com/RThong/vue-skeleton
- 首屏加载

  - Vue SPA 首屏加载优化实践 <https://juejin.im/post/5a291092518825293b50366d>

# 容器组件

- 致敬 React: 为 Vue 引入容器组件和展示组件 https://juejin.im/post/5ae9a5545188256709610635

# PWA

- vue-storefront https://github.com/DivanteLtd/vue-storefront
- 栗子
  - https://github.com/nightzing/pwa-vue-template
  - 当vue遇到pwa--vue+pwa移动端适配解决方案模板案例 https://juejin.im/post/5af264296fb9a07aa54248f9

# 增删改查 | CRUD

->>