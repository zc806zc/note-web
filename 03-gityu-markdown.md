#### **Git/Github/SVN...**

* [猴子都懂的Git教程](http://backlogtool.com/git-guide/cn/stepup/stepup1_1.html)
* 我认为, 另外两个同等级别地，一样改变了思维的事情是
  * 使用Linux\(一切皆资源\)
  * 弃用百度，拥抱Google（翻墙看一下真实的世界）

```js
翻墙以后，用自己蹩脚的英语看了那些国家对于我们国家的“批评”
挺好笑的
不是评论好笑
而是我想了一个问题
如果有一样东西你觉得不好，是彻底避开隔绝在外
还是充分认识以后，再用理性否定或重新认识它们呢

有一本书很好，但是我读晚了，那就是《常识》
```

* 仓库已经存在
  * git clone \(-b master\) [https://github.com/luo0412/luo-android.git](https://github.com/luo0412/luo-android.git)
  * git add -A
  * git status
  * git commit -m "helloWorld"
  * git push origin master
* 本地自建仓库
  * git init
  * git remote add origin [https://github.com/luo0412/tmp.git](https://github.com/luo0412/tmp.git)
  * 做点什么
  * git add .
  * git commit -m "first commit"
  * git push -u origin master // -u
* 四种分支
  * master
  * feature
  * hotfix
  * release

```js
git push -f origin master

touch .gitignore/README.md
git add README.md

git diff HEAD // HEAD指向的是现在使用中的分支的最后一次更新 

git checkout master 
git merge --no-ff feature-A  
git branch -d feature-A // 删除分支

git checkout --orphan gh-pages

// rebase/简化历史记录 加强理解
git reset --hard HEAD~ // 现在暂时取消刚才的合并
// 使用rebase合并 加强理解
```

* Git重点
  * [Git冲突合并 - woai0231](https://github.com/woai30231/webDevDetails/tree/master/13)

```
// stash/切换分支 
还未提交修改内容以及新增文件
切换到其他分支时
修改内容会从原来的分支移动到目标分支
但是
如果目标分支中相同的文件也有修改
checkout会失败

git stash // 暂时保存
git stash pop

// 冲突合并的理解
出现冲突 是需要手动修改后确认再提交的

git进行了三方面的合并，
一方面分别找到两个需要合并分支的的祖先 // 也就是说它找到它们相同的部分
然后再分别标记两个不同的分支
最后把这两个不同的部分进行合并
最后生成一个分支 // 也就是最终合并得到的master分支
```

* Markdown/Gitbook
  * [Git基础语法](http://wowubuntu.com/markdown/#header) \| [Github官方语法](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
  * Markdown不支持的可以写html标签
  * 空行就是换行 

```js
// 二级标题可能自带下划线

用了换行符<br>,要在此之前加两个以上的空格

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



