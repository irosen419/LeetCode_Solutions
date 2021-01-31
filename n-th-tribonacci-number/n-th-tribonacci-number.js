/**
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function(n) { //3
//     if (n === 0) {
//         return 0
//     }
    
//     if (n === 1 || n === 2) {
//         return 1
//     }
    
//     return tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1)
// };

var tribonacci = function(n) {
    let tri = [0,1,1]
    
    for (let i = 3; i <= n; i++) {
        tri[i] = tri[i-3] + tri[i-2] + tri[i-1]
    }
    
    return tri[n]
};