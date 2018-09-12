# 现代流行框架

- 框架性能对比  https://github.com/krausest/js-framework-benchmark
- 框架和库 https://github.com/jobbole/awesome-javascript-cn#mvc-%E6%A1%86%E6%9E%B6%E5%92%8C%E5%BA%93
- 基于各种框架做的todo应用 http://todomvc.com

# MVVM

- polymer
- inferno
- preact 
- omi  
- mithril https://github.com/MithrilJS/mithril.js
- svelte
- aura
- choo
- ractive

# 小型MVVM实现

- moon.js https://github.com/kbrsh/moon
- sugar https://github.com/tangbc/sugar
- yox.js 小型MVVM 兼容IE8 https://github.com/yoxjs/yox
- way.js 轻量的双向绑定 <https://github.com/gwendall/way.js>
- jsblocks <https://github.com/astoilkov/jsblocks>

------

# mithril

```js
var root = document.body
var count = 0

var increment = function() {
    m.request({
        method: "PUT",
        url: "//rem-rest-api.herokuapp.com/api/tutorial/1",
        data: {count: count + 1},
        withCredentials: true,
    })
    .then(function(data) {
        count = parseInt(data.count)
    })
}

var Hello = {
    view: function() {
        return m("main", [
            m("h1", {
                class: "title"
            }, "My first app"),
            m("button", {
                onclick: increment
            }, count + " clicks"),
        ])
    }
}

m.mount(root, Hello)
```

# Riot

- 基于组件的开发模型, 小巧
- <https://github.com/riot/riot> Simple and elegant component-based UI library

```jsx
<todo>
  <h3>TODO</h3>

  <ul>
    <li each={ item, i in items }>{ item }</li>
  </ul>

  <form onsubmit={ handleSubmit }>
    <input ref="input">
    <button>Add #{ items.length + 1 }</button>
  </form>

  this.items = []

  handleSubmit(e) {
    e.preventDefault()
    var input = this.refs.input
    this.items.push(input.value)
    input.value = ''
  }
</todo>

<!-- 挂载 -->
<todo></todo>
<script>riot.mount('todo')</script>

riot.mount('todo', {
    title: 'I want to behave!',
    items: [
    { title: 'Avoid excessive caffeine', done: true },
    { title: 'Hidden item',  hidden: true },
    { title: 'Be less provocative'  },
    { title: 'Be nice to people' }
    ]
})
```

# moon

- IE9+
- https://kbrsh.github.io/moon/examples/todo/index.html

```html
<script src="https://unpkg.com/moon"></script>

<div id="root"></div>

<script type="text/mvl" id="template">
    <div class="flex direction-vertical justify-center size-full-height container">
        <div class="todos">
            <p For={$todo in todos} class={"todo" + ($todo.complete ? " complete" : "")} @click={completeTodo($todo)}>{$todo.value}</p>
        </div>

        <input type="text" placeholder="Your todo" @bind={value} @keydown={createTodo($event)} />
    </div>
</script>

<script>
Moon({
    root: "#root",
    view: document.getElementById("template").innerHTML,

    value: "",
    todos: [],

    createTodo: function($event) {
        if ($event.keyCode === 13) {
            this.todos.push({
                value: this.value,
                complete: false
            });

            this.value = "";

            this.update();
        }
    },

    completeTodo: function(todo) {
        todo.complete = !todo.complete;
        this.update();
    }
});
</script>
```

# choo

- https://github.com/choojs/choo
- https://choo.io/


```js
var html = require('choo/html')
var devtools = require('choo-devtools')
var choo = require('choo')

var app = choo()
app.use(devtools())
app.use(countStore)
app.route('/', mainView)
app.mount('body')

function mainView (state, emit) {
  return html`
    <body>
      <h1>count is ${state.count}</h1>
      <button onclick=${onclick}>Increment</button>
    </body>
  `

  function onclick () {
    emit('increment', 1)
  }
}

function countStore (state, emitter) {
  state.count = 0
  emitter.on('increment', function (count) {
    state.count += count
    emitter.emit('render')
  })
}
```

# jsblocks

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




# ractive

- https://github.com/ractivejs/ractive

