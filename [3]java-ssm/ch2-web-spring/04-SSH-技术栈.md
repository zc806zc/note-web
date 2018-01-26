# SSH

- Spring
- Stucts2
- Hibernate5

# Hibernate

- 快速入门 <http://www.yiibai.com/hibernate/hibernate-quick-guide.html>

- ORM(对象关系映射)工具

- 作为EJB2风格实体bean的替代品开发的对象关系映射工具

- 稳定版 Hibernate 5.2.9

![](http://www.yiibai.com/uploads/images/201703/2203/604080357_24119.jpg)

- 优点

  - 快速性能 -> 有一级缓存和二级缓存。一级缓存默认是启用的
  - HQL 生成数据库独立查询
  - 提供了自动创建数据库表的功能
  - 简化复杂连接
  - 提供查询统计和数据库状态

- Hibernate体系结构

  - Java应用层
  - hibernate框架层
  - 反手api层
  - 数据库层

![](http://www.yiibai.com/uploads/images/201703/2203/108090306_94168.jpg)

- Hibernate的高级架构

![](http://www.yiibai.com/uploads/images/201703/2203/173090306_68782.jpg)

- 注释
- Hibernate生成器类
- Hibernate使用Log4j日志记录
- 二级缓存 SessionFactory 默认不启用

  - 实现由不同的程序开发者(商)提供
  - EH二级缓存
  - OS二级缓存
  - Swarm二级缓存
  - JBoss二级缓存

- 继承映射

- 集合映射

  - Bag
  - Set
  - Map

- 组件映射

  - 将依赖对象映射作为组件
  - 组件是存储为值而不是实体引用的对象
  - HAS-A

- 事务管理

- many-to-one

- one-to-one

- HQL与标准查询语言
- 命名查询
