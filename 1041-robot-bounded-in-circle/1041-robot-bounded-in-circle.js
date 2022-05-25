/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let currentLocation = [0, 0]
    let currentDirection = "N"
    let movementDictionary = {"N": [0, +1], "E": [+1, 0], "S": [0, -1], "W": [-1, 0]}
    
    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i] === "G") {
            let [x, y] = movementDictionary[currentDirection]
            currentLocation[0] += x
            currentLocation[1] += y
        } else if (instructions[i] === "L") {
            currentDirection = turn(-1, currentDirection)
        } else if (instructions[i] === "R") {
            currentDirection = turn(1, currentDirection)
        }
    }
    
    let [x, y] = currentLocation;
    
    return !(currentDirection === "N")||(x === 0 && y === 0) 
    
    function turn(direction, currentDirection) {
        const dirToIdx = {"N": 0, "E": 1, "S": 2, "W": 3};
        const cardinalDirections = ["N", "E", "S", "W"]
        if (currentDirection === "N" && direction === -1) {
            return "W"
        } else if (currentDirection === "W" && direction === 1) {
            return "N"
        }
        return cardinalDirections[dirToIdx[currentDirection] + direction]
    }
};

// obj determineNewLocation should take in currentLocation and currentDirection
// N = [0, +1]
// S = [0, -1]
// W = [-1, 0]
// E = [+1, 0]

// fxn determineNewDirection should take in currentDirection
// obj dirToIdx = {N: 0, E: 1, S: 2, W: 3}
// cardinalDirections = [N, E, S, W]
// newDirection = cardinalDirections[dirToIdx[currentDirection] +/- 1]

// Step 1: figure out where Robot ends up
// Step 2: figure out if it's an infinite loop