/**
 * 单列表 ===================
 * 原始方法,用函数模拟对象
 */
function List() {
  // 常量
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];

  // 扩展方法 =================
  // 获取参数
  this.toString = toString;
  this.length = length;
  this.currPos = currPos;
  this.getElement = getElement;

  // 增删改
  this.clear = clear;
  this.find = find;
  this.insert = insert;
  this.append = append;
  this.remove = remove;

  // 移动
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.moveTo = moveTo;

}

function length() {
  return this.listSize; // 调用函数的对象是list, this指向list()
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
     if (this.dataStore[i] == element) {
        return i;
     }
  }
  return -1;
}


function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
     this.dataStore.splice(foundAt,1);
     --this.listSize;
     return true;
  }
  return false;
}

function toString() {
   return this.dataStore;
}

function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
     this.dataStore.splice(insertPos+1, 0, element);
     ++this.listSize;
     return true;
  }
  return false;
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
     if (this.dataStore[i] == element) {
        return true;
     }
  }
  return false;
}

function front() {
  this.pos = 0;
}
function end() {
  this.pos = this.listSize-1;
}
function prev() {
  if (this.pos > 0) {
     --this.pos;
  }
}
function next() {
  if (this.pos < this.listSize-1) {
     ++this.pos;
  }
}
function currPos() {
  return this.pos;
}
function moveTo(position) {
  this.pos = position;
}
function getElement() {
  return this.dataStore[this.pos];
}

// 测试 ===============
var names = new List();

// 添加数据
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
console.log(names.pos); // 0
names.remove("Bryan");
console.log(names.length()); // 5
names.next();
console.log(names.getElement()); // Raymond



/**
* 创建链表
* 单链表的实现
* http://www.cnblogs.com/webARM/p/5425190.html
*/
function CreateLinkNode(data, pre, next) {
 this.data = data;
 this.preNode = pre;

 // 存在前一个结点，
 // 则前一个结点的后继结点为当前结点
 if (this.preNode) {
   pre.nextNode = this;
 }
 this.nextNode = next;
}

// 从模一个节点开始打印链表
CreateLinkNode.prototype.display = function() {
 // 存在后继结点则递归
 if (this.nextNode) {
   return this.data.name + this.nextNode.display();
 }

 return this.data.name;
}

// 从某一个节点的后面开始插入一个节点
CreateLinkNode.prototype.insertNode = function(node) {
 // 该结点已经有后继结点
 // 并且后继结点的上一个结点并不为空
 if (this.nextNode && this.nextNode.preNode) {
   this.nextNode.preNode = node;
 }

 node.nextNode = this.nextNode; // 这个结点的后继结点换成该节点原来的后继结点
 node.preNode = this;
 this.nextNode = node;
}

// 删除某一个节点
CreateLinkNode.prototype.removeNode = function() {
 this.nextNode.preNode = this.preNode;  // 后继结点的前结点
 this.preNode.nextNode = this.nextNode;
}

// 反序链表
CreateLinkNode.prototype.revertNode = function() {
 var tmp = null; //{nextNode: null, preNode: null};
 function revert() {
   if (!this.nextNode) {
     this.preNode = null;
     this.nextNode = tmp;
     return this;
   } else {
     this.preNode = this.nextNode;
     this.nextNode = tmp;
     tmp = this;
     return revert.call(this.preNode);
   }
 }

 return revert.call(this);
}

// 测试 ===========================
// 创建节点
var ln1 = new CreateLinkNode({"name": "1"}, null, null);
var ln2 = new CreateLinkNode({"name": "2"}, ln1, null);
var ln3 = new CreateLinkNode({"name": "3"}, ln2, null);
var ln4 = new CreateLinkNode({"name": "4"}, ln3, null);
var ln5 = new CreateLinkNode({"name": "5"}, null, null);

var lHead = ln1; // 加第一个节点

ln4.insertNode(ln5); //12345
ln3.removeNode();    // 1245
ln2.insertNode(ln3); // 12345
lHead = lHead.revertNode(); // 54321
console.log(lHead.display());
