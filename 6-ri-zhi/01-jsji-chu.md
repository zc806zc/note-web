## JS基础

1. 变量提升

```js
notyetdeclared = 'now it is declared';

hoisting();

function hoisting(){
  console.log(notyetdeclared); // now it is declared
  notyetdeclared = 'declared differently';
}

-----------------------

notyetdeclared = 'now it is declared';

hoisting();

function hoisting(){
  console.log(notyetdeclared); // undefined
  var notyetdeclared = 'declared differently';
}
```

1. this

## 面试

1. 2017面试总结 https://juejin.im/entry/599038d151882548b31b4f03?utm\_source=gold\_browser\_extension
   1. 浏览器工作原理 
      1. 浏览器引擎 用来查询及操作渲染引擎的接口
      2. 渲染引擎
      3. JS解释器
   2. **Web安全**
      1. https
      2. xss
      3. xsrf
      4. Sql注入
   3. **状态码**
   4. **同源**:同端口,同域名,同协议 https://segmentfault.com/a/1190000008776669
   5. 常见**兼容性**问题,列举\(移动端/PC端\)
   6. 性能优化
   7. **Ajax**原理
   8. 浏览器解析过程 
      1. 解析html以构建dom树-&gt;构建render树-&gt;布局render树-&gt;绘制render树
   9. **布局**
      1. 垂直居中
      2. block和inline-block
      3. 移动布局
      4. rem
      5. getComputedStyle
      6. 清浮动,BFC
   10. 路由实现
   11. **数据结构与算法**
       1. 单链表反转
       2. 快排
       3. 数组去重
   12. **即时通信**

       1. Ajax

       2. websocket

       3. Comet技术

       4. SSE：服务器发送事件,使用长链接进行通讯

   13. 实现动画

   14. **对象继承**的实现

   15. 设计模式

       1. 单例模式

       2. 工厂模式

       3. 发布订阅模式

   16. node多线程实现

   17. ~~MD5摘要算法其他用途~~

   18. 组件

       1. CSS写轮播

       2. 拖拽组件

   19. **正则表达式**



