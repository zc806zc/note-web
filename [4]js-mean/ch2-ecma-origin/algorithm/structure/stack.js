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
 * 判断回文数 =====================
 */
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
word = "racecar";
console.log(isPalindrome(word));


/**
 * 进制转化 ==================
 */


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

console.log(num + " converted to base " + base + " is " + newNum);
num = 125;
base = 8;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);

// 输出结果
// 32 converted to base 2 is 100000
// 125 converted to base 8 is 175

/**
 * 使用栈模拟递归 ===================
 */
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


console.log(factorial(5)); // 显示 120
console.log(fact(5)); // 显示 120


/**
 * 栈的测试
 */
var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());

// 输出结果
// length: 3
// Bryan
// The popped element is: Bryan
// Raymond
// Cynthia
// length: 0
// undefined
// Clayton
