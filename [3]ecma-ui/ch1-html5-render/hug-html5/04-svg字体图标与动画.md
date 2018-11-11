# SVG 

- https://github.com/oreillymedia/Using_SVG
- “破碎-重组-破碎” CSS3实现Lowpoly风格变形动画终极篇
  - https://codepen.io/yangyangbeiqiu/pen/VXgbzX
  - https://juejin.im/post/5acc561f6fb9a028d6647dd6
  - https://codepen.io/yangyangbeiqiu/pen/vRmpaB

# 工具

- svgo https://github.com/svg/svgo
  -  Node.js tool for optimizing SVG files

# icon

- 使用 SVG 打造一个高质量的 ICON 系统 <http://svgtrick.com/tricks/fefc144c481dde654be5455e8e34a6e1>
- 手摸手，带你优雅的使用 icon <https://juejin.im/post/59bb864b5188257e7a427c09>
  - 基于svg-sprite的svg icon方案实践 http://tech.lede.com/2018/03/28/fe/svg-icon/
  - image sprite(@deprecated) -> Font Awesome(兼容) -> iconfont(IE9+推荐使用)
  - iconfont 三种使用姿势
    - unicode(IE6+)
    - font-class(IE8+) 语义
    - symbol(IE9+) 可控制
  - 创建 icon-component 组件
    - svg-sprite-loader 使用webpack 的 exclude 和 include处理资源
    - 自动导入 require.context
    - svgo处理冗余 

```js
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
```