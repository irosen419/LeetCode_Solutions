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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let result
    let counter = 0
    
    const findSmallest = (node) => {
        if (node) {
            findSmallest(node.left)
            
            if (counter < k) {
                result = node.val
                counter++
                findSmallest(node.right)
            }
        }
    }
    
    findSmallest(root)
    
    return result
};