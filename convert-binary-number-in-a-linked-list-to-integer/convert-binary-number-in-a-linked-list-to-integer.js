/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    if (head.val === 1 && !head.next) return 1
    
    let current = head
    let array = []
    while (current) {
        array.push(current.val)
        current = current.next
    }
    
    let n = array.length - 1
    let i = 0
    while (n >= 0) {
        array[i] = array[i] * (2 ** n)
        i++, n--
    }
    let sum = 0
    i = 0
    while (i < array.length) {
        sum += array[i]
        i++
    }
    return sum
};
