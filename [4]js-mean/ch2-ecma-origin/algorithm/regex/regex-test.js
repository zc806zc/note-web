
/**
 * regex的test方法
 */

// 正确打开方式
var str = "Alice";
var regex = /li/gi;
// console.log(str.test(regex));  // 报错
console.log(regex.test(str));     // true

// 行首校验
regex = /^A/;
console.log(regex.test(str));     // true
regex = /^l/; //
console.log(regex.test(str));     // false
regex = /[^alice]/i; // 加上中括号，表示除此之外的任何
console.log(regex.test(str));     // false
