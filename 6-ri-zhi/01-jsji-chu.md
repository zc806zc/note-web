# JS基础

1. 变量提升

```js
notyetdeclared = 'now it is declared';

hoisting();

function hoisting(){
  console.log(notyetdeclared); // now it is declared
  notyetdeclared = 'declared differently';
}

-----------------------

notyetdeclared = 'now it is declared';

hoisting();

function hoisting(){
  console.log(notyetdeclared); // undefined
  var notyetdeclared = 'declared differently';
}
```



