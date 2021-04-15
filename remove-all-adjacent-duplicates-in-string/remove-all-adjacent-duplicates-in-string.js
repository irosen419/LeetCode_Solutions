/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let i = 0
    let j = 1
    
    while (j < S.length) {
        if (S[i] === S[j]) {
            let first = S.substr(0, i)
            let second = S.substr(j + 1)
            S = first + second
            i--, j--
            continue
        }
        i++, j++
    }
    
    return S
};