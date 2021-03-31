/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = []
    if (!root) return []
    let queue = [root]

    while (queue.length) {
        let level = []
        let n = queue.length
        for (let i = 0; i < n; i++) {
            let node = queue.shift()
            level.push(node.val)

            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(level)
    }
    
    return res

};