/**
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
示例 1：
输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
示例 2：
输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
 */


class CQueue {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }
    appendTail(value) {
        this.stack1.push(value);
    }
    deleteHead() {
        if (this.isEmpty(this.stack2)) {
            while (!this.isEmpty(this.stack1)) {
                this.stack2.push(this.stack1.pop());
            }
        } 
        if (this.isEmpty(this.stack2)) {
            return -1;
        } else {
            let deleteItem = this.stack2.pop();
            return deleteItem;
        }
    }
    isEmpty(val) {
        return val.length === 0
    }
}

const test = new CQueue()
test.appendTail('3')
test.deleteHead()
test.deleteHead()
test.deleteHead()
console.log(test)
