/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0
    let surrounding = [[-1,0], [1, 0], [0, 1], [0, -1]] 
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             let plot = grid[i][j]
//             if (plot === '1') {
//                 count++
//                 bfs([[i, j]]) 
//             }
//         }
//     }
//     return count
    
//     function bfs(queue) {

//         while(queue.length) {
//             let [row, column] = queue.shift()
//             if (row < 0 || column < 0 || row >= grid.length || column >= grid[0].length || grid[row][column] === '0') {
//                 continue
//             }
//             grid[row][column] = '0'
            
//             for (const plot of surrounding) {
//                 console.log([row, column], [row+plot[0], column+plot[1]])
//                 queue.push([row+plot[0], column+plot[1]])
//             }
//         }
//     }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let plot = grid[i][j]
            if (plot === '1') {
                count++
                dfs([i, j]) 
            }
        }
    }
    return count
    
    function dfs(coords) {
        let [row, column] = coords
        if (row < 0 || column < 0 || row >= grid.length || column >= grid[0].length || grid[row][column] === '0') {
            return
        }
        grid[row][column] = '0'

        for (const plot of surrounding) {
            console.log([row, column], [row+plot[0], column+plot[1]])
            dfs([row+plot[0], column+plot[1]])
        }
    }

};