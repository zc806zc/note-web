# 你真的会写Java吗

- <https://juejin.im/entry/59ae07d9f265da249600f0ec>
- eclipse -> IDEA
- com.xxx.domain -> com.xxx.entity
- 在做DTO转化的时候一直使用set进行属性赋值时, 使用BeanUtils.copyProperties浅拷贝方法
- lombok
- 设计模式

  - 所有的模式并不是凭空想象出来的，都是基于重构

- 业务驱动技术 or 技术驱动业务

- 结对编程替代方案

  - 多看成熟框架的源码
  - 多回头看自己的代码
  - 勤于重构

- UML就是你说话的语言

  - 类图
  - 时序图

- clean code

  - 聊聊clean code <https://tech.meituan.com/clean-code.html>

# XML

- 缺点 -> 冗余
- XML解析器 <http://www.yiibai.com/java_xml/java_xml_parsers.html>

  - Dom解析器
  - JDOM解析器 (比DOM解析器更简单)
  - SAX解析器 (基于事件触发器, 不完整(部分)的文件加载到存储器中)
  - StAX解析器 (比SAX解析器更高效)
  - XPath解析器 (解析基于表达式XML并广泛选择使用XSLT)
  - DOM4J解析器 (Java库来解析XML，XPath和使用Java集合框架XSLT，为DOM，SAX和JAXP的支持)

- XML语法分析网站

  - <http://www.yiibai.com/java_xml/java_xml_useful_resources.html>
  - dom4j <http://www.dom4j.org/>
  - jdom <http://www.jdom.org/>

- dom4j

```java
...
public class DOM4jModifyXMLDemo {
   public static void main(String[] args) {
      try {
         File inputFile = new File("input.txt");
         SAXReader reader = new SAXReader();
         Document document = reader.read( inputFile );

         Element classElement = document.getRootElement();

         List<Node> nodes = document.selectNodes("/class/student[@rollno='493']" );               
         for (Node node : nodes) {
            Element element = (Element)node;
            Iterator<Element> iterator=element.elementIterator("marks");
            while(iterator.hasNext()){
               Element marksElement=(Element)iterator.next();
               marksElement.setText("80");
            }
         }

         // Pretty print the document to System.out
         OutputFormat format = OutputFormat.createPrettyPrint();
         XMLWriter writer;
         writer = new XMLWriter( System.out, format );
         writer.write( document );
      } catch (DocumentException e) {
         e.printStackTrace();
      } catch (UnsupportedEncodingException e) {         
         e.printStackTrace();
      } catch (IOException e) {
         e.printStackTrace();
      }
   }    
}
```

# JSON

- 偏前端内容在ECMA篇...
- JSON框架模式

  - <http://www.yiibai.com/json/json_schema.html>
  - JSON模式验证库

- 各种语言交互

  - PHP
  - Perl
  - Python
  - Ruby
  - Java

# Java术语

- http://blog.csdn.net/gaoyunpeng/article/details/2093211  
- PO/POJO/VO/BO/DAO/DTO

# Java WEB

- Java Web技术总结 <https://www.jianshu.com/p/539bdb7d6cfa>

# 接口的权限认证

- 拦截器 HandlerInterceptorAdapter

# 接口层应该实现如下目标

- 统一的响应体、请求体，规避Map、List作参数或者响应结果的方式
- 统一的错误信息
- 统一的请求数据校验
- 统一的接口异常捕获

# MySQL建表

- 按照字段的使用频率依次定义
- 可为空的字段要提供默认值；
- id + gmt_create + gmt_modified
- 索引和约束

  - 组合索引

# 线程池

- 线程池的大小

  - 根据Little定律（队列中任务的平均数量等于进入速率和平均停留时间的乘积）估算

# 常识与建议

- 别返回null值

```java
当一个方法返回Collection集合的时候，不要返回null，
如果没有结果则返回空的集合（例如：Collections.emptyList();），
这样该方法的客户就不需要判断null的逻辑。
这就是Java开发中的特例模式的应用。
```

- 在通过URL参数传入时间时，后台可考虑使用InitBinder自动将时间字符串转换成Date对象，并绑定到Controller的入参

```java
//the parameter was converted in initBinder
@RequestMapping("/date")
public String date(Date date){
 System.out.println(date); return "hello";
}

//At the time of initialization,convert the type "String" to type "date" @InitBinder
public void initBinder(ServletRequestDataBinder binder){
  binder.registerCustomEditor(Date.class, new CustomDateEditor(new SimpleDateFormat("yyyy-MM-dd"), true));
}
```

- 只要涉及到字符串，就要明确该字符串用什么编码，要显式指明！不要相信默认值

```shell
IOUtils.toString(in, Charset.forName("UTF-8"));
```
