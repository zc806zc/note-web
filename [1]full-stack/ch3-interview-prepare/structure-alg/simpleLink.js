// 单链表的实现
// http://www.cnblogs.com/webARM/p/5425190.html

// 创建链表
// 假装是个类
/**
 * 创建链表
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
// prototype扩展方法
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

// start
var ln1 = new CreateLinkNode({"name": "1"}, null, null);
var ln2 = new CreateLinkNode({"name": "2"}, ln1, null);
var ln3 = new CreateLinkNode({"name": "3"}, ln2, null);
var ln4 = new CreateLinkNode({"name": "4"}, ln3, null);
var ln5 = new CreateLinkNode({"name": "5"}, null, null);

var lHead = ln1; // 从头开始演示的

ln4.insertNode(ln5);
console.log(lHead.display()); //12345
ln3.removeNode();
console.log(lHead.display()); // 1245
ln2.insertNode(ln3);
console.log(lHead.display()); // 12345
lHead = lHead.revertNode();
console.log(lHead.display()); // 54321
