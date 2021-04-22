/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pairs = {')':'(', ']':'[', '}':'{'}
    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        } else {
            let bracket = stack.pop()
            if (bracket !== pairs[s[i]]) {
                return false
            }
        }
        
    }
    
    return !stack.length
};