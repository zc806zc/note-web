# Vue.js

- Vue官网 
  - https://cn.vuejs.org/
  - <https://vuefe.cn/v2/guide/>
- Vue API <https://vuejs-tips.github.io/cheatsheet/>

- 入门基础

  - Vue学习看这篇就够 <https://juejin.im/entry/5a54b747518825734216c3df>
  - 前端每周清单半年盘点之 Vue.js <https://juejin.im/post/59928d55518825486f1e8369>
  - vue入门到放弃 参考推荐的学习顺序 <https://juejin.im/post/59aa1248518825392656a86a>
  - vuejs心法和技法 <http://www.cnblogs.com/kidsitcn/p/5409994.html>
  - Vue面试题 <https://juejin.im/post/59ffb4b66fb9a04512385402>
  - 你应该要知道的Vue.js https://juejin.im/post/5ab2ff496fb9a028c06ab78f

# UI框架/生态圈

- 后台管理系统

  - element UI
  - iview
  - vue-element-admin <https://github.com/PanJiaChen/vue-element-admin>
  - bulma
  
- 移动端

  - vux
  - mintUI
  - vant <https://github.com/youzan/vant>
  - OnsenUI https://github.com/OnsenUI/OnsenUI

- 跨三端

  - quasar <https://github.com/quasarframework/quasar>

    - 利用 Vue，通过一套代码搞定响应式网站、PWA、hybrid 移动应用以及 Electron app

  - Vuetify <https://github.com/vuetifyjs/vuetify>
  - muse UI https://github.com/museui/muse-ui

# 学习项目

- vuejs2 官网讲解

  - <https://github.com/bhnddowinf/vuejs2-learn>
  - <https://github.com/bhnddowinf/vuejs-learn>

- VueStudyDemos <https://github.com/violetjack/VueStudyDemos>
- todo-list <https://github.com/Konata9/EasyTodoList>
- 富文本编辑器Ueditor如何在Vue中使用？ <https://www.jianshu.com/p/8c43636c6c47>
- 用webpack（2.x语法）手动搭建Vue项目 <https://www.jianshu.com/p/a87dee15e6c3>
- 全面解析vue-cli生成的项目中使用其他库（js库、css库）<https://www.jianshu.com/p/a2fc286cb8ab>

# 开发环境配置

- vue-cli插件

  - vue
  - vue sytnax hightlight

- 性能优化

  - bigpipe | bigrender

- IDEA

  - gitignore | Vue相关插件
  - language设为ECMA6

# Vue语法

- 语法

  - 修饰符
  - 按键
  - 缩写
  - 暴露

```html
<!-- 修饰符 -->
<form v-on:submit.prevent="onSubmit"></form> <!-- 阻止浏览器默认行为 -->
<a v-on:click.stop.prevent="doThat"></a> <!-- 可串联 -->

<!-- .stop
.prevent
.capture
.self
.once -->

<!-- 在change更新值 -->
<input v-model.lazy="msg" >
<input v-model.number="age" type="number">
<input v-model.trim="msg">

<!-- 在某个组件的根元素上监听一个原生事件 -->
<my-component v-on:click.native="doTheThing"></my-component>

<!-- 按键 -->
<input v-on:keyup.13="submit">
<input @keyup.alt.67="clear">
<input v-on:keyup.enter="submit">
<input @keyup.enter="submit">

<!-- 缩写 -->
<a v-bind:href="url"></a>
<a :href="url"></a> <!-- 缩写 -->

<a v-on:click="doSomething"></a>
<a @click="doSomething"></a> <!-- 缩写 -->

<!-- 暴露 -->
<script>
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})
vm.$data === data // true
vm.$el === document.getElementById('example') // true
vm.$watch('a', function (newVal, oldVal) {
  // 这个回调将在 `vm.a`  改变后调用
})
</script>
```

- computed vs methods

```shell
我们可以使用 methods 来替代 computed，
效果上两个都是一样的
但是 computed 是基于它的依赖缓存，
只有相关依赖发生改变时才会重新取值。

而使用 methods
在重新渲染的时候
函数总会重新调用执行
```

- 组件 prop

```shell
是单向绑定的
当父组件的属性变化时，
将传导给子组件，但是不会反过来
```

- 指令

```shell
// 钩子函数
bind       // 只调用一次，指令第一次绑定到元素时调用
unbind: 只调用一次， 指令与元素解绑时调用。
inserted  
update
componentUpdated // 被绑定元素所在模板完成一次更新周期时调用
```

- 基础

  - <https://github.com/keepfool/vue-tutorials>

```javascript
// 表单使用
遇到问题
vue.min.js:7 TypeError: t.value.some is not a function
暂时注释掉了select
```

- class-style绑定

```javascript
// 不会更新
computed: {
  now: function () {
    return Date.now()
  }
}

<div v-bind:class="classObject"></div>
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

// 条件渲染 唯一的key
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>

// v-for具有比v-if更高的优先级
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>

<ul v-if="shouldRenderTodos">
  <li v-for="todo in todos">
    {{ todo }}
  </li>
</ul>

// 重塑数组
example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/)
})
```

- 事件处理

  - 为什么要在HTML中listening <https://www.vuefe.cn/v2/guide/events.html#为什么在-HTML-中监听事件>

