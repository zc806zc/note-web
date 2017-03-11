#### **ch13 事件**
* 事件流
	* [事件处理程序的缺点 文章](www.jibbering.com/faq/names/event_handler.html)
	
```
冒泡
捕获

// DOM2事件流
事件捕获阶段
捕获阶段不会涉及事件目标
处于目标阶段
事件冒泡阶段

// 事件对象 Event e
只有在事件处理程序执行期间， 
event 对象才会存在；
一旦事件处理程序执行完成， 
event 对象就会被销毁。

// IE中的事件对象


// 事件类型
UI（User Interface，用户界面）事件
焦点事件，当元素获得或失去焦点时触发；
鼠标事件，当用户通过鼠标在页面上执行操作时触发；
滚轮事件，当使用鼠标滚轮（或类似设备）时触发；
文本事件，当在文档中输入文本时触发；
键盘事件，当用户通过键盘在页面上执行操作时触发；
合成事件，当为 IME（Input Method Editor，输入法编辑器）输入字符时触发；
变动（mutation）事件，当底层 DOM 结构发生变化时触发。


// 鼠标事件顺序
mousedown
mouseup
click
mousedown
mouseup
click
dblclick

// 键盘事件
键码
字符编码

// 复合事件
处理 IME 的输入序列

// 比较

clientX clientY
pageX pageY
scrollLeft 和 scrollTop
screenX 和 screenY

// 设备事件

orientationchange 屏幕纵横 事件
所有 iOS 设备都支持 orientationchange 事件和 window.orientation 属性
MozOrientation
deviceorientation 告诉开发人员设备在空间中朝向哪儿，而不是如何移动
devicemotion 告诉开发人员设备什么时候移动，而不仅仅是设备方向如何改变

// 触摸事件
touchstart  touchmove  touchend touchcancel
顺序
touchstart
mouseover
mousemove （一次）
mousedown
mouseup
click
touchend


// 手势事件
gesturestart ：当一个手指已经按在屏幕上而另一个手指又触摸屏幕时触发。
gesturechange ：当触摸屏幕的任何一个手指的位置发生变化时触发。
gestureend：当任何一个手指从屏幕上面移开时触发。

```


* HTML5事件


```
contextmenu
beforeunload

DOMContentLoaded 不理会图像、JavaScript 文件、CSS 文件或其他资源是否下载完毕
readystatechange

pageshow 和 pagehide 事件
往返缓存 p393

hashchange 事件

```
	


* 内存和性能


```
事件委托
移除事件处理程序
```



* 模拟事件


```
使用 **JavaScript** 在任意时刻来 **触发**特定的事件
模拟鼠标事件
模拟键盘事件
模拟其他
自定义DOM事件
ie中的事件模拟
```



* 示例
    
~~~
//  DOM0 级,在元素的作用域执行
var btn = document.getElementById("myBtn");
btn.onclick = function(){
	alert(this.id); //"myBtn"
};
btn.onclick = null;  // 删除

// DOM2 级事件处理程序
// 按顺序执行
// 通过 addEventListener() 添加的匿名函数将无法移除
var btn = document.getElementById("myBtn");
btn.addEventListener("click", function(){
	alert(this.id);
}, false);
btn.addEventListener("click", function(){
alert("Hello world!");
}, false);

// 移除监听
var btn = document.getElementById("myBtn");
var handler = function(){
alert(this.id);
};
btn.addEventListener("click", handler, false);
// 这里省略了其他代码
btn.removeEventListener("click", handler, false); // 有效

// EventUtil 的用法如下所示。
var EventUtil = {
  addHandler: function(element, type, handler){
    if (element.addEventListener){
    	element.addEventListener(type, handler, false);
    } else if (element.attachEvent){
    	element.attachEvent("on" + type, handler);
    } else {
    	element["on" + type] = handler;
    }
  },
  removeHandler: function(element, type, handler){
    if (element.removeEventListener){
    	element.removeEventListener(type, handler, false);
    } else if (element.detachEvent){
    	element.detachEvent("on" + type, handler);
    } else {
    	element["on" + type] = null;
    }
    }
};

// EventUtil使用示例
var btn = document.getElementById("myBtn");
var handler = function(){
alert("Clicked");
};
EventUtil.addHandler(btn, "click", handler);
// 这里省略了其他代码
EventUtil.removeHandler(btn, "click", handler);

// 在需要通过一个函数处理多个事件时，可以使用 type 属性
var btn = document.getElementById("myBtn");
var handler = function(event){
switch(event.type){
case "click":
alert("Clicked");
break;
case "mouseover":
event.target.style.backgroundColor = "red";
break;
case "mouseout":
event.target.style.backgroundColor = "";
break;
}
};

