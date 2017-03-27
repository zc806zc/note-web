#### **Git/Github/SVN...**

* Git常用命令
  * [猴子都懂的Git教程](http://backlogtool.com/git-guide/cn/stepup/stepup1_1.html)
  * [Git冲突合并 - woai0231](https://github.com/woai30231/webDevDetails/tree/master/13)

```js
// 基本示例
// 1. clone版
git clone -b master https://github.com/luo0412/luo-android.git // -b master可省略
git add . / git add -A
git status // 查看状态
git commit -m "helloWorld"
git push origin master

// 2.remote版
git init // 初始化仓库
git remote add origin https://github.com/luo0412/tmp.git
add sth.
git commit -m "first commit"
git push -u origin master // -u
// git push -f origin master // 强制更新

// 新增文件
touch .gitignore/README.md
// git add README.md

// 查看区别
git diff HEAD // HEAD指向的是现在使用中的分支的最后一次更新 


// 四种分支 master/feature/hotfix/release 
// 将 feature-A分支合并到 master
// A分支可能是开发新功能或修复Bug
git checkout master // 先切换到master
git merge --no-ff feature-A  
// git branch -d feature-A // 删除分支


// 建立演示分支
// git checkout --orphan gh-pages
// rm -rf *
// git push -u origin gh-pages

// rebase/简化历史记录 加强理解
git reset --hard HEAD~ // 现在暂时取消刚才的合并
// 使用rebase合并 加强理解
```

* Git重点

```
// stash/切换分支 
还未提交的修改内容
以及新添加的文件
留在索引区域或工作树的情况下
切换到其他的分支时
修改内容会从原来的分支移动到目标分支

但是如果在checkout的目标分支中
相同的文件也有修改
checkout会失败的。

git stash // 暂时保存
do sth
git stash pop

// 冲突合并
出现冲突 是需要手动修改后确认再提交的

git进行了三方面的合并，
一方面分别找到两个需要合并分支的的祖先 // 也就是说它找到它们相同的部分
然后再分别标记两个不同的分支
最后把这两个不同的部分进行合并
最后生成一个分支 // 也就是最终合并得到的master分支
```

* Markdown/Gitbook/...
  * [Git基础语法](http://wowubuntu.com/markdown/#header) \| [Github版](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

```js
Markdown不支持的可以写html标签

// 二级标题可能自带下划线

// 换行
空行就是换行 
// 用了换行符<br>,要在此之前加两个以上的空格

// 列表嵌入 
四个空格或一个tab  // 同时注意换行符的效果

// 强调文本 
*hello* __hi__

// 代码显示 <pre><code>

  sdfsdg
  printf("hello world");

  fsdhgfkfd`hej`sfgbf


// 引用
> 李白
>
> 杜甫

// 链接
[百度](https://www.baidu.com/)
// [Qmen](q)


// 隐式链接
I get 10 times more traffic from 
[Google] [1] than from [Yahoo] [2] or [MSN] [3].

// 图片 
![hi](/path/s/logo.png) 

// 水平分割线  
---

// 用反斜杠来插入保留字符 
\\
```



