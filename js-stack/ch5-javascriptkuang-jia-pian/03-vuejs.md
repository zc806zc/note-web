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
```

* 基础

```js
Vue.js 不支持 IE8 及其以下 IE 版本 // 干得好！！
```

* 语法

```js

```

* 组件

```js

```

* 参考

```js
菜鸟教程
```