```javascript
// 可以用特殊变量 $event
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

methods: {
  warn: function (message, event) {
    // 现在我们可以访问原生事件对象
    if (event) event.preventDefault()
    alert(message)
  }
}

<a v-on:click.once="doThis"></a> // 新增属性 事件只会触发触发一次
```

- 组件

  - slot

```javascript
<table>
  <tr is="my-row"></tr>
</table>

// 作用域插槽
// 用作（可以传入数据的）可重用模板,而不是已渲染元素
<my-awesome-list :items="items">
  <!-- 作用域插槽也可以被命名 -->
  <template slot="item" scope="props">
    <li class="my-fancy-item">{{ props.text }}</li>
  </template>
</my-awesome-list>

<keep-alive>
  <component :is="currentView">
    <!-- 非活动组件将被缓存！ -->
  </component>
</keep-alive>

v-once 低开销
```

- 响应式原理

```javascript
Vue 不允许在已经创建的实例上动态添加新的根级响应式属性(root-level reactive property)。
然而它可以使用 Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上

// vm.$nextTick()
Vue.component('example', {
  template: '<span>{{ message }}</span>',
  data: function () {
    return {
      message: 'not updated'
    }
  },
  methods: {
    updateMessage: function () {
      this.message = 'updated'
      console.log(this.$el.textContent) // => 'not updated'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => 'updated'
      })
    }
  }
})
```

- 过渡效果

  - animate.css
  - <https://jsfiddle.net/chrisvfritz/sLrhk1bc/>
  - 过渡状态

```javascript
CSS 动画用法和 CSS 过渡相同，
区别是在动画中 v-enter 类名在元素插入 DOM 后不会立即删除，
而是在 animationend 事件触发时删除。

它们将覆盖默认约定的类名，这对于将 Vue 的过渡系统和其他现有的第三方 CSS 动画库

// 显示指定
<transition :duration="{ enter: 500, leave: 800 }">...</transition>

当仅使用 JavaScript 式过渡的时候，
在 enter 和 leave 钩子函数中，必须有 done 回调函数。
否则，这两个钩子函数会被同步调用，过渡会立即完成。

// out-in模式
<transition name="fade" mode="out-in">
  <!-- ... the buttons ... -->
</transition>

<transition-group> 组件
```

- render函数

  - 函数化组件

```javascript
render 函数，它比 template 更接近编译器

将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例，
实际上也是 JSX 所要求的，
如果在作用域中 h 失去作用， 在应用中会触发报错。

Vue 的模板实际是编译成了 render 函数
```

- (自定义)指令

  - 钩子函数

- 混合

```javascript
一种灵活的分布式复用 Vue 组件的方式
```

- 插件 <https://www.vuefe.cn/v2/guide/plugins.html>

```javascript
插件通常会为Vue添加全局功能

Vue.js 的插件应当有一个公开方法 install

Vue.use 会自动阻止注册相同插件多次，届时只会注册一次该插件
```

- 状态管理 vuex
- 单元测试

  - karma

```javascript
如果一个组件的渲染输出完全取决于它的 props，
那么它会让测试变得简单，就好像断言不同参数的纯函数的返回值

// 断言异步更新
// 在状态更新后检查生成的 HTML
it('updates the rendered message when vm.message updates', done => {
  const vm = new Vue(MyComponent).$mount()
  vm.message = 'foo'
  // 在状态改变后和断言 DOM 更新前等待一刻
  Vue.nextTick(() => {
    expect(vm.$el.textContent).toBe('foo')
    done()
  })
})
```

- 服务端渲染

  - <https://ssr.vuejs.org/zh/> | <https://nuxtjs.org/>
  - 更好的 SEO
  - 更快的内容到达时间

```javascript
也可以将同一个组件渲染为服务器端的 HTML 字符串，
将它们直接发送到浏览器，最后将静态标记"混合"为客户端上完全交互的应用程序。

服务器渲染的 Vue.js 应用程序也可以被认为是"同构"或"通用"，
因为应用程序的大部分代码都可以在服务器和客户端上运行。

Nuxt 是一个基于 Vue 生态的更高层的框架，
为开发服务端渲染的 Vue 应用提供了极其便利的开发体验。
更酷的是，你甚至可以用它来做为静态站生成器
```

- TypeScript支持

```javascript
allowSyntheticDefaultImports // ES 模块语法
```

# Vue渲染引擎

- Vue 模板编译原理 https://juejin.im/post/5aaa506ff265da239236131b

  - 模板字符串 -> element ASTs（解析器） -> 静态节点标记 -> 代码字符串化(代码生成)

# 路由

- Vue内置路由 <https://github.com/chrisvfritz/vue-2.0-simple-routing-example>

# Vuex

- <https://vuex.vuejs.org/zh-cn/api.html>
- Vuex从入门到熟练使用 <https://www.jianshu.com/p/0fcdf380afe7>

# Vue引入jquery

- 可以宽容

# 父子组件之间传值

- <https://juejin.im/post/59ec95006fb9a0451c398b1a>

# Vue项目组织结构

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

# 一般要用到的组件

```shell
areaPicker
autoComplete

back 返回按钮
chat 聊天的输入框

cropper 图片裁剪
datepicker


dialog

editor
IndexedDB

layout 24分栏

loading
message

pagination
pdf
preview

qrcode

retrive # 检索 弹出弹框搜索

table
tree

upload
video


...

# 占位元素
开发中
暂无评论
```


# 常识问题

- assets与static文件夹的区别 https://segmentfault.com/q/1010000009842688