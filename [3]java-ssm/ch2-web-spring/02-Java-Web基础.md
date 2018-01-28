# Java WEB

- Java Web技术总结 <https://www.jianshu.com/p/539bdb7d6cfa>

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
