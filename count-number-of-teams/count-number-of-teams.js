/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let overallCount = 0
    
    for (let i = 0; i < rating.length - 2; i++) {
        for (let j = i + 1; j < rating.length; j++) {
            for (let k = j + 1; k < rating.length; k++) {
                if (rating[i] < rating[j] && rating[j] < rating[k]) overallCount++
                if (rating[i] > rating[j] && rating[j] > rating[k]) overallCount++
            }
        }
    }
        
    return overallCount
};
