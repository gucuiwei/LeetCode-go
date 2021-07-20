/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
     /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 采用快慢指针实现
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const getKthFromEnd = function (head, k) {
    let fast, slow
    fast = slow = head
    while (k--) {
        // 快指针先走k步
        fast = fast.next
    }
    while (fast) {
        // 再一起走，知道快指针走到头
        fast = fast.next
        slow = slow.next
    }
    // 此时的慢指针指的就是倒数第k个
    return slow
}