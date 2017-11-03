// 不要循环里创建函数

var daysOfWeek = ["Monday", "Tuesday", "Wednesday"],
    len = daysOfWeek.length, // 获取数组长度
    index = len,             // 初始化
    reversedArr = [];

var index = 0,
    daysObj = {},
    dayOfWeek;

// 错误演示
// for (; index < len; index++) {
//     dayOfWeek = daysOfWeek[index];

//     daysObj[dayOfWeek] = {
//         name: dayOfWeek,
//         getReverseName: function() {
//             return this.name.split("").reverse().join("");
//         }
//     };
// }

// Define a single function to be used within any iteration of the loop
function getReverseName() {
    return this.name.split("").reverse().join("");
}

for (; index < len; index++) {
    dayOfWeek = daysOfWeek[index];
    daysObj[dayOfWeek] = {
        name: dayOfWeek,

        // Simply refer to the existing function here, rather than creating a new function
        getReverseName: getReverseName
    };
}

console.log(daysObj);
console.log(daysObj.Monday.name);
console.log(daysObj.Monday.getReverseName());
console.log(daysObj.Monday.getReverseName); // [Function: getReverseName]
