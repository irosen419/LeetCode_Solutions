/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    if (num === 0) {
        return 0
    }
    
    if (num % 2 === 0) {
        num = num / 2
    } else {
        num = num - 1
    }
    
    return 1 + numberOfSteps(num)
};
