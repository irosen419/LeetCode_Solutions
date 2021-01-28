/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let queue1 = [original]
    let queue2 = [cloned]
    let node1
    let node2
    
    console.log(target)
    while (queue1.length) {
        node1 = queue1.shift()
        node2 = queue2.shift()
        if (node1 === target) return node2
        
        if (node1.left) {
            queue1.push(node1.left)
            queue2.push(node2.left)
        }
        
        if (node2.right) {
            queue1.push(node1.right)
            queue2.push(node2.right)
        }
    }
};