# 工具推荐

- awesome-java-cn <https://github.com/jobbole/awesome-java-cn>
- 伯乐在线工具包 http://hao.jobbole.com/
    - http://hao.jobbole.com/?catid=32
- 常用jar包的maven依赖 https://blog.csdn.net/q343509740/article/details/80432671
- 代码树 
  - 小众, 讲web开发工具的排行 
  - <http://www.codeyyy.com/java/index.html>
  
# 你真的会写Java吗

- 你真的会写Java吗 <https://juejin.im/entry/59ae07d9f265da249600f0ec>
  - https://github.com/lrwinx
  - (IDE?)eclipse -> IDEA
  - com.xxx.domain -> com.xxx.entity
  - 使用lombok
    - 尽管可以右键快速生成，但那生成的都是无营养的代码
    - 链式操作
  - DTO转化的时候一直使用set进行属性赋值时, 使用浅拷贝方法?
  - 设计模式: 所有的模式并不是凭空想象出来的，都是基于重构
  - 业务驱动技术 > 技术驱动业务
  - 结对编程

    - 多看成熟框架的源码
    - 多回头看自己的代码
    - 勤于重构

  - UML就是你说话的语言

    - 类图
    - 时序图

  - clean code

    - 聊聊clean code <https://tech.meituan.com/clean-code.html>

```java
// lombok实现链式
@Accessors(chain = true)

// BeanUtils.copyProperties
public interface DTOConvert<S,T> {
    T convert(S s);
}

public class UserInputDTOConvert implements DTOConvert {
  @Override
  public User convert(UserInputDTO userInputDTO) {
    User user = new User();
    BeanUtils.copyProperties(userInputDTO,user);
    return user;
  }
}

User user = new UserInputDTOConvert().convert(userInputDTO);
```

# 代码生成

- lombok

  - 一个可以通过简单的注解形式来帮助我们简化消除一些必须有但显得很臃肿的Java代码的工具
  - 注解文档 <https://projectlombok.org/features/all>
  - Lombok使用 https://blog.csdn.net/motui/article/details/79012846 
    - IDEA要安装lombok插件

```xml
@Setter
@Getter
@Data
@Log(这是一个泛型注解，具体有很多种形式)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@NonNull
@Cleanup
@ToString
@RequiredArgsConstructor
@Value
@SneakyThrows
@Synchronized

<!-- https://mvnrepository.com/artifact/org.projectlombok/lombok -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.16.18</version>
    <scope>provided</scope>
</dependency>
```