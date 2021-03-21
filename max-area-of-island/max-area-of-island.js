/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]]
    
    let maxCount = 0
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                search([[i, j]])
            }
        }
    }
    
    return maxCount
    
    function search(queue) {

        let currentMax = 0
        while (queue.length) {

            let [row, col] = queue.shift()
            
            if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 0) {
                continue
            }
            
            grid[row][col] = 0
            currentMax++
            
            for (const dir of dirs) {
                queue.push([row + dir[0], col + dir[1]])
            }
            
        }
        
        maxCount = Math.max(currentMax, maxCount)
    }
};