# Hutool

- https://gitee.com/loolly/hutool
- 文档 http://hutool.mydoc.io/

# 常用 

- 输出 Console.log @NICE
- 克隆

```java
// 深克隆
// 对象必须实现Serializable接口
ObjectUtil.cloneByStream(obj)
```

- 类型转换 @NICE

    - 全角半角转化
    - Unicode和字符串转换
    - 编码转换
    - 金额大小写转换

```java
String[] b = { "1", "2", "3", "4" };
Integer[] intArray = Convert.toIntArray(b);

// 转换为日期对象
String a = "2017-05-06";
Date value = Convert.toDate(a);

// 转换为集合
Object[] a = {"a", "你", "好", "", 1};
List<?> list = Convert.convert(List.class, a);
List<?> list = Convert.toList(a);

// 编码转换
String a = "我不是乱码";
//转换后result为乱码
String result = Convert.convertCharset(a, CharsetUtil.UTF_8, CharsetUtil.ISO_8859_1);
String raw = Convert.convertCharset(result, CharsetUtil.ISO_8859_1, "UTF-8");
Assert.assertEquals(raw, a);
```

- 时间日期工具

```java
String dateStr = "2017-03-01";
Date date = DateUtil.parse(dateStr);
Date date = DateUtil.parse(dateStr, "yyyy-MM-dd");
```
