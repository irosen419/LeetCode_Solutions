/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(array) {
    // can you have negative heights?
    // what is the min/max length of the array?
    // can we assume that water will be trapped only after we have a first official 'height'?
    
    // first find the max height and index of that height
        // water will pool to the left
        // water will pool to the right
    
    // calc current max height as you go 0 --> max index
        // current level of water += diff b/w current max and current level
    
    // repeat from height.length - 1 --> max index
    
    // edge cases
//     if (height.length < 3) return 0
    
//     let maxHeight = 0, maxIndex = 0
    
//     for (let i = 0; i < height.length; i++) {
//         if (height[i] > maxHeight) {
//             maxHeight = height[i]
//             maxIndex = i
//         }
//     }

//     let total = 0, currMax = height[0]
    
//     for (let i = 0; i < maxIndex; i++) {
//         if (currMax < height[i]) {
//             currMax = height[i]
//         }
//         total += currMax - height[i]
//     }

//     currMax = height[height.length - 1]
    
//     for (let i = height.length - 1; i > maxIndex; i--) {
//         if (currMax < height[i]) {
//             currMax = height[i]
//         }
//         total += currMax - height[i]
//     }
    
//     return total

    if (array.length < 3) return 0
    
    let l = 0
    let r = array.length - 1
    
    let total = 0
    let wallHeight = 0 
    
    while(l < r) {
        let left = array[l]
        let right = array[r]
        
        if (left > wallHeight && right > wallHeight) {
            wallHeight = Math.min(left, right)
        }
        
        if (left <= wallHeight) {
            total += wallHeight - left
            l++
            continue
        }
        
        if (right <= wallHeight) {
            total += wallHeight - right
            r--
        }

    }
    
    return total
};