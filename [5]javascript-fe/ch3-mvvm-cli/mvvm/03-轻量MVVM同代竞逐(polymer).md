# 现代流行框架

- 框架性能对比  https://github.com/krausest/js-framework-benchmark
- 框架和库 https://github.com/jobbole/awesome-javascript-cn#mvc-%E6%A1%86%E6%9E%B6%E5%92%8C%E5%BA%93

# 小型MVVM实现

- sugar https://github.com/tangbc/sugar
- yox.js 小型MVVM 兼容IE8 https://github.com/yoxjs/yox
- way.js 轻量的双向绑定 <https://github.com/gwendall/way.js>
- jsblocks <https://github.com/astoilkov/jsblocks>

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="http://jsblocks.com/blocks/0.3.2/blocks.js"></script>
    <script>
      blocks.query({
        firstName: blocks.observable()
      });
    </script>
  </head>
  <body>
    Name:
    <input data-query="val(firstName)" placeholder="Enter your name here" />
    <hr />
    <h1>Hello {{firstName}}!</h1>
  </body>
</html>
```



# polymer

- https://github.com/Polymer/polymer

# inferno

- https://github.com/infernojs/inferno

# preact

- https://github.com/developit/preact

# omi

- Omi === Preact + Scoped CSS + Store System + Native Support in 3kb javascript.
- https://github.com/Tencent/omi

# svelte

- https://svelte.technology/

# aura 

- 一个事件驱动、可扩展的JS架构
- https://github.com/aurajs/aura

# Riot

- 基于组件的开发模型, 小巧
- <https://github.com/riot/riot> Simple and elegant component-based UI library

# choo

- https://choo.io/


# ractive

- https://github.com/ractivejs/ractive

# mithril

- mithril https://github.com/MithrilJS/mithril.js