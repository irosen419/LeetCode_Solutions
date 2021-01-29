/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = new Array(numRows)
    triangle[0] = [1]
    triangle[1] = [1,1]
    if (numRows === 0) return []
    if (numRows === 1) {
        return [[1]]
    }
    if (numRows === 1) {
        return [[1],[1,1]]
    }
    let i = 2
    while (i <= numRows - 1) {
        triangle[i] = []
        triangle[i][0] = 1
        triangle[i][i] = 1
        let j = 1
        while (j < triangle[i].length - 1) {
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
            j++
        }
        i++
    }
    return triangle
};