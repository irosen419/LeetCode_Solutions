/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magObj = {}
    for (const char of magazine) {
        magObj[char] = (magObj[char] || 0) + 1
    }
    
    for (const char of ransomNote) {
        if (magObj[char]) {
            magObj[char]--
        } else {
            return false
        }
    }
    
    return true
};