# 常用工具类

# 20个非常有用的Java程序片段

- <http://www.phpxs.com/code/1001855/>

- 根据用户填写的生日，自动计算出星座

```java
public class ConstellationBuilder {
    public static String getAstro(int month, int day) {
        String[] starArr = {"魔羯座", "水瓶座", "双鱼座", "牡羊座", "金牛座", "双子座", "巨蟹座", "狮子座",
                "处女座", "天秤座", "天蝎座", "射手座"};
        int[] DayArr = {22, 20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22};  //两个星座分割日
        int index = month;        // 所查询日期在分割日之前，索引-1，否则不变
        if (day < DayArr[month - 1]) {
            index = index - 1;
        }
        return starArr[index];
    }
}
```
