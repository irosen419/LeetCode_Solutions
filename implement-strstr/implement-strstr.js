/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") return 0
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let subStr = haystack.substr(i, needle.length)
            if (subStr === needle) return i
        }
    }
    return -1
};
