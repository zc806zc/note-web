// var names = ["David","Mike","Cynthia","Raymond","Clayton","Mike","Jennifer"];
// var name = "Mike";
// var firstPos = names.indexOf(name);
// console.log("First found " + name + " at position " + firstPos);
// var lastPos = names.lastIndexOf(name);
// console.log("Last found " + name + " at position " + lastPos);


// var cis = ["Mike","Clayton","Terrill","Danny","Jennifer"];
// var dmp = ["Raymond","Cynthia","Bryan"];
// var it = cis.concat(dmp);
// console.log(it);
// it = dmp.concat(cis);
// console.log(it);

// var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
// var dmpDept = itDiv.splice(3,3);
// var cisDept = itDiv;
// console.log(dmpDept); // Raymond,Cynthia,Danny
// console.log(cisDept); // Mike,Clayton,Terrill,Jennifer


// unshift演示
// var nums = [2,3,4,5];
// var newnum = 1;
// var N = nums.length;
// for (var i = N; i >= 0; --i) {
// nums[i] = nums[i-1];
// }
// nums[0] = newnum;
// console.log(nums); // 1,2,3,4,5


// nums = [2,3,4,5];
// console.log(nums); // 2,3,4,5
// newnum = 1;
// nums.unshift(newnum);
// console.log(nums); // 1,2,3,4,5
// nums = [3,4,5];
// console.log(nums);
// nums.unshift(newnum,1,2);
// console.log(nums); // 1,1,2,3,4,5

//pop演示
// var nums = [9,1,2,3,4,5];
// console.log(nums);
// for (var i = 0; i < nums.length; ++i) {
// nums[i] = nums[i+1];
// }
// console.log(nums); // 1,2,3,4,5, 打印多一个逗号,log多一个undefined


// var nums = [6,1,2,3,4,5];
// var first = nums.shift(); // first gets the value 9
// 						  // shift立即生效
// console.log(nums); // 1,2,3,4,5,6
// nums.push(first);
// console.log(nums); // 1,2,3,4,5,6


// splice演示
// var nums = [1,2,3,7,8,9];
// var newElements = [4,5,6];
// nums.splice(3,0,newElements);
// console.log(nums); // 1,2,3,4,5,6,7,8,9

// var nums = [1,2,3,7,8,9];
// nums.splice(3,0,4,5,6);
// console.log(nums);

// var nums = [1,2,3,100,200,300,400,4,5];
// nums.splice(3,4);
// console.log(nums); // 1,2,3,4,5


// sort演示
// var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
// names.sort();
// console.log(names); // Bryan,Clayton,Cynthia,David,Mike,Raymond

// var nums = [3,1,2,100,4,200];
// nums.sort();
// console.log(nums); // 1,100,2,200,3,4

// function compare(num1, num2) {
// return num2 - num1;
// }
// var nums = [3,1,2,100,4,200];
// nums.sort(compare);
// console.log(nums); // 200, 100, 4, 3, 2, 1

/**
 * 不生成新数组的迭代
 */
// forEach
// function square(num) {
// console.log(num, num * num);
// }
// var nums = [1,2,3,4,5,6,7,8,9,10];
// nums.forEach(square);

// every some
// function isEven(num) {
// return num % 2 === 0;
// }
// var nums = [2,4,6,8,10];
// var even = nums.every(isEven);
// if (even) {
// console.log("all numbers are even");
// }
// else {
// console.log("not all numbers are even");
// }

// function isEven(num) {
// return num % 2 === 0;
// }
// var nums = [1,2,3,4,5,6,7,8,9,10];
// var someEven = nums.some(isEven);
// if (someEven) {
// console.log("some numbers are even");
// }
// else {
// console.log("no numbers are even");
// }
// nums = [1,3,5,7,9];
// someEven = nums.some(isEven);
// if (someEven) {
// console.log("some numbers are even");
// }
// else {
// console.log("no numbers are even");
// }

// reduce
// function add(runningTotal, currentValue) {
// return runningTotal + currentValue;
// }
// var nums = [1,2,3,4,5,6,7,8,9,10];
// var sum = nums.reduce(add);
// console.log(sum); // 显示 55

// function concat(accumulatedString, item) {
// return accumulatedString + item;
// }
// var words = ["the ", "quick ","brown ", "fox "];
// var sentence = words.reduce(concat);
// console.log(sentence); // 显示 "the quick brown fox"

// function concat(accumulatedString, item) {
// return accumulatedString + item;
// }
// var words = ["the ", "quick ","brown ", "fox "];
// var sentence = words.reduceRight(concat);
// console.log(sentence); // 显示 "fox brown quick the"

/**
 * 生成新数组的迭代
 */
// function curve(grade) {
// return grade += 5;
// }
// var grades = [77, 65, 81, 92, 83];
// var newgrades = grades.map(curve);
// console.log("map: " + grades); // 82, 70, 86, 97, 88
// console.log("map: " + newgrades); // 82, 70, 86, 97, 88

// 似乎收到了变量干扰,先注释掉其他的代码
function first(wordsArr) {
	return wordsArr[0];
}
var wordsArr = ["for","your","information"];
var acronym = wordsArr.map(first);
console.log(acronym.join("")); // 显示 "fyi"

// filter方法演示
// function isEven(num) {
// 	return num % 2 === 0;
// }
// function isOdd(num) {
// 	return num % 2 !== 0;
// }
// var nums = [];
// for (var i = 0; i < 20; ++i) {
// 	nums[i] = i+1;
// }
// var evens = nums.filter(isEven);
// console.log("Even numbers: ");
// console.log(evens);
// var odds = nums.filter(isOdd);
// console.log("Odd numbers: ");
// console.log(odds);

// Even numbers:
// 2,4,6,8,10,12,14,16,18,20
// Odd numbers:
// 1,3,5,7,9,11,13,15,17,19

// 大小过滤
// function passing(num) {
// return num >= 60;
// }
// var grades = [];
// for (var i = 0; i < 20; ++i) {
// grades[i] = Math.floor(Math.random() * 101);
// }
// var passGrades = grades.filter(passing);
// console.log("All grades:" );
// console.log(grades);
// console.log("Passing grades: ");
// console.log(passGrades);

// 过滤字符串数组
function afterc(str) {
if (str.indexOf("cie") > -1) {
return true;
}
return false;
}
var words = ["recieve","deceive","percieve","deceit","concieve"];
var misspelled = words.filter(afterc);
console.log(misspelled); // 显示 recieve,percieve,concieve

