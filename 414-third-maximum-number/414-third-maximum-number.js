/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (nums.length < 3) return Math.max(...nums)
    let set = new Set([...nums])
    
    if (set.size < 3) {
        return Math.max(...set)
    }
    
    let i = 0
    while (i < 2) {
        set.delete(Math.max(...set))
        i++
    }
    return Math.max(...set)
};