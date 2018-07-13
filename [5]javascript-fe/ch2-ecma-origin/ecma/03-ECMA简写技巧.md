# JS简写法则

- ECMA5 -> ECMA6+ | typescript
- 运用短路运算

```javascript
// bad
if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
     let variable2 = variable1;
}

let dbHost;
if (process.env.DB_HOST) {
  dbHost = process.env.DB_HOST;
} else {
  dbHost = 'localhost';
}

// good
const variable2 = variable1 || 'new';
const dbHost = process.env.DB_HOST || 'localhost';
```

- 循环

```javascript
// bad
for (let i = 0; i < allImgs.length; i++)

// good
for (let index in allImgs)
function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);
```

- 十进制指数

```javascript
// bad
for (let i = 0; i < 10000; i++) {}

// good
for (let i = 0; i < 1e7; i++) {}
```
