# README

- Taro 多端开发实现原理与项目实战 https://juejin.im/book/5b73a131f265da28065fb1cd

# taro 

- https://github.com/NervJS/taro
- Web(h5) + App(React Native、Weex) + 小程序(weapp + alipay + swan)
- 以 React15 为基础
- 由于微信小程序的限制，React 中某些写法和特性在 Taro 中还未能实现

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

# 实践

- TODO示例 多端解决方案 https://github.com/NervJS/taro-todo