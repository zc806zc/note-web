> 愿世间再无 webpack 配置工程师

# webpack优化

- awesome-webpack-cn https://github.com/webpack-china/awesome-webpack-cn
- webpack 应用编译优化之路 https://juejin.im/post/59dc57f2f265da431d3ba2ef
- 参考
    - webpack-study https://github.com/qq20004604/webpack-study
    - 静态站点 https://github.com/vhtml/webpack-MultiPage-static
    - https://github.com/ruanyf/css-modules-demos
    - https://github.com/css-modules/webpack-demo
    - https://www.jianshu.com/p/63eacd66eb50du
    - https://github.com/rt-zhangxuefei/vue-project-multipages-template

- 优化

    - NICE webpack打包优化探索 https://mp.weixin.qq.com/s/SzD22kTnYYfQShQwRaAGWA
        - https://github.com/zhuanzhuanfe
        - https://github.com/zhuanzhuanfe/zz-webpack-vue
        - https://github.com/zhuanzhuanfe/zz-webpack-react
        
    - 使用 webpack 优化资源 https://qiutc.me/post/resource-optimization-webpack.html
    - 优化Webpack构建性能的几点建议 https://www.cnblogs.com/powertoolsteam/p/Webpack.html
    - 借助webpack对项目进行分析优化 https://segmentfault.com/a/1190000014369413
        - https://segmentfault.com/u/athon
        - http://callmedadaxin.github.io/
    - webpack优化不完全指南 https://juejin.im/post/5a49fb696fb9a0451e402718
    - webpack打包优化（VUE Project）讲ddl优化配置 https://juejin.im/post/5a8797c15188257a836c385d
    - 晚晴幽草轩
        - 速度篇 https://jeffjade.com/2017/08/12/125-webpack-package-optimization-for-speed/
        - 体积篇 https://jeffjade.com/2017/08/06/124-webpack-packge-optimization-for-volume/
    - https://juejin.im/post/5a869044f265da4e9c632f94
    - https://github.com/DDFE/DDFE-blog/issues/23

- 再一波优化(lazy boy)
  - Webpack + Vue，部署时减少包体积的几种方法 https://juejin.im/post/5abba68cf265da239c7b6bdc
    - 减少不必要的库依赖(CDN)
    - 懒加载
  -  webpack打包之后的文件过大的解决方法 https://juejin.im/post/5a9d17446fb9a028d374e733
    - 剥离css文件，单独打包 

```javascript
// 懒加载
// import Article from '@/components/Article'
const Article = () => import('@/components/Article') // 利用promise
```

# 并行执行

- parallel-webpack
- happypack
    - https://github.com/amireh/happypack
    - 组件库webpack构建速度优化经验总结 https://juejin.im/post/5a922e776fb9a06337575031

# 插件

- html-webpack-include-assets-plugin https://github.com/jharris4/html-webpack-include-assets-plugin
- html-webpack-inline-source-plugin https://github.com/DustinJackson/html-webpack-inline-source-plugin
- webpack-concat-plugin 压缩合并文件注入到html,目前只支持js https://github.com/hxlniada/webpack-concat-plugin
- html-webpack-harddisk-plugin 开发热更新时输出html  https://github.com/jantimon/html-webpack-harddisk-plugin
- write-file-webpack-plugin
    - webpack 热更新时输出文件 https://segmentfault.com/q/1010000014962454/a-1020000014983460

```js
new WriteFilePlugin({
    test: /static|templates/,
    useHashIndex: false
})
```


# webpack4

- awesome-webpack-4 https://github.com/valentinogagliardi/awesome-webpack-4
- 官网配置栗子 https://github.com/webpack/webpack/tree/master/examples
- 手摸手，带你用合理的姿势使用webpack4
    - https://juejin.im/post/5b56909a518825195f499806
    - 在webpack 3的基础上升级
    - 最大化利用 long term caching持久化缓存
    - 优化分包策略
    - Caching https://webpack.js.org/guides/caching/


![](https://user-gold-cdn.xitu.io/2018/8/7/16513e81dfa85cbc?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2018/8/7/16513e5b6a73ac96?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

```js
// 升级node 
npm install webpack-cli -D -g

反正把devDependencies的依赖都升级一下，总归不会有错
babel-preset-esxxxx -> babel-preset-env

// mini-css-extract-plugin
与 extract-text-webpack-plugin 区别
将 css 独立拆包最大的好处就是 js 和 css 的改动，不会影响对方。

// 压缩优化
optimization: {
  minimizer: [new OptimizeCSSAssetsPlugin()];
}

// 打包速度
普遍能提高 20%~30%的打包速度
speed-measure-webpack-plugin

// 代码分割策略
新的 chunk 是否被共享或者是来自 node_modules 的模块
新的 chunk 体积在压缩之前是否大于 30kb
按需加载 chunk 的并发请求数量小于等于 5 个
页面初始加载时的并发请求数量小于等于 3 个


为了共用这 1.5kb 的代码，却要额外花费一次 http 请求的时间损耗，得不偿失


基础类库 chunk-libs : nprogress、js-cookie、clipboard
UI 组件库
自定义组件/函数 chunk-commons
低频组件 : 富文本编辑器、js-xlsx前端 excel 处理库
业务代码

// 支持HTTP/2
webpack4.15.0 新增的 maxSize

// Long term caching 持久化缓存
// 针对 html 文件：
不开启缓存，把 html 放到自己的服务器上，关闭服务器的缓存
// 针对静态的 js，css，图片等文件：
开启 cdn 和缓存，将静态资源上传到 cdn 服务商，我们可以对资源开启长期缓存，
因为每个资源的路径都是独一无二的，所以不会导致资源被覆盖，保证线上用户访问的稳定性。

每次发布更新的时候，先将静态资源(js, css, img) 传到 cdn 服务上，然后再上传 html 文件，
这样既保证了老用户能否正常访问，又能让新用户看到新的页面

// 优化
打包生成的 runtime.js非常的小 => 内嵌到html
script-ext-html-webpack-plugin


不要使用一个自增的 id
HashedModuleIdsPlugin

// webpack records
用于存储跨多次构建(across multiple builds)的模块标识符」的数据片段
等于每次构建都是基于上次构建的基础上进行的。

```


- 打包速度优化 https://github.com/xitu/gold-miner/blob/master/TODO/keep-webpack-fast-a-field-guide-for-better-build-performance.md
- webpack4-用之初体验，一起敲它十一遍 https://juejin.im/post/5adea0106fb9a07a9d6ff6de

# webpack4小结

```
其实所谓的“零配置”根本不靠谱
一旦项目复杂 约定就不如配置
```