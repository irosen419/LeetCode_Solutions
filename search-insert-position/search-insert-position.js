/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    let mid
    
    while (start <= end) {
        mid = Math.floor((start+end)/2)
        if (target < nums[mid]) {
            end = mid - 1
        } else if (target > nums[mid]) {
            start = mid + 1
        } else {
            return mid
        }
    }
    
    return start
};