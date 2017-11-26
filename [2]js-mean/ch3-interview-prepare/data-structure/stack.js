/**
 * 数据结构 - 栈
 */
function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}
function push(element) {
	this.dataStore[this.top++] = element;
}
function peek() {
	return this.dataStore[this.top-1];
}
function pop() {
	return this.dataStore[--this.top];
}
function clear() {
	this.top = 0;
}
function length() {
	return this.top;
}

/**
 * 判断回文数
 */
load("stack.js");

function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word == rword) {
        return true;
    } else {
        return false;
    }
}

var word = "hello";
if (isPalindrome(word)) {
    print(word + " is a palindrome.");
}
else {
    print(word + " is not a palindrome.");
}

word = "racecar";
if(isPalindrome(word)) {
    print(word + " is a palindrome.");
}
else {
    print(word + " is not a palindrome.");
}


// 输出结果
// hello is not a palindrome.
// racecar is a palindrome.

/**
 * 进制转化
 */

load("stack.js");

// 将数字转化成二进制或八进制
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
print(num + " converted to base " + base + " is " + newNum);
num = 125;
base = 8;
var newNum = mulBase(num, base);
print(num + " converted to base " + base + " is " + newNum);

// 输出结果
// 32 converted to base 2 is 100000
// 125 converted to base 8 is 175

/**
 * 使用栈模拟递归
 */
load("stack.js");
// js的阶乘(已经写好的递归)
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

// 使用栈模拟递归过程
function fact(n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    var product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}


print(factorial(5)); // 显示 120
print(fact(5)); // 显示 120


/**
 * 栈的测试
 */

load("stack.js"); // 加载stack.js

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
print("length: " + s.length());
print(s.peek());
var popped = s.pop();
print("The popped element is: " + popped);
print(s.peek());
s.push("Cynthia");
print(s.peek());
s.clear();
print("length: " + s.length());
print(s.peek());
s.push("Clayton");
print(s.peek());

// 输出结果
// length: 3
// Bryan
// The popped element is: Bryan
// Raymond
// Cynthia
// length: 0
// undefined
// Clayton
