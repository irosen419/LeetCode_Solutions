/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for (let i = 0; i < A.length; i++) {
        let k = A[i].length - 1
        for (let j = 0; j < A[i].length/2; j++) {
            let temp = A[i][j]
            A[i][j] = A[i][k]
            A[i][k] = temp
            k--
        }
    }
    
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            if (A[i][j] === 1) {
                A[i][j] = 0
            } else {
                A[i][j] = 1
            }
        }
    }
    
    return A
};