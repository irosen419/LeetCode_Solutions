/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0
    let j = height.length - 1
    let total = 0
    
    while (i < j) {
        let min
        if (height[i] < height[j]) {
            min = height[i]
            total = Math.max(total, min * (j - i))
            i++
        } else {
            min = height[j]
            total = Math.max(total, min * (j - i))
            j--
        }
    }
    
    return total
};