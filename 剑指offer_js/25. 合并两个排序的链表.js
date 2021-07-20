// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

//    4
// /   \
// 7     2
// / \   / \
// 9   6 3   1
// 示例1：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 使用递归实现
 var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
};