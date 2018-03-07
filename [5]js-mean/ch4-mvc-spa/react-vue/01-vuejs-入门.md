# Vue.js

- API

  - <https://vuefe.cn/v2/guide/>
  - <https://vuejs-tips.github.io/cheatsheet/>

- 入门

  - Vue学习看这篇就够 <https://juejin.im/entry/5a54b747518825734216c3df>
  - 前端每周清单半年盘点之 Vue.js <https://juejin.im/post/59928d55518825486f1e8369>
  - vue入门到放弃 <https://juejin.im/post/59aa1248518825392656a86a>
  - vuejs心法和技法 <http://www.cnblogs.com/kidsitcn/p/5409994.html>

- 面试

  - Vue面试题 <https://juejin.im/post/59ffb4b66fb9a04512385402>

- UI框架

  - 后台

    - element UI | iview | vux
    - vue-element-admin <https://github.com/PanJiaChen/vue-element-admin>
    - quasar <https://github.com/quasarframework/quasar> 利用 Vue，通过一套代码搞定响应式网站、PWA、hybrid 移动应用以及 Electron app

  - 手机

  - Vuetify <https://github.com/vuetifyjs/vuetify>

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
<script type="text/javascript">
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

# 路由

- Vue内置路由 <https://github.com/chrisvfritz/vue-2.0-simple-routing-example>

# Vuex

- <https://vuex.vuejs.org/zh-cn/api.html>

# Vue引入jquery

- 可以宽容

# 父子组件之间传值

- <https://juejin.im/post/59ec95006fb9a0451c398b1a>
