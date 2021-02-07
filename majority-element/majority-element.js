/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}
    let majority = nums.length / 2
    for (const num of nums) {
        obj[num] = (obj[num] || 0) + 1
    }
    
    for (const num in obj) {
        if (obj[num] > majority) {
            return num
        }
    }
};