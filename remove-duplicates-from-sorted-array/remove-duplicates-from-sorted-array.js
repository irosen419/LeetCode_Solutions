/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
        }
    }
    
    return j + 1
};
