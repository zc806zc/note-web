// 声名数组与变量
var months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ], // 月份

  items = {
    "0": "January",
    "1": "February",
    "2": "March",
    "3": "April",
    "4": "May"
  }; // 对象,用作测试

// 判断是不是数组
console.log(Array.isArray(months)); // true
console.log(Array.isArray(items)); // false

// 遍历
var str = '';
months.forEach(function(val, i, arr) {
  str += (i + 1) + ' of ' + arr.length + ' ' + val + '\n';
});
console.log(str);

// delete以后照样会打印??
// delete str;
// console.log(str);


var isEvery = months.every(function(val) {
    return val.indexOf('r') >= 0;
  }),
  isSome = months.some(function(val, i, arr) {
    return val.indexOf('r') >= 0;
  });
console.log(isEvery, isSome); // false, true

// map方法
var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday"],
  daysFirstLetters = daysOfTheWeek.map(function(val, i, arr) {
    return val + " starts with " + val.charAt(0);
  });

console.log(daysFirstLetters); // 字符串数组


// filter方法
var filterArr = months.filter(function(val, i, arr) {
  return val.indexOf("r") < 0; // 没有r的单词
});
console.log(filterArr.join(", ")); // "January, February, March, April"
