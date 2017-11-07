for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// 输出3 3 3

// let 法1
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// let 法2
for (var i = 0; i < 3; i++) {
  let j = i
  setTimeout(function() {
    console.log(j);
  }, 1000);
}


// 立即执行
for (var i = 0; i < 3; i++) {

  (function() {
    var j = i;
    setTimeout(function() {
      console.log(j);
    }, 1000)
  })();

}

for (var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}

//  闭包示例
//  返回闭包当作对象的公用方法
function A() {
  var _age = 0;
  return function() {
    console.log(_age++); // 可以访问到
  }
}

var a = A();
a();
a();
a();
console.log('-----')
A();
A()();
console.log('-----')

function Person() {
  this.age = 0;
}
Person.prototype.add = function() {
  console.log(this.age++);
}
var csh = new Person();
csh.add();
csh.add();




let a = 10 + 20 + '30' + 40 // 字符串
console.log(a) // 303040

// (function() {
//   let hello = 9
//   // hello = 3
//   console.log(hello)
// })()
