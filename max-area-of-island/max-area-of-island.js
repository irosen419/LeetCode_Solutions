/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0
    let compass = [[-1, 0], [0, -1], [1, 0], [0, 1]]
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                flood([[i, j]])
            }
        }
    }
    
    return maxArea
    
    function flood(stack) {
        let currentArea = 0
        
        while (stack.length) {
            let [row, col] = stack.pop()
            if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0) {
                continue
            }
            
            currentArea++
            grid[row][col] = 0
            
            for (const direction of compass) {
                stack.push([row + direction[0], col + direction[1]])
            }
        }
        
        maxArea = Math.max(maxArea, currentArea)
    }
};