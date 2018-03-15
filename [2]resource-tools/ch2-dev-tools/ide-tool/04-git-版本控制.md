# Git

- Git较svn的优势

  - <http://blog.jobbole.com/31444/>
  - git是分布式 比方没网的时候
  - 存储：git内容元数据
  - 分支不同
  - 版本号
  - 内容完整性 SHA-1哈希算法

- Git四种分支

  - master
  - feature
  - hotfix
  - release

```shell
# 常用操作
git init
git remote add origin xxx
git pull origin master

# 本地修改
git add -A
git status
git commit -m "first commit"
git push -u origin master

# clone
git clone -b master xxx

# 追加提交
git add sample.txt
git commit --amend
```

# SVN

...

# git冲突合并

- <https://github.com/woai30231/webDevDetails/tree/master/13>
- git merge使用不当引发的代码丢失血案 <https://juejin.im/post/5a0bdd335188254dd935f008>
- 解决因为本地代码和远程代码冲突，导致git pull无法拉取远程代码的问题 <https://www.cnblogs.com/huanyou/p/6654813.html>

```shell
# merge而不是直接pull
git checkout -b feature-x develop # 新建  feature-x 分支
git checkout develop # 切回develop
git merge --no-ff feature-x # 合并 可以保存之前的分支历史。


# 查看冲突文件
git status -uno

# 将本地代码stash到仓库中
git stash
git pull
git stash pop # 将仓库中的代码合到本地最新代码中

# 可能存在多次stash的操作
git stash list
git stash pop stash@{Number}

#  显示stash合并到本地代码后，哪些文件会修改，以及修改的概述
git stash show
git stash show -p stash@{0} # 显示修改的详细内容
```

# 分支操作

...

# github

- <https://juejin.im/entry/59c47971f265da065a63c50a>
- <https://juejin.im/entry/599eb3836fb9a024732193df>
- github若干技巧 <https://juejin.im/entry/5a056dc8518825188e51646e>
- gitmoji <https://github.com/carloscuesta/gitmoji>
- 仓库趋势排行 <https://microzz.com/github-ranking/>
- <http://githubrank.com/>
- github不能访问、加载css、js解决办法 <http://blog.csdn.net/lancees/article/details/21957673>
- github下载慢 <http://blog.csdn.net/u013360850/article/details/77145661>

- 链接到代码 <https://github.com/reading-digest/hello-angular/blob/9bd320d8b38daa9d56002de0830ffcf6753975e3/app/todo-list.html#L89-L109>

```javascript
javascript stars:>100
```

- ssh

  - <https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/>
  - <https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/>

```shell
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
enter...
clip < ~/.ssh/id_rsa.pub
# 已复制到粘贴板 -> github add ssh key

# Adding your SSH key to the ssh-agent
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_rsa

# Testing connection
ssh -T git@github.com
```

# 开源

- 零起点的开源社区贡献指南 <https://juejin.im/post/59f98a196fb9a045132a03ed>

  - 友善的互吹评价
  - 提问式的反驳

```shell
// 用语
表达 API 笨重不好用，可以说 heavy to work with
表达模块结构不好，可以说 not intuitive
表达处理方式太粗暴，可以说 overkill
表达逻辑可能有漏洞，可以说 leaky
表达要引入的东西太多，可以说 aggressive

而 I think 则显得非常武断，可以这样：
万能的 IMO 或 IMHO，即 In my (humble) opinion
补充一个 Not sure, maybe missing something
用 To my knowledge 或者 For me

// 对 Issue 来说，
常见的模板大致是这样的三段论：
Bug or Feature?
Current Behavior?
Expected Behavior?

// 而对于 PR 来说倒不一定需要长篇大论，
正式一些的结构大致是：
This Closes #xxx
Current Behavior / Reason
Solution
```

- 如何求关注

  - <https://juejin.im/entry/5a26465c6fb9a044ff31514a>

# 用Markdown记录

- <https://guides.github.com/features/mastering-markdown/>
- A markdown parser and compiler. Built for speed. <https://github.com/chjj/marked>
- <https://github.com/jgthms/wysiwyg.css> A tiny CSS for generated HTML or Markdown content
- Markdown不支持的可以写HTML

# 花式操作

- widows的tree命令

```shell
tree > README.md

app
   |__dist
   |   |__styles
   |   |__js
   |       |__bundle.js
   |   |__index.html
   |__src
   |   |__styles
   |   |__js
   |       |__index.js
   |__node_modules
   |__package.json
   |__webpack.config.js
````
