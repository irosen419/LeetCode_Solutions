/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (!nums.length) return 1
    // if (nums.length === 1 && nums[0] <= 0) return 1
    let placeholder = []
    for (const num of nums) {
        if (num > 0) {
            placeholder[num] = num
        }
    }
    
    for (let i = 1; i < placeholder.length; i++) {

        if (placeholder[i] == undefined) return i
    }

    return placeholder.length ? placeholder[placeholder.length - 1] + 1 : 1
};