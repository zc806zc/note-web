# DOM优化

- <https://juejin.im/entry/59ae19666fb9a024903aceae?utm_source=gold_browser_extension>
- DOM 性能优化

  - 网络消耗
  - DOM 在浏览器的初始化
  - DOM 的结构和动态操作
  - JS 业务逻辑

- 优化措施

  - 简化 HTML 结构（减少不必要的嵌套，尽量扁平化、语义化）

    - 使用 DIV + CSS 替代 Tables 来布局
    - 多使用 Flex Box
    - 避免使用 hr 标签来添加水平线，可使用 CSS 的 border-bottom 来代替

  - 避免重绘与回流

    - 回流可能导致整个 DOM 树的重新构造，所以是性能的一大杀手
    - 不要对元素进行 JS 动画流操作，尽量使用 CSS 动画属性，以减少回流的 Render Tree 的规模
