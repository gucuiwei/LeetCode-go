// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
/**
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
 */

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
        }
        // stack 出栈
        delete this.StackA[--this.countA]
    }
}