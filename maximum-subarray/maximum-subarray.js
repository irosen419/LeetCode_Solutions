/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSub = nums[0]
    let currentMax = maxSub
    
    for (let i = 1; i < nums.length; i++) {
        if (currentMax < 0) {
            currentMax = nums[i]
        } else {
            currentMax += nums[i]
        }
        
        if (currentMax > maxSub) {
            maxSub = currentMax
        }
    }
    
    return maxSub
};