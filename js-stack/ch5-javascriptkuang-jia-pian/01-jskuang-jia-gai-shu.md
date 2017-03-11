#### **JS框架**

* [如何选择合适的前端框架，告别选择恐惧症](https://read.douban.com/reader/column/5945187/chapter/30511309/) - SPA
  * 没有一个框架能解决所有的问题

```js
// jQuery
一个遗留系统。与其使用其他框架来替换，不如留着以后重写项目

// Backbone.js，脊椎连接框架
模型(models)、集合(collections)、视图(views)的结构
使用 Require.js 来管理依赖；
使用 jQuery 来管理 DOM；
使用 Mustache 来作为模板。
它可以和当时流行的框架，很好地结合到一起。

无法满足复杂的前端应用，
如 Model 模型比较简单，要处理好 View 比较复杂。
除此，还有更新 DOM 带来的性能问题。

// Angular 2 一站式提高生产力
声明式编程应该用于构建用户界面以及编写软件构建，
而命令式编程非常适合来表示业务逻辑

使用 Ionic 来创建混合应用
在应用运行的过程中，需要不断地操作 DOM，会造成明显的卡顿。
对于 WebView 性能较差或早期的移动设备来说，这就是一个致命伤。
Angular 2，它使用 Zone.js 实现变化的自动检测

// React，组件化提高复用 
采用 Virtual DOM 则会对需要修改的 DOM 进行比较（DIFF），
从而只选择需要修改的部分。
除了编写应用时，不需要对 DOM 进行直接操作，提高了应用的性能。
React 还有一个重要思想是组件化，即 UI 中的每个组件都是独立封装的。

JSX 模板，即在 JS 中编写模板，还需要使用 ES 6

只是一个 View 层，它是为了优化 DOM 的操作而诞生的
我们还需要路由库、执行单向流库、web API 调用库、测试库、依赖管理库等等

React Native、React VR

// Vue.js，简单也是提高效率
渐进式框架，专注于MVVM 模型的 ViewModel 层。
Vue.js 不仅简单、容易上手、配置设施齐全，同时拥有中文文档。

Vue.js 也使用了 Virtual DOM、Reactive 及组件化的思想，
可以让我们集中精力于编写应用，而不是应用的性能。

 Vuex 、 VueRouter
```

---

* [2016 年的轻量级 JS 框架和库](https://zhuanlan.zhihu.com/p/24598210)



