/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length == 1) {
        return nums[0] === target ? 0 : -1
    }
    let i = 0
    let j = nums.length - 1
    let midpoint
    
    while (i <= j) {
        midpoint = Math.floor((i+j) / 2)
        if (target === nums[midpoint]) {
            return midpoint
        }
        if (target < nums[midpoint]) {
            j = midpoint - 1
        } else if (target > nums[midpoint]) {
            i = midpoint + 1
        }
        
    }
    
    return -1
};
