# JS算法基础

- 资源

  - 常用排序算法 <https://wowphp.com/post/komxdx8qe862.html>
  - 十大经典排序 <https://gold.xitu.io/post/57dcd394a22b9d00610c5ec8>
  - 算法知识 <https://juejin.im/entry/59a6b57c6fb9a02491751189>

- 小技巧

  - <https://juejin.im/entry/59a78855518825244a436e08>

```javascript
// 打乱数组的顺序
arr.sort(function(){return Math.random()-0.5});

function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};

// 获取数组最值
function maxAndMin(arr){
    return {
       max:Math.max.apply(null,arr.join(',').split(',')),
       min:Math.min.apply(null,arr.join(',').split(','))
    }
}

// 去除首尾空格
function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
```

- 基础

```javascript
// 方法
map // 不会改变原始数组
reduce // 一个可选的第二参数
filter // 过滤出符合的元素。

var array = [1,2,3,4,5];
var newArray = array.map(function(val){
    return val += 3;
});

var singleVal = array.reduce(function(previousVal, currentVal) {
return previousVal + currentVal;
}, 0);

array = array.filter(function(val) {
    return val !== 5;
});

array.sort(function(a, b) {
    return a - b;
});

var veggies = ["Celery", "Radish", "Carrot", "Potato"];
console.log(veggies.join(" and "));
// "Celery and Radish and Carrot and Potato"

// 移除标点符号和空格
tmpStr = str.replace(/[\W_]/g,"").toLowerCase();
```

# JavaScript算法基础

- 数组

  - 尾调用优化 <https://github.com/andy2046/blog/issues/7>

```javascript
map | filter
Array.isArray | constructor
some | every

return arr.constructor.toString().indexOf("Array") >= 0;
```

- 加密

```html
md5加密
<script src="jquery.js"></script>
<script src="jquery.md5.js"></script>

console.log($.md5("Hello"));


// 放射加解密可以尝试以下字符
FMXVEDKAPHFERBNDKRXRSREFMORUDSDKDVSHVUFEDKAPRKDLYEVLRHHRH
algorithmsarequitegeneraldefinitionsofarithmeticprocesses
```

- 正则表达式

  - [sublime jshint使用](http://www.wiibil.com/website/sublimelinter-jshint-csslint.html)
  - [regex全符号](http://www.cnblogs.com/yirlin/archive/2006/04/12/373222.html)

```javascript
// 正则表达式就是常人眼里的鬼画符
引入这块知识是为了方便运算

封到了clown.js里
console.log("张三： " + checkChineseName("张三"));    // true
console.log("李四： " + checkChineseName("李四"));    // true
console.log("张3： " + checkChineseName("张3"));      // false
console.log("lisi： " + checkChineseName("lisi"));    // false
console.log("王7王： " + checkChineseName("王7王"));    // false
```

- JS实现链表

- 数据结构 <https://juejin.im/post/594dfe795188250d725a220a>

- 排序算法 <https://juejin.im/post/57dcd394a22b9d00610c5ec8>

  - 快排
  - 冒泡
  - 二分查找

![排序-复杂度分析](https://user-gold-cdn.xitu.io/2016/11/29/4abde1748817d7f35f2bf8b6a058aa40)

# 参考

```javascript
JS数据结构与算法
freecodecamp
```
