# 浏览器兼容

- 兼容解决方案 <https://juejin.im/post/59a3f2fe6fb9a0249471cbb4?utm_source=gold_browser_extension>

  - Normalize.css
  - 求窗口大小的兼容写法
  - DOM 事件处理程序的兼容写法（能力检测）

- shim / sham / polyfill区别

> shim也无法被完美模拟的方法，就由 sham尽量去模拟。sham只承诺你用的时候代码不会崩溃, 一个 polyfill就是一个用在浏览器API上的特殊shim

- 几个典型的补丁

  - es5-shim

    - Array.prototype.filter
    - Function.prototype.bind
    - Number.prototype.toPrecision

  - es5-sham

    - Object.create

  - es6-shim

    - String.prototype.startsWith
    - Array.from
    - Array.prototype.find

  - es6-sham

    - Function.prototype.name

  - json3

    - JSON.stringify
    - JSON.parse

  - history.js

    - History.pushState
    - History.replaceState

```javascript
// 兼容ie hack代码
可以在根元素上
<! --[if IE7]> <html class="ie7"><! [endif]-->


// 浮动
.fl { float: left; }
.fr { float: right; }
.clearfix:after { display: block; clear: both; content: ""; visibility: hidden; height: 0; }
.clearfix { zoom: 1; }


var eventshiv = {
    // event兼容
    getEvent: function(event) {
        return event ? event : window.event;
    },

    // type兼容
    getType: function(event) {
        return event.type;
    },

    // target兼容
    getTarget: function(event) {
        return event.target ? event.target : event.srcelem;
    },

    // 添加事件句柄
    addHandler: function(elem, type, listener) {
        if (elem.addEventListener) {
            elem.addEventListener(type, listener, false);
        } else if (elem.attachEvent) {
            elem.attachEvent('on' + type, listener);
        } else {
            // 在这里由于.与'on'字符串不能链接，只能用 []
            elem['on' + type] = listener;
        }
    },

    // 移除事件句柄
    removeHandler: function(elem, type, listener) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, listener, false);
        } else if (elem.detachEvent) {
            elem.detachEvent('on' + type, listener);
        } else {
            elem['on' + type] = null;
        }
    },

    // 添加事件代理
    addAgent: function (elem, type, agent, listener) {
        elem.addEventListener(type, function (e) {
            if (e.target.matches(agent)) {
                listener.call(e.target, e); // this 指向 e.target
            }
        });
    },

    // 取消默认行为
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    // 阻止事件冒泡
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};
```

# 组件BUG

- 下拉菜单 连续触发BUG <https://www.youyong.top/article/11592663d6394>

```javascript
$("td").hover(
    function () {
        $(this).filter(':not(:animated)').slideDown(200);
    },
    function () {
        $(this).slideUp(200);
    }
);

$("#menu").hover(    
        function () {    
            $("#menu").stop(true).animate({ height: "500" }, 5000).animate({ width: "500px" }, 5000);    
        },    
        function () {    
            $("#menu").stop(true).animate({ height: "100" }, 5000).animate({ width: "100px" },5000);    
        }    
);
```
