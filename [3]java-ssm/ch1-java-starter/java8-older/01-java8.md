# Java8

- java8-tutorial <https://github.com/winterbe/java8-tutorial>
- 初版发布于2014年3月18日
- 新功能

  - Lambda 表达式 (增加函数处理能力到JAVA)
  - 方法引用
  - 数据流API
  - 日期时间API -> java.time
  - Nashorn (一个基于JAVA引擎执行JavaScript代码)

# Lambda

- 利于函数式编程

```java
private void sortUsingJava7(List<String> names){
   //sort using java 7
   Collections.sort(names, new Comparator<String>() {
      @Override
      public int compare(String s1, String s2) {
         return s1.compareTo(s2);
      }
   });
}

private void sortUsingJava8(List<String> names){
   //sort using java 8
   Collections.sort(names, (s1, s2) ->  s1.compareTo(s2));      
}
```

# 函数式接口

# 默认方法

# 数据流

- <http://www.yiibai.com/java8/java8_stream.html>
- 数据流特点

# 方法引用

```java
names.forEach(System.out::println)
```

# 在JAVA调用JavaScript

```java
import javax.script.ScriptEngineManager;
import javax.script.ScriptEngine;
import javax.script.ScriptException;

public class Java8Tester {
   public static void main(String args[]){
      ScriptEngineManager scriptEngineManager = new ScriptEngineManager();
      ScriptEngine nashorn = scriptEngineManager.getEngineByName("nashorn");
      String name = "Mahesh";

      Integer result = null;
      try {
         nashorn.eval("print('" + name + "')");
         result = (Integer) nashorn.eval("10 + 2");   
      }catch(ScriptException e){
         System.out.println("Error executing script: "+ e.getMessage());
      }
      System.out.println(result.toString());
   }
}
```

# 从JavaScript调用Java

```javascript
var BigDecimal = Java.type('java.math.BigDecimal');

function calculate(amount, percentage) {
   var result = new BigDecimal(amount).multiply(
      new BigDecimal(percentage)).divide(
         new BigDecimal("100"), 2, BigDecimal.ROUND_HALF_EVEN);
   return result.toPlainString();
}
var result = calculate(568000000000000000023,13.9);
print(result);
```

# 常用包
