/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let sideObj = {}

    for (let i = 0; i < rectangles.length; i++) {
        let smaller = Math.min(rectangles[i][0], rectangles[i][1])
        sideObj[smaller] = (sideObj[smaller] || 0) + 1
    }
    
    let maxSize = Math.max(...Object.keys(sideObj))

    return sideObj[maxSize]
};