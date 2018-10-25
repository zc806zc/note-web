# MV*时代

- The Post-MVC Age https://academy.realm.io/posts/the-post-mvc-age/

# 老牌框架的土壤

- knockout
- backbone
- ember
- avalon

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
- awesome-ember https://github.com/nmec/awesome-ember

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
