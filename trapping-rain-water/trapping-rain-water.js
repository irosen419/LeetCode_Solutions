/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (!height.length) return 0
    let sum = 0
    let wallHeight = 0
    let maxHeight = height.indexOf(Math.max(...height))
    for (let i = 0; i <= maxHeight; i++) {
        if (height[i] > wallHeight) {
            wallHeight = height[i]
        } else {
            sum += wallHeight - height[i]
        }
    }
    wallHeight = 0
    for (let i = height.length - 1; i >= maxHeight; i--) {
        if (height[i] > wallHeight) {
            wallHeight = height[i]
        } else {
            sum += wallHeight - height[i]
        }
    }
    
    return sum
};