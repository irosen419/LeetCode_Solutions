/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return []
    
    let res = []
    
    nums.sort((a, b) => a - b)
    // [-1,0,1,2,-1,-4] => [-4,-1,-1,0,1,2]
    
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1
        let k = nums.length - 1
        
        if ( i !== 0 && nums[i] === nums[i - 1]) continue
        
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            
            if (sum === 0) {
                res.push([nums[i], nums[j], nums[k]])
                j++
                while(j < k && nums[j] === nums[j - 1]) ++j
            } else if (sum < 0) {
                j++
            } else {
                k--
            }
        }
    }
    
    return res
};