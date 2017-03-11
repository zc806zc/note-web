#### **ch20 JSON**

* JSON 字符串必须使用双引号
* JSON 中的对象要求给属性加引号
* 没有末尾的分号
* 解析与序列化
  * toJSON\(\) 可以作为函数过滤器的补充

```js
// json示例
[
    {
        "title": "Professional JavaScript",
        "authors": [
            "Nicholas C. Zakas"
        ],
        edition: 3,
        year: 2011
    },
    {
        "title": "Professional JavaScript",
        "authors": [
            "Nicholas C. Zakas"
        ],
        edition: 2,
        year: 2009
    },
    {
        "title": "Professional Ajax",
        "authors": [
            "Nicholas C. Zakas",
            "Jeremy McPeak",
            "Joe Fawcett"
        ],
        edition: 2,
        year: 2008
    },
    {
        "title": "Professional Ajax",
        "authors": [
            "Nicholas C. Zakas",
            "Jeremy McPeak",
            "Joe Fawcett"
        ],
        edition: 1,
        year: 2007
    },
    {
        "title": "Professional JavaScript",
        "authors": [
            "Nicholas C. Zakas"
        ],
        edition: 1,
        year: 2006
    }
]

// 序列化选项  过滤
var book = {
"title": "Professional JavaScript",
"authors": [
"Nicholas C. Zakas"
],
edition: 3,
year: 2011
};
var jsonText = JSON.stringify(book, ["title", "edition"]);
// result:
// {"title":"Professional JavaScript","edition":3}
```



