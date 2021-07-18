class Stack {

    constructor() {

        // 存储数据

        this.items = [];

    }

    push(item) {

        // 入栈

        this.items.push(item);

    }

    pop() {

        // 出栈

        return this.items.pop();

    }

    top() {

        // 获取栈顶元素

        return this.items[this.items.length - 1];

    }

    clear() {

        // 清空栈

        this.items = [];

    }

    size() {

        // 获取栈的大小

        return this.items.length;

    }

    isEmpty() {

        // 判断栈是否为空

        return this.items.length === 0;

    }

}