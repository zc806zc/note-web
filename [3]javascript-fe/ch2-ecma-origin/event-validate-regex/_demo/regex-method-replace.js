/**
 * replace方法
 */
var str = "Hello World",
    name = "Doe, John";

console.log("$代替:" + str.replace(/o/g, "$$"));
console.log("$&演示: " + str.replace(/Hello World/, "$&"));
        // 使用第一个参数中所给定的子字符串来替代所找到的子字符串??
        // 与 regex 相匹配的子串。

console.log(str.replace(/o/g, "$`")); // 用o左侧文本代替
console.log(str.replace(/o/g, "$'")); // 右侧文本

console.log(str.replace(/(o)(\s)/g, "$1|$1|$1|$2|$2"));
console.log(name.replace(/(\w+)\s*, \s*(\w+)/, "$2 $1"));


// 函数作为replace的第二个参数
var count = 0;

// Define a function to be executed on each matched substring, where the supplied parameter
// is the matched substring itself
function replaceWithCount(value) {

    // Increment the counter
    count = count + 1;
    // return count; // 不传进来value也不会报错
    return value + count;
}

// Example usage
console.log("Hello World".replace(/o/g, replaceWithCount)); // Hello1 Wo2rld
console.log("Hello World".replace(/\s/g, replaceWithCount)); // Hello 3World
