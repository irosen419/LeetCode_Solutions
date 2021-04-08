/**
 * @param {character[][]} grid
 * @return {number}
 */
// var numIslands = function(grid) {
//     let count = 0 // 3
//     let compass = [[-1, 0], [0, -1], [1, 0], [0, 1]]
    
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             if (grid[i][j] === "1") {
//                 count++
//                 flood(i, j)
//             }
//         }
//     }
    
//     return count // => 3
    
//     grid = [
//   ["0","0","0","0","0"],
//   ["0","0","0","0","0"],
//   ["0","0","0","0","0"],
//   ["0","0","0","0","0"]
// ]
    
//     function flood(row, col) {
//         if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === "0") {
//             return
//         }
        
//         grid[row][col] = "0"
//         // [[-1, 0], [0, -1], [1, 0], [0, 1]]
//         for (const dir of compass) {
//             flood(row + dir[0], col + dir[1])
//         }
//     }
// };

class MirrorWorld {
    constructor() {
        this.islands = 0
        this.starterPoints = new Map()
        this.seen = {}
    }

    addPoint(row, col) {
        this.seen[row].push(col)
    }

    query(row, col, len, height, grid) {
        let dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]]
        this.seen[row] = this.seen[row] || []

        if (row < 0 || col < 0 || row >= len || col >= height || this.seen[row].includes(col) || grid[row][col] === "0") {
            return
        }

        this.addPoint(row, col)

        for (const dir of dirs) {
            this.query(row + dir[0], col + dir[1], len, height, grid)
        }

    }
}

var numIslands = function(grid) {
    let islandWorld = new MirrorWorld()

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            islandWorld.seen[i] = islandWorld.seen[i] || []
            if (grid[i][j] === "1" && !islandWorld.seen[i].includes(j)) {
                islandWorld.query(i, j, grid.length, grid[0].length, grid)
                islandWorld.starterPoints.set(i, j)
                islandWorld.islands++
            }
        }
    }

    return islandWorld.islands
}