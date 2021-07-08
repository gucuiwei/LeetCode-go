// 节点类
class LinkedNode {
    constructor(value) {
        this.value = value
        // 用于存储下一个节点的引用
        this.next = null
    }
}

// 链表类
class LinkedList {
    constructor() {
        this.count = 0
        this.head = null
    }

    // 添加节点 尾部
    addAtTail(value) {
        // 创建新节点
        const node = new LinkedNode(value)
        // 检测链表是否存在数据
        if(this.count === 0) {
            this.head = node
        } else {
            // 找到链表尾部数据，将最后一个节点的next设置为node
            let cur = this.head
            while (cur.next != null) {
                cur = cur.next
            }
            cur.next = node
        }
        this.count++
    }
    // 添加节点 头
    addAtHead (value) {
        const node = new LinkedNode(value)
        if ( this.count === 0) {
            this.head = node
        } else {
            // 将node添加到head前面
            node.next = this.head
            this.head = node
        }
        this.count++
    }
    // 获取节点
    get(index) {
        if(this.count === 0 || index < 0|| index >= this.count) {
            return
        }
        // 迭代链表找到对应的节点
        let current = this.head
        for(let i = 0; i< index; i++) {
            current = current.next
        }
        return current
    }

    // 添加节点根据索引
    addAtIndex(value, index) {
        if(this.count === 0 || index >= this.count) {
            return
        }
        if(index <=0) {
            return this.addAtHead(value)
        }
        // 正常处理
        // 迭代链表找到对应的节点

        const prev = this.get(index - 1)

        const next = prev.next // 原先的值

        const node = new LinkedNode(value)
        prev.next = node
        node.next = next
    }

    // 删除根据索引
    removeAtIndex (index) {
        if(this.count === 0 || index < 0|| index >= this.count) {
            return
        }
        if (index === 0) {
            this.head = this.head.next
        } else {
            let  prev = this.get(index-1)
            prev.next = prev.next.next
        }
        this.count--
    }

}

const a = new LinkedList()

a.addAtTail('a')
a.addAtTail('b')
a.addAtTail('c')
console.log(a)
a.removeAtIndex(2)

console.log(a)

// 链表的多种形式