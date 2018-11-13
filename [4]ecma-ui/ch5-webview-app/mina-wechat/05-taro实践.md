# README

- awesome-taro https://github.com/NervJS/awesome-taro
- Taro 多端开发实现原理与项目实战 @nice 
  - https://juejin.im/book/5b73a131f265da28065fb1cd
  - taro实现原理 @nice
  - 商城实践细节

# taro 

- https://github.com/NervJS/taro
- Web(h5) + App(React Native、Weex) + 小程序(weapp + alipay + swan)
- 以 React15 为基础
- 由于微信小程序的限制，React 中某些写法和特性在 Taro 中还未能实现
- 适配处理 ：开发时使用px和百分比 -> Taro在小程序中转成 rpx ，在 H5中转成 rem 

```shell
# 安装
npm install -g @tarojs/cli
npm install -g taro-ui

# 微信小程序
# npm script
$ npm run dev:weapp
$ npm run build:weapp
# 仅限全局安装
$ taro build --type weapp --watch
$ taro build --type weapp
# npx 用户也可以使用
$ npx taro build --type weapp --watch
$ npx taro build --type weapp...
```

- 文档 https://nervjs.github.io/taro/docs/README.html

# Taro 设计思想及架构

- 编译原理

```
一个对输入的源代码进行语法分析，
语法树构建，
随后对语法树进行转换操作再解析生成目标代码的过程
```

![](https://user-gold-cdn.xitu.io/2018/10/8/16651824b8ac59a4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

- cli原理

  - lerna 多模块管理
  - 用到的核心库 
    - commander.js + shell.js + ...
    - ->> https://juejin.im/book/5b73a131f265da28065fb1cd/section/5b74ec07e51d4566633b2930

![](https://user-gold-cdn.xitu.io/2018/10/8/16651547b6ddebe1?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

# UI 

- taro UI 
    - https://github.com/NervJS/taro-ui 
    - https://taro-ui.aotu.io/#/docs/introduction

# 入门避坑 

- 好多坑...
- 设置

```
添加的路径为项目根目录下的 dist 文件夹
设置关闭 ES6 转 ES5 功能
设置关闭上传代码时样式自动补全
设置关闭代码压缩上传
```

- 命名 

    - 方法名不能含有数字
    - 方法名不能以下划线开头或结尾
    - 方法名的长度不能大于 20

- 语法暂不支持 @attention

    - 不能在 render() 之外的方法定义 JSX
    - 不能在包含 JSX 元素的 map 循环中使用 if 表达式
    - 不能使用 Array.map 之外的方法操作 JSX 数组
    - 不能使用 Array.map 之外的方法操作 JSX 数组 @attention
    - 不能在 JSX 参数中使用匿名函数
    - 不能在 JSX 参数中使用对象展开符
    - 不允许在 JSX 参数（props）中传入 JSX 元素
    - 不支持无状态组件

```jsx
// 在 map 循环中使用条件表达式或逻辑表达式
numbers.map((number) => {
  const isOdd = number % 2
  return isOdd ? <Custom /> : null
})

numbers.map((number) => {
  const isOdd = number % 2
  return isOdd && <Custom />
})
```

- 样式

```
微信小程序的自定义组件样式默认是不能受外部样式影响的, 
在页面中引用了一个自定义组件，
直接写自定义组件元素的样式是无法生效的
```

# 编程规范  | 最佳实践

- JS 编码必须用单引号
- 组件传递函数属性名以 on 开头(Taro约定)
- 小程序端不要将在模板中用到的数据设置为 undefined, 使用 null替代
- 直接以process.env.NODE_ENV调用环境变量

- 给组件设置 defaultProps

```jsx
class CustomButton extends React.Component {
  // ...
}

CustomButton.defaultProps = {
  color: 'blue'
}
```

- 不要在 state 与 props 上用同名的字段
- 组件属性传递注意， 不要以 id、class、style...
- componentWillMount 不一致

```jsx
由于微信小程序里页面在 onLoad 时才能拿到页面的路由参数，
而页面 onLoad 前组件都已经 attached 了。
因此页面的 componentWillMount 可能会与预期不太一致。


// 错误写法
render () {
  // 在 willMount 之前无法拿到路由参数
  const abc = this.$router.params.abc
  return <Custom adc={abc} />
}

// 正确写法
componentWillMount () {
  const abc = this.$router.params.abc
  this.setState({
    abc
  })
}
render () {
  // 增加一个兼容判断
  return this.state.abc && <Custom adc={abc} />
}...
```

- 预加载 @attention

```jsx
class Index extends Component {
  componentWillMount () {
    console.log('isFetching: ', this.isFetching)
    this.$preloadData
      .then(res => {
        console.log('res: ', res)
        this.isFetching = false
      })
  }

  componentWillPreload (params) {
    return this.fetchData(params.url)
  }

  fetchData () {
    this.isFetching = true
    ...
  }
}
```

- 其他

    - 小程序端不要在组件中打印传入的函数
    - 小程序端不要在组件中打印 this.props.children => 语法糖

# 微信小程序开发填坑

- 页面栈只有 10 层, 防止溢出

```jsx
// 处理微信跳转超过10层
function jumpUrl (url, options = {} ) {
  const pages = Taro.getCurrentPages()
  let method = options.method || 'navigateTo'
  if (url && typeof url === 'string') {
    if (method === 'navigateTo' && pages.length >= PAGE_LEVEL_LIMIT - 3) {
      method = 'redirectTo'
    }

    if (method === 'navigateToByForce') {
      method = 'navigateTo'
    }

    if (method === 'navigateTo' && pages.length == PAGE_LEVEL_LIMIT) {
      method = 'redirectTo'
    }

    Taro[method]({
      url
    })
  }
}
```

- 页面内容有缓存(闪烁) -> 每次在onHide 生命周期中清理一下当前页面的数据
- 页面不会自动刷新 -> 每次都onShow周期拉数据
- 不能随时地监听页面滚动事件 ??
- 小程序与 WebView 之间不能随意通信
  - 小程序不支持本地存储
  - 可以选择在 URL 里携带信息 ??
- 某些组件(map、canvas、video、textarea)总是会在最上层 -> cover-view 组件来包裹浮层  
- decodeURIComponent

```jsx
// 这是首页 js
Page({
  onLoad: function(options) {
    // options 中的 scene 需要使用 decodeURIComponent 才能获取到生成二维码时传入的 scene
    var scene = decodeURIComponent(options.scene)
  }
})
```

- 有弹出层时，难以禁止底部页面滚动

```jsx
在最外层使用 scroll-view 组件包裹，
然后有弹出层时，
将 scroll-y 属性设置为 false 从而禁止页面滚动
```

# 使用redux

```shell
npm install --save redux @tarojs/redux redux-logger
```

# 实践

- taro-msparis 时装衣橱 @nice https://github.com/EasyTuan/taro-msparis
- todo-list taro实验性demo https://github.com/NervJS/taro-todo
- taro-v2ex https://github.com/NervJS/taro-v2ex
- taro-zhihu-sample https://github.com/NervJS/taro-zhihu-sample
- taro-dva 仿知乎 https://github.com/zuoge85/taro-dva