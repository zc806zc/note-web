####  **JS数据结构**
* 工具
	+ [JS shell](http://mzl.la/MKOuFY)，使用示例如下
		+ js loop.js
		+ print(2+3); 
		+ print(z.toFixed(2));
		+ putstr("Enter a name to search for: "); 
* 常识
	+ <del>JS中，函数的参数传递方式都是 **按值传递**，没有按引用传递的参数。</del> 但是 JavaScript中有 **保存引用的对象**，比如数组,它们是按引用传递的
	+ <del>虽然 JavaScript 没有实现块级作用域，但例编写 for 循环语句时，我们假设它有。呵呵哒</del>

```
// 递归演示过程
5 * factorial(4)
5 * 4 * factorial(3)
5 * 4 * 3 * factorial(2)
5 * 4 * 3 * 2 * factorial(1)
5 * 4 * 3 * 2 * 1
5 * 4 * 3 * 2
5 * 4 * 6
5 * 24
120
```

#### **数组有关基础**
+ 有的算法需要的递归深度,超出了 JavaScript的处理能力，这时我们就需要寻求该算法的一种迭代式解决方案了。**任何可以被递归定义的函数，都可以被改写为迭代式的程序**
+ <del>有关的大神 ：John Resig、Douglas Crockford</del>
+ JavaScript 中的数组是一种特殊的 **对象**，用来表示偏移量的索引是该对象的属性，索引可能是整数。然而，这些数字索引在内部被转换为字符串类型，这是因为 JavaScript 对象中的属性名必须是字符串。数组在 JavaScript 中只是一种特殊的对象，所以 **效率**上不如其他语言中的数组高。但是JavaScript 中的数组非常灵活，且在脚本语言里很常见的一个特性是，数组中的元素不必是同一种数据类型
+ 推荐使用[]操作符, 因为它的效率更高
```
// 数组方法简单演示
var objects = [1, "Joe", true, null];
print(Array.isArray(arr)); // 显示 true

// 使用split生成数组
var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for (var i = 0; i < words.length; ++i) {
print("word " + i + ": " + words[i]);
}

// 对数组的整体性操作
var nums = [];
for (var i = 0; i < 10; ++i) {
nums[i] = i+1;
}
var samenums = nums; // 浅复制
function copy(arr1, arr2) {
for (var i = 0; i < arr1.length; ++i) {
arr2[i] = arr1[i];
}
} // 深度复制

// 直接输出函数的所有
var nums = [1,2,3,4,5];
print(nums);
```

#### **链表**
+ 不需要查找或元素不是很多的时候可以用
+ 使用 **迭代器**的优点
	+ 访问列表元素时不必关心底层的数据存储结构。
	+ 当为列表添加一个元素时，索引的值就不对了，此时只用更新列表，而不用更新迭代器。
	+ 可以用不同类型的数据存储方式实现cList类，迭代器为访问列表里的元素提供了一种统一的方式
+ 迭代器只是用来在列表上随意移动，而不应该和任何为列表增删元素的方法一起使用
+ 一个基于列表的应用：使用列表管理影碟租赁
```
// 列表的抽象数据类型定义
listSize （属性） 列表的元素个数
pos （属性） 列表的当前位置
length （属性） 返回列表中元素的个数
clear （方法） 清空列表中的所有元素
toString （方法） 返回列表的字符串形式
getElement （方法） 返回当前位置的元素
insert （方法） 在现有元素后插入新元素
append （方法） 在列表的末尾添加新元素
remove （方法） 从列表中删除元素
front （方法） 将列表的当前位置设移动到第一个元素
end （方法） 将列表的当前位置移动到最后一个元素
prev （方法） 将当前位置后移一位
next （方法） 将当前位置前移一位
currPos （方法） 返回列表的当前位置
moveTo （方法） 将当前位置移动到指定位置

for(names.front(); names.currPos() < names.length(); names.next()) {
	print(names.getElement());
}

for(names.end(); names.currPos() >= 0; names.prev()) {
	print(names.getElement());
}
```

#### **栈**
+ 类似洗的 **一摞盘子**, 后入先出
+ <del>[JavaScript递归工作原理的网页](http://bit.ly/lenDGE3/)</del> 链接出错
~~~
// push
// 向栈中压入一个新元素时，需要将其保存在数组中变量 top 所对
应的位置，然后将 top 值加 1，让其指向数组中下一个空位置
function push(element) {
this.dataStore[this.top++] = element;
}

// pop
function pop() {
return this.dataStore[--this.top];
}
~~~

#### **队列**
+ 类似 **银行排队**,先进先出