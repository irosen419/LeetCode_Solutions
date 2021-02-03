/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let first = nums.slice(0, nums.length-k)
    let last = nums.slice(nums.length-k)
    let array = last.concat(first)
    for (let i = 0; i < array.length; i++) {
        nums[i] = array[i]
    }
    return nums
};