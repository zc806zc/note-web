#### **ch24 最佳实践**

* **可维护** 的代码
  * 可理解性
  * 直观性——代码中的东西一看就能明白，不管其操作过程多么复杂。
  * 可适应性——代码以一种数据上的变化不要求完全重写的方法撰写。
  * 可扩展性——在代码架构上已考虑到在未来允许对核心功能进行扩展。
  * 可调试性
* 保证代码 **性能**
* 部署代码
  * 尽可能使用最少的 JavaScript 文件
  * **ant**
  * 验证 JSLint
  * 压缩
    * 文件压缩
    * http压缩
      * gzip  httpd.conf  .htaccess文件
      * mod\_gzip\_item\_include file .js$
* 代码约定
  * 匈牙利标记法 已失宠
* 松散耦合
  * HTML/JavaScript 耦合 例onlick
  * 解耦 CSS/JavaScript 
    * 避免使用表达式
  * 解耦应用逻辑／事件处理程序
    * 将应用逻辑从事件处理程序中分离的 
  * 几条原则
    * 勿将 event 对象传给其他方法；只传来自 event 对象中所需的数据；
    * 任何可以在应用层面的动作都应该可以在不执行任何事件处理程序的情况下进行；
    * 任何事件处理程序都应该处理事件，然后将处理转交给应用逻辑。
* 编程实践
  * 尊重对象所有权
    * 不能修改不属于你的对象
  * 避免全局变量和函数
  * 避免与 null 进行比较
  * 使用常量
* 性能
  * 注意作用域
  * 优化循环
    * 减值迭代
    * 简化终止条件
    * 简化循环体 循环体是执行最多的，所以要确保其被最大限度地优化。确保没有某些可以被很容易移出循环的密集计算。
    * 使用后测试循环
  * 展开循环
    * Duff 装置技术
    * 如果处理的不是大数据集，一般来说并不值得
  * 避免双重解释
    * 当使用 eval\(\) 函数或者是Function 构造函数以及使用 setTimeout\(\) 传一个字符串参数时都会发生这种情况
  * 较快
    * 原生方法较快 例Math的求正弦比JS写一个好
      * 原生方法是用诸如 C/C++之类的编译型语言写出来的
    * Switch 语句较快
    * 位运算符较快
      * 取模，逻辑与和逻辑或
        * 最小化语言数
        * 一个var语句要比单个变量分别声明快很多
    * 插入迭代值 var name = values\[i++\];
    * 使用数组和对象字面量
  * 优化DOM操作
    * 最小化现场更新
    * 使用innerHTML 使用 inner HTML 要比使用标准 DOM 方法创建同样的 DOM 结构快得多
    * 使用 **事件代理**
    * 注意 **HTMLCollection**
      * 保存变量，避免多次循环

```js
//用于指定数据类型的匈牙利标记法
var bFound; //布尔型
var iCount; //整数
var sName; //字符串
var oPerson; //对象

//CSS 对 JavaScript 的松散耦合
element.className = "edit";

/* JavaScript 对 CSS 的紧密耦合 */
div {
width: expression(document.body.offsetWidth - 10 + "px");
}

// 创建命名空间来组合功能
//创建全局对象
var Wrox = {};

//为 Professional JavaScript 创建命名空间
Wrox.ProJS = {};

//将书中用到的对象附加上去
Wrox.ProJS.EventUtil = { ... };
Wrox.ProJS.CookieUtil = { ... };

// 逻辑与数据隔离
var Constants = {
INVALID_VALUE_MSG: "Invalid value!",
INVALID_VALUE_URL: "/errors/invalid.php"
};
function validate(value){
if (!value){
alert(Constants.INVALID_VALUE_MSG);
location.href = Constants.INVALID_VALUE_URL;
}
}

// 避免全局查找
function updateUI(){
var doc = document;
var imgs = doc.getElementsByTagName("img");
for (var i=0, len=imgs.length; i < len; i++){
imgs[i].title = doc.title + " image " + i;
}
var msg = doc.getElementById("msg");
msg.innerHTML = "Update complete.";
}

var url = window.location.href;
var query = url.substring(url.indexOf("?"));

// 优化循环
for (var i=0; i < values.length; i++){
    process(values[i]);
}

for (var i=values.length -1; i >= 0; i--){
    process(values[i]);
}

var i=values.length -1;
if (i > -1){
  do {
      process(values[i]);
  }while(--i >= 0);
}

// 更快的 Duff 装置技术
//credit: Speed Up Your Site (New Riders, 2003)
var iterations = Math.floor(values.length / 8);
var leftover = values.length % 8;
var i = 0;
if (leftover > 0){
do {
process(values[i++]);
} while (--leftover > 0);
}
do {
process(values[i++]);
process(values[i++]);
process(values[i++]);
process(values[i++]);
process(values[i++]);
process(values[i++]);
process(values[i++]);
process(values[i++]);
} while (--iterations > 0);

// 正确使用innerHTML操作DOM
var list = document.getElementById("myList"),
html = "",
i;
for (i=0; i < 10; i++) {
html += "<li>Item " + i + "</li>";
}
list.innerHTML = html;
```



