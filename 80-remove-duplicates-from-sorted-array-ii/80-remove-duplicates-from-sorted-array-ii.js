/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let seen = {}
    let lastUsed = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (seen[nums[i]] >= 2) {
            continue
        } else {
            nums[lastUsed++] = nums[i]
            if (seen[nums[i]] != null) {
                seen[nums[i]] += 1
            } else {
                seen[nums[i]] = 1
            } 
        }
        
    }
    
    return lastUsed
};