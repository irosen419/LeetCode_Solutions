/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let balloon = {b: 1, a: 1, l: 2, o: 2, n: 1}
    let total = 0
    
    let obj = {}
    let max = obj['b'] / balloon['b']
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] in balloon) {
            obj[text[i]] = ++obj[text[i]] || 1
            
        }
    }
    
    if (Object.keys(obj).length !== Object.keys(balloon).length) {
        return 0
    }
    
    while (true) {
        for (const letter in balloon) {
            obj[letter] -= balloon[letter]
            
            if (obj[letter] < 0) {
                return total
            }
        }
        total += 1
    }
};