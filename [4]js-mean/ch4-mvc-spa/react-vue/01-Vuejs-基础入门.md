# Vue.js

- API

  - <https://vuefe.cn/v2/guide/>
  - <https://vuejs-tips.github.io/cheatsheet/>

- 资源

  - Vue学习看这篇就够 <https://juejin.im/entry/5a54b747518825734216c3df>
  - 前端每周清单半年盘点之 Vue.js 篇 <https://juejin.im/post/59928d55518825486f1e8369>
  - vue入门到放弃 <https://juejin.im/post/59aa1248518825392656a86a>
  - A curated list of awesome things related to Vue.js <https://github.com/vuejs/awesome-vue>

- vue面试题

  - <https://juejin.im/post/59ffb4b66fb9a04512385402>

- UI框架

  - element | iview | vux
  - Vuetify <https://github.com/vuetifyjs/vuetify>

  - Vue Admin

    - <https://github.com/PanJiaChen/vue-element-admin>
    - quasar <https://github.com/quasarframework/quasar>

      - 利用 Vue，通过一套代码搞定响应式网站、PWA、hybrid 移动应用以及 Electron app

- 阅读Vue源码

  - <https://github.com/answershuto/learnVue>
  - <https://github.com/balancelove/SimpleVue>

# 开发环境配置

- vue-cli插件

  - vue
  - vue sytnax hightlight

- 性能优化

  - bigpipe | bigrender

- IDEA

  - 下载gitignore等
  - 下载Vue相关插件
  - language设为ECMA6

# Vue语法

- 语法

  - 修饰符
  - 按键
  - 缩写
  - 暴露

```javascript
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

- computed vs methods

```javascript
我们可以使用 methods 来替代 computed，
效果上两个都是一样的
但是 computed 是基于它的依赖缓存，
只有相关依赖发生改变时才会重新取值。

而使用 methods
在重新渲染的时候
函数总会重新调用执行
```

- 组件 prop

```javascript
是单向绑定的
当父组件的属性变化时，
将传导给子组件，但是不会反过来
```

- 指令

```javascript
// 钩子函数
bind       // 只调用一次，指令第一次绑定到元素时调用
unbind: 只调用一次， 指令与元素解绑时调用。
inserted  
update
componentUpdated // 被绑定元素所在模板完成一次更新周期时调用
```

# Vue内置路由

- 路由演示 <https://github.com/chrisvfritz/vue-2.0-simple-routing-example>

# Axios封装

- <https://juejin.im/post/59a22e71518825242c422604>

```javascript
const Axios = axios.create({
  baseURL: "/", // 因为我本地做了反向代理
  timeout: 10000,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    if (
      config.method === "post" ||
      config.method === "put" ||
      config.method === "delete"
    ) {
      // 序列化
      config.data = qs.stringify(config.data);
    }

    // 若是有做鉴权token , 就给头部带上token
    if (localStorage.token) {
      config.headers.Authorization = localStorage.token;
    }
    return config;
  },
  error => {
    Message({  //  饿了么的消息弹窗组件,类似toast
      showClose: true,
      message: error,
      type: "error.data.error.message"
    });
    return Promise.reject(error.data.error.message);
  }
);

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {
    //对响应数据做些事
    if (res.data && !res.data.success) {
      Message({ //  饿了么的消息弹窗组件,类似toast
        showClose: true,
        message: res.data.error.message.message
          ? res.data.error.message.message
          : res.data.error.message,
        type: "error"
      });
      return Promise.reject(res.data.error.message);
    }
    return res;
  },
  error => {
    // 用户登录的时候会拿到一个基础信息,比如用户名,token,过期时间戳
    // 直接丢localStorage或者sessionStorage
    if (!window.localStorage.getItem("loginUserBaseInfo")) {
      // 若是接口访问的时候没有发现有鉴权的基础信息,直接返回登录页
      router.push({
        path: "/login"
      });
    } else {
      // 若是有基础信息的情况下,判断时间戳和当前的时间,若是当前的时间大于服务器过期的时间
      // 乖乖的返回去登录页重新登录
      let lifeTime =
        JSON.parse(window.localStorage.getItem("loginUserBaseInfo")).lifeTime *
        1000;
      let nowTime = (new Date()).getTime(); // 当前时间的时间戳
      if (nowTime > lifeTime) {
        Message({
          showClose: true,
          message: "登录状态信息过期,请重新登录",
          type: "error"
        });
        router.push({
          path: "/login"
        });
      }
    }
    // 下面是接口回调的status ,因为我做了一些错误页面,所以都会指向对应的报错页面
    if (error.response.status === 403) {
      router.push({
        path: "/error/403"
      });
    }
    if (error.response.status === 500) {
      router.push({
        path: "/error/500"
      });
    }
    if (error.response.status === 502) {
      router.push({
        path: "/error/502"
      });
    }
    if (error.response.status === 404) {
      router.push({
        path: "/error/404"
      });
    }
    // 返回 response 里的错误信息
    return Promise.reject(error.data.error.message);
  }
);

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
  install: function(Vue, Option) {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios });
  }
};
```

# 父子组件之间传值

- <https://juejin.im/post/59ec95006fb9a0451c398b1a>

# 服务端渲染 ssr

- <https://ssr.vuejs.org/zh/>
- 处理 Vue 单页面 SEO 的另一种思路

  - preRender + metaInfo <https://github.com/declandewet/vue-meta>

```javascript
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
        href: 'https://assets-cdn.github.com/'
      }]
    }
  }
</script>
```

- <https://juejin.im/post/59fa9257f265da43062a1b0e>

  - vuex的用户信息为什么还要存一遍在浏览器里?
  - 首屏加载比较慢
  - SSR(服务端渲染就能满足你的需求),因为请求回来就是一个处理完毕的 html
  - 写小程序 wepy
  - mock
  - 页面拦截 <https://router.vuejs.org/zh-cn/advanced/navigation-guards.html>

- 首屏加载

  - <https://juejin.im/post/5a291092518825293b50366d>
