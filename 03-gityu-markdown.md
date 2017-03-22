#### **Git常用命令**

* 常用命令

```markdown
在git commit之前 git diff HEAD

合并分支
将A分支合并到master
先checkout到master
再git merge --no-ff feature-A ??

常用命令
git clone -b master https://github.com/luo0412/luo-android.git
git add .
git status
git commit -m "helloWorld"
git push origin master

touch .gitignore

新建后连接（关键最后两步）
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/luo0412/tmp.git
git push -u origin master

// 强制更新
git push -f origin master

// 建立演示分支：
git checkout --orphan gh-pages
rm -rf *
git push -u origin gh-pages

// 弹回
git stash
do something
git stash pop
```

* [git合并、冲突 实例 - woai0231](https://github.com/woai30231/webDevDetails/tree/master/13)

```js
// 合并
git进行了三方面的合并，
一方面分别找到两个需要合并分支的的祖先，
也就是说它找到它们相同的部分，
然后再分别标记两个不同的分支，
最后把这两个不同的部分进行合并，
最后生成一个分支，
也就是我们最终合并得到的master分支

// 冲突
需要手动修改后再提交
```

#### **markdown语法**

* 语法
  * [基础](http://wowubuntu.com/markdown/#header)
  * [github版](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

---

* 基本语法
  * markdown不支持的可以写html标签

```js
二级标题可能自带下划线

换行就是空行
在换行符<br>之前加两个以上的空格

// 列表嵌入 四个空格或一个tab 注意换行符的效果

// 强调文本 
*hello* __hi__

// 代码显示 <pre><code>

  sdfsdg
  printf("hello world");

sdgdfgdf

  fsdhgfkfd`hej`sfgbf


// 引用
> 李白
>
> 杜甫

// 链接使用
[百度](https://www.baidu.com/)
[Qmen](q)
[Google](2)

// 图片 ![hi](/path/s/logo.png) 

// 水平分割线  ---

// 用反斜杠来插入保留字符 `\\`
```



