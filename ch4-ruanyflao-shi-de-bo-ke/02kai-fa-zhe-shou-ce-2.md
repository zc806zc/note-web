#### 开发者手册2

* CSS Modules
  * [https://github.com/ruanyf/css-modules-demos](https://github.com/ruanyf/css-modules-demos) 示例
  * [https://github.com/css-modules/css-modules/blob/master/docs/get-started.md](https://github.com/css-modules/css-modules/blob/master/docs/get-started.md)
  * [https://github.com/ruanyf/webpack-demos](https://github.com/ruanyf/webpack-demos) \(webpack教程\)

```js
// 并不想多出一门编程语言

从最早的Less、SASS
到后来的 PostCSS
再到最近的 CSS in JS

Webpack 的css-loader插件

// 局部作用域
<h1 class="_3zyde4l1yATCOkgn-DBWEL"> // 编译成一个哈希字符串
  Hello World
</h1>

._3zyde4l1yATCOkgn-DBWEL {
  color: red;
}

// 全局作用域
.title {
  color: red;
}

:global(.title) {
  color: green;
}

// 定制哈希类名

// Class 的组合
.className {
  background-color: blue;
}

.title {
  composes: className;
  color: red;
}

<h1 class="_2DHwuiHWMnKTOYG45T0x34 _10B-buq6_BEOTOl9urIjf8">

// 输入其他模块
.title {
  composes: className from './another.css';
  color: red;
}

// 输入变量
npm install --save postcss-loader postcss-modules-values

@value blue: #0c77f8;
@value red: #ff0000;
@value green: #aaf200;

@value colors: "./colors.css";
@value blue, red, green from colors;

.title {
  color: red;
  background-color: blue;
}
```

* Systemd

```js

```

* 网站的肥胖症危机
  * https://vimeo.com/147806338

```js
文本本身并不大，
但是展示它们的网页，正变得越来越大
// 广告、高清图片、视频、用户追踪系统、社交媒体的代码

Google正在为大网页做标记

// 健康的网页
值得阅读的文本，配上结构良好的标签。
适度的图片和视觉设计。
一层CSS
少量的JavaScript，只在必需时使用

// 工程师想出了很多方法：
首屏快速渲染、压缩文件、异步加载、批量HTTP请求、管道发送等等
网站开发越来越依赖代码精简、压缩、缓存、服务器配置这些中间步骤，
这使得找出错误越来越困难，成本越来越高

// 解决方案
第一步，确保最重要的内容，首先下载和渲染
第二步，就此结束


```