btn.onclick = handler;
btn.onmouseover = handler;
btn.onmouseout = handler;

// 阻止特定事件的默认行为，可以使用 preventDefault() 方法
var link = document.getElementById("myLink");
link.onclick = function(event){
	event.preventDefault();
};

// stopPropagation() 方法用于立即停止事件在 DOM 层次中的传播
var btn = document.getElementById("myBtn");
btn.onclick = function(event){
	alert("Clicked");
	event.stopPropagation();
};
document.body.onclick = function(event){
	alert("Body clicked");
};

// 事件对象的 eventPhase 属性
var btn = document.getElementById("myBtn");
btn.onclick = function(event){
	alert(event.eventPhase); //2
};
document.body.addEventListener("click", function(event){
	alert(event.eventPhase); //1
}, true);
document.body.onclick = function(event){
	alert(event.eventPhase); //3
};

// ie中的事件对象
var btn = document.getElementById("myBtn");
btn.onclick = function(){
	var event = window.event;
	alert(event.type); //"click"
};
btn.attachEvent("onclick", function(event){
	alert(event.type); //"click"
});

// returnValue 属性相当于 DOM中的 preventDefault() 方法
var link = document.getElementById("myLink");
link.onclick = function(){
	window.event.returnValue = false;
    // window.event.cancelBubble = true; // ie取消事件冒泡
};

<input type="button" value="Click Me" onclick="alert(event.type)">

