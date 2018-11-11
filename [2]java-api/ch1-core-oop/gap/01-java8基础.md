# Java8

- java8-tutorial <https://github.com/winterbe/java8-tutorial>
- learn-java8 https://github.com/biezhi/learn-java8
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

# java.time.temporal.ChronoUnit

- 枚举

```java
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Java8Tester {
   public static void main(String args[]){
      Java8Tester java8tester = new Java8Tester();
      java8tester.testChromoUnits();
   }

   public void testChromoUnits(){
       //Get the current date
       LocalDate today = LocalDate.now();
       System.out.println("Current date: " + today);       
       //add 1 week to the current date
       LocalDate nextWeek = today.plus(1, ChronoUnit.WEEKS);
       System.out.println("Next week: " + nextWeek);       
       //add 1 month to the current date
       LocalDate nextMonth = today.plus(1, ChronoUnit.MONTHS);
       System.out.println("Next month: " + nextMonth);      
       //add 1 year to the current date
       LocalDate nextYear = today.plus(1, ChronoUnit.YEARS);
       System.out.println("Next year: " + nextYear);      
       //add 10 years to the current date
       LocalDate nextDecade = today.plus(1, ChronoUnit.DECADES);
       System.out.println("Date after ten year: " + nextDecade);      
   }
}
```

# 时间日期

- Java8期间及持续时间

  - Period
  - Duration

- 时间调节器(获得"本月第二个星期六"或"下周二")

```java
import java.time.LocalDate;
import java.time.temporal.TemporalAdjusters;
import java.time.DayOfWeek;

public class Java8Tester {
   public static void main(String args[]){
      Java8Tester java8tester = new Java8Tester();
      java8tester.testAdjusters();       
   }

   public void testAdjusters(){
      //Get the current date
      LocalDate date1 = LocalDate.now();
      System.out.println("Current date: " + date1);      

      //get the next tuesday
      LocalDate nextTuesday = date1.with(TemporalAdjusters.next(DayOfWeek.TUESDAY));
      System.out.println("Next Tuesday on : " + nextTuesday);

      //get the second saturday of next month
      LocalDate firstInYear = LocalDate.of(date1.getYear(),date1.getMonth(), 1);

      LocalDate secondSaturday = firstInYear.with(
         TemporalAdjusters.nextOrSame(DayOfWeek.SATURDAY)).with(
         TemporalAdjusters.next(DayOfWeek.SATURDAY));
      System.out.println("Second saturday on : " + secondSaturday);       
   }    
}
```

# Base64
