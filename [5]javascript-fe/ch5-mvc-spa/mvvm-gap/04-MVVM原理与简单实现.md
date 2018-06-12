# MVVM

- 不好意思！耽误你的十分钟，让MVVM原理还给你 <https://juejin.im/post/5abdd6f6f265da23793c4458>
- 你能写一个Vue的双向数据绑定吗 <https://juejin.im/post/5acc17cb51882555745a03f8>
- 实现双向绑定Proxy比defineproperty优劣如何 https://juejin.im/post/5acd0c8a6fb9a028da7cdfaf
- 利用 JavaScript 数据绑定实现一个简单的 MVVM 库 https://segmentfault.com/a/1190000004847657

```html
<!DOCTYPE html>
<head>
  <title>myVue</title>
</head>
<style>
  #app {
    text-align: center;
  }
</style>
<body>
  <div id="app">
    <form>
      <input type="text"  v-model="number">
      <button type="button" v-click="increment">增加</button>
    </form>
    <h3 v-bind="number"></h3>
    <form>
      <input type="text"  v-model="count">
      <button type="button" v-click="incre">增加</button>
    </form>
    <h3 v-bind="count"></h3>
  </div>
</body>

<script>
  function myVue(options) {
    this._init(options);
  }

  myVue.prototype._init = function (options) {
    this.$options = options;
    this.$el = document.querySelector(options.el);
    this.$data = options.data;
    this.$methods = options.methods;

    this._binding = {};
    this._obverse(this.$data);
    this._complie(this.$el);
  }

  myVue.prototype._obverse = function (obj) {
    var _this = this;
    Object.keys(obj).forEach(function (key) {
      if (obj.hasOwnProperty(key)) {
        _this._binding[key] = {                                                                                                                                                          
          _directives: []
        };
        console.log(_this._binding[key])
        var value = obj[key];
        if (typeof value === 'object') {
          _this._obverse(value);
        }
        var binding = _this._binding[key];
        Object.defineProperty(_this.$data, key, {
          enumerable: true,
          configurable: true,
          get: function () {
            console.log(`${key}获取${value}`);
            return value;
          },
          set: function (newVal) {
            console.log(`${key}更新${newVal}`);
            if (value !== newVal) {
              value = newVal;
              binding._directives.forEach(function (item) {
                item.update();
              })
            }
          }
        })
      }
    })
  }

  myVue.prototype._complie = function (root) {
    var _this = this;
    var nodes = root.children;
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.children.length) {
        this._complie(node);
      }

      if (node.hasAttribute('v-click')) {
        node.onclick = (function () {
          var attrVal = nodes[i].getAttribute('v-click');
          return _this.$methods[attrVal].bind(_this.$data);
        })();
      }

      if (node.hasAttribute('v-model') && (node.tagName = 'INPUT' || node.tagName == 'TEXTAREA')) {
        node.addEventListener('input', (function(key) {
          var attrVal = node.getAttribute('v-model');
          _this._binding[attrVal]._directives.push(new Watcher(
            'input',
            node,
            _this,
            attrVal,
            'value'
          ))

          return function() {
            _this.$data[attrVal] =  nodes[key].value;
          }
        })(i));
      }

      if (node.hasAttribute('v-bind')) {
        var attrVal = node.getAttribute('v-bind');
        _this._binding[attrVal]._directives.push(new Watcher(
          'text',
          node,
          _this,
          attrVal,
          'innerHTML'
        ))
      }
    }
  }

  function Watcher(name, el, vm, exp, attr) {
    this.name = name;         //指令名称，例如文本节点，该值设为"text"
    this.el = el;             //指令对应的DOM元素
    this.vm = vm;             //指令所属myVue实例
    this.exp = exp;           //指令对应的值，本例如"number"
    this.attr = attr;         //绑定的属性值，本例为"innerHTML"

    this.update();
  }

  Watcher.prototype.update = function () {
    this.el[this.attr] = this.vm.$data[this.exp];
  }

  window.onload = function() {
    var app = new myVue({
      el:'#app',
      data: {
        number: 0,
        count: 0,
      },
      methods: {
        increment: function() {
          this.number ++;
        },
        incre: function() {
          this.count ++;
        }
      }
    })
  }
</script>
```

# 数据绑定

