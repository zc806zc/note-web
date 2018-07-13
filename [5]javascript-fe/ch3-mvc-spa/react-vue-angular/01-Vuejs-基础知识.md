# Vue.js

- Vue官网 

  - https://cn.vuejs.org/
  - guide <https://vuefe.cn/v2/guide/>
  - cookbook @NICE https://cn.vuejs.org/v2/cookbook/
    - ScrollMagic 自定义滚动指令替代方案 https://github.com/janpaepke/ScrollMagic
    - Vuetron 调试工具之一
    - vscode调试配置
    - fetch API https://developers.google.com/web/updates/2015/03/introduction-to-fetch
    - 内存泄漏
      - beforeDestroy
      - keep-alive -> deactivated
      - v-if
  - examples https://cn.vuejs.org/v2/examples/

- Vue API 
  - https://cn.vuejs.org/v2/api/
  - <https://vuejs-tips.github.io/cheatsheet/>

- 入门

  - 小凡 <https://github.com/bhnddowinf/vuejs2-learn>
  - Vue学习看这篇就够 略碎 <https://juejin.im/entry/5a54b747518825734216c3df>
  - 前端每周清单半年盘点之 Vue.js <https://juejin.im/post/59928d55518825486f1e8369>
  - vue入门到放弃 参考推荐的学习顺序 <https://juejin.im/post/59aa1248518825392656a86a>
  - vuejs心法和技法 <http://www.cnblogs.com/kidsitcn/p/5409994.html>
  - 你应该要知道的Vue.js https://juejin.im/post/5ab2ff496fb9a028c06ab78f
    - @deprecated <https://github.com/bhnddowinf/vuejs-learn>

# 展望

- Vue 2017 现状与展望 https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng==&mid=2247485584&amp;idx=1&amp;sn=fee6a5d251e8a582bf72a4313e99176e&source=41#wechat_redirect
  - 函数式组件改进  不再需要显示式 props
  - vue-cli 3.0 -> PWA by default
  - 异步组件改进 -> Loading / Error / Timeout Fallback

