/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let nums = new Array(n)
​
    for (let i = 0; i < nums.length; i++) {
        nums[i] = start + 2*i
    }
​
    let bitwise = nums[0]
    for ( let i = 1; i < nums.length; i++) {
        bitwise ^= nums[i]
    }
    
    return bitwise
};
