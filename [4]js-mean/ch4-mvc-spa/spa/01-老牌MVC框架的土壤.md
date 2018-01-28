# 老牌框架的土壤

- Vue的比较

  - <https://cn.vuejs.org/v2/guide/comparison.html>
  - Ember
  - Knockout
  - Polymer

    - Polymer 的自定义元素是Vue的灵感来源之一
    - 使用 HTML Imports 加载所有资源

  - Riot

    - 基于组件的开发模型, 小巧

# Knockout

- <https://github.com/knockout/knockout>

- MVVM 领域内的先驱

- 组件系统缺少完备的生命周期事件方法

# Backbone

- MVC
- <https://github.com/jashkenas/backbone>
- <http://www.yiibai.com/backbonejs/>

# Ember

- <https://github.com/emberjs/ember.js>

# Avalon2

- 扫描引擎 概念
- <http://avalonjs.coding.me/>

```html
<body :controller="test">
<script>
var vm = avalon.define({
  $id: "test",
  aaa: "XXXX"
  toggle: false
})
</script>
<div ms-skip='true' >{{@aaa}}</div>
<div>{{@aaa}}</div>
</body>
```

# polymer

- <https://github.com/Polymer/polymer>

# 7周7web框架

- Sinatra

- CanJS

- AngularJS

- Ring

- Webmacchine

- Yesod

- Immutant

> vanilla.js是世界上最轻量的JS框架(qishijiushiyuansheng)
