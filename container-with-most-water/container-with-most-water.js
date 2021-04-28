/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height.length < 2) return 0
    if (height.length === 2) return Math.min(...height)
    
    let i = 0
    let j = height.length - 1
    let total = 0
    
    while (i <= j) {
        
        if (height[i] <= height[j]) {
            let min = Math.min(height[i], height[j])
            let area = min * (j - i)
            i++
            if (area >= total) {
                total = area
            }
        } else {
            let min = Math.min(height[i], height[j])
            let area = min * (j - i)
            j--
            if (area >= total) {
                total = area
            }
        }
    }
    
    return total
};