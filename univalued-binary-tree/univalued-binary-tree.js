/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if (!root.left && !root.right) return true
    let value = root.val
    let queue = [root]
    let node
    
    while(queue.length) {
        node = queue.shift()
        if (node && node.val !== value) {
            return false
        }
        
        if (node.left) {
            queue.push(node.left)
        }
        
        if (node.right) {
            queue.push(node.right)
        }
    }
    
