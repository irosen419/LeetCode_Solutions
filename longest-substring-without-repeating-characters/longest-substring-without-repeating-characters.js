/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let i = 0
    let j = 0
    let maxLength = 0
    
    while (j < s.length) {
        if (!set.has(s[j])) {
            set.add(s[j])
            j++
        } else {
            set.delete(s[i])
            i++
        }
        maxLength = Math.max(maxLength, set.size)
    }
    
    return maxLength
};