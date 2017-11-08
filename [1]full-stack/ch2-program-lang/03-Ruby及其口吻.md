# Ruby基础

- ruby-win <http://rubyinstaller.org/downloads/>
- rubywin-dl <http://suke.my.coocan.jp/ruby/rubywin/index_e.html>

```ruby
# 测试
$ ruby -v
ruby 2.2.3
$ ruby test.rb

# IDE
rubywin
RDE
sublime + 编译系统 // 推荐
atom + script插件 // 推荐

# 交互式 Ruby（IRb）
$irb
irb 0.6.1(99/09/16)
irb(main):001:0> def hello
irb(main):002:1> out = "Hello World"
irb(main):003:1> puts out
irb(main):004:1> end
nil
irb(main):005:0> hello
Hello World
nil

# 中文编码 utf-8
```

- 基础

```ruby
纯粹的面向对象程序设计的
服务器端脚本语言
松本行弘（まつもとゆきひろ/Yukihiro Matsumoto）

Ruby 可以被嵌入到超文本标记语言（HTML）。
Ruby 可扩展性强，用 Ruby 编写的大程序易于维护
Ruby 支持许多 GUI 工具，比如 Tcl/Tk、GTK 和 OpenGL
Ruby 有丰富的内置函数，可以直接在 Ruby 脚本中使用
```

- 命令行

  - <http://www.runoob.com/ruby/ruby-command-line-options.html>

```ruby
-a    与 -n 或 -p 一起使用时，可以打开自动拆分模式(auto split mode)
-c    只检查语法，不执行程序。
-n    把代码放置在一个输入循环中（就像在 while gets; ... end 中一样）。
-p    把代码放置在一个输入循环中。在每次迭代后输出变量 $_ 的值。
-r lib    使用 require 来加载 lib 作为执行前的库。
```

- 语法

```ruby
// 环境变量
PATH

// 多行字符串

// BEGIN END

// 单行注释
#

// 多行注释
=begin
这是注释。
这也是注释。
这也是注释。
这还是注释。
=end
```
