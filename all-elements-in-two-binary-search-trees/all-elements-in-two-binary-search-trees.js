/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let one = dfs(root1)
        two = dfs(root2)
        i = 0
        j = 0
        res = []

    while (i < one.length && j < two.length) {
        if (one[i] < two[j]) {
            res.push(one[i])
            i++

        } else {
            res.push(two[j])
            j++
        }
    }

    while (i < one.length) {
        res.push(one[i])
        i++
    }
        
    while (j < two.length) {
        res.push(two[j])
        j++
    }

    return res
};

var dfs = function(root) {
    let res = []
    let current = root
    var traverse = function(node) {
        
        node && node.left && traverse(node.left)
        
        node && res.push(node.val)
        
        node && node.right && traverse(node.right)
    }
    traverse(current)
    return res
}