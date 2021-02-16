/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    let min = Number.POSITIVE_INFINITY

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else if (prices[i] - min > profit) { 
            profit = prices[i] - min
        }
    }
    
    return profit
};