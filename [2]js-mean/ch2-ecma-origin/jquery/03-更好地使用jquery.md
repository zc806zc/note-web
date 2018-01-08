# JS简写法则

- 升级ecma
- 短路

```javascript
// bad
if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
     let variable2 = variable1;
}

// good
const variable2 = variable1 || 'new';

// bad
let dbHost;
if (process.env.DB_HOST) {
  dbHost = process.env.DB_HOST;
} else {
  dbHost = 'localhost';
}

// good
const dbHost = process.env.DB_HOST || 'localhost';
```

- 循环

```javascript
// ecma
// bad
for (let i = 0; i < allImgs.length; i++)

// good
for (let index in allImgs)

function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);
```

- 十进制指数

```javascript
// bad
for (let i = 0; i < 10000; i++) {}

// good
for (let i = 0; i < 1e7; i++) {}
```

# 更好地使用jquery

> DOM操作其实是非常消耗资源的一个过程，而往往很多人都喜欢错误地使用jQuery

- <http://www.jb51.net/article/47639.htm>
- 规范

  - 定义jQuery变量是添加$符号
  - 尽量使用.on方法
  - 尽量使用最新版本的jQuery
  - 尽量使用原生Javascript

```javascript
var $loading = $('#loading'); // 定义jquery变量

// bad
if(!$something) {
    $something = $('#something ');
}

// nice
$something= $something|| $('#something');

//  bad
if(string.length > 0){...}

//  good
if(string.length){...}
```

- 选择器

  - id选择器最快
  - 其次是tag选择器
  - 注意class选择器最慢!!!!
  - 继承法则: 总是从#id选择器来继承
  - 使用子查询, 缓存父对象
  - 优化选择器以适用Sizzle的“从右至左”模型, 确保最右的选择器具体些，而左边的选择器选择范围较宽泛些
  - 采用find()，而不使用上下文查找
  - 采用jQuery的内部函数data()来存储状态

```javascript
// very bad
$('#something #children');

// good
$('#children');

<div id="content" class="content">
  <p>...<p>
</div>

$('#content p').hide(); // nice
$('.content p').hide(); // bad

//  使用子查询
var header = $('#header');
var menu = header.find('.menu');
// 或者
var menu = $('.menu', header);


var linkContacts = $('.contact-links div.side-wrapper');
var linkContacts = $('a.contact-links .side-wrapper'); // better

// 使用find
var divs = $('.testdiv', '#pageBody'); // 2353 on Firebug 3.6
var divs = $('#pageBody').find('.testdiv'); // 2324 on Firebug 3.6 - The best time
var divs = $('#pageBody .testdiv'); // 2469 on Firebug 3.6
```

- 性能
  - 字符串拼接
  - 使用Event Delegation
  - 如果给15个以上的元素加样式时，直接给DOM元素添加style标签(维护?)

```js
//  ok
var menu = '<ul id="menu">';
for (var i = 1; i < 100; i++) {
  menu += '<li>' + i + '</li>';
}
menu += '</ul>';
$('#header').prepend(menu);

// goodbye~~
$('#header').prepend('<ul id="menu"></ul>');
for (var i = 1; i < 100; i++) {
  $('#menu').append('<li>' + i + '</li>');
}

// delegate  
$("table").delegate("td", "hover", function(){
  $(this).toggleClass("hover");
});

// 事件委托
$('#myList).on('click', function(e){
  var target = e.target,
      $target = $(target);
  if (target.nodeName === 'LI') {
    $target.addClass('clicked');  // do stuff
  }
});

// 如果给15个以上的元素加样式时，直接给DOM元素添加style标签
$('<style type="text/css"> div.class { color: red; } </style>')
.appendTo('head');
```
