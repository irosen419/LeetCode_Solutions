/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1
    if (n > 0) {
        let i = 1
        let e = x
        while (i < n) {
            x *= e
            i += 1
        }
        return x
    } else {
        n = n * -1
        return 1/(x**n)
    }

};