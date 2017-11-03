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