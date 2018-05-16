# 2016年确立的三足鼎立

- React
- Vue
- Angular
- 前端编程之路 <http://project.giscafer.com/>
- <https://juejin.im/post/5a0d5df1f265da43062a542f?utm_medium=fe&utm_source=weixinqun>

# React资源

- react-starter-kit <https://github.com/kriasoft/react-starter-kit>

- react-redux-links <https://github.com/markerikson/react-redux-links>

- 深入 React 技术栈 <https://github.com/arcthur/react-book-examples>

- React与Redux开发实例精解

  - <https://github.com/lewis617/react-redux-tutorial>
  - <https://github.com/lewis617/react-redux-book>
  - <https://github.com/lewis617/react-redux-heroku>

- 后台框架

  - Ant Design <https://preview.pro.ant.design>

- vscode插件

  - <https://juejin.im/entry/599d4cb96fb9a024a27bf090>

- 网站

  - 一个收集react的网站 <https://react.parts/native>
  - <https://github.com/react-native-material-design/react-native-material-design>

# React

- 基础

  - 一个用于构建 用户界面 的JS库 ，起源于Instagram，主要用于构建UI
  - API <http://www.runoob.com/react/react-component-api.html>
  - 建议使用 CommonJS 模块系统 （browserify 或 webpack）
  - 特点

    - 采用声明范式，可以轻松描述应用
    - DOM模拟 virtual-Dom ，最大限度地减少与DOM的交互
    - 与已知的库或框架很好地配合

- 语法

  - 使用大、小写的约定,来区分本地组件的类和 HTML 标签
  - JSX 就是 JavaScript, class 和 for 不建议作为 XML 属性名 ,作为替代, 使用 className 和 htmlFor
  - 注释 render里的标签注释要花括号 形同 {/_注释..._/}
  - 组件类只能包含一个顶层标签，否则会报错

```javascript
使用 create-react-app进行安装
// npm install -g cnpm --registry=https://registry.npm.taobao.org
// npm config set registry https://registry.npm.taobao.org

cnpm install -g create-react-app
create-react-app my-app
cd my-app/
npm start

// 引入的JS文件
react.min.js // 核心库
react-dom.min.js // DOM 相关
browser.min.js // 将JSX语法转为JS语法
```

- JSX

- 组件化， 代码更容易复用 ， 适合于大项目开发

- 单向响应的数据流 ，减少了重复代码 ，比传统数据绑定更简单

```javascript
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

- React State(状态)

  - React 把组件看成一个State Machines,通过与用户的交互实现不同状态 ,然后渲染 UI ,让用户界面和数据保持一致
  - 只 需更新组件的 state , 然后根据新的 state 重新渲染用户界面

- React Props

  - state 和 props 主要的区别, p rops 是不可变的，子组件只能通过 props 来传递数据 ,而 state 可以根据与用户交互来改变
  - 更多验证器
  - replaceProps()方法, 与 setProps类似 , 但它会删除原有props
  - 强 制更新：forceUpdate
  - 获取DOM节点：findDOMNode
  - 判断组件挂载状态：isMounted

- 组件的生命周期

  - Mounting：已插入真实 DOM
  - Updating：正在被重新渲染
  - Unmounting：已移出真实 DOM

- React Ajax

  - 当 使用异步加载数据时 ,在组件卸载前使用 componentWillUnmount ,来取消未完成的请求

- React refs

  - React 支持一种非常特殊的属性 Ref ,你可以用来绑定到 render() 输出的任何组件上
  - 支 撑实例（ backing instance ） ,任何时间总是拿到正确的实例

# 初入REACT世界

- React简介

  - 专注视图层
  - Virtual DOM
  - 函数式编程

- JSX

- React组件

- React数据流

  - state
  - props

- React生命周期

- React与DOM

# 漫谈REACT

- 事件系统
- 表单
- 样式处理
- 组件间通信
- 组件间抽象

  - mixin
  - 高阶组件
  - 组合式组件开发实践

- 组件性能优化

  - 纯函数
  - PureRender
  - Immutable
  - key
  - react-addons-perf

- 动画

  - CSS动画与JS 动画
  - 玩转React Transition
  - 缓动动画

- 自动化测试

  - Jest
  - Enzyme
  - 自动化测试

- React/Redux/webpack教程

  - <http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html>
  - <http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html> (Redux教程)
  - <https://github.com/ruanyf/react-demos> | <https://github.com/ruanyf/webpack-demos>

- Flux 架构

  - <https://github.com/ruanyf/extremely-simple-flux-demo>
  - <http://blog.andrewray.me/flux-for-stupid-people/>
  - <http://www.ruanyifeng.com/blog/2016/01/flux.html>

```shell
Flux 的最大特点，就是数据的"单向流动"
```

# 解读React源码

- Virtual DOM
- 生命周期的管理艺术
- 解密setState机制
- diff算法
- React patch方法

# 认识Flux架构模式

- React独立架构
- MV*与Flux
- Flux

  - 核心思想
  - 不足

# 深入Redux应用架构

- Mobx

  - <http://cn.mobx.js.org/>

- Redux

  - <http://www.redux.org.cn/>

- Redux

  - 三大原则
  - 核心API

- Redux middleware

- Redux 异步流

- Redux与路由

- Redux与组件

  - 容器型组件
  - 展示型组件
  - Redux中的组件

# Redux高级运用

# React服务端渲染

# React可视化

# Preact

- <https://juejin.im/post/5a0191f25188254de1699b0b>
- component
- h函数
- render
- diff算法
- 回收机制
