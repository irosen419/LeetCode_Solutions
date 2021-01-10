/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let accountSums = accounts.map(accnt => accnt.reduce(sum, 0))
    return Math.max(...accountSums)
    
};
​
var sum = function(a, b) {
    return a + b
}
