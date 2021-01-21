/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1 = ""
    while (l1) {
        num1 = l1.val + num1
        l1 = l1.next
    }
    
    let num2 = ""
    while (l2) {
        num2 = l2.val + num2
        l2 = l2.next
    }
    // console.log(num1, num2)
    let num = (BigInt(num1, 10) + BigInt(num2, 10)).toString()
    let i = num.length - 1
    let newList = new ListNode(null)
    let returnList = newList
    while (i >= 0) {
        let newNode = new ListNode(num[i])
        newList.next = newNode
        newList = newList.next
        i--
    }
    return returnList.next
};
