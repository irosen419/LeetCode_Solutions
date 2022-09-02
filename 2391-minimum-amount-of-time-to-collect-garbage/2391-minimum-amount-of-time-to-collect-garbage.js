/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let G = 0
    let P = 0
    let M = 0
    
    let driveTime = 0;
    
    let lastIndices = [-1, -1, -1]
    
    for (let i = 0; i < garbage.length; i++) {
        
        for (let j = 0; j < garbage[i].length; j++) {
            if (garbage[i][j] === 'G') {
                G += 1
                lastIndices[0] = i
            }
            if (garbage[i][j] === 'P') {
                P += 1
                lastIndices[1] = i
            }
            if (garbage[i][j] === 'M') {
                M += 1
                lastIndices[2] = i
            }
        }
    }
    
    console.log(G, M, P, lastIndices)
    
    for (let i = 0; i < lastIndices.length; i++) {
        let j = 0
        while (j < lastIndices[i]) {
            driveTime += travel[j]
            j++
        }
    }
    return G + M + P + driveTime
};