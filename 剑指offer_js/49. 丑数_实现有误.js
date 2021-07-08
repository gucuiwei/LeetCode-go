// 我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

// 输入: n = 10
// 输出: 12
// 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。

// 采用最小堆实现
/**
 * @param {number} n
 * @return {number}
 */
 let test = 10
 var nthUglyNumber = function(n) {
     const factors = [2, 3, 5];
     const seen = new Set();
     const heap = new MinHeap();
     seen.add(1);
     heap.insert(1);
     let ugly = 0;
     for (let i = 0; i < n; i++) {
         ugly = heap.pop();
         for (const factor of factors) {
             const next = ugly * factor;
             if (!seen.has(next)) {
                 seen.add(next);
                 heap.insert(next);
             }
         }
         
     }
     return ugly;
 };
 
 // 最小堆
 class MinHeap {
     constructor() {
         this.heap = [];
     }
 
     getParentIndex(i) {
         return (i - 1) >> 1;
     }
 
     getLeftIndex(i) {
         return i * 2 + 1;
     }
 
     getRightIndex(i) {
         return i * 2 + 2;
     }
 
     shiftUp(index) {
         if(index === 0) { return; }
         const parentIndex = this.getParentIndex(index);
         if(this.heap[parentIndex] > this.heap[index]){
             this.swap(parentIndex, index);
             this.shiftUp(parentIndex);
         }  
     }
 
     swap(i1, i2) {
         const temp = this.heap[i1];
         this.heap[i1]= this.heap[i2];
         this.heap[i2] = temp;
     }
 
     insert(value) {
         this.heap.push(value);
         this.shiftUp(this.heap.length - 1);
     }
 
     pop() {
         this.heap[0] = this.heap.pop();
         this.shiftDown(0);
         return this.heap[0];
     }
 
     shiftDown(index) {
         const leftIndex = this.getLeftIndex(index);
         const rightIndex = this.getRightIndex(index);
         if (this.heap[leftIndex] < this.heap[index]) {
             this.swap(leftIndex, index);
             this.shiftDown(leftIndex);
         }
         if (this.heap[rightIndex] < this.heap[index]){
             this.swap(rightIndex, index);
             this.shiftDown(rightIndex);
         }
     }
 
     peek() {
         return this.heap[0];
     }
 
     size() {
         return this.heap.length;
     }
 }
 
 console.log(nthUglyNumber(test))