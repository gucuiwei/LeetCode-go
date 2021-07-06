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

class Query {
    constructor() {
        this.query = {}
        this.count = 0
        // 用于记录队首的键
        this.head = 0
    }
    enQueue(item) {
        this.query[history.count++] = item
    }
    // 出栈方法
    deQueue() {
        if(this.isEmpty()) {
            return
        }
        const headData = this.query[this.head]
        delete this.query[this.head]
        this.head++
        this.count--
        return headData
    }
    isEmpty () {
        return this.count === 0
    }
    clear () {
        this.query = {}
        this.count = 0
        this.head = 0
    }
}

const q = new Query() 

