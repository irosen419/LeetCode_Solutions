/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (!nums.length) return [-1, -1]
    if (nums.length === 1 && nums[0] === target) return [0, 0]
    let start = 0
        end = nums.length - 1
        result = new Array(2)

    while (result[0] === undefined || result[1] === undefined) {
        if (nums[start] !== target) {
            start++
        } else if (nums[start] === target && result[0] === undefined){
            result[0] = start
        }
        
        if (nums[end] !== target) {
            end--
        } else if (nums[end] === target && result[1] === undefined){
            result[1] = end
        }
        console.log(start, end, result)
        if (start > end) break
    }
    
    return result[0] !== undefined && result[1] !== undefined ? result : [-1, -1]
};