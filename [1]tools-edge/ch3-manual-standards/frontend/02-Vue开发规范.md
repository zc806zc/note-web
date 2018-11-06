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

- [Vue进阶]为什么我的代码让别人看起来头皮发麻？ @nice https://juejin.im/post/5bd83871f265da0afa3e3204