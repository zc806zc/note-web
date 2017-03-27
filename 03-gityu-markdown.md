#### **Git/Github/SVN...**

* Git常用命令
  * [Git冲突合并 - woai0231](https://github.com/woai30231/webDevDetails/tree/master/13)

```markdown
touch .gitignore/README.md
// git add README.md


// 在git commit之前 
git diff HEAD

// 基本示例
git clone -b master https://github.com/luo0412/luo-android.git // -b master可省略
git add . / git add -A
git status // 查看状态
git commit -m "helloWorld"
git push origin master

git init // 初始化仓库
git remote add origin https://github.com/luo0412/tmp.git
add sth.
git commit -m "first commit"
git push -u origin master // -u
// git push -f origin master // 强制更新


// 将 feature-A分支合并到 master
// A分支可能修复了某个bug
git checkout master // 先切换到master
git merge --no-ff feature-A  


// 建立演示分支
git checkout --orphan gh-pages
rm -rf *
git push -u origin gh-pages


// 弹回
git stash
do sth
git stash pop

// 出现冲突 是需要手动修改后确认再提交的
// 合并
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
[Qmen](q)
[Google](2)

// 图片 
![hi](/path/s/logo.png) 

// 水平分割线  
---

// 用反斜杠来插入保留字符 
\\
```



