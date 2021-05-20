/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // 2 ptrs => left, right
    // iterate over nums
    // [-100, 0] => [0, 10000]
    let l = 0
    let r = nums.length - 1
    let res = []
    
    //[-4,-1,0,3,10]
    //  l         r
    
    while (l <= r) {
        let l2 = nums[l] ** 2 // => 16
        let r2 = nums[r] ** 2 // => 100
        
        if (l2 > r2) {
            res.push(l2)
            l++
        } else {
            res.push(r2)
            r--
        }
    }
    
    return res.reverse()
};