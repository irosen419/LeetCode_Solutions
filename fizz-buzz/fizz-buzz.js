/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    // create new array, length 15
    let res = new Array(n)
    
    // init i, 1
    let i = 1
    
    // check mod 3 and / or 5 for every number between 1 and n
    while (i <= n) {
        if (i % 15 === 0) {
            res[i++ - 1] = "FizzBuzz"
        } else if (i % 5 === 0) {
            res[i++ - 1] = "Buzz"
        } else if (i % 3 === 0) {
            res[i++ - 1] = "Fizz"
        } else {
            res[i - 1] = i.toString()
            i++
        }
    }
    
    return res
};