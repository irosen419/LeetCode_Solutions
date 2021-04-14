/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if ( n < 3 ) return 1
    if (n == 3) return 2
    
    let threes = Math.floor(n / 3)
    let twos
    let remainder = n % 3
    
    if (remainder === 1) {
        threes -= 1
        twos = 2
    } else if (remainder === 2) {
        twos = 1
    } else {
        twos = 0
    }
    
    return 3 ** threes * 2 ** twos
};