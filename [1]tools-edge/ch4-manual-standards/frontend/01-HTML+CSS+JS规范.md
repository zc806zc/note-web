# README

- 分享个人习惯的命名方式 https://juejin.im/post/5b6ad6b0e51d4519171766e2

# Airbnb JavaScript Style Guide

- 拷贝数组时，使用 Array#slice

```javascript
var len = items.length;
var itemsCopy = [];
var i;

// bad
for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
itemsCopy = items.slice();
```

- 超过 100 个字符的字符串应该使用连接符写成多行

- 程序化生成的字符串使用 Array#join 连接而不是使用连接符。尤其是 IE 下

```javascript
var items;
var messages;
var length;
var i;

messages = [{
  state: 'success',
  message: 'This one worked.'
}, {
  state: 'success',
  message: 'This one worked as well.'
}, {
  state: 'error',
  message: 'This one did not work.'
}];

length = messages.length;

// bad
function inbox(messages) {
  items = '<ul>';

  for (i = 0; i < length; i++) {
    items += '<li>' + messages[i].message + '</li>';
  }

  return items + '</ul>';
}

// good
function inbox(messages) {
  items = [];

  for (i = 0; i < length; i++) {
    // use direct assignment in this case because we're micro-optimizing.
    items[i] = '<li>' + messages[i].message + '</li>';
  }

  return '<ul>' + items.join('') + '</ul>';
}
```

- 使用快捷方式

```javascript
// bad
if (collection.length > 0) {
  // ...stuff...
}

// good
if (collection.length) {
  // ...stuff...
}
```

- 注释

```javascript
// bad
var active = true;  // is current tab

// good
// is current tab
var active = true;

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  var type = this.type || 'no type';

  return type;
}

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  var type = this.type || 'no type';

  return type;
}
```

- 标注

  - 使用 // FIXME: 标注问题
  - 使用 // TODO: 标注问题的解决方式

```javascript
function Calculator() {

  // FIXME: shouldn't use a global here
  total = 0;

  return this;
}

function Calculator() {

  // TODO: total should be configurable by an options param
  this.total = 0;

  return this;
}
```

- 类型转换

```javascript
//  => this.reviewScore = 9;

// bad
var totalScore = this.reviewScore + '';

// good
var totalScore = '' + this.reviewScore;

// bad
var totalScore = '' + this.reviewScore + ' total score';

// good
var totalScore = this.reviewScore + ' total score';
```

- 使用 parseInt 转换数字时总是带上类型转换的基数

```javascript
var inputValue = '4';

// bad
var val = new Number(inputValue);

// bad
var val = +inputValue;

// bad
var val = inputValue >> 0;

// bad
var val = parseInt(inputValue);

// good
var val = Number(inputValue);

// good
/**
 * parseInt was the reason my code was slow.
 * Bitshifting the String to coerce it to a
 * Number made it a lot faster.
 */
var val = inputValue >> 0;

// good
var val = parseInt(inputValue, 10);



var age = 0;

// bad
var hasAge = new Boolean(age);

// good
var hasAge = Boolean(age);

// good
var hasAge = !!age;
```

- 不要保存this的引用,使用 Function#bind

```javascript
// bad
function () {
  // var self = this;
  // var that = this;
  var _this = this;
  return function () {
    console.log(_this);
  };
}

// good
function () {
  return function () {
    console.log(this);
  }.bind(this);
}
```

- 给函数命名。这在做堆栈轨迹时很有帮助。

```javascript
// bad
var log = function (msg) {
  console.log(msg);
};

// good
var log = function log(msg) {
  console.log(msg);
};
```

- 构造函数

  - 给对象原型分配方法，而不是使用一个新对象覆盖原型。覆盖原型将导致继承出现问题：重设原型将覆盖原有原型！
  - 方法可以返回 this 来实现方法链式使用

```javascript
function Jedi() {
  console.log('new jedi');
}

// bad
Jedi.prototype = {
  fight: function fight() {
    console.log('fighting');
  },

  block: function block() {
    console.log('blocking');
  }
};

// good
Jedi.prototype.fight = function fight() {
  console.log('fighting');
};

Jedi.prototype.block = function block() {
  console.log('blocking');
};
```

- 事件

  - 当给事件附加数据时（无论是 DOM 事件还是私有事件），传入一个哈希而不是原始值

```javascript
// bad
$(this).trigger('listingUpdated', listing.id);

...

$(this).on('listingUpdated', function (e, listingId) {
  // do something with listingId
});

// bad
$(this).trigger('listingUpdated', listing.id);

...

$(this).on('listingUpdated', function (e, listingId) {
  // do something with listingId
});
```


# CSS编程建议

- 泽元软件CSS编程规范建议 http://www.zving.com/c/2013-10-17/257396.shtml
- 栏目布局容器命名: col-left、col-right
- 常用词汇

```
外层 wrapper | wrap
友情链接 friend-link
注释 note | tip
内容 content
当前 curr | current
侧栏：sidebar
子XX：sub-XX
信息：msg
指南：guide
热点：hot
注册：reg | register

li pic btn bg ...
```

- 除了 ml | pl | fr | clearfix这些常用，不推荐经常简写，一般人根本看不懂啊

# 小结

- HTML用2个空格,JS建议用4个
- 不要简单重申注释

```javascript
/*------------------------------------------------*/
/* GENERAL
/*------------------------------------------------*/

<!-- NAVBAR
========================================= -->
```

- 引入 CSS 和 JS不要指定 type 属性
- 不要使用 @import
- 开头统一声名全局变量
- 全局常量统一大写
- class="js-xxx" 作为JS调用的钩子
- JS的id用 下划线(或驼峰), 而HTML, CSS的class用中划线
- 用#fff代替#FFFFFF
- 用-.5px 代替 -0.5px
- 用margin: 0 代替 margin: 0px
- 字符串定义建议用单引号,这样内部的属性可以用双引号
- 文件名统一小写
- 在 rgb()、rgba()、hsl()、hsla() 或 rect() 值的内部，值之间不加空格
- 空行

  - 在文件结尾添加一个空白行,
  - 保存文件时，用插件删除尾部空白符

```javascript
// JQuery
var = $tocTitle = $('.reader-toc-title');
var $body = $(document.body); // 保存起来

// 构造器命名
function MyType() {
    var _myPrivateVariable; // 下划线
}
var myTypeInstance = new MyType();
// 公有接口大写字母开头，私有的小写

// 属性顺序
class
id, name
data-*
src, for, type, href
title, alt
aria-*, role

// CSS顺序 （用css comb插件实现)
Positioning
Box model
Typographic
Visual

// 输出换行
document.write("你好 \
世界!");
```
