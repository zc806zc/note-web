# **DOM**

1. 针对 HTML 和 XML 文档的一个 API 
2. 应用程序编程接口
   * 一个层次化的节点树
   * 真正的跨平台、语言中立
3. NodeList
   * 是有生命、有呼吸的对象，而不是某个瞬间的一张快照
   * hasChildNodes\(\) 比查询 childNodes列表的 length 属性更简单
   * ownerDocument
   * appendChild\(\) 和 insertBefore\(\) 
   * replaceChild\(\) removeChild\(\) , 通过 removeChild\(\) 移除的节点仍然为文档所有，只不过在文档中已经没有了自己的位置

   * cloneNode\(\) 方法接受一个布尔值参数，表示是否执行 深复制， 在复制之前最好先移除事件处理程序
   * normalize\(\) 处理文档树中的文本节点
4. 网页请求：URL 、 domain 和 referrer

1. 特殊集合
   * document.anchors
   * document.forms
   * document.images
   * document.links
2. **DOM 一致性检测**  P259
   1. document.implementation
   2. hasFeature\(\)

```js
     
```

* DOM2 和 DOM3模块



