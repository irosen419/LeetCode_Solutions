/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let current = node
    while (current.next) {
        current.val = current.next.val
        if (!current.next.next) {
            current.next = null
            break;
        }
        current = current.next
    }
};