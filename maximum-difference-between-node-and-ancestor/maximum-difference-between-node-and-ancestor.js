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
 * @return {number}
 */
var result = 0
var maxAncestorDiff = function(root) {
    if (!root) {
        return 0
    }
    result = 0
    maxDiff(root, root.val, root.val)
    return result
};

var maxDiff = function(node, maxVal, minVal) {
    if (!node) {
        return
    }
    let possibleRes = Math.max(Math.abs(maxVal - node.val), Math.abs(minVal - node.val))
    result = Math.max(possibleRes, result)
    maxVal = Math.max(maxVal, node.val)
    minVal = Math.min(minVal, node.val)
    maxDiff(node.left, maxVal, minVal)
    maxDiff(node.right, maxVal, minVal)
    return
}