/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s
    
    let maxLen = 0
    let maxStr = ""
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substring = s.substr(i, j - i + 1)
            let currentLen = isPalindrome(substring)

            if (currentLen > maxLen) {
                maxLen = currentLen
                maxStr = substring
            }
        }
    }
    
    return maxStr
    
    function isPalindrome(str) {
        let start = 0
        let end = str.length - 1
        
        while (start < end) {
            if (str[start] !== str[end]) {
                return -1
            }
            
            start++
            end--
        }
        
        return str.length
    }
};