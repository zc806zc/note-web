// const clown = require('../../assets/js/clown.js');

/**
 * @method:
 * 使用反向while循环代替for循环
 * for循环每次都要比较, while则是倒计时
 */
var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    len = week.length, // 获取数组长度
    index = len,             // 初始化
    reversedArr = [];

while(index--) {
    console.log(index); // 首次为6
    reversedArr.push(week[index]);
}

console.log(reversedArr);
