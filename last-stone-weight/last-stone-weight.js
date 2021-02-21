/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a, b) => a - b)
    while (stones.length > 1) {
        let y = stones.pop()
        let x = stones.pop()
        
        if (x !== y) {
            stones.push(y - x)
        }
        stones.sort((a, b) => a - b)
    }
    return stones.length ? stones[0] : 0
};

// var smashStones = function(arr) {
//         if (!arr.length) return 0
//         if (arr.length === 1) return arr[0]
        
//         arr.sort((a, b) => a - b)
//         let y = arr.pop()
//         let x = arr.pop()
        
//         if (x !== y) {
//             arr.push(y - x)
//         }
    
//         return smashStones(arr)
//     }