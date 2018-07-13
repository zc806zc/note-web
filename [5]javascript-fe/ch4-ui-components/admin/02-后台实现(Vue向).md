# 基于Vue模板

- 傲娇到干脆不兼容IE11，做的好！！！
- vue-element-admin <https://github.com/PanJiaChen/vue-element-admin>
  - 基于element UI写的后台解决方案
  - 简化版本 vueAdmin-template https://github.com/PanJiaChen/vueAdmin-template
- iview-admin https://github.com/iview/iview-admin  
- D2Admin @NICE 
    - 界面好看死了
    - https://github.com/FairyEver
    - https://github.com/d2-projects/d2-admin-start-kit
    - https://github.com/d2-projects/d2-admin   
- vue-admin 结合bulma https://github.com/vue-bulma/vue-admin
- vue-material https://github.com/vuematerial/vue-material
- vuestic-admin 但好丑啊 https://github.com/epicmaxco/vuestic-admin
- sls-admin-vue <https://github.com/sls-admin/sls-admin-vue> 
- 基于 vue-cli + iView 的 Vue js 后台管理系统，简洁易扩展 
  - 参考一波, 没试通代码,希望能兼容IE9+
  - https://github.com/zhaotoday/iview    
  - https://github.com/zhaotoday/less.js 需要运行一下服务端koa环境
- VueThink 后台是ThinkPHP5 @deprecated <https://github.com/honraytech/VueThink>
- 毕设时抄的模板 @deprecated <https://github.com/taylorchen709/vue-admin>
- vue-manage-system @deprecated https://github.com/lin-xin/vue-manage-system

# 教程

- 手摸手，带你用vue撸后台 @NICE https://juejin.im/post/59097cd7a22b9d0065fb61d2
    - 权限登录 https://juejin.im/post/591aa14f570c35006961acac
- 老板让我十分钟上手nx-admin https://juejin.im/post/5b43226c51882519ad616c2a        
    - nx-admin https://github.com/mgbq/nx-admin

# 权限登录

- vuejs2-authentication-tutorial https://auth0.com/blog/vuejs2-authentication-tutorial/
  - https://github.com/manojkumar3692/Vuejs-Authentication
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

# 目录结构

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