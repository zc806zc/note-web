/**

 */
// global variable
var str = "Visit W3cSchool!";
var regex = /w3cSchool/i;

// 函数
console.log(str.search(regex));  // 6
console.log(str.search("w3cschool")); // -1 找不到
console.log(str.replace(/w3c/i, "HZNU")); // Visit HZNUSchool!
console.log(str.match(regex));
// [ 'W3cSchool', index: 6, input: 'Visit W3cSchool!' ]
// 否则返回null


// 行首检测
regex = /^Vi/;
console.log("行首检测: " + regex.test("Vi")); // false
// ^只有出现在最前面才有定位的功能

// 除此之外
regex = /[^vi]/g;
console.log("全局测试：" + regex.test("vi")); // false

var tmp = regex.exec("ivb");
console.log("exec函数测试：" + tmp); // 变量输出
console.log(regex.exec("ivb")); // null
console.log("match函数：" + "ivb".match(regex));

// 行末
regex = /ft$/;
console.log(regex.test("soft")); // true

// 匹配边界
regex = /\bstart\b/;
console.log(regex.test("just do it")); // true
console.log(regex.test("just do it")); // false

regex = /er\B/;
console.log(regex.test("order")); // false
console.log(regex.test("verb")); // true

// 点号
regex = /t...m/;
console.log("点号测试:" + regex.test("tkj*m"));

// split
console.log();
regex = /, /;
str = "JavaScript, Java, Coffee";
var tmpArr = str.split(regex);
for(var i in tmpArr) {
	console.log(tmpArr[i]);
}
console.log();



/**
 * 实际应用
 */
// 身份证 15位和18位的数位检测
regex = /^\d{17}[\d|X]|^\d{15}$/;
str = "33022619960412159X";
console.log("身份证测试: " + regex.test(str)); // true

// 匹配空行 /n[s|]*r/;
// 匹配HTML标记 /<(.*)>.*</1>|<(.*)/>/
// 匹配首尾空格 /(^s*)|(s*$)/
// 匹配网址 http://([w-]+.)+[w-]+(/[w-./?]%&=]*)?
// 匹配E-mail w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*

/**
 * 去除重复的字符,但是存在顺序问题
 */
var s = "abacabefgeeii",
    s1 = s.replace(/(.).*\1/g, "$1"), //  取出重复字符 abei
    re = new RegExp("[" + s1 + "]", "g"),
    s2 = s.replace(re, "");
console.log("去除重复的字符： " + s1 + s2);
