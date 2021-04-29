/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let currentCount = 0
    let n = s.length
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === " " && s[i + 1] && s[i + 1] !== " ") {
            return currentCount
        }
        if (s[i] !== " ") {
            currentCount++
        }
    }
    return currentCount
};