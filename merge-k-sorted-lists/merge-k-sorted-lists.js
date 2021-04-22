/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    let listsArr = []
    let maxLen = 0
    for (let i = 0; i < lists.length; i++) {
        let len = 0
        let current = lists[i]
        let list = []
        while(current) {
            len++
            list.push(current.val)
            current = current.next
        }
        maxLen = Math.max(maxLen, len)
        listsArr.push(list)
    }
    if (maxLen === 0) return new ListNode().next
    listsArr = listsArr.flat().sort((a, b) => a - b)

    let res = new ListNode(listsArr[0])
    let head = res
    for(let i = 1; i < listsArr.length; i++) {
        res.next = new ListNode(listsArr[i])
        res = res.next
    }
    return head
};