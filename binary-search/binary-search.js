/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

class Node {
    constructor(val, index) {
        this.val = val
        this.index = index
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val, i) {
        // Create a new node
        let newNode = new Node(val, i)
        // Starting at the root...
        // Check if there is a root, if not - the root now becomes that new node!
        if (!this.root) {
            this.root = newNode
            // If there is a root, check if the value of the new node is greater than or less than the value of the root
        } else {
            let current = this.root
            while (true) {
                // If the value is already in the tree, return undefined
                if (val === current.val) {
                    return undefined
                }
                // If it is GREATER...
                if (newNode.val > current.val) {
                    // Check to see if there is a node to the right
                    // If there IS, move that node and repeat these steps
                    // If the IS NOT, add that node as the right property
                    if (!current.right) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                    // If it is LESS...
                } else if (newNode.val < current.val) {
                    // Check to see if there is a node to the left
                    // If there IS, move that node and repeat these steos
                    // If there is not, add that node as the left property
                    if (!current.left) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                }
            }
        }
    }

    find(val) {
        // Starting at the root...
        // Check if there is a root, if not - return false
        if (!this.root) {
            return false
        } else {
            // If there is a root, check if the value of the new node is the value we are looking foor
            // If it IS, we're done! Return true
            let current = this.root
            // If not, check to see if the value is greater than or less than the value of the root...
            while (current) {
                // If it is GREATER...
                if (val > current.val) {
                    // Check to see if there is a node to the right
                    // If there IS, move to that node and repeat these steps
                    current = current.right
                    // If it is LESS...
                } else if (val < current.val) {
                    // Check to see if there is a node to the left
                    // If there IS, move to that node and repeat these steps
                    // If there IS NOT, we're done searching! Return false
                    current = current.left
                } else {
                    return current.index
                }
            }
            return -1
        }
    }
}

var search = function(nums, target) {
    let myTree = new BinarySearchTree()
    let midpoint = Math.floor(nums.length / 2)
    let mid = nums[midpoint]
    myTree.insert(mid, midpoint)
    for (let i = 0; i < nums.length; i++) {
        myTree.insert(nums[i], i)
    }
    
    return myTree.find(target)
};