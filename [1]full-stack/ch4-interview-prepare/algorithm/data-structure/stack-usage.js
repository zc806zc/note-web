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

