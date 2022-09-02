/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let finalCount = 0
    let L = 0
    let R = 0
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') L++
        else if (s[i] === 'R') R++
        
        if (L === R && L !== 0) {
            finalCount++
            L = 0
            R = 0
        }
    }
    
    return finalCount
};