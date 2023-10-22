/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let index = 0;
    const stringifiedX = String(x);
    for(char of stringifiedX) {
        if(char !== stringifiedX[stringifiedX.length - index - 1]) return false
        if(index == stringifiedX.length / 2 - 1) break
        index += 1;
    }

    return true
};