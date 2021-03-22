/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let splitS = s.split(" ")
    if (pattern.length !== splitS.length) return false
    
    let patternObj = {}
    let wordObj = {}
    for (let i = 0; i < pattern.length; i++) {
        if (wordObj[splitS[i]] && pattern[i] !== wordObj[splitS[i]]) {
            return false
        } else if (!wordObj[splitS[i]] && patternObj[pattern[i]]) {
            return false
        }
        
        wordObj[splitS[i]] = pattern[i]
        patternObj[pattern[i]] = true
    }
    
    return true
};