![异步组件](http://mmbiz.qpic.cn/mmbiz_jpg/uMh5nccSicmILu2WJsqjtN2Na5pGqlOGBlnb7MyCdyT5tNXf5bFlLqWNibtAxdI6J0a4sEpQDIJ0nUWCkZ3BJGibg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)  

# UI框架/生态圈

- A Comparison of Vue.js Frontend Frameworks https://matthiashager.com/vuejs-frontend-ui-frameworks-comparison

```js  
// Framework 7 
relies on PhoneGap but aims to give a native feel to your mobile applications;  
Yet it is one of the oldest and most complete frameworks here.

// Keen UI
be the most lightweight

...

```

- 后台管理系统

  - element https://github.com/ElemeFE/element
  - iview 提供了iview-cli桌面工具，可视化生成 https://github.com/iview/iview
  
- 移动端

  - vux 按需加载 适合微信内嵌页面
  - mintUI 
    - http://mint-ui.github.io/#!/en 
    - 按需加载 CSS3处理动效 but 组件偏少 可能要自己造轮子
  - Framework7-Vue https://github.com/framework7io/Framework7-Vue 路由坑
  - vant 
    - <https://github.com/youzan/vant>
  - OnsenUI 
    - https://github.com/OnsenUI/OnsenUI
    - 支持三大框架
  - XCUI https://github.com/wmfe/xcui 

- 跨三端

  - quasar <https://github.com/quasarframework/quasar>

    - 利用 Vue，通过一套代码搞定响应式网站、PWA、hybrid 移动应用以及 Electron app

  - Vuetify <https://github.com/vuetifyjs/vuetify>
  - muse UI https://github.com/museui/muse-ui

# 学习项目

- VueStudyDemos <https://github.com/violetjack/VueStudyDemos>
- todo-list <https://github.com/Konata9/EasyTodoList>
- 富文本编辑器Ueditor如何在Vue中使用？ <https://www.jianshu.com/p/8c43636c6c47>
- 用webpack（2.x语法）手动搭建Vue项目 <https://www.jianshu.com/p/a87dee15e6c3>
- 全面解析vue-cli生成的项目中使用其他库（js库、css库）<https://www.jianshu.com/p/a2fc286cb8ab>

# 开发环境

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
  - 缩写 v-on v-bind
  - 暴露
  - https://css-tricks.com/using-filters-vue-js/

```html
<!-- 修饰符 -->
<!-- 阻止浏览器默认行为 -->
<form v-on:submit.prevent="onSubmit"></form> 
 <!-- 可串联 -->
 <!-- 
   .stop
.prevent
.capture
.self
.once
.passive
 -->
<a v-on:click.stop.prevent="doThat"></a>

v-on:click.prevent.self 会阻止所有的点击，
而 v-on:click.self.prevent 只会阻止对元素自身的点击。

.exact 修饰符

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
  - 计算属性是基于它们的依赖进行缓存的，只有相关依赖发生改变时才会重新取值
  - 而使用 methods 在重新渲染的时候 函数总会重新调用执行

```js
// 不会更新
computed: {
  now: function () {
    return Date.now()
  }
}
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

- 逻辑

  - v-bind:style 自动添加前缀
  - 尽可能在使用 v-for 时提供 key
  - 2.2.0+ 的版本里，当在组件中使用 v-for 时，key 现在是必须的
  - 变异方法

```html
<div v-bind:class="classObject"></div>
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

<!-- 条件渲染 唯一的key -->
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>

<!--
v-for具有比v-if更高的优先级
Object.keys()方式遍历
不能保证它的结果在不同的 JavaScript 引擎下是一致的
-->

<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>

<ul v-if="shouldRenderTodos">
  <li v-for="todo in todos">
    {{ todo }}
  </li>
</ul>

<script>  
// 重塑数组
example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/)
})
</script>
```

- 表单

```html
<!-- 推荐像上面这样提供一个值为空的禁用选项。 -->
<div id="example-5">
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
```

# 事件处理

- 为什么要在HTML中监听事件 ?
  - 和 关注点分离 争对的场景并不同，.vue单文件开发的时候就更突出了，这样无须在 JavaScript 里手动绑定事件
  - 便于开发测试
  - 当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除

```html
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

<a @click.once="doThis"></a> // 新增属性 事件只会触发触发一次
```


# 响应式原理

- 非侵入性的响应式系统
- Vue.nextTick(callback)
  - eg 有一个 jQuery 插件，希望在 DOM 元素中某些属性发生变化之后重新应用该插件，这时候就需要在 $nextTick 的回调函数中执行重新应用插件的方法

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
        // this.msg2 = this.$refs.msgDiv.innerHTML
      })
    }
  }
})
```

# 过渡效果

- animate.css
- <https://jsfiddle.net/chrisvfritz/sLrhk1bc/>
- 过渡状态

```
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

# render函数

- 函数化组件

```javascript
render 函数，它比 template 更接近编译器

将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例，
实际上也是 JSX 所要求的，
如果在作用域中 h 失去作用， 在应用中会触发报错。

Vue 的模板实际是编译成了 render 函数
```

# (自定义)指令

- 钩子函数

# 混合

- https://css-tricks.com/using-mixins-vue-js/

```javascript
一种灵活的分布式复用 Vue 组件的方式
```

# 插件 

- <https://www.vuefe.cn/v2/guide/plugins.html>

```javascript
插件通常会为Vue添加全局功能

Vue.js 的插件应当有一个公开方法 install

Vue.use 会自动阻止注册相同插件多次，届时只会注册一次该插件
```

# 单元测试

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


# 组件基础

> Props向下传递，事件向上传递！

- 父子组件之间传值 <https://juejin.im/post/59ec95006fb9a0451c398b1a>
- 单向数据流
  - 单向下行绑定 ：父级 prop 的更新会向下流动到子组件中，但是反过来则不行
  - 对于一个数组或对象类型的 prop 来说，在子组件中改变这个对象或数组本身将会影响到父组件的状态

- 禁用特性继承 inheritAttrs: false
- 将原生事件绑定到组件
- .sync 修饰符
- 插槽
- 动态组件与异步组件 
  - keep-alive
- 处理边界情况

