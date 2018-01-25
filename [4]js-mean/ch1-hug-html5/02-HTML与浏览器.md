# HTML标签

- html5doctor HTML争论的论坛 <http://html5doctor.com>

# HTML结构

- 正式体

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Document</title>

  <!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->

</head>
<body>

</body>
</html>
```

- 究极完美体

```html
//
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Faster</title>
  <link rel="dns-prefetch" href="//cdn.cn/">

  <link rel="preload" href="//cdn.cn/webfont.woff2" as="font">
  <link rel="preload" href="//cdn.cn/Page1-A.js" as="script">
  <link rel="preload" href="//cdn.cn/Page1-B.js" as="script">

  <link rel="prefetch" href="//cdn.cn/Page2.js">
  <link rel="prefetch" href="//cdn.cn/Page3.js">
  <link rel="prefetch" href="//cdn.cn/Page4.js">

  <style type="text/css">
    /* 首页用到的CSS内联 */
  </style>
</head>
<body>

<script type="text/javascript" src="//cdn.cn/Page1-A.js" defer></script>
<script type="text/javascript" src="//cdn.cn/Page1-B.js" defer></script>
</body>
</html>
```

# Meta

- Head

  - meta <http://www.css88.com/archives/6410>
  - <https://juejin.im/entry/5a5395d76fb9a01c9e45d027>

```javascript
// 移动厂商特有的值
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">
```

# 常用Meta

```javascript
<meta http-equiv="refresh" content="30"> // 每30秒中刷新当前页面:

<!-- 视图窗口，移动端特属的标签。 -->
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">

<!-- 是否启动webapp功能，会删除默认的苹果工具栏和菜单栏。 -->
<meta name="apple-mobile-web-app-capable" content="yes">

<!-- 这个主要是根据实际的页面设计的主体色为搭配来进行设置。 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black">

<!-- 忽略页面中的数字识别为电话号码,email识别 -->
<meta name="format-detection" content="telephone=no, email=no">

<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit">

<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">

<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">

<!-- 强制竖屏 -->
<meta name="screen-orientation" content="portrait"> <!-- uc强制竖屏 -->
<meta name="x5-orientation" content="portrait"> <!-- QQ强制竖屏 -->

<!-- 强制全屏 -->
<meta name="full-screen" content="yes"> <!-- UC强制全屏 -->
<meta name="x5-fullscreen" content="true"> <!-- QQ强制全屏 -->

<!-- 应用模式 -->
<meta name="browsermode" content="application"> <!-- UC应用模式 -->
<meta name="x5-page-mode" content="app"> <!-- QQ应用模式 -->

<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">

<!-- pc端调整页面兼容代码 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
```

# YAML

- <http://www.ruanyifeng.com/blog/2016/07/yaml.html>
- JS-YAML <https://github.com/nodeca/js-yaml> 把函数和正则表达式转为字符串)

```javascript
YAML 是专门用来写配置文件的语言，非常简洁和强大
远比 JSON 格式方便

一种通用的数据串行化格式
只允许使用空格

// 支持的数据结构
对象
数组
纯量（scalars） // 单个的、不可再分的值

hash: { name: Steve, foo: bar }
// { hash: { name: 'Steve', foo: 'bar' } } // JS

-
 - Cat
 - Dog
 - Goldfish
// [ [ 'Cat', 'Dog', 'Goldfish' ] ] // JS

// 复合结构

// 纯量
parent: ~
// { parent: null } // JS

e: !!str 123
f: !!str true
// { e: '123', f: 'true' } // 强调数据类型转化

// | > + -
// 锚点&和别名*，可以用来引用
```

- 浏览器内核
- 渲染引擎

> 浏览器会思考，而且经常会取笑我们

# Pug

```javascript
不提倡 over
```

# HTML技巧

- chrome添加语音搜索

```html
<!--  x-webkit-speech -->
<input type="text" class="box" name="s" id="s" class="inputText" placeholder="输入关键词"  x-webkit-speech>
```

# 浏览器渲染原理

- 渲染引擎
