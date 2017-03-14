#### **正则表达式**

* 资源
  * [正则表达式前端使用 - Louis](http://louiszhai.github.io/2016/06/13/regexp/)
  * [MDN的regex手册](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)
  * [常用正则表达式](http://www.cnblogs.com/zfc2201/archive/2012/12/18/2824107.html)
  * [菜鸟手册](http://www.runoob.com/jsref/jsref-obj-regexp.html)

```js

```

---

* 常识

```js
Regular Expression
简写成regex RegExp

用于 文本搜索与替换, 
由一个字符序列形成的搜索模式
```

* **符号**

```js
// igm , 
i 大小写不敏感 
g全局匹配 
m多行匹配

[abc] 
[0-9] 
(x|y) 
^abc 除了abc以外
\b  \B 单词边界
\d  \s 空白字符 

\uxxxx 以十六进制数xxxx规定的Unicode字符
\D \S \W 换大写就是相反的意思

? 贪婪匹配和非贪婪匹配

分组组合符合反向引用符??
**分组组合** (pattern)
      反向引用 \num
      非捕获匹配 industry(?:ylies)
      正向"预测先行"匹配 Windows(?=NT|2000)
      反向"预测先行"匹配 Windows(?!NT|2000)
```

* **量词**

```js
n+ 至少一个
n* 零个或多个 n, 即 **可选**？？？
n? 不超过一个n
```

* **函数**
  * [replace()的第二个参数](http://www.w3school.com.cn/jsref/jsref_replace.asp)

```js
test 返回true/false

exec 返回具体内容
match 返回数组
search 返回下标

replace
        
```



