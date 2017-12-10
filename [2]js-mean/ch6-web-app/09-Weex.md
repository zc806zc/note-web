# Weex

- https://juejin.im/post/5a2a730cf265da431f4afd35
- 结构
  - Native UI
  - JavaScript
  - Device Power

```js
// Weex 页面结构
界面展示、逻辑处理、设备能力使用、生命周期管理等部分。

// Dom模型
Weex 页面通过类似 HTML DOM 的方式管理界面，首先页面会被分解为一个 DOM 树，，每个 DOM 结点都代表了一个相对独立的 native 视图的单元。然后不同的视图单元之间通过树形结构组合在了一起，构成一个完整的页面。

// 组件
Weex 支持文字text、图片image、视频video等内容型组件，也支持 div、list、scroller 等容器型组件，还包括 slider、input、textarea、switch 等多种特殊的组件。Weex 的界面就是由这些组件以 DOM 树的方式构建出来的。

// 布局系统
Weex 页面中的组件会按照一定的布局规范来进行排布，我们这里提供了 CSS 中的盒模型、flexbox 和 绝对/相对/固定/吸附布局这三大块布局模型。

// 功能
Weex 提供了非常丰富的系统功能 API，包括弹出存储、网络、导航、弹对话框和 toast 等，开发者可以在 Weex 页面通过获取一个 native module 的方式引入并调用这些客户端功能 API。
生命周期
每个 Weex 页面都有其自身的生命周期，页面从开始被创建到最后被销毁，会经历到整个过程。这是通过对 Weex 页面的创建和销毁，在路由中通过 SDK 自行定义并实现的。
```  

![](https://user-gold-cdn.xitu.io/2017/12/8/16035d040cbe5288?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

- Native 接入
- 跳转规则
- 配置平台
  - appType
  - preTest
  - appVersion
- 支持相对地址
- 预加载方案

```js
方案设计如下：

1）每次更新完配置文件，遍历，check pagename.js文件的md5
2）如果本地存在md5一致的文件，就跳过，否则下载
3）下载完成后，保存格式为pagename.js，已存在则覆盖，校验md5来保证文件的完整性：

相同的话，记录文件的最后修改时间；
不同的话，删除已下载文件，重新下载，重复校验流程。


4）每次打开指定页面的时候：

先检查本地是否有对应page文件

如果不存在，则直接使用配置里的remote url
如果存在，则校验记录的修改时间是否与该文件的最后修改时间是否一致(这么做，是为了防篡改；不直接计算md5来校验，是考虑到md5的计算有时间消耗)

一致就加载
不一致就用配置里的remote url
```  

- Native-JS通信
- 错误监控
- 页面传参
- 降级方案
- 屏幕适配
