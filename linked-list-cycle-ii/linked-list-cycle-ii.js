/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let current = head
    let gotcha = 10**5 + 1
    while (current) {
        if (current.val === gotcha) {
            return current
        }
        current.val = gotcha
        current = current.next
    }
    
    return null
};