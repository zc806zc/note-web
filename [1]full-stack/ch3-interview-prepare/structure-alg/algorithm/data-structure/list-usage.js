/**
 * 测试list
 */



// var names = new List();
// names.append("Cynthia");
// names.append("Raymond");
// names.append("Barbara");
// console.log(names.toString());
// names.remove("Raymond");
// console.log(names.toString());


var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
console.log(names.getElement()); // 显示 Clayton
names.next();
console.log(names.getElement()); // 显示 Raymond

names.next();
names.next();
names.prev();
console.log(names.getElement()); // 显示 Cynthia

// 输出结果
// Clayton
// Raymond
// Cynthia

console.log(names.front());
console.log(names.next());
console.log(names.length());

// for(names.front(); names.currPos() < names.length(); names.next()) {
   // console.log(names.getElement());
// }





