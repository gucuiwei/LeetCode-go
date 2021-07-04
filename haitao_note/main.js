// js刷题技巧
/**
 * js栈
 */
// push pop
let array = []
array.push('1') // 入栈 [1]
array.push('2') // 入栈 [1,2]
array.pop() //出栈 [1]

// 实现栈
class Stack {
    constructor() {
        // 存储栈的数据
        this.data = []
        // 记录栈的数据个数
        this.count = 0
    }
    // push() 入栈
    push(item) {
        // 方式一
        // this.data.push(item)
        // 方式二
        // this.data[this.data.length] = item
        // 方式三
        this.data[this.count] = item
        this.count++
    }
    // 出栈
    pop() {
        if(this.isEmpty()) {
            console.log('栈为空')
            return
        }
        // 方式一
        // this.data.pop()
        // 方式二
        // this.data.splice(this.count-1,1)
        // this.count--
        // 方式三
        const temp = this.data[this.count -1]
        delete this.data[--this.count]
        return temp
    }
    isEmpty () {
        return this.count === 0
    }
    // 获取栈顶值
    top () {
        if(this.isEmpty()) {
            console.log('栈为空')
            return
        }
        return this.data[this.count - 1]
    }
    // 获取元素个数
    size() {
        return this.count
    }
    clear() {
        this.data = []
        this.count = 0
    }
}

// 实现案例
const a = new Stack()
a.push('a')
a.push('b')
a.push('c')
a.pop()
a.top()
a.size()
a.clear()

class MinStack {
    constructor() {
        // stackA // 存储数据
        // stackB // 将数据降序存储 //获取栈最小值
        this.StackA = []
        this.StackB = []
        this.countA = 0
        this.countB = 0
    } 
    push(item) {
        // Stack 正常入栈
        this.StackA[this.countA++] = item
        // stackB 如果没有数据 直接入栈
        // 如果item 的值小于 stackB 的最小值 入栈
        if(this.countB === 0 || item <= this.min()) {
            this.StackB[this.countB++] = item
        }
    }
    // 最小值函数
    min() {
        return this.StackB[this.countB -1 ]
    }
    // 获取栈顶值
    top() {
        return this.StackA[this.countA -1]
    }
    // 出栈
    pop() {
        // 先进性stackB检测
        // 如果stackA的栈顶值 === stackB的栈顶值 stackB出栈
        if(this.top() === this.min()) {
            delete this.StackB[--this.countB]
            return
        }
        // stack 出栈
        delete this.StackA[--this.countA]
    }
    isEmptyA() {
        return this.countA === 0
    }
    isEmptyB() {
        return this.countB === 0
    }
}

const m = new MinStack() 

m.push(4)
m.push(3)
m.push(-1)
m.min()
console.log(m.min())

console.log(m)
