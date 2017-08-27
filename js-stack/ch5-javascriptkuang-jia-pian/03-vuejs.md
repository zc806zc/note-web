## **Vue.js**

* [x] 语法基础
* [ ] 开发 vue-cli及工具
* [ ] vue2
* [ ] 源码

---

## vue资源整理

* 前端每周清单半年盘点之 Vue.js 篇  

[https://juejin.im/post/59928d55518825486f1e8369?utm\_source=gold\_browser\_extension](https://juejin.im/post/59928d55518825486f1e8369?utm_source=gold_browser_extension)

---

## [vue](https://vuefe.cn/v2/guide/)基础知识

* computed vs methods

```js
我们可以使用 methods 来替代 computed，
效果上两个都是一样的
但是 computed 是基于它的依赖缓存，
只有相关依赖发生改变时才会重新取值。

而使用 methods 
在重新渲染的时候
函数总会重新调用执行
```

* 语法
  * 修饰符
  * 按键
  * 缩写
  * 暴露

```js
// 修饰符
<form v-on:submit.prevent="onSubmit"></form> // 阻止浏览器默认行为
<a v-on:click.stop.prevent="doThat"></a>     // 可串联
.stop
.prevent
.capture
.self
.once

<input v-model.lazy="msg" > // 在change更新值
<input v-model.number="age" type="number">
<input v-model.trim="msg">
<my-component v-on:click.native="doTheThing"></my-component> // 在某个组件的根元素上监听一个原生事件

// 按键
<input v-on:keyup.13="submit">
<input @keyup.alt.67="clear">
<input v-on:keyup.enter="submit">
<input @keyup.enter="submit">

// 缩写
<a v-bind:href="url"></a>
<a :href="url"></a> <!-- 缩写 -->

<a v-on:click="doSomething"></a>
<a @click="doSomething"></a> <!-- 缩写 -->

// 暴露
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
```

* 组件 prop

```js
是单向绑定的
当父组件的属性变化时，
将传导给子组件，但是不会反过来
```

* 指令

```js
// 钩子函数
bind       // 只调用一次，指令第一次绑定到元素时调用
unbind: 只调用一次， 指令与元素解绑时调用。
inserted  
update
componentUpdated // 被绑定元素所在模板完成一次更新周期时调用
```

* 路由  [路由演示](https://github.com/chrisvfritz/vue-2.0-simple-routing-example)
* 与Riot、Backbone.js等框架的比较
* v-if与v-show的比较 P18
* debounce 最小延迟 更新高耗 P22
* v-cloak 保持元素直到关联实例结束编译

---

## 开发环境配置

* vue-cli插件
  * vue \| vue sytnax hightlight
* ~~vue + scrat.js的化学反应：移动开发解决方案~~
* 性能优化：bigpipe \| bigrender
* 要去学习源码



