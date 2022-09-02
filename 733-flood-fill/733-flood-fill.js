/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let curNum = image[sr][sc]
    
    if (curNum === color) return image
    
    dfs(sr, sc, image, curNum, color)
    
    return image
    
};

var dfs = function(r, c, image, startingNum, color) {
    
    if (invalidGridLoc(r, c, image.length, image[0].length)) return
    
    let curColor = image[r][c]
    if (curColor !== startingNum) return
    
    image[r][c] = color
    
    dfs(r - 1, c, image, startingNum, color)
    dfs(r + 1, c, image, startingNum, color)
    dfs(r, c - 1, image, startingNum, color)
    dfs(r, c + 1, image, startingNum, color)
}


function invalidGridLoc(r, c, imageLength, columnLength) {
    return (
        r < 0 
        || r >= imageLength 
        || c < 0 
        || c >= columnLength
    )
}