/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var constructMaximumBinaryTree = function(nums) {
    if (!nums.length) {
        return null
    }
    
    if (nums.length === 1) {
        return new TreeNode(nums[0])
    }
    
    let maxIndex
    let maxNum = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxNum) {
            maxNum = nums[i]
            maxIndex = i
        }
    }
    
    let rootNode = new TreeNode(maxNum)
    
    rootNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex))
    rootNode.right = constructMaximumBinaryTree(nums.slice(maxIndex+1))

    return rootNode
};

// console.log(myTree)
