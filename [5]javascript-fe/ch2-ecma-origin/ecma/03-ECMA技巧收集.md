# JS简写法则

- ECMA5 -> ECMA6+ | typescript
- 运用短路运算
// false，null，0，""，undefined，NaN
  - 假值 

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

# 技巧

- JS 中可以提升幸福度的小技巧  https://juejin.im/post/5b51e5d3f265da0f4861143c
  
```js
// 过滤假值
const compact = arr => arr.filter(Boolean)
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])

// 取整
1.3 | 0         // 1
-1.9 | 0        // -1

// 判断奇偶数 & 1
const num=3;
!!(num & 1)					// true
!!(num % 2)					// true
```

- 精确到指定位数的小数

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
round(1.345, 2) 				// 1.35
round(1.345, 1) 				// 1.3
```