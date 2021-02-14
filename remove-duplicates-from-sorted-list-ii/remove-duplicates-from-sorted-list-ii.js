/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head
    let temp = new ListNode()
    let newNode = temp
    let value
    
    while (current) {
        if (current.next && current.val === current.next.val) {
            value = current.val
            while (current && current.val === value) {
                current = current.next
                if (!current) {
                    temp.next = current
                }
            }
            continue
        }
        
        temp.next = current
        temp = temp.next
        current = current.next

    }
    
    return newNode.next
};