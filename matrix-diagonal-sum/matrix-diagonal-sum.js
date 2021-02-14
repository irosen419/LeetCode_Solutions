/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0
    let j = 0
    for (let i = 0; i < mat.length; i++) {
        j = i
        sum += mat[i][j]
        
    }
    let mid = []
    if (mat.length % 2) {
        let midpoint = Math.floor(mat.length / 2)
        mid = [midpoint, midpoint]
    }

    j = 0
    for (let i = mat.length - 1; i >= 0; i--) {
        if (mid.length && mid[0] === i && mid[1] === j) {
            j++
            continue
        }
        
        sum += mat[i][j]
        // console.log(i, j, mat[i][j], sum)
        console.log(mat[i][j])
        j++
        
    }
    
    return sum
};