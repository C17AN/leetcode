/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    let last = null;
    const numberQueue = []

    const numberMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for(char of s) {
        numberQueue.push(char);
    }

    for(number of numberQueue) {
        if(last === 'I' && number === 'V') result += 3;
        else if(last === 'I' && number === 'X') result += 8;
        else if(last === 'X' && number === 'L') result += 30;
        else if(last === 'X' && number === 'C') result += 80;
        else if(last === 'C' && number === 'D') result += 300;
        else if(last === 'C' && number === 'M') result += 800;
        else result += numberMap[number];
        last = number;

       
    }

 

    return result
};