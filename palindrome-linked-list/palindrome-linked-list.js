/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null || head.nexr === null) {
        return true
    }
    
    let curr = head
    let slow = head
    let fast = head
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    let stack = []
    while (slow !== null) {
        stack.push(slow.val)
        slow = slow.next
    }
    
    for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i] !== curr.val) {
            return false
        }
        curr = curr.next
    }
    
    return true
};
