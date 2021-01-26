/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
        let letterObj = {}
    for (let i = 0; i < s.length; i++) {
        if (letterObj[s[i]]) {
            letterObj[s[i]]++
        } else {
            letterObj[s[i]] = 1
        }
    }
    console.log(letterObj)
    for (let i = 0; i < s.length; i++) {
        if (letterObj[s[i]] === 1) {
             return i
        }
    }
    
    return -1
};