// 跨浏览器的事件对象
var EventUtil = {
	addHandler: function(element, type, handler){
		//省略的代码
	},
	getEvent: function(event){
		return event ? event : window.event;
	},
	getTarget: function(event){
		return event.target || event.srcElement;
	},
	preventDefault: function(event){
		if (event.preventDefault){
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	removeHandler: function(element, type, handler){
		//省略的代码
	},
	stopPropagation: function(event){
    	if (event.stopPropagation){
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}
};

btn.onclick = function(event){
	event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
};

// load事件
var image = document.getElementById("myImage");
EventUtil.addHandler(image, "load", function(event){
	event = EventUtil.getEvent(event);
	alert(EventUtil.getTarget(event).src);
});

// 创建新的img
EventUtil.addHandler(window, "load", function(){
var image = document.createElement("img");
EventUtil.addHandler(image, "load", function(event){
event = EventUtil.getEvent(event);
alert(EventUtil.getTarget(event).src);
});
document.body.appendChild(image);
image.src = "smile.gif"; // 在事件之后
});

var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event){
	event = EventUtil.getEvent(event);
	var pageX = event.pageX,
	pageY = event.pageY;
	if (pageX === undefined){
		pageX = event.clientX + (document.body.scrollLeft ||
		document.documentElement.scrollLeft);
	}
	if (pageY === undefined){
		pageY = event.clientY + (document.body.scrollTop ||
		document.documentElement.scrollTop);
	}
	alert("Page coordinates: " + pageX + "," + pageY);
});

// contextmenu事件
EventUtil.addHandler(window, "load", function(event){
	var div = document.getElementById("myDiv");
	EventUtil.addHandler(div, "contextmenu", function(event){
		event = EventUtil.getEvent(event);
		EventUtil.preventDefault(event);
		var menu = document.getElementById("myMenu");
		menu.style.left = event.clientX + "px";
		menu.style.top = event.clientY + "px";
		menu.style.visibility = "visible";
	});
	EventUtil.addHandler(document, "click", function(event){
		document.getElementById("myMenu").style.visibility = "hidden";
	});
});

// beforeunload事件
EventUtil.addHandler(window, "beforeunload", function(event){
	event = EventUtil.getEvent(event);
	var message = "I'm really going to miss you if you go.";
	event.returnValue = message;
	return message;
});

// JS的readystatechange
EventUtil.addHandler(window, "load", function(){
var script = document.createElement("script");
EventUtil.addHandler(script, "readystatechange", function(event){
event = EventUtil.getEvent(event);
var target = EventUtil.getTarget(event);
if (target.readyState == "loaded" || target.readyState == "complete"){
EventUtil.removeHandler(target, "readystatechange", arguments. callee);
alert("Script Loaded");
}
});
script.src = "example.js";
document.body.appendChild(script);
});

// pageshow事件演示
(function(){
	var showCount = 0;
	EventUtil.addHandler(window, "load", function(){
		alert("Load fired");
	});
	EventUtil.addHandler(window, "pageshow", function(){
			showCount++;
			alert("Show has been fired " + showCount +
			" times. Persisted? " + event.persisted);
	});
})();

// 跟踪用户对屏幕的触摸操作
function handleTouchEvent(event){
//只跟踪一次触摸
if (event.touches.length == 1){
var output = document.getElementById("output");
switch(event.type){
case "touchstart":
output.innerHTML = "Touch started (" + event.touches[0].clientX +
"," + event.touches[0].clientY + ")";
break;
case "touchend":
output.innerHTML += "<br>Touch ended (" +
event.changedTouches[0].clientX + "," +
event.changedTouches[0].clientY + ")";
break;
case "touchmove":
event.preventDefault(); //阻止滚动
output.innerHTML += "<br>Touch moved (" +
event.changedTouches[0].clientX + "," +
event.changedTouches[0].clientY + ")";
break;
}
}
}
EventUtil.addHandler(document, "touchstart", handleTouchEvent);
EventUtil.addHandler(document, "touchend", handleTouchEvent);
EventUtil.addHandler(document, "touchmove", handleTouchEvent);

// 事件委托
var list = document.getElementById("myLinks");
EventUtil.addHandler(list, "click", function(event){
event = EventUtil.getEvent(event);
var target = EventUtil.getTarget(event);
switch(target.id){
case "doSomething":
document.title = "I changed the document's title";
break;
case "goSomewhere":
location.href = "http://www.wrox.com";
break;
case "sayHi":
alert("hi");
break;
}
});

// 可以像分派其他事件一样在 DOM 中分派创建的自定义事件对象
var div = document.getElementById("myDiv"),
event;
EventUtil.addHandler(div, "myevent", function(event){
alert("DIV: " + event.detail);
});
EventUtil.addHandler(document, "myevent", function(event){
alert("DOCUMENT: " + event.detail);
});
if (document.implementation.hasFeature("CustomEvents", "3.0")){
event = document.createEvent("CustomEvent");
event.initCustomEvent("myevent", true, false, "Hello world!");
div.dispatchEvent(event);
}
~~~

#### **ch14 表单脚本**



```
事实上， **重置表单的需求是很少见的**。
更常见的做法是提供一个取消按钮，让用户能够回到前一个页面，而不是不分青红皂白地重置表单中的所有值。
fieldset
textbox 选择部分文本 P422
过滤输入
屏蔽字符
操作剪贴板
自动切换焦点
HTML5的验证性API
禁止验证 novalidate
表单序列化
富文本编辑器
designMode
contenteditable
execCommand
富文本选区
富文本编辑器并不是一个表单字段
```


* 示例	

~~~
<!-- 通用提交按钮 -->
<input type="submit" value="Submit Form">

<!-- 自定义提交按钮 -->
<button type="submit">Submit Form</button>

<!-- 图像按钮 -->
<input type="image" src="graphic.gif">

<!-- 通用重置按钮 -->
<input type="reset" value="Reset Form">

<!-- 自定义重置按钮 -->
<button type="reset">Reset Form</button>

<form method="post" id="myForm">
<ul>
<li><input type="radio" name="color" value="red">Red</li>
<li><input type="radio" name="color" value="green">Green</li>
<li><input type="radio" name="color" value="blue">Blue</li>
</ul>
</form>

var form = document.getElementById("myForm");
var colorFields = form.elements["color"];
alert(colorFields.length); //3
var firstColorField = colorFields[0];
var firstFormField = form.elements[0];
alert(firstColorField === firstFormField); //true

//避免多次提交表单
EventUtil.addHandler(form, "submit", function(event){
	event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget(event);
	var btn = target.elements["submit-btn"];
	btn.disabled = true; //禁用它
});

// 早期开发实现readonly
document.forms[0].elements[0].blur();

// 读取或设置文本框的值，不建议使用标准的 DOM 方法
var textbox = document.forms[0].elements["textbox1"];
alert(textbox.value);
textbox.value = "Some new value";

// 屏蔽字符
EventUtil.addHandler(textbox, "keypress", function(event){
	event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget(event);
	var charCode = EventUtil.getCharCode(event);
	if (!/\d/.test(String.fromCharCode(charCode)) 
    	&& charCode > 9 
        && !event.ctrlKey){ // 考虑到ctrl + v等
			EventUtil.preventDefault(event);
	}
});

// 富文本选取实现高亮
var range = frames["richedit"].document.selection.createRange();
range.pasteHTML("<span style=\"background-color:yellow\"> " + 			range.htmlText + "</span>");

// 确保恰好在提交表单之前填充 "comments" 字段
EventUtil.addHandler(form, "submit", function(event){
	event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget(event);
	target.elements["comments"].value =
			document.getElementById("richedit").innerHTML;
});
~~~
