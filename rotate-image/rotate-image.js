/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // loop through and switch rows with their column counterparts
        // i.e. matrix[i][j] = matrix[j][i]
    // loop though again and flip matrix over y-axis
        // matrix[i][j] = matrix[i][j + n - 1]
    let n = matrix.length
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < n / 2; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[i][n-j-1]
            matrix[i][n-j-1] = temp
        }
    }
    
    return matrix
};