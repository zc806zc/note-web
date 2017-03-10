#### **设计模式**
* 设计模式的关注点
	* 高效编写代码 
    * 高可复用性
    * 抽象带来的可读性
* 设计模式分类
  + 创建型
  + 结构型
  + 行为型
  + 架构型
* <del>访问函数内的JavaScript参数要快于访问在该函数作用域之外的全局变量,因为语言解释器不需要实施额外的步骤来离开当前函数的作用域来搜索变量。</del>
```
(function($) {
	// code
}(jQuery))
```

#### **创建型模式**
+ 工厂模式
+ 抽象工厂模式
+ 生成器模式
+ 原型模式
+ 单例模式

#### **结构型设计模式**
+ 适配器模式
	* 不去改变实现，改变抽象，使同一个方法适用于多个系统
+ 组合模式
+ 装饰模式
+ 外观模式
+ 享元模式
+ 掺和模式
+ 模块模式
+ 代理模式

#### **行为型设计模式**
+ 职责链模式
+ 当需要访问一些有层级关系的对象，但又不想向代码的其余部分暴露此层级结构
+ 命令模式
+ 迭代器模式
+ 观察者模式
+ 中介者模式
+ 备忘录模式
+ 承诺模式
+ 策略模式

#### **架构型设计模式**
+ MVC模式
+ MVP模式
+ MVVM模式
+ 架构型模式框架