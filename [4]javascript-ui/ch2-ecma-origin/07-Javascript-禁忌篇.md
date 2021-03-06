# 你学的JS可能是假的

- 秘密花园 <http://bonsaiden.github.io/JavaScript-Garden/zh/#core.undefined>

# 黑魔法

- DWR

```javascript
一个RPC类库，
可以很容易的用Javascript调用Java方法，
也可以用Java调用Javascript方法（也称为Reverse Ajax）
```

- 这些JavaScript编程黑科技，装逼指南，高逼格代码，让你惊叹不已 <https://juejin.im/entry/5998f8396fb9a0247c6ec9cd>
- 44 道 JavaScript 难题 https://juejin.im/post/5b1f899fe51d4506c60e46ee

# 目睹之怪现象

- JavaScript 奇怪事件簿 <https://juejin.im/post/5a91615f6fb9a0634d27c770>

# 奇技淫巧

- 别再拿奇技淫巧搬砖了 <https://juejin.im/post/5a0b29756fb9a045167cb643>

# 高级技巧

- <https://juejin.im/post/59ab7b36f265da24934b2470>
- 由于它天生的动态属性，这种语言还能使用更为复杂和有趣的模式。这些技巧要利用 ECMAScript 的语言特点、BOM扩展和 DOM 功能来获得强大的效果。
- 使用 高级函数

  - 安全的类型检测
  - 作用域安全的构造函数
  - 惰性载入函数

    - 任何代码分支推迟到第一次调用函数的时候

  - 函数绑定

    - 始终在指定环境中运行
    - 创建一个函数，可以在特定的 this 环境中以指定参数调用另一个函数

  - 函数柯里化

    - 创建已经填了某些参数的函数

- 防篡改对象

  - 一旦把对象定义为防篡改，就无法撤销了
  - 不可扩展对象

    - 不允许给对象添加新的属性或方法
    - Object.preventExtensions(person);
    - console.log(Object.isExtensible(person)); //true

  - 密封的对象 seal

    - 不允许删除已有的属性和方法

  - 冻结的对象 freeze

    - 不允许重写对象的成员

- Yielding Timers 高级定时器

  - 给队列添加代码并不意味着对它立刻执行，而只能表示它会尽快执行
  - 指定的时间间隔表示何时将定时器的代码添加到队列，而不是何时实际执行代码
  - 重复计时器

- 函数节流

  - 计时器
  - resize
  - DOM 操作比起非 DOM 交互需要更多的内存和 CPU 时间

- 自定义事件

  - 观察者模式
  - 寄生组合继承 P618

- 拖放 DragAndDropExample04.htm示例

```javascript
// 判断数组

function isArray(value) {
    return Object.prototype.toString.call(value) == "[object Array]";
}

// 确认 this 对象是正确类型的实例

function Person(name, age, job) {
    if (this instanceof Person) {
        this.name = name;
        this.age = age;
        this.job = job;
    } else {
        return new Person(name, age, job);
    }
}
var person1 = Person("Nicholas", 29, "Software Engineer");
console.log(window.name); //""
console.log(person1.name); //"Nicholas"
var person2 = new Person("Shelby", 34, "Ergonomist");
console.log(person2.name); //"Shelby"

// 使用惰性载入重写createXHR()

function createXHR() {
    if (typeof XMLHttpRequest != "undefined") {
        createXHR = function () {
            return new XMLHttpRequest();
        };
    } else if (typeof ActiveXObject != "undefined") {
        createXHR = function () {
            if (typeof arguments.callee.activeXString != "string") {
                var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                    "MSXML2.XMLHttp"],
                    i, len;
                for (i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (ex) {
                        //skip
                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        };
    } else {
        createXHR = function () {
            throw new Error("No XHR object available.");
        };
    }
    return createXHR();
}

// 函数绑定演示
var handler = {
    message: "Event handled",
    handleClick: function (event) {
        console.log(this.message + ":" + event.type);
    }
};
var btn = document.getElementById("my-btn");
EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler));
// EventUtil.addHandler(btn, "click", handler.handleClick.bind(handler));

// 创建柯里化函数的通用示例

function curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs);
    };
}

// bind实现柯里化
var handler = {
    message: "Event handled",
    handleClick: function (name, event) {
        console.log(this.message + ":" + name + ":" + event.type);
    }
};
var btn = document.getElementById("my-btn");
EventUtil.addHandler(btn, "click", handler.handleClick.bind(handler, "my-btn"));

// 冻结对象演示
var person = {
    name: "Nicholas"
};
console.log(Object.isExtensible(person)); //true
console.log(Object.isSealed(person)); //false
console.log(Object.isFrozen(person)); //false
Object.freeze(person);
console.log(Object.isExtensible(person)); //false
console.log(Object.isSealed(person)); //true
console.log(Object.isFrozen(person)); //true

// 计时器
var btn = document.getElementById("my-btn");
btn.onclick = function () {
    setTimeout(function () {
        document.getElementById("message").style.visibility = "visible";
    }, 250);
    //其他代码
};

// div右移
setTimeout(function () {
    var div = document.getElementById("myDiv");
    var left = parseInt(div.style.left) + 5;
    div.style.left = left + "px";
    if (left < 200) {
        setTimeout(arguments.callee, 50);
    }
}, 50);

// 数组分块模式
setTimeout(function () {
    // 取出下一个条目并处理
    var item = array.shift();
    process(item);

    //若还有条目，再设置另一个定时器
    if (array.length > 0) {
        setTimeout(arguments.callee, 100);
    }
}, 100);

// 升级

function chunk(array, process, context) {
    setTimeout(function () {
        var item = array.shift();
        process.call(context, item);
        if (array.length > 0) {
            setTimeout(arguments.callee, 100);
        }
    }, 100);
}

var data = [12, 123, 1234, 453, 436, 23, 23, 5, 4123, 45, 346, 5634, 2234, 345, 342];

function printValue(item) {
    var div = document.getElementById("myDiv");
    div.innerHTML += item + "<br>";
}

chunk(data, printValue);
chunk(data.concat(), printValue); // 保持原数组不变

// 如果前一个定时器没有执行
// 后一个定时器
var processor = {
    timeoutId: null,

    //实际进行处理的方法
    performProcessing: function () {
        //实际执行的代码
    },

    //初始处理调用的方法
    process: function () {
        clearTimeout(this.timeoutId);
        var that = this;
        this.timeoutId = setTimeout(function () {
            that.performProcessing();
        }, 100);
    }
};

//尝试开始执行
processor.process();

// 自动进行定时器的设置和清除

function throttle(method, context) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function () {
        method.call(context);
    }, 100);
}
```

# 骚操作

- clarifyjs <https://github.com/omidh28/clarifyjs>

> Create and Execute Chained Javascript Methods In Any Order You want

# JavaScript专家编程

- 2015-08

# 术语与俚语

- 术语
- 强转
- 逻辑运算符
- 位运算

# JavaScript的IRL

- 物理计算
- NodeBots
- Fauxbots

# 返璞归真

- 盘点前端群的无脑回答 https://juejin.im/post/5aed16a76fb9a07ace58c075