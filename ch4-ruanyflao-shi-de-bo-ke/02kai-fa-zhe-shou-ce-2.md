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



