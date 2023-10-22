/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const resultArr = Array(arr.length).fill(0);

    arr.forEach((el, index) => {
        resultArr[index] = fn(el, index)
    })

    return resultArr
};