```html
传入一个对象的所有属性
post: {
  id: 1,
  title: 'My Journey with Vue'
}
<blog-post v-bind="post"></blog-post>
<blog-post
  v-bind:id="post.id"
  v-bind:title="post.title"
></blog-post>

<!-- 插槽 -->
<ul>
  <li
    v-for="todo in todos"
    v-bind:key="todo.id"
  >
    <!-- 我们为每个 todo 准备了一个插槽，-->
    <!-- 将 `todo` 对象作为一个插槽的 prop 传入。-->
    <slot v-bind:todo="todo">
      <!-- 回退的内容 -->
      {{ todo.text }}
    </slot>
  </li>
</ul>

<todo-list v-bind:todos="todos">
  <!-- 将 `slotProps` 定义为插槽作用域的名字 -->
  <template slot-scope="slotProps">
    <!-- 为待办项自定义一个模板，-->
    <!-- 通过 `slotProps` 定制每个待办项。-->
    <span v-if="slotProps.todo.isComplete">✓</span>
    {{ slotProps.todo.text }}
  </template>
</todo-list>

<todo-list v-bind:todos="todos">
  <template slot-scope="{ todo }">
    <span v-if="todo.isComplete">✓</span>
    {{ todo.text }}
  </template>
</todo-list>

<table>
  <tr is="my-row"></tr>
</table>

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

# Vue Router | 路由

- Vue内置路由 <https://github.com/chrisvfritz/vue-2.0-simple-routing-example>

# Vuex

- <https://vuex.vuejs.org/zh-cn/api.html>
- Vuex从入门到熟练使用 <https://www.jianshu.com/p/0fcdf380afe7>

- 基础
  - Vuex 的状态存储是响应式的
  - 单一状态树
  - 每个应用将仅仅包含一个 store 实例,在调试的过程中也能轻易地取得整个当前应用状态的快照

```javascript
mapState 辅助函数
帮助我们生成计算属性

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation

// Payload 向 store.commit 传入额外的参数
mutations: {
  increment (state, n) {
    state.count += n
  }
}
store.commit('increment', 10)

store.commit({
  type: 'increment',
  amount: 10
})

// 使用常量替代 Mutation 事件类型

mutation 必须是同步函数
在 mutation 中混合异步调用会导致你的程序很难调试
```

- Actions
  - Action 提交的是 mutation，而不是直接变更状态。
  - Action 可以包含任意异步操作。

```javascript


// 通过 store.dispatch 方法触发
// 以载荷形式分发
store.dispatch('incrementAsync', {
  amount: 10
})

// 以对象形式分发
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})


// 组合 Actions
actions: {
  // ...
  actionB ({ dispatch, commit }) {
    return dispatch('actionA').then(() => {
      commit('someOtherMutation')
    })
  }
}

一个 store.dispatch 在不同模块中可以触发多个 action 函数。
在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。
```

- Modules

```js
Vuex 允许我们将 store 分割成模块
你可以通过插件的参数对象来允许用户指定空间名称

如果有些状态严格属于单个组件，最好还是作为组件的局部状态。
你应该根据你的应用开发需要进行权衡和确定。
```

- 严格模式

```js
在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，
将会抛出错误。
这能保证所有的状态变更都能被调试工具跟踪到。

const store = new Vuex.Store({
  // ...
  strict: process.env.NODE_ENV !== 'production'
})
```

# 常识问题

- 所有的 DOM 操作都由 Vue 来处理 $ref
- Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的、启发式的方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作
- 由于 JavaScript 的限制，Vue 不能检测一些变动的数组 -> vm.items.splice(indexOfItem, 1, newValue)
- 同样由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除

```js
vm.userProfile = Object.assign({}, vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
```

- 表单输入和应用状态之间的双向绑定 不代表数据的双向绑定
- assets与static文件夹的区别 https://segmentfault.com/q/1010000009842688
- Vue引入jquery -> 可以宽容(CDN处理)
- 一个组件的 data 选项必须是一个函数

# 高级用法

- Vue.js中 watch 的高级用法 https://juejin.im/post/5ae91fa76fb9a07aa7677543
  - immediate: true
  - deep: true
- Vue nextTick 机制
  - https://juejin.im/post/5ae3f0956fb9a07ac90cf43e  