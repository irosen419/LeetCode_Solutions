/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length == 1) return 0
    
    let slow = 0
    let fast = 0
    let nextPossibleMax = 0
    let jumps = 0
    
    while (fast < nums.length - 1) {
        while (slow <= fast) {
            nextPossibleMax = Math.max(nextPossibleMax, slow + nums[slow])
            slow++
        }
        
        fast = nextPossibleMax
        jumps++
    }
    
    return jumps
};