/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let visited = new Array(image.length).fill([]).map(arr => new Array(image[0].length).fill(null))

    let m = image.length
    let n = image[0].length
    
    const directions = [[1,0], [0,-1], [-1, 0], [0, 1]];
    const originalNum = image[sr][sc];
    const queue = [];
    queue.push([sr,sc]);
        
    while (queue.length) {
        const currentLoc = queue.pop();

        const r = currentLoc[0];
        const s = currentLoc[1];
        
        if (r >= 0 && r < m && s >= 0 && s < n && !visited[r][s] && image[r][s] == originalNum) {
            visited[r][s] = true
            image[r][s] = newColor;
            for (const dir of directions) {
                queue.push([r + dir[0], s + dir[1]]);
            }
        }
    }

    return image;
};