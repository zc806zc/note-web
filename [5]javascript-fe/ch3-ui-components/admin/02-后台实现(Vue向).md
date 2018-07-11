# 基于Vue模板

- vue-element-admin <https://github.com/PanJiaChen/vue-element-admin>
- vue-admin 结合bulma https://github.com/vue-bulma/vue-admin
- vue-manage-system https://github.com/lin-xin/vue-manage-system
- NICE D2Admin
    - 不落俗套
    - https://github.com/d2-projects/d2-admin-start-kit
    - https://github.com/d2-projects/d2-admin
- vueAdmin-template https://github.com/PanJiaChen/vueAdmin-template
- VueThink 后台是ThinkPHP5 <https://github.com/honraytech/VueThink>
- element UI 毕设时抄的模板 <https://github.com/taylorchen709/vue-admin>
- sls-admin-vue <https://github.com/sls-admin/sls-admin-vue>
- 基于 vue-cli + iView 的 Vue js 后台管理系统，简洁易扩展 https://github.com/zhaotoday/iview  


# 教程

- 手摸手，带你用vue撸后台 @NICE https://juejin.im/post/59097cd7a22b9d0065fb61d2
    - 权限登录 https://juejin.im/post/591aa14f570c35006961acac
- 老板让我十分钟上手nx-admin https://juejin.im/post/5b43226c51882519ad616c2a        
    - nx-admin https://github.com/mgbq/nx-admin

# 权限登录

- token存到cookie -> 用token拉取user_info与role -> 路由(router.addRoutes) -> vuex渲染侧边
- 页面刷新， vuex的数据也会丢失，要重复上述操作
- token有效期： session与后台刷新
- 前后端权限控制 都要做 但是不提倡后台去配置这个权限
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