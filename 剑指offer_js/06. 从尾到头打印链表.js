// 输入：head = [1,3,2]
// 输出：[2,3,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 let test = [1,2,3]
 /**
  * @param {ListNode} head
  * @return {number[]}
  */
 //  unshift js向头部添加元素
  var reversePrint = function(head) {
     const array = [];
     while(head){
         array.unshift(head.val);
         head = head.next;
     }
     return array;
 };
 console.log(reversePrint(test))