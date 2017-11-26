/**
 * 数据结构 - 列表
 */
function List() {
   this.listSize = 0;
   this.pos = 0;
   this.dataStore = [];
   this.clear = clear;
   this.find = find;
   this.toString = toString;
   this.insert = insert;
   this.append = append;
   this.remove = remove;
   this.front = front;
   this.end = end;
   this.prev = prev;
   this.next = next;
   this.length = length;
   this.currPos = currPos;
   this.moveTo = moveTo;
   this.getElement = getElement;
}

function length() {
   return this.listSize;
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

/**
 * 测试list
 */



// var names = new List();
// names.append("Cynthia");
// names.append("Raymond");
// names.append("Barbara");
// console.log(names.toString());
// names.remove("Raymond");
// console.log(names.toString());


var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
console.log(names.getElement()); // 显示 Clayton
names.next();
console.log(names.getElement()); // 显示 Raymond

names.next();
names.next();
names.prev();
console.log(names.getElement()); // 显示 Cynthia

// 输出结果
// Clayton
// Raymond
// Cynthia

console.log(names.front());
console.log(names.next());
console.log(names.length());

// for(names.front(); names.currPos() < names.length(); names.next()) {
// console.log(names.getElement());
// }
