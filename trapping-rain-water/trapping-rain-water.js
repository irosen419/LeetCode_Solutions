/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // edge case: if there are no heights, return 0
    if (!height.length) return 0
    
    // initialize variables sum, wallHeight, maxHeight, heightIndex
    let sum = 0
    let wallHeight = 0
    let maxHeight = height[0]
    let heightIndex = 0
    
    // find the index of the highest height in height array
    for (let i = 0; i < height.length; i++) {
        if (height[i] > maxHeight) {
            maxHeight = height[i]
            heightIndex = i
        }
    }
    
    // loop over heights until the highest index
    // if current height is taller than wallHeight, wallHeight = current height
    // at each index, find the difference between the current height and the wallHeight
    for (let i = 0; i <= heightIndex; i++) {
        if (height[i] > wallHeight) {
            wallHeight = height[i]
        } else {
            sum += wallHeight - height[i]
        }
    }
    
    // reset wallHeight
    // repeat above loop in opposite direction until you reach the highest index
    wallHeight = 0
    for (let i = height.length - 1; i >= heightIndex; i--) {
        if (height[i] > wallHeight) {
            wallHeight = height[i]
        } else {
            sum += wallHeight - height[i]
        }
    }

    return sum
};