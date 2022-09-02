/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let driveTime = 0;
    
    let lastIndices = [-1, -1, -1]
    
    for (let i = 0; i < garbage.length; i++) {
        
        for (let j = 0; j < garbage[i].length; j++) {
            if (garbage[i][j] === 'G') {
                lastIndices[0] = i
            }
            if (garbage[i][j] === 'P') {
                lastIndices[1] = i
            }
            if (garbage[i][j] === 'M') {
                lastIndices[2] = i
            }
            
            driveTime += 1
        }
    }
    
    for (let i = 0; i < lastIndices.length; i++) {
        let j = 0
        while (j < lastIndices[i]) {
            driveTime += travel[j]
            j++
        }
    }
    return driveTime
};