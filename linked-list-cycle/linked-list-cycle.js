/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let current = head
    let gotcha = 10**5 + 1
    
    while (current) {
        if (current.val === gotcha) return true
        
        current.val = gotcha
        current = current.next
    }
    
    return false
};