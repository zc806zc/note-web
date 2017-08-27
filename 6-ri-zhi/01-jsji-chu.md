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
   1. https://juejin.im/post/5995c7a76fb9a0247a60c407?utm\_source=gold\_browser\_extension

## 面试

* 2017面试总结 [https://juejin.im/entry/599038d151882548b31b4f03?utm\_source=gold\_browser\_extension](https://juejin.im/entry/599038d151882548b31b4f03?utm_source=gold_browser_extension)

* JS面试题   https://juejin.im/entry/598c003c6fb9a03c367d054e?utm\_source=gold\_browser\_extension

* 浏览器工作原理  
     1. 浏览器引擎 用来查询及操作渲染引擎的接口  
     2. 渲染引擎  
     3. JS解释器

* **Web安全**  
     1. https  
     2. xss  
     3. xsrf  
     4. Sql注入

* **状态码**

* **同源**:同端口,同域名,同协议 [https://segmentfault.com/a/1190000008776669](https://segmentfault.com/a/1190000008776669)

* 常见**兼容性**问题,列举\(移动端/PC端\)

* 性能优化

* **Ajax**原理

* 浏览器

  * 解析过程 

```
解析html以构建dom树->构建render树->布局render树->绘制render树
```

* **布局**
  * 垂直居中
  * block和inline-block
  * 移动布局
  * rem
  * getComputedStyle
  * 清浮动,BFC
* 路由实现
* **数据结构与算法**     1. 单链表反转     2. 快排     3. 数组去重
* **即时通信**
  * Ajax
  * websocket
  * Comet技术
  * SSE：服务器发送事件,使用长链接进行通讯
* 实现动画
* **对象继承**的实现
* 设计模式

  * 单例模式
  * 工厂模式
  * 发布订阅模式

* node多线程实现

* ~~MD5摘要算法其他用途~~

* 组件
  * CSS写轮播
  * 拖拽组件
* **正则表达式**
* es6
  * babel  [https://babeljs.io/blog/2016/12/07/the-state-of-babel](https://babeljs.io/blog/2016/12/07/the-state-of-babel)



