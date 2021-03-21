/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0
    let compass = [[-1, 0], [0, -1], [0, 1], [1, 0]]
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++
                bfs(i, j)
            }
        }
    }
    
    return count
    
    function bfs(row, col) {
        
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === '0') {
            return
        }
        
        grid[row][col] = '0'
        
        for (const dir of compass) {
            bfs(row + dir[0], col + dir[1])
        }
    }
};