// 队列实现

// class Queue {
//     constructor() {
//         this.queue = []
//         this.count = 0
//     }
//     // 入队方法
//     enQueue(item) {
//         this.queue[this.count++] = item
//     }
//     // 出队
//     deQueue() {
//         if (this.isEmpty()) {
//             return
//         }
//         // 删除队列第一个元素
//         this.count--
//         return this.queue.shift()
        
//     }
//     isEmpty() {
//         return this.count === 0
//     }
//     top() {
//         if (this.isEmpty()) {
//             return
//         }
//         return this.queue[0]
//     }
//     size() {
//         return this.count
//     }
//     clear() {
//         this.queue = []
//         this.count = 0
//     }

// }
// const test= new Queue()
// test.enQueue('1')
// test.enQueue('2')
// test.deQueue()
// console.log(test)

// 队列
// class Query {
//     constructor() {
//         this.query = {}
//         this.count = 0
//         // 用于记录队首的键
//         this.head = 0
//     }
//     enQueue(item) {
//         this.query[history.count++] = item
//     }
//     // 出栈方法
//     deQueue() {
//         if(this.isEmpty()) {
//             return
//         }
//         const headData = this.query[this.head]
//         delete this.query[this.head]
//         this.head++
//         this.count--
//         return headData
//     }
//     isEmpty () {
//         return this.count === 0
//     }
//     clear () {
//         this.query = {}
//         this.count = 0
//         this.head = 0
//     }
// }

// class Dequeue {
//     constructor() {
//         this.queue = {}
//         this.count = 0
//         this.head = 0
//     }
//     // 队首添加
//     addFont (item) {
//         this.queue[--this.head] = item
//     }
    
//     // 队尾添加
//     addBack(item) {
//         this.queue[this.count++] = item
//     }

//     // 对首删除
//     removeFront() {
//         if (this.isEmpty()) {
//             return
//         }
//         const headData = this.queue[this.head]
//         delete this.queue[this.head++]
//         return headData
//     }
//     // 队尾删除
//     removeBack () {
//         if (this.isEmpty()) {
//             return
//         }
//         const backData = this.queue[this.count - 1]
//         delete this.queue[--this.count]
//         return backData
//     }
//     // 获取队首值
//     frontTop () {
//         if(this.isEmpty()) {
//             return
//         }
//         return this.queue[this.head]
//     }
//     // 获取队尾值
//     backTop() {
//         if(this.isEmpty()) {
//             return
//         }
//         return this.queue[this.count - 1]
//     }
//     isEmpty () {
//         return this.szie() === 0
//     }
//     // 
//     szie() {
//         return this.count - this.head
//     }
// }

// const deq = new Dequeue()
// deq.addBack('a')
// deq.addBack('b')
// deq.addBack('c')
// deq.addFont('x')
// deq.addFont('y')
// deq.addFont('z')
// deq.removeBack()
// // deq.removeFront()
// console.log(deq)