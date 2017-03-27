#### **Vue.js**

* 资源/安装
  * [vue中文网](https://vuefe.cn/v2/guide/) \| [iView](https://gold.xitu.io/post/58a5a53761ff4b006c44ba5b?utm_source=gold_browser_extension) \| [vue2入门项目-qinshenxue](vue2-vue-router2-webpack2)

```js
<script src="https://cdn.bootcss.com/vue/2.2.2/vue.min.js"></script>

// 创建大型应用时
cnpm install vue
cnpm install --global vue-cli // 命令行
vue init webpack my-project   // 基于webpack创建vue项目

cd my-project
npm install
npm run dev

// 文件夹结构解释
build                // 最终发布的代码存放位置
config                // 配置目录，包括端口号等 
node_modules

src    
/assets     // 放置一些图片，如logo等。
/components // 组件文件
/App.vue    // 项目入口文件 可以直接将组件写这里
/main.js    // 核心文件

static            // 静态资源目录，如图片、字体等
test            // 初始测试目录，可删除
index.html    // 首页入口文件 可以添加一些 meta 信息或统计代码
package.json    
README.md

// ESlint 
newline 末尾要有空白行

// IDE
atom
```

* 基础

```js
Vue.js 不支持 IE8 及其以下 IE 版本 // 干得好！！

// computed vs methods
我们可以使用 methods 来替代 computed，
效果上两个都是一样的
但是 computed 是基于它的依赖缓存，
只有相关依赖发生改变时才会重新取值。

而使用 methods 
在重新渲染的时候
函数总会重新调用执行


// 复选框
如果是一个为逻辑值，
如果是多个则绑定到同一个数组
```

* 语法

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

// Handlebars 模板
{{#if ok}}
  <h1>Yes</h1>
{{/if}}
```

* 组件

```js
// prop 
是单向绑定的
当父组件的属性变化时，
将传导给子组件，但是不会反过来

// 可以为 props 指定验证要求
```

* 参考

```js
菜鸟教程
```



