#### **压缩**
* Gzip
	* header Content-Encoding:gzip
* JS压缩 
	* uglifyJS
    * YUI Compressor（仅仅压缩）
    * Closure Compiler
* CSS压缩
	* CSS Compressor
* HTML压缩
	* 脚本混合 -> 争议待定
    * HtmlCompressor
* 图片资源压缩
	* 在线：TinyPNG JEPGmini
    * 本地：ImageOptim
* <del>使用Ant,构建代码压缩任务，完成上述所有</del> 用Grunt