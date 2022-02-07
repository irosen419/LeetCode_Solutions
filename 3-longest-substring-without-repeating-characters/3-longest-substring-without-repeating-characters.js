/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let l = 0
    let r = 0
    
    let maxLength = 0
    
    while (r < s.length) {
        if (!set.has(s[r])) {
            set.add(s[r])
            r++
        } else {
            set.delete(s[l])
            l++
        }
        maxLength = Math.max(set.size, maxLength)
    }
    
    return maxLength
};