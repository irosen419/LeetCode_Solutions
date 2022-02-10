/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        if (isInRange(matrix[i], target)){
            if (binarySearch(matrix[i], target)) {
                return true
            }
        }
    }
    
    return false
};

function binarySearch(array, target) {
    let l = 0;
    let r = array.length - 1
    let mid
    
    while (l <= r) {
        mid = Math.floor((l + r) / 2)
        if (target < array[mid]) {
            r = mid - 1
        } else if (target > array[mid]) {
            l = mid + 1
        } else {
            return true
        }
    }
    return false
}

function isInRange(array, target) {
    return target <= array.at(-1);
}