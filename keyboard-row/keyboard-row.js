/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let hash = {}
    let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
    
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].length; j++) {
            hash[rows[i][j]] = i + 1
        }
    }
    
    let output = []
    
    for (let i = 0; i < words.length; i++) {
        let rowNum = hash[words[i][0].toLowerCase()]
        console.log(rowNum)
        for (let j = 0; j < words[i].length; j++) {
            if (hash[words[i][j].toLowerCase()] !== rowNum) break
            if (j === words[i].length - 1) output.push(words[i])
        }
    }
    
    return output
};