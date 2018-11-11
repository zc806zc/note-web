/**
 * 正则表达式的match方法
 */
var str = "Alice Bob alice"; // 测试字符串
var regex = /li/gi;           // 全局 忽略大小写

var arr = str.match(regex);
console.log(arr); // [ 'li', 'li' ]

regex = /li/i;
arr = str.match(regex);
console.log(arr); // [ 'li', index: 1, input: 'Alice Bob alice' ]

regex = /Li/g;
arr = str.match(regex);
console.log(arr); // null

/**
 * replace方法
 */
regex = /li/gi;
str = str.replace(regex, "狸");
console.log(str);
