/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let root = new TreeNode(preorder[0])
    
    for (let i = 1; i < preorder.length; i++) {
        let node = new TreeNode(preorder[i])
        insert(root, node)
    }
    
    return root
};

var insert = function(root, node) {
    if (node.val < root.val) {
        if (!root.left) {
            root.left = node
        } else {
            insert(root.left, node)
        }
    } else {
        if (!root.right) {
            root.right = node
        } else {
            insert(root.right, node)
        }
    }
}