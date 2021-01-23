/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true
    if (!p && q || !q && p) return false
    
    let pVisited = bfs(p)
    let qVisited = bfs(q)
    console.log(pVisited, qVisited)
    for (let i = 0; i < pVisited.length; i++) {
        if (pVisited[i] !== qVisited[i]) {
            return false
        }
    }
    return true
};
​
var bfs = function(root) {
    let queue = []
    let visited = []