- 原生JS数据绑定 [https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==∣=2651227803&idx=1&sn=aa90993cf4711f99f6f8203cf2fb4e6b&chksm=bd495f1f8a3ed60972c9f8e66c8405265ec3b86c128ba44ede405872d758642d0c5286e60502&mpshare=1&scene=1&srcid=0224bSSD795JDR60ZynlFPfr#rd](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651227803&idx=1&sn=aa90993cf4711f99f6f8203cf2fb4e6b&chksm=bd495f1f8a3ed60972c9f8e66c8405265ec3b86c128ba44ede405872d758642d0c5286e60502&mpshare=1&scene=1&srcid=0224bSSD795JDR60ZynlFPfr#rd)

- way.js <https://github.com/gwendall/way.js>

  - 轻量的双向绑定

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

# JQuery实现类Vue的双向绑定

- <http://www.jq22.com/webqd2649>

```javascript
;(function($) {
    BindSysnc.pt = BindSysnc.prototype;
    BindSysnc.pt.init = function(selector) {
        var $allBinds = $(selector).find("[data-bind]");
        var $container = $("<div class='data-bind-contanier'></div>");
        var data = {};
        var share = new ShareSync(selector);
        for(var bindIndex = 0; bindIndex < $allBinds.length; bindIndex++) {
            var oldElement = $($allBinds[bindIndex]);
            var bindElement = oldElement.clone(true);
            var convertElement = $container.clone(true);
            convertElement.css("display", oldElement.css("display"));
            convertElement.append(bindElement);

            var dsi = $("<div data-bind-value></div>");
            bindElement.attr("data-share-excute", "false");
            bindElement.on("propertychange input focus blur DOMNodeInserted", function(e) {
                if($(e.target).attr("data-share") !== undefined) {
                    $(e.target).unbind("propertychange");
                }
                var value = $(e.target).attr("data-bind") === "value" ? $(e.target).val() : $(e.target).html();
                data[$(e.target).attr("vname")] = value;
                $(e.target).parent().children("[data-bind-value]").html(value);
                share.share(data);
            });
            convertElement.insertAfter(oldElement);
            oldElement.remove();
        }
        this.data = data;
        this.isAutoShare = false;
        var that = this;
        var timer = new TimerSimulator(function(count){
            share.share(that.data);
        },500,"test");

        this.startAutoShare = function(){
            timer.start();
        }
        this.stopAutoShare = function(){
            timer.stop();
        }

        if(this.isAutoShare){
            this.startAutoShare();
        }
    };
    BindSysnc.pt.init.prototype = BindSysnc.pt;
    /**
     * 绑定事件
     * @param {Object} selector
     */
    function BindSysnc(selector) {
        return new BindSysnc.pt.init(selector);
    }
    window.BindSysnc = BindSysnc;
    window.$B = BindSysnc;

    function ShareSync(selector) {
        this.share = function(data) {
            var $allShares = $(selector).find("[data-share]");
            for(var shareIndex = 0; shareIndex < $allShares.length; shareIndex++) {
                var oldElement = $($allShares[shareIndex]);
                var keyName = oldElement.attr("vname");
                if(oldElement.attr("data-share") === "value") {
                    oldElement.val(data[keyName])
                } else {
                    oldElement.html(data[keyName]);
                }
            }
        }
    }

    /**
     * 定时模拟器
     *
     * @version 2017-03-01
     *
     * @returns
     */
    function TimerSimulator(task, times, name) {
        /** 类名 */
        this.imClassName = "TimerSimulator";
        /**
         * 计数器
         */
        this.counter = 0;
        /**
         * taskId
         */
        this.taskId = null;
        /**
         * 时间
         */
        this.times = times;
        /**
         * 任务
         */
        this.task = task;
        /**定时器名称*/
        this.name = name;
        /**
         * 启动定时任务（模拟）
         */
        this.start = function start() {
            var that = this; // 保存当前对象this
            that.counter++;
            that.taskId = setTimeout(function() {
                that.start();
            }, that.times);
            if(that.task != null && typeof that.task === "function") {
                that.task(that.counter);
            }
        };
        /**
         * 终止定时任务（模拟）
         */
        this.stop = function() {
            if(this.taskId != null && this.taskId != undefined) {
                this.counter = 0;
                clearTimeout(this.taskId);
            }
        };
        /**
         * 暂停定时任务（模拟）
         */
        this.suspend = function() {
            if(this.taskId != null && this.taskId != undefined) {
                clearTimeout(this.taskId);
            }
        };
    };

}(jQuery));

//=====================================
$(function() {
    var b = $B("body");
    b.data.sex = 111;
        b.startAutoShare();
    setTimeout(function(){
           b.data.sex = 123124124;
        },22000);
})
//=====================================
```

# 一些小型的MVVM框架(参考学习)

- yox.js https://github.com/yoxjs/yox