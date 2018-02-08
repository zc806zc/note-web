/**
 * 队列
 */
class Queue {

  constructor(items) {
    this.items = items || []
  }

  enqueue(element) {
    this.items.push(element)
  }

  dequeue() {
    return this.items.shift()
  }

  front() {
    return this.items[0]
  }

  clear() {
    this.items = []
  }

  get size() {
    return this.items.length
  }

  get isEmpty() {
    return !this.items.length
  }

  print() {
    console.log(this.items.toString())
  }
}

module.exports = Queue;

// const queue = new Queue()
// console.log(queue.isEmpty) // true
//
// queue.enqueue('John')
// queue.enqueue('Jack')
// queue.enqueue('Camila')
// console.log(queue.size) // 3
// console.log(queue.isEmpty) // false
// queue.dequeue()
// queue.dequeue()
// queue.print() // 'Camila'


var Queue = require('./queueES') // 导入

const queue = new Queue()
console.log(queue.isEmpty) // true

queue.enqueue('John')
queue.enqueue('Jack')
queue.enqueue('Camila')
console.log(queue.size) // 3s
console.log(queue.isEmpty) // false
queue.dequeue()
queue.dequeue()
queue.print() // 'Camila'


/**
 * 优先队列
 * 例如医院的急诊科。医生会优先处理病情比较严重的患者
 */
class PriorityQueue {

  constructor() {
    this.items = []
  }

  enqueue(element, priority) {
    const queueElement = {
      element,
      priority
    }
    if (this.isEmpty) {
      this.items.push(queueElement)
    } else {
      const preIndex = this.items.findIndex((item) => queueElement.priority < item.priority)
      if (preIndex > -1) {
        this.items.splice(preIndex, 0, queueElement)
      } else {
        this.items.push(queueElement)
      }
    }
  }

  dequeue() {
    return this.items.shift()
  }

  front() {
    return this.items[0]
  }

  clear() {
    this.items = []
  }

  get size() {
    return this.items.length
  }

  get isEmpty() {
    return !this.items.length
  }

  print() {
    console.log(this.items)
  }
}

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue('John', 2)
priorityQueue.enqueue('Jack', 1)
priorityQueue.enqueue('Camila', 1)
priorityQueue.enqueue('Surmon', 3)
priorityQueue.enqueue('skyRover', 2)
priorityQueue.enqueue('司马萌', 1)
priorityQueue.print()

console.log(priorityQueue.isEmpty, priorityQueue.size) // false 6
