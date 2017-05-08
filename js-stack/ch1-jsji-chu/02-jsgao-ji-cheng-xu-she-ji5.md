#### **ch10、11、12 DOM及其扩展与DOM2、3**

* DOM 针对 HTML 和 XML 文档的一个 API（应用程序编程接口）
  * 一个层次化的节点树
  * 真正的跨平台、语言中立
  * NodeList是有生命、有呼吸的对象，而不是在我们第一次访问它们的某个瞬间拍摄下来的一张快照
  * hasChildNodes\(\) 比查询 childNodes列表的 length 属性更简单
  * ownerDocument
  * appendChild\(\) 和 insertBefore\(\) 
  * replaceChild\(\) removeChild\(\) 与使用 replaceChild\(\) 方法一样，通过 removeChild\(\) 移除的节点仍然为文档所有，只不过在文档中已经没有了自己的位置
  * cloneNode\(\) 方法接受一个布尔值参数，表示是否执行 深复制， 在复制之前最好先移除事件处理程序
  * normalize\(\) 处理文档树中的文本节点
  * 网页请求：URL 、 domain 和 referrer
  * 不让表单字段的 name 特性与其他元素的 ID 相同
* 特殊集合
  * document.anchors ，包含文档中所有带 name 特性的a元素
  *  document.forms
  * document.images
  * document.links
* DOM 一致性检测 P259

```js
        *  document.implementation
        *  hasFeature()
* DOM操作技术
    * 动态脚本
    * 动态样式
    * 操作表格
    * 使用NodeList
    * 尽量减少 DOM 操作
* DOM扩展
    * Selectors API（选择符 API）
    * HTML5
    * <del>Element Traversal（元素遍历）规范</del>
* Selectors API（选择符 API）
  * querySelector()
  * querySelectorAll()
* DOM2 和 DOM3模块
    * DOM2 级核心（DOM Level 2 Core） 节点操作
    * DOM2 级视图（DOM Level 2 Views）样式视图
    * DOM2 级事件 Events
    * DOM2 级样式 Style
    * DOM2 级遍历和范围（DOM Level 2 Traversal and Range）：引入了遍历 DOM 文档和选择其特定部分的新接口。
    * DOM2 级 HTML（DOM Level 2 HTML）：在 1 级 HTML 基础上构建，添加了更多属性、方法和新接口。
    * DOM3 级又增加了“XPath”模块和“加载与保存”（Load and Save）模块
* 模块细节
    * 针对XML **命名空间** 的变化
    * NodeIterator TreeWalker
```







