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