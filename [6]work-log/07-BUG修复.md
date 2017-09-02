# **组件BUG**

- 下拉菜单 连续触发BUG <https://www.youyong.top/article/11592663d6394>

```javascript
$("td").hover(
    function () {
        $(this).filter(':not(:animated)').slideDown(200);
    },
    function () {
        $(this).slideUp(200);
    }
);

$("#menu").hover(    
        function () {    
            $("#menu").stop(true).animate({ height: "500" }, 5000).animate({ width: "500px" }, 5000);    
        },    
        function () {    
            $("#menu").stop(true).animate({ height: "100" }, 5000).animate({ width: "100px" },5000);    
        }    
);
```
