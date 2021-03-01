/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let map = {}
    let count = 0
    for (const num of nums) {
        if (map[num]) {
            count += map[num]++
        } else {
            map[num] = 1
        }
    }
    return count
};