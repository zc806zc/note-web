#### **JS基础2**

* [JS的循环](http://www.jianshu.com/p/3aaaacd7c5ab)
  * for in 
  * for of

```js
// JS的循环
var arr = [1, 22, 3];
for(var i in arr) {
  console.log(i);  
}

for(var i of arr) {
  console.log(i);  
}
```

* 实现[lazyman](http://www.jianshu.com/p/f1b7cb456d37)

```js
(function(window, undefined){
    var taskList = [];
    // 类
    function LazyMan(){};
    LazyMan.prototype.eat = function(str){
        subscribe("eat", str);
        return this;
    };
    LazyMan.prototype.sleep = function(num){
        subscribe("sleep", num);
        return this;
    };
    LazyMan.prototype.sleepFirst = function(num){
        subscribe("sleepFirst", num);
        return this;
    };
    // 订阅
    function subscribe(){
        var param = {},
            args = Array.prototype.slice.call(arguments);
        if(args.length < 1){
            throw new Error("subscribe 参数不能为空!");
        }
        param.msg = args[0];
        param.args = args.slice(1); // 函数的参数列表
        if(param.msg == "sleepFirst"){
            taskList.unshift(param);
        }else{
            taskList.push(param);
        }
    }
    // 发布
    function publish(){
        if(taskList.length > 0){
            run(taskList.shift());
        }
    }
    // 鸭子叫
    function run(option){
        var msg = option.msg,
            args = option.args;
        switch(msg){
            case "lazyMan": lazyMan.apply(null, args);break;
            case "eat": eat.apply(null, args);break;
            case "sleep": sleep.apply(null,args);break;
            case "sleepFirst": sleepFirst.apply(null,args);break;
            default:;
        }
    }
    // 具体方法
    function lazyMan(str){
        lazyManLog("Hi!This is "+ str +"!");
        publish();
    }
    function eat(str){
        lazyManLog("Eat "+ str +"~");
        publish();
    }
    function sleep(num){
        setTimeout(function(){
            lazyManLog("Wake up after "+ num);
            publish();
        }, num*1000);

    }
    function sleepFirst(num){
        setTimeout(function(){
            lazyManLog("Wake up after "+ num);
            publish();
        }, num*1000);
    }
    // 输出文字
    function lazyManLog(str){
        console.log(str);
    }
    // 暴露接口
    window.LazyMan = function(str){
        subscribe("lazyMan", str);
        setTimeout(function(){
            publish();
        }, 0);
        return new LazyMan();
    };
})(window);
```

* [定时器](http://www.cnblogs.com/Uncle-Keith/p/6443115.html)

```js
console.log(1);

setTimeout(function() {
  console.log(2);
}, 0);

$.ajax({
    url: "../index.php",  //假如上一级目录下有php文件，并且echo '3';
    data: 'GET',
    success: function(data) {
        console.log(data);
    },      
})

new Promise(function(resolve, reject) {
    console.log(4);
    resolve();
}).then(function() {
    console.log(5);
}).then(function() {
    console.log(6);
})
console.log(7);

// 输出顺序是1, 4, 7, 5, 6, 3, 2
```



