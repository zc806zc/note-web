const clown = require('../../assets/js/clown.js');

// 声名数组与变量
var months = ["January", "February", "March", "April"
            , "May", "June", "July", "August"
            , "September", "October", "November", "December"],
    items = {
        "0": "January",
        "1": "February",
        "2": "March",
        "3": "April",
        "4": "May"
    };

// isArray
console.log("months is Array: " + Array.isArray(months)); // true
console.log("items is Array: " + Array.isArray(items)); // false
clown.hr();

// 遍历数组 forEach
var str = '';
months.forEach(function(val, i, arr) {
  str += (i+1) + ' of ' + arr.length
        + ' ' + val + '\n';
});
// console.log(str);
// delete str;
// console.log(str); // delete以后照样会打印??
clown.hr();

var isEvery = months.every(function (val) {
      return val.indexOf('r') >= 0;
}),
isSome = months.some(function (val, i, arr) {
  return val.indexOf('r') >= 0;
});
console.log("isEvery: " + isEvery); // false
console.log("isSome: " + isSome); // true
clown.hr();

// map方法
var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday"],
    daysFirstLetters = daysOfTheWeek.map(function(val, i, arr) {
        return val + " starts with " + val.charAt(0);
    });

console.log(daysFirstLetters); // 字符串数组
console.log(daysFirstLetters.join(", ")); // 用逗号将数组转化成字符串
clown.hr();


// filter方法
// 选出没有 r字母 的单词
var filterArr = months.filter(function(val, i, arr) {
    return val.indexOf("r") < 0;
});
console.log(filterArr.join(", ")); // "January, February, March, April"
clown.hr();
