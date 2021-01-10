/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let newWord = []
    for (let i = 0; i < indices.length; i++) {
        newWord[indices[i]] = s[i]
    }
    return newWord.join('')
};
