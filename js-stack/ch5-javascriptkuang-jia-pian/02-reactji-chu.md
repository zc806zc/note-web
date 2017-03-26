#### R**eact**

* 资源
  * [React 组件 API](http://www.runoob.com/react/react-component-api.html)

```
// 安装
使用 create-react-app

// npm install -g cnpm --registry=https://registry.npm.taobao.org
// npm config set registry https://registry.npm.taobao.org

cnpm install -g create-react-app
create-react-app my-app
cd my-app/
npm start
```

* 基础

```js
一个用于构建 用户界面 的JS库 // 起源于Instagram
主要用于构建UI


// 环境
Node.js 及 NPM
建议使用 CommonJS 模块系统 // browserify 或 webpack

// 引入的JS文件
react.min.js      // 核心库
react-dom.min.js  // DOM 相关
browser.min.js    // 将JSX语法转为JS语法

// 特点
采用声明范式 // 可以轻松描述应用 
DOM模拟 virtual-Dom // 最大限度地减少与DOM的交互
与已知的库或框架很好地配合

// JSX
JS语法的扩展

// 组件
代码更容易复用
适合于大项目开发

// 单向响应的数据流 
减少了重复代码
比传统数据绑定更简单
```

* 语法

```js
// 语法
使用大、小写的约定
来区分本地组件的类和 HTML 标签

// 由于 
JSX 就是 JavaScript
class 和 for 不建议作为 XML 属性名 
作为替代
使用 className 和 htmlFor

// 注释 
render里的标签注释要花括号
{/*注释...*/}

组件类只能包含一个顶层标签，否则会报错
```

* React JSX

```js
很像 XML 的 JS语法扩展
执行更快 
类型安全 // 在编译过程中就能发现错误
// 编写模板更加简单快速

在 JSX 中不能使用 if else 语句
用 conditional (三元运算) 表达式替代

// 推荐使用 内联样式 渲染 HTML 标签

// 渲染 React 组件
var MyComponent = React.createClass({/*...*/});
var myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('example'));
```

* React State\(状态\)

```js
React 把组件看成
一个State Machines
通过与用户的交互实现不同状态
然后渲染 UI
让用户界面和数据保持一致

只需更新组件的 state
然后根据新的 state 重新渲染用户界面 // 不要操作 DOM
```

* React Props

```js
// state 和 props 主要的区别
props 是不可变的， // 子组件只能通过 props 来传递数据
而 state 可以根据与用户交互来改变

// 更多验证器

// replaceProps()方法
与setProps类似
但它会删除原有props

// 强制更新：forceUpdate

// 获取DOM节点：findDOMNode

// 判断组件挂载状态：isMounted

// 
```

* 组件的生命周期

```js
Mounting：已插入真实 DOM
Updating：正在被重新渲染
Unmounting：已移出真实 DOM
```

* React Ajax

```js
当使用异步加载数据时
在组件卸载前使用 componentWillUnmount 
来取消未完成的请求
```

* React refs

```js
React 支持一种非常特殊的属性 Ref 
你可以用来绑定到 render() 输出的任何组件上

支撑实例（ backing instance ）
任何时间总是拿到正确的实例
```

* 参考

```
菜鸟教程
```



