/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let current = head
    let temp
    while (current && current.next) {
        temp = current.next.val
        current.next.val = current.val
        current.val = temp
        current = current.next.next
    }
    return head
};
