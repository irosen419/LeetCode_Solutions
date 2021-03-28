/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0
    let dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]]
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                calculator([[i, j]])
            }
        }
    }
    
    return maxArea
    
    function calculator(stack) {
        let currentArea = 0
        
        while(stack.length) {
            let [row, col] = stack.pop()
            if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0) {
                continue
            }
            
            grid[row][col] = 0
            currentArea++
            
            for (const dir of dirs) {
                stack.push([row + dir[0], col + dir[1]])
            } 
        }
        
        maxArea = Math.max(maxArea, currentArea)
    }
};