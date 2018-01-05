# 权限路由

- <https://juejin.im/post/5a4da656f265da431e172d94?utm_medium=fe&utm_source=weixinqun>

```js
// ----  router/index.js  ----
// 初始化路由
export default new Router({  
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]  
});
// 动态路由 meta 定义了role
export const powerRouter =[    
    { path: '/',redirect:'/red', name: 'index',component: Index,hidden:false,
      children: [
        { path: '/red', name: 'red', component: red,},
        { path: '/yellow', name: 'yellow', component: yellow, meta: {role: 'B'}},
        { path: '/blue', name: 'blue', component: blue, meta: {role: 'C'}}
      ]
    }
];

// ----  main.js  ----
router.beforeEach((to, from, next) => {
  if(store.getters.role){ //判断role 是否存在

    	if(store.getters.newrouter.length !== 0){  
       		next() //resolve 钩子
	    } else {
	    	  let newrouter
       		if (store.getters.role == 'A') {  //判断权限
                newrouter = powerRouter
          } else {
              let newchildren = powerRouter[0].children.filter(route => {
                  if(route.meta){
                  	if(route.meta.role == store.getters.role) { // 是否一致
                  		return true
                    }
                    return false
                  } else {
                      return true
                  }
              });
              newrouter = powerRouter
              newrouter[0].children = newchildren
          }

          router.addRoutes(newrouter) //添加动态路由
          store.dispatch('Roles',newrouter).then(res => {
              next({ ...to })
          }).catch(() => {       

          })
	    }	  
    } else{
     	if (['/login'].indexOf(to.path) !== -1) {
           next()
      } else {
           next('/login')
      }
   }
})
```
