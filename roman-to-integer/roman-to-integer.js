/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let trans = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
    let num = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I') {
            if (s[i+1] === 'V') {
                num += 4
                i++
            } else if (s[i+1] === 'X') {
                num += 9
                i++
            } else {
                num += trans['I']
            }
        } else if (s[i] === 'X') {
            if (s[i+1] === 'L') {
                num += 40
                i++
            } else if (s[i+1] === 'C') {
                num += 90
                i++
            } else {
                num += trans['X']
            }
        } else if (s[i] === 'C') {
            if (s[i+1] === 'D') {
                num += 400
                i++
            } else if (s[i+1] === 'M'){
                num += 900
                i++
            } else {
                num += trans['C']
            }
        } else {
            num += trans[s[i]]
        }
    }
    return num
};
