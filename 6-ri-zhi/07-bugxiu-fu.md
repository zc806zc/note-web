#### **组件BUG**

* 下拉菜单 连续触发BUG  https://www.youyong.top/article/11592663d6394

```js
$("td").hover(
    function () {
        $(this).filter(':not(:animated)').slideDown(200);
    },
    function () {
        $(this).slideUp(200);
    }
);


  
```



