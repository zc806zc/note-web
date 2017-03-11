#### **jQuery基础2**

* [高效的jQuery代码编写技巧总结](http://gcdn.gcpowertools.com.cn/showtopic-28514-1-3.html?utm_source=gold.xitu.io&utm_medium=referral&utm_campaign=20170222)



```
// 使用匈牙利命名法

在变量前加$前缀，便于识别出jQuery对象

var $first = $\('\#first'\);  
var $second = $\('\#second'\),  
var value = $first.val\(\);

// 使用on  
$first.click\(function\(\){  
}\);  
$first.hover\(function\(\){  
}\)

// 建议  
$first.on\('click',function\(\){  
}\)

$first.on\('hover',function\(\){  
}\)

// 选择短路求值  
// 糟糕  
function initVar\($myVar\) {  
    if\(!$myVar\) {  
        $myVar = $\('\#selector'\);  
    }  
}

// 建议  
function initVar\($myVar\) {  
    $myVar = $myVar \|\| $\('\#selector'\);  
}

// 选择捷径  
if\(collection.length &gt; 0\){..}  
// 建议  
if\(collection.length\){..}

// 繁重的操作中分离元素  
// 糟糕  
var  
    $container = $\("\#container"\),  
    $containerLi = $\("\#container li"\),  
    $element = null;  
$element = $containerLi.first\(\);  
//... 许多复杂的操作

// better  
var  
    $container = $\("\#container"\),  
    $containerLi = $container.find\("li"\),  
    $element = null;  
$element = $containerLi.first\(\).detach\(\);  
//... 许多复杂的操作  
$container.append\($element\);

// 使用子查询缓存的父元素 find

// 避免通用选择符  
$\('.container &gt; \*'\);  
// 建议  
$\('.container'\).children\(\);

// 坚持最新版本

```




